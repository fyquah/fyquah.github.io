---
title: Shell Commands Cheat Sheet
layout: static
---

Conditional statement in bash (Embarassingly, as I write this, I have programmed for > 6 years)

```bash
# String equality
if [ "$hello" = "1" ]; then
 echo "test"
fi
```

Integer arithmetic in bash

```bash
a=123
let b=a+1
echo "$a"
```

Creating a pdf graph visualization with pdf

```bash
 (cat << EOM
digraph main {
  a -> b;
  b -> c;
  b -> d;
}

EOM 

subsh> ) | dot -Tpdf -o a.pdf
```

Useful rpm / dnf commands

```bash

# Option switch to disable syncing with metadata server
dnf -C ...

# Reading the contents of an rpm
(mkdir tmp; cd tmp; rpm2cpio ../my.rpm | cpio -i -d)

# Poking an RPM file to see what file it provides
dnf query --installed foo.rpm

# Modifying the post-install and pre-install hook scripts of an rpm file
rpmrebuild

# List all (installed) packages
dnf list
dnf list installed
```
