---
layout: post
title:  Linux ile Win10 iso Kalıbı Yazdırmak
description: BIOS önyüklemesinde GPT için ilk bölüm 8MB biçimlendirilmemiş ve 'bios_grub' bayrak setine ihtiyacınız var
date:   2019-04-04 12:00:00
last_updated: 2021-06-05 18:57:00
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
| windows10ISO           |  24.10.2018   |  [windows10ISO](https://www.microsoft.com/TR-TR/software-download/windows10ISO)|




### Win10 iso listesi


![Win10 &bull; DeskTop.](/images/usbwriter/woeusb.png "Win10 &bull; DeskTop."){:height="57%" width="57%"}


### Woeusb'yi Oluştur Ve Yükle

Gerçek bir Windows DVD veya görüntüden bir Windows USB stick yükleyici oluşturmak için bir Linux programı.


| Sürüm                  |  Çıkış Tarihi |  İndirme Bağlantısı |
|------------------------|---------------|---------------------|
| WoeUSB 5.1.2           |  23.05.2021   |  [WoeUSB](https://github.com/WoeUSB/WoeUSB)|




![WoeUSB &bull; Win10.](https://raw.githubusercontent.com/WoeUSB/WoeUSB-ng/master/.github/woeusb-logo.png){:height="97%" width="97%"}


### Genel yöntem

{% highlight bash %}
$ chmod +x path/to/woeusb-N.N.N.bash # Fix executable the file permission
$ sudo path/to/woeusb-N.N.N.bash # run the program via the path
$ make
$ sudo make install
{% endhighlight %}


Bu paket iki program içerir:

woeusb: varolan bir Windows Yükleme diskinden veya disk görüntüsünden kendi önyüklenebilir Windows yükleme USB depolama aygıtınızı oluşturmanızı sağlayan bir komut satırı yardımcı programı.


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


<!--https://snipcart.com/
https://github.com/CloudCannon/fur-jekyll-template
https://jekyll-themes.com/free/-->
