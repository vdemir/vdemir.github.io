---
layout: post
title:  Python 3.7 Virtual Env
description: The venv module provides support for creating lightweight “virtual environments” with their own site directories, optionally isolated from system site directories
excerpt: The venv module provides support for creating lightweight “virtual environments” with their own site directories, optionally isolated from system site directories
summary: "Python 3.7 Virtual Env"
keywords: linux, python, VirtualEnv
categorie: Programlama
tags:   Python Linux 
categories: Python
permalink: /:categories/:title/
date:   2019-02-26 12:00:00
last_updated: 2019-02-26 12:00:00
comments: false
published: true
lang: en
redirect_from:
  - /python/Python_Venv/
  - /VirtualEnv/
---

## Python 3.7 “Virtual Env”
The venv module provides support for creating lightweight “virtual environments” with their own site directories, optionally isolated from system site directories. Each virtual environment has its own Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directories.

![Installing Python Setup Tools & Virtual Env.](/images/virtualenv.jpg "Installing Python Setup Tools & Virtual Env."){:height="57%" width="57%"}

Python Setup Tools & Virtual Env.


- venv is available by default in Python 3.3 and later, and installs pip and setuptools into created virtual environments in Python 3.4 and later.

{% highlight bash %}
Using venv:

python3 -m venv <DIR>
source <DIR>/bin/activate
{% endhighlight %}

Running this command creates the target directory (creating any parent directories that don’t exist already) and places a pyvenv.cfg file in it with a home key pointing to the Python installation from which the command was run. It also creates a bin (or Scripts on Windows) subdirectory containing a copy/symlink of the Python binary/binaries (as appropriate for the platform or arguments used at environment creation time). It also creates an (initially empty) lib/pythonX.Y/site-packages subdirectory (on Windows, this is Lib\site-packages). If an existing directory is specified, it will be re-used.

{% highlight python %}
usage: venv [-h] [--system-site-packages] [--symlinks | --copies] [--clear]
            [--upgrade] [--without-pip] [--prompt PROMPT]
            ENV_DIR [ENV_DIR ...]

Creates virtual Python environments in one or more target directories.

positional arguments:
  ENV_DIR               A directory to create the environment in.

optional arguments:
  -h, --help            show this help message and exit
  --system-site-packages
                        Give the virtual environment access to the system
                        site-packages dir.
  --symlinks            Try to use symlinks rather than copies, when symlinks
                        are not the default for the platform.
  --copies              Try to use copies rather than symlinks, even when
                        symlinks are the default for the platform.
  --clear               Delete the contents of the environment directory if it
                        already exists, before environment creation.
  --upgrade             Upgrade the environment directory to use this version
                        of Python, assuming Python has been upgraded in-place.
  --without-pip         Skips installing or upgrading pip in the virtual
                        environment (pip is bootstrapped by default)
  --prompt PROMPT       Provides an alternative prompt prefix for this
                        environment.
{% endhighlight %}

A virtual environment is a Python environment such that the Python interpreter, libraries and scripts installed into it are isolated from those installed in other virtual environments, and (by default) any libraries installed in a “system” Python, i.e., one which is installed as part of your operating system.
A virtual environment is a directory tree which contains Python executable files and other files which indicate that it is a virtual environment.

Common installation tools such as Setuptools and pip work as expected with virtual environments. In other words, when a virtual environment is active, they install Python packages into the virtual environment without needing to be told to do so explicitly.


* [https://docs.python.org/3/library/venv.html](https://docs.python.org/3/library/venv.html)


{% highlight bash %}
!#/bin/sh
a=3687
for i in *.jpg; do
  new=$(printf "%01d.jpg" "$a") #04 pad to length of 4
  mv -i -- "$i" "$new"
  let a=a+1
done


for i in `cat list.txt`; do
  wget https://archive.org/download/kelimemealliquran/kelimemealliquran_jp2.zip/kelimemealliquran_jp2%2Fkelimemealliquran_${i}.jpg
done
{% endhighlight %}

[![Django App in Minutes]({{base.url}}/images/venv/venv2.jpg)](https://vdemir.github.io/Django_App)









