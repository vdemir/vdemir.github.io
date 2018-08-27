---
layout: post
title:      Pisi Linux Web Sitesi Yenileniyor
date:       2015-09-23 12:00:00
tags:       pisilinux 2.0 web site
tags:       Pisi Linux Dağıtım Web
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
<p class="meta">{{ page.date | date_to_string }} - Turkey</p>
{% endif %}

Pisi Linux web sitesi statik öğelerin olduğu yeni içeriğiyle tasarlanmaya başlandı. Ayrıca forum alanı yeniden düzenlenecek, farklı bir işlev ile tekrar yazılacak. Pisi Linux 2.0 için çalışmaların devam ettiğ bu aşamada yeni bir site ile karşınızda olmayı umuyoruz. Pisi Linux takımı topluluktan aldığı destekle ile yine çok iyi işler çıkarıyor.


***Snapshots***

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/web-site.png" alt="programs" class="resize" />
  <p><small>Pisi &bull; Web.</small></p>
</div> 
  
<style>
img.resize {
  max-width:100%;
  max-height:100%;
}
</style>


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

