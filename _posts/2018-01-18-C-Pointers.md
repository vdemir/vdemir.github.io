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

Bu yazıda işaretçiler hakkında bilgi edineceksiniz; onlar nedir, onları nasıl kullanırsınız ve onlarla çalışırken karşılaşabileceğiniz yaygın hatalar nelerdir.

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="/images/pointer-treinamento.jpg" alt="programs" class="img-responsive" width="470px" height="313px"/>
  <p><small>Pointers &bull; İşaretçi Av Köpeği Yavrusu.</small></p>
</div>

Pointer işaretçiler, Java ve Python gibi diğer popüler programlama dillerinden farklı olarak C ve (C ++) programlamanın güçlü özelliklerindendir. 

Pointer işaretçiler, C programında belleğe erişmek ve adresi işletmek için kullanılır.


![C programming pointers](/images/PointersF.png "C programming pointers")

C'de Bellek Adresi
------------

Pointer işaretçiler kavramına girmeden önce, ilkin C'deki adres ifadesiyle tanış olalım.

Programınızda bir `var` değişkene sahipseniz, `&var`, size bellekteki değişkenin adresini verir, burada `& simgesi` referans operatörü olarak adlandırılır.

`scanf()` fonksiyon işlevini kullanırken bu gösterimi görmüş olmalısınız.
Fonksiyon işlevinde, var değişkeninin bellek adresine kullanıcının girilen değerini kaydetmek için kullanılmıştır.

~~~
scanf("%d", &var);
~~~
~~~c
/* C referans operatörünün kullanımını gösteren örnek */

    #include <stdio.h>
    int main()
    {
      int var = 5;
      printf("Value: %d\n", var);
      printf("Address: %u", &var);  // Dikkat, önce (&) var.
      return 0;
    }
~~~

~~~bash
**Output**

Value: 5 
Address: 2686778
~~~

**Not:** Bu kodu kullanırken farklı adres değeri elde edebilirsiniz.

Yukarıdaki kaynak kodda, değer: `5` bellek yerel adresi: `2686778`'de saklanır. `var`, sadece o yere verilen isimdir.

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
/* C pointer işaretçilerin kullanımını gösteren örnek */ 

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

**Not:** Bu kodu kullanırken farklı adres değeri elde edebilirsiniz.

![Working of pointers in C programming](/images/pointers.jpg "C pointers")

**Program ve şekil açıklaması**

1. **`int* pc;`** bir **pc** pointer işaretçi ve **int c** oluşturur; normal bir **c** değişken oluşturur.
**pc** ve **c** her ikisi de başlatılmadığından, pointer işaretçi pc hiçbir adresi işaret etmez ya da rastgele bir adrese işaret eder. Benzer şekilde, **c** değişkene bir adres atanır ancak rasgele/çöp değer içerir.
2.  **`c=22;`** tamsayı değeri 22'yi **c** değişkenine atar; diğer bir deyişle,  tamsayı değeri 22, **c** değişkeninin bellek yereline saklanır.
Bunu not et ki **`&c`** (**c** bellek adresini) yazdırırken, biz **%d** yerine **%u** kullanırız, çünkü bellek adresi genelde unsigned, işaretsiz bir tam sayı olarak ifade edilir (her zaman pozitiftir).
3.  **`pc=&c;`** **c** değişkenin bellek adresini pointer işaretçi **pc** ye atar.
Çıktı yazdırılırken, **pc** değeri **c**'nin bellek adresi ile aynı ve **(*pc)** değerinin de 22 olduğunu görürsünüz.
4.  **`c=11;`** değişken c'ye 11 atar.
Pointer işaretçi **pc** üzerindeki etkisini görmek için **c**'ye yeni bir değer atadık.
5.  **`pc`** pointer işaretçi, **`c`** ile aynı bellek adrese işaret ettiğinden, **pc** pointer işaretçisinin işaret ettiği değer de 11'dir.
**pc**'nin bellek adresini ve içeriğini basarak; değeri güncellenmiş içeriği, 11 olarak gösterir.
6.  **`*pc=2;`** **pc** pointer işaretçisinin gösterdiği bellek konumunun içerdiği değeri 2 olarak değiştirir.
**pc** pointer işaretçisinin adresi **c** değişkeninin adresi ile aynı olduğu için **c**'nin değeri de 2 olarak değişir.

**Pointer işaretçilerle çalışırken karşılaşılan genel hatalar**

Diyelim ki, pointer işaretçi pc'nin, c değişkeninin bellek adresini işaret etmesini istiyorsunuz. Sonra,
    
    int c, *pc;
    
    // Hatalı! pc içeriği bir adrestir oysa c bir adresi değildir.
    pc = c;
    
    // Hatalı! *pc adresin işaret ettiği bir değerken, &c bir adrestir.
    *pc = &c; 
    
    // Doğru! pc bir adres, ve &c de bir adres.
    pc = &c; 
    
    // Doğru! *pc adresin gösterdiği değerdir ve c de bir değerdir.
    *pc = c;

Her iki durumda da, pointer işaretçi `pc`, `c` bellek adresini işaret etmez.
