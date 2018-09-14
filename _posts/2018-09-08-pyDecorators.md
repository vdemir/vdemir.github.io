---
layout: post
title:  Python Süslü fonksiyonlar için Bir Başlangıç
date:   2018-09-08 12:00:00
last_updated: 2018-09-15 12:00:00
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

<!-- syntax highlighting CSS -->
 

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
+ 2 [Basit Süslü fonksiyonlar](#D2)
    - &nbsp;&nbsp;&nbsp;&nbsp; 2.1&nbsp;[Sözdizimsel Şeker!](#D21)
       - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.1.1&nbsp;[Süslü fonksiyonları Yeniden Kullanmak](#D211)
       - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.1.2&nbsp;[Biraz Daha Faydalı](#D212)
       - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.1.3&nbsp;[Meta sınıflar ve süslü fonksiyonlar: uzayda yapılmış bir eşleme](#D213)
    - &nbsp;&nbsp;&nbsp;&nbsp; 2.2&nbsp;[Süslü fonksiyonları Yeniden Kullanmak](#D22)
    - &nbsp;&nbsp;&nbsp;&nbsp; 2.3&nbsp;[İfadelerle Bezeyen Fonksiyonlar](#D23)
    - &nbsp;&nbsp;&nbsp;&nbsp; 2.4&nbsp;[Süslü Fonksiyonlardan Dönen Değerler](#D24)
    - &nbsp;&nbsp;&nbsp;&nbsp; 2.5&nbsp;[Kimsin sen, Gerçekten mi?](#D25)
+ 3 [Birkaç Gerçek Dünya Örneği](#D3)
    - &nbsp;&nbsp;&nbsp;&nbsp; 3.1&nbsp;[Zamanlama Fonksiyonları](#D31)
    - &nbsp;&nbsp;&nbsp;&nbsp; 3.2&nbsp;[Hata ayıklama kodu](#D32)
    - &nbsp;&nbsp;&nbsp;&nbsp; 3.3&nbsp;[Kod Aşağı Çekiliyor](#D33)
    - &nbsp;&nbsp;&nbsp;&nbsp; 3.4&nbsp;[Eklentileri Kaydetme](#D34)
    - &nbsp;&nbsp;&nbsp;&nbsp; 3.5&nbsp;[Kullanıcı Oturumu Açıldı mı?](#D35)
+ 4 [Çok Süslü Fonksiyonlar](#D4)
    - &nbsp;&nbsp;&nbsp;&nbsp; 4.1&nbsp;[İç İçe Süslü Fonksiyonlar](#D41)
    - &nbsp;&nbsp;&nbsp;&nbsp; 4.2&nbsp;[İfadeler ile Süslü Fonksiyonlar](#D42)
    - &nbsp;&nbsp;&nbsp;&nbsp; 4.3&nbsp;[Her ikisi de Lütfen, Ama Asla Zarar Vermeyin](#D43)
    - &nbsp;&nbsp;&nbsp;&nbsp; 4.4&nbsp;[Durumsal Süslü Fonksiyonlar](#D44)
    - &nbsp;&nbsp;&nbsp;&nbsp; 4.5&nbsp;[Süslü Fonksiyonlar gibi Sınıflar](#D45)


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


<div class="box">Bu kafa karıştırıcı gibi geliyor, ancak özellikle de süslü fonksiyonların nasıl çalıştığına dair birkaç örnek gördükten sonra değil.</div>

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

<div id="D13" class="pop1">1.3 Fonksiyonlardan Dönen Fonksiyonlar</div>

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

<br>
<h2 class="python3">Python</h2>
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

<br>

<h2 class="python3">Python</h2>

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

<div id="D14" class="pop1">1.4 Fonksiyonlar Hakkında Bilmeniz Gerekenler</div>

Dalış yapmadan önce, net olması gereken bazı önkoşullar vardır. Python'da, fonksiyonlar birinci sınıf vatandaşlar, onlar öbeklerdir ve bu da onlarla çok yararlı şeyler yapabileceğimiz anlamına gelir. 

**Değişkenlere fonksiyon atama**


{% highlight python %}

def greet(name):
    return "hello "+name

greet_someone = greet
print greet_someone("John")

# Outputs: hello John

{% endhighlight %}

<br>
<div id="D141" class="pop2">1.4.1 Fonksiyonları diğer fonksiyonlar içinde tanımlayın</div>
<br> 


{% highlight python %}

def greet(name):
    def get_message():
        return "Hello "

    result = get_message()+name
    return result

print greet("John")

# Outputs: Hello John

{% endhighlight %}


<br>
<div id="D142" class="pop2">1.4.2 Fonksiyonlar diğer fonksiyonlara parametre olarak geçirilebilir</div>
<br> 


{% highlight python %}

def greet(name):
    def get_message():
        return "Hello "

    result = get_message()+name
    return result

print greet("John")

# Outputs: Hello John

{% endhighlight %}


<br>
<div id="D143" class="pop2">1.4.3 Fonksiyonlar diğer fonksiyonlari döndürebilir</div>
<br> 

Başka bir deyişle, diğer fonksiyonları üreten fonksiyonlar.

{% highlight python %}

def compose_greet_func():
    def get_message():
        return "Hello there!"

    return get_message

greet = compose_greet_func()
print greet()

# Outputs: Hello there!

{% endhighlight %}


<br>
<div id="D144" class="pop2">1.4.4 İç fonksiyonlar bildirim alanını çevreleyerek erişime sahip olurlar</div>
<br>

Daha çok bir kapanma olarak bilinir. Süslü fonksiyonlar inşa ederken karşılaşacağımız çok güçlü bir desen. Unutulmaması gereken bir başka şey ise, Python sadece dış bildirim alanını okumaya izin verir ve atamaya izin vermez. Yukarıdaki örneği, iç fonksiyonun kapalı kapsamından bir 'name' ifadeyi okumak ve yeni fonksiyonu döndürmek için nasıl değiştirdiğimizi fark ettik.

{% highlight python %}

def compose_greet_func(name):
    def get_message():
        return "Hello there "+name+"!"

    return get_message

greet = compose_greet_func("John")
print greet()

# Outputs: Hello there John!

{% endhighlight %}

<br>
<div id="D145" class="pop2">1.4.5 Süslü fonksiyonların Bileşimi</div>
<br>

Süslü fonksiyonlar, mevcut fonksiyonları basit bir şekilde çevrelerler. Yukarıda bahsi geçen fikirleri bir araya getirerek bir süslü fonksiyon yapabiliriz. Bu örnekte, başka bir fonksiyonun string çıktısını p etiketleriyle saran bir fonksiyonu düşünelim.

{% highlight python %}

def get_text(name):
   return "lorem ipsum, {0} dolor sit amet".format(name)

def p_decorate(func):
   def func_wrapper(name):
       return "<p>{0}</p>".format(func(name))
   return func_wrapper

my_get_text = p_decorate(get_text)

print my_get_text("John")

# <p>Outputs lorem ipsum, John dolor sit amet</p>

{% endhighlight %}

Bu bizim ilk süslü fonksiyonumuzdu. Başka bir fonksiyonu ifade olarak alan bir fonksiyon, yeni bir fonksiyon üretir, orijinal fonksiyonun çalışmasını çoğaltır ve oluşturulan fonksiyonu döndürerek her yerde kullanabiliriz. get_text'in kendisi p_decorate tarafından donatılması için, sadece get_text 'i p_decorate sonucuna atamak zorundayız.

{% highlight python %}

get_text = p_decorate(get_text)

print get_text("John")

# Outputs lorem ipsum, John dolor sit amet

{% endhighlight %}

Dikkat edilmesi gereken diğer bir şey, süslü fonksiyonumuzun bir isim ifadesini almasıdır. Süslü fonksiyonda yapmamız gereken her şey, get_text'in çevreleyicisinin bu ifadeyi geçmesine izin vermektir.

<br>

<div id="D15" class="pop1">1.5 Kısmi fonksiyonlar</div>

functools kütüphanesinden kısmi fonksiyonu kullanarak python'da kısmi fonksiyonlar oluşturabilirsiniz. 

Kısmi fonksiyonlar, daha az parametre ve daha sınırlı fonksiyon için ayarlanan sabit değerler ile bir fonksiyona x parametresiyle bir fonksiyon türettirilmesini sağlar. 

İçe aktarma gerekli:

{% highlight python  linenos=table %}

from functools import partial

def multiply(x,y):
        return x * y

# create a new function that multiplies by 2
dbl = partial(multiply,2)
print(dbl(4))

{% endhighlight %}

Bu kod 8'e dönecek.

<br>
<h2 class="python3">Python</h2>
{% highlight python %}

8

{% endhighlight %}

Önemli bir not: varsayılan değerler, değişkenleri soldan değiştirmeye başlar. 2 x'in yerini alacak. dbl(4) çağrıldığında y eşittir. Bu örnekte bir fark yaratmaz, ancak aşağıdaki örnekte yer almaktadır.

<br>

<div id="D16" class="pop1">1.6 Functools.wraps Ne Yapar?</div>

Bir süslü fonksiyon kullandığınızda, bir fonksiyonu bir diğeriyle değiştirirsiniz. Başka bir deyişle, bir süslü fonksiyonunuz varsa

{% highlight python %}

def logged(func):
    def with_logging(*args, **kwargs):
        print func.__name__ + " was called"
        return func(*args, **kwargs)
    return with_logging

{% endhighlight %}
o zaman siz 
<br>
{% highlight python %}

@logged
def f(x):
   """does some math"""
   return x + x * x
{% endhighlight %}

dersiniz.
<br>

{% highlight python %}

def f(x):
    """does some math"""
    return x + x * x
f = logged(f)
{% endhighlight %}

söylemekle tamamen aynı şeydir.

ve fonksiyonunuzun f, with_logging fonksiyonuyla değiştirilir. Ne yazık ki, bu demek oluyor ki,

{% highlight python %}

print f.__name__
{% endhighlight %}

 with_logging yazdıracağız, çünkü bu yeni fonksiyonunuzun adı. Aslında, eğer f için docstring belgesi değerine bakarsanız, boş olacaktır çünkü with_logging'ın hiçbir docstring belgesi değeri yoktur ve yazdığınız dokümanlar artık orada olmayacaktır. Ayrıca, bu fonksiyon için pydoc sonucuna bakarsanız, bir x ifadesi alarak listelenmeyecek; bunun yerine *args ve **kwargs olarak listelenecektir çünkü bu, with_logging'in ele aldığı şeydir.

Bir süslü fonksiyon kullanmak her zaman bir fonksiyon hakkında bu bilgiyi kaybetmek anlamına gelirse, ciddi bir sorun olur. Bu yüzden functools.wraps var. Bu, bir süslü fonksiyonda kullanılan bir fonksiyonu alır ve fonksiyon adı, docstring belgesi, ifade listesi vb. üzerine kopyalama fonksiyonelliğini ekler. Ve wraps kendisi bir süslü fonksiyon olduğundan, aşağıdaki kod doğru şeyi yapar:

{% highlight python linenos=table %}

from functools import wraps
def logged(func):
    @wraps(func)
    def with_logging(*args, **kwargs):
        print (func.__name__ + " was called")
        return func(*args, **kwargs)
    return with_logging

@logged
def f(x):
   """does some math"""
   return x + x * x

print (f.__name__)  # prints 'f'
print (f.__doc__)   # prints 'does some mat

print (f(5))  # prints 'f was called' 
{% endhighlight %}

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

f
does some math

f was called
30
{% endhighlight %}

<br>

<div id="D17" class="pop1">1.7 Functools.wraps Nasıl Kullanılır?</div>

Bugün hakkında konuşmak istediğim az bilinen bir araç var. Buna wraps denir ve functools modülünün bir parçasıdır. Doküman dizelerini ve süslü işlevlerin adlarını docstring belgelerini düzeltmek için bir @süslü fonksiyon olarak wraps kullanabilirsiniz. Bu neden önemli? Bu ilk başta garip bir durum gibi görünüyor, ancak bir API veya kendinizden başka birisinin kullanacağı herhangi bir kod yazıyorsanız, bu önemli olabilir. Nedeni, Python’un bir başkasının kodunu bulmak için içbakış kullandığınızda, süslü bir fonksiyon yanlış bilgileri döndürecektir. example.py olarak adlandırdığım basit bir örneğe bakalım:

{% highlight python linenos=table %}

# example.py
 
#----------------------------------------------------------------------
def another_function(func):
    """
    A function that accepts another function
    """
 
    def wrapper():
        """
        A wrapping function
        """
        val = "The result of %s is %s" % (func(),
                                          eval(func())
                                          )
        return val
    return wrapper
 
#----------------------------------------------------------------------
@another_function
def a_function():
    """A pretty useless function"""
    return "1+1"
 
#----------------------------------------------------------------------
if __name__ == "__main__":
    print (a_function.__name__)
    print (a_function.__doc__)
{% endhighlight %}

<br>
help(example):
<br>
{% highlight python %}

wrapper

        A wrapping function
{% endhighlight %}
<br>

{% highlight python %}

Help on module example:

NAME
    example - # example.py

FUNCTIONS
    a_function = wrapper()
        A wrapping function
    
    another_function(func)
        A function that accepts another function

FILE
    ~/example.py


{% endhighlight %}
<br>
Bu kodda, '''**a_function**''' olarak adlandırılan fonksiyonu bir **another_function** ile donatırız. Fonksiyonun '''**__name__**''' ve '''**__doc__**''' özelliklerini kullanarak baskı yaparak '''a_function'''’ın adını ve '''docstring''' belgesi belgesini kontrol edebilirsiniz. Bu örneği çalıştırırsanız, çıktı için aşağıdakini alırsınız:


Bu doğru değil! Bu programı IDLE veya yorumlayıcıda çalıştırırsanız, bunun gerçekten kafa karıştırıcı, gerçekten hızlı bir şekilde nasıl elde edilebileceği daha da açık hale gelir. Bu gerçekten nasıl kafa karıştırıcı, gerçekten hızlı olabilir daha da belirgin hale geliyor.

Temel olarak burada olan şey, süslü fonksiyonun adını ve '''docstring''' belgesini kendi başına değiştirmesidir.

<br>

<div id="D171" class="pop1">1.7.1 Yardım için Wraps!</div>

Bu küçük karışıklığı nasıl düzeltiriz? Python geliştiricileri bize '''functools.wraps''' çözümü verdi! Hadi kontrol edelim:


{% highlight python linenos=table %}

from functools import wraps
 
#----------------------------------------------------------------------
def another_function(func):
    """
    A function that accepts another function
    """
 
    @wraps(func)
    def wrapper():
        """
        A wrapping function
        """
        val = "The result of %s is %s" % (func(),
                                          eval(func())
                                          )
        return val
    return wrapper
 
#----------------------------------------------------------------------
@another_function
def a_function():
    """A pretty useless function"""
    return "1+1"
 
#----------------------------------------------------------------------
if __name__ == "__main__":
    #a_function()
    print (a_function.__name__)
    print (a_function.__doc__)
{% endhighlight %}


Burada '''functools''' modülünden '''wraps''' ları içe aktarıyoruz ve bir '''another_function''' içindeki iç içe '''wrapper''' fonksiyonu için bir süslü fonksiyon olarak kullanıyoruz. Bu kez onu çalıştırırsanız, çıktı değişmiş olacaktır:

<br>
<h2 class="python3">Python</h2>
{% highlight python %}

a_function
A pretty useless function
{% endhighlight %}

Şimdi bir kez daha doğru isim ve docstring belgesi sahibiz. Python yorumlayıcınıza giderseniz, yardım fonksiyonu artık doğru şekilde çalışacaktır. Burada çıktısını koymaktan vazgeçip, denemeniz için onu bırakacağım.

help(example):
<br>

{% highlight python %}

Help on module example:

NAME
    example

FUNCTIONS
    a_function()
        A pretty useless function
    
    another_function(func)
        A function that accepts another function

FILE
    ~/example.py

{% endhighlight %}

<br>
<div class="pop2"> Özet</div>
<br>

wraps süslü fonksiyonu hemen hemen bir numaradır, ama ihtiyaç duyduğunuzda oldukça kullanışlıdır. Eğer fonksiyonlarınızın size doğru ismi veya docstring belgesi vermediğini fark ederseniz, artık nasıl kolayca düzeltileceğini biliyorsunuz. Mutlu bir kodlama yapın!

<br>

<div id="D2" class="pop0">2 Basit Süslü Fonksiyonlar</div>

Artık, bu fonksiyonların Python'daki diğer herhangi bir öbek gibi olduğunu gördüğünüze göre, Python süslü fonksiyonu olan büyülü yaratığa geçmeye ve görmeye hazırsınız. Bir örnekle başlayalım:

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

<br>
<h2 class="python3">Python</h2>
{% highlight python %}

In [1]: say_whee()
Something is happening before the function is called.
Whee!
Something is happening after the function is called.

{% endhighlight %}

Burada neler olduğunu anlamak için önceki örneklere bakın. Tam anlamıyla şimdiye kadar öğrendiğiniz her şeyi gerçekten uyguluyoruz. 

Sözde fonksiyon süsleme şu satırda gerçekleşir:

{% highlight python %}

say_whee = my_decorator(say_whee)

{% endhighlight %}

Aslında, ```say_whee``` ismi şimdi ```wrapper()``` iç fonksiyonuna işaret etmektedir.
Çağrı yaptığınızda ```wrapper``` fonksiyon olarak döndürdüğünüzü hatırlayın.

my_decorator(say_whee):

<br>
<h2 class="python3">Python</h2>
{% highlight python  %}

In [3]: say_whee
Out[3]: <function __main__.my_decorator.<locals>.wrapper>

{% endhighlight %}

Ancak, ```wrapper()``` fonksiyonu, orijinal ```say_whee()``` fonksiyonune func olarak bir atıfta bulunur ve iki ```print()``` çağrı arasında bu fonksiyonu çağırır.

Basitçe söylemek gerekirse: **süslü fonksiyonlar, onların davranışlarını değiştirerek bir fonksiyonu çevrelemektedir.**

Devam etmeden önce, ikinci bir örneğe bakalım. ```wrapper()``` normal bir Python fonksiyonu olduğu için bir süslü fonksiyonun bir fonksiyonu değiştirdiği yöntem dinamik olarak değişebilir. Komşularınızı rahatsız etmeyecek şekilde, aşağıdaki örnek yalnızca gün boyunca süslü kodu çalıştıracaktır:

{% highlight python  linenos=table %}

from datetime import datetime

def not_during_the_night(func):
    def wrapper():
        if 7 <= datetime.now().hour < 22:
            func()
        else:
            pass  # Hush, the neighbors are asleep
    return wrapper

def say_whee():
    print("Whee!")

say_whee = not_during_the_night(say_whee)

{% endhighlight %}
<br>

Yatma zamanı sonrası ```say_whee()``` çağırmayı denerseniz, hiçbir şey olmaz:

<br>
<h2 class="python3">Python</h2>
{% highlight python  %}

In [1]: say_whee()
Whee!

In [4]: say_whee()
In [5]: 
{% endhighlight %}

<br>

<div id="D21" class="pop1">2.1 Sözdizimsel Şeker!</div>

Yukarıda ```say_whee()``` ile fonksiyonu süslediğiniz yol biraz biçimsiz ve hantal. Her şeyden önce, ```say_whee``` isminin üç kere yazımını bitirirsiniz. Buna ek olarak, fonksiyon süsleme, fonksiyon tanımının altında gizlenmiştir.

Bunun yerine, Python, bazen ```'pie'``` sözdizimi olarak da adlandırılan ```@``` sembolüyle daha basit bir şekilde süslü fonksiyonlar kullanmanıza izin verir. Aşağıdaki örnek, ilk Süslü fonksiyon örneğiyle tamamen aynı şeyi yapar:

{% highlight python  linenos=table %}

def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_whee():
    print("Whee!")

{% endhighlight %}

Bu yüzden, ```@my_decorator``` sadece, ```say_whee = my_decorator(say_whee)``` demenin daha kolay bir yoldur. Bu bir fonksiyona bir süslü fonksiyonun nasıl uygulandığıdır.

<br>

<div id="D211" class="pop1">2.1.1 Süslü fonksiyonları Yeniden Kullanmak</div>

Bir süslü fonksiyonun sadece normal bir Python fonksiyonu olduğunu hatırlayın. Kolay tekrar kullanılabilirlik için tüm genel araçlar mevcuttur. Süslü fonksiyonu diğer birçok fonksiyonda kullanılabilecek kendi modülüne taşıyalım.

Aşağıdaki içerikle ```decorators.py``` adlı bir dosya oluşturun:

{% highlight python  linenos=table %}

def do_twice(func):
    def wrapper_do_twice():
        func()
        func()
    return wrapper_do_twice

{% endhighlight %}

<br>
<div class="alert alert-primary" role="alert">
<p><strong>Note:</strong> İçsel fonksiyonunuzu istediğiniz gibi adlandırın ve wrapper() gibi genel bir ad genellikle tamamdır. Bu makalede çok sayıda süslü fonksiyon göreceksiniz. Bunları ayrı tutmak için, iç fonksiyonu, süslü fonksiyonla aynı adla, ancak bir wrapper_ önekiyle adlandıracağız.</p>
</div>

Bu yeni süslü fonksiyonu, normal bir içe aktarma yaparak diğer dosyalarda kullanabilirsiniz:

{% highlight python  linenos=table %}

from decorators import do_twice

@do_twice
def say_whee():
    print("Whee!")

{% endhighlight %}
<br>

yada doğruda çalıştırabilirsiniz:

{% highlight python  linenos=table %}

def do_twice(func):
    def wrapper_do_twice():
        func()
        func()
    return wrapper_do_twice

@do_twice
def say_whee():
    print("Whee!")

{% endhighlight %}

<br>

Bu örneği çalıştırdığınızda, orijinal ```say_whee()``` öğesinin iki kez yürütüldüğünü görmelisiniz:

<br>
<h2 class="python3">Python</h2>
{% highlight python  %}

In [1]: say_whee()
Whee!
Whee!
{% endhighlight %}

<br>
<div id="D212" class="pop2">2.1.2 Biraz Daha Faydalı</div>
<br>


Şimdi, ilk örneğe dönelim ve uygulayalım. Burada, daha tipik olanı yapacağız ve aslında kodu süslü fonksiyonlarda kullanacağız:

{% highlight python  linenos=table %}

class entryExit(object):

    def __init__(self, f):
        self.f = f

    def __call__(self):
        print ("Entering", self.f.__name__)
        self.f()
        print ("Exited", self.f.__name__)

@entryExit
def func1():
    print ("inside func1()")

@entryExit
def func2():
    print ("inside func2()")

func1()
func2()

{% endhighlight %}

<br>
<h2 class="python3">Python</h2>

{% highlight python  %}
Entering func1
inside func1()
Exited func1
Entering func2
inside func2()
Exited func2
{% endhighlight %}


süslü fonksiyonlarin artık çağrı etrafında ```'Entering'``` ve ```'Exited'``` izleme ifadelerine sahip olduğunu görebilirsiniz. 

Kurucu, fonksiyon nesnesi olan bağımsız değişkeni saklar. Çağrıda, fonksiyonun adını göstermek için fonksiyonun ```__name__``` özniteliğini kullanırız, daha sonra fonksiyonun kendisini çağırırız.

 
<br>
<div id="D213" class="pop2">2.1.3 Meta sınıflar ve süslü fonksiyonlar: uzayda yapılmış bir eşleme</div>
<br>

Meta sınıflar karmaşık bir konudur ve çoğu zaman ileri düzey programcılar, onlar için çok çeşitli pratik kullanımları görmez.

Gerçekten metasınıflar genellikle çok sayıda otomasyonun sağlanması gereken gelişmiş kütüphaneleri veya çerçeveleri programlarken oyuna girer. Örneğin, Django Forms sistemi, tüm sihrini sağlamak için meta sınıflara dayanır.

Bununla birlikte, genel olarak bilmediğimiz tüm teknikleri ```'büyü'``` ya da ```'hileler'``` olarak adlandırdığımızı ve Python'un bir sonucu olarak birçok şeyin bu şekilde çağrıldığını, bunun diğer dillere kıyasla genellikle kendine özgü bir uygulama olduğunu belirtmek zorundayız.

Biraz Python sihirbazlığı yapalım ve dilin gücünü kullanalım!

Bu yazıda size süslü fonksiyonlar ve meta sınıfların ilginç bir ortak kullanımını göstermek istiyorum. Yöntemleri işaretlemek için süslü fonksiyonların nasıl kullanılacağını size göstereceğim, böylece belirli bir işlemi gerçekleştirirken sınıf tarafından otomatik olarak kullanılabilirler.

Daha ayrıntılı olarak, bir dizgeye 'işleyebilmek' için çağrılabilecek bir sınıf uygulayacağım ve basit bir şekilde süslü yöntemlerle farklı 'filtreleri' nasıl uygulayacağınızı göstereceğim. Benim elde etmek istediğim şunun gibi:

{% highlight python %}

class MyStringProcessor(StringProcessor):
    @stringfilter
    def capitalize(self, str):
        [...]

    @stringfilter
    def remove_double_spaces(self, str):
        [...]

msp = MyStringProcessor()
"A test string" == msp("a test string")

{% endhighlight %} 
<br>


[Bu yazı içerisinde kullanılan kaynak kodun tamamını içerir.]({{ site.baseurl }}/assets/strproc.py)

Modül, bir standart imza ```(self, str)``` içeren ve 
```stringfilter``` ile donatılan ekleme yordamlarını alıp özelleştirebileceğim bir ```StringProcessor``` sınıfı tanımlar. Bu sınıf daha sonra örneklenebilir ve örnek, bir dizeyi doğrudan işlemek ve sonucu döndürmek için kullanılır. Dahili olarak sınıf, tüm süslü yöntemleri art arda otomatik olarak yürütür. Ayrıca, sınıfın, filtreleri tanımladığım sıraya uymasını istiyorum: ilk önce, ilk olarak çalıştırılır.

Metaclasses bu hedefe ulaşmak için nasıl yardımcı olabilir? 

Basitçe söylemek gerekirse, meta sınıflar, sınıfları almak için örneklendirilen sınıflardır. Bu, bir dersi her kullandığımda, örneğin, onu örneklendirmek için ilk Python'un, yazdığımız meta sınıfı ve sınıf tanımını kullanarak bu sınıfı oluşturduğu anlamına gelir. Örneğin, sınıf üyelerini ```__dict__``` özniteliğinde bulabileceğinizi biliyorsunuz: bu özellik, tür olan standart metaclass tarafından oluşturulur. 

Verilen bir metaclass, sınıf tanımındaki fonksiyonların bir alt kümesini tanımlamak için bir kod eklememiz için iyi bir başlangıç ​​noktasıdır. Başka bir deyişle, meta sınıfın (yani, sınıfın) çıktısının tam olarak standart durumda olduğu gibi oluşturulmasını istiyoruz, ama ek olarak: 
```stringfilter``` ile süslenmiş tüm yöntemlerin ayrı bir listesi.
<br>


{% highlight python  linenos=table %}

class StringFilter(object):

    @staticmethod
    def split(string):
        return string.split(" ")

    @staticmethod
    def capitalize(string):
        return string.capitalize()

    @staticmethod
    def strip(string):
        return string.strip()

    def __new__(cls, string, *functions):
        result = string
        for function in functions:
            result = getattr(cls, function)(result)

        return result

if __name__ == "__main__":
    print(StringFilter("i am a cat  help me", "strip", "capitalize", "split"))

{% endhighlight %}

<br>
<h2 class="python3">Python</h2>


{% highlight python  %}

['I', 'am', 'a', 'cat', '', 'help', 'me']

{% endhighlight %}

<br>

<div id="D23" class="pop1">2.3 İfadelerle Bezeyen Fonksiyonlar</div>

Bazı ifadeleri kabul eden bir fonksiyonunuz olduğunu varsayalım. Hala donatabilir misin? Hadi deneyelim:
<br>


{% highlight python  linenos=table %}

def do_twice(func):
    def wrapper_do_twice():
        func()
        func()
    return wrapper_do_twice

@do_twice
def greet(name):
    print("Hello" + name)

{% endhighlight %}
<br>


Maalesef, bu kodu çalıştırmak bir hataya yol açıyor:

<br>
<h2 class="python3">Python</h2>

{% highlight python  %}

In [1]: greet("World")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    greet("World")
TypeError: wrapper_do_twice() takes 0 positional arguments but 1 was given
{% endhighlight %}

Sorun şu ki, içsel fonksiyon ```wrapper_do_twice()``` fonksiyonu herhangi bir ifade almaz, ancak ```name = 'World'``` ona aktarıldı. ```wrapper_do_twice()``` öğesinin bir bağımsız değişkeni kabul etmesine izin vererek bunu düzeltebilirsiniz, ancak daha önce oluşturduğunuz ```say_whee()``` fonksiyonu için çalışmaz.

Çözüm, iç çevreleyici fonksiyonunda ```*args``` ve ```**kwargs``` kullanmaktır. Ardından, rastgele sayı ve konum ifadeyi kabul eder. ```decorators.py``` dosyasını aşağıdaki gibi yeniden yazınız:
<br>


{% highlight python %}

def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)
    return wrapper_do_twice

{% endhighlight %}

```wrapper_do_twice()``` iç fonksiyonu artık herhangi bir sayıdaki ifadeyi kabul eder ve bunları bezediği fonksiyone iletir. Şimdi hem ```say_whee()``` ve ```greet()``` örnekleri çalışır:

{% highlight python  linenos=table %}

def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)
    return wrapper_do_twice

@do_twice
def greet(name):
    print("Hello" + name)
    
@do_twice
def say_whee():
    print("Whee!")

{% endhighlight %}

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

In [1]: greet("World")
HelloWorld
HelloWorld

In [2]: say_whee()
Whee!
Whee! 

{% endhighlight %} 


<br>

<div id="D24" class="pop1">2.4 Süslü Fonksiyonlardan Dönen Değerler</div>

Dekorlu fonksiyonların dönüş değeri ne olur? Eh, karar vermek için süslü fonksiyona kalmış. Basit bir fonksiyonu aşağıdaki gibi donattığınızı varsayalım:

{% highlight python  linenos=table %}

def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)
    return wrapper_do_twice

@do_twice
def return_greeting(name):
    print("Creating greeting")
    return "Hi" + name

{% endhighlight %}
<br>


Kullanmayı dene:

<br>
<h2 class="python3">Python</h2>


{% highlight python %}
In [1]: hi_adam = return_greeting("Adam")
Creating greeting
Creating greeting

In [2]: print(hi_adam)
None

{% endhighlight %} 
<br>


Maalesef, süslü fonksiyonunuz fonksiyondan dönüş değerini yedi.

```do_twice_wrapper()``` fonksiyonu açıkça bir değer döndürmediğinden, ```return_greeting('Adam')``` çağrısı, None döndürerek sona ermiştir.

Bunu düzeltmek için, **çevreleme fonksiyonunun süslü fonksiyonun dönüş değerini döndürdüğünden emin olmanız** gerekir. ```decorators.py``` dosyanızı 4. satırını değiştirin:

{% highlight python %}
def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        return func(*args, **kwargs)
    return wrapper_do_twice

{% endhighlight %} 
<br>


fonksiyonun son yürütülmesinden döndürülen değer döndürülür:
<br>


{% highlight python  linenos=table %}

def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        return func(*args, **kwargs)
    return wrapper_do_twice

@do_twice
def return_greeting(name):
    print("Creating greeting")
    return "Hi " + name

@do_twice
def say_whee():
    print("Whee!")

{% endhighlight %}
<br>



Kullanmayı dene:

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

In [3]: return_greeting("Adam")
Creating greeting
Creating greeting
Out[3]: 'Hi Adam'

{% endhighlight %} 


<br>

<div id="D25" class="pop1">2.5 Kimsin sen, Gerçekten mi?</div>

Özellikle etkileşimli kabukta, Python ile çalışırken büyük kolaylık, güçlü içebakış yeteneğidir. İçebakış, bir nesnenin çalışma zamanında kendi öz niteliklerini bilmesidir. Örneğin, bir fonksiyon kendi adını ve belgelemesini bilir:

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

In [1]: print
Out[1]: <function print>

In [2]: print.__name__
Out[2]: 'print'

In [3]: help(print)
Help on built-in function print in module builtins:

print(...)
    print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)
    
    Prints the values to a stream, or to sys.stdout by default.
    <full help message>

{% endhighlight %} 
<br>


İçebakış, kendinizin tanımladığı fonksiyonlar için de çalışır:

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

In [6]: say_whee
Out[6]: <function __main__.do_twice.<locals>.wrapper_do_twice>

In [7]: say_whee.__name__
Out[7]: 'wrapper_do_twice'

In [8]: help(say_whee)
Help on function wrapper_do_twice in module __main__:

{% endhighlight %} 
<br>


Ancak, fonksiyon süslendikten sonra, ```say_whee()``` kendi kimliği konusunda çok kafa karıştırdı. Şimdi do_twice() süslü fonksiyonunun içinde ```wrapper_do_twice()``` iç fonksiyonu olduğunu bildiriyor. Teknik olarak doğru olsa da, bu çok yararlı bir bilgi değildir.

Bunu düzeltmek için, süslü fonksiyonlar orijinal fonksiyonla ilgili bilgileri muhafaza eden ```@functools.wraps``` süslü fonksiyonunu kullanmalıdır.  Decorators.py betiğini tekrar güncelleyin:

{% highlight python %}

import functools

def do_twice(func):
    @functools.wraps(func)
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        return func(*args, **kwargs)
    return wrapper_do_twice
{% endhighlight %} 
<br>

<div class="alert alert-success" role="alert">
<p><strong>functools:</strong>  - Yüksek mertebeden fonksiyonlar ve istenebilen nesneler üzerindeki işlemler. Functools modülü üst düzey fonksiyonlar içindir: diğer fonksiyonlar üzerinde hareket eden veya dönen fonksiyonlar. Genel olarak, herhangi bir değiştirilebilir nesne bu modülün amaçları için bir fonksiyon olarak ele alınabilir.Bu, bir wrapper fonksiyonunu tanımlarken update_wrapper() öğesini bir fonksiyon Süslü fonksiyon olarak çağırmak için bir kolaylık fonksiyonudur. Bu kısmi (update_wrapper, çevrelenmiş = çevrelenmiş, atanan = atanan, güncellenmiş = güncellenmiş) eşdeğerdir.</p>
</div>
  
<br>

süslü ```say_whee()``` fonksiyonu hakkında bir şey değiştirmeniz gerekmez:

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

In [9]: say_whee
Out[9]: <function __main__.say_whee>

In [10]: say_whee.__name__
Out[10]: 'say_whee'

In [11]: help(say_whee)
Help on function say_whee in module __main__:

say_whee()
{% endhighlight %} 

<br> 

Çok daha iyi! Şimdi ```say_whee()```, dekorasyondan sonra hala kendisidir.

<div class="alert alert-info" role="alert">
<p><strong>Teknik Detay:</strong> functools.wraps süslü fonksiyon, içebakışta kullanılan __name__ ve __doc__ gibi özel nitelikleri güncellemek için functools.update_wrapper() fonksiyonunu kullanır.</p>
</div>

<br>

<div id="D3" class="pop1">3 Birkaç Gerçek Dünya Örneği</div>

Süslü fonksiyonların birkaç yararlı örneğine bakalım. Şimdiye kadar öğrendiklerinizle aynı kalıbı takip edeceklerini fark edeceksiniz.

{% highlight python %}

import functools

def decorator(func):
    @functools.wraps(func)
    def wrapper_decorator(*args, **kwargs):
        # Do something before
        value = func(*args, **kwargs)
        # Do something after
        return value
    return wrapper_decorator
{% endhighlight %} 

<br>

Bu formül, daha karmaşık süslü fonksiyonlar oluşturmak için iyi bir standart kalıptır.
<br>

<div class="alert alert-warning" role="alert">
<p><strong>Not:</strong>  Daha sonraki örneklerde, bu Süslü fonksiyonların de decorators.py dosyanıza kaydedildiğini kabul edeceğiz. Bu derste tüm örnekleri indirebileceğinizi unutmayın.</p>
</div>

<br>

<div id="D31" class="pop1">3.1 Zamanlama Fonksiyonları</div>

Bir ```timer``` süslü fonksiyon oluşturarak başlayalım. Bir fonksiyonu yürütmek ve süreyi konsola yazdırmak için gereken süreyi ölçer. İşte kod:

<br>


{% highlight python  linenos=table %}
import functools
import time

def timer(func):
    """Print the runtime of the decorated function"""
    @functools.wraps(func)
    def wrapper_timer(*args, **kwargs):
        start_time = time.perf_counter()    # 1
        value = func(*args, **kwargs)
        end_time = time.perf_counter()      # 2
        run_time = end_time - start_time    # 3
        print('Finished  waste_some_time in  {:.4f} secs'.format(run_time))
        return value
    return wrapper_timer

@timer
def waste_some_time(num_times):
    for _ in range(num_times):
        sum([i**2 for i in range(10000)])

{% endhighlight %}
<br> 

Bu süslü fonksiyon, fonksiyonun çalışmaya başlamasından hemen önceki süreyi saklayarak çalışır (# 1 olarak işaretlenmiş satırda) ve fonksiyon bittikten hemen sonra (# 2'de). Fonksiyonun aldığı zaman ikisinin arasındaki farktır (# 3'de). Zaman aralıklarını ölçmek için iyi bir iş yapan ```time.perf_counter()``` fonksiyonunu kullanırız.

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

In [14]: waste_some_time(1)
Finished  waste_some_time in  0.0029 secs

In [34]: waste_some_time(999)
Finished  waste_some_time in  2.8798 secs
{% endhighlight %} 
 <br> 
Kendi kendinine çalışır. Kod boyunca satır satır çalışır. Nasıl çalıştığını anladığınızdan emin olun. Yine de anlamadıysan endişelenme. Süslü fonksiyonlar gelişmiş yapılardır. Ertelemeyi deneyin veya program akışını çizi.

Python2'de, print bir ifade sunan bir anahtar kelime oldu: ```print "Hi"```

Python3'te print, çağrılabilecek bir fonksiyondur: ```print ("Hi")```.

Her iki sürümde, ```%```, sol tarafta bir dize ve sağ tarafta bir değer veya bir değer sayısı veya bir eşleme nesnesi gerektiren bir operatördür.

Satır böyle görünür: 
print("a=%d,b=%d" % (f(x,n),g(x,n)))

Python3 için olan öneri, ```%```-style biçimlendirme yerine ```{}``` -style biçimlendirme kullanmaktır: 
```print('a={:d}, b={:d}'.format(f(x,n),g(x,n)))```

Python 3.6, başka bir dizgi formatlama paradigmasını sunar: f-dizeleri.
```print(f'a={f(x,n):d}, b={g(x,n):d}')```

<br>
<div class="alert alert-warning" role="alert">
<p><strong>Not:</strong>  Eğer fonksiyonlarınızın çalışma zamanı hakkında bir fikir edinmek istiyorsanız, @timer decorator harikadır. Daha hassas ölçüm kodları yapmak istiyorsanız, yerine standart kütüphanedeki timeit modülünü düşünmelisiniz. Çöp toplanmasını geçici olarak devre dışı bırakır ve hızlı fonksiyon çağrılarından gelen gürültüyü çıkarmak için birden çok denemeyi çalıştırır.</p>
</div>

<br>

<div id="D32" class="pop1">3.2 Hata Ayıklama Kodu</div>

Aşağıdaki ```@debug``` süslü fonksiyon argümanları yazdıracaktır, fonksiyon çağrıldığında her seferinde bir fonksiyon, dönüş değeriyle birlikte çağrılır:

<br>

{% highlight python  linenos=table %}
import functools

def debug(func):
    """Print the function signature and return value"""
    @functools.wraps(func)
    def wrapper_debug(*args, **kwargs):
        args_repr = [repr(a) for a in args]                      # 1
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]  # 2
        signature = ", ".join(args_repr + kwargs_repr)           # 3
        print(f"Calling {func.__name__}({signature})")
        value = func(*args, **kwargs)
        print(f"{func.__name__!r} returned {value!r}")           # 4
        return value
    return wrapper_debug

@debug
def make_greeting(name, age=None):
    if age is None:
        return f"Howdy {name}!"
    else:
        return f"Whoa {name}! {age} already, you are growing up!"

{% endhighlight %}

 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

In [1]: make_greeting("Benjamin")

Calling make_greeting('Benjamin')
'make_greeting' returned 'Howdy Benjamin!'

In [2]: make_greeting("Richard", age=112)

Calling make_greeting('Richard', age=112)
'make_greeting' returned 'Whoa Richard! 112 already, you are growing up!'

In [3]: make_greeting(name="Dorrisile", age=116)

Calling make_greeting(name='Dorrisile', age=116)
'make_greeting' returned 'Whoa Dorrisile! 116 already, you are growing up!'

{% endhighlight %} 

<br> 

```{signature}```, tüm argümanların dize gösterimlerine katılarak oluşturulur. Aşağıdaki listedeki sayılar, koddaki numaralı yorumlara karşılık gelir:

1. Konumsal ifadelerin bir listesini oluşturun. Her ifadeyi temsil eden güzel bir dize almak için ```repr()``` öğesini kullanın.

2. ```keyword``` ifadelerinin bir listesini oluşturun. ```value``` ifade etmek için kullanılan ```repr()```'yi ifade eden ```!r``` belirtecinin olduğu yerde ```key=value``` olarak f-string her bir ifadeyi formatlar.

3. Konumsal ve keyword ifadelerinin listeleri, bir virgülle ayrılan  herbir ifade ile signature dizisinin birine beraber katılır.

4. Fonksiyon çalıştırıldıktan sonra geri dönüş değeri yazdırılır.

Süslü fonksiyonun, bir konum ve bir anahtar kelime ifadesiyle basit bir fonksiyona uygulayarak pratikte nasıl çalıştığını görelim:

```@debug``` süslü fonksiyonunun ```make_greeting()``` fonksiyonunun ```signature``` ve dönüş değerini nasıl yazdığını not alın:

Bu örnek, ```@debug``` süslü fonksiyonu az önce yazdıklarınızı tekrarladığından beri kullanışlı görünmeyebilir. Doğrudan kendinize çağrı yapmadığınız küçük uygun fonksiyonlara uygulandığında daha güçlüdür.

Aşağıdaki örnek, matematik sabiti e'ye bir yaklaşım hesaplar:

<br>

{% highlight python  linenos=table %}
import math
import functools

def debug(func):
    """Print the function signature and return value"""
    @functools.wraps(func)
    def wrapper_debug(*args, **kwargs):
        args_repr = [repr(a) for a in args]                      # 1
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]  # 2
        signature = ", ".join(args_repr + kwargs_repr)           # 3
        print(f"Calling {func.__name__}({signature})")
        value = func(*args, **kwargs)
        print(f"{func.__name__!r} returned {value!r}")           # 4
        return value
    return wrapper_debug

# Apply a decorator to a standard library function
math.factorial = debug(math.factorial)

@debug
def approximate_e(terms=18):
    return sum(1 / math.factorial(n) for n in range(terms))

approximate_e(5) 
{% endhighlight %}

<br> 

Bu örnek ayrıca, bir süslü fonksiyonun önceden tanımlanmış bir fonksiyona nasıl uygulanabileceğini gösterir. ```e```'nin yaklaşımı, aşağıdaki dizi genişlemesine dayanmaktadır:


 e'nin değeri de  ```1/0!  +  1/1!  +  1/2!  +  1/3!  +  1/4!  +  1/5!  +  1/6!  +  1/7!  + ... (etc)``` eşittir

```Approximate_e()``` fonksiyonunu çağırırken, @debug süslü fonksiyonunu iş başında görebilirsiniz:

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Calling approximate_e(5)
Calling factorial(0)
'factorial' returned 1
Calling factorial(1)
'factorial' returned 1
Calling factorial(2)
'factorial' returned 2
Calling factorial(3)
'factorial' returned 6
Calling factorial(4)
'factorial' returned 24
'approximate_e' returned 2.708333333333333


{% endhighlight %} 

<br> 
Bu örnekte, sadece 5 terim ekleyerek, ```e = 2.718281828``` gerçek değerine doğru bir yaklaşım elde edersiniz.

<br>
<div class="pop2">3.2.1 Python Sınıflarınızda “Dize” Dönüştürme Nasıl Desteklenir?</div>
<br>

Python'da bir özel sınıf tanımladığınızda ve örneklerinden birini konsolda yazdırmaya çalıştığınızda (veya bir yorumlayıcı oturumunda inceleyin), göreceli olarak tatmin edici olmayan bir sonuç elde edersiniz. 

Varsayılan 'dizgi' dönüştürme davranışı temeldir ve ayrıntılardan yoksundur:

<br>

{% highlight python  linenos=table %}
class Car:
    def __init__(self, color, mileage):
        self.color = color
        self.mileage = mileage

{% endhighlight %}

<br>
<h2 class="python3">Python</h2>

{% highlight python %}
In [1]: my_car = Car('red', 37281)

In [2]: print(my_car)
<__main__.Car object at 0x7ff90a6c1550>

In [3]: print(my_car.color, my_car.mileage)
red 37281

{% endhighlight %}

<br> 

Varsayılan olarak, aldığınız tek şey sınıf adını ve nesne örneğinin kimliğini içeren bir dizedir (bu, nesnenin CPython'daki bellek adresidir.) Bu, hiçbir şeyden daha iyi değildir, ancak aynı zamanda çok kullanışlı değildir. 

<br>
<div class="pop2">3.2.2 Neden Her Python Sınıfının bir __repr__ ihtiyacı var?</div>
<br>

Sınıfın özniteliklerini doğrudan yazdırarak veya sınıflarınıza özel bir ```to_string()``` yöntemi ekleyerek, bu konu üzerinde çalışmaya deneyebilirsiniz.

<br>


{% highlight python  linenos=table %}
class Car(object):
    def __init__(self, color, mileage):
        self.color = color
        self.mileage = mileage

    def __repr__(self):
       return '{}({!r}, {!r})'.format(
           self.__class__.__name__,
           self.color, self.mileage)
{% endhighlight %}

<br>
<h2 class="python3">Python</h2>

{% highlight python %}
In [8]: my_car = Car('red', 37281)

In [9]: print(my_car)
Car('red', 37281)

{% endhighlight %}

<br> 
Genel fikir burada doğru olanıdır -ancak Python'un nesnelerin dizge olarak nasıl temsil edildiğini işlemek için kullandığı sözleşmeleri ve yerleşik mekanizmaları yok sayar.


<br>

<div id="D33" class="pop1">3.3 Kod Aşağı Çekiliyor</div>

Bu sonraki örnek çok kullanışlı görünmeyebilir. Neden Python kodunuzu yavaşlatmak istersiniz? Muhtemelen en yaygın kullanım durumu, - bir web sayfası gibi - bir kaynağın olup olmadığını sürekli kontrol eden bir fonksiyonun hızını limitlemek istemenizdir. ```@slow_down``` süslü fonksiyon, süslü fonksiyonu çağırmadan önce bir saniye uyuyacaktır:

"With "Why would you want to slow down your Python code? " you're questioning the other person's motivations, which implies that a) it was deliberate and b) they might do it again c) you're simply asking about someone's motivation or opinions."

<br>

{% highlight python  linenos=table %}
import functools
import time

def slow_down(func):
    """Sleep 1 second before calling the function"""
    @functools.wraps(func)
    def wrapper_slow_down(*args, **kwargs):
        time.sleep(1)
        return func(*args, **kwargs)
    return wrapper_slow_down

@slow_down
def countdown(from_number):
    if from_number < 1:
        print("Liftoff!")
    else:
        print(from_number)
        countdown(from_number - 1)

countdown(3)

{% endhighlight %}

@slow_down süslü fonksiyonunun etkisini görmek için, örneği kendiniz uygulamanız gerekiyor:

<br>
<h2 class="python3">Python</h2> 
{% highlight python %}

3
2
1
Liftoff!

{% endhighlight %} 
<br> 

<div class="alert alert-warning" role="alert">
<p><strong>Not:</strong>  countdown() fonksiyonu özyinelemeli bir fonksiyondur.Başka bir deyişle, kendisini çağıran bir fonksiyondur.  Python'daki özyinelemeli fonksiyonlar hakkında daha fazla bilgi edinmek için, Python'da Tekrarlı Düşünmek kılavuzumuza bakın.</p>
</div>

```@slow_down``` süslü fonksiyon her zaman bir saniye uyur. Daha sonra, süslü fonksiyona bir ifadeyi geçirerek oranı nasıl kontrol edeceğinizi göreceksiniz.

<br>

<div id="D34" class="pop1">3.4 Eklentileri Kaydetmek</div>

Süslü fonksiyonların, süsledikleri fonksiyonu çevrelemesi gerekmez. Ayrıca bir fonksiyonun mevcut olduğunu kolayca kaydedebilirler ve çevrelenmemiş olarak döndürebilirler. Bu kullanılabilir, örneğin, hafif bir eklenti mimarisi oluşturmak için kullanılabilir:


<br>

{% highlight python  linenos=table %}
import random
PLUGINS = dict()

def register(func):
    """Register a function as a plug-in"""
    PLUGINS[func.__name__] = func
    return func

@register
def say_hello(name):
    return f"Hello {name}"

@register
def be_awesome(name):
    return f"Yo {name}, together we are the awesomest!"

def randomly_greet(name):
    greeter, greeter_func = random.choice(list(PLUGINS.items()))
    print(f"Using {greeter!r}")
    return greeter_func(name)


randomly_greet("Alice")

print(f"{PLUGINS}")

print(globals())

{% endhighlight %}

```@register``` süslü fonksiyonu, ```global PLUGINS dict``` içindeki süslü fonksiyona bir atfı basitçe saklar. Bir iç işlev yazmanız veya bu örnekte ```@functools.wraps``` kullanmanız gerekmez unutmayın, çünkü değiştirilmemiş orijinal işlevi döndürüyorsunuz.

<div class="alert alert-primary" role="alert">
<p><strong>Bilgi:</strong> Python'da bir süslü fonksiyon, ifade olarak başka bir fonksiyonu kabul eden bir fonksiyondur. Süslü fonksiyon genellikle kabul ettiği fonksiyonu değiştirir veya geliştirir ve değiştirilmiş fonksiyonu döndürür. Süslü bir fonksiyonu çağırdığınızda, temel tanımla karşılaştırıldığında ek özelliklere sahip olabilen, biraz farklı olabilecek bir fonksiyon alacağınız anlamına gelir.</p>
</div>

```randomly_greet()``` fonksiyonu, kayıtlı fonksiyonlardan birini kullanmak için rasgele seçer. ```PLUGINS``` sözlüğünün zaten eklenti olarak kaydedilen her bir fonksiyon öbeğine atıflar içerdiğini unutmayın:

<br>

<h2 class="python3">Python</h2>

{% highlight python %}

Using 'say_hello'

{'say_hello': <function say_hello at 0x7f0105032730>, 
'be_awesome': <function be_awesome at 0x7f01050327b8>}

{% endhighlight %} 
<br> 

Bu basit eklenti mimarisinin temel faydası, eklentilerin bulunduğu bir listeye bakımınızın gerekmemesidir. Bu liste,  eklentiler kendilerini kaydettirdiğinde oluşturulur. Bu yeni bir eklenti eklemeyi önemsiz kılar: sadece fonksiyonu tanımlayın ve @register ile süsleyin.
 
Python'da globals() ile tanışıyorsanız, eklenti mimarisinin nasıl çalıştığıyla ilgili benzerlikler görebilirsiniz. globals(), eklentileriniz de dahil olmak üzere geçerli kapsamdaki tüm global değişkenlere erişim sağlar:

<br>

<h2 class="python3">Python</h2>

{% highlight python %}

{'__name__': '__main__', '__doc__': None, '__package__': None, 
'__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x7ffa9d26bc50>, 
'__spec__': None, '__annotations__': {}, 
'__builtins__': <module 'builtins' (built-in)>, 
'__file__': '/tmp/sessions/1e22d25eab5bc3c7/main.py', 
'__cached__': None, 'random': <module 'random' from '/usr/lib/python3.6/random.py'>,

'PLUGINS':
{'say_hello': <function say_hello at 0x7ffa9bcb46a8>, 
'be_awesome': <function be_awesome at 0x7ffa9bcb4730>},

'register': <function register at 0x7ffa9d290e18>, 
'say_hello': <function say_hello at 0x7ffa9bcb46a8>, 
'be_awesome': <function be_awesome at 0x7ffa9bcb4730>, 
'randomly_greet': <function randomly_greet at 0x7ffa9bcb47b8>}

{% endhighlight %} 

@register süslü fonksiyonunu kullanarak, globals() fonksiyonlarından bazılarını etkin bir şekilde seçerek kendi seçilmiş ilginç değişkenler listenizi oluşturabilirsiniz.

web çerçevesiyle çalışırken yaygın olarak kullanılır

<br>

<div id="D35" class="pop1">3.5 Kullanıcı Oturumu Açıldı mı?</div>

Bir web çatısıyla çalışırken yaygın olarak kullanılan bazı daha süslü fonksiyonlar için yola devam etmeden önce son örnek. Sadece giriş yapan kullanıcılar tarafından görülen veya başka şekilde doğrulanmış bir /secret web sayfası kurmak için Flask kullanıyoruz:

<br>

{% highlight python %}

from flask import Flask, g, request, redirect, url_for
import functools
app = Flask(__name__)

def login_required(func):
    """Make sure user is logged in before proceeding"""
    @functools.wraps(func)
    def wrapper_login_required(*args, **kwargs):
        if g.user is None:
            return redirect(url_for("login", next=request.url))
        return func(*args, **kwargs)
    return wrapper_login_required

@app.route("/secret")
@login_required
def secret():
    ...

{% endhighlight %}

Web çatınıza kimlik doğrulamanın nasıl ekleneceği hakkında bir fikir verirken, genellikle bu tür süslü fonksiyonları kendiniz yazmamalısınız. Flask için daha fazla güvenlik ve işlevsellik ekleyen Flask-Login uzantısını kullanabilirsiniz.


<br>

<div id="D4" class="pop0">4 Çok Süslü Fonksiyonlar</div>

<br>
Şimdiye kadar, basit süslü fonksiyonların nasıl oluşturulduğunu gördünüz. Süslü fonksiyonların ne olduğunu ve nasıl çalıştıklarını çok iyi biliyorsunuz. Öğrendiğiniz herşeyi uygulamak için bu makaleden bir ara vermekte özgür hissedin.

Bu eğiticinin ikinci bölümünde, aşağıdakileri nasıl kullanacağınız da dahil olmak üzere daha gelişmiş özellikleri inceleyeceğiz:


<br>

<div id="D41" class="pop1">Sınıflardaki Süslü Fonksiyonlar</div>

Süslü Fonksiyon Sınıfları 

Sınıflarda süslü fonksiyonlar kullanmanın iki farklı yolu vardır. İlki, zaten fonksiyonlarla yaptığınız şeye çok yakın: Bir sınıfın yordamlarını süsleyebilirsiniz. Süslü fonksiyonların gün içinde desteklenen tanıtım motivasyonlarından biriydi.

Python'da bile yerleşik olan bazı yaygın olarak kullanılan süslü fonksiyonlar 
@classmethod, @staticmethod ve @property'dir. @classmethod ve 
@staticmethod süslü fonksiyonları, bu sınıfın belirli bir özdeşine bağlanmayan bir sınıf aduzayı içindeki yordamları tanımlamak için kullanılır. @property süslü fonksiyonu, sınıf öznitellikleri için getters and setters özelleştirmek için kullanılır. Bu süslü fonksiyonları kullanılarak bir örnek için aşağıdaki kutucuğu genişletin.

Bir Circle sınıfının aşağıdaki tanımı @classmethod, @staticmethod ve @property süslü fonksiyonlarını kullanır:

<br>

{% highlight python  linenos=table %}
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        """Get value of radius"""
        return self._radius

    @radius.setter
    def radius(self, value):
        """Set radius, raise error if negative"""
        if value >= 0:
            self._radius = value
        else:
            raise ValueError("Radius must be positive")

    @property
    def area(self):
        """Calculate area inside circle"""
        return self.pi() * self.radius**2

    def cylinder_volume(self, height):
        """Calculate volume of cylinder with circle as base"""
        return self.area * height

    @classmethod
    def unit_circle(cls):
        """Factory method creating a circle with radius 1"""
        return cls(1)

    @staticmethod
    def pi():
        """Value of π, could use math.pi instead though"""
        return 3.1415926535

{% endhighlight %}
<br>
Bu sınıfta:

-  .cylinder_volume() normal bir yordamdır.
-  .radius, değişken bir niteliktir: farklı bir değere ayarlanabilir. Ancak, bir setter metodu tanımlayarak, anlamsız bir negatif sayıya ayarlanmadığından emin olmak için bazı hata testleri yapabiliriz. Özelliklere parantez olmadan öznitelikler olarak erişilebilir.
-  .area değişmez bir niteliktir: .setter() yordamları dışındaki nitelikler, değiştirilemez. Bir yordam olarak tanımlanmış olsa bile, parantez içermeyen bir öznitellik olarak yeniden ele alınabilir.
-  .unit_circle() bir sınıf yordamıdır. Belirli bir Circle özdeşine bağlı değildir. Sınıf yordamları, sınıfın belirli özdeşlerini oluşturabilen fabrika yordamları olarak sıklıkla kullanılır.
-  .pi() statik bir yordamdır. Circle sınıfına gerçekten bağlı değildir, onun aduzayının bir parçası olması dışında. Statik yordamlar, bir özdeşte veya sınıfta çağrılabilir.

Circle sınıfı örneğin aşağıdaki gibi kullanılabilir:

<br>

<h2 class="python3">Python</h2>

{% highlight python %}

In [1]: c = Circle(5)
In [1]: c.radius
Out[1]: 5

In [2]: c.area
Out[2]: 78.5398163375

In [3]: c.radius = 2
In [4]: c.area
Out[4]: 12.566370614

In [5]: c.area = 100
Out[5]: AttributeError

In [5]: c.cylinder_volume(height=4)
Out[5]: 50.265482456

In [6]: c.radius = -1
Out[6]: ValueError: Radius must be positive

In [7]: c = Circle.unit_circle()
In [8]: c.radius
Out[8]: 1

In [9]: c.pi()
Out[9]: 3.1415926535

In [11]: Circle.pi()
Out[11]: 3.1415926535

{% endhighlight %}

Önceden @debug ve @timer süslü fonksiyonlarını kullanarak bazı yordamlarını süslediğimiz bir sınıfı tanımlayalım:

<br>

{% highlight python  linenos=table %}

from decorators import debug, timer

class TimeWaster:
    @debug
    def __init__(self, max_num):
        self.max_num = max_num

    @timer
    def waste_time(self, num_times):
        for _ in range(num_times):
            sum([i**2 for i in range(self.max_num)])

{% endhighlight %}

Bu sınıfı kullanarak, süslü fonksiyonların etkisini görebilirsiniz:

<br>

{% highlight python  linenos=table %}

import functools
import time

def timer(func):
    """Print the runtime of the decorated function"""
    @functools.wraps(func)
    def wrapper_timer(*args, **kwargs):
        start_time = time.perf_counter()    # 1
        value = func(*args, **kwargs)
        end_time = time.perf_counter()      # 2
        run_time = end_time - start_time    # 3
        print(f"Finished {func.__name__!r} in {run_time:.4f} secs")
        return value
    return wrapper_timer

def debug(func):
    """Print the function signature and return value"""
    @functools.wraps(func)
    def wrapper_debug(*args, **kwargs):
        args_repr = [repr(a) for a in args]                      # 1
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]  # 2
        signature = ", ".join(args_repr + kwargs_repr)           # 3
        print(f"Calling {func.__name__}({signature})")
        value = func(*args, **kwargs)
        print(f"{func.__name__!r} returned {value!r}")           # 4
        return value
    return wrapper_debug

class TimeWaster:
    @debug
    def __init__(self, max_num):
        self.max_num = max_num

    @timer
    def waste_time(self, num_times):
        for _ in range(num_times):
            sum([i**2 for i in range(self.max_num)])
            
            
tw = TimeWaster(1000)
tw.waste_time(999)

{% endhighlight %}

<br>

<h2 class="python3">Python</h2>

{% highlight python %}

Calling __init__(<__main__.TimeWaster object at 0x7f5b9708b4e0>, 1000)
'__init__' returned None
Finished 'waste_time' in 0.2627 secs

{% endhighlight %}

Süslü fonksiyonları sınıflarda kullanmanın diğer yolu tüm sınıfı süslemektir. Bu, örneğin, Python 3.7'deki yeni dataclasses modülünde yapılır:

{% highlight python %}

from dataclasses import dataclass

@dataclass
class PlayingCard:
    rank: str
    suit: str

{% endhighlight %}

Sözdiziminin anlamı, fonksiyon süslemelerine benzer. Yukarıdaki örnekte, Fonksiyon süslemesini PlayingCard = dataclass (PlayingCard) yazarak yapabilirdiniz.

Sınıf süslü fonksiyonlarının yaygın bir kullanımı, metasınıfların bazı kullanım durumlarına daha basit bir alternatif olmaktır. Her iki durumda da, bir sınıfın tanımını dinamik olarak değiştiriyorsunuz.

Bir sınıf süslüsünün yazılması, bir fonksiyon süslüsünün yazılmasına çok benzer. Tek fark, süslü fonksiyonun bir ifade olarak bir fonksiyon değil bir sınıf alacağıdır. Aslında, yukarıda gördüğünüz tüm süslü fonksiyonlar, sınıf süslüleri olarak çalışacak. Onları bir fonksiyon yerine bir sınıfta kullanırken, bunların etkisi istediğiniz gibi olmayabilir. Aşağıdaki örnekte, @timer süslü fonksiyonu bir sınıfa uygulanır:

{% highlight python %}

from decorators import timer

@timer
class TimeWaster:
    def __init__(self, max_num):
        self.max_num = max_num

    def waste_time(self, num_times):
        for _ in range(num_times):
            sum([i**2 for i in range(self.max_num)])

{% endhighlight %}

Bir sınıfın süslenmesi yordamlarını süslemez. Hatırlayın, @timer sadece TimeWaster = timer (TimeWaster) için kısaltılmıştır.
 
Burada, @timer sadece sınıfı eşleneği için gereken süreyi ölçer:

<br>

{% highlight python  linenos=table %}

import functools
import time

def timer(func):
    """Print the runtime of the decorated function"""
    @functools.wraps(func)
    def wrapper_timer(*args, **kwargs):
        start_time = time.perf_counter()    # 1
        value = func(*args, **kwargs)
        end_time = time.perf_counter()      # 2
        run_time = end_time - start_time    # 3
        print(f"Finished {func.__name__!r} in {run_time:.4f} secs")
        return value
    return wrapper_timer

@timer
class TimeWaster:
    def __init__(self, max_num):
        self.max_num = max_num

    def waste_time(self, num_times):
        for _ in range(num_times):
            sum([i**2 for i in range(self.max_num)])         
            
tw = TimeWaster(1000)
tw.waste_time(999)

{% endhighlight %}

<br>

<h2 class="python3">Python</h2>
{% highlight python %}

Finished 'TimeWaster' in 0.0000 secs

{% endhighlight %}

Sonra, uygun bir sınıf dekoratörünü tanımlayan, bir sınıfın sadece bir özdeşini sağlayan, @singleton olarak adlandırılan bir örnek göreceksiniz.


<br>

<div id="D41" class="pop1">4.1 İç İçe Süslü Fonksiyonlar</div>

Birbirlerine üst üste istifleyerek birkaç süslü fonksiyonu bir fonksiyona uygulayabilirsiniz:

{% highlight python %}

from decorators import debug, do_twice

@debug
@do_twice
def greet(name):
    print(f"Hello {name}")

{% endhighlight %}

Dekoratörlerin listelendikleri sırayla yürütüldüklerini düşünün. Başka bir deyişle, @debug, greet() veya debug(do_twice(greet()))'i çağıran 
@do_twice çağırır:

<br>

{% highlight python  linenos=table %}

import functools

def do_twice(func):
    @functools.wraps(func)
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        return func(*args, **kwargs)
    return wrapper_do_twice

def debug(func):
    """Print the function signature and return value"""
    @functools.wraps(func)
    def wrapper_debug(*args, **kwargs):
        args_repr = [repr(a) for a in args]                      # 1
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]  # 2
        signature = ", ".join(args_repr + kwargs_repr)           # 3
        print(f"Calling {func.__name__}({signature})")
        value = func(*args, **kwargs)
        print(f"{func.__name__!r} returned {value!r}")           # 4
        return value
    return wrapper_debug

@debug
@do_twice
def greet(name):
    print(f"Hello {name}")

{% endhighlight %}


<br>

<h2 class="python3">Python</h2>
{% highlight python %}

Calling greet('Eva')
Hello Eva
Hello Eva
'greet' returned None


{% endhighlight %}

@debug ve @do_twice sırasını değiştirirsek farkı gözlemleyin:

<br>

{% highlight python  linenos=table %}

import functools

def do_twice(func):
    @functools.wraps(func)
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        return func(*args, **kwargs)
    return wrapper_do_twice

def debug(func):
    """Print the function signature and return value"""
    @functools.wraps(func)
    def wrapper_debug(*args, **kwargs):
        args_repr = [repr(a) for a in args]                      # 1
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]  # 2
        signature = ", ".join(args_repr + kwargs_repr)           # 3
        print(f"Calling {func.__name__}({signature})")
        value = func(*args, **kwargs)
        print(f"{func.__name__!r} returned {value!r}")           # 4
        return value
    return wrapper_debug

@do_twice
@debug
def greet(name):
    print(f"Hello {name}")

{% endhighlight %}

Bu durumda, @do_twice ayrıca @debug'a da uygulanacaktır:

<br>

<h2 class="python3">Python</h2>
{% highlight python %}

Calling greet('Eva')
Hello Eva
'greet' returned None
Calling greet('Eva')
Hello Eva
'greet' returned None


{% endhighlight %}


<br>

<div id="D42" class="pop1">4.2 İfadeler ile Süslü Fonksiyonlar</div>

Bazen, ifadeleri süslü fonksiyonlara iletmek yararlıdır. Örneğin, @do_twice bir   @repeat(num_times) süslü fonksiyonuna genişletilebilir. Süslenen fonksiyonun yürütme sayısı, daha sonra bir ifade olarak verilebilir.

Bu, böyle bir şey yapmanıza izin verirdi:

{% highlight python %}

@repeat(num_times=4)
def greet(name):
    print(f"Hello {name}")

{% endhighlight %}


<br>

{% highlight python  linenos=table %}

import functools

def repeat(num_times):
    def decorator_repeat(func):
        @functools.wraps(func)
        def wrapper_repeat(*args, **kwargs):
            for _ in range(num_times):
                value = func(*args, **kwargs)
            return value
        return wrapper_repeat
    return decorator_repeat 

@repeat(num_times=4)
def greet(name):
    print(f"Hello {name}")
    
greet("World")

{% endhighlight %}

<br>

<h2 class="python3">Python</h2>
{% highlight python %}

Hello World
Hello World
Hello World
Hello World

{% endhighlight %}

Bunu nasıl başarabileceğinizi düşünün.

Şimdiye kadar, @ 'den sonra yazılan ad, başka bir fonksiyonla çağrılabilen bir fonksiyon öbeğine atfedildi. Tutarlı olmak için, o zaman bir süslü fonksiyon gibi davranabilen bir fonksiyon öbeğini döndürmek için repeat(num_times=4) gerekir. Neyse ki, zaten fonksiyonların nasıl döndüğünü biliyorsunuz! Genel olarak, aşağıdaki gibi bir şey istersiniz:

{% highlight python %}

def repeat(num_times):
    def decorator_repeat(func):
        ...  # Create and return a wrapper function
    return decorator_repeat

{% endhighlight %}

Tipik olarak, süslü fonksiyon bir iç çevreleyici fonksiyonu oluşturur ve döndürür, bu yüzden örnek yazmak size içsel bir fonksiyon içinde bir iç fonksiyon kazandırır.

{% highlight python %}

def repeat(num_times):
    def decorator_repeat(func):
        @functools.wraps(func)
        def wrapper_repeat(*args, **kwargs):
            for _ in range(num_times):
                value = func(*args, **kwargs)
            return value
        return wrapper_repeat
    return decorator_repeat

{% endhighlight %}

Biraz dağınık görünüyor, ama şimdiye kadar ifadeleri süslü fonksiyona işleyen bir ek def içinde birçok kez gördüğünüz aynı süslü fonksiyon modelini sadece ekledik. En içteki fonksiyonla başlayalım:


{% highlight python %}

def wrapper_repeat(*args, **kwargs):
    for _ in range(num_times):
        value = func(*args, **kwargs)
    return value

{% endhighlight %}

Yine, decorator_repeat(), farklı adlandırılması dışında daha önce yazmış olduğunuz süslü fonksiyonlar gibi görünür. Bunun nedeni, kullanıcının arayacağı, en dıştaki fonksiyon için temel adı —repeat()— ayırmamızdır.

Daha önce gördüğünüz gibi, en dıştaki fonksiyon, süslü fonksiyona bir atıf döndürür:

{% highlight python %}

def repeat(num_times):
    def decorator_repeat(func):
        ...
    return decorator_repeat

{% endhighlight %}

repeat() fonksiyonunda gerçekleşen birkaç ince şey vardır:

-  decorator_repeat() öğesinin bir iç fonksiyon olarak tanımlanması, repeat() öğesinin bir fonksiyon öbeğine atıfta bulunması anlamına gelir - decorator_repeat. Daha önce, fonksiyon öbeğine atıfta bulunmak için parantez olmadan repeat kullandık. Eklenen parantezler, ifadeleri alan süslü fonksiyonlar tanımlanırken gereklidir.
-  num_times ifadesi, görünüşte bizzat repeat() içinde kendi kendine kullanılmamaktadır. Ancak num_times değeri daha sonra wrapper_repeat() tarafından kullanılıncaya kadar saklanır, num_times geçerek bir kapanış oluşturulur.

Ayarlanan her şeyle, sonuçların beklendiği gibi olup olmadığını görelim:

{% highlight python %}

@repeat(num_times=4)
def greet(name):
    print(f"Hello {name}")

{% endhighlight %}

<br>

<h2 class="python3">Python</h2>
{% highlight python %}

Hello World
Hello World
Hello World
Hello World

{% endhighlight %}

Sadece hedeflediğimiz sonuç.

<br>

<div id="D43" class="pop1">4.3 Her ikisi de Lütfen, Ama Asla Zarar Vermeyin </div>

Biraz dikkatli olursanız, **hem ifadeli hem de ifadesiz olarak kullanılabilecek süslü fonksiyonlar** da tanımlayabilirsiniz. Büyük ihtimalle buna ihtiyacınız yok, ancak esnekliğe sahip olmak güzel.

Bir önceki bölümde gördüğünüz gibi, bir süslü fonksiyon ifadeleri kullandığınızda, ilave bir dış fonksiyon eklemeniz gerekir. Meydan okuma, süslü fonksiyonların argümanlarla veya argümanlar olmadan çağrılıp çağrılmadığını anlamak içindir.

Süslü fonksiyonların ifadelerle veya ifadeler olmadan çağrılıp çağrılmadığını, kodunuzun çözmesi için meydan okumadır.

Süslü fonksiyon ifadeler olmadan çağrıldığında, fonksiyon, süslü fonksiyona yalnızca doğrudan iletildiğinden beri, fonksiyon isteğe bağlı bir ifade olmalıdır. Süslü fonksiyon ifadelerinin keyword ile belirtilmesi gerektiği anlamına gelir. Bunu, aşağıdaki tüm parametrelerin yalnızca keyword olduğu anlamına gelen özel * sözdizimi ile uygulayabilirsiniz:

{% highlight python %}

def name(_func=None, *, kw1=val1, kw2=val2, ...):  # 1
    def decorator_name(func):
        ...  # Create and return a wrapper function.

    if _func is None:
        return decorator_name                      # 2
    else:
        return decorator_name(_func)               # 3

{% endhighlight %}

Süslü fonksiyonların ifadeler ile çağrılıp çağrılmadığını belirterek burada, _func ifadesi bir işaretçi olarak davranır:

1. Eğer name ifadesiz çağrıldıysa, süslenmiş fonksiyon _func olarak aktarılacaktır. İfadeler ile çağrıldıysa, o zaman _func None olacaktır ve bazı keyword ifadeleri varsayılan değerlerinden değişime uğramış olabilir. İfade listesindeki *, arda kalan ifadelerin konumsal ifadeler olarak çağrılamayacağı anlamına gelir.

2. Bu durumda, süslü fonksiyonlar, ifadeler ile çağrıldı. Bir fonksiyonu okuyabilen ve döndüren bir süslü fonksiyonu döndür.

3. Bu durumda, süslü fonksiyon, ifadeler olmadan çağrıldı. Süslü fonksiyonu hemen fonksiyona uygulayın.

<br>
<div class="pop2">4.3.1 Positional ifade ve keyword ifadesi</div>

Fonksiyonu çağırırken bir fonksiyona (veya yordama) geçirilen bir değer. 	İki tür ifade var:

-  keyword ifadesi: Bir fonksiyon çağrısındaki bir tanımlayıcıdan (ör. name =) önce gelen veya ** ile öncelenen bir sözlükte bir değer olarak geçirilen bir ifade. Örneğin, 3 ve 5, aşağıdaki her iki keyword ifadesi complex() için çağrılır:

<br>

{% highlight python %}

complex(real=3, imag=5)
complex(**{'real': 3, 'imag': 5})

{% endhighlight %}

<br>

-  positional ifade: bir keyword ifade olmayan bir ifade. Konum ifadeleri, ifade listesinin başında görünebilir ve / veya * ile öncelenen yinelenebilir elemanlar olarak geçirilebilir. Örneğin, 3 ve 5, aşağıdaki her iki positional ifadesi çağrılır:

<br>

{% highlight python %}

complex(3, 5)
complex(*(3, 5))

{% endhighlight %}

<br>

İfadeler, bir fonksiyon gövdesindeki adlandırılmış yerel değişkenlere atanır. Sözdizimsel olarak, herhangi bir ifade bir argümanı temsil etmek için kullanılabilir; değerlendirilen değer yerel değişkene atanır.

Eşit işaretin anlamı, tanımda mı yoksa çağrıda mı olduğuna bağlı olarak değişir. Tanımda, ifadeyi isteğe bağlı olarak işaretler ve varsayılan bir değere ayarlar. Çağrıda, istediğiniz ifadeleri ve değerleri belirtmenize izin verir.

Bir anahtar kelime ifadesi, varsayılan bir değere sahip bir konumsal ifadedir. Varsayılan değere sahip olmayan tüm ifadeleri belirtmelisiniz. Diğer bir deyişle, anahtar kelime ifadeleri yalnızca 'isteğe bağlı' dır, çünkü özellikle sağlanmadıkları takdirde varsayılan değerlerine ayarlanırlar.

<br>
Önceki bölümdeki @repeat süslü fonksiyonunda bu şablonu kullanarak aşağıdakileri yazabilirsiniz:

{% highlight python %}

def repeat(_func=None, *, num_times=2):
    def decorator_repeat(func):
        @functools.wraps(func)
        def wrapper_repeat(*args, **kwargs):
            for _ in range(num_times):
                value = func(*args, **kwargs)
            return value
        return wrapper_repeat

    if _func is None:
        return decorator_repeat
    else:
        return decorator_repeat(_func)

{% endhighlight %}

Bunu orijinal @repeat ile karşılaştırın. _func parametresi ve sonunda if-else eklenmiş tek değişikliklerdir.

Bu örnekler, @repeat'un artık ifadelerle birlikte veya bağımsız olarak kullanılabileceğini gösterir:

<br>
{% highlight python %}

@repeat
def say_whee():
    print("Whee!")

@repeat(num_times=3)
def greet(name):
    print(f"Hello {name}")

{% endhighlight %}

<br>

{% highlight python  linenos=table %}

import functools

def repeat(_func=None, *, num_times=2):
    def decorator_repeat(func):
        @functools.wraps(func)
        def wrapper_repeat(*args, **kwargs):
            for _ in range(num_times):
                value = func(*args, **kwargs)
            return value
        return wrapper_repeat

    if _func is None:
        return decorator_repeat
    else:
        return decorator_repeat(_func)   
        
@repeat
def say_whee():
    print("Whee!")

@repeat(num_times=3)
def greet(name):
    print(f"Hello {name}")
 
say_whee()
greet("Penny")

{% endhighlight %}

num_times varsayılan değerinin 2 olduğunu hatırlayın:
<br>
<h2 class="python3">Python</h2>
{% highlight python %}

Whee!
Whee!
Hello Penny
Hello Penny
Hello Penny

{% endhighlight %}


<br>

<div id="D44" class="pop1">4.4 Durumsal Süslü Fonksiyonlar</div>

Bazen, **durumu takip edebilen bir süslü fonksiyon** olması yararlı olur. Basit bir örnek olarak, bir fonksiyonun çağrılma sayısını sayan bir süslü fonksiyon oluşturacağız.

<br>

<div class="alert alert-warning" role="alert">
<p><strong>Not:</strong> Bu kılavuzun başında, verilen ifadelere dayalı bir değer döndüren saf fonksiyonlardan söz ettik. Durum bilgisi veren süslü fonksiyonlar tam tersidir, geri dönüş değeri mevcut duruma ve ayrıca verilen argümanlara bağlı olacaktır.</p>
</div>

<br>

Bir sonraki bölümde, durumu korumak için sınıfları nasıl kullanacağınızı göreceksiniz. Ancak basit durumlarda, fonksiyon özniteliklerini kullanarak da uzaklaşabilirsiniz:

<br>
{% highlight python %}

import functools

def count_calls(func):
    @functools.wraps(func)
    def wrapper_count_calls(*args, **kwargs):
        wrapper_count_calls.num_calls += 1
        print(f"Call {wrapper_count_calls.num_calls} of {func.__name__!r}")
        return func(*args, **kwargs)
    wrapper_count_calls.num_calls = 0
    return wrapper_count_calls

@count_calls
def say_whee():
    print("Whee!")

{% endhighlight %}

Durum - fonksiyona yapılan çağrı sayısı - çevreleyici fonksiyondaki .num_calls fonksiyon özniteliğinde saklanır. İşte kullanmanın etkisi:

<br>

{% highlight python  linenos=table %}

import functools

def count_calls(func):
    @functools.wraps(func)
    def wrapper_count_calls(*args, **kwargs):
        wrapper_count_calls.num_calls += 1
        print(f"Call {wrapper_count_calls.num_calls} of {func.__name__!r}")
        return func(*args, **kwargs)
    wrapper_count_calls.num_calls = 0
    return wrapper_count_calls

@count_calls
def say_whee():
    print("Whee!")
     
say_whee()
say_whee()
say_whee()

print(say_whee.num_calls)
{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>
{% highlight python %}

Call 1 of 'say_whee'
Whee!
Call 2 of 'say_whee'
Whee!
Call 3 of 'say_whee'
Whee!

3
{% endhighlight %}


<br>
 
<div id="D45" class="pop1">4.5 Süslü Fonksiyonlar gibi Sınıflar</div>

Durumu sürdürmenin tipik yolu, sınıfları kullanmaktır. Bu bölümde, **bir süslü fonksiyon gibi bir sınıfı kullanarak** bir önceki bölümden @count_calls örneğinin nasıl yeniden yazılacağını göreceksiniz.

func = my_decorator (func) demenin daha kolay bir yolu olan süslü fonksiyon sözdizimini @my_decorator hatırlayın. Bu nedenle, eğer my_decorator bir sınıfsa, onun .__init__ () yordamında bir ifade olarak func alması gerekir. Dahası, sınıfın, süslü fonksiyonun içinde durabilmesi için, istenebilmesi gerekir.

Bir sınıfın istenebilir olması için, özel .__call__() yordamını uygularsınız:

<br>
{% highlight python %}

class Counter:
    def __init__(self, start=0):
        self.count = start

    def __call__(self):
        self.count += 1
        print(f"Current count is {self.count}")

{% endhighlight %}

Bir sınıf özdeşini çağırmaya çalıştığınızda, ___call__() yordamı her seferinde yürütülür:

<br>

{% highlight python  linenos=table %}

class Counter:
    def __init__(self, start=0):
        self.count = start

    def __call__(self):
        self.count += 1
        print(f"Current count is {self.count}")
        
counter = Counter()
counter()

counter()
 
print(f"counter.count is {counter.count}")

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>
{% highlight python %}

Current count is 1
Current count is 2
counter.count is 2

{% endhighlight %}

Bu nedenle, bir süslü fonksiyon sınıfının tipik bir uygulaması, .__init__() ve .__call__() uygulanması gerekir:

<br>

{% highlight python  linenos=table %}

import functools

class CountCalls:
    def __init__(self, func):
        functools.update_wrapper(self, func)
        self.func = func
        self.num_calls = 0

    def __call__(self, *args, **kwargs):
        self.num_calls += 1
        print(f"Call {self.num_calls} of {self.func.__name__!r}")
        return self.func(*args, **kwargs)

@CountCalls
def say_whee():
    print("Whee!")
    
    
say_whee()
say_whee()

print(f"say_whee.num_calls {say_whee.num_calls}")
{% endhighlight %}
 
<br>

.__init__() yordamı, fonksiyona bir atfı kaydetmeli ve diğer gerekli başlatma işlemlerini yapmalıdır. Süslü fonksiyonun yerine .__call__() yordamı çağrılacak. Aslında daha önceki örneğimizde wrapper() fonksiyonuyla aynı şeyi yapar. 
@functools.wraps yerine functools.update_wrapper() fonksiyonunu kullanmanız gerektiğini unutmayın. 


@CountCalls süslü fonksiyonu önceki bölümdeki ile aynı çalışır:
<br>
<h2 class="python3">Python</h2>
{% highlight python %}

Call 1 of 'say_whee'
Whee!
Call 2 of 'say_whee'
Whee!
say_whee.num_calls 2

{% endhighlight %}

<br>

<div id="D5" class="pop0">5 Daha Gerçek Dünya Örnekleri</div>

Her türlü süslü fonksiyonu nasıl oluşturacağımızı anlayarak, şu ana kadar çok yol kat ettik. Yeni bir bilgi birikimimizi, gerçek dünyada gerçekten faydalı olabilecek birkaç örnek oluşturarak bir araya getirelim.


<br>
<div class="pop2">Slowing Down Code</div>


Daha önce belirtildiği gibi, daha önce de belirtildiği gibi, Önceki @slow_down uygulamamız her zaman bir saniye uyur. Artık, süslü fonksiyonlar için parametrelerin nasıl ekleneceğini biliyorsunuz. Bu nedenle, ne kadar süre uyuduğunu kontrol eden isteğe bağlı bir rate ifadesi kullanarak @slow_down'u yeniden yazalım:

<br>

{% highlight python  linenos=table %}

import functools
import time

def slow_down(_func=None, *, rate=1):
    """Sleep given amount of seconds before calling the function"""
    def decorator_slow_down(func):
        @functools.wraps(func)
        def wrapper_slow_down(*args, **kwargs):
            time.sleep(rate)
            return func(*args, **kwargs)
        return wrapper_slow_down

    if _func is None:
        return decorator_slow_down
    else:
        return decorator_slow_down(_func)
        
        
@slow_down(rate=2)
def countdown(from_number):
    if from_number < 1:
        print("Liftoff!")
    else:
        print(from_number)
        countdown(from_number - 1)
               
countdown(3)

{% endhighlight %}

@slow_down'u ifadeli ve ifadesiz olarak kullanılabilir hale getirmek için, bölümünde tanıtılan katmanı kullanıyoruz. Aynı özyineli countdown() fonksiyonu, daha önce olduğu gibi her sayım arasında iki saniye uyur:

Daha önce olduğu gibi, süslü fonksiyonun etkisini görmek için örneği kendiniz uygulamanız gerekir:
<br>
<h2 class="python3">Python</h2>
{% highlight python %}

3
2
1
Liftoff!

{% endhighlight %}


<br>
<div class="pop2">Singletons Oluşturma</div>

Singleton, tek bir özdeşe sahip bir sınıftır. Python'da, None, True ve False da dahil olmak üzere sıkça kullandığınız birkaç singleton vardır. Gerçekte None, is anahtar sözcüğünü kullanarak None'yu karşılaştırmanıza olanak veren bir singleton'dur

<br>
{% highlight python %}

if _func is None:
    return decorator_name
else:
    return decorator_name(_func)

{% endhighlight %}

is, yalnızca tamamen aynı özdeş öbekler için True'yu döndürür.

Aşağıdaki @singleton süslü fonksiyonu, sınıfın ilk özdeşini bir öznitelik olarak saklayarak bir sınıfı bir singletona dönüştürür.


Daha sonra saklanan özdeşi basitçe döndüren bir özdeş oluşturmaya çalışır:

<br>

{% highlight python  linenos=table %}

import functools

def singleton(cls):
    """Make a class a Singleton class (only one instance)"""
    @functools.wraps(cls)
    def wrapper_singleton(*args, **kwargs):
        if not wrapper_singleton.instance:
            wrapper_singleton.instance = cls(*args, **kwargs)
        return wrapper_singleton.instance
    wrapper_singleton.instance = None
    return wrapper_singleton

@singleton
class TheOne:
    pass
  
first_one = TheOne()
another_one = TheOne()

id(first_one)
id(another_one)

first_one is another_one


print(f"id.first_one {id(first_one)}")

print(f"id.another_one {id(another_one)}")

print(f"first_one is another_one {first_one is another_one}")
{% endhighlight %}

Gördüğünüz gibi, bu sınıf donatıcı, fonksiyon donatıcılarımızla aynı şablonu takip eder. Tek fark, func yerine cls kullanmanın, bir sınıf donatıcı olması gerektiğine işaret etmek için parametre adı olarak kullanılmasıdır. 

<br>
<h2 class="python3">Python</h2>
{% highlight python %}

id.first_one 140378732397792
id.another_one 140378732397792
first_one is another_one True


{% endhighlight %}

first_one'un gerçekten de bir another_one ile aynı özdeş olduğu açıkça görünüyor.

<br>

<div class="alert alert-warning" role="alert">
<p><strong>Not:</strong> Singleton sınıfları, diğer dillerdeki gibi Python'da sık sık kullanılmamaktadır. Bir Singleton etkisi genellikle bir modülde global değişken olarak daha iyi uygulanır.</p>
</div>

<br>
<div class="pop2">Dönüş Değerlerini Önbelleğe Alma</div>

Dekoratörler, önbelleğe alma ve hafızalama için güzel bir mekanizma sağlayabilir. Örnek olarak, Fibonacci dizisinin yinelemeli bir tanımına bakalım:

<br>
{% highlight python %}

from decorators import count_calls

@count_calls
def fibonacci(num):
    if num < 2:
        return num
    return fibonacci(num - 1) + fibonacci(num - 2)

{% endhighlight %}

Uygulama basitken, çalışma zamanı performansı korkunç:



<button class="w3-button w3-blue" onclick="document.getElementById('id01').style.display='block'">Bilgi!</button> 

<div id="id01" class="w3-panel w3-green w3-display-container" style="display:none">
  <span onclick="this.parentElement.style.display='none'"
  class="w3-button w3-yellow w3-display-topright">&#10004;</span>
  <p> <code class="w3-codespan">init</code> bazen nesnenin kurucusu olarak adlandırılır, çünkü kurucuların diğer dillerde kullanıldığı gibi kullanılır, ancak bu teknik olarak doğru değildir - onu başlatıcı olarak adlandırmak daha iyidir. Bir kurucuya daha benzer olan <code class="w3-codespan">new</code> adlı farklı bir yordam var, ancak neredeyse hiç kullanılmıyor.</p>
</div>











