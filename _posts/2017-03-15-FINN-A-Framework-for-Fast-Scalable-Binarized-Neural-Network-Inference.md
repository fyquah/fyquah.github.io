---
layout: post
title: FINN A Framework for Fast, Scalable Binarized Neural Network Inference
category: paper-review
---

*Umuroglu, Y., Fraser, N.J., Gambardella, G., Blott, M., Leong, P., Jahre, M. and Vissers, K., 2016. FINN: A Framework for Fast, Scalable Binarized Neural Network Inference. arXiv preprint arXiv:1612.07119. -- FPGA 2017*

[Link to paper on arVix](https://arxiv.org/pdf/1612.07119.pdf)

There is recent research on pruning the size of neural networks as it is suggested that
neural networks have a lot of redundancy in it. This paper discusses mapping neural
network inferences stage to hardware using pure binary operators, which is yet another
step forward in getting faster inferences.

## Motivation

This sounds like a natural way forward for hardware-acceleration for neural networks,
as binary operations on ASICs and FPGAs are very efficient. One of the challenges,
however, is preserving accuracy of the results of the inference. The authors have
ran tests on accuracy tests of 3-layer neural networks classifiers, using both
binarized and standard floating point neural networks.

![Accuracy](/images/papers/finn/ops_table.png)

The results suggests a simple idea - to achieve a desired accuracy, we will need
a larger network size, to compensate for the loss in accuracy, based on the data
gathered above. The question that remains - will introducing a larger network size
result in a slower network?

Fortunately, no. The authors have designed a roofline model to quantify the peak
performance of BNNs on FPGAs, versus 8-bit number and floating point numbers. They
also go on to state that because the weights are small (binary numbers), it is possible
to store everything on the on-chip memory, which means the computation on BNNs will
be compute-bound rather than memory-bound.

![Roofline model of the BINN performance](/images/papers/finn/roofline_model.png)

## BNN-specific Operators Optimization

BNN layers have the following properties:

- An unset bit represents -1 and a set bit represents 1
- Batch normalization prior to activation function
- Activation function is the sign function, i.e: `sgn(x) = (x > 0 ? +1 : -1)`

With the following optimizations:

**(1) PopCount**

As BNN deals only with binary numbers, instead of summing the values in a dot product,
the operation can be implemented as a *popcount* operations (basically counting the
number of set bits). It uses roughly half the LUTS and FF compared to a bi-polar accumulator.

**(2) Batchnorm Activation using Threshold**

Batchnorm activation is simplified to a single threshold operation. The value of the
threshold can be easily obtained by plugging `0` into the RHS of the BatchNorm equation.

**(3) Pooling**

Max pooling is done using a boolean OR operation. In a pooling layer with activation, due
to the distributive nature of the max operator, `a = (max(x1, x2, x3, ...) > T)` can be
written as `a = (x1 > T) OR (x2 > T) OR (x3 > T) ...`. Similar principles applies to min
pooling (AND operator) and average pooling (Majority function).

## Hardware Library

The work focuses on generating FPGA designs for specific neural network architecture
and supports convolutional, pooling and fully connected layers. The bits for the input of
convolution and pooling layers uses line buffers (which can be either shift registers or
on-chip-memory) and in the cast of convolution, interleave operations. The paper also uses
a Matrix-Vector-Threshold Unit to perform folded matrix multiplications (i.e: not
fully unrolled). The main idea behind folding is to fit the design in the limited resources
of the FPGA. The folding is parameterized by two values, each defining the amount of folding
to be done on each axis of the synapse weight matrix.

![MVTU design](/images/papers/finn/mvtu.png)

The BNN accelerator takes in user-imposed constraints (FPGA target, FPS, throughput targets)
and determines the suitable folding factors (defined above) to meet those constraints. The
hardware design generated is synthesizable Vivado HLS C++ code.

## Results

The work on FINN has been evaluated on MNIST, CIFAR10 and cropped SVHN datasets with the SFC,
LFC and CNV network topologies. The particularly interesting graph is the performance of
these designs compared to the roofline model. While they are at some cases not close to
the roofline model, in all the implemented nets, they outperform the roofline model of
FP-32 precision inference architectures.

![Performance w.r.t Roofline model](/images/papers/finn/performance.png)

The performance of these binarized nets are within 3% of similar nets implemented with
floating points operations. It was suggested that accuracy can be improved by using
larger BNNs, but no result was shared on this. (The closest mention to such result would
be the benchmark mentioned earlier in this review).
