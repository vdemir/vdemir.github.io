---
layout: post
title:  Python Eğiticisi
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
  body { text-align: center; padding: 150px; }
  h1 { font-size: 30px; }
  body { font: 13px Helvetica, sans-serif; color: #333; }
  article { display: block; text-align: left; width: 450px; margin: 0 auto; }
  a { color: #dc8100; text-decoration: none; }
  a:hover { color: #333; text-decoration: none; }
 
img.resize {
  		max-width:100%;
  		max-height:100%;
         } 

       .python3 {
                font-family: 'Life Savers', serif;
                font-feature-settings: "liga" on;;
		font-size: 1.55vw;
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

<div style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/python/Peephole_Long_Short-Term_Memory.svg" alt="Decorators" class="resize" />
  <p><small>Short-Term Memory &bull; Long .</small></p>
</div> 

<br>
<div class="alert alert-success" role="success">
<p><strong>Python Eğitici Rehber</strong></p>
</div>
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
+ 12 [Python Dekoratörleri](#D12)
+ 13 [Python Exception İşleme](#D13)
+ 14 [Python Düzenli ifadeler](#D14)
+ 15 [Python Çoklu Parçacıklı Programlama- threading](#D15)
+ 16 [Python Llisteleri](#D16)
+ 17 [Python If Bildirimleri](#D17)
+ 18 [Python Fonksiyonlar](#D18)
+ 19 [Python bildirim kapsamı](#D19)
+ 20 [Python threading](#D20)

<a id="D1"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>1 Iterables</strong></p>
</div>
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

<a id="D2"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>2 Generators</strong></p>
</div>
<br>

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

<a id="D3"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>3 List İçlemi</strong></p>
</div>
<br>

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

<a id="D4"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>4 Çoklu Fonksiyon İçlem İfadeleri</strong></p>
</div>
<br>

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
<div class="alert alert-success" role="success">
<p><strong>Talim</strong></p>
</div>
<br> 

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

<a id="D5"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>5 Düzenli Kurallı İfadeler</strong></p>
</div>
<br>

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


<a id="D6"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>6   İstisna işleme</strong></p>
</div>
<br>

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

<a id="D7"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>7 Sets</strong></p>
</div>
<br>

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
Her iki etkinliğe hangi üyelerin katıldıklarını öğrenmek için **intersection** yordamını kullanabilirsiniz:

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
Etkinliklerden yalnızca birine hangi üyelerin katıldıklarını öğrenmek için **symmetric_difference** yordamını kullanın:

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
Hangi üyelerin yalnızca bir etkinliğe katıldığını ve diğerine katılmadığını öğrenmek için **difference** yordamını kullanın:

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

<a id="D8"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>8 Serileştirme</strong></p>
</div>
<br>

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

<a id="D9"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>9 Kısmi Fonksiyonlar</strong></p>
</div>
<br>

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

<a id="D10"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>10 Kod İçgözlemi</strong></p>
</div>
<br>

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

<a id="D11"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>11 Closures</strong></p>
</div>
<br>

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
nonlocal anahtar kelime olmadan, çıktı **3  9** olurdu, ancak nonlocal kullanımı ile **3  3** alırız, yani **number** değişkeni değiştirilir. 

<br>

{% highlight python linenos=table %}

def make_counter():
    i = 0
    def counter(): # counter() is a closure
        nonlocal i
        i += 1
        return i
    return counter

c1 = make_counter()
c2 = make_counter()

print (c1(), c1(), c1(), c2(), c2())
# -> 1 2 3 1 2

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

1 2 3 1 2

{% endhighlight %}

<br>
Öbekler, ekli yordamlarla veridir, veri kapanları veriye eklenmiş fonksiyonlardır.

<br>

{% highlight python linenos=table %}

x = 0

def f():
    def g(): 
        return x * 2
    return g


closure = f()
print(closure()) # 0
x = 2
print(closure()) # 4

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

0
4

{% endhighlight %}

<br>


Bir kapanma **closure** denir çünkü dış (sabit) değişken 'üzerinden kapanır'. Bu sadece bir fonksiyon değil, fonksiyonun oluşturulduğu ortamın bir muhafazasıdır. Aşağıdaki örnekte, x'i değiştirdikten sonra g closure kapağını çağırmak, g içinde x'in değerini de değiştirecektir, çünkü g, x üzerinden kapanır:
<br>
<div class="alert alert-info" role="info">
<p><strong>Not:</strong> Python 3'e nonlocal eklendiğini, python 2.x'in tam okuma-yazma kapatmalarına sahip olmadığına dikkat edin (yani, değişkenler üzerinden kapatılmış olabilir, ancak değerlerini değiştiremezsiniz).</p>
</div>

<br>

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

Closure kapatıcıları kullanarak birden çok çarpım fonksiyonunu elde eden fonksiyonlar yapmak için iç içe bir döngü ve bir python closure kapatıcı yapın. Bu closure kapatıcıları kullanarak **multiply_with_5()** veya **multiply_with_4()** fonksiyonlarını oluşturan fonksiyonlar oluşturabilir.

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

<a id="D12"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>12 Python Dekoratörlerini Örneklerle Öğrenme</strong></p>
</div>
<br>

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

Python işlevlerinin bir başka ilginç özelliği, başka bir fonksiyonun içinde tanımlanabilmeleridir!

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

Bir fonksiyonu döndürebilirseniz, birini parametre olarak geçirebilirsiniz:

<br>

{% highlight python %}

def doSomethingBefore(func): 
    print("I do something before then I call the function you gave me")
    print(func())

doSomethingBefore(talk)
#outputs: 
#I do something before then I call the function you gave me
#Yes!.

{% endhighlight %}
<br>

Eh, sadece dekoratörleri anlamak için gereken her şey var. Görüyorsunuz, dekoratörler **wrappers** dır, bu da fonksiyonlarını değiştirmeden dekore ettikleri fonksiyondan önce ve sonra kodu çalıştırmanıza izin verdikleri anlamına gelir.

<br>

### hünerli dekoratörler

Manuel olarak nasıl yaptınız?

<br>

{% highlight python linenos=table %}

# A decorator is a function that expects ANOTHER function as parameter
def my_shiny_new_decorator(a_function_to_decorate):

    # Inside, the decorator defines a function on the fly: the wrapper.
    # This function is going to be wrapped around the original function
    # so it can execute code before and after it.
    def the_wrapper_around_the_original_function():

        # Put here the code you want to be executed BEFORE the original function is called
        print("Before the function runs")

        # Call the function here (using parentheses)
        a_function_to_decorate()

        # Put here the code you want to be executed AFTER the original function is called
        print("After the function runs")

    # At this point, "a_function_to_decorate" HAS NEVER BEEN EXECUTED.
    # We return the wrapper function we have just created.
    # The wrapper contains the function and the code to execute before and after. It’s ready to use!
    return the_wrapper_around_the_original_function

# Now imagine you create a function you don't want to ever touch again.
def a_stand_alone_function():
    print("I am a stand alone function, don't you dare modify me")

a_stand_alone_function() 
#outputs: I am a stand alone function, don't you dare modify me

# Well, you can decorate it to extend its behavior.
# Just pass it to the decorator, it will wrap it dynamically in 
# any code you want and return you a new function ready to be used:

a_stand_alone_function_decorated = my_shiny_new_decorator(a_stand_alone_function)
a_stand_alone_function_decorated()
#outputs:
#Before the function runs
#I am a stand alone function, don't you dare modify me
#After the function runs

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

<function shout>
I am a stand alone function, don't you dare modify me
Before the function runs
I am a stand alone function, don't you dare modify me
After the function runs

{% endhighlight %}

<br>

Şimdi, muhtemelen "a_stand_alone_function" çağırdığınızda, "a_stand_alone_function_decorated" yerine çağrılır. Bu kolay, "my_shiny_new_decorator" tarafından döndürülen işlevle birlikte "a_stand_alone_function" üzerine yazmanız yeterli:

<br>

{% highlight python %}

a_stand_alone_function = my_shiny_new_decorator(a_stand_alone_function)
a_stand_alone_function()
#outputs:
#Before the function runs
#I am a stand alone function, don't you dare modify me
#After the function runs

# That’s EXACTLY what decorators do!

{% endhighlight %}

<br>

### dekoratörlerin sırrını çözmek

<br>

Önceki örnek, dekoratör sözdizimini kullanarak:

<br>

{% highlight python %}

@my_shiny_new_decorator
def another_stand_alone_function():
    print("Leave me alone")

another_stand_alone_function()
#outputs:  
#Before the function runs
#Leave me alone
#After the function runs


{% endhighlight %}

<br>

Evet, hepsi bu kadar basit. **@decorator** sadece bir kısayol:

"another_stand_alone_function = my_shiny_new_decorator(another_stand_alone_function)"

Dekoratörler, decorator design pattern ninin sadece pythonic bir çeşididir. Geliştirme kolaylaştırmak için (like iterators) Python'da gömülü birkaç klasik tasarım modeli vardır.

Tabii ki, dekoratörler biriktirebilirsiniz:


<br>

{% highlight python linenos=table %}

def bread(func):
    def wrapper():
        print("</''''''\>")
        func()
        print("<\______/>")
    return wrapper

def ingredients(func):
    def wrapper():
        print("#tomatoes#")
        func()
        print("~salad~")
    return wrapper

def sandwich(food="--ham--"):
    print(food)

sandwich()
#outputs: --ham--
sandwich = bread(ingredients(sandwich))
sandwich()
#outputs:
#</''''''\>
# #tomatoes#
# --ham--
# ~salad~
#<\______/>

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

--ham--
</''''''\>
#tomatoes#
--ham--
~salad~
<\______/>

{% endhighlight %}

<br>

Python dekoratör sözdizimini kullanarak:

<br>

{% highlight python %}

@bread
@ingredients
def sandwich(food="--ham--"):
    print(food)

sandwich()
#outputs:
#</''''''\>
# #tomatoes#
# --ham--
# ~salad~
#<\______/>

{% endhighlight %}

<br>

Dekoratörleri belirlediğiniz sıra önemlidir:

<br>

{% highlight python %}

@ingredients
@bread
def strange_sandwich(food="--ham--"):
    print(food)

strange_sandwich()
#outputs:
##tomatoes#
#</''''''\>
# --ham--
#<\______/>
# ~salad~

{% endhighlight %}

<br>

### Şimdi: soruya cevap vermek için ...

Sonuç olarak, soruyu nasıl yanıtlayacağınızı kolayca görebilirsiniz:

<br>

{% highlight python linenos=table %}

# The decorator to make it bold
def makebold(fn):
    # The new function the decorator returns
    def wrapper():
        # Insertion of some code before and after
        return "<b>" + fn() + "</b>"
    return wrapper

# The decorator to make it italic
def makeitalic(fn):
    # The new function the decorator returns
    def wrapper():
        # Insertion of some code before and after
        return "<i>" + fn() + "</i>"
    return wrapper

@makebold
@makeitalic
def say():
    return "hello"

print(say())
#outputs: <b><i>hello</i></b>

# This is the exact equivalent to 
def say():
    return "hello"
say = makebold(makeitalic(say))

print(say())
#outputs: <b><i>hello</i></b>

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

<b><i>hello</i></b>
<b><i>hello</i></b>

{% endhighlight %}

<br>

Artık mutlu olabilirsiniz ya da beyninizi biraz daha yakabilir ve dekoratörlerin gelişmiş kullanımlarını görebilirsiniz.

Dekoratörleri bir sonraki seviyeye taşıma

<br>

### Dekoratör fonksiyonlara içlemleri geçirme

<br>

{% highlight python linenos=table %}

# It’s not black magic, you just have to let the wrapper 
# pass the argument:

def a_decorator_passing_arguments(function_to_decorate):
    def a_wrapper_accepting_arguments(arg1, arg2):
        print("I got args! Look: {0}, {1}".format(arg1, arg2))
        function_to_decorate(arg1, arg2)
    return a_wrapper_accepting_arguments

# Since when you are calling the function returned by the decorator, you are
# calling the wrapper, passing arguments to the wrapper will let it pass them to 
# the decorated function

@a_decorator_passing_arguments
def print_full_name(first_name, last_name):
    print("My name is {0} {1}".format(first_name, last_name))

print_full_name("Peter", "Venkman")
# outputs:
#I got args! Look: Peter Venkman
#My name is Peter Venkman

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

I got args! Look: Peter, Venkman
My name is Peter Venkman

{% endhighlight %}

<br>

### Dekoratöre yordamlar

<br>

Python hakkında güzel bir şey, yöntemlerin ve fonksiyonların gerçekten aynı olmasıdır. Tek fark, yöntemlerin ilk argümanlarının mevcut nesneye (self) bir referans olduğunu beklemeleridir.

Yani aynı şekilde yordamlar için bir dekoratör oluşturabilirsiniz! Kendini göz önünde bulundurmayı unutma.

<br>

{% highlight python linenos=table %}

def method_friendly_decorator(method_to_decorate):
    def wrapper(self, lie):
        lie = lie - 3 # very friendly, decrease age even more :-)
        return method_to_decorate(self, lie)
    return wrapper


class Lucy(object):

    def __init__(self):
        self.age = 32

    @method_friendly_decorator
    def sayYourAge(self, lie):
        print("I am {0}, what did you think?".format(self.age + lie))

l = Lucy()
l.sayYourAge(-3)
#outputs: I am 26, what did you think?

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

I am 26, what did you think?
 
{% endhighlight %}

<br>

Genel amaçlı bir dekoratör yapıyor iseniz - herhangi bir fonksiyona veya yordama başvurursanız, fonksiyon içlemleri ne olursa olsun- o zaman sadece *args, **kwargs kullan:

<br>

{% highlight python linenos=table %}

def a_decorator_passing_arbitrary_arguments(function_to_decorate):
    # The wrapper accepts any arguments
    def a_wrapper_accepting_arbitrary_arguments(*args, **kwargs):
        print("Do I have args?:")
        print(args)
        print(kwargs)
        # Then you unpack the arguments, here *args, **kwargs
        # If you are not familiar with unpacking, check:
        # http://www.saltycrane.com/blog/2008/01/how-to-use-args-and-kwargs-in-python/
        function_to_decorate(*args, **kwargs)
    return a_wrapper_accepting_arbitrary_arguments

@a_decorator_passing_arbitrary_arguments
def function_with_no_argument():
    print("Python is cool, no argument here.")

function_with_no_argument()
#outputs
#Do I have args?:
#()
#{}
#Python is cool, no argument here.

@a_decorator_passing_arbitrary_arguments
def function_with_arguments(a, b, c):
    print(a, b, c)

function_with_arguments(1,2,3)
#outputs
#Do I have args?:
#(1, 2, 3)
#{}
#1 2 3 

@a_decorator_passing_arbitrary_arguments
def function_with_named_arguments(a, b, c, platypus="Why not ?"):
    print("Do {0}, {1} and {2} like platypus? {3}".format(a, b, c, platypus))

function_with_named_arguments("Bill", "Linus", "Steve", platypus="Indeed!")
#outputs
#Do I have args ? :
#('Bill', 'Linus', 'Steve')
#{'platypus': 'Indeed!'}
#Do Bill, Linus and Steve like platypus? Indeed!

class Mary(object):

    def __init__(self):
        self.age = 31

    @a_decorator_passing_arbitrary_arguments
    def sayYourAge(self, lie=-3): # You can now add a default value
        print("I am {0}, what did you think?".format(self.age + lie))

m = Mary()
m.sayYourAge()
#outputs
# Do I have args?:
#(<__main__.Mary object at 0xb7d303ac>,)
#{}
#I am 28, what did you think?

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Do I have args?:
()
{}
Python is cool, no argument here.
Do I have args?:
(1, 2, 3)
{}
1 2 3
Do I have args?:
('Bill', 'Linus', 'Steve')
{'platypus': 'Indeed!'}
Do Bill, Linus and Steve like platypus? Indeed!
Do I have args?:
(<__main__.Mary object at 0x7f7d7c6e2fd0>,)
{}
I am 28, what did you think?
 
{% endhighlight %}

<br>

### fonksiyon içlemleri dekoratöre geçirme

<br>

Harika, şimdi argümanları dekoratörün kendisine aktarma hakkında ne söylerdin? 

Bir dekoratör argüman olarak bir fonksiyonu kabul etmesi gerektiğinden, bu biraz bükülmüş olabilir. Bu nedenle, dekore edilmiş fonksiyonun argümanlarını doğrudan dekoratöre geçiremezsiniz. 

Çözüme acele etmeden önce biraz hatırlatma yazalım:

<br>

{% highlight python linenos=table %}

# Decorators are ORDINARY functions
def my_decorator(func):
    print("I am an ordinary function")
    def wrapper():
        print("I am function returned by the decorator")
        func()
    return wrapper

# Therefore, you can call it without any "@"

def lazy_function():
    print("zzzzzzzz")

decorated_function = my_decorator(lazy_function)
#outputs: I am an ordinary function

# It outputs "I am an ordinary function", because that’s just what you do:
# calling a function. Nothing magic.

@my_decorator
def lazy_function():
    print("zzzzzzzz")

#outputs: I am an ordinary function

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

I am an ordinary function
I am an ordinary function
 
{% endhighlight %}

<br>

Tam olarak aynıdır. **my_decorator** çağrılır. Böylece, **@my_decorator** olduğunda, Python'a 'değişken **my_decorator** tarafından etiketlenmiş' fonksiyonunu çağırmasını söylüyorsunuz.

Bu önemli! Verdiğiniz etiket doğrudan dekoratöre işaret edebilir veya olmayabilir.

<br>

{% highlight python linenos=table %}

def decorator_maker():

    print("I make decorators! I am executed only once: "
          "when you make me create a decorator.")

    def my_decorator(func):

        print("I am a decorator! I am executed only when you decorate a function.")

        def wrapped():
            print("I am the wrapper around the decorated function. "
                  "I am called when you call the decorated function. "
                  "As the wrapper, I return the RESULT of the decorated function.")
            return func()

        print("As the decorator, I return the wrapped function.")

        return wrapped

    print("As a decorator maker, I return a decorator")
    return my_decorator

# Let’s create a decorator. It’s just a new function after all.
new_decorator = decorator_maker()
#outputs:
#I make decorators! I am executed only once: when you make me create a decorator.
#As a decorator maker, I return a decorator

# Then we decorate the function

def decorated_function():
    print("I am the decorated function.")

decorated_function = new_decorator(decorated_function)
#outputs:
#I am a decorator! I am executed only when you decorate a function.
#As the decorator, I return the wrapped function

# Let’s call the function:
decorated_function()
#outputs:
#I am the wrapper around the decorated function. I am called when you call the decorated function.
#As the wrapper, I return the RESULT of the decorated function.
#I am the decorated function.

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

I make decorators! I am executed only once: when you make me create a decorator.
As a decorator maker, I return a decorator
I am a decorator! I am executed only when you decorate a function.
As the decorator, I return the wrapped function.
I am the wrapper around the decorated function. I am called when you call the decorated function. As the wrapper, I return the RESULT of the decorated function.
I am the decorated function.
 
{% endhighlight %}

<br>

Burada sürpriz yok. 

Aynı şeyi tam olarak yapalım, ancak tüm sinir bozucu ara değişkenleri atlayın:


<br>

{% highlight python linenos=table %}

def decorator_maker():

    print("I make decorators! I am executed only once: "
          "when you make me create a decorator.")

    def my_decorator(func):

        print("I am a decorator! I am executed only when you decorate a function.")

        def wrapped():
            print("I am the wrapper around the decorated function. "
                  "I am called when you call the decorated function. "
                  "As the wrapper, I return the RESULT of the decorated function.")
            return func()

        print("As the decorator, I return the wrapped function.")

        return wrapped

    print("As a decorator maker, I return a decorator")
    return my_decorator

 
def decorated_function():
    print("I am the decorated function.")
decorated_function = decorator_maker()(decorated_function)
#outputs:
#I make decorators! I am executed only once: when you make me create a decorator.
#As a decorator maker, I return a decorator
#I am a decorator! I am executed only when you decorate a function.
#As the decorator, I return the wrapped function.

# Finally:
decorated_function()
#outputs:
#I am the wrapper around the decorated function. I am called when you call the decorated function.
#As the wrapper, I return the RESULT of the decorated function.
#I am the decorated function.

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

I make decorators! I am executed only once: when you make me create a decorator.
As a decorator maker, I return a decorator
I am a decorator! I am executed only when you decorate a function.
As the decorator, I return the wrapped function.
I am the wrapper around the decorated function. I am called when you call the decorated function. As the wrapper, I return the RESULT of the decorated function.
I am the decorated function.
 
{% endhighlight %}

<br>

Daha da kısaltalım:

<br>

{% highlight python linenos=table %}

def decorator_maker_with_arguments(decorator_arg1, decorator_arg2):

    print("I make decorators! And I accept arguments: {0}, {1}".format(decorator_arg1, decorator_arg2))

    def my_decorator(func):
        # The ability to pass arguments here is a gift from closures.
        # If you are not comfortable with closures, you can assume its ok,
        # or read: https://stackoverflow.com/questions/13857/can-you-explain-closures-as-they-relate-to-python
        print("I am the decorator. Somehow you passed me arguments: {0}, {1}".format(decorator_arg1, decorator_arg2))

        # Don't confuse decorator arguments and function arguments!
        def wrapped(function_arg1, function_arg2) :
            print("I am the wrapper around the decorated function.\n"
                  "I can access all the variables\n"
                  "\t- from the decorator: {0} {1}\n"
                  "\t- from the function call: {2} {3}\n"
                  "Then I can pass them to the decorated function"
                  .format(decorator_arg1, decorator_arg2,
                          function_arg1, function_arg2))
            return func(function_arg1, function_arg2)

        return wrapped

    return my_decorator

@decorator_maker_with_arguments("Leonard", "Sheldon")
def decorated_function_with_arguments(function_arg1, function_arg2):
    print("I am the decorated function and only knows about my arguments: {0}"
           " {1}".format(function_arg1, function_arg2))

decorated_function_with_arguments("Rajesh", "Howard")
#outputs:
#I make decorators! And I accept arguments: Leonard Sheldon
#I am the decorator. Somehow you passed me arguments: Leonard Sheldon
#I am the wrapper around the decorated function. 
#I can access all the variables 
#   - from the decorator: Leonard Sheldon 
#   - from the function call: Rajesh Howard 
#Then I can pass them to the decorated function
#I am the decorated function and only knows about my arguments: Rajesh Howard
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

I make decorators! I am executed only once: when you make me create a decorator.
As a decorator maker, I return a decorator
I am a decorator! I am executed only when you decorate a function.
As the decorator, I return the wrapped function.
I am the wrapper around the decorated function. I am called when you call the decorated function. As the wrapper, I return the RESULT of the decorated function.
I am the decorated function.
 
{% endhighlight %}

<br>

Hey, onu gördün mü? '@' Sözdizimi ile bir fonksiyon çağrısı kullandık! :-)

Yani, fonksiyon içlemli dekoratörlere dönelim. Eğer dekoratörü anında üretmek için fonksiyonlar kullanabilirsek, fonksiyon içlemlerini bu fonksiyona iletebiliriz, değil mi?

<br>

{% highlight python linenos=table %}

def decorator_maker():

    print("I make decorators! I am executed only once: "
          "when you make me create a decorator.")

    def my_decorator(func):

        print("I am a decorator! I am executed only when you decorate a function.")

        def wrapped():
            print("I am the wrapper around the decorated function. "
                  "I am called when you call the decorated function. "
                  "As the wrapper, I return the RESULT of the decorated function.")
            return func()

        print("As the decorator, I return the wrapped function.")

        return wrapped

    print("As a decorator maker, I return a decorator")
    return my_decorator


@decorator_maker()
def decorated_function():
    print("I am the decorated function.")
#outputs:
#I make decorators! I am executed only once: when you make me create a decorator.
#As a decorator maker, I return a decorator
#I am a decorator! I am executed only when you decorate a function.
#As the decorator, I return the wrapped function.

#Eventually: 
decorated_function()
#outputs:
#I am the wrapper around the decorated function. I am called when you call the decorated function.
#As the wrapper, I return the RESULT of the decorated function.
#I am the decorated function.

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

I make decorators! And I accept arguments: Leonard, Sheldon
I am the decorator. Somehow you passed me arguments: Leonard, Sheldon
I am the wrapper around the decorated function.
I can access all the variables
	- from the decorator: Leonard Sheldon
	- from the function call: Rajesh Howard
Then I can pass them to the decorated function
I am the decorated function and only knows about my arguments: Rajesh Howard
 
{% endhighlight %}

<br>

İşte: fonksiyon içlemleri ile bir dekoratör. fonksiyon içlemleri değişken olarak ayarlanabilir:

<br>

{% highlight python linenos=table %}

def decorator_maker():

    print("I make decorators! I am executed only once: "
          "when you make me create a decorator.")

    def my_decorator(func):

        print("I am a decorator! I am executed only when you decorate a function.")

        def wrapped():
            print("I am the wrapper around the decorated function. "
                  "I am called when you call the decorated function. "
                  "As the wrapper, I return the RESULT of the decorated function.")
            return func()

        print("As the decorator, I return the wrapped function.")

        return wrapped

    print("As a decorator maker, I return a decorator")
    return my_decorator


c1 = "Penny"
c2 = "Leslie"

@decorator_maker_with_arguments("Leonard", c1)
def decorated_function_with_arguments(function_arg1, function_arg2):
    print("I am the decorated function and only knows about my arguments:"
           " {0} {1}".format(function_arg1, function_arg2))

decorated_function_with_arguments(c2, "Howard")
#outputs:
#I make decorators! And I accept arguments: Leonard Penny
#I am the decorator. Somehow you passed me arguments: Leonard Penny
#I am the wrapper around the decorated function. 
#I can access all the variables 
#   - from the decorator: Leonard Penny 
#   - from the function call: Leslie Howard 
#Then I can pass them to the decorated function
#I am the decorated function and only know about my arguments: Leslie Howard

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

I make decorators! And I accept arguments: Leonard, Penny
I am the decorator. Somehow you passed me arguments: Leonard, Penny
I am the wrapper around the decorated function.
I can access all the variables
	- from the decorator: Leonard Penny
	- from the function call: Leslie Howard
Then I can pass them to the decorated function
I am the decorated function and only knows about my arguments: Leslie Howard
 
{% endhighlight %}

<br>

Gördüğünüz gibi, bu hileyi kullanarak argümanları herhangi bir fonksiyon gibi dekoratöre aktarabilirsiniz. İsterseniz * args, ** kwargs kullanabilirsiniz. Ancak, dekoratörlerin sadece bir kez çağrıldığını unutmayın. Sadece Python, betiği içe aktardığında. Sonra argümanları dinamik olarak ayarlayamazsınız. "import x" yaptığınızda, fonksiyon zaten dekore edilmiştir, böylece hiçbir şeyi değiştiremezsiniz.

### Pratik yapalım: decorating a decorator

Tamam, bir bonus olarak, herhangi bir dekoratörün herhangi bir bağımsız değişkeni kabul etmesi için size bir pasaj vereceğim. Sonuçta, argümanları kabul etmek için, başka bir fonksiyon kullanarak dekoratörü yarattık. 

Dekoratörü sardık. 

Son zamanlarda bu sarılmış fonksiyonu gördük başka bir şey? 

Ah evet, dekoratörler! 

Haydi biraz eğlenelim ve dekoratörler için bir dekoratör yazalım:

<br>

{% highlight python %}

def decorator_with_args(decorator_to_enhance):
    """ 
    This function is supposed to be used as a decorator.
    It must decorate an other function, that is intended to be used as a decorator.
    Take a cup of coffee.
    It will allow any decorator to accept an arbitrary number of arguments,
    saving you the headache to remember how to do that every time.
    """

    # We use the same trick we did to pass arguments
    def decorator_maker(*args, **kwargs):

        # We create on the fly a decorator that accepts only a function
        # but keeps the passed arguments from the maker.
        def decorator_wrapper(func):

            # We return the result of the original decorator, which, after all, 
            # IS JUST AN ORDINARY FUNCTION (which returns a function).
            # Only pitfall: the decorator must have this specific signature or it won't work:
            return decorator_to_enhance(func, *args, **kwargs)

        return decorator_wrapper

    return decorator_maker
 
{% endhighlight %}

<br>

Aşağıdaki gibi kullanılabilir:

<br>

{% highlight python linenos=table %}

def decorator_with_args(decorator_to_enhance):
    """ 
    This function is supposed to be used as a decorator.
    It must decorate an other function, that is intended to be used as a decorator.
    Take a cup of coffee.
    It will allow any decorator to accept an arbitrary number of arguments,
    saving you the headache to remember how to do that every time.
    """

    # We use the same trick we did to pass arguments
    def decorator_maker(*args, **kwargs):

        # We create on the fly a decorator that accepts only a function
        # but keeps the passed arguments from the maker.
        def decorator_wrapper(func):

            # We return the result of the original decorator, which, after all, 
            # IS JUST AN ORDINARY FUNCTION (which returns a function).
            # Only pitfall: the decorator must have this specific signature or it won't work:
            return decorator_to_enhance(func, *args, **kwargs)

        return decorator_wrapper

    return decorator_maker


# You create the function you will use as a decorator. And stick a decorator on it :-)
# Don't forget, the signature is "decorator(func, *args, **kwargs)"
@decorator_with_args 
def decorated_decorator(func, *args, **kwargs): 
    def wrapper(function_arg1, function_arg2):
        print("Decorated with {0} {1}".format(args, kwargs))
        return func(function_arg1, function_arg2)
    return wrapper

# Then you decorate the functions you wish with your brand new decorated decorator.

@decorated_decorator(42, 404, 1024)
def decorated_function(function_arg1, function_arg2):
    print("Hello {0} {1}".format(function_arg1, function_arg2))

decorated_function("Universe and", "everything")
#outputs:
#Decorated with (42, 404, 1024) {}
#Hello Universe and everything

# Whoooot!
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Decorated with (42, 404, 1024) {}
Hello Universe and everything

{% endhighlight %}

<br>

Biliyorum, 'özçağrıyı anlamadan önce, özçağrıyı anlamanız gerekir' diyen bir adam dinledikten sonra en son bu duyguya sahiptiniz. Ama şimdi, bunu anlamak konusunda kendini iyi hissetmiyor musun?

### En iyi uygulamalar: dekoratörler

-  Dekoratörler Python 2.4'te tanıtıldı, bu yüzden kodunuzun> = 2.4'te çalıştırılacağından emin olun.
-  Dekoratörler fonksiyon çağrısını yavaşlatır. Bunu aklında tut.
-  Bir fonksiyon süslenmişse süslülük özellğini kaldıramazsınız. (Kaldırılabilen dekoratörler yaratma yetileri vardır, ancak kimse bunları kullanmaz.) Böylece bir fonksiyon süslendiğinde, tüm kodlar için dekore edilmiştir.
-  Dekoratörler, hata ayıklamalarını zorlaştıracak işlevleri sarar. (Bu Python'dan daha iyi olur> = 2.5; aşağıya bakın.)
￼
(Eğlenceli gerçek: functools.wraps() bir dekoratör!)

<br>

{% highlight python linenos=table %}

# For debugging, the stacktrace prints you the function __name__
def foo():
    print("foo")

print(foo.__name__)
#outputs: foo

# With a decorator, it gets messy    
def bar(func):
    def wrapper():
        print("bar")
        return func()
    return wrapper

@bar
def foo():
    print("foo")

print(foo.__name__)
#outputs: wrapper

# "functools" can help for that

import functools

def bar(func):
    # We say that "wrapper", is wrapping "func"
    # and the magic begins
    @functools.wraps(func)
    def wrapper():
        print("bar")
        return func()
    return wrapper

@bar
def foo():
    print("foo")

print(foo.__name__)
#outputs: foo
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

foo
wrapper
foo

{% endhighlight %}

<br>

### Dekoratörler nasıl yararlı olabilir?

<br>

Şimdi büyük soru: Dekoratörleri ne için kullanabilirim? 

Güzel ve güçlü görünüyorsun, ama pratik bir örnek harika olurdu. Eh, 1000 olasılık var. Klasik kullanımlar, harici(değiştiremezsin) bir kütüphaneden veya hata ayıklamadan(bunu geçici olarak değiştirmek istemezsiniz) bir fonksiyon davranışını genişletmektedir.


Bir DRY’nın içinde çeşitli işlevleri genişletmek için bunları kullanabilirsiniz:

<br>

{% highlight python linenos=table %}

def benchmark(func):
    """
    A decorator that prints the time a function takes
    to execute.
    """
    import time
    def wrapper(*args, **kwargs):
        t = time.clock()
        res = func(*args, **kwargs)
        print("{0} {1}".format(func.__name__, time.clock()-t))
        return res
    return wrapper


def logging(func):
    """
    A decorator that logs the activity of the script.
    (it actually just prints it, but it could be logging!)
    """
    def wrapper(*args, **kwargs):
        res = func(*args, **kwargs)
        print("{0} {1} {2}".format(func.__name__, args, kwargs))
        return res
    return wrapper


def counter(func):
    """
    A decorator that counts and prints the number of times 
    a function has been executed
    """
    def wrapper(*args, **kwargs):
        wrapper.count = wrapper.count + 1
        res = func(*args, **kwargs)
        print("{0} has been used: {1}x"
                 .format(func.__name__, wrapper.count))
        return res
    wrapper.count = 0
    return wrapper

@counter
@benchmark
@logging
def reverse_string(string):
    return ''.join(reversed(string))

print(reverse_string("Able was I ere I saw Elba"))
print(reverse_string("A man, a plan, a canoe, pasta"))

#outputs:
#reverse_string ('Able was I ere I saw Elba',) {}
#wrapper 0.0
#wrapper has been used: 1x 
#ablE was I ere I saw elbA
#reverse_string ('A man, a plan, a canoe, pasta',) {}
#wrapper 0.0
#wrapper has been used: 2x
#atsap ,eonac a ,nalp a ,nam A
{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

reverse_string ('Able was I ere I saw Elba',) {}
wrapper 6.400000000000156e-05
wrapper has been used: 1x
ablE was I ere I saw elbA
reverse_string ('A man, a plan, a canoe, pasta',) {}
wrapper 1.6000000000002124e-05
wrapper has been used: 2x
atsap ,eonac a ,nalp a ,nam A

{% endhighlight %}

<br>
Tabii ki dekoratörler ile iyi olan şey, onları hemen hemen her şeyi yeniden yazmadan kullanabilmenizdir. DRY dedim:

Python'un kendisi birkaç dekoratörler sunar: property, staticmethod, vb.

-  Django, önbelleğe alma ve görüntüleme izinlerini yönetmek için dekoratörler kullanır.
-  Eşzamanlı olmayan fonksiyon çağrıları yapmak.

Bu gerçekten büyük bir oyun alanı.

<a id="D13"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>13 Python İstisnası İşleme: Öğrenme İçin Hızlı Bir Kılavuz</strong></p>
</div>
<br>

Python istisna işlemeyi öğrenmek için bu öğreticiyi okuyun. Python istisna işlemeyi öğrenmek için bu öğreticiyi okuyun. Programlarınızda **try, except**  ve son ifadeleri nasıl kullanacağınızı anlamanıza yardımcı olmalıdır. Hemen başlamak için verilen örnekleri gözden geçirin.

İstisna yönetimi, sağlam ve kararlı uygulamalar oluşturmak için çok önemlidir. Programcıları temiz, okunabilir ve hatasız bir kod yazmaya teşvik eder. 

Kodun en iyisinin bile çalışma zamanında beklenmedik şekilde davranabileceğini kabul edersiniz. Eksik bir konfigürasyon veya yürütme ortamında bir değişiklik nedeniyle veya kullanıcı yanlış girdiyle başlamış olabilir. 

Bu hatalardan bazıları programın aniden sonlandırılmasına neden olabilir. Python istisnasının ele alınmasıyla, yukarıdaki sorunları yönetebilir ve kodumuzun aralıklı hatalarını önleyebiliriz.

Her şeyden önce, bir hata ve istisna arasındaki farkı anlamalıyız. Sonuç olarak, size Python istisna işleminin esaslarını öğreteceğiz.

### Python İstisna İşleme: Hata Vs. İstisna

<br>

#### Hata Nedir?

Hata, programda yanlış giden, örneğin sözdizimsel bir hata gibi bir şeydir. 

Derleme zamanında gerçekleşir. Bir örnek görelim.

<br>

{% highlight python %}

In [2]: if a<5
  File "<stdin>", line 1
    if a<5
         ^
SyntaxError: invalid syntax

{% endhighlight %}

<br>

#### İstisna Nedir?

Hatalar çalışma zamanında da ortaya çıkar ve bunları istisna olarak biliriz. Bir istisna, bir programın yürütülmesi sırasında gerçekleşen ve programın talimatlarının normal akışını bozan bir olaydır. 

Genel olarak, bir Python betiği, başa çıkamayacağı bir hata durumuyla karşılaştığında, bir istisna ortaya çıkarır. 

Bir Python betiği bir istisna oluşturduğunda, bir istisna nesnesi oluşturur. 

Genellikle, betik hemen istisnayı ele alır. Eğer böyle olmazsa, o zaman program, nerede olduğu ile birlikte hatanın bir izini sonlandıracak ve yazdıracaktır.

<br>

{% highlight python %}

In [1]: 1 / 0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    1 / 0
ZeroDivisionError: division by zero

{% endhighlight %}

<br>

### Try-Except İle İstisnalar Nasıl Kullanılır?

#### Try-Except deyimi nedir?

Python programlarında istisna işlemlerini sağlamak için try-except ifadesini kullanırız. 

Try bloğunun içinde, bir istisna oluşturabilecek kodu yazarsınız. 

Ve istisnaları ele geçiren veya yakalayan kod, istisna dışı maddeye koyarız.

#### Python İstisnası İşleme Sözdizimi

Aşağıda, bir Python try-except-else bloğunun sözdizimi verilmiştir.

<br>

{% highlight python %}

try:
	You do your operations here;
	......................
except ExceptionI:
	If there is ExceptionI, then execute this block.
except ExceptionII:
	If there is ExceptionII, then execute this block.
	......................
else:
	If there is no exception then execute this block.

{% endhighlight %}

<br>

İşte Python try ifadesini etkili bir şekilde kullanmak için bir kontrol listesi.

-  Tek bir deneme ifadesi, gereksinime bağlı olarak birden çok istisna ifadesine sahip olabilir. Bu durumda, bir try bloğu farklı türde istisnalar atabilecek ifadeler içerir.
-  Tüm olası istisnai durumları ele alabilen genel bir istisna maddesi de ekleyebiliriz.
-  İstisnai maddeden sonra bir başka maddeyi bile ekleyebiliriz. Try bloğundaki kod bir istisna oluşturmuyorsa, diğer bloktaki talimatlar yürütülür.

Python İstisna İşleme Örnekleri

Python try-except kullanımını anlamak için örnek bir kod alalım.

<br>

{% highlight python %}

try:
   fob = open("test", "w")
   fob.write("This is my test file for exception handling!!")
except IOError:
   print "Error: can\'t find the file or read data"
else:
   print "Write operation is performed successfully on the file"
   fob.close()

{% endhighlight %}

<br>

Yukarıdaki kod aşağıdaki çıktıyı üretir.

<br>

{% highlight python %}

Write operation is performed successfully on the file.

{% endhighlight %}

<br>

READ modunda bir dosya açmaya çalıştığımız başka bir örnek verelim. 

Üzerinde bir WRITE işlemi yapacağız. Uygulama üzerine, bir istisna atar.

<br>

{% highlight python %}

try:
   fob = open("test", "r")
   fob.write("It's my test file to verify exception handling in Python!!")
except IOError:
   print "Error: can\'t find the file or read data"
else:
   print "Write operation is performed successfully on the file"

{% endhighlight %}

<br>

Yukarıdaki kod aşağıdaki çıktıyı üretir.

<br>

{% highlight python %}

Error: can't find file or read data

{% endhighlight %}

<br>

#### İstisnai Her Türlü İstisnaları İşleme

Çıplak bir “istisna” maddesi kullanırsak, her türlü istisnaları yakalardı. 

Bununla birlikte, ne iyi bir programlama pratiği ne de başka biri bunu önermiyor. 

Böyle bir Python try-except bloğunun her tür istisnayı ele alabilmesidir. Ancak, programcının istisnaya neden olan sorunu bulmasına yardımcı olmaz. 

Tüm istisnaları nasıl yakalayacağınızı görmek için aşağıdaki kodu inceleyebilirsiniz.

<br>

{% highlight python %}

try:
   You do your operations here;
   ......................
except:
   If there is any exception, then execute this block.
   ......................
else:
   If there is no exception then execute this block.

{% endhighlight %}

<br>

#### İstisna İle Birden Çok Özel Durumun Kullanılması

Aynı istisna dışında, birden fazla istisna tanımlayabiliriz. Bu, Python yorumlayıcısının eşleşen bir istisna bulması durumunda, istisnai şartlar altında yazılan kodun çalıştırılacağı anlamına gelir. 

Kısaca, fıkra hariç bu şekilde tanımladığımızda, aynı kod parçasının farklı istisnalar atmasını bekliyoruz. Ayrıca, her durumda aynı eylemi almak istiyoruz. 

Lütfen aşağıdaki örneğe bakınız.

<br>

{% highlight python %}

try:
   You do your operations here;
   ......................
except(Exception1[, Exception2[,...ExceptionN]]]):
   If there is any exception from the given exception list,
   then execute this block.
   ......................
else:
   If there is no exception then execute this block

{% endhighlight %}

<br>

### Try-Finally ile İstisnalar Nasıl Ele Geçirilir?

#### Try-Finally Bildirimi Nedir?

Ayrıca Python istisna işlemlerini try-finally ifadesinin yardımıyla etkinleştirebiliriz.

Try bloğu ile, “finally” bloğunu tanımlama seçeneğine de sahibiz. Bu fıkra, yürütmek istediğimiz ifadeleri tanımlamaya izin verir, ancak try bloğunun bir istisna oluşturup oluşturmadığı önemli değildir. 

Bu özellik genellikle dış kaynak sağlarken resim içinde gelir. 

İşte burada yardım için kodlama snippet'i.

<br>

{% highlight python %}

try:
   You do your operations here;
   ......................
   Due to any exception, this may be skipped.
finally:
   This would always be executed.
   ......................

{% endhighlight %}

<br>

Examples

Bir kritik nokta, her bir try bloğu ile ya bir “except” ya da “finally” cümlesi tanımlayabilmemizdir. Bunları birlikte kullanamazsın. Ayrıca, “else” maddesini “finally” cümlesiyle birlikte kullanmamalısınız.

Daha fazla netlik elde etmek için bir örnek verelim.

<br>

{% highlight python %}

try:
    fob = open('test', 'w')
    fob.write("It's my test file to verify try-finally in exception handling!!"
              )
    print ('try block executed')
finally:
    fob.close()
    print ('finally block executed')

{% endhighlight %}


<br>

İstisna oluşmazsa, aşağıdaki çıktıyı görürsünüz.

<h2 class="python3">Python</h2>

{% highlight python %}

try block executed
finally block executed

{% endhighlight %}

<br>

Dosyayı (READ) modunda açtığımızı ve üzerinde bir yazma işlemi yapmaya çalıştığımızı varsayalım. Böyle bir durumda, aşağıdaki kod istisnayı ele almaya yardımcı olacaktır.

<br>

{% highlight python %}

try:
    fob = open('test', 'r')
    try:
        fob.write("It's my test file to verify try-finally in exception handling!!"
                  )
        print ('try block executed')
    finally:
        fob.close()
        print ('finally block executed to close the file')
except IOError:
    print ("Error: can\'t find file or read data")

{% endhighlight %}


<br>

Bu durumda, interpreter bir istisna oluşturacak ve aşağıdaki çıktı gösterilecektir.

<h2 class="python3">Python</h2>

{% highlight python %}

finally block executed to close the file
Error: can't find file or read data

{% endhighlight %}

<br>

Bir kod, bir try bloğunda bir istisna oluşturduğunda, yürütme hemen “finally” bloğuna geçer. “finally” bloğundaki tüm ifadeler çalıştırıldıktan sonra istisna, yürütme için “except” bloğuna devam eder. Fakat “try-except” ifadesinin bir sonraki yüksek tabakasını sunmalıdır.

### Argümanlar ile İstisnaya Yükseltme

#### raise nedir
raise anahtar kelimesini kullanarak bir istisna oluşturabiliriz. 

Ayrıca isteğe bağlı olarak değerleri istisna geçirebilir ve neden oluştuğunu belirtebiliriz.

#### raise sözdizimini 

<br>
{% highlight python %}

raise [Exception [, args [, traceback]]]

{% endhighlight %}

<br>

Nerede,

-  “Exception” altında - adını belirtin.
-  “args” isteğe bağlıdır ve istisna argümanının değerini temsil eder.
-  Son argüman olan “traceback” de isteğe bağlıdır ve eğer varsa, istisna için kullanılan traceback nesnesidir.

Bunu açıklığa kavuşturmak için bir örnek verelim.

#### Raise Örneği

<br>
{% highlight python %}

try:
    print (1/0)

except ZeroDivisionError:
    print ("You can't divide by zero, you're silly.")


{% endhighlight %}

<br>

<h2 class="python3">Python</h2>

{% highlight python %}

You can't divide by zero, you're silly.

{% endhighlight %}

<br>

### Python'da Özel İstisnalar Yaratın

#### Özel İstisna Nedir?

Özel bir istisna, programcının kendini yarattığı bir istisnadır. 

Yeni bir sınıf ekleyerek yapar. Buradaki hile, özel istisna sınıfını temel istisna sınıfından türetmektir. 

Yerleşik istisnaların çoğunun da denk düşen bir sınıfı vardır.

#### Python'da İstisna Sınıfı Oluşturun

<br>
{% highlight python %}

class UserDefinedError(Exception):
     pass

{% endhighlight %}

<br>

<h2 class="python3">Python</h2>

{% highlight python %}

In [4]: raise UserDefinedError
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    raise UserDefinedError
UserDefinedError

In [5]: raise UserDefinedError("An error occurred")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    raise UserDefinedError("An error occurred")
UserDefinedError: An error occurred

{% endhighlight %}

<br>

Yukarıdaki ufak kod parçasında, kullanıcı tanımlı bir istisna sınıfı oluşturduğumuzu görebilirsiniz, “**UserDefinedError.**” Bu, ana Exception sınıfını ebeveyn olarak kullanıyor. Bu nedenle, kullanıcı tanımlı yeni istisna sınıfı, diğer istisna sınıflarının yaptığı gibi istisnalar oluşturacaktır, yani isteğe bağlı bir hata mesajıyla “**raise**” ifadesini çağırarak.

Bir örnek alalım.

#### Misal

Bu örnekte, bir programda kullanıcı tanımlı bir istisnayı ve yakalama hatalarını nasıl yükselteceğimizi göstereceğiz. 

Bu program, kullanıcının yalnızca kayıtlı alfabeyi girene kadar tekrar tekrar bir alfabe girmesini ister. 

Yardım için, program kullanıcıya doğru bir ipucu verir, böylece doğru alfabeyi bulabilir. Ayrıca, tahminin kayıtlı alfabeden daha yüksek veya daha az olup olmadığını kontrol edebilir.

<br>
{% highlight python  linenos=table %}

#define Python user-defined exceptions
class Error(Exception):
   """Base class for other exceptions"""
   pass
 
class InputTooSmallError(Error):
   """Raised when the entered alpahbet is smaller than the actual one"""
   pass
 
class InputTooLargeError(Error):
   """Raised when the entered alpahbet is larger than the actual one"""
   pass

#our main program
#user guesses an alphabet until he/she gets it right
 
#you need to guess this alphabet
alphabet = 'm'
 
while True:
   try:
       apb =  input("Enter an alphabet: ")
       if apb < alphabet:
           raise InputTooSmallError
       elif apb > alphabet:
           raise InputTooLargeError
       break
   except InputTooSmallError:
       print("The entered alphabet is too small, try again!")
       print('')
   except InputTooLargeError:
       print("The entered alphabet is too large, try again!")
       print('')
 
print("Congratulations! You guessed it correctly.")

{% endhighlight %}
<br>
Bu programı farklı girişler sağlayarak test edelim.
<br>

<h2 class="python3">Python</h2>

{% highlight python %}

Enter an alphabet:  f
The entered alphabet is too small, try again!

Enter an alphabet:  n
The entered alphabet is too large, try again!

Enter an alphabet:  m
Congratulations! You guessed it correctly.

{% endhighlight %}

<br>

Böylece, bu programda **Error** olarak adlandırılan bir taban sınıfını tanımladığımızı görebilirsiniz. Temel sınıftan türetilen iki istisna (“**InputTooSmallError**” ve “**InputTooLargeError**”) kaldırır. Python programlamasında kullanıcı tanımlı istisnaları tanımlamanın standart yolu.

<br>
### Python Yerleşik İstisnaları

<br>

| istisna  | Hata Nedeni  |
|---|---|
| AirthmeticError  | Sayısal hesaplamadaki hatalar içindir.  |
| AssertionError  | Eğer assert ifadesi başarısız olursa.  |
| AttributeError  | Bir özellik ataması veya referans başarısız olduğunda.  |
| EOFError  | Giriş yoksa veya dosya tanıtıcısı EOF'de.  |
| Exception  | Tüm istisnalar için temel sınıftır.  |
| EnvironmentError  | Python ortamının dışında oluşan hatalar için.  |
| FloatingPointError  | Kayan nokta işlemi başarısız olduğunda oluşur.  |
| GeneratorExit  | Bir generator <close()> method yordamı çağrılırsa.  |
| ImportError  | İçe aktarılan modül mevcut olmadığında oluşur.  |
| IOError  | Bir giriş / çıkış işlemi başarısız olursa.  |
| IndexError  | Bir dizinin indeksi aralık dışında olduğunda.  |
| KeyError  | Belirtilen anahtar sözlüğünde mevcut değilse.  |
| KeyboardInterrupt  | Kullanıcı bir interrupt tuşuna bastığında (Ctrl + c veya delete).  |
| MemoryError  | Bir işlem hafıza dışına taşarsa.  |
| NameError  | Bir değişken yerel veya global kapsamda mevcut olmadığında.  |
| NotImplementedError  | Soyut bir yordam mevcut değilse.  |
| OSError  | Bir sistem işlemi başarısız olduğunda.  |
| OverflowError  | Bir aritmetik işlemin sonucu değer aralığını aşarsa oluşur.  |
| ReferenceError  | Zayıf referans proxy'si, toplanan bir çöp referansına eriştiğinde.  |
| RuntimeError  | Oluşturulan hata herhangi bir kategoriye girmiyorsa.  |
| StandardError  | <StopIteration> ve <SystemExit> hariç tüm yerleşik istisnalar için bir temel sınıftır.  |
| StopIteration  | <next()> işlevinin iade edilmek üzere başka bir öğesi yoktur.  |
| SyntaxError  | Python sözdizimindeki hatalar için.  |
| IndentationError  | Girinti uygun değilse oluşur.  |
| TabError  | Tutarsız sekmeler ve boşluklar için.  |
| SystemError  | Tercüman bir iç hata algıladığında.  |
| SystemExit  | <sys.exit()> fonksiyonu onu yükseltir.  |
| TypeError  | Bir fonksiyon yanlış türde bir nesne kullanıyorsa.  |
| UnboundLocalError  | Tercüman bir iç hata algıladığında.  |
| UnicodeError  | Unicode kodlama veya kod çözme hatası için.  |
| ValueError  | Bir fonksiyon geçersiz değerler aldığında.  |
| ZeroDivisionError  | İkinci bölünme operandı veya modulo işlemi sıfırdır.  |


<br>

{% highlight python linenos=table %}

(a,b) = (6,0)
try:
    g = a/b
except ZeroDivisionError as s:
    k = s
    print (k)
#Output will be: integer division or modulo by zero

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

division by zero

{% endhighlight %}

<br>

### Özet - Python İstisnası İşleme Kavramları

Çoğu zaman, okuyucularımıza işlerinde yardımcı olabilecek bir konu keşfetmeyi amaçlıyoruz. Bu yüzden bu eğitimi Python Kural Dışı Durum Tespitinde ele aldık. 

Bu gönderi, Python'un temel bir kavramını öğrenmede size yardımcı olsaydı sizden haber almak harika olurdu. Deneyiminiz hakkında bize bilgi verin.



<br>

### Python'da Kalıtım

Kalıtım, soyutlama, kapsülleme ve çokbiçimlilik OOP (Object Oriented Programming) tarafından sağlanan dört temel kavramdır. Kalıtım, programcıların yeni bir sınıfa izin vermelerini sağlayan OOP'un güçlü bir özelliğidir- veya mevcut sınıf/sınıfların tüm özelliklerini ve yordamlarını kalıtımla kazanır. Hepimizin bildiği gibi, bu sınıf; bir öbeğin ayrıntılı bir tasarısı veya şablonudur. Her öbek bir sınıftan inşa edilmiştir ve 'kalıtım' kavramı bu ayrıntılı tasarılar arasında bir ilişki oluşturmak için kullanılır.


Var olan bir sınıfa çok az veya hiç değişiklik yapmadan yeni bir sınıf tanımlamak için kullanılan nesne yönelimli programlamanın bir özelliğidir. Yeni sınıf, türetilmiş sınıf veya alt sınıf olarak adlandırılır ve bu türetilmiş sınıfın miras aldığı sınıf temel sınıf veya üst sınıftır. Türetilmiş sınıf, temel sınıftan oluşur ve ek olarak bazı ek özellikler içerebilir. Bu miras kavramı, kodun yeniden kullanılmasına yardımcı olur.

<br>

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/python/object-oriented-programming.jpg" alt="Decorators" class="resize" />
  <p><small>Kalıtım &bull; Python .</small></p>
</div> 

<br>

Yukarıdaki diyagramda, türetilmiş sınıfın özellikleri ile birlikte türetilmiş sınıfta temel sınıfın özellikleri de bulunmaktadır. Bu temel sınıf özelliklerine, kalıtım kavramı nedeniyle sınıf elde etmek için erişilebilir.

<br>

{% highlight python %}

class BaseClass1
 #Body of base class

class DerivedClass(BaseClass1):
 #body of derived - class

{% endhighlight %}

<br>

Programcılar bu tip nesne yönelimli kavramları kullandıklarında ve kodları yeniden kullandıklarında, ebeveyn ve çocuk sınıfının birbiriyle etkileşimde bulunabilmesinin üç yolu vardır. Bunlar:

- Çocuk sınıfına herhangi bir şey, sadece ana sınıftaki bir eylemdir.
- Çocuk sınıfı üzerinde gerçekleştirilen işlemler, ebeveyn sınıfında gerçekleştirilen eylemleri geçersiz kılar.
- Çocuk sınıfında yapılan herhangi bir şey, üst sınıftaki eylemi değiştirir.

<br>

{% highlight python linenos=table %}

class Person:

    def __init__(self, first, last):
        self.firstn = first
        self.lastn = last

    def Name(self):
        return self.firstn + " " + self.lastn

class Emp(Person):

    def __init__(self, first, last, staffnum):
        Person.__init__(self,first, last)
        self.staffno = staffnum

    def GetEmp(self):
        return self.Name() + ", " +  self.staffno

a = Person("Alex", "Karlos")
b = Emp("Alex", "Karlos", "A102")

print(a.Name())
print(b.GetEmp())

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Alex Karlos
Alex Karlos, A102

{% endhighlight %}

<br>

Yukarıdaki durumda, türetilmiş sınıfın öbeği oluşturulur ve bir nokta (.) operatörü kullanılarak türetilmiş sınıfın yanı sıra temel sınıfın işlevlerinin her ikisini de çağırmak için kullanılır.
interpreter, nesnesi tanımlanmış olan sınıfta (türetilmiş) bulunmadığında, o zaman temel sınıftaki bu öznitelliği kontrol etmeye devam eder. Bu süreç, temel sınıfın kendisi başka bir sınıftan türetilmişse, bir özyineleme devam eder.

Python Kalıtımında örtük eylemler oluşur. Python Kalıtımında bir programcı, ebeveynde bir fonksiyonu tanımlar ancak çocukta tanımlamaz. Bu tür kalıtım aşağıda basit bir örnekle gösterilmektedir:

<br>

{% highlight python linenos=table %}

class super (object) :

    def implicit(self) :
        print ("Super-Class with Implicit function")

class sub(super) :
    pass

su = super()
sb = sub()

su.implicit()
sb.implicit()

{% endhighlight %}
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Super-Class with Implicit function
Super-Class with Implicit function

{% endhighlight %}

<br>

Yukarıdaki kodda, temel sınıfın hem nesneler hem de türetilmiş sınıfları, temel sınıfın fonksiyonunu çağırabilir. Ayrıca, 'alt' sınıfı altındaki 'pasif' ifadesi, Python'a programcının 'alt' sınıfı altında yaratılan boş bir blok istediğini söylemek için kullanılır, ancak içinde tanımlanacak yeni bir şey olmadığını söyler. 

Yukarıdaki program ayrıca şunu gösterir: - eğer temel sınıfta (burada 'super'') herhangi bir fonksiyon koyarsak, o zaman tüm türetilmiş sınıflar (burada sınıf 'sub') ayrıca özellikleri temel sınıftan otomatik olarak alacaktır. yani, tüm davranışı ana sınıftan devralır.

<a id="D14"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>14 Python Düzenli ifadeler</strong></p>
</div>
<br>


### Python Düzenli ifadeler

Düzenli ifadeler, kod, elektronik tablolar, belgeler veya günlük dosyaları gibi metinden bilgi almak için çok kullanışlı bir tekniktir. Düzenli ifadeyi uygularken akılda tutulması gereken ilk şey, her şeyin esas olarak bir karakter olması ve programcıların belirli bir karakter dizisi / dizgisiyle eşleşmesi için desen yazmalarıdır.

### Düzenli İfadeyi Tanımlama

Düzenli ifadeler, programcıların bir desende tutulan özel sözdizimini kullanarak diğer karakter veya dizge dizileri veya dizeler kümesi bulmalarına yardımcı olan özel sıradaki karakterlerdir. Python, her Python yüklemesiyle dolu olan standart Python kitaplığı aracılığıyla düzenli ifadeleri destekler.

### Python'daki Raw Dizeler

Düzenli dizgiler yerine ham dizelerin kullanılması önerilir. Programcılar Python'da düzenli ifadeler yazdıklarında, dizgede özel bir önek 'r' ve ters eğik çizgi ve özel meta-karakterler ile ham dizgileri başlatırlar, bu da onları doğrudan düzenli ifade motoruyla geçirmemizi sağlar.

Burada tüm parçalar aşağıda açıklanmıştır:
 
-  **match()**: bir yordamdır
-  **pattern**: Bu, hangi dizelerin eşleştirilebileceğini tanımlamak için meta-karakterler kullanan normal ifadedir.
-  **string**: dizgenin başlatılmasında deseni aramak ve eşleştirmek için kullanılır.
-  **flags**: Programcılar bitsel operatörü kullanarak farklı bayrakları belirleyebilir '|' (OR)

re.search fonksiyonu başarıda bir eşleme match öbeğini, başarısızlık durumunda none değerini döndürür. Eşleşen ifadeyi almak için group(num) ve groups() eşleştirme nesnesini kullanırız.

Eşleştirme Öbek Yordamları ve Tanımlaması:
-  **group(num=0)**: Bu yordam tüm eşleşmeyi (veya belirli alt grup no) döndürür
-  **groups()**: Bu yordam, bir tuple(değişken grubunda) eşleşen tüm alt grupları döndürür

<br>

### Python Flags

Birçok Python Regex Metodu ve Regex işlevi, Flags olarak adlandırılan isteğe bağlı bir argümanı alır. Bu bayraklar, verilen Regex modelinin anlamını değiştirebilir. Bunları anlamak için bu Bayrakların bir veya iki örneğini göreceğiz.

| [ Regex flags için Sözdizimi ]  | Bu bayrak ne yapar  |
|---|---|
| [re.M]  | Başlangıç/bitiş her satırı dikkate al  |
| [re.I]  | Durumu görmezden geliyor  |
| [re.S]  | [.] Yapmak |
| [re.U]  | { \w,\W,\b,\B} Unicode kurallarını takip eder  |
| [re.L]  | {\w,\W,\b,\B} yerel ayarları takip eder  |
| [re.X]  | Regex'te yoruma izin verir  |

<br>

### match Fonksiyonu

Bu yordam, düzenli ifadenin Python'daki belirli bir dizeyle eşleşip eşleşmediğini test etmek için kullanılır. The re.match(). Fonksiyon, desenin 'none' değerini döndürmez veya eşleşmenin bulunduğu dizenin bir kısmı hakkında ek bilgi içermez.

 Eşleme işlevi, RE desenini isteğe bağlı bayraklarla dizeye eşleştirmek için kullanılır. Bu yöntemde "w+" ve "\W" ifadesi 'g' harfi ile başlayan kelimelerle eşleşecek ve bundan sonra 'g' ile başlatılmayan bir şey tanımlanmayacaktır. Listedeki veya dizideki her elemanın eşleşmesini kontrol etmek için, forloop'u çalıştırıyoruz.

<br>

{% highlight python %}

re.match (pattern, string, flags=0)

{% endhighlight %}

<br>

{% highlight python %}

import re#simple structure of re.match()
matchObject = re.match(pattern, input_str, flags=0)

{% endhighlight %}

<br>

re.match kullanan bir program :

<br>

{% highlight python linenos=table %}

import re

line = "Cats are smarter than dogs"

matchObj = re.match( r'(.*) are (.*?) .*', line, re.M|re.I)

if matchObj: 
   print ("matchObj.groups() : ", matchObj.groups())
   print ("matchObj.group(2) : ", matchObj.group(2))
else:
   print ("No match!!")

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

matchObj.groups() :  ('Cats', 'smarter')
matchObj.group(2) :  smarter

{% endhighlight %}

<br>

Yukarıdaki örnekte, kalıp hangi dizeleri eşleştirebileceğini tanımlamak için meta-karakter kullanır. Burada '\w', kelime karakteri & + (plus) sembolü, bir veya daha fazla anlamına gelir.

Düzenli ifadelerin çoğu kontrol tekniği, 'desenler' kullanıldığında rol alır.

<br>

### search Fonksiyonu

Bir eşlemeden farklı bir şekilde çalışır. Her ikisi de desen kullanıyor olsa da; fakat 'search' bunu dizideki tüm olası başlangıç ​​noktalarında dener. Giriş dizesi boyunca tarar ve herhangi bir yerde eşleşmeye çalışır.

Bu fonksiyon, isteğe bağlı bayraklarla dizgede RE modelinin ilk oluşumunu arar.

<br>

{% highlight python %}

re.search( pattern, strings, flags=0)

{% endhighlight %}

<br>

Programın nasıl kullanıldığını göstermesi:

<br>

{% highlight python linenos=table %}

import re
value = "cyberdyne"
g = re.search("(dy.*)",  value)
if g:
    print("search: ", g.group(1))
s = re.match("(vi.*)", value)
if s:
    print("match:", s.group(1))

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

search:  dyne

{% endhighlight %}

<br>

### split Fonksiyonu

re.split(), sonlayıcı belirten bir deseni kabul eder. Bunu kullanarak, desen ve ayrı metin verilerini eşleştirebiliriz. split(), doğrudan düzenli ifade olmayan bir dizede ve işleyici de kullanılabilir.

split() nasıl kullanılacağını gösteren program:

<br>

{% highlight python linenos=table %}

import re
value = "two 2  four 4  six 6"
#separate those non-digit characters
res = re.split ("\D+" , value)
# print the result
for elements in res :
    print (elements)

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

2
4
6

{% endhighlight %}

<br>

Yukarıdaki programda, \D+ bir veya daha fazla rakam olmayan karakteri temsil eder.

<br>

### findall Fonksiyonu

Re.findall() modülü, dosyanın satırları üzerinde yinelemek istediğinizde kullanılır, tüm eşleşmelerin listesini tek bir adımda döndürür. Örneğin, burada bir e-posta adresleri listesi var ve tüm e-posta adreslerinin listeden çıkarılmasını istiyoruz, re.findall yordamını kullanıyoruz. Tüm e-posta adreslerini listeden bulabilirsiniz.

<br>

{% highlight python linenos=table %}

import re

list = ["guru99 get", "guru99 give", "guru Selenium"]
for element in list:
    z = re.match("(g\w+)\W(g\w+)", element)
if z:
    print((z.groups()))
    
patterns = ['software testing', 'guru99']
text = 'software testing is fun?'
for pattern in patterns:
    print('Looking for "%s" in "%s" ->' % (pattern, text), end=' ')
    if re.search(pattern, text):
        print('found a match!')
else:
    print('no match')
abc = 'guru99@google.com, careerguru99@hotmail.com, users@yahoomail.com'
emails = re.findall(r'[\w\.-]+@[\w\.-]+', abc)
for email in emails:
    print(email)

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Looking for "software testing" in "software testing is fun?" -> found a match!
Looking for "guru99" in "software testing is fun?" -> no match
guru99@google.com
careerguru99@hotmail.com
users@yahoomail.com

{% endhighlight %}
 
<br>

### sub Fonksiyonu

Bir kalıbı araştırmaya ve yeni bir alt dizeyle değiştirmeye yardımcı olur. Desen bulunamazsa, dize değişmeden döndürülür.

re.sub(pattern, repl, string):

<br>

{% highlight python %}

import re

phone = "2004-959-559 # This is Phone Number"

# Delete Python-style comments
num = re.sub(r'#.*$', "", phone)
print "Phone Num : ", num

# Remove anything other than digits
num = re.sub(r'\D', "", phone)
print "Phone Num : ", num

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Phone Num :  2004-959-559 
Phone Num :  2004959559

{% endhighlight %}

<br>

### compile Fonksiyonu

Düzenli bir ifade desenini, desen eşleştirmesi için kullanılabilen desen nesnelerine birleştirebiliriz. Ayrıca yeniden yazmadan bir modelin tekrar aranmasına yardımcı olur.

<br>

{% highlight python linenos=table %}

import re
pattern=re.compile('AV')
result=pattern.findall('AV Analytics Vidhya AV')
print (result)
result2=pattern.findall('AV is largest analytics community of India')
print (result2)

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

['AV', 'AV']
['AV']

{% endhighlight %}
 
<br>


<a id="D15"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>15 Python Çoklu Parçacıklı Programlama</strong></p>
</div>
<br>


### Python Çoklu Parçacıklı Programlama

Programcılar basit bir Python programını çalıştırdıklarında, yürütme ilk satırda başlar ve satır-by-line ilerler. Ayrıca, işlevler ve döngüler, program yürütme işleminin atlanmasının nedeni olabilir, ancak çalışma prosedürlerini görmenin nispeten kolaydır ve hangi satır daha sonra gerçekleştirilecektir. Programcılar parmaklarını koyabilir ve icra edilecek kod satırlarını izleyebilirler; Bu tek iş parçacıklı programlama denir. 

Ancak, çok iş parçacıklı programlama durumunda, programınıza ikinci bir parmağınızı koymak gibi. Her iki parmak da aynı şekilde hareket eder ve aynı anda yürütülür. 

### En Küçük Yürütme Birimi Nelerdir?

Bağımsız olarak yönetilebilen ve işletim sisteminin ayırt edici bir parçası olan küçük bir program talimat dizisinin yürütülmesidir. Modern işletim sistemi, bir zaman paylaşımı tekniği kullanarak çoklu programları yönetir. Python'da iki farklı tür küçük yürütme birimi vardır. Bunlar:

-  Kernel Küçük Yürütme Birimleri
-  User-space or User küçük yürütme birimleri

<br>

### En Küçük Yürütme Birimi Neden Kullanılır?

Uygulama programlamada en küçük yürütme birimi önemli bir rol oynar. Tüm GUI programları ve web sunucuları birlikte işlenir. Küçük Yürütme Birimi kullanmanın başlıca nedenleri şunlardır:

-  **Paralel Hesaplama**: Eğer herhangi bir kullanıcı çok işlemcili makineye sahipse, en küçük yürütme birimi işlem hızındaki artış hedefi ile paralel işlem yapılmasına izin verebilir.

-  **Standardizasyon**: Programlama hızını artırdığı için tüm programlama dilleri için standart bir yaklaşım haline gelmiştir.

-  **Paralel I/O (Giriş/Çıkış)**: Giriş ve çıkış hızı hakkında konuştuğumuzda, CPU'da nispeten yavaştır. Her i/o işlemlerini birden fazla birbirinden ayrı küçük yürütme birimine yerleştirerek, programcılar birbirleriyle ve hesaplama hızıyla paralel olarak gerçekleştirilen işlemleri kullanabilirler.

-  **Eşzamansız Olaylar**: Birden çok iş parçacıklı uygulama, eşzamansız eylemlerle ilgilenebilir. Örneğin, bir programda, programcılar, bir sonraki harekatın fareyi kullanmak mı yoksa klavyeyi mi kullanacağını bilmiyor olabilirler. Her bir eylem için ayrı bir küçük yürütme birimi ekleyerek, yani hem fare hem de klavye için iki küçük yürütme birimi, programlayıcılar bloke edici olmayan I/O işlemlerini kullanmak için daha temiz ve verimli bir uygulama kodlayabilir.

<br>

### Python En Küçük Yürütme Birimi Modülleri 

Python iş parçacığına erişmenin iki yolu vardır. Bunlar kullanarak:

-  py module

'tread' modülünün daha az kullanıldığından ve dolayısıyla da  kullanıcıların 'threading' modülünü kullanmaya başladıkları dikkate alınmalıdır.

### Threading Faydaları 

-  Tek bir işlem için, aynı veri alanını işlemek ve paylaşmak için birden fazla en küçük yürütme birimi kullanılabilir ve bilgi paylaşarak birbirleriyle iletişim kurabilir.
- Daha az bellek yükü kullanırlar ve dolayısıyla hafif işlem olarak adlandırılırlar.
- Bir en küçük yürütme birimi kullanıldığında, bir program girişe duyarlı kalabilir.
- Küçük yürütme birimleri global değişkenin belleğini paylaşabilir ve işleyebilir.

 Bir iş parçacığında, üç farklı bölüm vardır. Başlangıç, bir yürütme parçası ve bir sonuca sahiptir. Ayrıca, küçük yürütme biriminin veya işlemin şu anda çalıştığını gösteren bir yönlendirme işaretçisi vardır ve bu nedenle en küçük yürütme birimi aynı anda birkaç program bloğunu çalıştırabilir. 

### Yeni Küçük Bir Yürütme Birimi Kullanmak

Bir Thread modül kullanılarak ayrı bir küçük yürütme biriminde işlevler yürütmek için gerçekleştirilebilir. Bunu yapmak için programcılar - thread.start_new_thread() işlevi kullanabilir.

<br>

{% highlight python %}

thread.start_new_thread(function, args[, kwargs])

{% endhighlight %}
 
<br>

Burada, ilk kısım daha önce anlatıldığı gibi bir yöntemdir ve bu yöntem yeni iş parçacıkları oluşturmanın daha hızlı ve daha etkili bir yoludur. Çocuk en küçük yürütme birimi başlatıldığında işlev, bir args listesi geçirir. İşlevi bir değer döndürdüğünde en küçük yürütme birimi sonlandırılır. Yukarıdaki sözdizimindeki 'args' argümanlar dizisidir.


### Python Kullanan Threading Programı

<br>

{% highlight python linenos=table %}

import threading

def coder(number):
    print ('Coders: ' , number)
    return

threads = []
for k in range(5):
    t = threading.Thread(target=coder, args=(k,))
    threads.append(t)
    t.start()

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Coders:  0
Coders:  1
Coders:  2
Coders:  3
Coders:  4

{% endhighlight %}
 
<br>


### Threading Sınıf Yordamı

Daha önce açıklandığı gibi, threading modülü, küçük yürütme birimini uygulamak için kullanılan bir threading sınıfına sahiptir ve bu sınıf ayrıca, programcılar tarafından multi-threaded programlamada kullanılan bazı öntanımlı yordamlar içerir. Bunlar:

-  **run()**: Bu küçük yürütme biriminin girdisi olarak davranır
-  **start()**: run() yordamını çağırarak en küçük bir yürütme birimi başlatmak için kullanılır 
- **isAlive()**: hala çalışıp çalışmadığını doğrulamak için kullanılır
- **getName()**: bir küçük yürütme biriminin adını döndürmek için kullanılır
- **setName()**: küçük yürütme biriminin adını ayarlamak için kullanılır

Python'da Python 2'deki **thread** modülünü veya Python 3'teki **_thread** modülünü kullanarak küçük bir yürütme birimi oluşturabilirsiniz. Threading modülünü etkileşimde bulunmak için kullanacağız.

Bir küçük yürütme birimi olan thread, normal bir işlemden farklı özelliklere sahip bir işletim sistemi işlemidir:

- en küçük yürütme birimi bir işlemin bir alt kümesi olarak vardır
- en küçük yürütme birimi bellek ve kaynakları paylaşır
- işlemler farklı bir adres alanına sahiptir (bellekte)

Ne zaman threading kullanırsınız? Genellikle bir fonksiyonun programınızla aynı anda gerçekleşmesini istersiniz. Sunucu yazılımı oluşturursanız, sunucunun yalnızca bir bağlantıyı değil, aynı zamanda birçok bağlantıyı dinlemesini de istersiniz. Kısacası, thread'ler, programların aynı anda birden çok görevi yürütmesini sağlar.

### Python threading

Bir thread programı oluşturalım. Bu programda, her birinin id kimliğini çıkaracak 10 küçük yürütme birimini başlatacağız.

<br>

{% highlight python linenos=table %}

import threading
 
# Our thread class
class MyThread (threading.Thread):
 
    def __init__(self,x):
        self.__x = x
        threading.Thread.__init__(self)
 
    def run (self):
          print (self.__x)
 
# Start 10 threads.
for x in range(5):
    MyThread(x).start()

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

0
1
2
3
4

{% endhighlight %}
 
<br>

Bir kez çalıştırırsanız, küçük yürütme birimlerinin durması gerekmez.
Küçük yürütme birimleri, her x saniyede yinelenen küçük yürütme birimlerinin işlevselliğini zamanlamış olabilir

### Zamanlanmış küçük yürütme birimleri

Python'da, Timer sınıfı Thread sınıfının bir alt sınıfıdır. Bu benzer davranır anlamına gelir. Zamanlanmış küçük yürütme birimleri oluşturmak için timer sınıfını kullanabiliriz. Zamanlayıcılar, normal küçük yürütme birimleri gibi .start() yordam çağrısı ile başlatılır. Aşağıdaki program 5 saniye sonra başlayan bir küçük yürütme birimi oluşturur.

<br>

{% highlight python linenos=table %}

from threading import *
 
def hello():
    print ("hello, world")
 
# create thread
t = Timer(5.0, hello)
 
# start thread after 10 seconds
t.start()

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

hello, world

{% endhighlight %}
 
<br>

### Küçük yürütme birimleri kullanarak yinelenen işlevsellik 

İşlenmemiş küçük yürütme birimlerini aşağıdaki gibi yürütebiliriz:

<br>

{% highlight python linenos=table %}

from threading import *
import time
 
def handleClient1():
    while(True):
        print ("Waiting for client 1...")
        time.sleep(5) # wait 5 seconds      
 
def handleClient2():
    while(True):
        print ("Waiting for client 2...")
        time.sleep(5) # wait 5 seconds
 
# create threads
t = Timer(5.0, handleClient1)
t2 = Timer(3.0, handleClient2)
 
# start threads
t.start()
t2.start()

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Waiting for client 2...
Waiting for client 1...
Waiting for client 2...
Waiting for client 1...
Waiting for client 2...
Waiting for client 1...
Waiting for client 2...
....
{% endhighlight %}
 
<br>
<a id="D16"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>16 Python Listeleri</strong></p>
</div>
<br>

Listeler bir dizidir ve temel bir veri yapısıdır. Bir liste dizeleri (metin) ve sayıları içerebilir. Bir liste, diğer programlama dillerindeki bir diziye benzer, ancak ek işlevselliklere sahiptir.

### Python Listesi

Listeleri parantez [] ile tanımlarız. Verilere erişmek için aynı parantezler kullanılır. 
Örnek liste kullanımı:

<br>

{% highlight python linenos=table %}

l = [ "Drake", "Derp", "Derek", "Dominique" ]
 
print(l)     # prints all elements
print(l[0])  # print first element
print(l[1])  # prints second element

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

['Drake', 'Derp', 'Derek', 'Dominique']
Drake
Derp

{% endhighlight %}
 
<br>

### Ekle/Kaldır

Listeyi değiştirmek için append() ve remove() işlevlerini kullanabiliriz.

<br>

{% highlight python linenos=table %}

l = [ "Drake", "Derp", "Derek", "Dominique" ]
 
print(l)                # prints all elements
l.append("Victoria")   # add element.
print(l)                # print all elements
l.remove("Derp")       # remove element.
l.remove("Drake")      # remove element.
print(l)               # print all elements.

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

['Drake', 'Derp', 'Derek', 'Dominique']
['Drake', 'Derp', 'Derek', 'Dominique', 'Victoria']
['Derek', 'Dominique', 'Victoria']

{% endhighlight %}
 
<br>

### Sıralama listesi

Listeyi sort() fonksiyonunu kullanarak sıralayabiliriz.

<br>

{% highlight python linenos=table %}

l = [ "Drake", "Derp", "Derek", "Dominique" ]
 
print(l)     # prints all elements
l.sort()    # sorts the list in alphabetical order
print(l)     # prints all elements

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

['Drake', 'Derp', 'Derek', 'Dominique']
['Derek', 'Derp', 'Dominique', 'Drake']

{% endhighlight %}
 
<br>

Listenin azalan sırada olmasını istiyorsanız, reverse() fonksiyonunu kullanın.

<br>

{% highlight python linenos=table %}

l = [ "Drake", "Derp", "Derek", "Dominique" ]
 
print(l)     # prints all elements
l.sort()    # sorts the list in alphabetical order
l.reverse() # reverse order.
print(l)     # prints all elements

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

['Drake', 'Derp', 'Derek', 'Dominique']
['Drake', 'Dominique', 'Derp', 'Derek']

{% endhighlight %}

<br>
<a id="D17"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>17 Python If Bildirimleri</strong></p>
</div>
<br>

Python'da, if ifadeleri olarak bilinen koşullu ifadeleri tanımlayabilirsiniz. 
Belirli koşullar sağlandığında bir kod bloğu yürütülür.

<br>

### If Bildirimleri

Bu uygulamayı düşünün, x değerine bağlı olarak ilk veya ikinci kodu yürütür.

<br>

{% highlight python linenos=table %}

x = 3
if x < 10:
   print("x smaller than 10")
else:
   print("x is bigger than 10 or equal")

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

x smaller than 10

{% endhighlight %}
 
<br>

**Küçük bir oyun:**

Bir değişken, kullanıcı tarafından her zaman tanımlanmayabilir, bu küçük oyunu düşünün:

<br>

{% highlight python linenos=table %}

age = 24
 
print "Guess my age, you have 1 chances!"
guess = int(raw_input("Guess: "))
 
if guess != age:
    print("Wrong!")
else:
    print("Correct")

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Guess my age, you have 1 chances!
Guess:  24
Correct

{% endhighlight %}
 
<br>

### Koşullu Operatörler

Koşullu operatörler hakkında bir kelime

	


| Operator  | Tanımlama  |
|---|---|
| !=  | eşit değil  |
| ==  | eş değerde olmak  |
| >  | daha büyük  |
| <	  | daha küçük  |

Atama operatörünü (=) eşittir operatörle (==) karıştırmayın.

**İç içe koymak**

Birden fazla koşul yapmanın en basit yolu yuvalamadır:

<br>

{% highlight python linenos=table %}

a = 12 
b = 33
 
if a > 10:
    if b > 20:
        print("Good")

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Good

{% endhighlight %}
 
<br>

Okumak zorlaşabilir, 4 veya 6 koşulu birleştirmeyi düşünebilirsiniz. Neyse ki Python'un bunun için bir çözümü var, **and** anahtar kelimeyi kullanarak koşulları birleştirebiliriz.

<br>

{% highlight python linenos=table %}

age = 14

while True: 
    print ("Guess my age, you have 1 chances!")
    guess = int(input("Guess: "))
    if guess > 10 and guess < 20:
      print("In range")
      if guess != age:
          print("Wrong!")
      else:
          print("Correct")
          break
    else:
       print("Out of range")

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

Guess my age, you have 1 chances!
Guess:  12
In range
Wrong!
Guess my age, you have 1 chances!
Guess:  14
In range
Correct

{% endhighlight %}
 
<br>


Bazen **or** operatörünü kullanmak isteyebilirsiniz.

<br>
<a id="D18"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>18 Python Fonksiyonlar</strong></p>
</div>
<br>

Bir işlev, programınızda herhangi bir yerde çağrılabilen yeniden kullanılabilir koddur. İşlevler kodunuzun okunabilirliğini artırır: Birisinin uzun talimat listesi yerine işlevleri kullanarak kodu anlaması daha kolaydır. 

Bunun üzerine, test edilebilirlik ve genişletilebilirliği geliştiren fonksiyonlar yeniden kullanılabilir veya değiştirilebilir.

<br>

### İşlev Tanımı

Bu sözdizimini işlev olarak tanımlamak için kullanırız:

<br>

{% highlight python %}

def function(parameters):
    instructions
    return value

{% endhighlight %}
 
<br>

**def anahtar kelime**, Python'a bir parça yeniden kullanılabilir kodun (bir function) olduğunu bildirir. Bir programın birçok işlevi olabilir.

### Pratik Örnek

Fonksiyon(parametreleri) kullanarak fonksiyonu çağırabiliriz.

<br>

{% highlight python linenos=table %}

def f(x):
    return(x*x)
 
print(f(3))

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

9

{% endhighlight %}
 
<br>

Fonksiyonun bir parametresi vardır, x. Dönüş değeri, fonksiyonun döndürdüğü değerdir. Tüm işlevlerin bir şeyler döndürmesi gerekmez.

### Parametreler

Birden çok değişkeni geçebiliriz:

<br>

{% highlight python linenos=table %}

def f(x,y):
    print('You called f(x,y) with the value x = ' + str(x) + ' and y = ' + str(y))
    print('x * y = ' + str(x*y))
 
f(3,2)

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

You called f(x,y) with the value x = 3 and y = 2
x * y = 6

{% endhighlight %}
 
<br>
<a id="D19"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>19 Python Scope Alanı</strong></p>
</div>
<br>

**Kapsam**
 
Değişkenler sadece tanımlandıkları alana ulaşabilirler, buna kapsam adı verilir. Değişkenlerin kullanılabileceği kod alanı olarak düşünün. Python global değişkenleri (tüm programda kullanılabilir) ve yerel değişkenleri destekler.

Varsayılan olarak, bir fonksiyonda bildirilen tüm değişkenler yerel değişkenlerdir. Bir fonksiyonun genel değişkenine erişmek için, ‘global variable’ açıkça tanımlamak gerekir.

**Örnek**
 
Aşağıda yerel değişkenlerin ve kapsamın kullanımını inceleyeceğiz. Bu işe yaramaz:

<br>

{% highlight python linenos=table %}

def f(x,y):
    print('You called f(x,y) with the value x = ' + str(x) + ' and y = ' + str(y))
    print('x * y = ' + str(x*y))
    z = 4 # cannot reach z, so THIS WON'T WORK
 
z = 3
f(3,2)

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

You called f(x,y) with the value x = 3 and y = 2
x * y = 6


{% endhighlight %}
 
<br>

ama bu olacak:

<br>

{% highlight python linenos=table %}

def f(x,y):
    z = 3
    print('You called f(x,y) with the value x = ' + str(x) + ' and y = ' + str(y))
    print('x * y = ' + str(x*y))
    print(z) # can reach because variable z is defined in the function
 
f(3,2)

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

You called f(x,y) with the value x = 3 and y = 2
x * y = 6
3

{% endhighlight %}
 
<br>

Bunu daha detaylı inceleyelim:

<br>

{% highlight python linenos=table %}

def f(x,y,z):
    return x+y+z # this will return the sum because all variables are passed as parameters
 
sum = f(3,2,1)
print(sum)

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

6

{% endhighlight %}
 
<br>

**Fonksiyonlarda fonksiyon çağırmak**
 
Bir değişkenin içeriğini başka bir fonksiyondan da alabiliriz:

<br>

{% highlight python linenos=table %}

def highFive():
    return 5
 
def f(x,y):
    z = highFive() # we get the variable contents from highFive()
    return x+y+z # returns x+y+z. z is reachable becaue it is defined above
 
result = f(3,2)
print(result)

{% endhighlight %}
 
<br>
<h2 class="python3">Python</h2>

{% highlight python %}

10

{% endhighlight %}
 
<br>

Bir değişkene herhangi bir yere ulaşılabiliyorsa, kod global değişken olarak adlandırılır. Bir değişken sadece kapsam içinde biliniyorsa, buna yerel bir değişken deriz.

<br>
<a id="D20"></a>
<br>
<div class="alert alert-success" role="success">
<p><strong>20 threading - bir işlem içinde eşzamanlı işlemleri yönetme</strong></p>
</div>
<br>

**Amaç:** Birkaç yürütme birimini yönetin.

Küçük yürütme birimlerini kullanmak, bir programın aynı işlem alanında aynı anda birden çok işlemi çalıştırmasına izin verir.

**Thread Öbekleri**

Bir Thread küçük yürütme birimi kullanmanın en kolay yolu, onu bir hedef işlevle başlatmak ve çalışmaya başlamasına izin vermek için start() işlevini çağırmaktır.

<br>

{% highlight python linenos=table %}

import threading


def worker():
    """thread worker function"""
    print('Worker')


threads = []
for i in range(5):
    t = threading.Thread(target=worker)
    threads.append(t)
    t.start()

{% endhighlight %}
 
<br>

Çıktı, her birinde 'Worker' ile beş satırdır.
<h2 class="python3">Python</h2>

{% highlight python %}

Worker
Worker
Worker
Worker
Worker

{% endhighlight %}
 
<br>

Bir thread üretebilmek ve ne iş yapılacağını anlatmak için argümanlar iletmek yararlıdır. Herhangi bir öbek türü, thread parçacığına içlem olarak iletilebilir. Bu örnek, thread parçacığının yazdırdığı bir sayıyı geçirir.

<br>

{% highlight python linenos=table %}

import threading

def worker(num):
    """thread worker function"""
    print('Worker: %s' % num)


threads = []
for i in range(5):
    t = threading.Thread(target=worker, args=(i,))
    threads.append(t)
    t.start()

{% endhighlight %}
 
<br>

Tam sayı içlemi artık her bir thread parçacığı tarafından basılan mesaja dahil edilmiştir.
<h2 class="python3">Python</h2>

{% highlight python %}

Worker: 0
Worker: 1
Worker: 2
Worker: 3
Worker: 4

{% endhighlight %}
 
<br>

**Güncel Thread Belirleniyor**

thread tanımlamak veya adlandırmak için içlemler kullanmak hantal ve gereksizdir. Her Thread örneği, thread oluşturulduğunda değiştirilebilen varsayılan bir değere ile bir ada sahiptir. thread ları adlandırma, farklı işlemlerle uğraşan çoklu hizmet iş parçacıklı sunucu işlemlerinde kullanışlıdır.

<br>

{% highlight python linenos=table %}

def worker():
    print(threading.current_thread().getName(), 'Starting')
    time.sleep(0.5)
    print(threading.current_thread().getName(), 'Exiting')


def my_service():
    print(threading.current_thread().getName(), 'Starting')
    time.sleep(0.3)
    print(threading.current_thread().getName(), 'Exiting')


t = threading.Thread(name='my_service', target=my_service)
w1 = threading.Thread(name='worker1', target=worker)
w2 = threading.Thread(target=worker)  # use default name

w1.start()
w2.start()
t.start()

{% endhighlight %}
 
<br>

Hata ayıklama çıkışı, her satırdaki geçerli thread parçacığının adını içerir. 'Thread-1' satırları, Thread parçacığı adı sütununda adsız thread parçacığı w2'ye karşılık gelir.
<h2 class="python3">Python</h2>

{% highlight python %}

worker1 Starting
Thread-1 Starting
my_service Starting
my_service Exiting
worker1 Exiting
Thread-1 Exiting

{% endhighlight %}
 
<br>

Çoğu program, hata ayıklamak için **print** kullanmaz. logging modülü, %(threadName)s biçimlendirici kodunu kullanarak her günlük mesajına thread adını katmayı destekler. log mesajlarına thread  isimleri dahil etmek, bu mesajları kaynağına geri göndermeyi mümkün kılar.

<br>

{% highlight python linenos=table %}

import threading
import time


import logging
import threading
import time


def worker():
    logging.debug('Starting')
    time.sleep(0.5)
    logging.debug('Exiting')


def my_service():
    logging.debug('Starting')
    time.sleep(0.3)
    logging.debug('Exiting')


logging.basicConfig(
    level=logging.DEBUG,
    format='[%(levelname)s] (%(threadName)-10s) %(message)s',
)

w1 = threading.Thread(name='worker1', target=worker)
w2 = threading.Thread(target=worker)  # use default name
t = threading.Thread(name='my_service', target=my_service)

w1.start()
w2.start()
t.start()

{% endhighlight %}
 
<br>

logging aynı zamanda thread-safe dir, bu yüzden farklı thread den gelen mesajlar çıktıda ayrı tutulur.
<h2 class="python3">Python</h2>

{% highlight python %}

[DEBUG] (worker1   ) Starting
[DEBUG] (Thread-1  ) Starting
[DEBUG] (my_service) Starting
[DEBUG] (my_service) Exiting
[DEBUG] (worker1   ) Exiting
[DEBUG] (Thread-1  ) Exiting

{% endhighlight %}
 
<br>

**Daemon vs. Non-Daemon küçük yürütme birimleri**

Bu noktaya kadar, örnek programlar, tüm küçük yürütme birimleri işlerini tamamlayana kadar kesin olarak çıkmayı beklemiştir. Bazen programlar, bir küçük yürütme birimini, ana programın çıkmasını engellemeden çalışan bir program olarak meydana getirir. Daemon küçük yürütme birimini kullanmak, küçük yürütme birimini kesmenin kolay bir yolunun bulunmadığı veya işinin ortasında küçük yürütme biriminin ölmesine izin vermediği veya veri kaybına neden olmayan servisler için kullanışlıdır(örneğin, bir servis izleme aracı için “kalp atışı” üreten bir küçük yürütme birimi). Bir küçük yürütme birimini bir daemon olarak işaretlemek için, oluştururken daemon=True geçirin veya set_daemon() ile True yöntemini çağırın. öntanımlı durum, küçük yürütme birimlerinin daemon olmamasıdır.

<br>

{% highlight python linenos=table %}

import threading
import time
import logging


def daemon():
    logging.debug('Starting')
    time.sleep(0.2)
    logging.debug('Exiting')


def non_daemon():
    logging.debug('Starting')
    logging.debug('Exiting')


logging.basicConfig(
    level=logging.DEBUG,
    format='(%(threadName)-10s) %(message)s',
)

d = threading.Thread(name='daemon', target=daemon, daemon=True)

t = threading.Thread(name='non-daemon', target=non_daemon)

d.start()
t.start()

{% endhighlight %}
 
<br>

**daemon** yürütme birimi sleep() çağrısı uyandırılmadan önce **non_daemon** yürütme birimlerinin tümü (ana yürütme birimi dahil) çıkış yaptığı için, yanıt **daemon** yürütme biriminden gelen **'Exiting'** iletisini içermez. 
<h2 class="python3">Python</h2>

{% highlight python %}

(daemon    ) Starting
(non-daemon) Starting
(non-daemon) Exiting

{% endhighlight %}
 
<br>

Bir **daemon thread** küçük yürütme birimi işini tamamlayana kadar beklemek için **join()** yordamını kullanır.

<br>

{% highlight python linenos=table %}

import threading
import time
import logging


def daemon():
    logging.debug('Starting')
    time.sleep(0.2)
    logging.debug('Exiting')


def non_daemon():
    logging.debug('Starting')
    logging.debug('Exiting')


logging.basicConfig(
    level=logging.DEBUG,
    format='(%(threadName)-10s) %(message)s',
)

d = threading.Thread(name='daemon', target=daemon, daemon=True)

t = threading.Thread(name='non-daemon', target=non_daemon)

d.start()
t.start()

d.join(0.1)
print('d.isAlive()', d.isAlive())
t.join()

{% endhighlight %}
 
<br>
Zaman aşımı timeout, daemon thread uyuduğu süreden daha az olduğu için, **join()** geri döndükten sonra thread hala **'alive'** olur.

<h2 class="python3">Python</h2>

{% highlight python %}

d.isAlive() True
(daemon    ) Starting
(non-daemon) Starting
(non-daemon) Exiting

{% endhighlight %}
 
<br>
Aşağıdaki örnek, join() yöordamının kullanımını gösterir.
<br>

{% highlight python linenos=table %}

import threading
import time

class Threads(threading.Thread):
    def __init__(self, time):
        super(Threads, self).__init__()
        self.time = time
        self.start()

    def run(self):
        print (self.time, " seconds start!")
        for i in range(0,self.time):
            time.sleep(1)
            print ("1 sec of ", self.time)
        print (self.time, " seconds finished!")


t1 = Threads(3)
t1.join()
print ("t1.join() finished" )
{% endhighlight %}
 
<br>
Bu çalışıyor! Ama sırayla çalışır. **self.start()**'yı **__init__**'ye koyabilirim, ama **self.join()**'yi değil. Her küçük yürütme birimi başladıktan sonra yapılması gerekenler.

**join()**, küçük yürütme biriminizin bitmesini bekleyen ana küçük yürütme birimidir. Aksi halde, küçük yürütme biriminiz kendi başına çalışır.

Bu yüzden **join()**'yı ana küçük yürütme birimi üzerinde 'beklet' olarak düşünmenin bir yolu, **join()**'nin çağrıldığı zaman ana küçük yürütme birimi hemen serbest bırakılır.

<h2 class="python3">Python</h2>

{% highlight python %}

3  seconds start!
1 sec of  3
1 sec of  3
1 sec of  3
3  seconds finished!
t1.join() finished

{% endhighlight %}
 
<br>
