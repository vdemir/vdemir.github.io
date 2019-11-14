---
layout: post
title: Lügatçe
date:   2018-06-26 13:52:00
excerpt: "Kelime Hazinesi, Telâffuz"
tags:   Kelime Sözlük Telâffuz
categories: Dil
comments: false
published: true
lang: tr
---

<br>
<input type="text" id="search" placeholder="Type to search">

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

{% include content_page/paging.html %}

<div class="teaser clearfix"></div>

<script>
function myFunction2() {
    if (document.getElementById('id02').style.display === 'none') {
        document.getElementById('id02').style.display='block';
    } else {
        document.getElementById('id02').style.display='none';
    }
}
</script>

<button  onclick="myFunction2()">Sentences with the word</button> 

<div id="id02" style="display:none">

 {% highlight text  linenos=table %}
An expression could invoke recursive functions or entire subprograms, for example.
{% endhighlight %}
</div>


<div class="teaser clearfix"></div>

<button  onclick="myFunction2()">Bir ifade örneği</button> 

<div id="id02" style="display:none">

 {% highlight text  linenos=table %}
Bir ifade, örneğin özyinelemeli işlevleri veya tüm alt programlarını çağırabilir.
{% endhighlight %}
</div>


<div class="teaser clearfix"></div>


{% include content_page/speech-to-webtext.html %}

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

