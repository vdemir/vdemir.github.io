---
layout: post
title:  C Programlamada Önişlemci Bildirimleri
date:   2018-01-03 12:52:00
tags:   C Programlama
comments: False
---

{{ page.title }}
================

<p class="meta">3 Ocak 2018 - Türkiye</p>

<p class="myParagraph">
C Önişlemci[Preprocessor] bildirimleri derleyicinin[compiler] bir parçası değildir ancak C programlama dilinin gücünü genişletir. Tüm önişlemci bildirimleri bir # simgesi ile başlar.<br/><br/>
Önişlem adımı kaynak kodunun derlenmesinden önce gelir ve derleyiciye gerçek derleme öncesi gereken ön-işlemleri yapmasını bildirir.
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
<li>Makro İkame</li>
<li>Şartlı Derleme</li>
<li>Dosya İçeriği</li>
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
~~~
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
Bu basit bir büyük ölçekte yerleştirmedir. Sabitin tüm tekrarlamalarını yerlerine koyar ve bir ifadeyle değiştirir. 
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
<strong>#define Ön İşlemci Bildirimlerinin kullanımını göstermek için C programı .</strong>
~~~
#include <stdio.h>
#include <conio.h>

#define PI 3.141

int main(){
    int radius;
    float circumference;
    printf("Enter the radius of circle\n");
    scanf("%d", &radius);
    
    circumference = 2*PI*radius;
    
    printf("Circumference of Circle = %f", circumference);
    
    getch();
    return 0;
}
~~~
<br/>
Program çıktısı
~~~
Enter the radius of circle
5
Circumference of Circle = 31.410000
~~~

<hr/>
<br/>
#  İlgili #define seçenekleri ile büyük ölçekte yerleştirme

<p class="myParagraph">
#define Önişleme bildirimi, parametrelerle büyük ölçekte tanımları yazmak için kullanılabilir.
</p>

<div class="alert alert-info">
<ul>
    <li>Büyük ölçekte bir program boyunca tanımlayıcı[identifier] ile karşılaşıldığında, değişkenler C programındaki gerçek bağımsız değişkenlerle değiştirilir.</li>
    <li>Büyük ölçekte[program boyunca] bağımsız değişkenler için tanımlanmış veri türü yoktur. Int, float vb. gibi sayısal değerleri geçirebilirsiniz.</li>
    <li>Büyük ölçekte [prgram boyunca] bağımsız değişkenler, büyük/küçük harf duyarlı değildir.</li>
</ul>
</div>
<i>Örneğin</i><br/>
~~~
#define circumference(r) (2*3.141*(r))
~~~

<hr/>
<br/>
<h2 id="myH2small">Değişkenlerle Büyük Ölçekte yerleştirmeyi Gösteren C Programı</h2>
~~~
#include <stdio.h>
#include <conio.h>

#define circumference(r) (2*3.141*(r))

int main(){
    int radius;
    float c;
    printf("Enter the radius of circle\n");
    scanf("%d", &radius);
    
    c = circumference(radius);
    
    printf("Circumference of Circle = %f", c);
    
    getch();
    return 0;
}
~~~
<br/>
Program Çıktısı
~~~
Enter the radius of circle
5
Circumference of Circle = 31.410000
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
#If, #else durumuna benzer ancak derlemeden önce, 
<br/>(Condition_Expression) yalnızca sabit bir ifade olmalıdır.
<h2 id="myH2small">#if, #else ve #endif kullanarak Koşullu Derlemeyi gösteren C programı.
</h2>
~~~
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

Başka Bir Örnekte #if ve #else Kullanımı
~~~
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{ 
    int ch;
    while ((ch=getchar()) != EOF)   /* stdin(klavyeden) "abcde" oku/yaz */
          printf("%c", ch);
 
    /* Test reason for reaching EOF. */
    if (feof(stdin))          /* eğer dosya-sonu durumundan kaynaklanan bir arıza varsa */
       puts("End of file reached");
    else if (ferror(stdin))   /* eğer başarısızlık başka bir hatadan kaynaklanırsa      */
         {
            perror("getchar()");
            fprintf(stderr,"getchar() failed in file %s at line # %d\n", __FILE__,__LINE__-9);
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
<h2 id="myH2">Predefined Macros in C Language</h2>
<p class="myParagraph">
C Programming language defines a number of macros. Below is the list of some commonly used macros.
</p>
<!-- Paragraph HTML Ends Here -->
<!-- Striped Table HTML Starts here -->
<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th class="text-center">Macro</th>
         <th class="text-center">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>NULL</b></td>
         <td class="myStripedTableItems text-left" width="75%">Value of a null pointer constant.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>EXIT_SUCCESS</b></td>
         <td class="myStripedTableItems text-left" width="75%">Value for the exit function to return in case of successful completion of program.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>EXIT_FAILURE</b></td>
         <td class="myStripedTableItems text-left" width="75%">Value for the exit function to return in case of program termination due to failure.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>RAND_MAX</b></td>
         <td class="myStripedTableItems text-left" width="75%">Maximum value returned by the rand function.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__FILE__</b></td>
         <td class="myStripedTableItems text-left" width="75%">Contains the current filename as a string.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__LINE__</b></td>
         <td class="myStripedTableItems text-left" width="75%">Contains the current line number as a integer constant.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__DATE__</b></td>
         <td class="myStripedTableItems text-left" width="75%">Contains current date in "MMM DD YYYY" format.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__TIME__</b></td>
         <td class="myStripedTableItems text-left" width="75%">Contains current time in "HH:MM:SS" format.</td>
      </tr>
   </tbody>
</table>
<!-- Striped Table HTML Ends here -->
<h2 id="myH2small">C Program to print value of Predefined Macros</h2>
<!-- SyntaxHighllighter HTML Starts here --> 
<pre class="brush: cpp;toolbar: false; gutter: true;">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;conio.h&gt;

int main(){
   printf(&quot;NULL : %d\n&quot;, NULL );
   printf(&quot;EXIT_SUCCESS : %d\n&quot;, EXIT_SUCCESS );
   printf(&quot;EXIT_FAILURE : %d\n&quot;, EXIT_FAILURE );
   printf(&quot;RAND_MAX : %d\n&quot;, RAND_MAX );
   printf(&quot;File Name : %s\n&quot;, __FILE__ );
   printf(&quot;DATE : %s\n&quot;, __DATE__ );
   printf(&quot;Line : %d\n&quot;, __LINE__ );

   getch();
   return 0;
}
</pre>
<!-- SyntaxHighllighter HTML Ends here --> 
<!-- Program Output Starts -->
<br/>
Output
<pre>
NULL : 0
EXIT_SUCCESS : 0
EXIT_FAILURE : 1
RAND_MAX : 32767
File Name : PreProcessorMacro.c
DATE : Jan 27 2015
Line : 12
</pre>
<!-- Program Output Ends -->
<br/>
