---
layout: post
title:  Python 3.7 Virtual Env
date:   2019-02-26 12:00:00
last_updated: 2019-02-26 12:00:00
keywords: linux, python3, VirtualEnv
summary: "Python 3.7 Virtual Env"
excerpt: This post is about Virtual.
categorie: Programlama
tags:   Python3 Linux VirtualEnv Doc
categories: [Python3]
permalink: /VirtualEnv/
comments: false
published: true
lang: en
---
 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- Opsiyonel tema -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
![Installing Python Setup Tools & Virtual Env]({{base.url}}/images/venv/venv1.jpg)

## Python 3.7 “Virtual Env”
The venv module provides support for creating lightweight “virtual environments” with their own site directories, optionally isolated from system site directories. Each virtual environment has its own Python binary (which matches the version of the binary that was used to create this environment) and can have its own independent set of installed Python packages in its site directories.

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

### An example of extending EnvBuilder

The following script shows how to extend EnvBuilder by implementing a subclass which installs setuptools and pip into a created virtual environment:

<script>
function myFunction() {
    if (document.getElementById('id01').style.display === 'none') {
        document.getElementById('id01').style.display='block';
    } else {
        document.getElementById('id01').style.display='none';
    }
}
</script>


<button  onclick="myFunction()">pyvenvex.py - [Göster]/[Gizle]</button> 

<div id="id01" style="display:none">

 {% highlight python  linenos=table %}

#
# Copyright (C) 2013 Vinay Sajip. New BSD License.
#
import os
import os.path
from subprocess import Popen, PIPE
import sys
from threading import Thread
from urllib.parse import urlparse
from urllib.request import urlretrieve
import venv

class ExtendedEnvBuilder(venv.EnvBuilder):
    """
    This builder installs setuptools and pip so that you can pip or
    easy_install other packages into the created environment.

    :param nodist: If True, setuptools and pip are not installed into the
                   created environment.
    :param nopip: If True, pip is not installed into the created
                  environment.
    :param progress: If setuptools or pip are installed, the progress of the
                     installation can be monitored by passing a progress
                     callable. If specified, it is called with two
                     arguments: a string indicating some progress, and a
                     context indicating where the string is coming from.
                     The context argument can have one of three values:
                     'main', indicating that it is called from virtualize()
                     itself, and 'stdout' and 'stderr', which are obtained
                     by reading lines from the output streams of a subprocess
                     which is used to install the app.

                     If a callable is not specified, default progress
                     information is output to sys.stderr.
    """

    def __init__(self, *args, **kwargs):
        self.nodist = kwargs.pop('nodist', False)
        self.nopip = kwargs.pop('nopip', False)
        self.progress = kwargs.pop('progress', None)
        self.verbose = kwargs.pop('verbose', False)
        super().__init__(*args, **kwargs)

    def post_setup(self, context):
        """
        Set up any packages which need to be pre-installed into the
        environment being created.

        :param context: The information for the environment creation request
                        being processed.
        """
        os.environ['VIRTUAL_ENV'] = context.env_dir
        if not self.nodist:
            self.install_setuptools(context)
        # Can't install pip without setuptools
        if not self.nopip and not self.nodist:
            self.install_pip(context)

    def reader(self, stream, context):
        """
        Read lines from a subprocess' output stream and either pass to a progress
        callable (if specified) or write progress information to sys.stderr.
        """
        progress = self.progress
        while True:
            s = stream.readline()
            if not s:
                break
            if progress is not None:
                progress(s, context)
            else:
                if not self.verbose:
                    sys.stderr.write('.')
                else:
                    sys.stderr.write(s.decode('utf-8'))
                sys.stderr.flush()
        stream.close()

    def install_script(self, context, name, url):
        _, _, path, _, _, _ = urlparse(url)
        fn = os.path.split(path)[-1]
        binpath = context.bin_path
        distpath = os.path.join(binpath, fn)
        # Download script into the env's binaries folder
        urlretrieve(url, distpath)
        progress = self.progress
        if self.verbose:
            term = '\n'
        else:
            term = ''
        if progress is not None:
            progress('Installing %s ...%s' % (name, term), 'main')
        else:
            sys.stderr.write('Installing %s ...%s' % (name, term))
            sys.stderr.flush()
        # Install in the env
        args = [context.env_exe, fn]
        p = Popen(args, stdout=PIPE, stderr=PIPE, cwd=binpath)
        t1 = Thread(target=self.reader, args=(p.stdout, 'stdout'))
        t1.start()
        t2 = Thread(target=self.reader, args=(p.stderr, 'stderr'))
        t2.start()
        p.wait()
        t1.join()
        t2.join()
        if progress is not None:
            progress('done.', 'main')
        else:
            sys.stderr.write('done.\n')
        # Clean up - no longer needed
        os.unlink(distpath)

    def install_setuptools(self, context):
        """
        Install setuptools in the environment.

        :param context: The information for the environment creation request
                        being processed.
        """
        url = 'https://bitbucket.org/pypa/setuptools/downloads/ez_setup.py'
        self.install_script(context, 'setuptools', url)
        # clear up the setuptools archive which gets downloaded
        pred = lambda o: o.startswith('setuptools-') and o.endswith('.tar.gz')
        files = filter(pred, os.listdir(context.bin_path))
        for f in files:
            f = os.path.join(context.bin_path, f)
            os.unlink(f)

    def install_pip(self, context):
        """
        Install pip in the environment.

        :param context: The information for the environment creation request
                        being processed.
        """
        url = 'https://raw.github.com/pypa/pip/master/contrib/get-pip.py'
        self.install_script(context, 'pip', url)

def main(args=None):
    compatible = True
    if sys.version_info < (3, 3):
        compatible = False
    elif not hasattr(sys, 'base_prefix'):
        compatible = False
    if not compatible:
        raise ValueError('This script is only for use with '
                         'Python 3.3 or later')
    else:
        import argparse

        parser = argparse.ArgumentParser(prog=__name__,
                                         description='Creates virtual Python '
                                                     'environments in one or '
                                                     'more target '
                                                     'directories.')
        parser.add_argument('dirs', metavar='ENV_DIR', nargs='+',
                            help='A directory to create the environment in.')
        parser.add_argument('--no-setuptools', default=False,
                            action='store_true', dest='nodist',
                            help="Don't install setuptools or pip in the "
                                 "virtual environment.")
        parser.add_argument('--no-pip', default=False,
                            action='store_true', dest='nopip',
                            help="Don't install pip in the virtual "
                                 "environment.")
        parser.add_argument('--system-site-packages', default=False,
                            action='store_true', dest='system_site',
                            help='Give the virtual environment access to the '
                                 'system site-packages dir.')
        if os.name == 'nt':
            use_symlinks = False
        else:
            use_symlinks = True
        parser.add_argument('--symlinks', default=use_symlinks,
                            action='store_true', dest='symlinks',
                            help='Try to use symlinks rather than copies, '
                                 'when symlinks are not the default for '
                                 'the platform.')
        parser.add_argument('--clear', default=False, action='store_true',
                            dest='clear', help='Delete the contents of the '
                                               'environment directory if it '
                                               'already exists, before '
                                               'environment creation.')
        parser.add_argument('--upgrade', default=False, action='store_true',
                            dest='upgrade', help='Upgrade the environment '
                                               'directory to use this version '
                                               'of Python, assuming Python '
                                               'has been upgraded in-place.')
        parser.add_argument('--verbose', default=False, action='store_true',
                            dest='verbose', help='Display the output '
                                               'from the scripts which '
                                               'install setuptools and pip.')
        options = parser.parse_args(args)
        if options.upgrade and options.clear:
            raise ValueError('you cannot supply --upgrade and --clear together.')
        builder = ExtendedEnvBuilder(system_site_packages=options.system_site,
                                       clear=options.clear,
                                       symlinks=options.symlinks,
                                       upgrade=options.upgrade,
                                       nodist=options.nodist,
                                       nopip=options.nopip,
                                       verbose=options.verbose)
        for d in options.dirs:
            builder.create(d)

if __name__ == '__main__':
    rc = 1
    try:
        main()
        rc = 0
    except Exception as e:
        print('Error: %s' % e, file=sys.stderr)
    sys.exit(rc)
{% endhighlight %}
</div>

- A script which below demonstrates how to extend Python 3.3's EnvBuilder, by installing setuptools and pip in created venvs. This functionality is not provided as an integral part of Python 3.3 because, while setuptools and pip are very popular, they are third-party packages. The script needs Python 3.3 or later; invoke it using "python pyvenvex.py -h"…

### Pip Installation Instructions

Install via pip3

pip3 install InstagramApi, schedule

<script>
function myFunction() {
    if (document.getElementById('id02').style.display === 'none') {
        document.getElementById('id02').style.display='block';
    } else {
        document.getElementById('id02').style.display='none';
    }
}
</script>

<button  onclick="myFunction()">Instadroid.py - [Göster]/[Gizle]</button> 

<div id="id02" style="display:none">

 {% highlight python  linenos=table %}
#Instadroid.py for testing auto-post and scheduling post via python

#import
from InstagramAPI import InstagramAPI # Instagram API -> https://github.com/LevPasha/Instagram-API-python
from random import randint # random number for random picture
import schedule # Schedule -> https://github.com/dbader/schedule
import time
import os 

#login
usr = "jeruselam.github.io" # username
pwd = "20552055v!Vv"    # password
API = InstagramAPI(usr,pwd)
API.login() # login

#caption#istanbullovers #tagsforhearts #igistanbul #instagramTurkiye #instagramtr #istanbullife #igturkey #istanbullove #instagramturkey #eskisehir #istanbuldayasam #denizli #tr #lifeinism #alanya #TC #samsun #eskişehir #gaziantep #mersin #adana #konya #trabzon #ankara #turkey #turkiye #izmir #bursa #antalya #bodrum 
caption = ""

def random_picture(): # we require you to rename your picture as number :3
     pic = randint(1,3288) # random number 1 - 3
     auto_post(pic)
     
def auto_post(pic):
    picname = str(pic)+".jpg" # picture name
    strcon = r'/picture' # concat picture directory
    def_path = os.getcwd()+strcon # get current directory
    photo_path = def_path+"/"+picname
    API.uploadPhoto(photo_path, caption)
    
schedule.every(59).minutes.do(random_picture) # every ? minutes
#schedule.every(4).hours.do(random_picture) # every ? hours

while True:
    schedule.run_pending() # waiting for schedule
    time.sleep(9) # countdown 1 second
{% endhighlight %}
</div>

[![Django App in Minutes]({{base.url}}/images/venv/venv2.jpg)](http://vdemir.github.io/Django_App)


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>









