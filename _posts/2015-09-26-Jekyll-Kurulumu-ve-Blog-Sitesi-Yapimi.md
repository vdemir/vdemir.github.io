---
layout: post
title:  Jekyll Kurulumu ve Blog Sitesi Yapımı
date:   2015-09-26 12:00:00
tags:   Jekyll Linux Web Uyg
comments: true
published: true
lang: tr
---

{% include tr_ay.html %}

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

{% include dist.html %}


<br>
{% include last_day.html %}
 <br>

