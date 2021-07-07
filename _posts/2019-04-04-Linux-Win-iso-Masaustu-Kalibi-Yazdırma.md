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


### **İndirmeler**

***

İndirmeyi başlatmak için aşağıdan bir bağlantı seçin. 

| Sürüm        | Çıkış Tarihi | İndirme Bağlantısı                                                               |
|--------------|--------------|----------------------------------------------------------------------------------|
| windows10ISO | 24.10.2018   | [windows10ISO](https://www.microsoft.com/TR-TR/software-download/windows10ISO)   |



### **Win10 iso listesi**
***

![Win10 &bull; DeskTop.](/assets/usbwriter/woeusb.png "Win10 &bull; DeskTop."){:height="77%" width="77%"}


### **Woeusb'yi Oluştur Ve Yükle**
***
Gerçek bir Windows DVD veya görüntüden bir Windows USB stick yükleyici oluşturmak için bir Linux programı.


| Sürüm        | Çıkış Tarihi | İndirme Bağlantısı                                             |
|--------------|--------------|----------------------------------------------------------------|
| WoeUSB 5.1.2 | 23.05.2021   | [WoeUSB](https://github.com/WoeUSB/WoeUSB/releases/tag/v5.1.2) |

<table>
<thead>
  <tr>
    <th>Sürüm</th>
    <th>Çıkış Tarihi</th>
    <th>İndirme Bağlantısı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>WoeUSB 5.1.2</td>
    <td>23.05.2021</td>
    <td><a href="https://github.com/WoeUSB/WoeUSB/releases/tag/v5.1.2">WoeUSB</a></td>
  </tr>
</tbody>
</table>

![WoeUSB &bull; Win10.](/assets/usbwriter/woeusb-logo.png){:height="57%" width="57%"}


### **Genel yöntem**
***
{% highlight bash %}
$ chmod +x woeusb-*.bash # Fix executable the file permission
$ sudo woeusb-*.bash # run the program via the path
{% endhighlight %}


Bu paket iki program içerir:

woeusb: varolan bir Windows Yükleme diskinden veya disk görüntüsünden kendi önyüklenebilir Windows yükleme USB depolama aygıtınızı oluşturmanızı sağlayan bir komut satırı yardımcı programı.


