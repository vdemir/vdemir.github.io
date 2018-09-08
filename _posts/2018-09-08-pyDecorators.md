---
layout: post
title:  Python Dekoratörler
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

<br>

<div class="pop">Python Dekoratörler Üzerine kısa kısa ...</div> 

<br>

Dekoratörlerle ilgili bu eğiticide, neye, nasıl oluşturulacağına ve kullanılacağına bakacağız. Dekoratörler, yüksek mertebe fonksiyonlarını çağırmak için basit bir sözdizimi sağlar. 

Tanım olarak, bir dekoratör, başka bir fonksiyon alan ve  açık bir şekilde değiştirmeden aldığı fonksiyonun davranışını genişleten bir fonksiyondur. 

Bu kafa karıştırıcı gibi geliyor, ancak özellikle de dekoratörlerin nasıl çalıştığına dair birkaç örnek gördükten sonra değil. Bu makaledeki tüm örnekleri burada bulabilirsiniz.

<style>
	.box {
		color: orange;
		font-size: 5vw;
		padding: 5vw;
		margin: 5vw;
		border-style: solid;
	}
	.pop {
		font-size: 5vw;
		text-decoration: overline;
		text-decoration-color: orange;
	}
</style>

<div class="box">Bu kafa karıştırıcı gibi geliyor, ancak özellikle de dekoratörlerin nasıl çalıştığına dair birkaç örnek gördükten sonra değil.</div>

## Fonksiyonlar
***

Dekoratörleri anlayabilmeniz için öncelikle fonksiyonların nasıl çalıştığını anlamanız gerekir. Bizim amacımız için, bir fonksiyon verilen ifadelere dayalı bir değer döndürür. İşte çok basit bir örnek:

{% highlight python %}
def add_one(number):
     return number + 1

add_one(2)
{% endhighlight %}

{% highlight bash %}
>>> 3
{% endhighlight %}

Genel olarak, Python'daki fonksiyonlar, bir girdiyi bir çıktıya dönüştürmek yerine, yan etkilere de sahip olabilir. print() fonksiyonu bunun temel bir örneğidir: Konsola bir şey vermenin yan etkisine sahipken, hiçbiri'ni döndürmez. Ancak, dekoratörler anlamak için, fonksiyonları ifadeleri bir değere dönüştüren bir şey olarak düşünmek yeterlidir.

**Not:** Fonksiyonel programlamada, yan etkiler olmadan sadece saf fonksiyonlarla çalışırsınız (neredeyse). Tamamen işlevsel bir dil olmasa da, Python birinci sınıf öbekler gibi fonksiyonlar de dahil olmak üzere birçok fonksiyonel programlama kavramını desteklemektedir.
 
## Birinci Sınıf Öbekler

Python'da fonksiyonlar birinci sınıf öbeklerdir. Bu fonksiyonlar diğer öbekler gibi (string, int, float, list, vb.), fonksiyonların içinden geçirilip argüman olarak kullanılabileceği anlamına gelir. Aşağıdaki üç işlevi göz önünde bulundurun:

{% highlight python  linenos=table %}
def say_hello(name):
    return f"Hello {name}"

def be_awesome(name):
    return f"Yo {name}, together we are the awesomest!"

def greet_bob(greeter_func):
    return greeter_func("Bob")
{% endhighlight %}


Burada, say_hello() ve be_awesome(), bir dizge olarak verilen bir -**name**- isimi bekleyen normal fonksiyonlardır. Ancak greet_bob() fonksiyonu, kendi ifadesi olarak bir fonksiyon bekler. Örneğin, say_hello() veya be_awesome() fonksiyonuna iletebiliriz:

{% highlight python %}
>>> greet_bob(say_hello)
'Hello Bob'
>>> greet_bob(be_awesome)
'Yo Bob, together we are the awesomest!'
{% endhighlight %}

greet_bob (say_hello) 'nun iki işleve, ancak farklı yollara başvurduğunu unutmayın: greet_bob() ve '''say_hello'''. Say_hello işlevi parantez içermiyor. Bu, işleve yalnızca bir referansın geçirildiği anlamına gelir. İşlev yürütülmez. Öte yandan, greet_bob() işlevi parantez ile yazıldığından, her zamanki gibi çağrılır.






