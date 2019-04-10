---
layout: post
title:  Kuran Kelime Meali
date:   2019-04-14 12:00:00
tags:   Kelime
categories: [Kelime, Sözlük ]
comments: false
published: true
lang: tr
---


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- Opsiyonel tema -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">

 <div align="left">
<a href="{{ site.baseurl }}/viewer/viewer2.html" target="_blank"><img src="{{ site.baseurl }}/images/pdf.png" alt="viewer2" width="49" height="49"></a>
<a href="{{ site.baseurl }}/viewer/viewer2.html" target="_blank" class="btn btn-default">Kuranda_Temel_Kavramlar_7b</a></div>

<br>

<div align="left">
<a href="{{ site.baseurl }}/viewer/viewer.html" target="_blank"><img src="{{ site.baseurl }}/images/pdf.png" alt="viewer" width="49" height="49"></a><a href="{{ site.baseurl }}/viewer/viewer.html" target="_blank" class="btn btn-default">Kuran Kelime Meali</a></div>


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




<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

