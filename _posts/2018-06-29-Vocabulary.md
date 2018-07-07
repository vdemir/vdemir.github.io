---
layout: post
title: Vocabulary
date:   2018-06-26 13:52:00
tags:   English
comments: False
published: true
---


<p class="meta">27 Haziran 2018 - Türkiye</p>
<hr>

<input type="text" id="search" placeholder="Type to search">
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
{% include paging.html %}
<div class="teaser clearfix"></div>
{% include speech-to-webtext.html %}
{% include CSS.html %}
<script charset="utf-8">var $rows = $('#tg-nBN6M tr');
$('#search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});</script>

<!-- begin dictionary box -->
<link rel="stylesheet" type="text/css" media="all" href="https://dictionarybox.com/dic_box_v3.css" />
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
<script type="text/javascript" src="https://dictionarybox.com/dic_box.js"></script>
<div id="pl-dbox"><a class="pl-dbox-title" href="javascript:void(0);dboxCursorLoc();"><span id="pl-dbox-title-text">Lugat</span></a>
<div id="pl-dbox-content"><div id="pl-dboxFlags"><ul><li><img src="https://dictionarybox.com/flags/English.png" alt="english" /></li>
<li><img src="https://dictionarybox.com/flags/Turkish.png" alt="Turkish" /></li><li><h3></h3></li></ul></div><div id="pl-dbox-ajax-content">
<p class="info">Double click on any word on the page or type a word:</p><p><input type="text" name="pl-dbox-search-field" style="width:97%;" id="pl-dbox-search-field" onKeyPress="return dbxChkKy(event);" autocomplete=off /></p>
<p id="pl-dbox-search-button"><input type="button" value=" Search! " OnClick="getdboxResults();"/></p></div><input id="pl-dbox-glossary" type="hidden" value="EnglishToTurkish,TurkishToEnglish"/></div></div>
<!-- end dictionary box -->
