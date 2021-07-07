---
layout: post
title:  Jekyll Kurulumu ve Blog Sitesi Yapımı
description: Pisi Linux dağıtımında ve benzer şekilde diğer linux dağıtımlarında Jekyll ile blog sitesi nasıl  yapılır?
date:   2015-09-26 12:00:00
tags:   Jekyll Linux Web Programlama
categories: Programming
permalink: /:categories/:title/
comments: false
published: true
lang: tr
redirect_from:
  - /uyg2015/09/26/Jekyll-Kurulumu-ve-Blog-Sitesi-Yapimi.html
---


Pisi Linux dağıtımında ve benzer şekilde diğer linux dağıtımlarında Jekyll ile blog sitesi nasıl  yapılır? Öncelikle Jekyll'in tanımını yaparak başlayalım. Jekyll, düz metinlerinizi statik blog ve web sitesi formuna dönüştürmenizi sağlayan statik site üretecidir.

Kuruluma başlamadan önce hazırlık aşamasını geçelim. Jekyll kurulumu için ```rubygems``` ve ```ruby-devel``` paketlerine ihtiyaç var. Önce bu paketlerin kurulumunu tamamlıyoruz. Ayrıca ```gem install``` komutu ile ```jekyll``` kurulumunu gerçekleştiriyoruz. Paket kurulumunu tamamladıktan sonra sıra geldi web sayfamız için gereken dosyaların oluşacağı dizini hazırlamaya bunun için de bir komut işletiyoruz. 

```sudo jekyll new my-awesome-site```

Dizin içerisine önceden hazırladığımız dosyalarıda atabiliriz. Dizin içerisinde iken servis komutumuz  ```sudo jekyll serve```

{% highlight bash %}
sudo pisi it git
git config --global user.email "user.email"
git config --global user.name "user.name"
git config credential.helper 'cache --timeout=29600'

sudo pisi it -c system.devel	/*devel paket bileşenlerinin kurulumu*/
sudo pisi it ruby-devel		/*devel paket bileşenlerinin kurulumu*/
sudo pisi it rubygems		/*gem bileşenlerinin kurulumu*/

sudo gem install jekyll			/*jekyll kurulumu*/
sudo gem update jekyll
sudo gem install bundler
sudo bundle update
gem update --system
bundle install

sudo jekyll new my-awesome-site	/*yeni sitenin oluşturulması*/
bundle exec jekyll build	/*sitenin hatasız derlemesi*/
git add -A &&  git commit -m "commit" && git push origin master
sudo jekyll serve	/*local server üzerinde denenmesi*/
{% endhighlight %}

Sonuç olarak statik İnternet sitemizi yada bloğumuzu İnternet metin sunucumuzun adres çubuğuna ```https://localhost:4000/``` yazarak görüntüleyebiliyoruz.

Bloğunuzda kullanabileceğiniz resimleri düzenlemek için ```Gimp``` ve siteyi host eden GitHub sitesine commit yapmak için ```git``` paketlerinin kurulumuna da ihtiyacınız olacaktır.

***Snapshots***



![Jekyll &bull; Linux.](/images/snapshot12.bmp "Jekyll &bull; Linux."){:height="97%" width="97%"}



