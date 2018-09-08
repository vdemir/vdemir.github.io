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

<div class="pop">Dekoratörler</div> 

<br>

* [Fonksiyonlar](#D1)
   * [Birinci Sınıf Öbekler](#D2)

Dekoratörlerle ilgili bu eğiticide, neye, nasıl oluşturulacağına ve kullanılacağına bakacağız. Dekoratörler, yüksek mertebeden fonksiyonları çağırmak için basit bir sözdizimi sağlar. 

Matematik ve bilgisayar bilimlerinde, daha yüksek mertebeden bir fonksiyon (aynı zamanda fonksiyonel, fonksiyonel form) aşağıdakilerden en az birini yapan bir fonksiyondur: 

- ifade olarak bir veya daha fazla fonksiyon alır (örn. Yordamsal parametreler) , 
- sonuç olarak bir fonksiyonu döndürür.

Tanım olarak, bir dekoratör, başka bir fonksiyon alan ve  açık bir şekilde değiştirmeden aldığı fonksiyonun davranışını genişleten bir fonksiyondur. 

Bu kafa karıştırıcı gibi geliyor, ancak özellikle de dekoratörlerin nasıl çalıştığına dair birkaç örnek gördükten sonra değil. Bu makaledeki tüm örnekleri burada bulabilirsiniz.

<style>
	.box {
		color: orange;
		font-size: 3vw;
		padding: 5vw;
		margin: 5vw;
		border-style: solid;
	}
	.pop {
		font-size: 5vw;
		text-decoration: overline;
		text-decoration-color: orange;
	}
	.pop1 {
		font-size: 3vw;
		text-decoration: overline;
		text-decoration-color: orange;
	}
</style>

<div class="box">Bu kafa karıştırıcı gibi geliyor, ancak özellikle de dekoratörlerin nasıl çalıştığına dair birkaç örnek gördükten sonra değil.</div>

<br>
<div id="D1" class="pop1">Fonksiyonlar</div>

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

<br>

<div id="D2" class="pop1">Birinci Sınıf Öbekler</div>

Python'da fonksiyonlar birinci sınıf öbeklerdir. Bu fonksiyonlar diğer öbekler gibi (string, int, float, list, vb.), fonksiyonların içinden geçirilip argüman olarak kullanılabileceği anlamına gelir. Aşağıdaki üç fonksiyonu göz önünde bulundurun:

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

```merhaba_kedi(merhaba_de)```'nin iki fonksiyona, ancak farklı yollara başvurduğunu unutmayın: ```harika_ol()``` ve ```merhaba_de```. ```merhaba_de``` fonksiyonu parantez içermiyor. Bu, fonksiyona yalnızca bir atfın geçirildiği anlamına gelir. Fonksiyon yürütülmez. Öte yandan, ```merhaba_kedi()``` fonksiyonu parantez ile yazıldığından, her zamanki gibi çağrılır.

<br>

<div class="pop1">İç fonksiyonlar</div>

**Diğer fonksiyonların içinde fonksiyonlar tanımlamak** mümkündür. Bu gibi fonksiyonlar iç fonksiyonlar içinde çağrılır. İki iç fonksiyonlu bir fonksiyon örneği buradadır:

{% highlight python  linenos=table %}

def ebeveyn():
    print("ebeveyn() fonksiyonundan okunuyor ...")

    def ilk_veled():
        print("ilk_veled() fonksiyonundan okunuyor ...")

    def ikinci_veled():
        print("ikinci_veled() fonksiyonundan okunuyor ...")

    ikinci_veled()
    ilk_veled()

{% endhighlight %}

```ebeveyn()``` fonksiyonu çağırdığınızda ne olur? Bir dakikalığına düşün bunu. Çıkış aşağıdaki gibi olacaktır:

{% highlight python %}
In [1]: ebeveyn()
ebeveyn() fonksiyonundan okunuyor ...
ikinci_veled() fonksiyonundan okunuyor ...
ilk_veled() fonksiyonundan okunuyor ...
{% endhighlight %}

İç fonksiyonların tanımlandığı sıranın önemli olmadığını unutmayın. Diğer fonksiyonlarda olduğu gibi, yazdırma yalnızca iç fonksiyonlar yürütüldüğünde gerçekleşir.

Ayrıca, üst fonksiyon çağrılana kadar iç fonksiyonlar tanımlanmamıştır. Bunlar yerel olarak ```ebeveyn()``` ile kapsama alınıp araştırılır: bunlar yalnızca yerel değişkenler olarak ```ebeveyn()``` fonksiyonu içinde bulunur. ```ilk_veled()``` öğesini çağırmayı deneyin. Bir hata almalısınız:

{% highlight python %}
In [2]: ilk_veled()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    ilk_veled()
NameError: name 'ilk_veled' is not defined
{% endhighlight %}

ebeveyn() çağırdığınızda, ```ilk_veled()``` ve ```ikinci_veled()``` iç fonksiyonları da çağrılır. Ancak yerel kapsamı nedeniyle, ```ebeveyn()``` fonksiyonu dışında mevcut değildir.

<br>

<div class="pop1">Fonksiyonlardan Dönen Fonksiyonlar</div>

Python, fonksiyonları dönüş değeri olarak kullanmanıza da izin verir. Aşağıdaki örnek, dış ebeveyn() fonksiyonundan iç fonksiyonların birini döndürür. 

{% highlight python  linenos=table %}

def ebeveyn(num):
    def ilk_veled():
        return "Merhaba ben Emma"

    def ikinci_veled():
        return "Bana Liam deyin"

    if num == 1:
        return ilk_veled
    else:
        return ikinci_veled

{% endhighlight %}

Parantez olmadan ```ilk_veled``` döndürdüğünüzü unutmayın. Bunun, ```ilk_veled``` fonksiyonuna bir atıf döndürdüğünüz anlamına geldiğini hatırlayın. Aksine, ```ilk_veled()``` parantez içinde, fonksiyonun değerlendirilmesi sonucunu ifade eder. Bu, aşağıdaki örnekte görülebilir:


{% highlight python %}
In [1]: ilk=ebeveyn(1)
In [2]: ilk
Out[2]: <function __main__.ebeveyn.<locals>.ilk_veled>

In [4]: ikinci=ebeveyn(2)
In [5]: ikinci
Out[5]: <function __main__.ebeveyn.<locals>.ikinci_veled>
{% endhighlight %}

Bir miktar şifreli çıktı, basitçe, ```ebeveyn()``` içindeki, ```ikinci``` değişkeni ```ikinci_veled()``` fonksiyonuna işaret ederken ```ilk``` değişkeni yerel ```ilk_veled()``` fonksiyonuna başvurur.

İşaret ettikleri fonksiyonlara doğrudan erişilemese bile, artık normal fonksiyonlarmış gibi şimdi ```ilk``` ve ```ikinci``` kullanabilirsiniz:

{% highlight python %}
In [8]: ilk=ebeveyn(1)
In [9]: ilk()
Out[9]: 'Merhaba ben Emma'

In [10]: ikinci=ebeveyn(2)
In [11]: ikinci()
Out[11]: 'Bana Liam deyin'
{% endhighlight %}

Son olarak, daha önceki örnekte, iç fonksiyonları ```ebeveyn``` fonksiyon içinde gerçekleştirdiğinizi unutmayın,```ilk_veled()``` özdeşi. Bununla birlikte, bu son örnekte, -```return```- den sonra iç fonksiyonlara parantez eklemediniz -```ilk_veled```-. Bu şekilde, gelecekte çağırabileceğiniz her bir fonksiyona bir atıf aldın. Mantıklı olmak?

<br>

<div class="pop1">Basit Dekoratörler</div>

Artık, bu fonksiyonların Python'daki diğer herhangi bir öbek gibi olduğunu gördüğünüze göre, Python dekoratörü olan büyülü yaratığa geçmeye ve görmeye hazırsınız. Bir örnekle başlayalım:

{% highlight python  linenos=table %}

def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

def say_whee():
    print("Whee!")

say_whee = my_decorator(say_whee)

{% endhighlight %}

```say_whee()``` çağırdığınızda ne olacağını tahmin edebilir misiniz? Dene:

{% highlight python %}

In [1]: say_whee()
Something is happening before the function is called.
Whee!
Something is happening after the function is called.

{% endhighlight %}






