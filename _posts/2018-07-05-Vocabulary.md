---
layout: post
title: Lügatçe
date:   2018-06-26 13:52:00
excerpt: "Kelime Hazinesi, Telâffuz"
tags:   Kelime Sözlük Telâffuz
comments: false
published: true
lang: tr
---

{% include tr_ay.html %}

<br>
<input type="text" id="search" placeholder="Type to search">
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
{% include paging.html %}
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
