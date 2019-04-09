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

 
<div align="right">
<a href="{{ site.baseurl }}/viewer/viewer.html"><img src="{{ site.baseurl }}/images/pdf.png" alt="viewer" width="69" height="69"></a></div>

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

