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
                font-family: 'Life Savers', serif;
                font-feature-settings: "liga" on;
		font-size: 4vw;
		text-decoration: overline;
		text-decoration-color: orange;
	}
	.pop0 {
                font-family: 'Life Savers', serif;
                font-feature-settings: "liga" on;
		font-size: 3vw;
		text-decoration: underline;
		text-decoration-color: orange;
	}
	.pop1 {
                font-family: 'Life Savers', serif;
                font-feature-settings: "liga" on;
		font-size: 2vw;
		text-decoration: overline;
		text-decoration-color: orange;
	}
	.pop2 {
                font-family: 'Life Savers', serif;
                font-feature-settings: "liga" on;
		font-size: 1.75vw;
		text-decoration: overline;
		text-decoration-color: orange;
       
	}

       .python3 {
                font-family: 'Life Savers', serif;
                font-feature-settings: "liga" on;;
		font-size: 1.75vw;
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

 .off {
    font-family: 'Life Savers', serif;
    font-size: 1.5vw;
    font-feature-settings: "liga" off;
    color: #3d3d3d;
  }
 .on {
    font-family: 'Life Savers', serif;
    font-size: 1.5vw;
    font-feature-settings: "liga" on;
    color: #3d3d3d;
  }
 strong {
    font-family: 'Life Savers', serif;
    font-size: 1.7vw;
    font-feature-settings: "liga" on;
    color: #3d3d3d;
  }
 h1 {
    font-family: 'Life Savers', serif;
    font-size: 3.5vw;
    font-feature-settings: "liga" on;
    color: #3d3d3d;
  }
 h4 {
    font-family: 'Life Savers', serif;
    font-size: 0.5vw;
    font-feature-settings: "liga" on;
    color: #3d3d3d;
  }
 h2 {
    font-family: 'Life Savers', serif;
    font-size: 2.5vw;
    font-feature-settings: "liga" on;
    color: #3d3d3d;
  }
 h3 {
    font-family: 'Life Savers', serif;
    font-size: 1.95vw;
    font-feature-settings: "liga" on;
    color: #3d3d3d;
  }
</style>

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/python/Peephole_Long_Short-Term_Memory.svg" alt="Decorators" class="resize" />
  <p><small>Short-Term Memory &bull; Long .</small></p>
</div> 

<br>

<div class="pop">Python Eğitici Rehber</div> 

<br>

+ 1 [Iterables](#D1)
+ 2 [Generators](#D2)
+ 3 [List İçlemi](#D3)
+ 4 [Çoklu Fonksiyon İçlem İfadeleri](#D4)
+ 5 [Düzenli Kurallı İfadeler](#D5)
+ 6 [İstisna işleme](#D6)
+ 7 [Sets](#D7)
+ 8 [Serileştirme](#D8)
+ 9 [Kısmi Fonksiyonlar](#D9)
+ 10 [Kod İçgözlemi](#D10)
+ 11 [Closures](#D11)

 

<br>
<a id="D1"></a>
## 1 Iterables
<br>
Bu bir Python **yield** anahtar kelimesi ile ilgilidir. **yield**, **generator** ve **iterable** ne olduğunu açıklar.

**yield** ne anlama geldiğini anlamak için, **generator** nedir anlamalısınız. Ve **generator** den iterable gelir.

<br>

Bir liste oluşturduğunuzda, öğelerini tek tek okuyabilir ve buna ardışıl işlem denir:

{% highlight python linenos=table %}

mylist = [1, 2, 3]
for i in mylist:
     print(i)
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

1
2
3
{% endhighlight %}

<br>

Mylist ardışıl bir işlemdir. Liste içlemini kullandığınızda, bir liste oluşturur ve böylece ardışık sıralanabilir:

{% highlight python linenos=table %}

mylist = [x*x for x in range(3)]
for i in mylist:
     print(i)

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

0
1
4
{% endhighlight %}

<br>

 **for… in…** için kullanabileceğiniz her şey ardışıl işlemdir: **lists, strings, files…**
Bu ardışıl işlenenler kullanışlıdır, çünkü onları istediğiniz kadar okuyabilirsiniz, ancak tüm değerleri hafızaya kaydedersiniz ve çok fazla değeriniz olduğunda istediğiniz her zaman olmaz.

<br>

Generators ardışıl işlemlerdir, **ancak bunları yalnızca bir kez tekrarlayabilirsiniz**. Tüm değerleri bellekte saklamamaları nedeniyle, **değerleri anında oluştururlar**:

{% highlight python linenos=table %}
   
mygenerator = (x*x for x in range(3))
for i in mygenerator:
   print(i) 

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

0
1
4
{% endhighlight %}

<br>

**[]** yerine **()** kullanmanız dışında tamamen aynıdır. AMA, generator sadece bir kez kullanabileceğinden **for i in mygenerator**'yı ikinci kez gerçekleştiremezsiniz : 0'ı hesaplar, sonra unutur ve 1'i hesaplar ve 4'ü hesaplayarak sonlanır, teker teker.

<br>
### Yield

Fonksiyonun bir generator döndürmesi dışında, **yield**, **return** gibi kullanılan bir anahtar kelimedir. 

{% highlight python linenos=table %}
   
def createGenerator():
    mylist = range(3)
    for i in mylist:
        yield i*i  
        
mygenerator = createGenerator()
for i in mygenerator:
     print(i)

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

0
1
4

In [11]: print(mygenerator)
<generator object createGenerator at 0x7fb00c5ea728>

{% endhighlight %}

<br>

İşte bu işe yaramaz bir örnek, ancak kullanışlıdır, fonksiyonunuzu bildiğiniz zaman, sadece bir kez okumanız gereken büyük bir değerler kümesi döndürecektir.

yield uzmanı olmak için, **fonksiyon gövdesinde yazdığınız kodun çalışmadığını, fonksiyonu çağırdığınızda** anlamanız gerekir. Fonksiyon sadece generator öbeğini döndürür, bu biraz aldatıcıdır.

Daha sonra kodunuzun çalıştırıldığı her seferinde **for** generator u kullanır.

Şimdi zor kısmı:

**for** ilk kez, fonksiyonunuzdan oluşturulan generator öbeğini çağırır, başlangıçtan **yield**'ya ulaşana kadar, fonksiyoninizdeki kodu çalıştıracaktır, daha sonra çevrimin ilk değerini döndürür. Ardından, her bir çağrı, fonksiyonda yazdığınız çevrimi bir kez daha çalıştıracak ve geri dönüş değeri olmayana kadar bir sonraki değeri döndürecektir.

Fonksiyon çalıştığında generator boş olarak kabul edilir, ancak artık **yield** hedefe ulaşmaz. Döngü sonunda sona ermiş  ya da artık “**if / else**” yerine getirmediğiniz için olabilir.
 
Kodunuz açıklandı:

### Generator:

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

 # Burada generator döndürecek olan node öbeğinin yordamını oluşturun:
 def node._get_child_candidates(self, distance, min_dist, max_dist):


   # generator öbeğini her kullandığınızda çağrılacak kod aşağıdadır:
     
     # Hala solda node öbeğinin bir veledi varsa
     # VE eğer distance tamamsa, bir sonraki child döndürür
     if self._leftchild and distance - max_dist < self._median:
                yield self._leftchild

     # Hala sağda node öbeğinin bir veledi varsa
     # VE eğer distance tamamsa, bir sonraki child döndürür
     if self._rightchild and distance + max_dist >= self._median:
                yield self._rightchild

     #  Eğer fonksiyon buraya gelirse, generator boş olarak değerlendirilecektir
     #  ikiden fazla değer yoktur: sol ve sağ child

{% endhighlight %}


<br>

### Caller:

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

 # Boş bir liste ve geçerli öbek atfı ile bir liste oluştur
 result, candidates = list(), [self]


 # candidates üzerinde çevrim (başlangıçta sadece bir öğe içerir)
 while candidates:

     # Son candidate al ve listeden çıkar
     node = candidates.pop()

     # obj ile candidate arasındaki mesafeyi al
     distance = node._get_dist(obj)

     # distance tamam ise, o zaman sonucu doldurabilirsiniz
     if distance <= max_dist and distance >= min_dist:
        result.extend(node._values)

     # candidate listesinde candidate children ekle
     # böylece döngü görünene kadar çalışmaya devam edecek
     # at all the children of the children of the children, etc. of the candidate
     candidates.extend(node._get_child_candidates(distance, min_dist, max_dist))
 
 return result

{% endhighlight %}
<br>
Bu kod birkaç akıllı parça içerir:

-  Döngü bir listede yinelenir, ancak döngü yinelenirken liste genişler. Sonsuz bir döngü ile sonuçlanabildiğiniz için biraz tehlikeli olsa bile, tüm bu iç içe geçmiş verilerin üzerinden gitmenin kısa bir yoludur. Bu durumda, **candidates.extend(node._get_child_candidates(distance, min_dist, max_dist))** jeneratörün tüm değerlerini tüketir, ancak aynı düğümde uygulanmadığı için öncekilerden farklı değerler üretecek yeni genarator nesneleri oluşturmaya devam eder.

-  extend() yordamı, yinelenebilir olmasını bekleyen ve değerlerini listeye ekleyen bir liste öbeği yordamıdır.

Genellikle bir listeyi geçiyoruz:

<br>
{% highlight python linenos=table %} 
a = [1, 2]
b = [3, 4]
a.extend(b)
print(a)

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

[1, 2, 3, 4]

{% endhighlight %}
<br>
Fakat kodunuzda bir generator var, bu da iyi çünkü:

1. Değerleri iki kere okumak zorunda değilsiniz. 
2. Çok fazla child olabilir ve bunların hepsinin hafızada saklanmasını istemezsiniz. 

Ve çalışır çünkü bir yordamın ifadesinin bir liste olup olmadığını Python umursamaz. Python ardışıl işlemleri bekler böylece dizeleri, listeler, tuples ve generator ile çalışacaktır! Bu, ördek tiplemesi olarak adlandırılır ve Python'un neden bu kadar havalı olmasının nedenlerinden biridir. Ama bu başka bir hikaye, başka bir soru için… 

Burada durabilir veya gelişmiş bir generator kullanımını görmek için biraz okuyabilirsiniz:

<br>
{% highlight python linenos=table %} 
class Bank(): # let's create a bank, building ATMs
    crisis = False
    def create_atm(self):
        while not self.crisis:
            yield "$100"
            
hsbc = Bank() # when everything's ok the ATM gives you as much as you want
corner_street_atm = hsbc.create_atm()
print(next(corner_street_atm))

print([next(corner_street_atm) for cash in range(5)])
['$100', '$100', '$100', '$100', '$100']

hsbc.crisis = False # trouble is, even post-crisis the ATM remains empty
print(next(corner_street_atm))

hsbc.crisis = True # crisis is coming, no more money!
print(next(corner_street_atm))

wall_street_atm = hsbc.create_atm() # it's even true for new ATMs
print(next(corner_street_atm))
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

$100
['$100', '$100', '$100', '$100', '$100']
$100
Traceback (most recent call last):
  File "/tmp/sessions/6271a918dfe75b0f/main.py", line 26, in <module>
    print(next(corner_street_atm))
StopIteration

{% endhighlight %}
<br>
Bir kaynağa erişimi kontrol etmek gibi çeşitli şeyler için yararlı olabilir.

<br>
<a id="D2"></a>
## 2 Generators

generator uygulanması çok kolaydır, ancak anlaması biraz zor. 

Generators, ardışıl işlem oluşturmak için kullanılır, ancak farklı bir yaklaşımla. Generators, her seferinde özel olarak ardışık öğeler grubunu döndüren basit fonksiyonlardir. 

Bir öğe kümesi üzerinde ardışıl işlem, for deyimini kullanmaya başladığında, generator çalıştırılır. generator fonksiyon kodu bir **yield**' deyimine ulaştığında, generator, çalışmayı for döngüye geri göndererek, setten yeni bir değer döndürür. Generator fonksiyonu, istediği kadar çok değer(muhtemelen sonsuz) üreterek, her birinin sırayla üretilmesini sağlayabilir.

İşte, 7 rastgele tamsayı döndüren bir generator fonksiyonunun basit bir örneğidir:

{% highlight python linenos=table %}

import random

def lottery():
    # returns 6 numbers between 1 and 40
    for i in range(6):
        yield random.randint(1, 40)

    # returns a 7th number between 1 and 15
    yield random.randint(1,15)

for random_number in lottery():
       print("And the next number is... %d" %(random_number))

{% endhighlight %}

<br>
<h2 class="python3">Python</h2>

{% highlight python %}

And the next number is... 3
And the next number is... 1
And the next number is... 6
And the next number is... 26
And the next number is... 34
And the next number is... 39
And the next number is... 8

{% endhighlight %}

<br>

Bu fonksiyon rasgele sayıların kendi başına nasıl üretileceğine karar verir ve yield bildirimlerini tek tek yürütür, yürütme işlemini ana döngüye geri vermek için duraklar.


### Talim

Fibonacci serisini döndüren bir generator fonksiyonu yazın. Aşağıdaki formül kullanılarak hesaplanırlar: Dizinin ilk iki sayısı her zaman 1'e eşittir ve her ardışık sayı son iki sayının toplamıdır. İpucu: generator fonksiyonunda sadece iki değişken kullanabilir misiniz? Atamaların aynı anda yapılabileceğini unutmayın. Kod; 
<br>
{% highlight python linenos=table %}
a = 1
b = 2
a, b = b, a
print(a,b)
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

2 1

{% endhighlight %}
<br>
aynı anda a ve b değerlerini değiştirir.
<br>
{% highlight python linenos=table %}
# fill in this function
def fib():
    a, b = 1, 1
    while 1:
        yield a
        a, b = b, a + b

# testing code
import types
if type(fib()) == types.GeneratorType:
    print("Good, The fib function is a generator.")

    counter = 0
    for n in fib():
        print(n)
        counter += 1
        if counter == 10:
            break
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Good, The fib function is a generator.
1
1
2
3
5
8
13
21
34
55

{% endhighlight %}
<br>

<a id="D3"></a>
## 3 List İçlemi

List İçlemi, tek bir okunabilir satırda, başka bir listeye dayalı yeni bir liste oluşturan çok güçlü bir araçtır. 

Örneğin, belirli bir cümlede her kelimenin uzunluğunu belirten tamsayıların bir listesini oluşturmamız gerektiğini, ancak yalnızca kelimenin **the** kelimesi olmaması gerektiğini varsayalım.

<br>
{% highlight python linenos=table %}
sentence = "the quick brown fox jumps over the lazy dog"
words = sentence.split()

# word_lengths = [len(word) for word in words if word != "the"]

word_lengths = []
for word in words:
      if word != "the":
          word_lengths.append(len(word))

print("words:",words)

print("word_lengths:", word_lengths)
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

words: ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
word_lengths: [5, 5, 3, 5, 4, 4, 3]

{% endhighlight %}
<br>
Liste içlemini kullanarak, bu işlemi bu notasyona göre basitleştirebiliriz:
<br>
{% highlight python %}
sentence = "the quick brown fox jumps over the lazy dog"
words = sentence.split()
word_lengths = [len(word) for word in words if word != "the"]
print(words)
{% endhighlight %}
<br>

### Talim

Liste içlemini kullanarak, tam sayı olarak listeden yalnızca pozitif sayıları içeren **numbers** listesinden **newlist** adlı yeni bir liste oluşturun.

<br>
{% highlight python linenos=table %}
numbers = [34.6, -203.4, 44.9, 68.3, -12.2, 44.6, 12.7]
newlist = [int(x) for x in numbers if x > 0]
print(newlist)
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

[34, 44, 68, 44, 12]
{% endhighlight %}
<br>

<a id="D4"></a>
## 4 Çoklu Fonksiyon İçlem İfadeleri

Python'daki her fonksiyon, normal olarak bildirilirse, önceden tanımlanmış bir sayıda içlem  alır:

<br>
{% highlight python %}
def myfunction(first, second, third):
    # do something with the 3 variables
    ...
{% endhighlight %}

Aşağıdaki sözdizimini kullanarak değişken sayıda içlem alan fonksiyonları bildirmek mümkündür:

<br>
{% highlight python linenos=table %}
def foo(first, second, third, *therest):
    print("First: %s" %(first))
    print("Second: %s" %(second))
    print("Third: %s" %(third))
    print("And all the rest... %s" %(list(therest)))

foo(1,2,3,4,5)

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

First: 1
Second: 2
Third: 3
And all the rest... [4, 5]

{% endhighlight %}
<br>

Ayrıca, aşağıdaki yazımları kullanarak içlemlerin sırasının önemi olmayacak şekilde fonksiyon içlemlerini anahtar kelimeye göre de göndermek mümkündür. Aşağıdaki kod aşağıdaki çıktıyı verir:

<br>
{% highlight python linenos=table %}
def bar(first, second, third, **options):
    if options.get("action") == "sum":
        print("The sum is: %d" %(first + second + third))

    if options.get("number") == "first":
        return first

result = bar(1, 2, 3, action = "sum", number = "first")
print("Result: %d" %(result))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

The sum is: 6
Result: 1

{% endhighlight %}
<br>

**bar** fonksiyonu 3 içlem  alır. Ek bir **action** içlemi alınırsa ve sayıların toplanması talimatını verirse, toplamı yazdırılır. Alternatif olarak, fonksiyon, aynı zamanda, **number** parametresinin değerinin, fonksiyona iletilmesi halinde **first** e eşit olması durumunda, ilk içlem değerini döndürmesi gerektiğini de bilir.

<br>

### Talim

**foo** ve **bar** fonksiyonlarını doldurun, böylece değişken miktarda içlemi alabilirler (3 veya daha fazla). **foo** fonksiyonu, alınan ekstra içlem değerlerinin miktarını döndürmelidir. **bar** fonksiyonu, **magicnumber** anahtar kelimesi ile içlem 7 değerindeyse **True** ve aksi takdirde **False** değerini döndürmelidir. 

<br>
{% highlight python linenos=table %}
# edit the functions prototype and implementation
def foo(a, b, c, *args):
    return len(args)

def bar(a, b, c, **kwargs):
    return kwargs["magicnumber"] == 7


# test code
if foo(1,2,3,4) == 1:
    print("Good.")
if foo(1,2,3,4,5) == 2:
    print("Better.")
if bar(1,2,3,magicnumber = 6) == False:
    print("Great.")
if bar(1,2,3,magicnumber = 7) == True:
    print("Awesome!")
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Good.
Better.
Great.
Awesome!

{% endhighlight %}

<br>

<a id="D5"></a>
## 5 Düzenli Kurallı İfadeler

Normal İfadeler (bazen regex'e, regex'e veya re'ye kısaltılır) metindeki kalıpları eşleştirmek için kullanılan bir araçtır. Python'da, re modülümüz var. Düzenli ifadeler için uygulamalar geniş kapsamlıdır, ancak oldukça karmaşıktırlar, bu yüzden belirli bir görev için bir regex kullanmayı düşünürken, alternatifleri düşünün ve son çare olarak regex ifadelere gelin.

Bir örnek regex r"^(From|To|Cc).*?python-list@python.org"

<p>Şimdi bir açıklama için: düzeltme işareti ^ bir satırın başında metni eşleştirir. Aşağıdaki grup, (From|To|Cc) kısmına sahip olan kısım, hattın boru | ile ayrılmış kelimelerden biriyle başlaması gerektiği anlamına gelir. Buna OR operatörü denir ve satır gruptaki sözcüklerden herhangi biriyle başlarsa normal ifadeler eşleşir.newline \n karakteri dışında, .*? herhangi bir sayıda karakterle açgözlülükle eşleşmesi anlamına gelir, Açgözlü olmayan bölüm, mümkün olduğunca az tekrarla eşleşmesi anlamına gelir. . karakter yeni olmayan herhangi bir karakter anlamına gelir. *, 0 veya daha fazla kez tekrarlamak için anlamına gelir, ve? karakter açgözlü yapar.</p>

Yani, aşağıdaki satırlar bu **regex** ile eşleşir:
**From: python-list@python.org To: !asp]<,. python-list@python.org**

re yazımı için tam bir başvuru python belgelerinde mevcuttur. 

**proper** e-posta eşleştirme **regex** örneği(egzersizdeki gibi)

<br>
{% highlight python linenos=table %}
# Exercise: make a regular expression that will match an email
import re
def test_email(your_pattern):
    pattern = re.compile(your_pattern)
    emails = ["john@example.com", "python-list@python.org",
               "python-list@python.org", "wha.t.`1an?ug{}ly@email.com",
               "wha.t.`1an?ug{}ly.email.com"]
    for email in emails:
        print(re.match(pattern, email))
        if not re.match(pattern, email):
            print("You failed to match %s" % (email))
        elif not your_pattern:
            print("Forgot to enter a pattern!")
        else:
            print("Pass")
# Your pattern here!
pattern = r"\"?([-a-zA-Z0-9.`?{}]+@\w+\.\w+)\"?"
test_email(pattern)
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

<_sre.SRE_Match object; span=(0, 22), match='python-list@python.org'>
Pass
<_sre.SRE_Match object; span=(0, 22), match='python-list@python.org'>
Pass
<_sre.SRE_Match object; span=(0, 27), match='wha.t.`1an?ug{}ly@email.com'>
Pass
None
You failed to match wha.t.`1an?ug{}ly.email.com

{% endhighlight %}


<br>

<a id="D6"></a>
## 6 İstisna işleme

Programlama yaparken hatalar meydana gelir. Bu sadece bir yaşam gerçeğidir. Belki de kullanıcı kötü girdi verdi. Belki bir ağ kaynağı mevcut değildi. Belki de program belleği bitti. Ya da programcı bir hata yapmış olabilir! 

Python'un hatalara çözümü özel bir durumdur. Daha önce kural dışı bir durum görmüş olabilirsiniz.

{% highlight python %}

print(a)

#error
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'a' is not defined
</module></stdin>
{% endhighlight %}

Hata! 'a' değişkenine değer atamayı unuttum. 

Fakat programı tamamen durdurmak için bazen kural dışı özel bir durum istemezsiniz. Bir kural dışı durum oluştuğunda özel bir şey yapmak isteyebilirsiniz. Bu bir **try/except** bloğunda yapılır.

İşte önemsiz bir örnek: Bir liste üzerinde ardışıl sıralama yaptığınızı varsayalım. 8'den fazla sayıyı ardışıl sıralamanız gerekir, ancak liste kullanıcı girdisinden yapılır ve içinde 8 tane sayı olmayabilir. Listenin sonuna ulaştıktan sonra, geri kalan sayıların 0 olarak yorumlanmasını istiyorsunuz. İşte bunu nasıl yapabilirsin:

<br>
{% highlight python linenos=table %}
def do_stuff_with_number(n):
        print(n)

the_list = (1, 2, 3, 4, 5)

for i in range(8):
    try:
        do_stuff_with_number(the_list[i])
    # Raised when accessing a non-existing index of a list
    except IndexError: 
        do_stuff_with_number(0)
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

1
2
3
4
5
0
0
0

{% endhighlight %}

Orada bu çok zor değildi! Bunu herhangi bir istisna ile yapabilirsiniz.


<br>

<a id="D7"></a>
## 7 Sets

Setler, çift kayıt içermeyen listelerdir. Paragrafta kullanılan kelimelerin listesini toplamak istediğinizi varsayalım:

<br>
{% highlight python linenos=table %}
print(set("my name is Eric and Eric is my name".split()))
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

{'my', 'is', 'Eric', 'name', 'and'}

{% endhighlight %}

**my**, **name**, **is**, **Eric** ve son olarak **and** içeren bir liste basar. Cümlenin geri kalanı halihazırda sette bulunan kelimeleri kullandığı için, ikinci kez eklenmez. 

Setler, diğer setler arasındaki farkları ve kesişimleri hesaplama yeteneğine sahip olduklarından Python'da güçlü bir araçtır. Örneğin, A ve B etkinliklerinde katılımcı listeniz olduğunu varsayalım:

<br>
{% highlight python linenos=table %}

a = set(["Jake", "John", "Eric"])
print(a)
b = set(["John", "Jill"])
print(b)

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

{'John', 'Jake', 'Eric'}
{'John', 'Jill'}

{% endhighlight %}

<br>
Her iki etkinliğe hangi üyelerin katıldıklarını öğrenmek için **intersection** yöntemini kullanabilirsiniz:

<br>
{% highlight python linenos=table %}

a = set(["Jake", "John", "Eric"])
b = set(["John", "Jill"])

print(a.intersection(b))
print(b.intersection(a))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

{'John'}
{'John'}

{% endhighlight %}

<br>
Etkinliklerden yalnızca birine hangi üyelerin katıldıklarını öğrenmek için **symmetric_difference** yöntemini kullanın:

<br>
{% highlight python linenos=table %}

a = set(["Jake", "John", "Eric"])
b = set(["John", "Jill"])

print(a.symmetric_difference(b))
print(b.symmetric_difference(a))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

{'Jill', 'Jake', 'Eric'}
{'Jill', 'Jake', 'Eric'}

{% endhighlight %}

<br>
Hangi üyelerin yalnızca bir etkinliğe katıldığını ve diğerine katılmadığını öğrenmek için **difference** yöntemini kullanın:

<br>
{% highlight python linenos=table %}

a = set(["Jake", "John", "Eric"])
b = set(["John", "Jill"])

print(a.difference(b))
print(b.difference(a))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

{'Jake', 'Eric'}
{'Jill'}

{% endhighlight %}

<br>
Tüm katılımcıların listesini almak için **union** yordamını kullanın:

<br>
{% highlight python linenos=table %}

a = set(["Jake", "John", "Eric"])
b = set(["John", "Jill"])

print(a.union(b))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

{'John', 'Jake', 'Eric', 'Jill'}

{% endhighlight %}

<br>
Aşağıdaki alıştırmada, etkinlik B'ye katılmayan A olayından tüm katılımcıları içeren bir kümeyi yazdırmak için verilen listeleri kullanın.

<br>
{% highlight python linenos=table %}

a = ["Jake", "John", "Eric"]
b = ["John", "Jill"]

A = set(a)
B = set(b)

print(A.difference(B))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

{'Eric', 'Jake'}

{% endhighlight %}

<br>

<a id="D8"></a>
## 8 Serileştirme

Python, JSON'u kodlamak ve kodunu çözmek için yerleşik JSON kitaplıkları sağlar. 

Python 2.5'de, simplejson modülü kullanılır, oysa Python 2.7'de json modülü kullanılır. Bu tercüman Python 2.7 kullandığı için json kullanıyor olacağız. 

Json modülünü kullanabilmek için önce içeri aktarılmalıdır:

JSON verileri için iki temel biçim vardır. Bir dize veya nesne veri yapısında. Python'daki nesne veri yapısı, iç içe geçmiş listelerden ve sözlüklerden oluşur. Nesne veri yapısı, veri yapısından elemanları eklemek, listelemek, aramak ve çıkarmak için python yordamlarının (listeler ve sözlükler için) kullanılmasına izin verir. String formatı esas olarak verileri başka bir programa aktarmak veya bir veri yapısına yüklemek için kullanılır. 

JSON'u bir veri yapısına geri yüklemek için **loads** yordamını kullanın. Bu yordam bir dize alır ve json nesne veri yapısına geri döndürür:

Bir veri yapısını JSON'a kodlamak için **dumps** yordamını kullanın. Bu yordam bir object nesne alır ve bir string dize döndürür:

<br>
{% highlight python linenos=table %}

import json
json_string = json.dumps([1, 2, 3, "a", "b", "c"])
print(json_string)

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

[1, 2, 3, "a", "b", "c"]

{% endhighlight %}

<br>

Python, pickle adı verilen tescilli bir Python veri serileştirme yordamını (ve cPickle olarak adlandırılan daha hızlı bir alternatif) destekler. 

Tam olarak aynı şekilde kullanabilirsiniz.

<br>
{% highlight python linenos=table %}

import pickle
pickled_string = pickle.dumps([1, 2, 3, "a", "b", "c"])
print(pickle.loads(pickled_string))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

[1, 2, 3, 'a', 'b', 'c']

{% endhighlight %}

Bu alıştırmanın amacı, **Me** anahtar-değer çiftiyle JSON dizesini yazdırmaktır: 800 eklendi.

<br>
{% highlight python linenos=table %}

import json

# fix this function, so it adds the given name
# and salary pair to salaries_json, and return it
def add_employee(salaries_json, name, salary):
    salaries = json.loads(salaries_json)
    salaries[name] = salary

    return json.dumps(salaries)

# test code
salaries = '{"Alfred" : 300, "Jane" : 400 }'
new_salaries = add_employee(salaries, "Me", 800)
decoded_salaries = json.loads(new_salaries)
print(decoded_salaries["Alfred"])
print(decoded_salaries["Jane"])
print(decoded_salaries["Me"])

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

300
400
800

{% endhighlight %}

<br>

<a id="D9"></a>
## 9 Kısmi Fonksiyonlar

functools kütüphanesinden kısmi fonksiyonu kullanarak python'da kısmi fonksiyonlar oluşturabilirsiniz. 

Kısmi fonksiyonlar, x parametresiyle bir fonksiyonu daha sınırlı fonksiyon için daha az parametre ve sabit değerler kümesi olan bir fonksiyone dönüştürmeyi sağlar

İçe aktarma gerekli:

<br>
{% highlight python linenos=table %}

from functools import partial

{% endhighlight %}

<br>
Bu kod 8'e dönecek.

<br>
{% highlight python linenos=table %}

from functools import partial

def multiply(x,y):
        return x * y

# create a new function that multiplies by 2
dbl = partial(multiply,2)
print(dbl(4))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

8

{% endhighlight %}

Önemli bir not: varsayılan değerler, değişkenleri soldan değiştirmeye başlar. 2, x'in yerini alacak. dbl(4) çağrıldığında y, 4'e eşit olacak. Bu örnekte bir fark oluşmaz, ancak aşağıdaki örnekte yer almaktadır.

partial() öğesini çağırarak ve func() içindeki ilk üç değişkeni değiştirerek sağlanan fonksiyonu düzenleyin. Ardından, çıkışın 60'a eşit olması için sadece bir giriş değişkeni kullanarak yeni kısmi fonksiyonle yazdırın.

<br>
{% highlight python linenos=table %}

from functools import partial

{% endhighlight %}

<br>
Bu kod 8'e dönecek.

<br>
{% highlight python linenos=table %}

from functools import partial
def func(u,v,w,x):
    return u*4 + v*3 + w*2 + x

p = partial(func,5,6,7)
print(p(8))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

60

{% endhighlight %}


<br>

<a id="D10"></a>
## 10 Kod İçgözlemi

Kod İçgözlemi, ne olduklarını, ne yaptıklarını ve ne bildiklerini bilmek için sınıfları, fonksiyonlari ve anahtar kelimeleri -**classes, functions and keywords**- tahlil etme yeteneğidir.

Python, kod içgözlemi için çeşitli fonksiyonlar ve yardımcı uygulamalar sunar.

<br>

{% highlight python %}

help()
dir() 
hasattr() 
id() 
type() 
repr() 
callable() 
issubclass() 
isinstance() 
__doc__ 
__name__

{% endhighlight %}

Çoğu zaman en önemlisi yardım fonksiyonudur, çünkü diğer fonksiyonların ne yaptığını bulmak için kullanabilirsiniz.

Verilen Vehicle öbeğinin tüm öznitelliklerinin bir listesini yazdırın.

<br>

{% highlight python linenos=table %}

# Define the Vehicle class
class Vehicle:
    name = ""
    kind = "car"
    color = ""
    value = 100.00
    def description(self):
        desc_str = "%s is a %s %s worth $%.2f." % (self.name, self.color,
                                                   self.kind, self.value)
        return desc_str

# Print a list of all attributes of the Vehicle class.
print(dir(Vehicle))
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

['__class__', '__delattr__', '__dict__', '__dir__', 
 '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__',
 '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__',
 '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__',
 '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__',
 'color', 'description', 'kind', 'name', 'value']


{% endhighlight %}

<br>

<a id="D11"></a>
## 11 Closures

Closures, bellekte bulunmasalar bile çevrelediği etki alanı ile ilgili değerleri hatırlayan bir fonksiyon öbeğidir. Hadi adım adım ulaşalım

İlk olarak, bir iç içe fonksiyon, başka bir fonksiyonun içinde tanımlanmış bir fonksiyondur. İç içe geçmiş fonksiyonların çevrelenen etki alanı değişkenlerine erişebildiğini unutmamak çok önemlidir. Bununla birlikte, en azından pythonda, sadece salt okunurlar. Ancak, bu değişkenleri değiştirmek için **nonlocal** anahtar kelimeyi açıkça bu değişkenlerle kullanabilirsiniz.

Örneğin:

<br>

{% highlight python linenos=table %}

def transmit_to_space(message):
    "This is the enclosing function"
    def data_transmitter():
        "The nested function"
        print(message)

    data_transmitter()

print(transmit_to_space("Test message"))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Test message
None

{% endhighlight %}
<br>

 Bu **data_transmitter** fonksiyonu **message** erişebilir olduğu sürece iyi çalışır. **nonlocal** anahtar kelimenin kullanımını göstermek için şunu düşünün.

<br>

{% highlight python linenos=table %}

def print_msg(number):
    def printer():
        "Here we are using the nonlocal keyword"
        nonlocal number
        number=3
        print(number)
    printer()
    print(number)

print_msg(9)

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

3
3

{% endhighlight %}
<br>
nonlocal anahtar kelime olmadan, çıktı **3 9** olurdu, ancak nonlocal kullanımı ile **3 3** alırız, yani **number** değişkeni değiştirilir. 

Şimdi, iç içe geçmiş fonksiyonu çağırmak yerine fonksiyon öbeği içinde nasıl döndürürüz? (fonksiyonların bile öbekler olduğunu unutmayın. (Python.))

Ve fonksiyonu şu şekilde çağırıyoruz:

<br>

{% highlight python linenos=table %}

def transmit_to_space(message):
  "This is the enclosing function"
  def data_transmitter():
      "The nested function"
      print(message)
  return data_transmitter

fun2 = transmit_to_space("Burn the Sun!")
fun2()

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Burn the Sun!

{% endhighlight %}

<br>
**transmit_to_space()** ifadesinin yürütülmesi tamamlanmış olsa da, message oldukça korunmuştur. Verilerin, diğer orijinal işlevlerin bitiminden sonra bile bir koda eklendiği bu teknik, python'da **closure** olarak adlandırılır.

Avantaj: **Closure**, global değişkenlerin kullanılmasını önleyebilir ve bir tür veri gizleme sağlar. (Örneğin. Bir sınıfta birkaç yordam olduğunda, bunun yerine **closure** kullanın).
 
Ayrıca, Python'daki süslü fonksiyonlar,  closure kapatıcıların yaygın kullanımını sağlıyor.

Closure kapatıcıları kullanarak birden çok çarpım fonksiyonunu elde etmek için fonksiyonlar yapmak için iç içe bir döngü ve bir python closure kapatıcı yapın. Bu closure kapatıcıları kullanarak **multiply_with_5()** veya **multiply_with_4()** fonksiyonlarını oluşturmak için fonksiyonlar oluşturabilir.

<br>

{% highlight python linenos=table %}

def multiplier_of(n):
    def multiplier(number):
        return number*n
    return multiplier

multiplywith5 = multiplier_of(5)
print(multiplywith5(9))

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

45

{% endhighlight %}

<br>

<a id="D12"></a>
## 12 Python Dekoratörlerini Örneklerle Öğrenme

<br>

### tarifi

Bir dekoratör, bir fonksiyonu, yordamı veya sınıf tanımını değiştirmek için kullanılan herhangi bir istenebilen Python öbeğidir. Bir dekoratör, tanımlanmış olan orijinal öbeği geçirir ve sonra değiştirilmiş bir öbeği döndürür; bu daha sonra tanımdaki isme bağlanır.

GoF'in Tasarım Desenleri bir dekoratörün amacını şöyle tanımlar:

Bir nesneye dinamik olarak ek sorumluluklar ekleyin. Dekoratörler, işlevselliği uzatarak alt sınıflamaya esnek bir alternatif sunar.

İki yaygın kullanım durumu, daha sonra ele alacağım web çerçevelerinde önbelleğe alma ve erişim denetimleridir.

### ne zaman kullanılmalı?

Birden çok öbeğe ortak davranış eklemek istiyorsanız, dekoratörler kullanarak onu soyutlamayı düşünün. Kodunuzu daha çok DRY yapacak ve kapsülleyecek. Fonksiyonun ana hedefi ile doğrudan ilgili olmayan işlevselliği soyutlamanın güzel bir yoludur. Ekibiniz daha çok yeniden kullanılabilir kodunuz için teşekkür eder.

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/python/Python’s object model explained.png" alt="Decorators" class="resize" />
  <p><small>Python &bull; Decorators.</small></p>
</div> 
  
<style>
img.resize {
  		max-width:100%;
  		max-height:100%;
         }
	
</style>


<br>


### yazım kuralları

Python bir fonksiyonu (veya sınıfı) **@** simgesiyle ve ardından dekoratörle süslemenizi sağlar.

Örneğin:

<br>

{% highlight python %}

@mydecorator
def my_function(args):
    ...

{% endhighlight %}

<br>

Bunun aynı olduğunu unutmayın:

<br>

{% highlight python %}

@mydecorator
def my_function(args):
    ...

{% endhighlight %}

<br>

Sözdizimsel şeker '@' daha özlüdür ve okumak daha kolay olsa da.

Dekoratörler istiflenebilir ve içten dışarıya çalıştırılabilir:

<br>

{% highlight python %}

@second_decorator
@first_decorator
def my_function(args):
    ...

{% endhighlight %}

<br>

Bu oldukça kafa karıştırıcı olabilir, bu yüzden SO üzerinde iyi bir örnek buldum:
 
<br>

{% highlight python linenos=table %}

def makebold(fn):
    def wrapped():
        return "<b>" + fn() + "</b>"
    return wrapped

def makeitalic(fn):
    def wrapped():
        return "<i>" + fn() + "</i>"
    return wrapped

@makebold
@makeitalic
def hello():
    return "hello world"

print hello()  ## returns "<b><i>hello world</i></b>"

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

<b><i>hello world</i></b>

{% endhighlight %}

<br>


<br>


### Dekoratör Temelleri

Python’un işlevleri nesnelerdir

<br>
Dekoratörleri anlamak için, ilk önce işlevlerin Python'daki nesneler olduğunu anlamanız gerekir. Bunun önemli sonuçları var. Neden basit bir örnekle görelim:

<br>

{% highlight python linenos=table %}

def shout(word="yes"):
    return word.capitalize()+"!"

print(shout())
# outputs : 'Yes!'

# As an object, you can assign the function to a variable like any other object 
scream = shout

# Notice we don't use parentheses: we are not calling the function,
# we are putting the function "shout" into the variable "scream".
# It means you can then call "shout" from "scream":

print(scream())
# outputs : 'Yes!'

# More than that, it means you can remove the old name 'shout',
# and the function will still be accessible from 'scream'

del shout
try:
    print(shout())
except NameError, e:
    print(e)
    #outputs: "name 'shout' is not defined"

print(scream())
# outputs: 'Yes!'

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Yes!
Yes!
NameError: name 'shout' is not defined on line 22
Yes!

{% endhighlight %}

<br>

Bunu aklında tut. Kısa bir süre sonra tekrar döneceğiz. 

Python işlevlerinin bir başka ilginç özelliği, başka bir işlevin içinde tanımlanabilmeleridir!

<br>

{% highlight python linenos=table %}

def talk():

    # You can define a function on the fly in "talk" ...
    def whisper(word="yes"):
        return word.lower()+"..."

    # ... and use it right away!
    print(whisper())

# You call "talk", that defines "whisper" EVERY TIME you call it, then
# "whisper" is called in "talk". 
talk()
# outputs: 
# "yes..."

# But "whisper" DOES NOT EXIST outside "talk":

try:
    print(whisper())
except NameError, e:
    print(e)
    #outputs : "name 'whisper' is not defined"*
    #Python's functions are objects
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

yes...
NameError: name 'whisper' is not defined on line 19

{% endhighlight %}

<br>

### Fonksiyon referansları

Tamam, hala burada mı? Şimdi eğlenceli bölüm ... 

Bu işlevlerin nesneler olduğunu gördünüz. Bu nedenle, işlevler 

bir değişkene atanabilir 
başka bir fonksiyonda tanımlanabilir 
Yani bir fonksiyonun başka bir fonksiyona dönüşebileceği anlamına gelir.

<br>

{% highlight python linenos=table %}

def getTalk(kind="shout"):

    # We define functions on the fly
    def shout(word="yes"):
        return word.capitalize()+"!"

    def whisper(word="yes") :
        return word.lower()+"...";

    # Then we return one of them
    if kind == "shout":
        # We don't use "()", we are not calling the function,
        # we are returning the function object
        return shout  
    else:
        return whisper

# How do you use this strange beast?

# Get the function and assign it to a variable
talk = getTalk()

# You can see that "talk" is here a function object:
print(talk)
#outputs : <function shout at 0xb7ea817c>

# The object is the one returned by the function:
print(talk())
#outputs : Yes!

# And you can even use it directly if you feel wild:
print(getTalk("whisper")())
#outputs : yes...

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

<function shout>
Yes!
yes...

{% endhighlight %}

<br>

Fazlası var! 

Bir işlevi döndürebilirseniz, birini parametre olarak geçirebilirsiniz:

<br>

{% highlight python linenos=table %}

def doSomethingBefore(func): 
    print("I do something before then I call the function you gave me")
    print(func())

doSomethingBefore(talk)
#outputs: 
#I do something before then I call the function you gave me
#Yes!.

{% endhighlight %}
<br>







