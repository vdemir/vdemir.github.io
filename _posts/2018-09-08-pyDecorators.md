---
layout: post
title:  Python Decoratörler
date:   2018-09-08 12:00:00
last_updated: 2018-09-08 12:00:00
keywords: linux, python, decorators
summary: "Python 3 Dekoratörlere Giriş"
excerpt: This post is about Python Decorators.
categorie: Programlama
tags:   Python Linux Programlama
categories: [Python 3, Programlama]
permalink: /pyDecorators/
comments: false
published: true
lang: tr
---

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/Python-Decorators.png" alt="programs" class="resize" />
  <p><small>Python &bull; Decorators.</small></p>
</div> 
  
<style>
img.resize {
  max-width:100%;
  max-height:100%;
}
</style>

## Python Dekoratörler Üzerine Kısa Kısa ...

Dekoratörlerle ilgili bu eğiticide, neye, nasıl oluşturulacağına ve kullanılacağına bakacağız. Dekoratörler, yüksek mertebe işlevlerini çağırmak için basit bir sözdizimi sağlar. 

Tanım olarak, bir dekoratör, başka bir işlev alan ve ikincisinin işlevini açıkça değiştirmeden davranışını genişleten bir işlevdir. 

Bu kafa karıştırıcı gibi geliyor, ancak özellikle de dekoratörlerin nasıl çalıştığına dair birkaç örnek gördükten sonra değil. Bu makaledeki tüm örnekleri burada bulabilirsiniz.

<style>
	.box {
		color: orange;
		font-size: 5vw;
		padding: 10vw;
		margin: 5vw;
		border-style: solid;
	}
</style>

<div class="box">Bu kafa karıştırıcı gibi geliyor, ancak özellikle de dekoratörlerin nasıl çalıştığına dair birkaç örnek gördükten sonra değil. Bu makaledeki tüm örnekleri burada bulabilirsiniz.</div>

## Fonksiyonlar

Dekoratörleri anlayabilmeniz için öncelikle işlevlerin nasıl çalıştığını anlamanız gerekir. Bizim amacımız için, bir işlev verilen argümanlara dayalı bir değer döndürür. İşte çok basit bir örnek:

{% highlight python %}
def add_one(number):
     return number + 1

add_one(2)
>>> 3
{% endhighlight %}
