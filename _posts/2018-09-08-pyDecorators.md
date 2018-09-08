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

{% highlight python linenos=table %}
def ekle_bir(numara):
     return numara + 1

{% endhighlight %}


{% highlight python %}
In [1]: ekle_bir(2)
Out[1]:  3
{% endhighlight %}

Genel olarak, Python'daki fonksiyonlar, bir girdiyi bir çıktıya dönüştürmek yerine, yan etkilere de sahip olabilir. ```print()``` fonksiyonu bunun temel bir örneğidir: Konsola bir şey vermenin yan etkisine sahipken, hiçbiri'ni döndürmez. Ancak, dekoratörler anlamak için, fonksiyonları ifadeleri bir değere dönüştüren bir şey olarak düşünmek yeterlidir.

**Not:** Fonksiyonel programlamada, yan etkiler olmadan sadece saf fonksiyonlarla çalışırsınız (neredeyse). Tamamen fonksiyonel bir dil olmasa da, Python birinci sınıf öbekler gibi fonksiyonlar de dahil olmak üzere birçok fonksiyonel programlama kavramını desteklemektedir.
 
## Birinci Sınıf Öbekler

Python'da fonksiyonlar birinci sınıf öbeklerdir. Bu fonksiyonlar diğer öbekler gibi (string, int, float, list, vb.), fonksiyonların içinden geçirilip argüman olarak kullanılabileceği anlamına gelir. Aşağıdaki üç işlevi göz önünde bulundurun:

{% highlight python  linenos=table %}
def merhaba_de(ad):
    return "Merhaba " + ad

def harika_ol(ad): 
    return "Hey " + ad + ", biz birlikte harikayız!"

def merhaba_kedi(selamlama_fonk):
    return selamlama_fonk("Kedi")

{% endhighlight %}


Burada, ```merhaba_de()``` ve ```harika_ol()```, bir dizge olarak verilen bir -**ad**- ismini bekleyen normal fonksiyonlardır. Ancak ```merhaba_kedi()``` fonksiyonu, kendi ifadesi olarak bir fonksiyon -```selamlama_fonk```- bekler. Örneğin, ```merhaba_de()``` veya ```harika_ol()``` fonksiyonuna iletebiliriz:

{% highlight python %}
In [1]: merhaba_kedi(merhaba_de)
Out[1]: 'Merhaba Kedi'

In [2]: merhaba_kedi(harika_ol)
Out[2]: 'Hey Kedi, biz birlikte harikayız!'
{% endhighlight %}

```merhaba_kedi(merhaba_de)```'nin iki fonksiyona, ancak farklı yollara başvurduğunu unutmayın: ```harika_ol()``` ve ```merhaba_de```. ```merhaba_de``` fonksiyonu parantez içermiyor. Bu, fonksiyona yalnızca bir atfın geçirildiği anlamına gelir. fonksiyon yürütülmez. Öte yandan, ```merhaba_kedi()``` fonksiyonu parantez ile yazıldığından, her zamanki gibi çağrılır.






