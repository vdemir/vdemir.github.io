---
layout: post
title:  Kuran Kelime Meali
description: Kuran- Kerim Resim formatında sayfalar, kelime mealli takip etmesi kolay anlaşılır, faydalı bir kaynak.
date:   2019-04-14 12:00:00
permalink: /Kuran-Kelime-Meal/
tags:   Kelime
categories: [Kuran]
comments: false
published: true
lang: tr
redirect_from:
  - /kelime/sözlük/2019/04/14/kuran-kelime-meali.html
  - /kuran/2019/04/14/kuran-kelime-meali.html
---






![Kuran]({{ site.baseurl }}/images/pdf.png  "Kuran: Kelime Meali"){:height="10%" width="10%"}
[Kuranda Temel Kavramlar 7b](https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/kuran1/Kuranda_Temel_Kavramlar_7b.pdf )
<br>

![Kuran]({{ site.baseurl }}/images/pdf.png  "Kuran: Kelime Meali"){:height="10%" width="10%"}
[Kuran Kelime Meali](https://vdemir.github.io/viewer/web/viewer.html?file={{ site.url }}/assets/kuran1/kuran.pdf )



<br>


{% assign maxRelated = 1246 %}
{% assign maxRelatedCounter = 1 %}


{% assign image_files = site.assets_files | where: "image", true %}
{% for myimage in image_files %}
![Kuran]({{base.url}}/assets/kuran2/{{ maxRelatedCounter }}.jpg  "Kuran: Kelime Meali")
  {{ maxRelatedCounter }}
{% assign maxRelatedCounter = maxRelatedCounter | plus: 1 %}
      {% if maxRelatedCounter >= maxRelated %}
        {% break %}
      {% endif %}
{% endfor %}


{% for file in site.assets_files %}
  {% if file.path contains include.kuran2 %}
    {% if file.extname == '.jpg' %}

      {% assign filenameparts = file.path | split: "/" %}
      {% assign filename = filenameparts | last | replace: file.extname,"" %}

      <a href="{{ file.path }}" title="{{ filename }}">
        <img src="{{site.url}}/assets/kuran2/{{ file.path }}" alt="{{ filename }}" />
        <span>{{ filename }}</span>
      </a>
    {% endif %}
  {% endif %}
{% endfor %}



<style>
  .image-gallery {overflow: auto; margin-left: -1%!important;}
  .image-gallery a {float: left; display: block; margin: 0 0 1% 1%; width: 19%; text-align: center; text-decoration: none!important;}
  .image-gallery a span {display: block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding: 3px 0;}
  .image-gallery a img {width: 100%; display: block;}
</style>

<div class="image-gallery">
{% for file in site.static_files %}
  {% if file.path contains include.folder %}
    {% if file.extname == '.jpg' or 
      file.extname == '.jpeg' or 
      file.extname == '.JPG' or 
      file.extname == '.JPEG' %}

      {% assign filenameparts = file.path | split: "/" %}
      {% assign filename = filenameparts | last | replace: file.extname,"" %}

      <a href="{{ file.path }}" title="{{ filename }}">
        <img src="//images.weserv.nl/?url=jekyllcodex.org/{{ file.path }}&w=300&h=300&output=jpg&q=50&t=square" alt="{{ filename }}" />
        <span>{{ filename }}</span>
      </a>
    {% endif %}
  {% endif %}
{% endfor %}
</div>
