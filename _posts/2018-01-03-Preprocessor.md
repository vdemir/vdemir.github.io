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
<strong>Önişlemci Bildirimleri Hakkında Önemli Hususlar</strong>
<ul><em>
  <li>Önişlemci talimatları, kaynak kodunun derlenmesinden önce uygulanır.</li>
  <li>Tüm önişlemci talimatları bir # simgesi ile başlar.</li>
  <li>Önişlemci talimatları noktalı virgülle bitmez.</li>
</em></ul>
</div>
![_config.yml]({{ site.baseurl }}/images/C-PreProcessor.jpg)
<br/>
<div class="alert alert-success">
<strong>Önişlemci Talimat Tipleri</strong>
<ul><em>
<li> Macro Talimatları</li>
<li>Şartlı Derleme Talimatları</li>
<li>Dosya Dahil Etme Talimatları</li>
</em></ul>*[Macro]Büyük Ölçekte Geçerli Değer Yerleştirme
</div>

Önişlemci talimatlarının bir listesi aşağıdadır
<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th class="text-center">Talimat</th>
         <th class="text-center">Tanımı</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#include</b></td>
         <td class="myStripedTableItems text-left" width="75%">Bir C Programına üsbilgi dosyasını[header file] dahil eder.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#define</b></td>
         <td class="myStripedTableItems text-left" width="75%">İkame makrosudur. Bir ifade vasıtası ile sabit bir değeri programa yerleştirir.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#if</b></td>
         <td class="myStripedTableItems text-left" width="75%">Koşullu ifadenin sonucuna bağlı bir kod bloğu içerir.</td>
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
         <td class="myStripedTableItems text-left" width="75%">Eğer bir sabit değer daha önce #define ile tanımlanmışsa true döndürür.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#ifndef</b></td>
         <td class="myStripedTableItems text-left" width="75%">Eğer sabit değer daha önce #define ile tanımlanmamışsa true döndürür.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#pragma</b></td>
         <td class="myStripedTableItems text-left" width="75%">Derleyiciye özel komutlar verir.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#error</b></td>
         <td class="myStripedTableItems text-left" width="75%">Hata mesajını stderr'da yazdırır.</td>
      </tr>
   </tbody>
</table>
<hr/>

[![SUNMI(선미) _ Gashina(가시나)](http://img.youtube.com/vi/ur0hCdne2-s/0.jpg)](https://www.youtube.com/watch?v=ur0hCdne2-s)

[stdio - standart giriş / çıkış kitaplığı işlevleri](http://man7.org/linux/man-pages/man3/stdio.3.html)

> [stdin, stdout, stderr - standart G / Ç akışları](http://icecube.wisc.edu/~dglo/c_class/stdio.html)

>

~~~c 
#include <stdio.h>

FILE *stdin;
FILE *stdout;
FILE *stderr;
~~~

3 dosya tanımlayıcı, stdin, stdout ve stderr (std = standart) vardır.
Bunlar giriş, çıkış ve hata çıkışı için standart akışlardır.
Varsayılan olarak, standart girdi klavyeden okunurken, standart çıktı ve standart hata ekrana yazdırılır.
>


~~~c
#include <stdio.h>
int getc(FILE *stream);
int getchar(void);
FILE *freopen(const char *pathname, const char *mode, FILE *stream);
int printf(const char *format, ...);
~~~

printf () işlevleri çıktıyı stdout'a yazar. getchar() eşdeğeri getc(stdin) dir.
getchar () akımdaki bir sonraki karakteri okur ve onu bir int veya dosya sonundaki EOF'ye atanan bir işaretsiz char olarak döndürür.

Bu işaretçiler, işlevler için argüman olarak kullanılabilir. getchar ve putchar gibi bazı işlevler otomatik olarak stdin ve stdout kullanır.

Bu işaretçiler sabittir ve yeni değerler atanamaz. freopen işlevi, akışları disk dosyalarına veya diğer aygıtlara yönlendirmek için kullanılabilir. İşletim sistemi, bir programın standart giriş ve çıkışını komut düzeyinde yönlendirmenizi sağlar.
>
[UNIX/Linux ve Windows Sistemlerinde stdin, stdout ve stderr Dosyaları](http://www.kaanaslan.com/resource/article/display_article.php?id=82)

## Yönlendirmeler
1 stdout and 2 stderr yi temsil eder.

~~~bash

         grep * 1> & 2
        
~~~
Bu, bir programın stderr çıkışının stdout'tan daha önce aynı dosyalayıcıya yazılmasına neden olacaktır.

Burada, komutun stdout kısmı stderr'a gönderilir.

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


