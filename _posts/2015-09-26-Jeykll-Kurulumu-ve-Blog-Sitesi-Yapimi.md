---
layout: post
title:  Jeykll Kurulumu ve Blog Sitesi Yapımı
date:   2015-09-26 12:00:00
tags:   Jeykll-Kurulumu Blog-Sitesi-Yapımı
---

{{ page.title }}
================

<p class="meta">26 Eylül 2015 - Türkiye</p>

Pis Linux dağıtımında Jeykll ile blog nasıl yapılır. Öncelikle Jeykll'in tanımını yaparak başlayalım. Jeykll, düz metinlerinizi statik blog ve web sitesi formuna  dönüştürmenizi sağlayan site üretecidir.

Pis Linux dağıtımında Jeykll ile blog nasıl yapılır. Öncelikle Jeykll'in tanımını yaparak başlayalım. Jeykll, düz metinlerinizi static blog ve web sitelerine formuna  dönüştürmenizi sağlayan site üretecidir.

Kuruluma başlamadan önce hazırlık aşamasını tamamlamalıyız. Jeykll kurulumu için ```rubygems``` ve ```ruby-devel``` paketlerine ihtiyaç var. Önce paketlerin kurulumunu gerçekleştiriyoruz. Daha önce kurulumlarını gerçekleştirdiğim için history komutu ile komut geçmişine bakıyorum. 

vedat@pisi_linux2 ~ $ ```history | grep ruby &&  history | grep gem```

```sudo pisi it rubygems && sudo pisi it ruby-devel
```

```sudo gem install therubyracer && sudo gem install rdiscount
```

Paket kurulumunu tamamladıktan sonra sıra geldi web sayfamız için gereken dosyaların oluşacağı dizini hazırlamaya bunun için bir komut işletiyoruz.

```sudo jekyll new my-awesome-site```

Dizin içerisine önceden hazırlanan dosyalarıda atabiliriz.

Son komutumuz ise

```sudo jekyll serve```

*Server address: http://127.0.0.1:4000/*

*Server running... press ctrl-c to stop.*

Sonuçta; statik sitemizi yada bloğumuzu web tarayıcı adress çubuğuna ```http://localhost:4000/``` yazarak görüntüleyebiliriz.

***Snapshots***

![_config.yml]({{ site.baseurl }}/images/snapshot12.bmp)

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