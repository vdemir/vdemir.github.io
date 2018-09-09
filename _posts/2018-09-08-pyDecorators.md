---
layout: post
title:  Python Dekoratörler Üzerine Bir Başlangıç
date:   2018-09-08 12:00:00
last_updated: 2018-09-11 12:00:00
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
  <img src="{{ site.baseurl }}/images/Python-Decorators.png" alt="programs" class="resize" />
  <p><small>Python &bull; Decorators.</small></p>
</div> 
  
<style>
img.resize {
  max-width:100%;
  max-height:100%;
}
</style>

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
		font-size: 1vw;
		text-decoration: overline;
		text-decoration-color: orange;
	}

.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1.125rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4.1875rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#32516b;background-color:#dfebf5;border-color:#d3e3f1}.alert-primary hr{border-top-color:#c0d7eb}.alert-primary .alert-link{color:#223748}.alert-secondary{color:#7d7d7d;background-color:#fcfcfc;border-color:#fbfbfb}.alert-secondary hr{border-top-color:#eee}.alert-secondary .alert-link{color:#646464}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#850000;background-color:#fcc;border-color:#ffb8b8}.alert-danger hr{border-top-color:#ff9f9f}.alert-danger .alert-link{color:#520000}.alert-light{color:gray;background-color:#fdfdfd;border-color:#fcfcfc}.alert-light hr{border-top-color:#efefef}.alert-light .alert-link{color:#676767}.alert-dark{color:#0c1c28;background-color:#d1d7db;border-color:#bec6cd}.alert-dark hr{border-top-color:#b0b9c2}.alert-dark .alert-link{color:#000101}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}
</style>
<br>

<div class="pop">Dekoratörler</div> 

<br>

+ [Fonksiyonlar](#D1)
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Birinci Sınıf Öbekler](#D11)
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[İç Fonksiyonlar](#D12)
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Fonksiyonlardan Dönen Fonksiyonlar](#D13)
+ [Basit Dekoratörler](#D2)
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Sözdizimsel Şeker!](#D21)
    - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Dekoratörleri Yeniden Kullanmak](#D22)

Dekoratörlerle ilgili bu eğiticide, neye, nasıl oluşturulacağına ve kullanılacağına bakacağız. Dekoratörler, yüksek mertebeden fonksiyonları çağırmak için basit bir sözdizimi sağlar. 

Matematik ve bilgisayar bilimlerinde, daha yüksek mertebeden bir fonksiyon (aynı zamanda fonksiyonel, fonksiyonel form) aşağıdakilerden en az birini yapan bir fonksiyondur: 

1. ifade olarak bir veya daha fazla fonksiyon alır (örn. Yordamsal parametreler) , 
2. sonuç olarak bir fonksiyonu döndürür.

Tanım olarak, bir dekoratör, başka bir fonksiyon alan ve  açık bir şekilde değiştirmeden aldığı fonksiyonun davranışını genişleten bir fonksiyondur. 

Bu kafa karıştırıcı gibi geliyor, ancak özellikle de dekoratörlerin nasıl çalıştığına dair birkaç örnek gördükten sonra değil. Bu makaledeki tüm örnekleri burada bulabilirsiniz.


<div class="box">Bu kafa karıştırıcı gibi geliyor, ancak özellikle de dekoratörlerin nasıl çalıştığına dair birkaç örnek gördükten sonra değil.</div>

<br>

<div id="D1" class="pop0">Fonksiyonlar</div>

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
 
<br>

<div class="alert alert-primary" role="alert">
<p><strong>Note:</strong> Fonksiyonel programlamada, yan etkiler olmadan sadece saf fonksiyonlarla çalışırsınız (neredeyse). Tamamen fonksiyonel bir dil olmasa da, Python birinci sınıf öbekler gibi fonksiyonlar de dahil olmak üzere birçok fonksiyonel programlama kavramını desteklemektedir.</p>
</div>

Bilgisayar biliminde, Fonksiyonel programlama, hesaplamayı matematiksel fonksiyonların değerlendirilmesi olarak hesaplamayı işleyen ve değişen durum ve değişebilir verileri önleyen bir programlama paradigmasıdır. Bir bildirimsel programlama paradigmasıdır, yani programlama, ifadeler yerine deyim veya bildirimlerle yapılır.

Fonksiyonel programlamada beyanlar-```statements```- yerine ifadeler-```expressions```- ve bildirimler-```declarations```- kullanılır; bir programlama dilinde bir ifade, programlama dilinin başka bir değer üretmesi için yorumladığı ve hesapladığı bir veya daha fazla sabit, değişken, operatör ve işlevlerin birleşimidir. Bu süreç, matematiksel ifadeler için değerlendirmeye denir.

<br>

<div id="D11" class="pop1">Birinci Sınıf Öbekler</div>

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

{% highlight python %}
In [1]: merhaba_kedi(merhaba_de)
Out[1]: 'Merhaba Kedi'

In [2]: merhaba_kedi(harika_ol)
Out[2]: 'Hey Kedi, biz birlikte harikayız!'
{% endhighlight %}

```merhaba_kedi(merhaba_de)```'nin iki fonksiyona, ancak farklı yollara başvurduğunu unutmayın: ```harika_ol()``` ve ```merhaba_de```. ```merhaba_de``` fonksiyonu parantez içermiyor. Bu, fonksiyona yalnızca bir atfın geçirildiği anlamına gelir. Fonksiyon yürütülmez. Öte yandan, ```merhaba_kedi()``` fonksiyonu parantez ile yazıldığından, her zamanki gibi çağrılır.

<br>

<div id="D12" class="pop1">İç fonksiyonlar</div>

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

<div id="D13" class="pop1">Fonksiyonlardan Dönen Fonksiyonlar</div>

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

<div id="D2" class="pop0">Basit Dekoratörler</div>

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

{% highlight c %}

In [1]: say_whee()
Something is happening before the function is called.
Whee!
Something is happening after the function is called.

{% endhighlight %}

Burada neler olduğunu anlamak için önceki örneklere bakın. Tam anlamıyla şimdiye kadar öğrendiğiniz her şeyi gerçekten uyguluyoruz. 

Sözde dekorasyon şu satırda gerçekleşir:

{% highlight python %}

say_whee = my_decorator(say_whee)

{% endhighlight %}

Aslında, ```say_whee``` ismi şimdi ```wrapper()``` iç fonksiyonuna işaret etmektedir.
Çağrı yaptığınızda ```wrapper``` fonksiyon olarak döndürdüğünüzü hatırlayın.

my_decorator(say_whee):

{% highlight python  %}

In [3]: say_whee
Out[3]: <function __main__.my_decorator.<locals>.wrapper>

{% endhighlight %}

Ancak, ```wrapper()``` fonksiyonu, orijinal ```say_whee()``` fonksiyonune func olarak bir atıfta bulunur ve iki ```print()``` çağrı arasında bu fonksiyonu çağırır.

Basitçe söylemek gerekirse: **dekoratörler, onların davranışlarını değiştirerek bir fonksiyonu sarmaktadır.**

Devam etmeden önce, ikinci bir örneğe bakalım. ```wrapper()``` normal bir Python fonksiyonu olduğu için bir dekoratörün bir fonksiyonu değiştirdiği yöntem dinamik olarak değişebilir. Komşularınızı rahatsız etmeyecek şekilde, aşağıdaki örnek yalnızca gün boyunca dekore edilmiş kodu çalıştıracaktır:

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

Yatma zamanı sonrası ```say_whee()``` çağırmayı denerseniz, hiçbir şey olmaz:

{% highlight python  %}

In [1]: say_whee()
Whee!

In [4]: say_whee()
In [5]: 
{% endhighlight %}

<br>

<div id="D21" class="pop1">Sözdizimsel Şeker!</div>

Yukarıda ```say_whee()``` ile dekore ettiğiniz yol biraz biçimsiz ve hantal. Her şeyden önce, ```say_whee``` isminin üç kere yazımını bitirirsiniz. Buna ek olarak, dekorasyon, fonksiyon tanımının altında gizlenmiştir.

Bunun yerine, Python, bazen ```'pie'``` sözdizimi olarak da adlandırılan ```@``` sembolüyle daha basit bir şekilde dekoratörler kullanmanıza izin verir. Aşağıdaki örnek, ilk dekoratör örneğiyle tamamen aynı şeyi yapar:

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

Bu yüzden, ```@my_decorator``` sadece, ```say_whee = my_decorator(say_whee)``` demenin daha kolay bir yoldur. Bu bir fonksiyona bir dekoratörün nasıl uygulandığıdır.

<br>

<div id="D22" class="pop1">Dekoratörleri Yeniden Kullanmak</div>

Bir dekoratörün sadece normal bir Python fonksiyonu olduğunu hatırlayın. Kolay tekrar kullanılabilirlik için tüm genel araçlar mevcuttur. Dekoratörü diğer birçok fonksiyonda kullanılabilecek kendi modülüne taşıyalım.

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
<p><strong>Note:</strong> İçsel fonksiyonunuzu istediğiniz gibi adlandırın ve **wrapper()** gibi genel bir ad genellikle tamamdır. Bu makalede çok sayıda dekoratör göreceksiniz. Bunları ayrı tutmak için, iç fonksiyonu, dekoratörle aynı adla, ancak bir **wrapper_** önekiyle adlandıracağız.</p>
</div>

Bu yeni dekoratörü, normal bir içe aktarma yaparak diğer dosyalarda kullanabilirsiniz:

{% highlight python  linenos=table %}

from decorators import do_twice

@do_twice
def say_whee():
    print("Whee!")

{% endhighlight %}

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


Bu örneği çalıştırdığınızda, orijinal ```say_whee()``` öğesinin iki kez yürütüldüğünü görmelisiniz:


{% highlight python  %}

In [1]: say_whee()
Whee!
Whee!
{% endhighlight %}

<br>

## Biraz Daha Faydalı


Şimdi, ilk örneğe dönelim ve uygulayalım. Burada, daha tipik olanı yapacağız ve aslında kodu dekore edilmiş fonksiyonlarda kullanacağız:

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

 Çıktı:

{% highlight python  %}

Entering func1
inside func1()
Exited func1
Entering func2
inside func2()
Exited func2
{% endhighlight %}


Dekore edilmiş işlevlerin artık çağrı etrafında 'Entering' ve 'Exited' izleme ifadelerine sahip olduğunu görebilirsiniz. 

Kurucu, işlev nesnesi olan bağımsız değişkeni saklar. Çağrıda, işlevin adını göstermek için işlevin __name__ özniteliğini kullanırız, daha sonra işlevin kendisini çağırırız.


<br>

## Meta sınıflar ve dekoratörler: uzayda yapılmış bir eşleme


Meta sınıflar karmaşık bir konudur ve çoğu zaman ileri düzey programcılar, onlar için çok çeşitli pratik kullanımları görmez.

Gerçekten metasınıflar genellikle çok sayıda otomasyonun sağlanması gereken gelişmiş kütüphaneleri veya çerçeveleri programlarken oyuna girer. Örneğin, Django Forms sistemi, tüm sihrini sağlamak için meta sınıflara dayanır.

Bununla birlikte, genel olarak bilmediğimiz tüm teknikleri 'büyü' ya da 'hileler' olarak adlandırdığımızı ve Python'un bir sonucu olarak birçok şeyin bu şekilde çağrıldığını, bunun diğer dillere kıyasla genellikle kendine özgü bir uygulama olduğunu belirtmek zorundayız.

Biraz Python sihirbazlığı yapalım ve dilin gücünü kullanalım!

Bu yazıda size dekoratörler ve meta sınıfların ilginç bir ortak kullanımını göstermek istiyorum. Yöntemleri işaretlemek için dekoratörlerin nasıl kullanılacağını size göstereceğim, böylece belirli bir işlemi gerçekleştirirken sınıf tarafından otomatik olarak kullanılabilirler.

Daha ayrıntılı olarak, bir dizgeye 'işleyebilmek' için çağrılabilecek bir sınıf uygulayacağım ve basit bir şekilde dekore edilmiş yöntemlerle farklı 'filtreleri' nasıl uygulayacağınızı göstereceğim. Benim elde etmek istediğim şunun gibi:

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

[Bu yazı içerisinde kullanılan kaynak kodun tamamını içerir.]({{ site.baseurl }}/assets/strproc.py)

Modül, bir standart imza (self, str) içeren ve 
stringfilter ile dekore edilen ekleme yöntemlerini alıp özelleştirebileceğim bir StringProcessor sınıfı tanımlar. Bu sınıf daha sonra örneklenebilir ve örnek, bir dizeyi doğrudan işlemek ve sonucu döndürmek için kullanılır. Dahili olarak sınıf, tüm dekore edilmiş yöntemleri art arda otomatik olarak yürütür. Ayrıca, sınıfın, filtreleri tanımladığım sıraya uymasını istiyorum: ilk önce, ilk olarak çalıştırılır.

Metaclasses bu hedefe ulaşmak için nasıl yardımcı olabilir? 

Basitçe söylemek gerekirse, meta sınıflar, sınıfları almak için örneklendirilen sınıflardır. Bu, bir dersi her kullandığımda, örneğin, onu örneklendirmek için ilk Python'un, yazdığımız meta sınıfı ve sınıf tanımını kullanarak bu sınıfı oluşturduğu anlamına gelir. Örneğin, sınıf üyelerini __dict__ özniteliğinde bulabileceğinizi biliyorsunuz: bu özellik, tür olan standart metaclass tarafından oluşturulur. 

Verilen bir metaclass, sınıf tanımındaki fonksiyonların bir alt kümesini tanımlamak için bir kod eklememiz için iyi bir başlangıç ​​noktasıdır. Başka bir deyişle, meta sınıfın (yani, sınıfın) çıktısının tam olarak standart durumda olduğu gibi oluşturulmasını istiyoruz, ama ek olarak: 
stringfilter ile süslenmiş tüm yöntemlerin ayrı bir listesi.

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

Çıktı:

{% highlight python  %}

['I', 'am', 'a', 'cat', '', 'help', 'me']

{% endhighlight %}

<br>

<div id="D23" class="pop1">İfadelerle Bezeyen Fonksiyonlar</div>

Bazı argümanları kabul eden bir işleviniz olduğunu varsayalım. Hala dekore edebilir misin? Hadi deneyelim:

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

Maalesef, bu kodu çalıştırmak bir hataya yol açıyor:

{% highlight python  %}

In [1]: greet("World")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    greet("World")
TypeError: wrapper_do_twice() takes 0 positional arguments but 1 was given
{% endhighlight %}

Sorun şu ki, içsel işlev wrapper_do_twice() işlevi herhangi bir argüman almaz, ancak name = 'Dünya' ona aktarıldı. Wrapper_do_twice() öğesinin bir bağımsız değişkeni kabul etmesine izin vererek bunu düzeltebilirsiniz, ancak daha önce oluşturduğunuz say_whee() işlevi için çalışmaz.

Çözüm, iç sarmalayıcı fonksiyonunda *args ve **kwargs kullanmaktır. Ardından, rastgele sayı ve konum argümanlarını kabul eder. decorators.py dosyasını aşağıdaki gibi yeniden yazınız:

{% highlight python %}

def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)
    return wrapper_do_twice

{% endhighlight %}

wrapper_do_twice() iç işlevi artık herhangi bir sayıdaki argümanı kabul eder ve bunları bezediği işleve iletir. Şimdi hem say_whee() ve greet() örnekleri çalışır:

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

Çıktı:

{% highlight python %}

In [1]: greet("World")
HelloWorld
HelloWorld

In [2]: say_whee()
Whee!
Whee! 

{% endhighlight %} 


<br>

<div id="D24" class="pop1">Dekore Edilmiş Fonksiyonlardan Dönen Değerler</div>

Dekorlu fonksiyonların dönüş değeri ne olur? Eh, karar vermek için dekoratöre kalmış. Basit bir işlevi aşağıdaki gibi dekore ettiğinizi varsayalım:

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

Kullanmayı dene:

{% highlight python %}

In [1]: hi_adam = return_greeting("Adam")
Creating greeting
Creating greeting

In [2]: print(hi_adam)
None

{% endhighlight %} 

Maalesef, dekoratörünüz işlevden dönüş değerini yedi.

do_twice_wrapper() işlevi açıkça bir değer döndürmediğinden, return_greeting('Adam') çağrısı, None döndürerek sona ermiştir.

Bunu düzeltmek için, **sarma işlevinin dekore edilmiş işlevin dönüş değerini döndürdüğünden emin olmanız** gerekir. Decorators.py dosyanızı 4. satırını değiştirin:

{% highlight python %}

def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        return func(*args, **kwargs)
    return wrapper_do_twice

{% endhighlight %} 

İşlevin son yürütülmesinden döndürülen değer döndürülür:

{% highlight python  linenos=table %}

def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        return func(*args, **kwargs)
    return wrapper_do_twice

@do_twice
def return_greeting(name):
    print("Creating greeting")
    return "Hi" + name
{% endhighlight %}


Kullanmayı dene:

{% highlight python %}

In [3]: return_greeting("Adam")
Creating greeting
Creating greeting
Out[3]: 'HiAdam'

{% endhighlight %} 


