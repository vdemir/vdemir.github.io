---
layout: post
title: Lisp Programming Language
date:   2018-05-06 13:52:00
excerpt: "Lisp, Programlama"
tags:   Lisp Programlama C
comments: false
published: true
lang: en
---


<p class="meta">6 Mayıs 2018 - Türkiye</p>
<br>
<input type="text" id="search" placeholder="Type to search">
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
{% include programming.html %}
<div class="teaser clearfix"></div>
{% include speech-to-webtext.html %}
<script charset="utf-8">var $rows = $('#tg-nBN6M tr');
$('#search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});</script>

<br>
<div class="resize" style="margin: 0; text-align: center;">
  <img src="{{ site.baseurl }}/images/45-sounds.png" alt="Sound" class="resize"  />
  <p><small>45 &bull; Sounds.</small></p>
</div>

<style>
img.resize {
  max-width:90%;
  max-height:90%;
}
</style>
