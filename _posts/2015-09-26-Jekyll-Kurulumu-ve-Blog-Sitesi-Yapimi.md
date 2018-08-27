---
layout: post
title:  Jekyll Kurulumu ve Blog Sitesi Yapımı
date:   2015-09-26 12:00:00
tags:   Jekyll Linux Web Python UygÇatı
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
Son değişim: {{ site.time }} | Revision {{ site.github.build_revision }}
<p class="meta">{{ day }} {{ month }} {{ year }} - Türkiye</p>
{% elsif page.lang == 'en' %}
Last modified at: {{ site.time }}
<p class="meta">{{ page.date | date_to_string }} - Turkey</p>
{% endif %}

Pisi Linux dağıtımında ve benzer şekilde diğer linux dağıtımlarında Jekyll ile blog yapımı nasıldır? Öncelikle Jekyll'in tanımını yaparak başlayalım. Jekyll, düz metinlerinizi statik blog ve web sitesi formuna  dönüştürmenizi sağlayan site üretecidir.

Kuruluma başlamadan önce hazırlık aşamasını tamamlamalıyız. Jekyll kurulumu için ```rubygems``` ve ```ruby-devel``` paketlerine ihtiyaç var. Önce bu paketlerin kurulumunu tamamlıyoruz. Ayrıca ```gem install``` komutu ile ```jekyll``` , ```therubyracer``` ve ```rdiscount```
gem dosyalarının kurulumunu gerçekleştiriyoruz. Paket kurulumunu tamamladıktan sonra sıra geldi web sayfamız için gereken dosyaların oluşacağı dizini hazırlamaya bunun için de bir komut işletiyoruz. 

```sudo jekyll new my-awesome-site```

Dizin içerisine önceden hazırladığımız dosyalarıda atabiliriz. Dizin içerisinde iken son komutumuz ise  ```sudo jekyll serve```

{% highlight bash %}
sudo pisi it -c system.devel		/*devel paket bileşenlerinin kurulumu*/
sudo pisi it rubygems
sudo pisi it ruby-devel
sudo gem install jekyll			/*jekyll kurulumu*/
sudo gem install bundler
sudo bundle install
sudo jekyll new my-awesome-site		/*yeni sitenin oluşturulması*/
bundle exec jekyll build		/*sitenin hatasız derlemesi*/
sudo jekyll serve			/*local server üzerinde denenmesi*/
{% endhighlight %}

Sonuçta; statik sitemizi yada bloğumuzu web tarayıcı adres çubuğuna ```http://localhost:4000/``` yazarak görüntüleyebiliyoruz.

Bloğunuzda kullanabileceğiniz resimleri düzenlemek için ```Gimp``` ve siteyi host eden GitHub sitesine commit yapmak için ```git``` paketlerine de ihtiyacınız olacaktır.

***Snapshots***

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/snapshot12.bmp" alt="programs" class="resize" />
  <p><small>Jekyll &bull; Linux.</small></p>
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
 <br>
