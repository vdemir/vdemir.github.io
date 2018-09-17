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

+ 1 [Generators](#D1)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.1&nbsp;[Birinci Sınıf Öbekler](#D11)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.2&nbsp;[İç Fonksiyonlar](#D12)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.3&nbsp;[Fonksiyonlardan Dönen Fonksiyonlar](#D13)
    - &nbsp;&nbsp;&nbsp;&nbsp; 1.4&nbsp;[Fonksiyonlar hakkında bilmeniz gerekenler](#D14)
       - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.4.1&nbsp;[Fonksiyonları diğer fonksiyonlar içinde tanımlayın](#D141)

<br>

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

**for** ilk kez, fonksiyonunuzdan oluşturulan generator öbeğini çağırır, başlangıçtan **yield**'ya ulaşana kadar, işlevinizdeki kodu çalıştıracaktır, daha sonra çevrimin ilk değerini döndürür. Ardından, her bir çağrı, fonksiyonda yazdığınız çevrimi bir kez daha çalıştıracak ve geri dönüş değeri olmayana kadar bir sonraki değeri döndürecektir.

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
## 2 Generators

generator uygulanması çok kolaydır, ancak anlaması biraz zor. 

Generators, ardışıl işlem oluşturmak için kullanılır, ancak farklı bir yaklaşımla. Generators, her seferinde özel olarak ardışık öğeler grubunu döndüren basit işlevlerdir. 

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

## 3 List İçlemi

List İçlemi, tek bir okunabilir satırda, başka bir listeye dayalı yeni bir liste oluşturan çok güçlü bir araçtır. 

Örneğin, belirli bir cümlede her kelimenin uzunluğunu belirten tamsayıların bir listesini oluşturmamız gerektiğini, ancak yalnızca kelimenin **the** kelimesi olmaması gerektiğini varsayalım.

<br>
{% highlight python linenos=table %} 
sentence = "the quick brown fox jumps over the lazy dog"
words = sentence.split()
word_lengths = []
for word in words:
      if word != "the":
          word_lengths.append(len(word))
print(words)
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

{% endhighlight %}
<br>






<div class="alert alert-success" role="alert">
<p><strong>Bilgi:</strong> Python ile ilgili olarak bahsettiğimiz 'süslü fonksiyonlar'  fonksiyonları ve yöntemleri daha kolay değiştirmemizi sağlayan Python sözdizimine özel bir değişikliktir. Tasarım desenleri bağlamında, süslü fonksiyonlar, alt sınıfları doğrudan kullanmak zorunda kalmadan bir fonksiyon, yöntem veya sınıfın fonksiyonselliğini dinamik olarak değiştirir. Bu, değiştirmek istemediğiniz fonksiyonlarin fonksiyonselliğini genişletmeniz gerektiğinde idealdir.</p>
</div> 

<div  class="on">Bu kafa karıştırıcı gibi geliyor, ancak özellikle de süslü fonksiyonların nasıl çalıştığına dair birkaç örnek gördükten sonra değil.</div>

<div class="alert alert-primary" role="alert">
<p><strong>Note:</strong> Fonksiyonel programlamada, yan etkiler olmadan sadece saf fonksiyonlarla çalışırsınız (neredeyse). Tamamen fonksiyonel bir dil olmasa da, Python birinci sınıf öbekler gibi fonksiyonlar de dahil olmak üzere birçok fonksiyonel programlama kavramını desteklemektedir.</p>
</div>
 

<div id="D11" class="pop1">1.1 Birinci Sınıf Öbekler</div>
