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

<style>
span {
    color:blue;
    cursor:pointer;
}
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
<div> 
<p>
<span onclick="show('Page1');"><a  class="waves-effect waves-light btn">1</a></span> 
<span onclick="show('Page2');"><a  class="waves-effect waves-light btn">2</a></span> 
<span onclick="show('Page3');"><a  class="waves-effect waves-light btn">3</a></span> 
<span onclick="show('Page4');"><a  class="waves-effect waves-light btn">4</a></span> 
<span onclick="show('Page5');"><a  class="waves-effect waves-light btn">5</a></span> 
</p>
</div>
<div class="teaser clearfix"></div>
<div id="Page1" class="page" style="display:none">
	{% include lisp_page1.html %}
</div>
 
<div class="teaser clearfix"></div>
<div id="Page2" class="page" style="display:none">
    	{% include lisp_page2.html %}
</div>
 
<div class="teaser clearfix"></div>
<div id="Page3" class="page" style="display:none">
    	{% include lisp_page3.html %}
</div>
 
<div class="teaser clearfix"></div>
<div id="Page4" class="page" style="display:none">
    	{% include lisp_page4.html %}
</div>
 
<div class="teaser clearfix"></div>
<div id="Page5" class="page" style="display:none">
    	{% include lisp_page5.html %}
</div>
