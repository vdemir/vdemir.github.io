---
layout: post
title:  Kendi Lisp'inizi Oluşturun - Temel Bilgiler
date:   2018-01-04 14:52:00
tags:   C Programlama Lisp
comments: False
---

{{ page.title }}
================

<p class="meta">8 Ocak 2018 - Türkiye</p>

Temel Bilgiler • Bölüm 1
==================

Genel Bakış
--------

* * *

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="/images/YA2_142_143_at_nali_yengeci.jpg" alt="programs" class="img-responsive" width="425px" height="325px"/>
  <p><small>Fosil &bull; At Nalı Yengeci.</small></p>
</div>

Bu bölümde, C'nin temel özelliklerine hızlı bir genel bakış hazırladım. C'de çok az _features_ var ve _syntax_ nispeten basittir. Ancak bu kolay anlamına gelmez. Tüm derinlik yüzeyin altına gizlenir. Bu nedenle _features_ ve _syntax_'ı şimdi oldukça hızlı bir şekilde ele alacağız ve devam edersek bunları daha derinlemesine göreceğiz.

Bu bölümün amacı, herkesin aynı sayfada olmasıdır. Dolayısıyla, mevcut tecrübeye sahip olanlar, atlamayı ve gerekirse daha sonra geri dönmeyi daha kolay bulabilirken, C'ye tamamen yabancı olan insanlar biraz zaman ayırmalıdır.

Programlar
--------

* * *

C'deki bir program yalnızca _function_ tanımları ve _structure_ tanımları'ndan oluşur.

Dolayısıyla, bir kaynak kod dosyası sadece _functions_ ve _types_'in bir listesidir. Bu fonksiyon işlevleri birbirlerini veya kendi kendilerini arayabilir ve deklare edilen veya dile yerleştirilmiş olan herhangi bir _data type_ kullanabilir.

Diğer _header_ kitaplıklarındaki fonksiyon işlevlerini çağırmak veya onların _data type_ türlerini kullanmak mümkündür. Bu, karmaşıklığın katmanlarının C programlamasında nasıl biriktirildiği ile ilgili bir durumu göstermektedir.

Önceki bölümde gördüğümüz gibi, bir C programının yürütülmesi daima `main` olarak adlandırılan fonksiyon işlevi ile başlar. Buradan itibaren, programın gerektirdiği tüm eylemleri gerçekleştirmek için giderek daha fazla işlev çağrılır.

Değişkenler
---------

* * *

C'deki fonksiyon işlevleri, değişken _variable_ değerler üzerinde değişiklik yapmaktan ibarettir. Bunlar, birer isim verdiğimiz veri parçalarıdır.

C'deki her değişken belirgin bir _data type_ türüne sahiptir. _data type_ türleri tarafımızdan bildirilir veya dile kendiliğinden dahildirler. Yeni bir değişkeni tipini takiben ismini yazarak tanımlayabiliriz ve isteğe bağlı olarak onu `=` kullanarak bazı değerlere ayarlayabiliriz. Bu deklare edilen bildirim bir _statement_ ifadesidir ve C'deki tüm _statements_ ifadeleri noktalı virgül ';' ile sonlandırırız.

`count` adında yeni bir `int` _data type_ oluşturmak için aşağıdakileri yazabiliriz ...

    int count;

veya onu bildirmek ve değerini ayarlamak için ...

    int count = 10;

Aşağıda bazı dile ait yerleşik _data type_ türü örnekleri ve tanımları verilmiştir.

|  Tip    |  Tanım
|---------|-------------------------------------------------------
| `void`  |  Boş, içeriksiz, önemsiz Tip
| `char`  |  Tek Karakter/Byte	                    | `char son_baş_harf = 'H';`
| `int`	  |  Tamsayı			            | `int yaş = 23;`
| `long`  |  Büyük değerler tutabilen tamsayı       | `long evrenin_yaşı = 13798000000;`
| `float` |  Ondalık Sayı		            | `float litre_başına_bardak = 0.568;`
| `double`|  Daha kesin olan ondalık sayı           | `double kırlangıç_hızı = 0.01072896;`	

<br/>

İşlev Bildirimleri[Function Declarations]
---------------------

* * *

Bir işlev[function], değişkenleri[variables] işleyen ve isteğe bağlı olarak programın durumunu değiştiren bir hesaplamadır. Giriş olarak bazı değişkenler alır ve çıktı olarak tek bir değişkeni döndürür.

Bir işlevi tanımlamak için, döndürdüğü değişkenin türünü[_int_], işlevin adını[_add together_] ve ardından parantez içinde virgülle ayrılmış girdi olarak alınan değişkenlerin[_x_,_y_] bir listesini yazarız. İşlevin içeriği kaşlı ayraç {} içine konur ve işlevi yürütülen ve noktalı virgüllerle sonlandırılan tüm ifadeler listelenir. Bir `return` deyimi, işlevin bitmesini ve bir değişken çıktılamasını sağlamak için kullanılır.

Örneğin, `x` ve `y` olarak adlandırılan iki `int` değişkeni alan ve onları bir araya getiren bir işlev şöyle görünebilir.

    int add_together(int x, int y) {
      int result = x + y;
      return result;
    }

İşlevleri isimlerini yazarak ve argümanları parantez içinde virgülle ayırarak çağırırız. Örneğin, yukarıdaki fonksiyonu çağırmak ve sonucu `added` değişkeninde saklamak için aşağıdakileri yazacağız.


    int added = add_together(10, 18);

<br/>

Structure Declarations
----------------------

* * *

Structures are used to declare new _types_. Structures are several variables bundled together into a single package.

We can use structure to represent more complex data types. For example to represent a point in 2D space we could create a structure called `point` that packs together two `float` (decimal) values called `x` and `y`. To declare structures we can use the `struct` keyword in conjunction with the `typedef` keyword. Our declaration would look like this.

    typedef struct {
      float x;
      float y;
    } point;

We should place this definition above any functions that wish to use it. This type is no different to the built in types, and we can use it in all the same ways. To access an individual field we use a dot `.`, followed by the name of the field, such as `x`.

    point p;
    p.x = 0.1;
    p.y = 10.0;
    
    float length = sqrt(p.x * p.x + p.y * p.y);
    

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="/images/dog_and_girl.jpg" alt="programs" class="img-responsive" width="280px" height="210px"/>
  <p><small>Dostluk &bull; Köpek ve Kız.</small></p>
</div>

Pointers
--------

* * *

A pointer is a variation on a normal type where the type name is suffixed with an asterisk. For example we could declare a _pointer to an integer_ by writing `int*`. We already saw a pointer type `char** argv`. This is a _pointer to pointers to characters_, and is used as input to `main` function.

Pointers are used for a whole number of different things such as for strings or lists. These are a difficult part of C and will be explained in much greater detail in later chapters. We won't make use of them for a while, so for now it is good to simply know they exist, and how to spot them. Don't let them scare you off!

Strings
-------

* * *

In C strings are represented by the pointer type `char*`. Under the hood they are stored as a list of characters, where the final character is a special character called the _null terminator_. Strings are a complicated and important part of C, which we'll learn to use effectively in the next few chapters.

Strings can also be declared literally by putting text between quotation marks. We used this in the previous chapter with our string `"Hello, World!"`. For now, remember that if you see `char*`, you can read it as a _string_.

Conditionals
------------

* * *

Conditional statements let the program perform some code only if certain conditions are met.

To perform code under some condition we use the `if` statement. This is written as `if` followed by some condition in parentheses, followed by the code to execute in curly brackets. An `if` statement can be followed by an optional `else` statement, followed by other statements in curly brackets. The code in these brackets will be performed in the case the conditional is false.

We can test for multiple conditions using the logical operators `||` for _or_, and `&&` for _and_.

Inside a conditional statement's parentheses any value that is not `0` will evaluate to true. This is important to remember as many conditions use this to check things implicitly.

If we wished to check if an `int` called `x` was greater than `10` and less than `100`, we would write the following.

    if (x > 10 && x < 100) {
      puts("x is greater than 10 and less than 100!");
    } else {
      puts("x is less than 11 or greater than 99!");
    }

Loops
-----

* * *

Loops allow for some code to be repeated until some condition becomes false, or some counter elapses.

There are two main loops in C. The first is a `while` loop. This loop repeatedly executes a block of code until some condition becomes false. It is written as `while` followed by some condition in parentheses, followed by the code to execute in curly brackets. For example a loop that counts downward from `10` to `1` could be written as follows.

    int i = 10;
    while (i > 0) {
      puts("Loop Iteration");
      i = i - 1;
    }

The second kind of loop is a `for` loop. Rather than a condition, this loop requires three expressions separated by semicolons `;`. These are an _initialiser_, a _condition_ and an _incrementer_. The _initialiser_ is performed before the loop starts. The _condition_ is checked before each iteration of the loop. If it is false, the loop is exited. The _incrementer_ is performed at the end of each iteration of the loop. These loops are often used for counting as they are more compact than the `while` loop.

For example to write a loop that counts up from `0` to `9` we might write the following. In this case the `++` operator increments the variable `i`.

    for (int i = 0; i < 10; i++) {
      puts("Loop Iteration");
    }

Bonus Marks
-----------

* * *

*   › Use a `for` loop to print out `Hello World!` five times.
*   › Use a `while` loop to print out `Hello World!` five times.
*   › Declare a function that outputs `Hello World!` `n` number of times. Call this from `main`.
*   › What built in types are there other than the ones listed?
*   › What other conditional operators are there other than _greater than_ `>`, and _less than_ `<`?
*   › What other mathematical operators are there other than _add_ `+`, and _subtract_ `-`?
*   › What is the `+=` operator, and how does it work?
*   › What is the `do` loop, and how does it work?
*   › What is the `switch` statement and how does it work?
*   › What is the `break` keyword and what does it do?
