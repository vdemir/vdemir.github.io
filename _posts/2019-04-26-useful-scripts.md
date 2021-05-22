---
layout: post
title: Useful Programming Material
date:   2019-09-26 13:52:00
excerpt: "Kullanışlı Betikler"
tags:   Programming 
categories: Programming
comments: false
published: true
lang: tr
---


 
*  [Build Your Own Lisp](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/lisp-c/Build-Your-Own-Lisp.pdf)
 
*  [AUTOMATE THE BORING STUFFWITH PYTHON](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/prog/pyt/automate-the-boring-stuff-with-python-2015-.pdf)
*  [C Programming](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/prog/clang/C Programming Absolute Beginner.pdf)

*  [Learn Python in One Day and Learn It Well](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/prog/pyt/Learn Python in One Day.pdf)
*  [Python Tricks: The Book](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/prog/pyt/Python Tricks: A Buffet of Awesome Python Features.pdf)

*  [python3 isthza](https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/istihza/python3.pdf)
*  [Learning Python Programming with 11 Beginner Tips](https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/prog/pyt/Learning-Tips.pdf)
*  [Modern JavaScript Tutorial](https://javascript.info)
*  [CodingUnit Programming Tutorials](https://www.codingunit.com/)
*  [Hands-On Linux Administration on Azure](https://www.codingunit.com/)


<div class="teaser clearfix"></div>



*  [Spoken English Learning Quickly](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/lg/spoken-english-laerning-quickly.pdf)

https://azure.microsoft.com/en-us/resources/whitepapers/

  https://www.johnvansickle.com/ffmpeg/
ffmpeg -f concat -i list.txt -c copy merged.mp4 (list.txt: file 'EIrZ0cvW4AIBT6Z.mp4')


  ffmpeg -re -i 3qRQ5kmwq6HS2HjQ.mp4 -c:v libx264 -b:v 2M -c:a copy -strict -2 -flags +global_header -bsf:a aac_adtstoasc -bufsize 2100k -f flv rtmp://a.rtmp.youtube.com/live2/
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
git add -A &&  git commit -m "2091" && git push origin master
youtube-dl https://youtu.be/Qp50cAdGwRA


git clone https://github.com/xroche/httrack.git --recurse
cd httrack

./configure && make -j8 && make install DESTDIR=/home/zekid/Downloads/

for i in {1..118}; do ffmpeg -i $i.mp4 -r 0.0033 -vf scale=-1:220 -frames:v 1 -vcodec png capture-$i.png; done

