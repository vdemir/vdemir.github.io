---
layout: post
title: Python Sınıflar/Nesneler
description: Python’daki hemen hemen her şey, özellikleri ve yöntemleri ile bir nesnedir.
date:   2018-08-29 15:52:00
tags:   Linux Programlama Python
permalink: /PyClasses/
categories: Programlama
comments: true
published: true
lang: tr
---

{% include tr_ay.html %}
<link rel="stylesheet" href="/css/w3.css">
<br>
Python bir nesne yönelimli programlama dilidir.
Python'daki hemen hemen her şey, özellikleri ve yöntemleri ile bir [Object]nesnedir. 
<br><br>


<div class="w3-code notranslate pythonHigh">
  class ClassName:<br> &nbsp; 'class docstring'<br> &nbsp; class_suite</div>

Burada, (class docstring) class_name._doc_ üzerinden erişilebilen bir belge dizesidir ve class_suite temel olarak sınıf üyelerini, veri niteliklerini ve işlevlerini tanımlayan tüm bileşen ifadelerinden oluşur.

<div id="container">
        <textarea autocomplete="off" id="textareaCode" wrap="logical" rows="7" cols="35" spellcheck="false">
class ClassName:
    'class docstring'
    # python sınıf değişkenleri listesi
    # python sınıf kurucu
    # python sınıf yordam tanımları

</textarea></div>
<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/class1.png" alt="programs" class="resize" />
  <p><small>Python &bull; Sınıflar.</small></p>
</div> 
  
<style>
img.resize {
  max-width:100%;
  max-height:100%;
}
</style>
<div id="container">
        <textarea autocomplete="off" id="textareaCode" wrap="logical" rows="30" cols="35" spellcheck="false">

# sınıfın tanımı burada başlar  
class Person:
    # değişkenleri başlatma yordamı
    name = ""
    age = 0
      
    #sınıf kurucusu tanımlama
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
#Nesnelerin yordamlarının elemanını çağırır  
person1.showAge()
person2.showName() 
</textarea></div>

<br><br>
<h3>Bir Python Sınıfı Oluşturma</h3><hr>
x adlı bir özniteliğe sahip MyClass adlı bir sınıf oluşturun:
<div class="w3-code notranslate pythonHigh">
  class MyClass:<br> &nbsp; 'Python Temel Sınıf'<br> &nbsp; x = 5<br>print(MyClass)</div>
<br>
<br>
<div class="teaser clearfix"></div>
<h3>Örneklem ile Nesne Oluşturma</h3><hr>
 Bir sınıfın bir örneğini oluşturmak için, sadece sınıf adını kullanarak sınıfı çağırır ve daha sonra <code class="w3-codespan">__init__()</code> işlevinin kabul ettiği argümanları iletirsiniz:
<div class="w3-code notranslate pythonHigh">
  p1 = Person("John", 36)</div><br><br>

<div class="teaser clearfix"></div>
<h3>Nesnenin Özniteliklerine Erişim</h3><hr>
Nokta (.) operatörünü nesne ile kullanarak erişebilirsiniz. Sınıf adı kullanarak da sınıf değişkenine erişilebilir:
<div class="w3-code notranslate pythonHigh">
  print(p1.x)<br>print(MyClass.x)</div><br><br>

<div class="teaser clearfix"></div>
<h3>Bir Python Nesnesi Oluşturma</h3><hr>
Artık nesneleri oluşturmak için myClass adlı sınıfı kullanabiliriz:

<div class="w3-code notranslate pythonHigh">
  class MyClass:<br>&nbsp; x = 5<br>p1 = MyClass()<br>print(p1.x)<br>print(MyClass.x)</div>
<br>
<br>
<h3><code class="w3-codespan">__new__()</code> yordamı </h3><hr>
 <code class="w3-codespan">__new__()</code> örnekleme ile oluşturan ve döndüren python özel yordamıdır.

<div class="w3-code notranslate pythonHigh">
  class Sample(object):<br>&nbsp; def __new__(cls, *args, **kargs):<br>&nbsp;&nbsp;&nbsp; 
  print ("Creating instance of Sample")<br>&nbsp;&nbsp;&nbsp; return super(Sample, cls).__new__(cls)<br><br>&nbsp; def __init__(self):<br>&nbsp;&nbsp;&nbsp; 
  print ("Initiating instance of Sample")<br>s=Sample()</div><br>
<div class="teaser clearfix"></div>
<div class="w3-note">
  <p><strong>Not:</strong> Örnekleme ile oluşturulduktan sonra <code class="w3-codespan">__init__()</code> yordamı çağrılır. Gerçek oluşturma işlemini kontrol etmek istiyorsanız, <code class="w3-codespan">__new__()</code> yordamını kullanın.</p>
</div> 

<div class="w3-note">
  <p><strong>Not:</strong> <code class="w3-codespan">__new__()</code>, bir cls yordamı döndürürse, argümanların geri kalanıyla <code class="w3-codespan">__init__()</code> çağrılır (...), aksi halde <code class="w3-codespan">__init__()</code> çağrılmaz.</p>
</div>

<div class="w3-note">
  <p><strong>Not:</strong> Python sınıf kurucusunun iki adımı vardır: Örnekleme ile oluşturmak için <code class="w3-codespan">__new__()</code> çağırma ve başlatmak için <code class="w3-codespan">__init__()</code> çağırma. <code class="w3-codespan">__init__()</code> isteğe bağlı bir adım değildir, <code class="w3-codespan">__init__()</code> başarısız olursa örneklem oluşturma da başarısız olur. </p></div> 

<div class="w3-note">
  <p><strong>Not:</strong> Yeni bir örneklemin oluşturulmasını kontrol etmeniz gerektiğinde <code class="w3-codespan">__new__()</code> kullanın. 
Yeni bir örneklemenin başlatılmasını kontrol etmeniz gerektiğinde <code class="w3-codespan">__init__()</code> kullanın. 

<code class="w3-codespan">__new__()</code>, örneklem oluşturmanın ilk adımıdır. İlk olarak adlandırılır, 
ve sınıfınızın yeni bir örneklemeyi döndürmekten sorumludur. 
Tezatında, <code class="w3-codespan">__init__()</code> hiçbir şey döndürmez; yalnızca, oluşturulduktan sonra örneklemin başlatmasından sorumludur. 

Genel olarak, 
str, int, unicode veya tuple gibi bir değişmez tür alt sınıfını oluşturmuyorsanız <code class="w3-codespan">__new__()</code>'yi geçersiz kılmanız gerekmez. </p></div> 

<div class="w3-panel w3-yellow">
    <h3>Bilgi!</h3>
    <p> <code class="w3-codespan">__init__()</code> bazen nesnenin kurucusu olarak adlandırılır, çünkü kurucuların diğer dillerde kullanıldığı gibi kullanılır, ancak bu teknik olarak doğru değildir - onu başlatıcı olarak adlandırmak daha iyidir. Bir kurucuya daha benzer olan <code class="w3-codespan">__new__()</code> adlı farklı bir yordam var, ancak neredeyse hiç kullanılmıyor.</p>
  </div>

<div class="w3-container">
  <table class="w3-table">
    <tr>
      <td>bir sınıf yapıcı</td>
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
<h3><code class="w3-codespan">__init__()</code> yordamı</h3><hr>
Yukarıdaki örnekler, en basit biçimde sınıflar ve nesnelerdir ve gerçek yaşam uygulamalarında gerçekten yararlı değildir. 

Sınıfların manâsını anlamak için, yerleşik <code class="w3-codespan">__init__()</code> işlevini anlamamız gerekir. 

Tüm sınıflar, sınıf başlatıldığında her zaman çalıştırılan <code class="w3-codespan">__init__()</code> adında bir işleve sahiptir. 

Nesne özniteliklerine veya nesne oluşturulduğunda yapılması gereken diğer işlemlere değer atamak için <code class="w3-codespan">__init__()</code> işlevini kullanın:

 
<div class="teaser clearfix"></div>
<div class="w3-code notranslate pythonHigh">
  class Person:<br>&nbsp; def __init__(self, name, age):<br>&nbsp;&nbsp;&nbsp; 
  self.name = name<br>&nbsp;&nbsp;&nbsp; self.age = age<br><br>&nbsp; def myfunc(self):<br>&nbsp;&nbsp;&nbsp; 
  print(&quot;Hello my name is &quot; + self.name)<br><br>p1 = Person(&quot;John&quot;, 
  36)<br>p1.myfunc()</div><br>

<div class="teaser clearfix"></div>


<div class="w3-note">
  <p><strong>Not:</strong> <code class="w3-codespan">__init__()</code> bir sınıfın kurucusudur aslında başlatıcıdır. <code class="w3-codespan"> __init__()</code> işlevi, nesnenin belleğinin tahsis edildiği anda çağrılır.</p>
</div>

<div class="teaser clearfix"></div>
<br>
<h3><code class="w3-codespan">self</code> Parametresi</h3><hr>
<p> <code class="w3-codespan">self</code> sınıfın kendisine bir referanstır ve sınıfa ait değişkenlere erişmek için kullanılır. 

<code class="w3-codespan">self</code> diye isimlendirilmek zorunda değildir, ne ile  istersen öyle çağırabilirsin, ama sınıftaki herhangi bir yordamın ilk parametresi olmalı:</p>

<div class="w3-code notranslate pythonHigh">
  class Person:<br>&nbsp; def __init__(mysillyobject, name, age):<br>&nbsp;&nbsp;&nbsp; 
  mysillyobject.name = name<br>&nbsp;&nbsp;&nbsp; mysillyobject.age = age<br><br>&nbsp; def myfunc(abc):<br>&nbsp;&nbsp;&nbsp; 
  print(&quot;Hello my name is &quot; + abc.name)<br><br>p1 = Person(&quot;John&quot;, 
  36)<br>p1.myfunc()</div>
 
<div class="w3-note">
  <p><strong>Not:</strong> <code class="w3-codespan">self</code> parametresi, sınıfa ait bir referanstır ve sınıfa ait değişkenlere erişmek için kullanılır.</p>
</div> 

<br>
<div class="teaser clearfix"></div>
<h3>Nesne Özniteliklerini Değiştir </h3><hr>
Bu gibi nesnelerdeki öznitelikleri değiştirebilirsiniz:
<p>p1'in yaşını 40'a ayarlayın:</p>
<div class="w3-code notranslate pythonHigh">
  p1.age = 40</div>

<div id="container">
        <textarea autocomplete="off" id="textareaCode" wrap="logical" rows="14" cols="35" spellcheck="false">
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)

p1.age = 40
print(p1.age)
</textarea>
</div>


<br>
<div class="teaser clearfix"></div>
<h3> Nesne Özniteliklerini Sil </h3><hr>
Nesnelerin Özniteliklerini <code class="w3-codespan">del</code> anahtar sözcüğünü kullanarak silebilirsiniz:
<p>age özniteliğini p1 nesnesinden silin:</p>
<div class="w3-code notranslate pythonHigh">
 del p1.age</div>

<div id="container">
        <textarea autocomplete="off" id="textareaCode" wrap="logical" rows="14" cols="35" spellcheck="false">
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)

del p1.age

print(p1.age)
</textarea>
</div>


<br>
<div class="teaser clearfix"></div>
<h3> Nesneleri Sil  </h3><hr>
Nesneleri <code class="w3-codespan">del</code> anahtar sözcüğünü kullanarak silebilirsiniz: 
<p>p1 nesnesini silin:</p>

<div class="w3-code notranslate pythonHigh">
 del p1</div>

<div id="container">
        <textarea autocomplete="off" id="textareaCode" wrap="logical" rows="14" cols="35" spellcheck="false">
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)

del p1

print(p1)
</textarea>
</div>


<div class="w3-container w3-content">
 <div class="w3-panel w3-white w3-card w3-display-container">
   <p> Ne yaptığınızı biliyorsanız, sınıfların nasıl karşılaştırıldığı, özniteliklerin nasıl tanımlandığı ve sınıfınızın alt sınıfları olarak kabul edilen sınıflar hakkında neredeyse tam kontrol sahibi olabilirsiniz.</p>
 </div>
</div> 
<!-- a class="w3-btn w3-margin-bottom">Just python 2 'Run'.</a-->
 
 
<!--python interpreter -->
<!--iframe src="https://trinket.io/embed/python/0bdde66575" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe-->

<!-- python interpreter -->
 
<script src="/scripts/dcl-react.js.gz"></script>

<a class="w3-btn w3-margin-bottom">Just python 3 'Run'.</a>
<div data-datacamp-exercise data-lang="python" data-height="auto">
      <code data-type="pre-exercise-code"></code>
      <code data-type="sample-code">
      </code>
      <code data-type="solution"></code>
      <code data-type="sct"></code>
</div>
<div class="w3-container w3-content">
   <p> Python 3 paket listesine bakınız: <br>documents.datacamp.com/default_python_packages.txt</p>
 </div>

