---
layout: post
title:  Jekyll Kurulumu ve Blog Sitesi Yapımı
date:   2015-09-26 12:00:00
tags:   Jekyll
comments: True
---
 

<p class="meta">26 Eylül 2015 - Türkiye</p>

Pisi Linux dağıtımında Jekyll ile blog nasıl yapılır. Öncelikle Jekyll'in tanımını yaparak başlayalım. Jekyll, düz metinlerinizi statik blog ve web sitesi formuna  dönüştürmenizi sağlayan site üretecidir.

Kuruluma başlamadan önce hazırlık aşamasını tamamlamalıyız. Jekyll kurulumu için ```rubygems``` ve ```ruby-devel``` paketlerine ihtiyaç var. Önce bu paketlerin kurulumunu tamamlıyoruz. Ayrıca ```gem install``` komutu ile ```jekyll``` , ```therubyracer``` ve ```rdiscount```
gem dosyalarının kurulumunu gerçekleştiriyoruz. Paket kurulumunu tamamladıktan sonra sıra geldi web sayfamız için gereken dosyaların oluşacağı dizini hazırlamaya bunun için de bir komut işletiyoruz. ```sudo jekyll new my-awesome-site```

Dizin içerisine önceden hazırladığımız dosyalarıda atabiliriz. Dizin içerisinde iken son komutumuz ise  ```sudo jekyll serve```

{% highlight bash %}
sudo pisi it -c system.devel
sudo pisi it rubygems
sudo pisi it ruby-devel
sudo gem install jekyll
sudo gem install therubyracer
sudo gem install rdiscount
sudo gem install pygments.rb
sudo jekyll new my-awesome-site
sudo jekyll serve
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
  max-width:85%;
  max-height:85%;
}
</style>

*** Distributed ***

Pisi Linux dağıtımının kararlı sürümleri:

| Sürüm                  |- Çıkış Tarihi |- İndirme Bağlantısı |
|------------------------|---------------|---------------------|
| Pisi Linux 1.0         |- 14.08.2014   |- [Pisi Linux 1.0](https://sourceforge.net/projects/pisilinux/files/1.0/)|
| Pisi Linux 1.1         |- 04.11.2014   |- [Pisi Linux 1.1](https://sourceforge.net/projects/pisilinux/files/1.1/)|
| Pisi Linux 1.2 KDE     |- 10.07.2015   |- [Pisi Linux 1.2](https://sourceforge.net/projects/pisilinux/files/1.2/)|
| Pisi Linux 2.0Alfa5    |- 30.08.2015   |- [Pisi Linux 2.0Alfa5](https://openload.co/f/vuimrNgPjSE/Pisi-Linux-2.0-Alfa5-KDE5-KaraKedi-x86_64.iso)(Test)
| Pisi Linux 1.2 Xfce    |- 21.09.2015   |- [Pisi Linux 1.2](https://openload.co/f/R6JeYpGW3BM/Pisi-Linux-1.2-XFCE-x86_64.iso)|


---
