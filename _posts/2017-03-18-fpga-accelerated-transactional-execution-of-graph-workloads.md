---
layout: post
title: FPGA-Accelerated Transactional Execution of Graph Workloads
category: paper-review
---

*Ma, X., Zhang, D. and Chiou, D., 2017, February. FPGA-Accelerated Transactional Execution of Graph Workloads. In Proceedings of the 2017 ACM/SIGDA International Symposium on Field-Programmable Gate Arrays (pp. 227-236). ACM. -- FPGA 2017*

[Link to paper](http://dl.acm.org/citation.cfm?id=3021743)

The main contribution of this paper is proposing a hardware-based transactional memory system
that does not modify the "cache stack", as graph data are not suited for conventional caches.
The main challenges faced in conventional TM systems are:

- **Increased concurrency** - higher latency due to increased conflicts
- Asynchronous systems **cannot use synchronized commit**. Some prior work on HTM and GPUs in
  general utilizes synchronization on commit.
- **Livelock** will cause transactions to fail
- Cache-based TMs for graphs are simply not good, since graphs are **not cache friendly**.


## Architecture of Accelerator

![Architecture Overview](/images/papers/fpga-tm-graph/arch.png)

- **Global Shared Memory** - single view of graph structure
- **Work Memory** - work data is fecthed by the worklist. Unbounded
- **Thread-Private scratchpad Memory** - intermediate results and speculative data.
  (Threads start with a clean scratch pad)
- **Processing Engine** - Each processing engine has a number of threads which can hold either
  regular / irregular microprocessor or custom FPGA logic. Each engine executes a single thread
  at any given point in time. Context switch happens during a off-chip memory fetch to hide
  memory latency.

The workflow of a single thread is as follows:

1. Fetch task from the worklist.
2. Fetch and update global graph structure as needed. Use local private scratchpad memory
   to record speculative data.
3. Commit when done, handle abort when necessary.
4. Write new tasks to the worklist.

The tasks are scheduled and distributed by the work schedulers on the work memory.
Different scheduler can be used, although the paper did mention that simple
non-priority-based scheduling algorithms such as FIFO and LIFO have achieved better
results, i.e: less aborts due to conflicts.

The question remains (in step 2 above):

- How do we know if there is a read / write conflict?
- Do we write speculative values into the off-chip memory or into local memory and flush
  it at commit time? In the former case (eager), we will need to have some kind of undo
  mechanism.

## Conflict Detection

The paper proposes the usage of something called an address signature table (AST).
The AST is a shared-directory and lock-based mechanism, that uses caches-like semantics
(N-way associative). It can be used with on-chip or off-chip memory to achieve either
performance our lower conflict rate (with larger ASTs).

The algorithm is given in section 5.4.3 of the original paper. The algorithm can be
mapped roughly to the following pseudocode:

~~~python

SET_SIZE = ... # The number of entries an ASTSet can support.


class AstEntry:

  write_bit = ...  # type: bool
  valid_bit = ...  # type: bool
  thread_id = ...  # type: int[log2(n_threads)]


class AstSet:

  # entries is a "list" of size SET_SIZE
  entries = ...  # type: List[AstEntry]
  entries_count = ... # type: int

  def conflict_detection(self, thread_id, address, is_read):

    if is_read:  # read access
      # If thread already owns this location, it means no conflicts
      # will happen
      for entry in self.entries:
        if entry.valid and entry.thread_id == thread_id:
          return True

      if entries_count == SET_SIZE:
        return False

      for entry in self.entries:
        if entry.valid_bit and entry.write_bit:
          return False

      entries[entries_count].thread_id = thread_id
      entries[entries_count].valid_bit = True
      entries[entries_count].write_bit = False
      entries_count += 1
      return True

    else:  # write access
      # Write access must be exlusive - only one thread can write to
      # the location at any point in time.
      for entry in self.entries:
        if entry.valid_bit and entry.write_bit and entry.thread_id != thread_id:
          return False
      return True


class Thread:

  thread_id = ...  # type: int
  lock_log = ... # type: List[int]

  def access_global_memory(self, address, is_read):
    # get_ast_set is simply uses a hash function to determine
    # which ast_set to be fetched.
    ast_set = get_ast_set(address)
    ast_set.lock()
    okay = ast_set.conflict_detection(self.thread_id, address, is_read)

    # Optimization: only append to lock_log if a new entry is created in
    #               the ast sets.
    if okay:
      lock_log.append(ast_set, address)
    else:
      abort()

  def commit(self):
    self._clear_lock_table()
    write_memory_actions()   # only if we are in lazy versioning.

  def abort(self):
    self._clear_lock_table()
    undo_memory_actions()    # only if we are in eager versioning.

  def _clear_lock_table(self):
    for ast_set in lock_log:
      ast_set.release_lock()

~~~

*P/S: I am not quite sure what did the authors mean when they acquire locks. From what
I understand, the whole point is to be asynchronous - hence having locks here makes
it wrong. A lock around updating the state entries make sense (to prevent write races),
but holding them for the entire transaction doesn't make much sense to me. I'd assume
the authors mean a lock on having the thread's entry in the AST, and the thread's
entry is invalidated when the lock is released.*

The AST uses a very large chunk of memory. It can be partitioned to slices, so that
it can be mapped to different BRAM resources to facilitate parallel access. Such benefits
for fully off-chip ASTs would be negligible, as the parallel access bandwidth will be
capped by the memory bandwidth, as the number of I/O ports would be the same. The
semantics of the algorithm will not change - this is simply an implementation optimization
as on-chip memory is finite number of read ports.

The above algorithm might suffer *livelock*. That is, a process that aborts because of a conflict
causes another process to abort, which in turns causes another process abort. If the abort
chain forms a cycle, there will be infinitely many wasted cycles. This problem can be
mitigated by disabling a certain number of threads when the conflict rate passes a
certain threshold.

## Version Management

Most existing work in the area of TM uses lazy version management as data can be stored
on the local cache buffer before flushing it to off-chip memory. In this work, however,
such constraints do not apply.

Lazy evaluation can be accomplished by flushing committed data on the off-chip
memory from the thread-local write buffer when a thread commits successfully. The logic
for write-buffer, however, is not trivial, as it has to account for cache-coherence
protocols, which is outside the discussion. I'd point you to the [FlexTM [1]](http://ieeexplore.ieee.org/abstract/document/4556722/)
proposed by Shriraman et al. that's based on the MESI.

Eager evaluation can be accomplished by writing speculative data directly to global memory
and keeping a LIFO undo log. This is similar to how databases work. When a transaction
commits, nothing extra needs to be done. When the transaction aborts, the elements undo log
popped written back into memory.

Eager evaluation is arguably more favourable as:

- It doesn't require a complex buffering and writing mechanism.
- rollbacks do not happen too often in graph algorithms, which is a requirement for
  scalable performance anyway.
- It doesn't require an associative search on the write buffer.

## Performance Evaluation

The authors have ran several graph algorithms on several networks. See section 6.1.1
for the exact algorithms used.  In general, the performance is 2.14x of those of CPU,
with a significantly lower power usage.  Without accounting for DRAM power usage,
FPGA implementation is 22x more power efficient than those of CPU.

The case where CPU out performed the FPGA is BFS on RMAT graphs. RMAT graphs have small
diameter (maximum distance between nodes) and large vertex degrees (average fanout of nodes).
The authors backed this with data from running single threaded FPGA implementations, and found
that using 256 thread only produces 130x improvement in speed, while the CPUs
(with 24 theards) are 30x faster than the FPGAs tested. In my view, this could be because
pure BFS is a relatively simple algorithm that fits happily into the cache of the CPU,
which reduces off-chip memory access significantly.


## References

[1] Shriraman, A., Dwarkadas, S. and Scott, M.L., 2008, June. Flexible decoupled transactional memory support. In Computer Architecture, 2008. ISCA'08. 35th International Symposium on (pp. 139-150). IEEE.
