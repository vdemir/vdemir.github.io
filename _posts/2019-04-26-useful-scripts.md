---
layout: post
title: Useful Scripts
date:   2019-09-26 13:52:00
excerpt: "Kullanışlı Betikler"
tags:   Python3 Programlama 
categories: Python
comments: false
published: true
lang: tr
---

<a href="https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/istihza/python3.pdf" target="_blank">istihza/python3 PDF</a>

  https://www.johnvansickle.com/ffmpeg/
ffmpeg -f concat -i list.txt -c copy merged.mp4 (list.txt: file 'EIrZ0cvW4AIBT6Z.mp4')


  
sudo find . -name "*.mp3"|sed 's/\.\///;'|sort>List.lst

ffmpeg -framerate 1/10 -i file%d.jpeg -i input.mp3  -c:a copy  -r 30 -s 720x480 -y test.mp4

ffmpeg -i video.mp4 -i audio.mp3 -codec copy -shortest output.mp4

export JEKYLL_VERSION=4.0.0

sudo docker run --rm   --volume="$PWD:/srv/jekyll"   -it jekyll/builder:$JEKYLL_VERSION   jekyll build


git clone https://github.com/xroche/httrack.git --recurse
cd httrack
./configure && make -j8 && make install DESTDIR=/

*wget -q -O - "http://wordpress.org/latest.tar.gz" | tar -xzf - -C /var/www*

soffice --headless --convert-to pdf *.doc