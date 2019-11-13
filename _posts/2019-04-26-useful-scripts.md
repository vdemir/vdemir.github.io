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

<script src="/scripts/js/flashcard/jquery.min.js"></script>
  <script src="/scripts/js/flashcard/jquery.mobile-1.2.0.min.js"></script>
  <script src="/scripts/js/flashcard/showdown.js"></script>
  <script src="/scripts/js/flashcard/cards.js"></script>
  <script src="/scripts/js/flashcard/app.js"></script>


  <div data-role="page" id="main-page">
    <div data-role="header">
      <a href="index.html" data-icon="refresh">Restart</a>
      <h1>JS Flash Cards</h1>
    </div>
    <div data-role="content">
      <div data-role="collapsible-set" data-theme="c" data-content-theme="d" class="ui-collapsible-set ui-corner-all">
        <div id="flash-card" data-role="collapsible" class="ui-collapsible ui-collapsible-inset ui-collapsible-themed-content ui-first-child ui-collapsible-collapsed" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d">
          <h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed">
            <p id="question"></p>
          </h3>
          <p id="answer"></p>
        </div>
      </div>
      <a id="skip-card" data-role="button" data-mini="true">Next</a>
    </div>
  </div>

  <div data-role="page" id="fork-this-page">
    <div data-role="header">
      <a href="#title-page" data-icon="arrow-l" data-theme="b" data-transition="fade">Back</a>
      <h1>JS Flash Cards</h1>
    </div>
    <div data-role="content">
      <p>JSFlashCards is open sourced on GitHub. Fork the app and consider adding your own questions and issuing a pull request!</p>
      <a href="https://github.com/cjus/jsflashcards" data-role="button">Fork this</a>
    </div>
  </div>

  <div data-role="page" id="resources-page">
    <div data-role="header">
      <a href="index.html" data-icon="refresh">Restart</a>
      <h1>JS Flash Cards</h1>
    </div>
  </div>
  
  
  
  
  
  
  
  
<a href="https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/istihza/python3.pdf" target="_blank">python3 PDF</a>
<a href="https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/pythn/Learning-Tips.pdf" target="_blank">Learning Python Programming with 11 Beginner Tips</a>


[Modern JavaScript Tutorial](https://javascript.info)
[CodingUnit Programming Tutorials](https://www.codingunit.com/)

 

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
