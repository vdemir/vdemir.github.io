---
layout: post
title: Python Sınıfları
description: Python sınıfları, Nesne Yönelimli Programlamanın tüm standart özelliklerini sağlar.
date:   2018-08-29 15:52:00
last_updated: 2018-09-05 15:52:00
keywords: linux, python, programlama
summary: "Python 3 Sınıflar ve Nesneler."
excerpt: This post is about Python 3 Classes
categorie: Programlama
tags:   Linux Programlama Python
permalink: /PyClasses/
categories: [Python Classes, Python 3]
comments: false
published: true
lang: tr
---

<link rel="stylesheet" href="{{ sitebase.url }}/css/w3.css">
<link rel="stylesheet" href="{{ sitebase.url }}/css/code.css">
  
<style>
img.resize {
  max-width:100%;
  max-height:100%;
}
</style>

<div class="w3-panel w3-card w3-light-grey">
  <div class="w3-container w3-white">
    <p>
    <ul class="w3-ul w3-card-4" style="width:85%">
      <li><a href="#C1" style="text-decoration: none; color:#388E3C; cursor:pointer">Bir Python Sınıfı Oluşturmak</a></li>
      <li><a href="#C84" style="text-decoration: none; color:#388E3C; cursor:pointer">Oluşturulduktan Sonra Sınıfların Değiştirilmesi</a></li>
      <li><a href="#C81" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıf Özdeşleri</a></li>
      <li><a href="#C2" style="text-decoration: none; color:#388E3C; cursor:pointer">Bir Python Nesnesi Oluşturmak</a></li>
      <li><a href="#C3" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıf Eşleme ile Nesne Oluşturmak</a></li>
      <li><a href="#C13" style="text-decoration: none; color:#388E3C; cursor:pointer">Nesne Özniteliklerini Değiştirmek</a></li>
      <li><a href="#C14" style="text-decoration: none; color:#388E3C; cursor:pointer">Nesne Özniteliklerini Silmek</a></li>
      <li><a href="#C15" style="text-decoration: none; color:#388E3C; cursor:pointer">Nesneleri Silmek</a></li>
      <li><a href="#C5" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıf Öbekleri</a></li>
      <li><a href="#C6" style="text-decoration: none; color:#388E3C; cursor:pointer">Özdeş Öbekler</a></li>
      <li><a href="#C7" style="text-decoration: none; color:#388E3C; cursor:pointer">Yordam Öbekleri</a></li>
      <li><a href="#C8" style="text-decoration: none; color:#388E3C; cursor:pointer">Python Öznitelikler ve Yordamlar</a></li>
      <li><a href="#C9" style="text-decoration: none; color:#388E3C; cursor:pointer">new yordamı</a></li>
      <li><a href="#C10" style="text-decoration: none; color:#388E3C; cursor:pointer">init yordamı</a></li>
      <li><a href="#C11" style="text-decoration: none; color:#388E3C; cursor:pointer">self yordamı</a></li>
      <li><a href="#C82" style="text-decoration: none; color:#388E3C; cursor:pointer">El Yordamı ile 'self' Geçirme</a></li>
      <li><a href="#C12" style="text-decoration: none; color:#388E3C; cursor:pointer">super fonksiyonu</a></li>
      <li><a href="#C18" style="text-decoration: none; color:#388E3C; cursor:pointer">Python Programları</a></li>
      <li><a href="#C16" style="text-decoration: none; color:#388E3C; cursor:pointer">Python 3 Shell</a></li>
      <li><a href="#C17" style="text-decoration: none; color:#388E3C; cursor:pointer">Sözlük Dizini</a></li>
    </ul>
    </p>
  </div>
</div>
<br>
Python bir nesne yönelimli programlama dilidir.
Python'daki hemen hemen her şey, öznitelikleri ve yordamları ile bir nesnedir. 

Python sınıfları, Nesne Yönelimli Programlamanın tüm standart özelliklerini sağlar: sınıf örneklem mekanizması, birden fazla temel sınıfa izin verir, türetilmiş bir sınıf, temel sınıfının veya sınıflarının herhangi bir yordamını geçersiz kılabilir ve bir yordam, aynı ada sahip bir taban sınıfının yordamını çağırabilir . Nesneler, rastgele miktarları ve veri türlerini içerebilir. Modüller için doğru olduğu gibi, sınıflar Python'un dinamik doğasını paylaşırlar: çalışma zamanında oluşturulurlar ve oluşturulduktan sonra daha fazla değiştirilebilirler. 
 
{% highlight python %}
class ClassName:
    'class docstring'
    class_suite
    # python sınıf öznitelikleri listesi
    # python sınıf kurucu
    # python sınıf yordam tanımları
{% endhighlight %}

Burada, (class docstring) class_name._doc_ üzerinden erişilebilen bir belge dizesidir ve class_suite, temel olarak sınıf elemanlarını, veri özniteliklerini ve yordamları tanımlayan tüm bileşen ifadelerinden oluşur.
<br>

<main class="grid">
  <article>
{% highlight python %}
# sınıfın tanımı burada başlar  
class Person:
  # öznitelikleri başlatma yordamı
  name = ""
  age = 0
      
  #sınıf kurucusu tanımlar
  def __init__(self, personName, personAge):
      self.name = personName
      self.age = personAge
  
  #sınıf yordamlarını tanımlar
  def showName(self):
      print(self.name)
  
  def showAge(self):
      print(self.age)
          
  #sınıf tanımının sonu
  
#Sınıfın bir nesnesini oluşturur 
person1 = Person("Richard", 23)
#Aynı sınıfın diğer bir nesnesini oluşturur   
person2 = Person("Anne", 30)
#Nesne/Öbek yordamının elemanını çağırır  
person1.showAge()
person2.showName()
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
23<br>
Anne
</p>
    </div>
  </article>
</main>

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/class1.png" alt="programs" class="resize" />
  <p><small>Python &bull; Sınıflar.</small></p>
</div> 


<br><br>

<div class="teaser clearfix"></div>
<h3 id="C1">Bir Python Sınıfı Oluşturma</h3><hr>
**x** adlı bir özdeğere sahip **MyClass** adlı bir sınıf/öbek oluşturun:
<div class="w3-code notranslate">
{% highlight python %}
class MyClass:
  'Python Temel Sınıf'
  x = 5
print(MyClass)
{% endhighlight %}
</div>

<br>
 
**Sınıf:** Uzakta bir kale duruyor. Birçok işlevi vardır - bir hendek vardır, duvarları vardır, şehri korur. İstilacıları dışarıda tutar.
 

**Bir kale gibi:** Python'daki bir sınıfın işlevleri vardır (defs). Bir kale kasabayı koruyor. Bir sınıf verilerini korur. Sınıflar bir soyutlamadır.

<br>

<main class="grid">
  <article>
{% highlight python %}
class Sinif:
    def bir_yordam(self):
        print ('Hey bir yordam')

ozdes = Sinif()

ozdes.bir_yordam()
# 'Hey bir yordam' yazdırır, 
# az çok şaşırtıcı değil. 
# Ayrıca şunları da yapabilirsiniz:

Sinif.bir_yordam(ozdes)
# 'Hey bir yordam' yazdırır
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Hey bir yordam<br>
Hey bir yordam
</p>
    </div>
  </article>
</main>

<br><br>

<h4 id="C84">Oluşturulduktan Sonra Sınıfların Değiştirilmesi</h4>
<hr>


Sınıf oluşturulduktan çok sonra ve sonradan eşleştirildikten sonra bile bir sınıf özniteliğini veya yordamını ekleyebilir, değiştirebilir veya silebilirsiniz. Sadece özniteliğe veya yordama **Class.attribute** olarak erişin. Ne zaman oluşturuldukları önemli değil, sınıfın özdeşleri bu değişikliklere saygı duyacaktır:


<main class="grid">
  <article>
{% highlight python %}
class Class:
   def method(self):
        print ('Hey a method')

instance = Class()
instance.method()
# prints 'Hey a method'

def new_method(self):
    print ('New method wins!')

Class.method = new_method
instance.method()
# prints 'New method wins!'
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>

Out [1]: <br> <br>
Hey a method <br>  <br>
New method wins!
</p>
    </div>
  </article>
</main>

Oldukça müthiş. Ancak, önceden varolan yordamları değiştirmekle uğraşmayın, bu kötü bir formdur ve bu sınıfı kullanarak herhangi bir öbeği karıştırır. Öte yandan, yordamların eklenmesi çok daha az (ama yine de biraz) tehlikelidir.

<br><br>

<h4 id="C81">Sınıf Özdeşleri</h4><hr>

Bir sınıfın özdeşi, bir Python öbeğidir ve her Python öbeğine benzer şekilde, şu özelliklere sahiptir: kimlik, öbek/nesne tipi, öznitelikler, yordamlar ve değeri.
**(identity, object type, attributes, methods, and value)

Bir sonraki açıklama için aşağıdaki sınıf tanımını kullanacağım. Öncelikle, **c** sınıfı ilan edelim, ve sonra **obj** olarak adlandırılan bu sınıfın bir özdeşini oluşturacağız.

 
<main class="grid">
  <article>
{% highlight python %}
class c:
    def __init__(self, value=None):
        self.name = value
obj = c()
obj.name = "Andre"
id(obj)
type(obj)
type(obj.name)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>

Out[1]: 140040300870176 <br>
Out[2]: __main__.c <br>
Out[3]: str
</p>
    </div>
  </article>
</main>


Kimlik[identity], öbek için ayrılan bellek konumudur. **id()** fonksiyonu kullanılarak tanımlanabilir.

<div class="w3-code notranslate pythonHigh">
id(obj)</div>

Nesne tipi, öbeğin iç temsilidir. Her öbek için desteklenen yordam ve işlemi tanımlar. Belirli bir Nesnenin tipini öğrenmek için **type()** fonksiyonunu kullanabilirsiniz.

<div class="w3-code notranslate pythonHigh">
type(obj)<br>
type(obj.name)</div>

Nesne tiplerinden bahsederken, tüm sınıf konusundan kısa bir ara verelim ve sınıflar gibi davranmayan, uzantı modüllerinde tanımlanan Python öbeklerini inceleyelim.

Bir nesnenin öznitelikleri ve yordamları, öbek adından sonra bir nokta (.) yerleştirerek erişilmesi gereken bağlı özelliklerdir.

Sonunda, bir nesnenin değeri bir örnekle daha iyi görselleştirilir.

<div class="w3-code notranslate pythonHigh">
obj.name = "Andre"</div>

**'Andre'** dizesi, **obj** öbeğinin **name** özniteliğine atanan değerdir.



<br><br>

<div class="teaser clearfix"></div>
<h3 id="C2">Bir Python Nesnesi Oluşturma</h3><hr>
Artık nesneleri oluşturmak için **myClass** adlı sınıfı kullanabiliriz:
 
<div class="w3-code notranslate pythonHigh">
  class MyClass:<br>&nbsp; x = 5<br>p1 = MyClass()<br>print(p1.x)<br>print(MyClass.x)</div>
<br>
<div class="teaser clearfix"></div>
<h3 id="C3">Sınıf Eşleme ile Nesne Oluşturma</h3><hr>
 Bir sınıfın bir mislini oluşturmak için, sadece sınıf/öbek adını kullanarak sınıfı çağırır ve daha sonra <code class="w3-codespan">init</code> yordamının kabul ettiği ifadeleri iletirsiniz:

<div class="w3-code notranslate pythonHigh">
  p1 = Person("John", 36)</div>

<br>

<div class="teaser clearfix"></div>
<h3 id="C13">Nesne Özniteliklerini Değiştirmek</h3><hr>
Bu gibi nesnelerdeki öznitelikleri değiştirebilirsiniz:
<p>p1'in yaşını 40'a ayarlayın:</p>
<div class="w3-code notranslate pythonHigh">
  p1.age = 40</div>


<main class="grid">
  <article>
{% highlight python %}
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)

p1.age = 40
print(p1.age)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
40
</p>
    </div>
  </article>
</main>

<div class="w3-container w3-content">
 <div class="w3-panel w3-white w3-card w3-display-container">
   <p> Ne yaptığınızı biliyorsanız, sınıfların nasıl karşılaştırıldığı, özniteliklerin nasıl tanımlandığı ve sınıfınızın alt sınıfları olarak kabul edilen sınıflar hakkında neredeyse tam kontrol sahibi olabilirsiniz.</p>
 </div>
</div>

<br>

<div class="teaser clearfix"></div>
<h3 id="C14"> Nesne Özniteliklerini Silmek</h3><hr>
Nesnelerin Özniteliklerini <code class="w3-codespan">del</code> anahtar sözcüğünü kullanarak silebilirsiniz:
<p>age özniteliğini p1 nesnesinden silin:</p>
<div class="w3-code notranslate pythonHigh">
 del p1.age</div>

<main class="grid">
  <article>
{% highlight python %}
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)

del p1.age

print(p1.age)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
AttributeError: 'Person' object has no attribute 'age'
</p>
    </div>
  </article>
</main>

<br>
<div class="teaser clearfix"></div>
<h3 id="C15"> Nesneleri Silmek</h3><hr>
Nesneleri <code class="w3-codespan">del</code> anahtar sözcüğünü kullanarak silebilirsiniz: 
<p>p1 nesnesini silin:</p>

<div class="w3-code notranslate pythonHigh">
 del p1</div>


<main class="grid">
  <article>
{% highlight python %}
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)

del p1

print(p1)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
NameError: name 'p1' is not defined
</p>
    </div>
  </article>
</main>

<br><br>

<div class="teaser clearfix"></div>
<h3 id="C5">Sınıf Öbekleri </h3><hr>
Sınıf nesneleri iki tür işlemi destekler: öznitelik referansları ve örnekleme. 

Öznitelik referansları, Python: obj.name'deki tüm öznitelik referansları için kullanılan standart sözdizimini kullanır. Geçerli nesne adları, sınıf nesnesi oluşturulduğunda sınıfın ad alanındaki tüm adlardır. Yani, sınıf tanımı böyle görünüyorsa:
<br>
<div class="teaser clearfix"></div>
<main class="grid">
  <article>
{% highlight python %}
# sınıfın tanımı burada başlar  
class MyClass:
    """Basit bir örnek sınıf"""
    i = 12345

    def f(self):
        return 'hello world'

x = MyClass()
print(x.i) 

t=MyClass.i
print(t)

p=MyClass.f(1)
print(p)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
12345 <br>
12345 <br>
hello world
</p>
    </div>
  </article>
</main>
 
<br>
sonra **MyClass.i** ve **MyClass.f**, sırasıyla bir tamsayı ve fonksiyon nesnesini döndüren geçerli öznitelik referanslarıdır. Sınıf öznitelikleri de atanabilir, böylece **MyClass.i**'nin değerini atama yoluyla değiştirebilirsiniz. **__doc__** ayrıca geçerli bir özniteliktir ve **'Basit bir örnek sınıf'** sınıfa ait olan docstring döndürür.

Sınıf örnekleme, fonksiyon notasyonu kullanır. Sınıf nesnesinin,  sadece sınıfın yeni bir örneğini döndüren parametresiz bir fonksiyon olduğunu varsayalım. Örneğin (yukarıdaki sınıfı varsayarak):

<div class="w3-code notranslate pythonHigh">
  x = MyClass() </div>
sınıfın yeni bir örneklemini oluşturur ve bu nesneyi **x** yerel değişkenine atar.

Örneklem işlemi boş bir nesne oluşturur.(bir sınıf nesnesini çağırmak) Birçok sınıf, belirli bir başlangıç ​​durumuna göre özelleştirilmiş örneklemeler ile nesneler oluşturmayı sever. Bu nedenle, bir sınıf, **__init__()** adında özel bir yordam tanımlayabilir, bunun gibi: 
<div class="w3-code notranslate pythonHigh">
  def __init__(self):<br> &nbsp; self.data = []</div>

Bir sınıf/öbek bir **__init__()** yordamını tanımladığında, sınıf/öbek örneklemesi otomatik olarak yeni oluşturulmuş sınıf örneği için **__init__()** yordamını çağırır. . Bu örnekte, yeni başlatılmış bir örnekleme şu şekilde elde edilebilir: 
<div class="w3-code notranslate pythonHigh">
  x = MyClass() </div>


Elbette **__init__()** yordamı daha fazla esneklik için argümanlara sahip olabilir. Bu durumda, sınıf/öbek örnekleme işlecine verilen argümanlar **__init__()** öğesine iletilir. Örneğin,

<main class="grid">
  <article>
{% highlight python %}
class Complex:
   def __init__(self, realpart, imagpart):
        self.r = realpart
        self.i = imagpart
x = Complex(3.0, -4.5)
x.r, x.i
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Out[1]: (3.0, -4.5)
</p>
    </div>
  </article>
</main>

<br><br>

<div class="teaser clearfix"></div>
<h3 id="C6">Özdeş Öbekler</h3><hr>
Şimdi eşleşen nesnelerle ne yapabiliriz? Eşleşen nesneler ile anlaşılan yegane işlemler, öznitelik atıflarıdır. İki tür geçerli atıf ismi vardır; data öznitelikleri ve yordamları. 

Data öznitelikleri, Smalltalk'daki “eşleşen öznitelikler” ve C++'daki “data elemanlarına” karşılık gelir. Data özniteliklerinin beyan edilmesine gerek yoktur; yerel öznitelikler gibi, ilk atandıklarında var olurlar. Örneğin, **x** yukarıda oluşturulan **MyClass** özniteliğiyse, aşağıdaki kod parçası bir iz bırakmadan değeri 16 yazdıracaktır:

<div class="teaser clearfix"></div>
<div class="w3-code notranslate">
{% highlight python %}

class MyClass(): 
  x.counter = 1
  while x.counter < 10:
     x.counter = x.counter * 2
print(x.counter)
del x.counter

{% endhighlight %}

</div>

Diğer eşleşen öznitelik atıf türü bir yordamdır. Bir yordam, bir öbeğe “ait” bir fonksiyondur. (Python'da, yordam terimi, öbek eşleşmelerine özgü değildir: diğer öbek türleri de yordamlara sahip olabilir. Örneğin, liste öbekleri, append, insert, remove, sort adlı yordamları içerir. Ancak, aşağıdaki tartışmada, sadece aksi belirtilmedikçe sınıf yordamlarının eşleşen öbeklerinii belirtmek için deyim yordamını kullanacağız.) 


Bir özdeş öbeğin geçerli yordam adları, sınıfına bağlıdır. Tanım olarak, bir sınıfın tüm öznitelikleri, eşleşen yordamlarına karşılık tanımlanan fonksiyon öbekleridir. Yani bizim örneğimizde, **x.f** geçerli bir yordam atfıdır, çünkü **MyClass.f** bir fonksiyondur, fakat **x.i** fonksiyon değildir çünkü **MyClass.i** da değildir. Ama **x.f**, **MyClass.f** ile aynı şey değildir - **x.f**, bir fonksiyon nesnesi/öbeği değil, bir yordam öbeğidir.

<br> 

<div class="teaser clearfix"></div>
<h4>Özdeş Öbeğin Özniteliklerine Erişim</h4><hr>
Nokta (.) operatörünü öbek ismi ile kullanarak erişebilirsiniz. Sınıf adı kullanarak da sınıf özdeğerlerine erişilebilir:
<div class="w3-code notranslate pythonHigh">
  print(p1.x)<br>print(MyClass.x)</div>

<div class="w3-panel w3-card w3-light-grey">
  <h4>Özniteliklerin tanımı</h4>
  <div class="w3-container w3-white">
    <p>
    <ul class="w3-ul w3-card-4" style="width:85%">
      <li>z.real ifadesinde, real, z nesnesinin bir özdeğeridir. Kesin olarak, modüllerdeki isimlere yapılan atıflar öznitelik atıflarıdır: modname.funcname ifadesinde modname bir modül nesnesidir ve funcname bunun bir özniteliğidir. Bu durumda, modülün öznitelikleri ile modülde tanımlanan genel isimler arasında doğrudan bir eşleme olur: aynı isim uzayını paylaşırlar!</li>
    </ul>
    </p>
  </div>
</div>

<br><br>

<div class="teaser clearfix"></div>
<h3 id="C7"><a class="w3-btn w3-margin-bottom">Yordam Öbekleri</a></h3><hr>

Genellikle, bağlantıdan hemen sonra bir yordam çağrılır: 
<div class="w3-code notranslate pythonHigh">
x.f() </div>

MyClass örneğinde, 'merhaba dünya' dizesini döndürür. Ancak, bir yordamı hemen çağırmak gerekli değildir: x.f bir yordam öbeğidir ve daha sonra depolanabilir ve daha sonra çağrılabilir. Örneğin:
<div class="w3-code notranslate pythonHigh">
xf = x.f<br>
while True:<br>
   &nbsp; &nbsp;&nbsp;print(xf() </div>

**merhaba dünya** zamanın sonuna kadar basmaya devam edecek. 

Bir yordam çağrıldığında tam olarak ne olur? **f()** fonksiyon tanımı bir argüman belirtmiş olsa bile, **x.f()** öğesinin bir argüman olmadan çağrıldığını fark etmiş olabilirsiniz. Argümana ne oldu? Kesinlikle Python argüman gerektiren bir fonksiyon çağrılmadan çağrılır - argüman aslında kullanılmasa bile…

Aslında, cevabı tahmin etmiş olabilirsiniz: yordamlarla ilgili özel bir şey vardır ki, özdeş öbek fonksiyonun ilk ifadesi olarak geçirilir. Örneğimizde, **x.f()** çağrısı tam olarak **MyClass.f(x)** öğesine eşdeğerdir. Genel olarak, n argümanlı bir listeden bir yordamı çağırmak, ilk argümandan önce yordamın özdeş öbeğini ekleyerek oluşturulan bir argüman listesine karşılık fonksiyonu çağırmaya eşdeğerdir. Eğer isim geçerli bir sınıf özniteliğini işaret ederse ki bir fonksiyon öbeğidir, bir yordam öbeği özdeş öbek paketlenerek oluşturulur ve fonksiyon öbeği sadece soyut bir öbek ile birlikte bulunur: bu yordam öbeğidir. Yordam öbeği bir argüman listesi ile çağrıldığında yeni bir argüman listesi, argüman listesi ve özdeş öbekten inşa edilir ve fonksiyon öbeği yeni bir argüman listesi ile çağrılır.
<br><br>
 

<div class="teaser clearfix"></div>
<h3 id="C8">Python Öznitelikler ve Yordamlar</h3><hr>


<div class="w3-panel w3-card w3-light-grey">
  <div class="w3-container w3-white">
    <p>
    <ul class="w3-ul w3-card-4" style="width:85%">
      <li><a href="#C83" style="text-decoration: none; color:#388E3C; cursor:pointer">Öznitelik ve Yordam Varlığını Kontrol Etme</a></li>
      <li><a href="#C861" style="text-decoration: none; color:#388E3C; cursor:pointer">Statik Öznitelikler</a></li>
      <li><a href="#C88" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıf Öznitelikleri 1</a></li>
      <li><a href="#C89" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıf Öznitelikleri 2</a></li>
      <li><a href="#C90" style="text-decoration: none; color:#388E3C; cursor:pointer">Özdeş Öznitelikler</a></li>
      <li><a href="#C91" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıf ve Öbek öznitelikleri</a></li>
      <li><a href="#C86" style="text-decoration: none; color:#388E3C; cursor:pointer">Özdeş, Sınıf ve Statik Yordamlar</a></li>
    </ul>
    </p>
  </div>
</div>
<br>


Bir sınıf, bir öbek grubunu, kapsadığı veriler ve arayüz fonksiyonları tarafından izin verilen veriler üzerindeki işlemler açısından tanımlar.

Esas olarak, bir sınıf öbeklerin oluşturulabileceği bir şablondur.

Bir sınıftan oluşturulan her öbek sınıfın bir özdeşidir. Hepsi birbirine benziyor ve benzer bir davranış sergiliyorlar.

Bir sınıf, öbek öz niteliklerini (veri elemanları olarak da bilinir) ve öbeklerin davranışını (çoğunlukla yordamlar olarak bilinir) depolar. Bu davranış diğer (temel) sınıflardan miras alınabilir. Sınıfın yordam dışı öznitelikleri, genellikle sınıf elemanları veya sınıf öz nitelikleri olarak adlandırılır, böylece onlar özdeş öznitelikler ile karıştırılmaz.

Her sınıfın, tüm görevlerin ve fonksiyon tanımlarının meydana geldiği kendi ad alanı vardır.


<br>
<h4 id="C83">Öznitelik ve Yordam Varlığını Kontrol Etme</h4>
<hr>

Belirli bir sınıfın veya özdeşin, belirli bir öznitelik veya yordama sahip olup olmadığını bilmek gerekir mi? Yerleşik **'hasattr'** işlevini kontrol etmek için kullanabilirsiniz; kontrol etmek için nesneyi ve özniteliği (dizge olarak) kabul eder. Dict 'has_key' yöntemine benzer şekilde kullanıyorsunuz (tamamen farklı olsa da):


<main class="grid">
  <article>
{% highlight python %}
class Class:
    answer = 42

    def method(self):
      pass

hasattr(Class, 'answer')
# returns True
hasattr(Class, 'method')
# returns True
hasattr(Class, 'question')
# returns False
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Out[1]: True <br>
Out[2]: True <br>
Out[3]: False
</p>
    </div>
  </article>
</main>

Ayrıca, yerleşik işlev **'getattr'** kullanarak  özniteliğin varlığını kontrol edebilir ve tek adımda erişebilirsiniz.

**getattr** ayrıca, öbek ve özniteliği kontrol etmek için bir string dize olarak kabul eder. Eğer öznitelik bulunamazsa, varsayılanı veren isteğe bağlı üçüncü ifadeye sahiptir. Daha fazla aşina olabileceğiniz **dict**'ın **'get'** yordamından farklı olarak, varsayılan değer verilmediyse ve öznitelik bulunamadıysa, bir **AttributeError** oluşturulur:


<main class="grid">
  <article>
{% highlight python %}
class Class:
    answer = 42

getattr(Class, 'answer')
# returns 42
getattr(Class, 'question', 'What?')
# returns 'What?'
getattr(Class, 'question')
# raises AttributeError
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>


Out[1]: 42 <br>
Out[2]: 'What?' <br> <br>
AttributeError: type object <br>
'Class' has no attribute 'question'
</p>
    </div>
  </article>
</main>



Aşırı **hasattr** ve **getattr** kullanmayın. Sınıfınızı, bir özniteliğin var olup olmadığını kontrol etmeye devam etmeniz gereken bir şekilde yazmışsanız, yanlış yazmışsınız demektir. Sadece her zaman var olan değere sahip olur ve kullanılmıyorsa **None** (ya da her neyse) olarak ayarlayın. Bu fonksiyonlar en iyi şekilde çokbiçimliliği ele almak için kullanılır, Yani, fonksiyonunuzu / sınıfınızı / öbeklerin farklı türlerini desteklemenizi sağlar.


<br>
<h4 id="C861">Öznitelikler</h4>
<hr>
Python'daki sınıf düzeyinde tanımlanan tüm öznitelikler statik kabul edilir. Bu örneğe bakın:


<main class="grid">
  <article>
{% highlight python %}
class Example:
  staticVariable = 5 # Access through class

print (Example.staticVariable) # prints 5

# Access through an instance
instance = Example()
print (instance.staticVariable) # still 5

# Change within an instance
instance.staticVariable = 6
print (instance.staticVariable) # 6
print (Example.staticVariable) # 5

# Change through
Example.staticVariable = 7
print (instance.staticVariable) # still 6
print (Example.staticVariable) # now 7
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
5 <br>
5  <br>
6  <br>
5  <br>
6  <br>
7
</p>
    </div>
  </article>
</main>

Bana oldukça basit görünüyor. Sadece kafa karışıklığı gerçek olabilir, sınıfınızda aynı ad altında iki farklı değişkeniniz olabilir (bir statik ve bir sıradan). Ama bu davranışı tamamen önlemek için (kendi iyiliğiniz için) tavsiye ederim.


<br>
<h3 id="C86">Sınıf ve Statik Yordamlar</h3>
<hr>


<div class="w3-panel w3-card w3-light-grey">
  <div class="w3-container w3-white">
    <p>
    <ul class="w3-ul w3-card-4" style="width:85%">
      <li><a href="#C862" style="text-decoration: none; color:#388E3C; cursor:pointer">Özdeş, Sınıf ve Statik Yordamlar</a></li>
      <li><a href="#C865" style="text-decoration: none; color:#388E3C; cursor:pointer">Özdeş Yordamlar</a></li>
      <li><a href="#C868" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıf Yordamları Oluşturma</a></li>
      <li><a href="#C866" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıf Yordamları</a></li>
      <li><a href="#C864" style="text-decoration: none; color:#388E3C; cursor:pointer">@classmethod</a></li>
      <li><a href="#C867" style="text-decoration: none; color:#388E3C; cursor:pointer">Statik Yordamlar</a></li>
      <li><a href="#C863" style="text-decoration: none; color:#388E3C; cursor:pointer">@staticmethod</a></li>
    </ul>
    </p>
  </div>
</div>
<br>

Python'da bir veri elemanı veya statik yordam nasıl bildirilir? Statik, özdeş seviyesinden ziyade bir sınıf düzeyinde eleman olduğu anlamına gelir. Statik öznitelikler, yalnızca sınıf başına tek özdeşte bulunur ve eşlenmez.  Sınıfın bir eşleneğinde statik bir değişken değiştirilirse, değişiklik diğer tüm özdeşlerde değerini etkileyecektir.

Statik yöntemler, sınıfın herhangi bir eşleneğine başvurmaz ve dışında çağrılabilir. Ayrıca, belli sebeplerden dolayı sınıfın herhangi bir statik olmayan veri elemanına erişemezler. Python'dan nasıl statik hale getirileceğine bakalım.



<br>
<h4 id="C862">Özdeş, Sınıf ve Statik Yordamlar</h4>
<hr>

Statik yordamlarla biraz daha karmaşık hale gelir. Python'da, bir sınıf içindeki statik yordamları tanımlamanın iki yolu vardır.

Her üç yordam tipi için basit örnekler içeren bir (Python 3) sınıfı yazarak başlayalım:


<main class="grid">
  <article>
{% highlight python %}
class MyClass:
    def method(self):
       return 'instance method called', self

    @classmethod
    def classmethod(cls):
       return 'class method called', cls

    @staticmethod
    def staticmethod():
       return 'static method called'

obj = MyClass()

obj.classmethod()
# ('class method called', __main__.MyClass)

obj.method()
# ('instance method called', 
# <__main__.MyClass at 0x7f878f4ffa90>)

MyClass.method(obj)
# ('instance method called', 
# <__main__.MyClass at 0x7f878f56e278>)

obj.staticmethod()
# 'static method called'

MyClass.classmethod()
# ('class method called', __main__.MyClass)

MyClass.staticmethod()
# 'static method called'

MyClass.method()
# TypeError: method() missing 1 
# required positional argument: 'self'
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C863">@staticmethod</h5>
<hr>

Bu dekoratör ile dekore edilen yordam isim uzayını sınıf ile paylaşır. Yordam tanımında hiçbir argümanın zorunlu olmadığını unutmayın. Statik yordam, sınıflara statik özniteliklerle erişebilir. Aşağıdaki örnekte bakın:


<main class="grid">
  <article>
{% highlight python %}
class Example:
 name = "Example"

 @staticmethod
 def static():
  print ("%s static() called" % Example.name)

class Offspring1(Example):
 name = "Offspring1"

class Offspring2(Example):
 name = "Offspring2"

 @staticmethod
 def static():
  print ("%s static() called" % Offspring2.name)

Example.static() # prints Example
Offspring1.static() # prints Example
Offspring2.static() # prints Offspring2
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Example static() called <br>
Example static() called <br>
Offspring2 static() called
</p>
    </div>
  </article>
</main>


<br>
<h5 id="C864">@classmethod</h5>
<hr>

Python'da sınıf yordamı ve statik yordam arasındaki fark vardır. Bu sınıf yordamı, zorunlu bir argümanı - çağırdığı bir sınıf adını - alır. Bir bakalım:

<main class="grid">
  <article>
{% highlight python %}
class Example:
  name = "Example"

  @classmethod
  def static(cls):
    print ("%s static() called" % cls.name)

class Offspring1(Example):
  name = "Offspring1"
  pass

class Offspring2(Example):
  name = "Offspring2"

  @classmethod
  def static(cls):
    print ("%s static() called" % cls.name)

Example.static()    # prints Example
Offspring1.static() # prints Offspring1
Offspring2.static() # prints Offspring2 
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Example static() called <br>
Offspring1 static() called <br>
Offspring2 static() called
</p>
    </div>
  </article>
</main>

Hangisini kullanmalısın? İlk seçenek, yalnızca aynı sınıftaki statik özniteliklere erişmenizi sağlar. İkinci yaklaşımda, alt sınıfların sınıf özniteliklerini, kalıtım sırasında yordamı yeniden tanımlamanın zorunluluğu olmadan değiştirebileceksiniz. İlk varyantı tercih ederim çünkü kişisel olarak daha temiz bir çözüm olduğunu düşünüyorum, ancak ikinci varyant da bazı durumlarda faydalı olabilir.



<br>
<h4 id="C865">Eşlenen Yordamlar</h4>
<h6>Instance Methods</h6>
<hr>

Method denilen **```MyClass```**'taki ilk yordam, normal bir eşleşen yordamdır.
Bu, çoğu zaman kullanacağınız temel, asgari ihtiyaçları karşılamaya yönelik yordam tipidir. Yordamın bir parametre **```self```** aldığını görebilirsiniz, yordam çağrıldığında **```MyClass```** eşleneğine işaret eder. (ama elbette özdeş yordamlar sadece bir parametreden fazlasını kabul edebilir).

**```self```** parametresi aracılığıyla, eşlenen yordamlar, aynı öbek üzerindeki özniteliklere ve diğer yordamlara serbestçe erişebilir.Bu, bir öbeğin durumunu değiştirmeye sıra geldiğinde onlara çok fazla güç verir.

Onlar sadece öbeğin durumunu değiştirmezler, özdeş yordamlar, sınıfın kendisine **```self .__class__```** özniteliği aracılığıyla da erişebilir. Bu, eşlenen yordamların sınıf durumunu da değiştirebileceği anlamına gelir.

<br><br>
<h4 id="C866">Sınıf Yordamları</h4>
<h6>Class Methods</h6>
<hr>

Bunu ikinci yordam olan **```MyClass.classmethod```** ile karşılaştıralım. Onu bir sınıf yordamı olarak işaret etmek için bu yordamı **```@classmethod```** dekoratörüyle işaretledim.

Bir **```self```** parametresini kabul etmek yerine, sınıf yordamları bir **```cls```** parametresi alır, yordam çağrıldığında -öbek eşleneğine değil- sınıfa işaret eder.

Çünkü sınıf yordamı sadece bu **```cls```** argümanına erişebilir, öbek eşleneğinin durumunu değiştiremez. Bu **```self```**'e erişim gerektirecektir. Ancak, sınıf yordamları hala sınıf durumunu değiştirebilir ki sınıfın tüm özdeşlerine uygulanır.

<br><br>
<h4 id="C867">Statik Yordamlar</h4>
<h6>Static Methods</h6>
<hr>

Üçüncü yöntem, bir statik yordam olarak işaret etmek için **```MyClass.staticmethod```** bir **```@staticmethod```** dekoratör ile işaretlendi.

Bu tip bir yordam ne **```self```** ne de bir **```cls```** parametresini alır (ama tabii ki, diğer parametrelerin rastgele sayısını kabul etmekte serbesttir).

Bu nedenle, statik bir yordam, öbek durumunu ve sınıf durumunu değiştiremez. Statik yordamlar, verilerde erişebilecekleri şeyleri sınırlandırır ve esas olarak yordamlarınızı adlandırmak için bir yoldur.

<br>
<h4 id="C868">Sınıf Yordamları Oluşturma</h4>
<hr>

Bazen bir sınıf yazarken, sınıftan çağrılan bir fonksiyonu dahil etmek istersiniz, özdeşini değil. Belki bu yordam yeni özdeşler oluşturur veya belki de herhangi bir özel özdeşin herhangi bir özniteliğinden bağımsızdır. Python, yordamınızın, hangi sınıfın çağırdığını bilmesi gerektiğine (ya da bilmesine) bağlı olarak, bunu yapmanın iki yolunu size verir. Her ikisi de yordamlarınıza dekoratörler uygulamasını içerir. 

Düzgün bir  özdeş yordam ilk ifade olarak özdeşi aldığı gibi bir **'sınıf yordamı'** ilk ifade olarak sınıfı alır. Böylece yordam, kendi sınıfından veya bir alt sınıfından çağrılıyorsa farkındadır.

Bir **'statik yordam'** nereden çağrıldığı hakkında hiçbir bilgi alamaz; 
**'Statik yöntem'** nerede denir; bu aslında normal bir fonksiyonudur, sadece farklı bir kapsam içinde.

Sınıf ve statik yordamlar, sınıftan, **Class.method()** olarak veya **Class().method()** olarak bir özdeşten  doğrudan çağrılabilir. Kendi sınıfı hariç özdeş göz ardı edilir. İşte düzgün bir özdeş yordam ile birlikte her biri için bir örnek:



<main class="grid">
  <article>
{% highlight python %}
class Class:
 @classmethod
 def a_class_method(cls):
  print ('I was called from class')
  print ('%s' % cls)
 #
 #
 @staticmethod
 def a_static_method():
  print ('I have no idea')
  print ('where I was called from')
 #
 #
 def an_instance_method(self):
  print ('I was called from the instance')
  print ('%s' % self)

instance = Class()

Class.a_class_method()
instance.a_class_method()
# both print
# 'I was called from class __main__.Class' 

Class.a_static_method()
instance.a_static_method()
# both print
# 'I have no idea where I was called from' 

instance.an_instance_method()
# prints something like
# 'I was called from the instance
# <__main__.Class instance at 0x2e80d0>'

Class.an_instance_method()
# raises TypeError
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>

Out [1]: <br> <br>
I was called from class <class '__main__.Class'> <br>
I was called from class <class '__main__.Class'> <br> <br>
I have no idea where I was called from <br>
I have no idea where I was called from <br>  <br>
I was called from the instance <__main__.Class object at 0x7f6854953748>
</p>
    </div>
  </article>
</main>

<br>
<h4 id="C88">Sınıf Öznitelikleri 1</h4>
<hr>

Bazı öznitelik değerleri, verilen bir sınıfın tüm öbeklerinde paylaşılır. Bu öznitelikler, sınıfın herhangi bir tek özdeşinden ziyade sınıfın kendisi ile ilişkilendirilir. Örneğin, bir bankanın hesap bakiyesine sabit faiz oranından faiz ödediğini söyleyelim. Bu faiz oranı değişebilir, ancak tüm hesaplarda paylaşılan tek bir değerdir. 

Sınıf öznitelikleri, herhangi bir yordam tanımının dışında bir sınıf ifadesinin maiyetindeki atama ifadeleriyle oluşturulur. Daha geniş geliştirici topluluğunda, sınıf öznitelikleri de sınıf öznitelikleri veya statik öznitelikler olarak adlandırılabilir. Aşağıdaki sınıf deyimi,  adı geçen Hesap[Account] için bir sınıf özniteliği oluşturur.


Bu öznitelik yine de sınıfın herhangi bir özdeşinden erişilebilir.

<main class="grid">
  <article>
{% highlight python %}
class Account(object):
     interest = 0.02 # A class attribute
     def __init__(self, account_holder):
 	self.balance = 0
 	self.holder = account_holder
    # Additional methods 
    # would be defined here
jim_account = Account('Jim')
jim_account.interest
tom_account = Account('Tom')
tom_account.interest
Account.interest = 0.04
tom_account.interest
jim_account.interest
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Out[1]: 0.02 <br>
Out[2]: 0.02 <br>
Out[3]: 0.04 <br>
Out[4]: 0.04 <br>
</p>
    </div>
  </article>
</main>

Bununla birlikte, bir sınıf özniteliğine yapılan tek bir atama ifadesi, sınıfın tüm özdeşleri için özniteliğin değerini değiştirir.

Öznitelik isimleri. Öbek sistemimize, adların belirli öznitelikleri nasıl çözümlendiğini belirtmek için yeterli karmaşıklığı sunduk. Sonuçta, aynı ada sahip bir sınıf özniteliğine ve bir özdeş niteliğe kolayca sahip olabiliriz.

Gördüğümüz gibi, bir nokta ifadeleri; bir ifadeden, bir noktadan ve bir isimden oluşur:

**expression . name**

Nokta ifadesini değerlendirmek için:

1. Nokta ifadesinin öbeğini veren noktanın solundaki **expression** değerlendirmesi.
2. **name**, bu öbeğin özdeş nitelikleriyle eşleşir; Bu ada sahip bir öznitelik varsa, değeri döndürülür.
3. Özdeş öznitelikleri arasında **name** görünmezse, sonra **name**, bir sınıf öznitelik değerini veren sınıfta  gözükür.
4. Bir fonksiyon olmadığı sürece bu değer döndürülür, bu durumda, bunun yerine bir ilişkili yordam döndürülür.

Bu değerlendirme prosedüründe, özdeş nitelikleri, sınıf özniteliklerinden önce bulunur, tıpkı yerel isimlerin bir ortamda küresel önceliğe sahip olması gibi. Sınıf içinde tanımlanan yordamlar, bu değerlendirme prosedürünün üçüncü aşaması sırasında nokta ifadesinin öbeğine bağlanır. Bir sınıfta bir isme bakma prosedürü, sınıf mirasını sunduğumuzda, kısa zamanda ortaya çıkacak ek nüanslara sahiptir.

Atama. Sol taraflarında bir nokta ifadesi içeren tüm atama ifadeleri, bu nokta ifadesinin öbeği için öznitelikleri etkiler. Öbek bir özdeşse, atama özdeş özniteliğini ayarlar. Öbek bir sınıfsa, atama bir sınıf niteliği ayarlar. Bu kuralın bir sonucu olarak, bir öbeğin özniteliğine atanması, sınıfının özniteliklerini etkileyemez. Aşağıdaki örnekler bu ayrımı göstermektedir.

Bir hesap özdeşini adlandırılmış öznitelik ilgi alanına atarsak, mevcut sınıf özniteliğiyle aynı ada sahip yeni bir özdeş özniteliği oluştururuz.

jim_account.interest = 0.08

ve bu öznitelik değeri bir nokta ifadesinden döndürülecek

<div class="w3-code notranslate pythonHigh">
jim_account.interest<br>
0.08</div>

Bununla birlikte, sınıf özniteliği, diğer tüm hesaplar için döndürülen orijinal değerini hala korur.

Sınıf özniteliğindeki değişiklikler **tom_account**'ı etkiler, ancak **jim_account** için özdeş özniteliği etkilenmez.

Account.interest = 0.05 # sınıf özniteliğini değiştirme

<div class="w3-code notranslate pythonHigh">
Özdeş adlandırılmış özdeş öznitelikleri olmayan özdeşleri değiştirir. <br>
tom_account.interest <br>
0.05</div>

<div class="w3-code notranslate pythonHigh">
ancak mevcut özdeş özniteliği etkilenmez <br>
jim_account.interest <br>
0.08</div>

<br><br>

<h4 id="C89"> Sınıf Öznitelikleri 2</h4><hr>
Sınıf öznitelikleri, tüm özdeşlerle paylaşılacakları sınıfa aittir. Bu öznitelikler, okunabilirlik için genellikle üst kısımdaki sınıf gövdesi parçalarında tanımlanmaktadır.

<br>
 
<main class="grid">
  <article>
{% highlight python %}
# Write Python code here
class sampleclass:
    count = 0     # class attribute
 
    def increase(self):
        sampleclass.count += 1
 
# Calling increase() on an object
s1 = sampleclass()
s1.increase()
print (s1.count)
 
# Calling increase on one more
# object
s2 = sampleclass()
s2.increase()
print (s2.count)
 
print (sampleclass.count)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>

Out [1]: <br>
1 <br>
2 <br>
2
</p>
    </div>
  </article>
</main>
<br>
<h4 id="C90">Özdeş Öznitelikleri</h4><hr>

Sınıf özniteliklerinden farklı olarak, özdeş öznitelikleri öbekler tarafından paylaşılmaz. Her öbeğin, özdeş özniteliğinin kendi kopyası vardır (Sınıf öniteliklerinin durumunda, tüm nesneler tek kopyaya başvurur).

Bir özdeşin / öbeğin özniteliklerini listelemek için iki fonksiyonumuz vardır: -

1. **vars()** - Bu fonksiyon, bir özdeşin özniteliğini bir sözlük biçiminde görüntüler.
2. **dir()** - Bu fonksiyon, özdeşle sınırlı olmadığı için vars fonksiyonundan daha fazla nitelik gösterir. Sınıf özniteliklerini de gösterir.

<br>
 
<main class="grid">
  <article>
{% highlight python %}
# Python program to demonstrate
# instance attributes.
class emp:
    def __init__(self):
        self.name = 'xyz'
        self.salary = 4000
 
    def show(self):
        print (self.name)
        print (self.salary)
 
e1 = emp()
print ("Dictionary form :", vars(e1))
print (dir(e1))
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Dictionary form : {'salary': 4000, 'name': 'xyz'} <br>
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'name', 'salary', 'show']
</p>
    </div>
  </article>
</main>

<br>
<h4 id="C91">Sınıf ve Öbek öznitelikler</h4><hr>

Daha önce sınıfların ve nesnelerin işlevselliğini ele aldık (ör. Yordamlar), şimdi veri kısmı hakkında bilgi verelim. Veri kısmı, yani alanlar, sınıfların ve öbeklerin ad alanlarına bağlı olan sıradan özniteliklerden başka bir şey değildir. Bu, bu adların yalnızca bu sınıflar ve öbekler bağlamında geçerli olduğu anlamına gelir. Bu yüzden isim alan adı verilir.


We have already discussed the functionality part of classes and objects (i.e. methods), now let us learn about the data part. The data part, i.e. fields, are nothing but ordinary variables that are bound to the namespaces of the classes and objects. This means that these names are valid within the context of these classes and objects only. That's why they are called name spaces.

There are two types of fields - class variables and object variables which are classified depending on whether the class or the object owns the variables respectively.

Class variables are shared - they can be accessed by all instances of that class. There is only one copy of the class variable and when any one object makes a change to a class variable, that change will be seen by all the other instances.

Object variables are owned by each individual object/instance of the class. In this case, each object has its own copy of the field i.e. they are not shared and are not related in any way to the field by the same name in a different instance. An example will make this easy to understand (save as oop_objvar.py):

<br>
 
<main class="grid">
  <article>
{% highlight python %}
class Robot:
    """Represents a robot, with a name."""

    # A class variable, counting the number of robots
    population = 0

    def __init__(self, name):
        """Initializes the data."""
        self.name = name
        print("(Initializing {})".format(self.name))

        # When this person is created, the robot
        # adds to the population
        Robot.population += 1

    def die(self):
        """I am dying."""
        print("{} is being destroyed!".format(self.name))

        Robot.population -= 1

        if Robot.population == 0:
            print("{} was the last one.".format(self.name))
        else:
            print("There are still {:d} robots working.".format(
                Robot.population))

    def say_hi(self):
        """Greeting by the robot.

        Yeah, they can do that."""
        print("Greetings, my masters call me {}.".format(self.name))

    @classmethod
    def how_many(cls):
        """Prints the current population."""
        print("We have {:d} robots.".format(cls.population))


droid1 = Robot("R2-D2")
droid1.say_hi()
Robot.how_many()

droid2 = Robot("C-3PO")
droid2.say_hi()
Robot.how_many()

print("\nRobots can do some work here.\n")

print("Robots have finished their work. So let's destroy them.")
droid1.die()
droid2.die()

Robot.how_many()
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
(Initializing R2-D2) <br>
Greetings, my masters call me R2-D2. <br>
We have 1 robots. <br>
(Initializing C-3PO) <br>
Greetings, my masters call me C-3PO. <br>
We have 2 robots. <br>

Robots can do some work here. <br>

Robots have finished their work. So let's destroy them. <br>
R2-D2 is being destroyed! <br>
There are still 1 robots working. <br>
C-3PO is being destroyed! <br>
C-3PO was the last one. <br>
We have 0 robots.
</p>
    </div>
  </article>
</main>

How It Works

This is a long example but helps demonstrate the nature of class and object variables. Here, population belongs to the Robot class and hence is a class variable. The name variable belongs to the object (it is assigned using self) and hence is an object variable.

Thus, we refer to the population class variable as Robot.population and not as self.population. We refer to the object variable name using self.name notation in the methods of that object. Remember this simple difference between class and object variables. Also note that an object variable with the same name as a class variable will hide the class variable!

Instead of Robot.population, we could have also used self.__class__.population because every object refers to its class via the self.__class__ attribute.

The how_many is actually a method that belongs to the class and not to the object. This means we can define it as either a classmethod or a staticmethod depending on whether we need to know which class we are part of. Since we refer to a class variable, let's use classmethod.

We have marked the how_many method as a class method using a decorator.

Decorators can be imagined to be a shortcut to calling a wrapper function (i.e. a function that "wraps" around another function so that it can do something before or after the inner function), so applying the @classmethod decorator is the same as calling:

how_many = classmethod(how_many)
Observe that the __init__ method is used to initialize the Robot instance with a name. In this method, we increase the population count by 1 since we have one more robot being added. Also observe that the values of self.name is specific to each object which indicates the nature of object variables.

Remember, that you must refer to the variables and methods of the same object using the self only. This is called an attribute reference.

In this program, we also see the use of docstrings for classes as well as methods. We can access the class docstring at runtime using Robot.__doc__ and the method docstring as Robot.say_hi.__doc__

In the die method, we simply decrease the Robot.population count by 1.

All class members are public. One exception: If you use data members with names using the double underscore prefix such as __privatevar, Python uses name-mangling to effectively make it a private variable.

Thus, the convention followed is that any variable that is to be used only within the class or object should begin with an underscore and all other names are public and can be used by other classes/objects. Remember that this is only a convention and is not enforced by Python (except for the double underscore prefix).


<br><br>

<div class="teaser clearfix"></div>
<h3  id="C9"><code class="w3-codespan">new</code> yordamı </h3><hr>
 <code class="w3-codespan">new</code> örnekleme ile oluşturan ve döndüren python özel yordamıdır.

<main class="grid">
  <article>
{% highlight python %}
class Sample(object):
  def __new__(cls, *args, **kargs):
    print ("Creating instance of Sample")
    return super(Sample, cls).__new__(cls)

  def __init__(self):
    print ("Initiating instance of Sample")
s=Sample()
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>

Out [1]: <br>
Creating instance of Sample <br>
Initiating instance of Sample
</p>
    </div>
  </article>
</main> 

<br>

<div class="w3-code notranslate pythonHigh">
<strong>Not:</strong> Örneklem ile oluşturulduktan sonra <code class="w3-codespan">init</code> yordamı çağrılır. Gerçek oluşturma işlemini kontrol etmek istiyorsanız, <code class="w3-codespan">new</code> yordamını kullanın.</div>

<div class="w3-code notranslate pythonHigh">
<strong>Not:</strong><code class="w3-codespan">new</code>, bir cls yordamı döndürürse, argümanların geri kalanıyla <code class="w3-codespan">init</code> çağrılır (...), aksi halde <code class="w3-codespan">init</code> çağrılmaz.</div>


<div class="w3-code notranslate pythonHigh">
<strong>Not:</strong> Python sınıf kurucusunun iki adımı vardır: Örneklem ile oluşturmak için <code class="w3-codespan">new</code> çağırma ve başlatmak için <code class="w3-codespan">init</code> çağırma. <code class="w3-codespan">init</code> isteğe bağlı bir adım değildir, <code class="w3-codespan">init</code> başarısız olursa örneklem oluşturma da başarısız olur.</div>

<p> Yeni bir örneklemin oluşturulmasını kontrol etmeniz gerektiğinde <code class="w3-codespan">new</code> kullanın. 
Yeni bir örneklemin başlatılmasını kontrol etmeniz gerektiğinde <code class="w3-codespan">init</code> kullanın. 

<code class="w3-codespan">new</code>, örneklem oluşturmanın ilk adımıdır. İlk olarak adlandırılır, 
ve sınıfınızın yeni bir örneklemi döndürmekten sorumludur. 
Tezatında, <code class="w3-codespan">init</code> hiçbir şey döndürmez; yalnızca, oluşturulduktan sonra örneklemin başlatmasından sorumludur. 

Genel olarak, 
str, int, unicode veya tuple gibi bir değişmez tür alt sınıfını oluşturmuyorsanız <code class="w3-codespan">new</code>'yi geçersiz kılmanız gerekmez. </p> 

<button class="w3-button w3-blue" onclick="document.getElementById('id01').style.display='block'">Bilgi!</button> 

<div id="id01" class="w3-panel w3-green w3-display-container" style="display:none">
  <span onclick="this.parentElement.style.display='none'"
  class="w3-button w3-yellow w3-display-topright">&#10004;</span>
  <p> <code class="w3-codespan">init</code> bazen nesnenin kurucusu olarak adlandırılır, çünkü kurucuların diğer dillerde kullanıldığı gibi kullanılır, ancak bu teknik olarak doğru değildir - onu başlatıcı olarak adlandırmak daha iyidir. Bir kurucuya daha benzer olan <code class="w3-codespan">new</code> adlı farklı bir yordam var, ancak neredeyse hiç kullanılmıyor.</p>
</div>

<br>
<div class="w3-container">
  <table class="w3-table">
    <tr>
      <td>bir sınıf kurucu</td>
      <td>x = MyClass()</td>
      <td>x.__new__()</td>
    </tr>
    <tr>
      <td>bir örneklem başlatıcı</td>
      <td>x = MyClass()</td>
      <td>x.__init__()</td>
    </tr>
    <tr>
      <td>bir sınıf yıkıcı</td>
      <td>del x</td>
      <td>x.__del__()</td>
    </tr>
    <tr>
      <th>... istiyorsunuz.</th>
      <th>... yazıyorsunuz.</th>
      <th>... ve Python çağırıyor.</th>
    </tr>
  </table>
</div>


<br>

<div class="teaser clearfix"></div>
<h3  id="C10"><code class="w3-codespan">init</code> yordamı</h3><hr>
Yukarıdaki örnekler, en basit biçimde sınıflar ve nesnelerdir ve gerçek yaşam uygulamalarında gerçekten yararlı değildir. 

Sınıfların manâsını anlamak için, yerleşik <code class="w3-codespan">init</code> yordamını anlamamız gerekir. 

Tüm sınıflar, sınıf başlatıldığında her zaman çalıştırılan <code class="w3-codespan">init</code> adında bir yordama sahiptir. 

Nesne özniteliklerine veya nesne oluşturulduğunda yapılması gereken diğer işlemlere değer atamak için <code class="w3-codespan">init</code> yordamını kullanın:

 
<main class="grid">
  <article>
{% highlight python %}
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>

Out [1]: <br>
Hello my name is John
</p>
    </div>
  </article>
</main> 

<br>
 
<div class="w3-code notranslate pythonHigh">
<strong>Not:</strong>  <code class="w3-codespan">init</code> bir sınıfın kurucusudur aslında başlatıcıdır. <code class="w3-codespan">init</code> yordamı, nesnenin belleğinin tahsis edildiği anda çağrılır.</div>

Python sınıflarında özel bir önemi olan birçok yöntem ismi vardır. **init** yönteminin önemini şimdi göreceğiz.

**init** yordamı, bir sınıfın öbeği eşlendiğinde (yani oluşturulduğunda) çalıştırılır. Yordam, öbeğinizle yapmak istediğiniz herhangi bir eşleme işlemini yapmak için kullanışlıdır.(ilk değerleri nesnenize iletmek gibi). Adının başında ve sonunda çift alt çizgilere dikkat edin.


<main class="grid">
  <article>
{% highlight python %}
class Person:
   def __init__(self, name):
      self.name = name

   def say_hi(self):
      print('Hello, my name is', self.name)

p = Person('Swaroop')
p.say_hi()
# The previous 2 
# lines can also be written as
# Person('Swaroop').say_hi()
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Hello, my name is Swaroop
</p>
    </div>
  </article>
</main> 
<br>
<h4>Nasıl çalışır</h4><hr>
Burada, **__init__** yordamını bir parametre ismi (olağan self ile birlikte) olarak tanımlarız. Burada sadece name olarak da adlandırılan yeni bir alan yaratıyoruz. İkisi de 'name' olarak adlandırılsalar bile, bunlar iki farklı özniteliklerdir. Noktalı notasyon **self.name**, **'self'** olarak adlandırılan öbeğin bir parçası olan **'name'** adında bir şey olduğu anlamına gelir ve diğer **name** yerel bir değişkendir. Açıklamakta olduğumuz **name** açıkça belirttiğimizden karışıklık yok.

**Person** sınıfı için yeni özdeş **p** oluştururken, sınıf adını kullanarak bunu yaparız, ardından parantez içindeki argümanlar takip edilir: **p = Person('Swaroop')**.

**__init__** yöntemini açıkça aramadık. Bu yordamın özel anlamı vardır.

Şimdi, **self.name** alanını **say_hi** yordamında gösterilen yordamlarımızda kullanabiliyoruz.

<br>

<div class="teaser clearfix"></div>
<h3  id="C11"><code class="w3-codespan">self</code> Parametresi</h3><hr>
<p> <code class="w3-codespan">self</code> sınıfın kendisine bir referanstır ve sınıfa ait özniteliklere erişmek için kullanılır. 

<code class="w3-codespan">self</code> diye isimlendirilmek zorunda değildir, ne ile  istersen öyle çağırabilirsin, ama sınıftaki herhangi bir yordamın ilk parametresi olmalı:</p>


<main class="grid">
  <article>
{% highlight python %}
class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("John", 36)
p1.myfunc()
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>

Out [1]: <br>
Hello my name is John
</p>
    </div>
  </article>
</main>
 
<div class="w3-code notranslate pythonHigh">
<strong>Not:</strong> <code class="w3-codespan">self</code> parametresi, sınıfa ait bir referanstır ve sınıfa ait özniteliklere erişmek için kullanılır.</div>

Sınıf yordamları, sıradan fonksiyonlardan yalnızca belirli bir fark içerirler - parametre listesinin başına eklenmesi gereken fazladan bir ilk ada sahip olmaları gerekir, ancak yordamı çağırdığınızda bu parametre için bir değer vermezsiniz, Python bunu sağlayacaktır. Bu özel değişken, öbeğin kendisine atıfta bulunur ve sözleşmeye göre, kendisine **self** ad verilir.

Her ne kadar bu parametre için herhangi bir isim verseniz de, **self** ismini kullanmanız şiddetle tavsiye edilir. Standart bir ad kullanmanın birçok avantajı vardır - programınızın herhangi bir okuyucusu bunu hemen tanıyacaktır ve **self** kullanırsanız uzmanlaşmış IDE'ler (Entegre Geliştirme Ortamları) size yardımcı olabilir.

<div class="w3-code notranslate pythonHigh">
<strong>Not:</strong> Python'daki self, C ++'daki bu pointer ve Java ve C'deki bu referansa eşdeğerdir.</div>

 Python'un **self** için nasıl bir değer verdiğini ve neden bunun için bir değer vermeniz gerekmediğini merak etmelisiniz. Bir örnek bunu açıklığa kavuşturur. **MyClass** adlı bir sınıfınız olduğunu ve bu sınıfın bir özdeşinin **myobject** olarak adlandırdığınızı varsayalım. Bu nesnenin yordamını **myobject.method(arg1, arg2)** olarak çağırdığınızda, bu otomatik olarak Python tarafından **MyClass.method(myobject, arg1, arg2)** 'ye dönüştürülür - bu, tüm özel **self** hakkındadır.

Bu aynı zamanda, hiçbir argüman almayan bir yordamınız varsa, o zaman hala tek bir argümana sahip olmanız gerektiği anlamına gelir - **self**.
 
<br>

<h4 id="C82">El Yordamı ile 'self' Geçirme</h4>
<hr>
Yordamlar, bir özdeşden çağrıldığında, ilk ifade olarak (genellikle 'self' olarak çağrılır) bu özdeşe geçirilen normal fonksiyonlardır. Herhangi bir nedenle fonksiyonu bir özdeşden çağırmıyorsanız, özdeşe her zaman ilk ifade olarak el ile geçirebilirsiniz. Örneğin:

 
<main class="grid">
  <article>
{% highlight python %}
class Class:
    def a_method(self):
        print ('Hey a method')

instance = Class()

instance.a_method()
# prints 'Hey a method', 
# somewhat unsuprisingly.  
# You can also do:

Class.a_method(instance)
# prints 'Hey a method'
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>

Hey a method <br>
Hey a method
</p>
    </div>
  </article>
</main>


Dahili olarak, bu ifadeler tamamen aynıdır.

<br><br>

<div class="teaser clearfix"></div>
<h3 id="C12">super fonksiyonu</h3><hr>
**super([type[, object-or-type]])**

Bir ebeveyn veya kardeş sınıfına yordam çağrıları veren bir temsili öbeği döndürür. Bu, bir sınıfta geçersiz kılınan devralınan yordamlara erişmek için kullanışlıdır. Arama sırası, **type**'ın kendisinin atlanması dışında **getattr()** tarafından kullanılanla aynıdır.

super için iki tipik kullanım durumu vardır. Tek bir kalıtımı olan bir sınıf hiyerarşisinde, super, açık bir şekilde adlandırmadan üst sınıflara başvurmak için kullanılabilir, bu nedenle kodu daha sürdürülebilir hale getirmektedir. Bu kullanım diğer programlama dillerinde süper kullanımı ile paralellik gösterir.

**super()**, Bir sınıfta geçersiz kılınan kalıtsal yordamlara erişmek için kullanılabilecek yerleşik bir fonksiyondur. **super()** sadece yeni stil sınıfları için çalışır; Tek bir kalıtımla bir sınıf hiyerarşisinde, **super()**, üst sınıflara açıkça ad vermeden başvurmak için kullanılabilir, böylece kodu daha fazla kullanılabilir hale getirir.



<main class="grid">
  <article>
{% highlight python %}
class Parent(object): 
# Base class definition
  def printlnfo(self):
    print ('Base class method')
  def parentMethod(self) :
    self.printInfo()

class Child(Parent): 
# Derived class definition
 def printInfo(self):
   super(Child,self).printlnfo()
   # Parent.printInfo(self)
   print ('Derived class method')

c=Child()
c.parentMethod()
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>


Base class method <br>
Derived class method
</p>
    </div>
  </article>
</main>

Yukarıdaki örnekte, ana sınıfın **printlnfo()** yordamına erişmek için, **super(Child, self).printlnfo()** biçiminde **super()** yordamı kullanılır; burada taban sınıfının adı belirtilmemiştir. Diğer yol, **Parent.printlnfo(self)** kullanılarak olurdu.
 
<br>

<h3 id="C18">Python Programları</h3><hr>

<div class="w3-panel w3-card w3-light-grey">
  <div class="w3-container w3-white">
    <p>
    <ul class="w3-ul w3-card-4" style="width:85%">
      <li><a href="#C290" style="text-decoration: none; color:#388E3C; cursor:pointer">Listeler - Lists</a></li>
      <li><a href="#C181" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıfı kullanan Python programı</a></li>
      <li><a href="#C182" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıf kalıtımını kullanan Python programı</a></li>
      <li><a href="#C183" style="text-decoration: none; color:#388E3C; cursor:pointer">İki alt çizgi değişkenini kullanan Python programı</a></li>
      <li><a href="#C184" style="text-decoration: none; color:#388E3C; cursor:pointer">issubclass kullanan Python programı</a></li>
      <li><a href="#C185" style="text-decoration: none; color:#388E3C; cursor:pointer">isinstance kullanan Python programı</a></li>
      <li><a href="#C186" style="text-decoration: none; color:#388E3C; cursor:pointer">repr kullanan Python programı</a></li>
      <li><a href="#C187" style="text-decoration: none; color:#388E3C; cursor:pointer">property kullanan Python programı</a></li>
      <li><a href="#C188" style="text-decoration: none; color:#388E3C; cursor:pointer">super kullanan Python programı</a></li>
      <li><a href="#C189" style="text-decoration: none; color:#388E3C; cursor:pointer">Sınıfta hash kullanan Python programı</a></li>
      <li><a href="#C190" style="text-decoration: none; color:#388E3C; cursor:pointer">id kullanan Python programı</a></li>
      <li><a href="#C191" style="text-decoration: none; color:#388E3C; cursor:pointer">classmethod kullanan Python programı</a></li>
      <li><a href="#C192" style="text-decoration: none; color:#388E3C; cursor:pointer">staticmethod kullanan Python programı</a></li>
      <li><a href="#C193" style="text-decoration: none; color:#388E3C; cursor:pointer">type içinde dict kullanan Python programı</a></li>
      <li><a href="#C194" style="text-decoration: none; color:#388E3C; cursor:pointer">hasattr, delattr kullanan Python programı</a></li>
      <li><a href="#C195" style="text-decoration: none; color:#388E3C; cursor:pointer">Değerleri get ile alan Python programı</a></li>
      <li><a href="#C196" style="text-decoration: none; color:#388E3C; cursor:pointer">KeyError'a neden olan Python programı</a></li>
      <li><a href="#C197" style="text-decoration: none; color:#388E3C; cursor:pointer">KeyError işleyen Python programı</a></li>
      <li><a href="#C198" style="text-decoration: none; color:#388E3C; cursor:pointer">in kullanan Python programı</a></li>
    </ul>
    </p>
  </div>
</div>

<br>
<div class="w3-panel w3-card w3-light-grey">
<h5><a id="C290">Listeler -Lists</a></h5>
  <div class="w3-container w3-white">
    <p>
    <ul class="w3-ul w3-card-4" style="width:85%">
      <li><a href="#C291" style="text-decoration: none; color:#388E3C; cursor:pointer">append kullanan Python programı</a></li>
      <li><a href="#C292" style="text-decoration: none; color:#388E3C; cursor:pointer">insert çağıran Python programı</a></li>
      <li><a href="#C293" style="text-decoration: none; color:#388E3C; cursor:pointer">extend kullanan Python programı</a></li>
      <li><a href="#C294" style="text-decoration: none; color:#388E3C; cursor:pointer">len kullanan Python programı</a></li>
      <li><a href="#C295" style="text-decoration: none; color:#388E3C; cursor:pointer">in kullanan Python programı</a></li>
      <li><a href="#C296" style="text-decoration: none; color:#388E3C; cursor:pointer">Sıralayan ve tersine çeviren Python programı</a></li>
      <li><a href="#C297" style="text-decoration: none; color:#388E3C; cursor:pointer">lambda, def ile sıralanan Python programı</a></li>
      <li><a href="#C298" style="text-decoration: none; color:#388E3C; cursor:pointer">Öğeleri kaldıran Python programı</a></li>
      <li><a href="#C299" style="text-decoration: none; color:#388E3C; cursor:pointer">for, list kullanan Python programı</a></li>
      <li><a href="#C300" style="text-decoration: none; color:#388E3C; cursor:pointer">list kapsamı kullanan Python programı</a></li>
      <li><a href="#C301" style="text-decoration: none; color:#388E3C; cursor:pointer">Örnek copy bildirimi: Python</a></li>
      <li><a href="#C302" style="text-decoration: none; color:#388E3C; cursor:pointer">Bitişik liste öğelerini alan Python programı</a></li>
      <li><a href="#C303" style="text-decoration: none; color:#388E3C; cursor:pointer">format, liste kullanan Python programı</a></li>
      <li><a href="#C304" style="text-decoration: none; color:#388E3C; cursor:pointer">all kullanan Python programı</a></li>
      <li><a href="#C305" style="text-decoration: none; color:#388E3C; cursor:pointer">any kullanan Python programı</a></li>
    </ul>
    </p>
  </div>
</div>

<br>

**Liste.** Bir ağaç büyüdükçe odun katmanları eklenir. Mevsimler ve sıcaklıklar büyümesini etkiler. Halkalar bir liste olarak temsil edilebilir.

<br>
<h5 id="C291">append kullanan Python programı</h5><hr>

**Öğeler eklenebilir,** döngülenebilir veya sıralanabilir. Listeler diğer yapılarla birleştirilebilir. Bir ağaç gibi, listeyi büyütmek için elemanlar (katmanlar) ekliyoruz.

**Bir örnek.** Bir liste kapasitesini yönetir. Boş bir listeyle başlıyoruz. Ancak, onları ekledikçe sayılara uyacak şekilde genişler. Listeye eklediğimiz 4 öğe bu sırada saklanır. 

**İpucu:** 
Sözlüğün aksine, Sıra bir listede garanti edilir. Liste sıralı bir koleksiyondur. 

**append:** 
Bu yordam, liste özdeşinde (None ifadesine eşit olmamalıdır) çağrılır. Eklediğimiz değeri alır.

<main class="grid">
  <article>
{% highlight python %}
list = []
list.append(1)
list.append(2)
list.append(6)
list.append(3)

print(list)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
[1, 2, 6, 3]
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C292">insert çağıran Python programı</h5><hr>

Insert. Bir öğe bir listede herhangi bir yere eklenebilir. insert() ile ilk kısma veya listenin ortasındaki bir yere ekleyebiliriz. 

Önemli: 
Sıra 1, ikinci eleman konumunu gösterir. Listeler sıfırdan başlayarak sıralanır -sıfır-tabanlıdır.

<main class="grid">
  <article>
{% highlight python %}
list = ["dot", "perls"]

# Insert at index 1.
list.insert(1, "net")

print(list)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
['dot', 'net', 'perls']
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C293">extend kullanan Python programı</h5><hr>

**Extend.** Bir liste extend() ile başka bir listeye eklenebilir. Bu yüzden bir listeyi sonuna kadar başka bir liste içerecek şekilde genişletiyoruz. Listeleri arda arda bağlarız (birleştiririz). 

**Dikkat:** 
Bir liste eklemek için append() öğesini çağırmaya çalışırsak, yeni listenin tamamı sonuç listesinin tek bir öğesi olarak eklenecektir. 

**İpucu:** 
Başka bir seçenek, bir for döngüsü kullanmak veya listeyi arda arda bağlayarak (genişletmek) için aralık sözdizimini kullanmaktır.

<main class="grid">
  <article>
{% highlight python %}
# Two lists.
a = [1, 2, 3]
b = [4, 5, 6]

# Add all elements in list "b" to list "a."
a.extend(b)

# List "a" now contains six elements.
print(a)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
[1, 2, 3, 4, 5, 6]
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C294">len kullanan Python programı</h5><hr>

**Len.** Bir liste belirli sayıda eleman içerir. Boşsa bu sıfır olabilir. Dahili bir yordam olan len ile eleman sayısına erişiriz.

<main class="grid">
  <article>
{% highlight python %}
animals = []
animals.append("cat")
animals.append("dog")
count = len(animals)

# Display the list and the length.
print(animals)
print(count)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
['cat', 'dog'] <br>
2
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C295">in kullanan Python programı</h5><hr>

Anahtar kelimede. Listede bir eleman mı? Bunu belirlemek için 'in' ve 'not in' ifadesini kullanıyoruz. Diğer yaklaşımlar mümkündür, ancak 'in' en basitidir. Burada 'in' ve 'not in' ile bir liste ararız.

<main class="grid">
  <article>
{% highlight python %}
items = ["book", "computer", "keys", "mug"]

if "computer" in items:
    print(1)

if "atlas" in items:
    # This is not reached.
    print(2)
else:
    print(3)

if "marker" not in items:
    print(4)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
1 <br>
3 <br>
4
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C296">Sıralayan ve tersine çeviren Python programı</h5><hr>

**Sort, reverse.** Listeler, öğelerinin sırasını muhafaza eder. Ve yeniden düzenlenebilirler. Sıralama yordamıyla, öğelerin sırasını düşükten yükseğe doğru değiştiririz. 

**Ve:** 
Tersine, öğelerin güncel sırasını tersine çeviririz. sort ve reverse tekrar birleştirebilir (tersine çevrilmiş bir sıralama için).
<main class="grid">
  <article>
{% highlight python %}
list = [400, 500, 100, 2000]

# Reversed.
list.reverse()
print(list)

# Sorted.
list.sort()
print(list)

# Sorted and reversed.
list.reverse()
print(list)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
[2000, 100, 500, 400] <br>
[100, 400, 500, 2000] <br>
[2000, 500, 400, 100]
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C297">lambda, def ile sıralanan Python programı</h5><hr>

**Sort, key.** Bazen listedeki öğeler belirli bir şekilde sıralanmalıdır. Burada, liste karakterlerini son karakterlerine ve ardından ikinci karakterlerine göre sıralarız. 

**Def:** 
Örnek önce sıralamak için key argümanı olarak bir def yordamını kullanır. -key equals- 'Anahtar eşittir' bölümü belirtilmelidir. 

**Lambda:** 
Son olarak öğeleri sıralamak için alternatif bir sözdizimi formu, lambda ifadesi sunuyoruz. Bu ikinci -char- karakterini hedefler.
	

<main class="grid">
  <article>
{% highlight python %}
def lastchar(s):
    # Return last character in string.
    return s[-1]

# Input.
values = ["abc", "bca", "cab"]

# Sort by last character in the strings.
values.sort(key=lastchar)
print(values)

# Sort by the second character,
# in the strings.
# ... Use a lambda expression.
values.sort(key=lambda s: s[1])
print(values)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
['bca', 'cab', 'abc'] <br>
['cab', 'abc', 'bca']
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C298">Öğeleri kaldıran Python programı</h5><hr>

**Remove, del.** Bir değer üzerinde hareket eder. Önce bu değeri arar ve sonra kaldırır. Öğeler (bir -index- sırada) del ifadesiyle de kaldırılabilir.
 
**Remove::** 
Bu listedeki ilk eşleşen öğeyi dışarı alır. Bunu birkaç kez çağırabiliriz ve listeyi değiştirmeye devam edebilir. 

**Del:** 
Bu arada, öğeleri sıradan veya bir dizi grubunundan kaldırır. Del, -slice- dilim sözdizimini kullanır.

<main class="grid">
  <article>
{% highlight python %}
names = ["Tommy", "Bill", "Janet", "Bill"]

# Remove this value.
names.remove("Bill")
print(names)

# Delete all except first two elements.
del names[2:]
print(names)

# Delete all except last element.
del names[:1]
print(names)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
['Tommy', 'Janet', 'Bill'] <br>
['Tommy', 'Janet'] <br>
['Janet']
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C299">for, list kullanan Python programı</h5><hr>

For-loop. Liste döngülerinde, Genellikle sıralamaya ihtiyacımız yok. Sadece sırayla elemanlara ihtiyacımız var. For döngüsü, bu durumda idealdir. Bir dizi değişkeninin bir diğeri ile karışıklığını ortadan kaldırır. 

Burada: 
For döngüsü içindeki dört liste öğesinin her biriyle karşılaşırız. Döngü gövdesindeki 'element' tanımlayıcısını kullanıyoruz.

<main class="grid">
  <article>
{% highlight python %}
# An input list.
elements = ["spider", "moth", "butterfly"]

# Use simple for-loop.
for element in elements:
    print(element)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
spider <br>
moth <br>
butterfly
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C300">list kapsamı kullanan Python programı</h5><hr>

**Listeyi kapsamı** tek bir ifadede tüm döngüyü ifade eder. Bu örnekte bir listeyi HTML dizgileri listesine çevirmek için liste kapsamayı kullanıyoruz. 

**Burada:** 
Giriş listesindeki her dizgeye html yöntemini uygularız. Bu, capitalize() çağırır ve bir HTML parçasını döndürür. 

**Tanımlayıcı:** 
Bu listedeki kapsamda, her dizgeye 'x' tanımlayıcısı verilir. Listedeki her öğeye Html() denir.

<main class="grid">
  <article>
{% highlight python %}
# Transform string into HTML.
def html(s):
    return "< b>" + s.capitalize() + "< /b>"

# Input string.
input = ["rabbit", "mouse", "gorilla"]

# List comprehension.
list = [html(x) for x in input]

# Result list.
print(list)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
['< b>Rabbit</b>', '< b>Mouse</b>', '< b>Gorilla</b>']
</p>
    </div>
  </article>
</main>

**Liste Kapsamı, notlar.** Liste kapsamında, bir koleksiyondaki her bir öğeye bir yöntem veya başka bir işlem uygularız. Bu son derece güçlüdür. 

**Ve:** 
Sözdizimi kısadır, programcılar için okumayı ve taramayı kolaylaştırır. Sıkıcı for döngülerinden kaçınırız.

<br>
<h5 id="C301">Örnek kopya bildirimi: Python</h5><hr>

**Kopya.** Bir dilim sözdizimi kullanılarak bir liste kopyalanır. Dilimde rakam belirtmediğimizde, tüm listeyi kapsar. Bu nedenle, belirtilmemiş bir dilime atanarak, listeyi kopyalarız. 
 
**Yeniden Boyutlandır:**
Ayrıca bir listeyi yeniden boyutlandırabiliriz. Dilim sözdizimi ve append ) gibi yordamlar yararlıdır.

<main class="grid">
  <article>
{% highlight python %}
# Copy list1 into list2.
list2 = list1[:]
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
</p>
    </div>
  </article>
</main>

**İkinci Kopya.** Bazen yinelenen öğeleri bir listeden kaldırmak istiyoruz. Sıralama önemliyse, elemanların yeniden sıralanmasını önlemek için özel bir yönteme ihtiyacımız olabilir. Burada bir set faydalıdır. 

**iki boyutlu.** Bir liste diğer listeleri içerebilir. Bu tür veri yapısını, iki boyutlu bir eleman ızgarası olarak kullanabiliriz. Bunlar pürüzlüdür. Alt listeler uzunluk olarak değişebilir. 

**İpucu:** 
Liste listeleri, küçük grafikler ve koordinat aramasına ihtiyaç duyan diğer uygulamalar için yararlı olabilir, ancak büyük bir bellek alanı değildir.

<br>
<h5 id="C302">Bitişik liste öğelerini alan Python programı</h5><hr>

**Bitişik elemanlar.** Çoğu zaman döngüde sadece bir elemana ihtiyacımız vardır. Ancak bazı durumlarda, karşılaştırmak için bitişik öğelere ihtiyacımız var. Burada listedeki bitişik öğelere ulaşıyoruz. 

**İpucu:** 
Sıra 1'de başlama, anahtardır. Döngü gövdesinde, önceki öğeye 'i-1' sırasına ve geçerli öğeye erişiriz.

<main class="grid">
  <article>
{% highlight python %}
# Input list.
elements = [0, 10, 20, 30]

# Use range.
for i in range(1, len(elements)):
    # Get two adjacent elements.
    a = elements[i - 1]
    b = elements[i]

    # Print two elements.
    print(a, b)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
0 10 <br>
10 20 <br>
20 30
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C303">format, liste kullanan Python programı</h5><hr>

**Format.** Bir listemiz olduğunu varsayalım. Ondan bazı öğeleri bir dizgeye eklemek istiyoruz. Bunun için str.format kullanabiliriz. Format(), liste argümanları için özel desteğe sahiptir. 

**İpucu:** 
format() 'nin ikinci argümanı bir değişkene bir -identifier- tanımlayıcı atar ve dizge içindeki öğelere erişebiliriz.

<main class="grid">
  <article>
{% highlight python %}
list = [10, 20, 30]

# Use "v" identifier to refer to the list.
# ... Access its elements in format.
res = str.format("The values are {v[0]}, {v[1]} and {v[2]}", v=list)
print(res)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
The values are 10, 20 and 30
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C304">all kullanan Python programı</h5><hr>

All built-in -yerleşik-. Tümüyle, tüm öğelerin True olarak değerlendirip değerlendirmediğini kontrol ederiz. Tek bir eleman bile yanlışsa, all() False değerini döndürür. Yöntem, elemanlar için standart bir boole değerlendirmesi kullanır.

<main class="grid">
  <article>
{% highlight python %}
items = [False, None, True]

# Some elements evaluate to False, so all is False.
if not all(items):
    print(False)

items = [10, 20, 30]

# All the items evaluate to True.
if all(items):
    print(True)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
False <br>
True
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C305">any kullanan Python programı</h5><hr>

**Any built-in.** Bu, yinelenen argümanı üzerinden döngü yapar (bir liste gibi). Eğer argümandaki elemanlardan 'any' True olarak değerlendirilirse, any() de True değerini döndürür. Yani True bir sonuç için tarar. 

**False:** 
Hiçbir öğe True değilse, any() false değerini döndürür. Yani 'not any', 'no True' ile aynıdır.

<main class="grid">
  <article>
{% highlight python %}
elements = [False, None, "Pomegranate", 0]

# One value is True,
# so any returns True.
if any(elements):
    print(True)

elements = [0, 0, False]

# Now no elements are True.
# ... Any returns False.
if not any(elements):
    print(False)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
True <br>
False
</p>
    </div>
  </article>
</main>

**Index, count.** Sıralama metodu ile bir liste arayabiliriz. Ve sayımla, listedeki bir elemanın özdeş sayısını toplayabiliriz (sayım sırayla uygulanabilir). 

**Array -dizi-.** Python'da bir liste bir diziden ayrıdır. Listeler küçük veri kümeleri için iyidir, ancak daha büyük miktarlarda veri için, diziler çok daha verimlidir. Genellikle % 90 daha az bellek kullanırlar. 

**Özeti.** Bir liste elemanları doğrusal bir toplamayla birbiri ardına depolar.Python sayıları, dizeleri de dahil olmak üzere her türlü elemanı ele alır - hatta tuples ve diğer koleksiyonlar.

**Faydaları, negatifler.** Listeler basit bir sözdizimine sahiptir; bir tane oluşturmak için yalnızca birkaç karakter gerekir. Ve listeleri yeniden boyutlandırmak zorunda kalmayacağız. Ancak büyük veri kümeleri için aşırı bellek kullanırlar.

<br>
<h5 id="C181">Sınıfı kullanan Python programı</h5><hr>

**init** örneği: Bu program bir sınıf oluşturur. Sınıf anahtar sözcüğünü kullanır ve iki yordam sunar. **init** yordamı özeldir. Bu bir kurucudur.

<div class="w3-code notranslate pythonHigh">
<strong>Not:</strong> init, parametreleri alır ve yeni sınıf özdeşine alanlar atar. Argümanları doğrulayabilir, hesaplamalar yapabilir, yordamları çağırır.</div>

**Box:** İfadede **Box(10, 2)**, **Box** sınıfının yeni bir eşleneğini oluşturuyoruz. Genişliği 10'a ayarlanır. Yüksekliği 2'ye ayarlanır.

**Area:** area() yordamı 20'ye dönecektir. Bu, **init** tarafından belirlenen bellekte depolanan değerlere dayanmaktadır.

<br>
<main class="grid">
  <article>
{% highlight python %}
class Box:
    def area(self):
        return self.width * self.height

    def __init__(self, width, height):
        self.width = width
        self.height = height

# Create an instance of Box.
x = Box(10, 2)

# Print area.
print(x.area())
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
20
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C182">Sınıf kalıtımını kullanan Python programı</h5><hr>

**Kalıtım.** Bir sınıf, bir veya daha fazla başka sınıftan miras alabilir. Buradan türetmek istediğimiz sınıf tanımlanmalıdır. Türetilmiş sınıf, sınıf adından sonra parantez içinde belirtilir.

B sınıfı, A sınıfından türetilmiştir. Sınıflardan sonraki ifadelerde, boyutu (B sınıfından) ve genişliği (A sınıfıdan) çağırıyoruz.

**Bir sınırlama.** Dairesel sınıf devralın olamaz. Eğer A sınıfından B'ye ve A'dan B'ye türetmeye çalışırsanız, bir NameError alırsınız.

**Size:** Bu def yordamı doğrudan B sınıfında bulunur. Sınıf A'da yoktur.

**Width:** A sınıfı olan B sınıfının, temel sınıfı kontrol edilerek bulunur.

<br>
<main class="grid">
  <article>
{% highlight python %}
class A:
    def width(self):
        print("a, width called")

class B(A):
    def size(self):
        print("b, size called")

# Create new class instance.
b = B()
# Call method on B.
b.size()
# Call method from base class.
b.width()
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
b, size called<br>
a, width called
</p>
    </div>
  </article>
</main>



<br>
 
<h5 id="C183">İki alt çizgi değişkenini kullanan Python programı</h5><hr>
 

İki alt çizgi. Bir sınıfta, bazı elemanların isimlerinin başında iki altçizgi vardır. Bunlar özeldir. Python dili, onları özel olarak ele alır.

Sınıf dışından özel elemanlara erişilebilir, ancak başlangıçta **_ClassName** eklemeliyiz.

A sınıfında, **__value** adlı bir alanımız var. Bunu, sınıfın dışında **_A__value** olarak belirtmeliyiz, ancak içinde **__value** kullanabiliriz.

<br>

<main class="grid">
  <article>
{% highlight python %}
class A:
    # Init.
    def __init__(self, value):
        self.__value = value

    # Two-underscore name.
    __value = 0

# Create the class.
a = A(5)

# [1] Cannot use two-underscore name.
# print(a.__value)

# [2] Must use mangled name.
print(a._A__value)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
5
</p>
    </div>
  </article>
</main>


<br>
 
<h5 id="C184">issubclass kullanan Python programı</h5><hr>
 
**issubclass.** Bu bir sınıfın diğerinden türetilmiş olup olmadığını belirler. Bu yerleşik yöntemle, iki sınıf ismini (özdeşini değil) geçiririz.

**Dönüş:** 
Birinci sınıf ikincisinden miras alırsa, issubclass **true** değerini döndürür. Aksi takdirde **false** döner.

**İpucu:** 
Bunun bilinmesi nadiren yararlıdır: Bir sınıf kendi alt sınıfında kabul edilir. Aşağıdaki üçüncü issubclass çağrısı bunu gösterir.

<main class="grid">
  <article>
{% highlight python %}
class A:
    def hello(self):
        print("A says hello")

class B(A):
    def hello(self):
        print("B says hello")

# Use the derived class.
b = B()
b.hello()

# See if B inherits from A.
# B sınıfı A sınıfından miras alırsa.
if issubclass(B, A):
    print(1)

# See if A inherits from B.
if issubclass(A, B):
    # Not reached.
    print(2)

# See if A inherits from itself.
if issubclass(A, A):
    print(3)
    print(b.__class__)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
B says hello <br>
1 <br>
3
</p>
    </div>
  </article>
</main>


 
<br>
<h5 id="C185">isinstance kullanan Python programı</h5><hr>

**isinstance.** İlk argüman (bir değişken), ikinci argümanın (bir sınıfın) bir eşleneği olduğunda, isinstance true değerini döndürür. Eğer sınıf bir temel sınıfsa, aynı zamanda true döner.

**Burada:** 
Listeler gibi, bazı öznitelikler için, sınıf adı programda belirtilmemiş olabilir. Ama yine de **'liste'** yi bu şekilde test edebiliriz.

<main class="grid">
  <article>
{% highlight python %}
class A:
    def welcome(self):
        # Not called.
        print("Welcome")

# This is an instance of A.
# Bu A sınıfının bir özdeşidir.
a = A()

if isinstance(a, A):
    print(1)

# This is an instance of the list class.
# Bu list sınıfının bir eşleneğidir.
b = [1, 2, 3]

if isinstance(b, A):
    # Not reached.
    print(2)

if isinstance(b, list):
    print(3)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
1 <br>
3
</p>
    </div>
  </article>
</main>


<br>
<h5 id="C186">repr kullanan Python programı</h5><hr>

 repr. Bu bir sınıftan **__repr__** yordamına erişir. repr 'temsil' anlamına gelir. Bir öbeği dize-string temsiline dönüştürür. Burada Snake özdeşini özel bir şekilde gösteriyoruz.

İpucu: 
repr yordamından bir dize döndürüyoruz. print yordamı, bir öbeğin **__repr__** yordamını otomatik olarak çağırır.

Ve: 
Kullanılacak olan **__repr__** yordamını kullanmaya zorlamak için **repr**'i çağırabiliriz. Bu temsil dizgisini bir değişkende saklayabilmemizi sağlar.


<main class="grid">
  <article>
{% highlight python %}
class Snake:
    def __init__(self, type):
        self.type = type

    def __repr__(self):
        return "Snake, type = " + self.type

# Create Snake instance.
# ... Print its repr.
s = Snake("Anaconda")
print(s)

# Get repr of Snake.
value = repr(s)
print(value)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Snake, type = Anaconda <br>
Snake, type = Anaconda
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C187">property kullanan Python programı</h5><hr>

**Property.** Bir değer alır ve ayarlar. Bu bir yordam gibidir, ancak daha basit bir sözdizimi kullanır. Bir **property** değişken gibi atanabilir. Bu, **setter** yordamının yürütülmesine neden olur.

**Burada:**
Yerleşik **property** iki argüman iletiyoruz. **getname**'i **getter** olarak belirledik ve **setname** **setter** olarak belirledik.

**İpucu:** 
Herhangi bir kod ifadesi, **getname** ve **setter** de kullanılabilir. Burada setname’ye iletilen dizgeyi büyük harfle yazıyoruz.

**Snake:** 
Bir Snake sınıf eşleneği oluşturuyoruz. Sonra **"name"** property atarız. Bu, Snake sınıfının setname yordamını çağırır.

**Son olarak:** 
**"name"** property değerini yazdırıyoruz. Bu **getname** yordamını çağırır.

<main class="grid">
  <article>
{% highlight python %}
class Snake:
    def getname(self):
        return self._name

    def setname(self, value):
        # When property is set,
        # capitalize it.
        self._name = value.capitalize()

    name = property(getname, setname)

# Create a snake instance.
s = Snake()

# Set name property.
s.name = "rattle"

# Get name property.
print(s.name)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Rattle
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C188">super kullanan Python programı</h5><hr>

**Süper.** super() yerleşik ile, bir sınıfın üst öğesini alabiliriz. Bu derhal atası alır. Burada, üst sınıf öğesi olan Shape'e referans veren Circle sınıfında **super()** öğesini çağırıyoruz.

**Yazdır:** 
'Circle'dan name yordamını yazdırır. Daha sonra Shape'den **name()** de çağrılır.

<main class="grid">
  <article>
{% highlight python %}
class Shape:
    def name(self):
       print("Shape")

class Circle(Shape):
    def name(self):
       print("Circle")
       # Call name method from parent class.
       super().name()

# Create Circle and call name.
c = Circle()
c.name()
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Circle <br>
Shape
</p>
    </div>
  </article>
</main>


<br>
<h5 id="C189">Sınıfta hash kullanan Python programı</h5><hr>

**Hash.** Nesneleri karşılaştırırken, daha hızlı bir hash kodu kullanılabilir. Bir sözlük hash kullanır. **__hash__** ile özel hash hesaplamaları uyguluyoruz. Eşsiz bir değer, iyi bir hash dır.

**Burada:** 
Bu programda, aynı isimlere ve renklere sahip iki Snake öbeği oluşturulur. unique_id, hash değerini hesaplamak için kullanılır.

<main class="grid">
  <article>
{% highlight python %}
class Snake:
 def __init__(self, name, color, unique_id):
     self.name = name
     self.color = color
     self.unique_id = unique_id
 def __hash__(self):
     # Hash on a unique value of the class.
     return int(self.unique_id)

# Hash now is equal to,
# the unique ID values used.
p = Snake("Python", "green", 55)
print(hash(p))

p = Snake("Python", "green", 105)
print(hash(p))
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
55
 <br>
105
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C190">id kullanan Python programı</h5><hr>

id yordamı. Her öbeğin bir id si vardır. Bu özdeşe özgüdür. Tam sayı bir uygulama detayıdır ve program yürütmeleri arasında değişecektir. Burada sınıf id lerine bakıyoruz.

Not: Nesneler çöp toplayıcı tarafından kaldırıldığında ve kullanılmadığında 
id ler yeniden kullanılabilir. Kodlarda nadiren faydalıdırlar.


<main class="grid">
  <article>
{% highlight python %}
class Cat:
    def __init__(self, color):
        self.color = color

cat1 = Cat("black")
cat2 = Cat("orange")

# Each object has a unique id.
# ... The ids may vary between runs.
print(id(cat1))
print(id(cat2))
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
139888838995640 <br>
139888838995696
</p>
    </div>
  </article>
</main>

**Classmethod, staticmethod.** Python özel yordam tiplerini destekler (statik yordamlar gibi). Bunlar sınıf yordamları ve statik yordamlar. 
 
**Tipi.** Yerleşik yordamlar, ifadeler içeren tipleri oluşturabilir ve değiştirebilir. Yerleşik tip 'sınıf' beyanının yerini alabilir. setattr ve getattr ile alanlar ekliyor veya yüklüyoruz. 

**Tipleri, özdeşler.** Bir sınıf tanımıyla, bir tipin taslağını çıkarırız. Bu sınıflar şablonlardır. Kullanılmak üzere özdeş olarak oluşturulmalıdır (__init__ sayesinde). Tipler özdeş değildir.

**Modeller:**
Programlamada modelleri şablon olarak belirleriz. Ve yürütülebilir ifadelerde, bu şablonları hayata geçiririz (özdeş olarak). 

**Bir sınıfta**, alanlardaki gibi verileri saklarız. Ayrıca, ref anahtar kelimesinde olduğu gibi, yordam uygulamalarını da sağlıyoruz. Bu önemli bir soyutlama seviyesi sağlar.

**Bazı kavramlar.** Sınıflar, verileri davranışa kolayca bağlayalım. Python programlarımızda bloklar oluşturuyorlar. Onlarla daha karmaşık modeller geliştiriyoruz.

<br>
<h5 id="C191">classmethod kullanan Python programı</h5><hr>

**Classmethod, staticmethod.** Bir sınıf düşünün. Sınıfın bir özdeşini oluşturuyoruz. Fakat sınıfın bazı özellikleri bir özdeş gerektirmeyebilir - daha genel amaçlıdırlar.

**Burada** statik bir yordama ihtiyaç vardır. Statik bir yordam ('staticmethod' ile belirtilir), özdeş olarak çağrılan değil, tip ismine göre çağrılan yordam anlamına gelir.

**Classmethod.** Bu bir fonksiyon donatıcıdır. 'def' den önce 
@classmethod belirterek uygularız. Bir özdeş ve bir statik yordam birleşimidir. Her iki şekilde de çağrılabilir.

**Yani:** 
Biz classmethod örneğini, Box.example sözdizimi ile veya bir Box özdeşi 'b' den çağırabiliriz.

**Sınıf:** 
Sınıf argümanı (burada 'cls'), bir tip oluşturarak ve onu döndürerek kullanılabilir. Ya da görmezden gelebiliriz.

<main class="grid">
  <article>
{% highlight python %}
class Box:
    @classmethod
    def example(cls, code):
        # This method can be used 
        # as an instance or static method.
        print("Method called:", code)

# Use classmethod as a static method.
Box.example("cat")

# Use classmethod as an instance method.
b = Box()
b.example("dog")
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Method called: cat <br>
Method called: dog
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C192">staticmethod kullanan Python programı</h5><hr>

**Staticmethod.** Statik bir yordam, self özdeşi kabul etmez. Bir sınıftaki çoğu yordam, 'self' adıyla ilk argümanı kabul eder. 
@staticmethod dekoratörüyle birlikte, bu argümanı atlıyoruz. 

**İpucu:** 
Statik yordamlar herhangi bir değeri döndürebilir. Herhangi bir argümanı kabul edebilirler. Sınıf adıyla veya bir özdeşle çağrılırlar. 

**Ayrıca:** 
Box.Message ile statik bir yordam mi, yoksa b.Message gibi bir özdeş mi aradığınız fark etmez.

<main class="grid">
  <article>
{% highlight python %}
class Box:
    @staticmethod
    def Message(a):
        print("Box Message", a)

# Call static method with type.
Box.Message(1)

# Call static method with instance.
b = Box()
b.Message(2)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Box Message 1 <br>
Box Message 2
</p>
    </div>
  </article>
</main>

**Bir inceleme.** Python programlarında sınıf yordamları ve statik yordamlar yararlıdır. Genellikle bir sınıfın, özdeş tabanlı olmayan bölümleri vardır. Bir özdeş gerektiren, hantal ve garip olacaktır.

<br>
<h5 id="C192">type kullanan Python program</h5><hr>

**Type.** Python sınıfları destekler. Yerleşik type ile doğrudan tipleri oluşturabiliriz. Bu tiplerden sınıfları eşleştirebiliriz.

**Setattr ile** sınıflarımıza öznitelikler (alanlar) ekleyebiliriz. getattr ile bu değerleri alırız. Komut ifadeleri ile tipleri oluştururuz.
 
**İlk örnek.** Bu program, yerleşik tipler ile bir tip oluşturur. Bu, sınıf anahtar kelimesine alternatif bir sözdizimi formudur. Bu type adı 'Cat' olarak adlandırıyoruz.

**İpucu:** 
Bizim type, Python type ları için temel sınıfı, öbekten devralır. Ve başlangıç ​​değerleri yoktur. 

**Setattr:** 
Sınıf özdeşimize bir alan (veya öznitelik) eklemek için setattr kullanıyoruz. Sınıf özdeşini, öznitelik adını ve değerini iletiriz. 

**Getattr:** 
Sonraki bir sınıfın özniteliğini almak için getattr'ı çağırıyoruz. Burada bu çağrı setattr tarafından ayarlanan değeri döndürür.

<main class="grid">
  <article>
{% highlight python %}
Cat = type("Cat", (object,), dict())
cat = Cat()

# Set weight to 4.
setattr(cat, "weight", 10)

# Get the weight.
value = getattr(cat, "weight")
print(value)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
10 <br>
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C193">type içinde dict kullanan Python programı</h5><hr>

**Dict.** Bir type özniteliklerini sözlük argümanıyla başlatabiliriz. Bu üçüncü argümandır. Burada 'paws' özniteliğini 4 ve 'weight' özniteliğini -1 olarak ayarlıyorum. 

**İpucu:** Bu bir sözlük özdeşidir. Diğer sözlükler gibi oluşturulabilir.

**Yazdır:** Bu değerleri bir Cat özdeşinde görüntüleriz. print yerleşik yöntemini kullanıyoruz.

<main class="grid">
  <article>
{% highlight python %}
# Create class type,
# with default attributes (fields).
Cat = type("Cat", (object,), {"paws": 4, "weight": -1})
cat = Cat()

# Access attributes.
print("Paws =", cat.paws)
print("Weight =", cat.weight)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Paws = 4 <br>
Weight = -1
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C194">hasattr, delattr kullanan Python programı</h5><hr>

**Hasattr.** getattr ve setattr den başka iki yerleşik işlev vardır. hasattr ile sınıf eşleneğinde bir öznitelik (alan) olup olmadığını görürüz. Doğru veya Yanlış döndürür. 

**Delattr:** 
delattr ile sınıftan bir öznitelik çıkarırız. Bu, del operatörü için başka bir sözdizimi formudur. 

**İpucu:** 
Şeyleri kaldırmak için (bir sözlükten) del operatörünü kullanırız. Bu özel bir sözdizimi formudur.


<main class="grid">
  <article>
{% highlight python %}
class Box:
    pass

box = Box()

# Create a width attribute.
setattr(box, "width", 15)

# The attribute exists.
if hasattr(box, "width"):
    print(True)

# Delete the width attribute.
delattr(box, "width")

# Width no longer exists.
if not hasattr(box, "width"):
    print(False)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
True <br>
False
</p>
    </div>
  </article>
</main>

**type, setattr ve getattr'ı anlayarak**, Python sınıflarının nasıl çalıştığı hakkında daha fazla şey öğreniyoruz. Bu bilgi daha iyi programlar yazmamıza yardımcı olur. 

**Python'daki 'sınıf' bildirimleri gibi ifadeler**, 'type' gibi yerleşik yordam çağrılarına doğrudan çevrilebilir. Yüksek seviyeli parçaları uygulamak için dilin düşük seviyeli kısımları kullanılır.
	
<br>
<h5 id="C195">Değerleri get ile alan Python programı</h5><hr>

**Sözlük.** Bir dil düşünün. Her kelime bir anlamla eşleşir. Bir kitap yazılı bir çalışmadır. Bir bulut yüzen sudur. Bir sözlükte anahtarları (kelimeleri) değerlere (anlamlara) eşleştiririz. 

**Python sözlükleri** haritalardır. Köşeli parantezlerle, bir anahtardaki bir değeri atar ve ona erişiriz. get() ile bir varsayılan sonuç belirtebiliriz. 

**Örnek alın.** Değerler almanın birçok yolu var. '[' and ']' karakterlerini kullanabiliriz. Doğrudan bu şekilde bir değere erişiyoruz. Ancak bu sözdizimi, anahtar-key bulunamazsa bir KeyError'a neden olur. 

**Bunun yerine:** 
1 veya 2 argümanlı get() yordamını kullanabiliriz. Bu herhangi bir hataya neden olmaz - hiçbiri döndürmez.

**Argüman 1:** 
get() için ilk argüman, test ettiğiniz anahtardır. Bu argüman gereklidir. 

**Argument 2:** 
get() için ikinci isteğe bağlı bağımsız argüman, varsayılan değerdir. Anahtar bulunmazsa bu iade edilir.


<main class="grid">
  <article>
{% highlight python %}
plants = {}

# Add three key-value tuples,
# to the dictionary.
plants["radish"] = 2
plants["squash"] = 4
plants["carrot"] = 7

# Get syntax 1.
print(plants["radish"])

# Get syntax 2.
print(plants.get("tuna"))
print(plants.get("tuna", "no tuna found"))
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
2 <br>
None <br>
no tuna found
</p>
    </div>
  </article>
</main>

	
<br>
<h5 id="C196">KeyError'a neden olan Python programı</h5><hr>

Get, None. Python'da 'None', null veya nil gibi özel bir değerdir. Programlarda genellikle None kullanırız. Bu bir değer değil demektir. Bir sözlükte değer bulunamazsa get() None değerini döndürür. 

Not: 
None'a bir anahtar atamak için geçerlidir. Yani get() None yazamaz, ancak sözlükte aslında bir None değeri vardır. 

KeyError. Programlardaki hatalar sadece sizi rahatsız etmek için orada değildir. Bir programla ilgili problemleri gösterir ve daha iyi çalışmasına yardımcı olurlar. Geçersiz erişimde bir KeyError oluşur.

<main class="grid">
  <article>
{% highlight python %}
lookup = {"cat": 1, "dog": 2}

# The dictionary has no fish key!
print(lookup["fish"])
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Traceback (most recent call last):  <br>
  File "stdin", line 4, in module  <br>
    print(lookup["fish"])  <br>
KeyError: 'fish'
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C197">KeyError işleyen Python programı</h5><hr>

**KeyError.** Bir sözlük bir KeyError'un oluşmasına neden olabilir. Bu, sözlüğün yanlış kullanımı nedeniyle gerçekleşir. KeyError'ı çoğu durumda, sözlükteki get() yordamını kullanarak önleyebiliriz. 

**Örnek.** Bu program bir KeyError'un atılmasına neden olur. Sözlük sadece üç giriş içerir - bunlar 'a', 'b' ve 'c' tuşlarını içerir. Bir 'd' anahtarına erişmeye çalışıyoruz, ancak mevcut değil. Ve bir KeyError ile karşılaşıldı.
 
**Sonra,** KeyError'ı try-except yapısında yakalarız. Bir except-block ta bir hata mesajı yazdırıyoruz. Son olarak, exceptions-istisnaları ele aldıktan sonra, get() yöntemiyle 'd' anahtarına erişiriz. Bu güvenli. exception-olağandışılık yok.

<main class="grid">
  <article>
{% highlight python %}
# Create dictionary with three entries.
values = {"a" : 1, "b" : 2, "c" : 3}

# Using the value directly,
# can cause an error.
try:
    print(values["d"])
except KeyError:
    print("KeyError encountered")

# We use get to safely get a value.
print(values.get("d"))
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
KeyError encountered <br>
None
</p>
    </div>
  </article>
</main>

**Python programlarında bir KeyError önlenebilir.** Soruna, doğrudan anahtara erişmek yerine get() gibi güvenli bir yordam kullanarak giderdik. Var olduğundan eminsek, sadece bir anahtara doğrudan erişebiliriz. 

**Ayrıca:** 
Programınızda herhangi bir doğrudan erişim oluşursa, kodunuz yeni veya test edilmemişse, bir try-except bloğu kullanmak faydalı olabilir. 

**Özet.** KeyError, Python'da önlenebilir bir istisnadır. Bir sözlük yanlış kullanıldığında ortaya çıkar. Bu hatayı önlemek için iki yol gördük. Bir try-except ifadesi kullandık. Ve değer erişimini get() yordam çağrısı ile değiştirdik.

<br>
<h5 id="C198">in kullanan Python programı</h5><hr>

**In-keyword.** Bir sözlük belirli bir anahtar-key içerebilir (veya içermeyebilir). Çoğu zaman varlığını test etmemiz gerekir. Bunu yapmanın bir yolu, anahtar kelime iledir. 

**True:** 
Bu anahtar, sözlükteki bir anahtar/değer çiftinin parçası olarak mevcutsa 1 (true anlamında) döndürür.

**False:** 
Anahtar yoksa, in-keyword, false değerini gösteren 0 değerini döndürür. Bu if-komut ifadelerinde yararlıdır.

<main class="grid">
  <article>
{% highlight python %}
animals = {}
animals["monkey"] = 1
animals["tuna"] = 2
animals["giraffe"] = 4

# Use in.
if "tuna" in animals:
    print("Has tuna")
else:
    print("No tuna")

# Use in on nonexistent key.
if "elephant" in animals:
    print("Has elephant")
else:
    print("No elephant")
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Has tuna <br>
No elephant
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C199">Sözlükte len'i kullanan Python programı</h5><hr>

Len yerleşik. Bu, sözlükteki key-value anahtar/değer çiftlerinin sayısını döndürür. Anahtarların ve değerlerin veri tipleri önemli değil. Len ayrıca listelerde ve  strings dizelerde çalışır. 

Dikkat: 
Sözlük için döndürülen length uzunluk, anahtarları ve değerleri ayrı ayrı dikkate almaz. Her bir çift, uzunluğa birini ekler.

<main class="grid">
  <article>
{% highlight python %}
animals = {"parrot": 2, "fish": 6}

# Use len built-in on animals.
print("Length:", len(animals))
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
Length: 2 <br>
</p>
    </div>
  </article>
</main>

**Len notları.** İncelememiz gerek. Len() sadece sözlükler değil, diğer veri tiplerinde kullanılabilir. İçindeki eleman sayısını döndürerek bir liste üzerinde hareket eder. Ayrıca  -tuples - öznitelikler grubunu da ele alır.

<br>
<h5 id="C200">Dizelerde len kullanan Python programı</h5><hr>

**Len.** Her şeyin uzunluğu var. Evrenimiz bile, sürekli genişlemede, bir uzunluğa sahiptir. Python'da olsa çoğunlukla -strings, lists, collections - dizgiler, listeler, koleksiyonlar - evren değil uzunluklarını ölçüyoruz. 

**Len'i kullanıyoruz.** Çoğu zaman performansı len ile optimize edebiliriz. Öğelerin sayısı, hesaplanamayan, öbek üzerinde depolanır, bu yüzden len hızlıdır.

**Strings.** Len bir dizedeki karakter sayısını döndürür. Boşlukları, noktalama işaretlerini ve tüm karakterleri aynı sayar. None değişkeninin uzunluğunu almamıza dikkat etmeliyiz - bu başarısız olur. 

**Boş:** 
İkinci telefon çağrısı boş bir dizeyi sınar. Bu dizede sıfır karakter var, ancak None değil. 

**TypeError:** 
Len, iletilen değişkenin tipine dayanır. Bir NoneType len yerleşik desteğe sahip değildir.
 
<main class="grid">
  <article>
{% highlight python %}
# Has length of 3:
value = "cat"
print(len(value))

# Has length of 0:
value = ""
print(len(value))

# Causes TypeError:
value = None
print(len(value))
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
3 <br>
0 <br>
TypeError: object of type  <br> 'NoneType' has no len() <br>
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C200">Len, koleksiyonları kullanan Python programı</h5><hr>

**Collections.** Yerleşik len, bir koleksiyondaki elemanların sayısını döndürür. İç içe geçmiş, alt koleksiyonlar içeren bir koleksiyon için sayım sığdır: tüm iç içe geçmiş öğeler dikkate alınmaz. 

**Dictionary:** 
Sözlük için, her bir çift bir birim olarak sayılır. Anahtarlar ve değerler bağımsız değil.

<main class="grid">
  <article>
{% highlight python %}
# Get length of list with len.
elements = [1, 2, 3]
print(len(elements))

# Get length of tuple.
items = ("cat", "dog", "bird", "shark")
print(len(items))

# Length of example set (key count).
set = {100, 200, 300}
print(len(set))

# Length of dictionary (pair count).
lookup = {"cat" : 4, "centipede" : 100}
print(len(lookup))
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
3 <br>
4 <br>
3 <br>
2
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C200">Özyineleme kullanan Python programı</h5><hr>

**Özyineleme.** -recurse- Özyinelemeyle, tüm olasılıkları denemek için çözümler ararız. Yinelemeli bir yöntemin bir sonlandırma koşulu (bir hedef) olmalıdır. Ve bir döngüde, değişen argümanlar ile kendini çağırabilir. Bu şekilde arama şubeleri dışarı çıkar.
 
**Değişiklik.** Bu program, son paraların saklandığı boş bir bozuk paralar listesiyle başlar. Ayrıca, her biri 1 veya 5 kuruş gibi olası madeni para miktarlarını da belirtir. Değişim çağrısında (en aşağıya), 51 sent'lik bir hedef miktar belirtiyoruz. 

**Change:** 
Bu özyinelemeli bir yöntemdir. İlk önce hedef tutarımızı toplayıp toplamadığımızı kontrol eder. Sonra bir döngüde yeni paralar eklemeye çalışır. 

Eklemek için bir bozuk para bulduğumuzda, değişimde, paralar listemizi bir dilim ile kopyalarız. Sonra yeni parayı ekliyoruz. Her bir özyinel çağrının kendi listesi olması gerektiğinden, kopyalanması önemlidir. Hedef tutarımıza ulaştığımızda madeni paralarımızı gösteririz.

**Gösterge:** 
Bu def-method tüm olası miktarlar üzerinde döngü yapar ve -amount- miktar tarafından toplanan para sayısını gösterir.

<main class="grid">
  <article>
{% highlight python %}
def change(coins, amounts, highest, sum, goal):
 # See if we are done.
 if sum == goal:
   display(coins, amounts)
   return

 if sum > goal:
   return

 for value in amounts:
   if value >= highest:
     # Copy the coins list,
     # then add the current value.
     copy = coins[:]
     copy.append(value)
     # Recursively add more coins.
     change(copy, amounts, value, sum + value, goal)

def display(coins, amounts):
 # Display our coins sorted by amount.
 for amount in amounts:
     count = coins.count(amount)
     print(amount, ":", count)
 print("")

coins = []
amounts = [1, 5, 10, 25, 50]
# Begin.
change(coins, amounts, 0, 0, 51)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
1 : 1 <br>
5 : 0 <br>
10 : 0 <br>
25 : 0 <br>
50 : 1
</p>
    </div>
  </article>
</main>

**Çıktı** 51 toplam kuruş yapmak için birçok olası para çeşitleri içerir. İlk olarak 51 adet tek parça kullanabileceğimizi öğreniyoruz. Daha sonra, bir adet 46 kuruş ve 1 beş kuruşluk bir parça kullanabiliriz. Bunlar her ikisi de 51 kuruş kadardır. 

**Son olarak:** 
Birçok atlanan sonuçtan sonra gösterilen, son sonuçta 1 tek-kuruş ve 50 kuruş para kullanıyoruz. 

**Özyinelemeyi kullanırken,** özyinelemeli yöntemde çekler (if ifadeleri gibi) 51 kuruşu geçip (hedefimiz) devam etmenin anlamı yok.

**Ve:** 
Biz ilerledikçe (değişimde) sadece daha büyük veya eşit değerde paralar ekliyoruz. Bu, aramayı daha da kolaylaştırır. 

**SICP.** Bu örnek, klasik bir programlama metni olan Bilgisayar Programlarının Yapısı ve Yorumundan alınmıştır. Özyineleme, bir soruna kaba-arama uygulamanın bir yoludur. Birçok sorun bu şekilde çözülebilir. 

**İpucu:** 
Bulmaca gibi oyun problemlerini çözme, bunun gibi yinelemeli yöntemlerle mükemmel bir öğrenme alıştırmasıdır.

**Özet.** Yinelemeli bir yöntem, olası her seçeneği deneyerek birçok sorunu çözebilir. Buradaki değişim bulmaca, kaba kuvvetli bir şekilde çözülür. Her olası kuruşu her bir yineleme seviyesinde deneriz.


<br>
<h5 id="C200">iç içe geçen listeden len kullanan Python programı</h5><hr>

İç içe geçmiş listeler. İç içe geçmiş koleksiyonları tekrar gözden geçirelim. Bir koleksiyonun kendisi bir elementtir, bu yüzden sadece bir kez sayar. Yerleşik len, tekrarlamaz. Döngü bile değil. Basit. 
 
Böylece: 
Özel kod ile bu şeyleri (yinelemeli, döngü) yapmalıyız. Alt elemanları test edebilir ve len'i kullanabiliriz.

<main class="grid">
  <article>
{% highlight python %}
# A nested list:
list = [1, 2, [4, 5]]

# Shallow count of elements.
print(len(list))
print(len(list[2]))
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
3 <br>
2
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C200">int üzerinden len ile hataya neden olan Python programı</h5><hr>

**Hata.** Herhangi bir değişkenin lenmesini alamayız. Bu program int değişkeninin uzunluğunu almaya çalışır. Ve, işini bitiren bir **TypeError** ile sefil bir şekilde başarısız olur. 

**Not:** 
Kavramsal olarak **len()** sayılabilir birimleri sayar: bir dizgede chars, listedeki öğeler. Bir sayının rakamı vardır, ancak başka 'birimleri' yoktur.

<main class="grid">
  <article>
{% highlight python %}
value = 100

# Cannot take length of int:
length = len(value)
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
length = len(value) <br>
TypeError: object of type 'int' has no len()
</p>
    </div>
  </article>
</main>

<br>
<h5 id="C200">char sayımını, len zamanlayan Python programı</h5><hr>

**Performans.** -collections- Koleksiyonların ve -strings- dizelerin uzunluğu hafızada bir sayı olarak saklanır. Bir döngüde olduğu gibi her erişildiğinde hesaplanmaz. Bu nedenle, len bir döngüden çok daha hızlıdır. 

**Here:** 
Bir döngüde len ile bir dizinin uzunluğuna erişirim. Bu zamanlanmış. Sonra bir for döngüsünü test ediyorum. 

**Sonuç:** 
Len erişmek için çok kere daha hızlıdır. For-loop, yalnızca değerlerinin önem taşıdığı karakterleri sayarken kullanışlıdır.

<main class="grid">
  <article>
{% highlight python %}
import time

value = "characters"

print(time.time())

# Version 1: len
for i in range(0, 1000000):
    length = len(value)
    if length != 10:
        raise Exception()

print(time.time())

# Version 2: count chars
for i in range(0, 1000000):
    length = 0
    for c in value:
        length += 1
    if length != 10:
        raise Exception()

print(time.time())
{% endhighlight %}
  </article>
  <article>
    <div class="text">
      <p>
1406752804.325871   <br>
1406752804.606887   <br>
1406752806.05097    <br>
len      = 0.281 s  <br> 
for-loop = 1.444 s
</p>
    </div>
  </article>
</main>

**Özet.** Bir uzunluk negatif olamaz. Bu yüzden len'i bir döngü sınırı olarak kullanabiliriz: Bu bir liste üzerinde döngü yapmak için uygun bir yoldur. Ancak gerekmediğinde, len kullanmaktan kaçınmak idealdir. 

**Döngü önerisi.** Len kullanmaktan kaçınmak için bir for-in döngü düşünün. Bu döngü yapısı, her öğeyi bir koleksiyonda numaralandıracaktır. Dizin endeksleri gerekli değildir.

<br>
<h5 id="C200">char sayımını, len zamanlayan Python programı</h5><hr>



<!-- a class="w3-btn w3-margin-bottom">Just python 2 'Run'.</a-->
 
 
<!--python interpreter -->
<!--iframe src="https://trinket.io/embed/python/0bdde66575" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe-->

<!-- python interpreter -->
 
<br><br>
<div class="teaser clearfix"></div>
<script src="{{ sitebase.url }}/scripts/dcl-react.js.gz"></script>
<h3  id="C16"><a class="w3-btn w3-margin-bottom">Just python 3 'Run'.</a></h3>
<div data-datacamp-exercise data-lang="python" data-height="auto">
      <code data-type="pre-exercise-code"></code>
      <code data-type="sample-code">
      </code>
      <code data-type="solution"></code>
      <code data-type="sct"></code>
</div>
<div class="w3-container w3-content">

<a class="w3-btn w3-margin-bottom" href="{{ sitebase.url }}/assets/txt/default_python_packages.txt"  style="text-decoration: none; color:#388E3C; cursor:pointer">Python 3.5.2 paket listesine bakınız.</a>
 </div>
<br>

<div class="teaser clearfix"></div>
<div class="w3-panel w3-card w3-light-grey">
  <h3 id="C17">Sözlük Dizini</h3>
  <div class="w3-container w3-white">
    <p>
    <ul class="w3-ul w3-card-4" style="width:85%">
      <li>argument İFADE</li>
      <li>attribute ÖZDEĞER, DEĞER, ÖZNİTELİK, NİTELİK, SİMGE, ATIF</li>
      <li>class	SINIF</li>
      <li>constructor KURUCU</li>
      <li>data attributes BİLGİNİN NİTELİKLERİ</li>
      <li>data VERİ, BİLGİ</li>
      <li>destructor YIKICI </li>
      <li>function İCRACI, FONKSİYON </li>
      <li>Instance EŞLEMEK, EŞLENEK</li>
      <li>instantiation MİSL, ÖZDEŞ </li>
      <li>local YEREL</li>
      <li>member ELEMAN</li>
      <li>method YORDAM</li>
      <li>notation GÖSTERİM</li>
      <li>objects ÖBEK, NESNE</li>
      <li>references ATIF</li>
      <li>standard NORMAL, BENZER</li>
      <li>syntax SÖZDİZİM</li>
      <li>valid GEÇERLİ </li>
      <li>variables DEĞİŞKEN, DEĞER</li>
    </ul>
    </p>
  </div>
</div>
