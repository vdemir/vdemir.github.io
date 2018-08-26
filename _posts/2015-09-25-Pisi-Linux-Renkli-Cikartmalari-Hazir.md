---
layout: post
title:  Pisi Linux Renkli Çıkartmalar Hazır
date:   2015-09-26 08:00:00
tags:   Pisi Linux Sticker
comments: true
published: true
lang: tr
---
 
{% if page.lang == 'tr' %}
{% assign months = "Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık" | split: "|" %}
{% assign m = page.date | date: "%-m" | minus: 1 %}
{% assign day = page.date | date: "%d" %}
{% assign month = months[m] %}
{% assign year = page.date | date: "%Y" %}
<p class="meta">{{ day }} {{ month }} {{ year }} - Türkiye</p>
{% elsif page.lang == 'en' %}
<p class="meta">{{ page.date | date_to_string }} - Türkiye</p>
{% endif %}

Pisi Linux tanıtımı için tasarlanan renkli çıkartma örnekleri GIMP kullanılarak hazırlandı. 

***Snapshots***

![_config.yml]({{ site.baseurl }}/assets/Pisi-Linux-600x600-renkli-1.png)
![_config.yml]({{ site.baseurl }}/assets/Pisi-Linux-600x600-renkli-2.png)
![_config.yml]({{ site.baseurl }}/assets/Pisi-Linux-600x600-renkli-3.png)
![_config.yml]({{ site.baseurl }}/assets/Pisi-Linux-600x600-renkli-4.png)



### Pisi Linux dağıtımının kararlı sürümleri:



| Sürüm                  |- Çıkış Tarihi |- İndirme Bağlantısı |
|------------------------|---------------|---------------------|
| Pisi Linux 1.0         |- 14.08.2014   |- [Pisi Linux 1.0](https://sourceforge.net/projects/pisilinux/files/1.0/)|
| Pisi Linux 1.1         |- 04.11.2014   |- [Pisi Linux 1.1](https://sourceforge.net/projects/pisilinux/files/1.1/)|
| Pisi Linux 1.2 KDE     |- 10.07.2015   |- [Pisi Linux 1.2](https://sourceforge.net/projects/pisilinux/files/1.2/)|
| Pisi Linux 2.0Alfa5    |- 30.08.2015   |- [Pisi Linux 2.0Alfa5](https://openload.co/f/vuimrNgPjSE/Pisi-Linux-2.0-Alfa5-KDE5-KaraKedi-x86_64.iso) (Test)
| Pisi Linux 1.2 Xfce    |- 21.09.2015   |- [Pisi Linux 1.2](https://openload.co/f/R6JeYpGW3BM/Pisi-Linux-1.2-XFCE-x86_64.iso)|


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

