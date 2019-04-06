---
layout: post
title:  Linux ile Win10 iso Kalıbı Yazdırmak
date:   2019-04-04 12:00:00
tags:   Linux
categories: [Linux]
comments: false
published: true
lang: tr
---

## İndirmeler
İndirmeyi başlatmak için aşağıdan bir bağlantı seçin. 

https://www.microsoft.com/TR-TR/software-download/windows10ISO

## Build & Install WoeUSB
A Linux program to create a Windows USB stick installer from a real Windows DVD or image.

https://github.com/slacka/WoeUSB

## Generic method
$ autoreconf --force --install # Most non-Debian derived distros will need this
$ ./configure --prefix=/usr
$ make
$ sudo make install


<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="https://github.com/slacka/WoeUSB/blob/master/dev/woeusbgui-screenshot.png" alt="programs" class="resize" />
  <p><small>Xfce &bull; DeskTop.</small></p>
</div> 
  
<style>
img.resize {
  max-width:100%;
  max-height:100%;
}
</style>
 
## List of Win
<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/assets/usbwriter/woeusb.png" alt="programs" class="resize" />
  <p><small>Xfce &bull; DeskTop.</small></p>
</div> 
 
