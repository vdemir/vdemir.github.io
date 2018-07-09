---
layout: post
title: Vocabulary
date:   2018-06-26 13:52:00
tags:   English
comments: true
published: true
lang: tr
---


<p class="meta">27 Haziran 2018 - Türkiye</p>
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


