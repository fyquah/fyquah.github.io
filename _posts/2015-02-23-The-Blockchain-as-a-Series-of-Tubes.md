---
layout: post
title: The Blockchain As A Series Of Tubes
subtitle:

excerpt:

---

This piece can be thought as a follow up to my previous piece on the combination of computer science and economics in a new money. You can check it out [here](http://www.fyquah.me/computer-science-and-economics-lecture-in-45-minutes/). However, it is safe to read this piece alone. No reference will be made to the previous article.

Trying to understand from a non-computer science persepective is definitely a great challenge (As someone with a good amount of knowledge in software, I also find it hard to understand). Ian Stewart took a differnt way about thiking about how the blockchain works.

# Where are we now?

Let's start from how our financial and monetary system works. The current system has:

* No decentralization
* No blocks
* No origin

Let's get started.

# Tubes

We can imagine tubes to be a similiar anology to bank accounts. They contain a certain amount of value. However, as contrast to bank accounts, we cannot remove a certain amount from the tubes and leave a non-zero balance behind. Rather, once we open it, as described by Ian, all the essence of the tube will blast of, leaving an old empty tube behind. It is like a bank account, but once you remove money from it, you essentially destroy it while all the money are in your ends.

On the edge of these tubes, there is a label on it, called the public key. You will need to generate a series of numbers (as a matter of fact, a 64 byte number), that matches the public key. *Note that matches does not mean equivalent, rather, it means a number / signature that agrees with the public key*. Only then, you can access the tube's juice (value) and let it flow to wherever you want it to. Trying to brute force this number will take years and ages (Mathematically speaking, 9 billion years), but with a corresponding magical key, you generate that number fairly easily in a matter of seconds. That key, is called the private key.

<div class="full zoomable"><img src="/images/blockchain-tubes.png"></div>

# Transactions

Now that we have tubes of juices (analogy for output with certain value of Bitcoins), we can create a region of magical happenings (analogy for transaction). Inside this region, some tubes will blast open and get destroyed, while some new tubes will be generated, being sealed by public keys. These public keys defines who can open this tube. To actually achieve things like blasting open a tube but only sending a small fraction to someone, we can creation to output tubes. One tube is sealed with the recipients' public key while the other is sealed with our public key.

Ian highlighted that while it is perfectly fine for banks to implement their financial system this way, it might not actually be suitable  as it takes a great load of computational power (as in, having a good number of super computers at the basement of the banks). Being a centralized entity means having information in control, which means it might be more logical to simply just use a good old database.

<div class="full zoomable"><img src="/images/blockchain-transactions.png"></div>

# Decentralization

Here is where decentralization comes in. In a conventional centralized database, the admin has an authority to determine whether a transaction has actually taken place. However, in the case of Bitcoin, we want a decentralized platform - we can't afford to have such an authority!

The way Bitcoin works around it is grouping several transactions togeter, and many people in the world will start computing the a mathematical problem (SHA-256 Hash) of the group of transactions. The goal is to simply solve the problem, by adjusting the nounce, so that the output is strictly greater than a certain value (which is dynamically set based on the network difficulty).

Notice how this is decentralize. Rather than having one person owning a master key to solve all the problems in the world, we have everyone in the world trying to compute the right answer for the solution. The effort to solve it, which is highly decentralize, encourages us open network rather than a closed one.

Once someone manages to work out the solution, he will broadcast it to the world.

<div class="full zoomable"><img src="/images/blockchain-block.png"></div>

# Blocks

The group of transactions, as mentioned from the previous section, is called a block. Every block contains a block header, which in turns a solution. This solution is computationally hard to create, but increibly cheap to verify.

The notion of using blocks as a manner of proof of work elegantly solves a fundamental problem in computer science, called [double spending](http://en.wikipedia.org/wiki/Double-spending). The interesting fact is inside each block, there is a part in the header which points to the previous header (more accurately, the hash of it). Hence, we will get what we call the blockchain, which is technically a chain of blocks as suggested by the name.

To truly understand how hard the problem is, it is inevitable to learn more about [cryptographic hash functions](http://en.wikipedia.org/wiki/Cryptographic_hash_function). The gist of the wiki link above is *a cryptographic hash function is a one way function, whose output will change unexpectedly while changing the input by the most slightest bit.*

<div class="full zoomable"><img src="/images/blockchain-blockchain.png"></div>

The blocks, pointing to a previous block, suggest a great statistical signifiance. Once a block chain of some length is created, the probability some one can make a false history decreases exponentially. In other words, when two blocks are alligned to one another, both have simliar probability to progeress. However, once one blocks' length grows by one block, the chances of the other block to catch up will be squared, making it **p ^ 2**. As the other block progresses further, and further, the probability will eventually be **p ^ (n+1)**, a number that will decay to zero, regardless of the value of p(which is strictly between 0 and 1).

<div class="full zoomable"><img src="/images/blockchain-graph.png" /></div>
*Regardless of the value of p, the graph will decay to zero . It is a matter of the value of x required to make that p ^ x insignificant.*

So now that we have a block chain, what motivates people (or, machines) to solve these computationally hard problems?

# Origin

Inside every block, there is a transaction which creates a new tube out of nowhere. These transactions are the origins of the tubes in the bitcoin ecosystem. Unlike transactions where tubes have to come in and new tubes are produced, these transactions create tubes out of nowhere. These money come out from thin air to reward people who have spent a great amount of computational power. These people are in fact, called miners. These transactions are called coinbase transactions and the origin of coins in the Bitcoin blockchain.

It is amazing to think about how simple computer science principles can be combined to make a functional decentralized monetary system.

# Imperfection

Like all software, Bitcoin is imperfect. Two main problems are highlighted:

### 50% Attack

Going back to the probability problem in creating a false history. While unlikely, computer scientist are not willing to rule out the possibility that someone in the world owns a very high amount of computational power. With someone controlling the blockchain, we lose the main advantage that it is decentralized. Besides that, this provides a single point of attack for people who condemn the currency.

In fact, such scenario is possible. Considering that Bitcoin mining uses (only) around 0.4% of the Nuclear Power generated in the world, such attacks would be possible to carry out.

### Quantum Computers

The tubes are sealed using the [ECDSA](http://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) pub-key cryptography. Quantum computers normally reduce most computation by a half exponent (i.e., square root of it). For example, it reduces brute forcing 2^256 numbers to a problem that takes 2^128 time. Hence, in the case of Quantum Computers, SHA-256 might be replaced by SHA-512. However, the main issue is ECDSA. ECDSA is very vurnable to Quantum attacks. Trying to guess the private key from the public key with modern computers would take exponential time. Using Quantum computers, however, takes only **logarithmaic** time, a significant decrease. There are some research being done of this, one of the being the proposal of [Lamport Signatures](http://en.wikipedia.org/wiki/Lamport_signature) as a replacement.

# Wrapping Up

The talk wrapped up with a round of applause and presentation of projects by student. I presented [equityBits](https://www.equitybits.cc/), and won the first Imperial Bitcoin Forum with it :). Still, my greatest bring away from the day is how Ian Stewart managed to make Blockchain so easily understood for all of us by using tubes, rather than diving straight into the technical jargon.

Once again, many thanks to Ian Stewart for coming up with such a great piece!
