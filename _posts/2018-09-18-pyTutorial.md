---
layout: post
title:  Python Tutorial
date:   2018-09-18 12:00:00
last_updated: 2018-19-15 12:00:00
keywords: linux, python
summary: "Python Eğitici Kısa Rehber"
excerpt: This post is about Python.
categorie: Programlama
tags:   Python Linux Programlama
categories: [Python, Programlama]
permalink: /pyTutorial/
comments: false
published: true
lang: tr
---

<!-- syntax highlighting CSS -->
 
<link href="//fonts.googleapis.com/css?family=Life+Savers" rel="stylesheet">
<style>
 .off {
    font-family: 'Life Savers', serif;
    font-size: 1.7vw;
    font-feature-settings: "liga" off;
    color: #2c3e50;
  }
 .on {
    font-family: 'Life Savers', serif;
    font-size: 1.7vw;
    font-feature-settings: "liga" on;
    color: #131418;
  }
 p {
    font-family: 'Life Savers', serif;
    font-size: 1.7vw;
    font-feature-settings: "liga" on;
    color: #131418;
  }
 ul {
    font-family: 'Life Savers', serif;
    font-size: 1.7vw;
    font-feature-settings: "liga" on;
    color: #131418;
  }
 li {
    font-family: 'Life Savers', serif;
    font-size: 1.7vw;
    font-feature-settings: "liga" on;
    color: #131418;
  }
 h1 {
    font-family: 'Life Savers', serif;
    font-size: 1.7vw;
    font-feature-settings: "liga" on;
    color: #131418;
  }
</style>
<span class="off">fi</span>
<span class="on">fi</span>
<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/python/Python-Decorators.png" alt="Decorators" class="resize" />
  <p><small>Python &bull; Decorators.</small></p>
</div> 
  
<style>
img.resize {
  		max-width:100%;
  		max-height:100%;
         }
	.box {
		color: orange;
		font-size: 3vw;
		padding: 5vw;
		margin: 5vw;
		border-style: solid;
	}
	.pop {
		font-size: 4vw;
		text-decoration: overline;
		text-decoration-color: orange;
	}
	.pop0 {
		font-size: 3vw;
		text-decoration: overline;
		text-decoration-color: orange;
	}
	.pop1 {
		font-size: 2vw;
		text-decoration: overline;
		text-decoration-color: orange;
	}
	.pop2 {
		font-size: 1.75vw;
		text-decoration: overline;
		text-decoration-color: orange;
       
	}

       .python3 {
    		background-color: #E3F2FD;
    		color:#01579B;
    		border-color:#1abc9c;
    		position:relative;
    		padding:.07rem 1.25rem;
    		margin-bottom:1.125rem;
    		border:1px solid transparent;
    		border-radius:.25rem;
                max-width:70%;
  		max-height:100%;
       }

	.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1.125rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4.1875rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#32516b;background-color:#dfebf5;border-color:#d3e3f1}.alert-primary hr{border-top-color:#c0d7eb}.alert-primary .alert-link{color:#223748}.alert-secondary{color:#7d7d7d;background-color:#fcfcfc;border-color:#fbfbfb}.alert-secondary hr{border-top-color:#eee}.alert-secondary .alert-link{color:#646464}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#850000;background-color:#fcc;border-color:#ffb8b8}.alert-danger hr{border-top-color:#ff9f9f}.alert-danger .alert-link{color:#520000}.alert-light{color:gray;background-color:#fdfdfd;border-color:#fcfcfc}.alert-light hr{border-top-color:#efefef}.alert-light .alert-link{color:#676767}.alert-dark{color:#0c1c28;background-color:#d1d7db;border-color:#bec6cd}.alert-dark hr{border-top-color:#b0b9c2}.alert-dark .alert-link{color:#000101}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}
</style>
<br>

<div class="pop">Süslü fonksiyonlar</div> 

<br>

+ 1 [Fonksiyonlar](#D1)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.1&nbsp;[Birinci Sınıf Öbekler](#D11)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.2&nbsp;[İç Fonksiyonlar](#D12)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.3&nbsp;[Fonksiyonlardan Dönen Fonksiyonlar](#D13)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.4&nbsp;[Fonksiyonlar hakkında bilmeniz gerekenler](#D14)
       - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.4.1&nbsp;[Fonksiyonları diğer fonksiyonlar içinde tanımlayın](#D141)
       - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.4.2&nbsp;[Fonksiyonlar diğer fonksiyonlara parametre olarak geçirilebilir](#D142)
       - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.4.3&nbsp;[Fonksiyonlar diğer fonksiyonlari döndürebilir](#D143)
       - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.4.4&nbsp;[İç fonksiyonlar bildirim alanını çevreleyerek erişime sahip olurlar](#D144)
       - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.4.5&nbsp;[Süslü fonksiyonların Bileşimi](#D145)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.5&nbsp;[Kısmi fonksiyonlar](#D15)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.6&nbsp;[Functools.wraps Ne Yapar?](#D16)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.7&nbsp;[Functools.wraps nasıl kullanılır?](#D17)



Süslü fonksiyonlarla ilgili bu eğiticide, neye, nasıl oluşturulacağına ve kullanılacağına bakacağız. Süslü fonksiyonlar, yüksek mertebeden fonksiyonları çağırmak için basit bir sözdizimi sağlar. 

Matematik ve bilgisayar bilimlerinde, daha yüksek mertebeden bir fonksiyon (aynı zamanda fonksiyonel, fonksiyonel form) aşağıdakilerden en az birini yapan bir fonksiyondur: 

1. ifade olarak bir veya daha fazla fonksiyon alır (örn. Yordamsal parametreler) , 
2. sonuç olarak bir fonksiyonu döndürür.

Tanım olarak, bir Süslü fonksiyon, başka bir fonksiyon alan ve  açık bir şekilde değiştirmeden aldığı fonksiyonun davranışını genişleten bir fonksiyondur. 

<div class="alert alert-success" role="alert">
<p><strong>Bilgi:</strong> Python ile ilgili olarak bahsettiğimiz 'süslü fonksiyonlar'  fonksiyonları ve yöntemleri daha kolay değiştirmemizi sağlayan Python sözdizimine özel bir değişikliktir. Tasarım desenleri bağlamında, süslü fonksiyonlar, alt sınıfları doğrudan kullanmak zorunda kalmadan bir fonksiyon, yöntem veya sınıfın fonksiyonselliğini dinamik olarak değiştirir. Bu, değiştirmek istemediğiniz fonksiyonlarin fonksiyonselliğini genişletmeniz gerektiğinde idealdir.</p>
</div>

Esas olarak, süslü fonksiyonlar çevreleyici olarak fonksiyon görürler, fonksiyonun kendisini değiştirmeye gerek kalmadan, orijinal fonksiyonselliği arttırarak ve böylece süslemesini yaparak, kodun bir hedef fonksiyon yürütme işleminden önce ve sonra davranışlarını değiştirirler.

Bu kafa karıştırıcı gibi geliyor, ancak özellikle de süslü fonksiyonların nasıl çalıştığına dair birkaç örnek gördükten sonra değil. Bu makaledeki tüm örnekleri burada bulabilirsiniz.


<div  class="off">Bu kafa karıştırıcı gibi geliyor, ancak özellikle de süslü fonksiyonların nasıl çalıştığına dair birkaç örnek gördükten sonra değil.</div>

<br>

<div id="D1" class="pop0">1 Fonksiyonlar</div>

Süslü fonksiyonları anlayabilmeniz için öncelikle fonksiyonların nasıl çalıştığını anlamanız gerekir. Bizim amacımız için, bir fonksiyon verilen ifadelere dayalı bir değer döndürür. İşte çok basit bir örnek:

{% highlight python linenos=table %}

def ekle_bir(numara):
     return numara + 1

{% endhighlight %}

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

In [1]: ekle_bir(2)
Out[1]:  3

{% endhighlight %}

Genel olarak, Python'daki fonksiyonlar, bir girdiyi bir çıktıya dönüştürmek yerine, yan etkilere de sahip olabilir. ```print()``` fonksiyonu bunun temel bir örneğidir: Konsola bir şey vermenin yan etkisine sahipken, hiçbiri'ni döndürmez. Ancak, süslü fonksiyonlar anlamak için, fonksiyonları ifadeleri bir değere dönüştüren bir şey olarak düşünmek yeterlidir.
 
<br>

<div class="alert alert-primary" role="alert">
<p><strong>Note:</strong> Fonksiyonel programlamada, yan etkiler olmadan sadece saf fonksiyonlarla çalışırsınız (neredeyse). Tamamen fonksiyonel bir dil olmasa da, Python birinci sınıf öbekler gibi fonksiyonlar de dahil olmak üzere birçok fonksiyonel programlama kavramını desteklemektedir.</p>
</div>

Bilgisayar biliminde, Fonksiyonel programlama, hesaplamayı matematiksel fonksiyonların değerlendirilmesi olarak hesaplamayı işleyen ve değişen durum ve değişebilir verileri önleyen bir programlama paradigmasıdır. Bir bildirimsel programlama paradigmasıdır, yani programlama, ifadeler yerine deyim veya bildirimlerle yapılır.

Fonksiyonel programlamada beyanlar-```statements```- yerine ifadeler-```expressions```- ve bildirimler-```declarations```- kullanılır; bir programlama dilinde bir ifade, programlama dilinin başka bir değer üretmesi için yorumladığı ve hesapladığı bir veya daha fazla sabit, değişken, operatör ve fonksiyonlarin birleşimidir. Bu süreç, matematiksel ifadeler için değerlendirmeye denir.

<br>

<div id="D11" class="pop1">1.1 Birinci Sınıf Öbekler</div>

Python'da fonksiyonlar birinci sınıf öbeklerdir. Bu fonksiyonlar diğer öbekler (string, int, float, list, vb.) gibi, fonksiyonların içinden geçirilip bir ifade olarak kullanılabileceği anlamına gelir. Aşağıdaki üç fonksiyonu göz önünde bulundurun:

{% highlight python  linenos=table %}

def merhaba_de(ad):
    return "Merhaba " + ad

def harika_ol(ad): 
    return "Hey " + ad + ", biz birlikte harikayız!"

def merhaba_kedi(selamlama_fonk):
    return selamlama_fonk("Kedi")

{% endhighlight %}


Burada, ```merhaba_de()``` ve ```harika_ol()```, bir dizge olarak verilen bir -**ad**- ismini bekleyen normal fonksiyonlardır. Ancak ```merhaba_kedi()``` fonksiyonu, kendi ifadesi olarak bir fonksiyon -```selamlama_fonk```- bekler. Örneğin, ```merhaba_de()``` veya ```harika_ol()``` fonksiyonuna iletebiliriz:
<br>
<h2 class="python3">Python</h2>
{% highlight python %}
In [1]: merhaba_kedi(merhaba_de)
Out[1]: 'Merhaba Kedi'

In [2]: merhaba_kedi(harika_ol)
Out[2]: 'Hey Kedi, biz birlikte harikayız!'
{% endhighlight %}

```merhaba_kedi(merhaba_de)```'nin iki fonksiyona, ancak farklı yollara başvurduğunu unutmayın: ```harika_ol()``` ve ```merhaba_de```. ```merhaba_de``` fonksiyonu parantez içermiyor. Bu, fonksiyona yalnızca bir atfın geçirildiği anlamına gelir. Fonksiyon yürütülmez. Öte yandan, ```merhaba_kedi()``` fonksiyonu parantez ile yazıldığından, her zamanki gibi çağrılır.

<br>

<div id="D12" class="pop1">1.2 İç fonksiyonlar</div>

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
<br>
<h2 class="python3">Python</h2>
{% highlight python %}
In [2]: ilk_veled()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    ilk_veled()
NameError: name 'ilk_veled' is not defined
{% endhighlight %}

ebeveyn() çağırdığınızda, ```ilk_veled()``` ve ```ikinci_veled()``` iç fonksiyonları da çağrılır. Ancak yerel kapsamı nedeniyle, ```ebeveyn()``` fonksiyonu dışında mevcut değildir.

<br>







