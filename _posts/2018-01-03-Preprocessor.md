---
layout: post
title:  C Programlamada Önişlemci Bildirimleri
date:   2018-01-03 12:52:00
tags:   C11 Programlama
comments: False
---

{{ page.title }}
================

<p class="meta">3 Ocak 2018 - Türkiye</p>

<p class="myParagraph">
C Önişlemci[Preprocessor] bildirimleri derleyicinin[compiler] bir parçası değildir ancak C programlama dilinin gücünü genişletir. Tüm önişlemci bildirimleri[direktifleri] bir # simgesi[sembolü] ile başlar.<br/><br/>
Önişleme adımı, programın kaynak kodunun derlenmesinden önce başlar ve asıl derleme öncesi gerekli ön-işlemlerin yapılmasını derleyiciye bildirir.
</p><a name='more'></a>
![_config.yml]({{ site.baseurl }}/images/IncludeLibrary.png)
<div class="alert alert-info">
<strong>Önişlemci Bildirimleri Hakkında Önemli Noktalar</strong>
<ul><em>
  <li>Önişlemci bildirimleri, kaynak kodunun derlenmesinden önce işlenir.</li>
  <li>Tüm önişlemci bildirimleri bir # simgesi ile başlar.</li>
  <li>Önişlemci bildirimleri noktalı virgülle bitmez.</li>
</em></ul>
</div>
<br/>
<div class="alert alert-success">
<strong>Önişlemci Bildirim Türleri</strong>
<ul><em>
<li>Büyük Ölçekte Geçerli Yerleştirme[Macro] Bildirimleri</li>
<li>Şartlı Derleme Bildirimleri</li>
<li>Dosya İçeriği Bildirimleri</li>
</em></ul>
</div>
Önişlemci Bildirimlerinin listesi aşağıdadır
<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th class="text-center">Bildirim</th>
         <th class="text-center">Tanımı</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#include</b></td>
         <td class="myStripedTableItems text-left" width="75%">Bir C Programında üsbilgi dosyasını içerir.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#define</b></td>
         <td class="myStripedTableItems text-left" width="75%">İkame makrosudur. Sabit bir değeri bir ifadeyle değiştirir.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#if</b></td>
         <td class="myStripedTableItems text-left" width="75%">Koşullu ifadenin sonucunda buna bağlı bir kod bloğu içerir.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#else</b></td>
         <td class="myStripedTableItems text-left" width="75%">#if'in tamamlayıcısıdır.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#elif</b></td>
         <td class="myStripedTableItems text-left" width="75%">#else ve #if ile  benzerdir.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#endif</b></td>
         <td class="myStripedTableItems text-left" width="75%">Bu, #if, #elif gibi koşullu yönergelerin sonunu işaretler.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#undef</b></td>
         <td class="myStripedTableItems text-left" width="75%">Tanımsız bir önişlemci makrosu.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#ifdef</b></td>
         <td class="myStripedTableItems text-left" width="75%">Eğer sabit daha önce #define ile tanımlanmışsa true döndürür.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#ifndef</b></td>
         <td class="myStripedTableItems text-left" width="75%">Sabit daha önce #define ile tanımlanmamışsa true döndürür.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#pragma</b></td>
         <td class="myStripedTableItems text-left" width="75%">Derleyici için özel komutlar gönderir.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#error</b></td>
         <td class="myStripedTableItems text-left" width="75%">Hata mesajını stderr'da yazdırır.</td>
      </tr>
   </tbody>
</table>
<hr/>
<br/>
<h2 id="myH2">#include önişlemci bildirimleri</h2>
<p class="myParagraph">
#include Önişlemci Bildirimleri, C Programında üstbilgi(*.h) dosyasını eklemek için kullanılır. Yol belirtilmemişse, geçerli dizindeki üstbilgi(*.h) dosyasını denetler. Kullanıcı tanımlı üstbilgi(*.h) dosyasını eklemek için açılı parantez<> yerine çift tırnak"" işareti kullanıyoruz.
</p>
<i>Örneğin</i><br/>
~~~c
#include <string.h>          // Standard ÜstBilgi Dosyası
#include "myHeaderFile.h"    // Kullanıcı Tanımlı ÜstBilgi Dosyası
~~~
<p class="myParagraph">
İlk satır Önişlemciye bu satırı string.h başlık dosyasının içeriğiyle değiştirmesini söyler.<br/>
İkinci satır önişlemciye myHeaderFile.h dosyasını geçerli dizinden almasını ve myHeaderFile.h dosyasının içeriğini eklemesini söyler.
</p>
<hr/>
<br/>
<h2 id="myH2">#define önişlemci bildirimleri</h2>
<p class="myParagraph">
Bu basit bir büyük ölçekte geçerli yerleştirmedir. Sabitin tüm tekrarlamalarını yerlerine koyar ve bir ifadeyle değiştirir. 
</p>
~~~
#define identifier value
~~~
<ul>
<li><b>#define</b> : Metin[text] yerleştirme için kullanılan önişlemci bildirimidir. </li><br/>
<li><b>identifier</b> : Programda kullanılan ve değeri ile değiştirilecek bir tanımlayıcıdır. </li><br/>
<li><b>value</b> : Tanımlayıcı için değiştirilecek değerdir.</li><br/>
</ul>
<i>Örneğin</i><br/>
~~~
#define PIE 3.141
#define ZERO 0
~~~

<hr/>
<br/>
<strong>#define Ön işlemci bildirimlerinin kullanımını göstermek için C programı .</strong>
~~~c
#include <stdio.h>

#define PI 3.141

int main(){
    int radius;
    float circumference;
    printf("Dairenin yarıçapını girin:?");
    scanf("%d", &radius);
    
    circumference = 2*PI*radius;
    
    printf("Çemberin Çevresi = %f\n", circumference);

    return 0;
}
~~~
<br/>
Program çıktısı
~~~
./my_app
Dairenin yarıçapını girin:?77
Çemberin Çevresi = 483.713989
~~~

<hr/>
<br/>
#  #define seçenekleri ile büyük ölçekte geçerli yerleştirme

<p class="myParagraph">
#define ön-işlem bildirimi, parametrelerle büyük ölçekte geçerli tanımları yazmak için kullanılabilir.
</p>

<div class="alert alert-info">
<ul>
    <li>Büyük ölçekte geçerli bir tanımlayıcı[identifier] ile karşılaşıldığında, değişkenler C programındaki gerçek bağımsız değişkenlerle değiştirilir.</li>
    <li>Büyük ölçekte geçerli bağımsız değişkenler için tanımlanmış veri türü yoktur. Int, float vb. gibi sayısal değerleri geçirebilirsiniz.</li>
    <li>Büyük ölçekte geçerli bağımsız değişkenler, büyük/küçük harf duyarlı değildir.</li>
</ul>
</div>
<i>Örneğin</i><br/>
~~~
#define circumference(r) (2*3.141*(r))
~~~

<hr/>
<br/>
<h2 id="myH2small">Değişkenleri büyük ölçekte geçerli yerleştirmeyi Gösteren C Programı</h2>
~~~c
#include <stdio.h>
#include <locale.h>

#define circumference(r) (2*3.141*(r))

int main(){
    int radius;
    float c;
    struct lconv *loc;

    setlocale (LC_ALL, "tr_TR.UTF-8");
    loc = localeconv();

    printf("Dairenin yarıçapını girin:?");
    scanf("%d", &radius);
    
    c = circumference(radius); 

    printf("Çemberin Çevresi = %f\n", c);
    printf("Para birimi sembolü: %s\n", loc->currency_symbol);
    return 0;
}
~~~
<br/>
Program Çıktısı
~~~
Dairenin yarıçapını girin:?77
Çemberin Çevresi = 483,713989
Para birimi sembolü: ₺
~~~

<hr/>
<br/>
<strong>#if, #else ve #endif Koşullu Derleme Önişlemci Bildirimleri</strong>

<p class="myParagraph">
Koşullu Derleme Bildirimleri, koşullu ifadenin sonucuna dayalı bir kod bloğu eklememizi sağlar. 
</p>
~~~
#if Condition_Expression
    statements;
#else
    statements;
#endif
~~~
<br/>
#If, #else durumuna benzer ancak derlemeden önce, (Condition_Expression) yalnızca sabit bir ifade olmalıdır.
<br/>
<h2 id="myH2small">#if, #else ve #endif kullanarak Koşullu Derlemeyi gösteren C programı.
</h2>
~~~c
#include<stdio.h>
#define NUM 11

void main()
{
#if((NUM%2)==0)
      printf("Sayi Cifttir\n");
#else
      printf("Sayi Tektir\n");
#endif
}
~~~
<br/>
Program Çıktısı
~~~
gcc -o my_app *.c
Sayi Tektir
~~~
<br/>
<h2>Başka Bir Örnekte #if ve #else Kullanımı</h2>
~~~c
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{ 
    int ch;
    while ((ch=getchar()) != EOF) /* stdin(klavyeden) "abcde" oku/yaz */
          printf("%c", ch);
 
    /* EOF'ye ulaşma nedenini test et. */
    if (feof(stdin)) /* eğer dosya sonu durumundan kaynaklanan bir arıza varsa */
       puts("Dosya sonuna ulaşıldı");
    else if (ferror(stdin)) /* eğer başarısızlık başka bir hatadan kaynaklanırsa */
        {
          perror("getchar()");
          fprintf(stderr,"getchar() dosya %s satırda başarısız oldu # %d\n", __FILE__,__LINE__-9);
          exit(EXIT_FAILURE);
        }
 
    return EXIT_SUCCESS;
}
~~~
<br/>
Program Çıktısı
~~~
gcc -o my_app *.c
rty45h546543dfdezü
rty45h546543dfdezü
""""""""""""""
""""""""""""""
431368/+*+
431368/+*+

~~~

<hr/>
<br/>
<h2 id="myH2">C Dilinde Önceden Tanımlanmış Büyük Ölçekte Yerleştirmeler</h2>
<p class="myParagraph">
C Programlama dili, bir dizi büyük ölçekte geçerli yerleştirmeler tanımlar. Aşağıda, yaygın olarak kullanılan bazı büyük ölçekte yerleştirmelerin[Macro] listesi bulunmaktadır.
</p>
<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th class="text-center">Macro</th>
         <th class="text-center">Tanımı</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>NULL</b></td>
         <td class="myStripedTableItems text-left" width="75%">Bir boş[NULL] gösterici sabitinin değeri.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>EXIT_SUCCESS</b></td>
         <td class="myStripedTableItems text-left" width="75%">Programın başarıyla tamamlanması durumunda çıkış fonksiyonunun geri dönüş değeri.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>EXIT_FAILURE</b></td>
         <td class="myStripedTableItems text-left" width="75%">Başarısızlık nedeniyle programın sonlandırılması durumunda geri döndürülecek çıkış fonksiyonu değeri. </td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>RAND_MAX</b></td>
         <td class="myStripedTableItems text-left" width="75%">Rand işlevi tarafından döndürülen maksimum değer.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__FILE__</b></td>
         <td class="myStripedTableItems text-left" width="75%">Geçerli dosya adını bir dize olarak içerir.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__LINE__</b></td>
         <td class="myStripedTableItems text-left" width="75%">Geçerli satır sayısını bir tam sayı sabiti olarak içerir.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__DATE__</b></td>
         <td class="myStripedTableItems text-left" width="75%">MM DD YYYY" biçiminde geçerli tarih içerir.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__TIME__</b></td>
         <td class="myStripedTableItems text-left" width="75%">HH: MM: SS" biçimindeki geçerli saati içerir.</td>
      </tr>
   </tbody>
</table>

<br/>
# Önceden tanımlanmış büyük ölçekte geçerli yerleştirmelerin değerini basan C programı

~~~c
#include <stdio.h>
#include <stdlib.h>

int main(){
   printf("NULL : %d\n", NULL );
   printf("EXIT_SUCCESS : %d\n", EXIT_SUCCESS );
   printf("EXIT_FAILURE : %d\n", EXIT_FAILURE );
   printf("RAND_MAX : %d\n", RAND_MAX );
   printf("File Name : %s\n", __FILE__ );
   printf("DATE : %s\n", __DATE__ );
   printf("Line : %d\n", __LINE__ );

   return 0;
}
~~~
<!-- SyntaxHighllighter HTML Ends here --> 
<!-- Program Output Starts -->
<br/>
Program Çıktısı
~~~
NULL : 0
EXIT_SUCCESS : 0
EXIT_FAILURE : 1
RAND_MAX : 2147483647
File Name : PreProcessorMacro.c
DATE : Jan  7 2018
Line : 11
~~~
<br/>


