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




 <div align="left">
<a href="https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/kuran1/Kuranda_Temel_Kavramlar_7b.pdf" target="_blank"><img src="{{ site.baseurl }}/images/pdf.png" alt="viewer2" width="49" height="49"></a>
<a href="https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/kuran1/Kuranda_Temel_Kavramlar_7b.pdf" target="_blank" class="btn btn-default">Kuranda_Temel_Kavramlar_7b</a></div>

<br>

<div align="left">
<a href="https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/kuran1/kuran.pdf" target="_blank"><img src="{{ site.baseurl }}/images/pdf.png" alt="viewer" width="49" height="49"></a><a href="https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/kuran1/kuran.pdf" target="_blank" class="btn btn-default">Kuran Kelime Meali</a></div>


<br>


{% assign maxRelated = 1246 %}
{% assign maxRelatedCounter = 1 %}


{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files %}
![image]({{base.url}}/assets/kuran/{{ maxRelatedCounter }}.jpg){:class="img-responsive"}
  {{ maxRelatedCounter }}
{% assign maxRelatedCounter = maxRelatedCounter | plus: 1 %}
      {% if maxRelatedCounter >= maxRelated %}
        {% break %}
      {% endif %}
{% endfor %}




