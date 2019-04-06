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



<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- Opsiyonel tema -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">



## İndirmeler

İndirmeyi başlatmak için aşağıdan bir bağlantı seçin. 


| Sürüm                  |  Çıkış Tarihi |  İndirme Bağlantısı |
|------------------------|---------------|---------------------|
| windows10ISO         |  24.10.2018   |  [windows10ISO](https://www.microsoft.com/TR-TR/software-download/windows10ISO)|




## List of Win10iso

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/assets/usbwriter/woeusb.png" alt="programs" class="resize" />
  <p><small>Win10 &bull; DeskTop.</small></p>
</div>



## Build & Install WoeUSB

A Linux program to create a Windows USB stick installer from a real Windows DVD or image.


| Sürüm                  |  Çıkış Tarihi |  İndirme Bağlantısı |
|------------------------|---------------|---------------------|
| WoeUSB         |  14.10.2018   |  [WoeUSB](https://github.com/slacka/WoeUSB)|





## Generic method

{% highlight bash %}
$ autoreconf --force --install # Most non-Debian derived distros will need this
$ ./configure --prefix=/usr
$ make
$ sudo make install
{% endhighlight %}



<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="https://raw.githubusercontent.com/slacka/WoeUSB/master/dev/woeusbgui-screenshot.png" alt="programs" class="resize" />
  <p><small>WoeUSB &bull; Win10.</small></p>
</div> 
  
<style>
img.resize {
  max-width:100%;
  max-height:100%;
}
</style>
 

<html>
        <title>Table Example</title>
        <style>
            table {
                border-collapse: collapse;
                width: 100%;
            }
            th, td {
                border: 1px solid #ccc;
                padding: 10px;
            }
            table.alt tr:nth-child(even) {
                background-color: #eee;
            }
            table.alt tr:nth-child(odd) {
                background-color: #fff;
            }            
        </style>
 </html> 
