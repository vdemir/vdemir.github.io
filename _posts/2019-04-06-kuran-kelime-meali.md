---
layout: post
title:  Kuran Kelime Meali
description: Kuran- Kerim Resim formatında sayfalar, kelime mealli takip etmesi kolay anlaşılır, faydalı bir kaynak.
date:   2019-04-14 12:00:00
tags:   Kelime
categories: [Kelime, Sözlük ]
comments: false
published: true
lang: tr
---






![Kuran]({{ site.baseurl }}/images/pdf.png  "Kuran: Kelime Meali"){:height="10%" width="10%"}
![Kuranda Temel Kavramlar 7b]({{ site.url }}/viewer/web/viewer.html?file={{ site.url }}/assets/kuran1/Kuranda_Temel_Kavramlar_7b.pdf  "Kuranda_Temel_Kavramlar_7b"){:height="87%" width="87%"}
<br>

<div align="left">
<a href="https://vdemir.github.io/viewer/web/viewer.html?file={{ site.url }}/assets/kuran1/kuran.pdf" target="_blank"><img src="{{ site.baseurl }}/images/pdf.png" alt="viewer" width="49" height="49"></a><a href="https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/kuran1/kuran.pdf" target="_blank" class="btn btn-default">Kuran Kelime Meali</a></div>


<br>


{% assign maxRelated = 1246 %}
{% assign maxRelatedCounter = 1 %}


{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files %}
![Kuran]({{base.url}}/assets/kuran2/{{ maxRelatedCounter }}.jpg  "Kuran: Kelime Meali"){:height="87%" width="87%"}
  {{ maxRelatedCounter }}
{% assign maxRelatedCounter = maxRelatedCounter | plus: 1 %}
      {% if maxRelatedCounter >= maxRelated %}
        {% break %}
      {% endif %}
{% endfor %}




