---
layout: post
title: Getting C++ Compilation Right
subtitle:

excerpt:

---

Lately, I've been having trouble getting C++ compilation right on my Macbook Pro. In part I blame the various hiccups in the difference from standard unix compilation conventions (a mild one, for example, being `.so` vs `.dylib`, but more, I blame the lack of intuitive documentations. This blog post should serve as a documentation (primarily for my personal reference) should I encounter a familiar issue in the future.

I will incrementally update this post as I figure out new things to add.

## Framework

Framework is a Mac OS specific way of packaging header files and dynamic libraries together. A framework is a directory with the name `*.framework`

By default, the compiler looks for frameworks in `/System/` and `/`. To add new directory to the framework search path, use the `-F` flag.

To compile with a framework, pass in a `-framework` argument.

```bash
# Assume you have /path/to/Awesome.framework
g++ -F/path/to -framework Awesome -framework main.cpp
```

To use the header files provided by a framework, simply prefix the header files in the `#include` directive with the name of the framework. for example, if the framework Awesome provides `fast_math.h`, you should use `#include <Awesome/fast_math>` or `#include <Awesome/fast_math.h>`.


## Linking

There are a lot of ground to cover in linking, here are some hiccups that will possible happen:

- `-undefined dynamic_lookup` - useful when you want to defer symbol lookup verification to runtime. This option is rarely useful, but writing a LLVM pass on MacOS requires it when linking the llvm dynamic library.
- `-L` specifies dynamic lookup libraries.
- `-lname` looks for `libname.dylib` in the specified dylib lookup directories.

## QT

This isn't general to c++ on Mac OS. QT is popular (and unconventional) enough to justify a section here.

QT uses a macro called `QT_OBJECT`, which makes some dynamic code for internal usage. You will need to run a custom preprocessor called `moc` on your header files, which generate a C++ binary. Example:

```bash
moc barchart.h -o moc_barchart.cpp
```

Chances are you have used additional `#include` macros in your header files with custom header look up directories. In that case, you should pass those flags to `moc` too:

```bash
moc -I/path/to/qt -I/path/to/some/library barchart.h -o moc_barchart.cpp
```



## References

- [https://lists.macports.org/pipermail/macports-dev/2014-January/025708.html]()
