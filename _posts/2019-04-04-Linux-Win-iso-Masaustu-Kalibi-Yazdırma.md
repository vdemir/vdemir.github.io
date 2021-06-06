---
layout: post
title:  Linux ile Win10 iso Kalıbı Yazdırmak
description: BIOS önyüklemesinde GPT için ilk bölüm 8MB biçimlendirilmemiş ve 'bios_grub' bayrak setine ihtiyacınız var
date:   2019-04-04 12:00:00
tags:   Linux
categories: [Linux]
comments: false
published: true
lang: tr
---



BIOS önyüklemesinde GPT için ilk bölüm 8MB biçimlendirilmemiş ve 'bios_grub' bayrak setine ihtiyacınız var.


### İndirmeler

İndirmeyi başlatmak için aşağıdan bir bağlantı seçin. 


| Sürüm                  |  Çıkış Tarihi |  İndirme Bağlantısı |
|------------------------|---------------|---------------------|
| windows10ISO         |  24.10.2018   |  [windows10ISO](https://www.microsoft.com/TR-TR/software-download/windows10ISO)|




### Win10 iso listesi


![Win10 &bull; DeskTop.](/images/usbwriter/woeusb.png "Win10 &bull; DeskTop."){:height="97%" width="97%"}


### Woeusb'yi Oluştur Ve Yükle

Gerçek bir Windows DVD veya görüntüden bir Windows USB stick yükleyici oluşturmak için bir Linux programı.


| Sürüm                  |  Çıkış Tarihi |  İndirme Bağlantısı |
|------------------------|---------------|---------------------|
| WoeUSB         |  14.10.2018   |  [WoeUSB](https://github.com/slacka/WoeUSB)|




![WoeUSB &bull; Win10.](https://raw.githubusercontent.com/WoeUSB/WoeUSB-ng/master/.github/woeusb-logo.png){:height="97%" width="97%"}


### Genel yöntem

{% highlight bash %}
$ autoreconf --force --install # Most non-Debian derived distros will need this
$ ./configure --prefix=/usr
$ make
$ sudo make install
{% endhighlight %}


Bu paket iki program içerir:

woeusb: varolan bir Windows Yükleme diskinden veya disk görüntüsünden kendi önyüklenebilir Windows yükleme USB depolama aygıtınızı oluşturmanızı sağlayan bir komut satırı yardımcı programı.

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

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<!--https://snipcart.com/
https://github.com/CloudCannon/fur-jekyll-template
https://jekyll-themes.com/free/-->
