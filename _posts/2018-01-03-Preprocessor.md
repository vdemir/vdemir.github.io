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

The C Preprocessor is not part of the compiler but it extends the power of C programming language. All preprocessor directives begin with a # symbol.  
  
The preprocessor step comes before compilation of source code and it instruct the compiler to do required pre-processing before actual compilation.

**Points to Remember about Preprocessor Directives**_

_*   Preprocessor directives are processed before compilation of source code.
*   All preprocessor directives begin with a # symbol.
*   Preprocessor directives do not ends with semicolon._

_

![C Preprocessor Directives Workflow](http://2.bp.blogspot.com/-Fndowi7q_94/VXblSqQSvfI/AAAAAAAAALg/AI2fGetoSeA/s1600/C-PreProcessor.jpg)  

**Types of Preprocessor Directives**

_*   Macro Substitution
*   Conditional Compilation
*   File Inclusive_

Below is the list of Preprocessor Directives

Directive

Description

**#include**

It includes header file inside a C Program.

**#define**

It is substitution macro. It substitute a constant with an expression.

**#if**

It include a block of code depending upon the result of conditional expression.

**#else**

It is complement of #if

**#elif**

#else and #if in one statement. It is similar to else if ladder.

**#endif**

It flags the end of conditional directives like #if, #elif etc.

**#undef**

Undefines a preprocessor macro.

**#ifdef**

Returns true If constant is defined earlier using #define.

**#ifndef**

Returns true If constant is not defined earlier using #define.

**#pragma**

Issues special commands to the compiler.

**#error**

Prints error message on stderr.

* * *

#include Preprocessor Directives
--------------------------------

#inclide Preprocessor Directives is used to include header file inside C Program. It checks for header file in current directory, If path is not mentioned. To include user defined header file we use double quote instead of using triangular bracket.

_For Example_  

#include // Standard Header File
#include "myHeaderFile.h"    // User Defined Header File 

First line tells the preprocessor to replace this line with content of string.h header file.  
Second line tells the preprocessor to get myHeaderFile.h from the current directory and add the content of myHeaderFile.h file.

* * *

#define Preprocessor Directives
-------------------------------

It is simple substitution macro. It substitute all occurrences of the constant and replace them with a expression.

#define identifier value

*   **#define** : It is preprocessor directive used for text substitution.
  
*   **identifier** : It is an identifier used in program which will be replaced by value.
  
*   **value** : This is the value to be substituted for identifier.
  

_For Example_  

#define PIE 3.141
#define ZERO 0

* * *

**C Program to show use of #define Preprocessor Directives**

#include <stdio.h>
#include <conio.h>

#define PI 3.141

int main(){
    int radius;
    float circumference;
    printf("Enter the radius of circle\\n");
    scanf("%d", &radius);
    
    circumference = 2\*PI\*radius;
    
    printf("Circumference of Circle = %f", circumference);
    
    getch();
    return 0;
}

  
Output

Enter the radius of circle
5
Circumference of Circle = 31.410000

### #define macro substitution with arguments

#define Preprocessing directive can be used to write macro definitions with parameters.

*   Whenever a macro identifier is encountered, the arguments are substituted by the actual arguments from the c program.
*   No data type defined for macro arguments. You can pass any numeric like int, float etc.
*   Argument macro is not case sensitive.

_For Example_  

#define circumference(r) (2\*3.141\*(r))

* * *

C Program to show Macro Substitution with Arguments
---------------------------------------------------

#include <stdio.h>
#include <conio.h>

#define circumference(r) (2\*3.141\*(r))

int main(){
    int radius;
    float c;
    printf("Enter the radius of circle\\n");
    scanf("%d", &radius);
    
    c = circumference(radius);
    
    printf("Circumference of Circle = %f", c);
    
    getch();
    return 0;
}

  
Output

Enter the radius of circle
5
Circumference of Circle = 31.410000

**#if, #else and #endif Conditional Compilation Preprocessor Directives**

The Conditional Compilation Directives allow us to include a block of code based on the result of conditional expression.

**_#if Condition_Expression  
    statements;  
#else  
    statements;  
#endif  
_**

It is similar to if else condition but before compilation.  
Condition_Expression must be only constant expression.

C program to show Conditional Compilation using #if, #else and #endif
---------------------------------------------------------------------

#include <stdio.h>
#include <conio.h>

#define COUNT 5

void main(){
   #if(COUNT > 1)
       printf("Enter %d numbers\\n", COUNT);
   #else
       printf("Enter a number\\n");
   #endif

   getch();
   return 0;
}

  
Output

Enter 5 numbers

* * *

Predefined Macros in C Language
-------------------------------

C Programming language defines a number of macros. Below is the list of some commonly used macros.

Macro

Description

**NULL**

Value of a null pointer constant.

**EXIT_SUCCESS**

Value for the exit function to return in case of successful completion of program.

**EXIT_FAILURE**

Value for the exit function to return in case of program termination due to failure.

**RAND_MAX**

Maximum value returned by the rand function.

**\_\_FILE\_\_**

Contains the current filename as a string.

**\_\_LINE\_\_**

Contains the current line number as a integer constant.

**\_\_DATE\_\_**

Contains current date in "MMM DD YYYY" format.

**\_\_TIME\_\_**

Contains current time in "HH:MM:SS" format.

C Program to print value of Predefined Macros
---------------------------------------------

#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

int main(){
   printf("NULL : %d\\n", NULL );
   printf("EXIT\_SUCCESS : %d\\n", EXIT\_SUCCESS );
   printf("EXIT\_FAILURE : %d\\n", EXIT\_FAILURE );
   printf("RAND\_MAX : %d\\n", RAND\_MAX );
   printf("File Name : %s\\n", \_\_FILE\_\_ );
   printf("DATE : %s\\n", \_\_DATE\_\_ );
   printf("Line : %d\\n", \_\_LINE\_\_ );

   getch();
   return 0;
}

  
Output

NULL : 0
EXIT_SUCCESS : 0
EXIT_FAILURE : 1
RAND_MAX : 32767
File Name : PreProcessorMacro.c
DATE : Jan 27 2015
Line : 12
