---
layout: post
title:  C'de Pointer İşaretçiler
date:   2018-01-16 13:52:00
tags:   Pointer
comments: False
---

{{ page.title }}
================
{% include CSS.html %}

<p class="meta">16 Ocak 2018 - Türkiye</p>

C Programlamada Pointers İşaretçiler
-------------

Bu yazıda işaretçiler hakkında bilgi edineceksiniz; onlar nedir, onları nasıl kullanırsınız ve onlarla çalışırken karşılaşabileceğiniz yaygın hatalar.

![C programming pointers](/images/c-pointers.jpg "C programming pointers")

Pointers işaretçileri, Java ve Python gibi diğer popüler programlama dillerinden farklı olarak C ve (C ++) programlamanın güçlü özelliklerindendir. 

Pointers işaretçiler, C programında belleğe erişmek ve adresi işletmek için kullanılır.


![C programming pointers](/images/PointersF.png "C programming pointers")

C'de Bellek Adresi
------------

İşaretçileri kavramına girmeden önce, ilkin C'deki adresle aşina olalım.

Programınızda bir `var` değişkene sahipseniz, `&var`, size bellekteki adresini verir, burada `&` reference operatörü olarak adlandırılır.

`scanf()` fonksiyon işlevini kullanırken bu gösterimi görmüş olmalısınız.
Fonksiyonda, var'ın bellek adresine kullanıcının girilen değerini kaydetmek için kullanılmıştır.

~~~c
scanf("%d", &var);

    /* C programlamada referans operatörünün kullanımını gösteren örnek. */
    #include <stdio.h>
    int main()
    {
      int var = 5;
      printf("Value: %d\n", var);
      printf("Address: %u", &var);  //Notice, the ampersand(&) before var.
      return 0;
    }
~~~

~~~bash
**Output**

Value: 5 
Address: 2686778
~~~

**Not:** Bu kodu kullanırken farklı adres değeri elde edebilirsiniz.

Yukarıdaki kaynak kodunda, değer `5` bellek yereli `2686778`'de saklanır. `var`, sadece o yere verilen isimdir.

Pointer İşaretçi Değişkenler
-----------------

C'de sadece başka bir değişkenin adresini saklamanızı sağlayan özel bir değişken vardır. Pointer değişkeni veya basitçe pointer işaretçi olarak adlandırılır.

Pointer İşaretçinin Beyanı
~~~
data_type* pointer_variable_name;
int* p;
~~~

Yukarıdaki deyim, p'yi, `int` data tipinde bir pointer işaretçi değişkeni olarak tanımlar.

### Referans işleci (&) ve Referans kaldırma işleci (*)

Tartışıldığı üzere &, referans operatörü olarak adlandırılır. Bir değişkenin bellekteki adresini verir.

Aynı şekilde, size adresten değer alan başka bir operatör vardır, buna bir referans kaldırma operatörü (*) denir.

Aşağıdaki örnek, pointer işaretçiler, referans operatörü (&) ve referans kaldırma operatörünün (*) kullanımını açıkça göstermektedir.

**Not:** Pointer işaretçi bildirirken * işareti, referans kaldırmayla ilgili bir operatör değildir. Bir pointer işaretçi oluşturan sadece benzer bir gösterimdir.

### Pointer İşaretçilerin Çalışmasını Gösteren Örnek

~~~c
/* C programında pointer işaretçilerin kullanımını gösteren kaynak kod */
#include <stdio.h>
int main(){
     int* pc;
     int c;
     c=5;
     printf("Address of c:%u\n",&c);
     printf("Value of c:%d\n\n",c);
     pc=&c;
     printf("Address of pointer pc:%u\n",&pc);
     printf("Content of pointer pc:%d\n\n",pc);
     printf("Value of pointer *pc:%d\n\n",*pc);
     c=11;
     printf("Value of c:%d\n\n",c);
     printf("Address of pointer pc:%u\n",&pc);
     printf("Content of pointer pc:%d\n\n",pc);
     printf("Value of pointer *pc:%d\n\n",*pc);
     *pc=2;
     printf("Value of *pc:%d\n\n",*pc);
     printf("Address of c:%u\n",&c);
     printf("Value of c:%d\n\n",c);
     return 0;
 }
~~~
~~~bash
**Output**

Address of c:2686760
Value of c:5

Address of pointer pc:2686764
Content of pointer pc:2686760

Value of pointer *pc:5

Value of c:11

Address of pointer pc:2686764
Content of pointer pc:2686760

Value of pointer *pc:11

Value of *pc:2

Address of c:2686760
Value of c:2
~~~

![Working of pointers in C programming](/images/pointers.jpg "C pointers")

**Program ve şekil açıklaması**

1. `int* pc;` bir pointer işaretçi pc ve int c oluşturur; normal bir c değişken oluşturur.
pc ve c her ikisi de başlatılmadığından, pointer işaretçi pc hiçbir adresi işaret etmez ya da rastgele bir adrese işaret eder. Benzer şekilde, c değişkene bir adres atanır ancak rasgele/çöp değer içerir.
2.  `c=22;` tamsayı değeri 22'yi c değişkenine atar; diğer bir deyişle,  tamsayı değeri 22, c değişkeninin bellek yereline saklanır.
Bunu not et ki `&c` (c bellek adresini) yazdırırken, biz %d yerine %u kullanırız, çünkü bellek adresi genelde unsigned, işaretsiz bir tam sayı olarak ifade edilir (her zaman pozitiftir).
3.  `pc=&c;` c değişkenin bellek adresini pointer işaretçi "pc" ye atar.
Çıktı yazdırılırken, pc değeri c'nin bellek adresi ile aynı ve (*pc) değerinin de 22 olduğunu görürsünüz.
4.  `c=11;`; değişken c'ye 11 atar.
pointer işaretçi pc üzerindeki etkisini görmek için c'ye yeni bir değer atadık.
5.  Since, pointer pc points to the same address as c, value pointed by pointer pc is 11 as well.  
    Printing the address and content of pc shows the updated content as 11.
6.  `*pc=2;` changes the contents of the memory location pointed by pointer pc to 2.  
    Since the address of pointer pc is same as address of c, value of c also changes to 2.

#### Common mistakes when working with pointers

Suppose, you want pointer pc to point to the address of c. Then,

    
    int c, *pc;
    
    // Wrong! pc is address whereas, c is not an address.
    pc = c;  
    
    // Wrong! *pc is the value pointed by address whereas, %amp;c is an address.
    *pc = &c; 
    
    // Correct! pc is an address and, %amp;pc is also an address.
    pc = &c; 
    
    // Correct! *pc is the value pointed by address and, c is also a value.
    *pc = c;

In both cases, pointer pc is not pointing to the address of c.
