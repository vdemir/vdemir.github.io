---
layout: post
title:  stdio.h Standart C Kitaplığı
date:   2018-01-04 13:52:00
tags:   C Programlama
comments: False
---

{{ page.title }}
================

<p class="meta">7 Ocak 2018 - Türkiye</p>


<p class="myParagraph">
Bir <strong>stdio.h üstbilgi dosyası</strong>, giriş ve çıkış işlemlerini gerçekleştirmek için C standart kütüphane işlevleri içerir. Stdin, stdout ve stderr'de ve dosya üzerinde giriş ve çıkış işlemleri gerçekleştiren fonksiyonları içerir. Getchar gibi özel bir veri türü için özel olarak tanımlanan işlevleri ve printf ve scanf gibi genel işlevleri içerir.
</p>
<hr/>
<!-- Striped Table HTML Starts here -->
<h2 id="myH2">List of stdio.h Library Functions</h2>
Click on function names below to see detailed description of functions.
<table class="table table-bordered table-striped">
   <caption><h3 class="text-left myTableHeader"></h3></caption>
   <thead>
      <tr>
         <th class="text-center">Function</th>
         <th class="text-center">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
     <!-- use width="25%" on td for customizing width -->
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/clearerr-stdio-c-library-function.html">clearerr</a></td>
         <td class="myStripedTableItems" width="75%">Clears error indicators associated with a given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fclose-stdio-c-library-function.html">fclose</a></td>
        <td class="myStripedTableItems" width="75%">Closes the stream and flushes buffers associated with the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/feof-stdio-c-library-function.html">feof</a></td>
        <td class="myStripedTableItems" width="75%">Checks the end-of-file indicator of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/ferror-stdio-c-library-function.html">ferror</a></td>
        <td class="myStripedTableItems" width="75%">Checks the error indicator of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fflush-stdio-c-library-function.html">fflush</a></td>
        <td class="myStripedTableItems" width="75%">Flushes the content of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fgetc-stdio-c-library-function.html">fgetc</a></td>
        <td class="myStripedTableItems" width="75%">Gets the next character from the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fgetpos-stdio-c-library-function.html">fgetpos</a></td>
        <td class="myStripedTableItems" width="75%">Gets current position of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fgets-stdio-c-library-function.html">fgets</a></td>
        <td class="myStripedTableItems" width="75%">Reads a line from given stream and stores it into a character array.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fopen-stdio-c-library-function.html">fopen</a></td>
        <td class="myStripedTableItems" width="75%">Opens a file in the given mode.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fprintf-stdio-c-library-function.html">fprintf</a></td>
        <td class="myStripedTableItems" width="75%">Writes formatted output to a stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fputc-stdio-c-library-function.html">fputc</a></td>
        <td class="myStripedTableItems" width="75%">Writes a character to the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fputs-stdio-c-library-function.html">fputs</a></td>
        <td class="myStripedTableItems" width="75%">Writes a string to the given stream excluding the null terminating character.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fread-stdio-c-library-function.html">fread</a></td>
        <td class="myStripedTableItems" width="75%">Reads data from the given stream and stores it into an array.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/freopen-stdio-c-library-function.html">freopen</a></td>
        <td class="myStripedTableItems" width="75%">Reopens a stream with different file or mode.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fscanf-stdio-c-library-function.html">fscanf</a></td>
        <td class="myStripedTableItems" width="75%">Read formatted data from given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fseek-stdio-c-library-function.html">fseek</a></td>
        <td class="myStripedTableItems" width="75%">Changes the position indicator of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fsetpos-stdio-c-library-function.html">fsetpos</a></td>
        <td class="myStripedTableItems" width="75%">Sets the position indicator of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/ftell-stdio-c-library-function.html">ftell</a></td>
        <td class="myStripedTableItems" width="75%">Returns the current position of the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/fwrite-stdio-c-library-function.html">fwrite</a></td>
        <td class="myStripedTableItems" width="75%">Writes data from an array to the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/getc-stdio-c-library-function.html">getc</a></td>
        <td class="myStripedTableItems" width="75%">Gets the next character from the given stream and increments the position indicator.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/getchar-stdio-c-library-function.html">getchar</a></td>
        <td class="myStripedTableItems" width="75%">Returns a character from stdin stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/gets-stdio-c-library-function.html">gets</a></td>
        <td class="myStripedTableItems" width="75%">Reads a line from stdin and stores it into given character array.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/perror-stdio-c-library-function.html">perror</a></td>
        <td class="myStripedTableItems" width="75%">Prints an error message to stderr.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/printf-stdio-c-library-function.html">printf</a></td>
        <td class="myStripedTableItems" width="75%">Print formatted data to stdout.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/putc-stdio-c-library-function.html">putc</a></td>
        <td class="myStripedTableItems" width="75%">Writes a character to the given stream and increment the position indicator.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/putchar-stdio-c-library-function.html">putchar</a></td>
        <td class="myStripedTableItems" width="75%">Writes a character to stdout stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/puts-stdio-c-library-function.html">puts</a></td>
        <td class="myStripedTableItems" width="75%">Writes a string to stdout stream excluding null terminating character.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/remove-stdio-c-library-function.html">remove</a></td>
        <td class="myStripedTableItems" width="75%">Deletes a file.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/rename-stdio-c-library-function.html">rename</a></td>
        <td class="myStripedTableItems" width="75%">Changes the name of an existing file.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/rewind-stdio-c-library-function.html">rewind</a></td>
        <td class="myStripedTableItems" width="75%">Reset the position indicator to the beginning of the file.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/scanf-stdio-c-library-function.html">scanf</a></td>
        <td class="myStripedTableItems" width="75%">Reads formatted data from stdin.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/setbuf-stdio-c-library-function.html">setbuf</a></td>
        <td class="myStripedTableItems" width="75%">Sets buffer for the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/setvbuf-stdio-c-library-function.html">setvbuf</a></td>
        <td class="myStripedTableItems" width="75%">Sets buffer for the given stream with various buffering modes.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/sprintf-stdio-c-library-function.html">sprintf</a></td>
        <td class="myStripedTableItems" width="75%">Writes formatted data to given string.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/sscanf-stdio-c-library-function.html">sscanf</a></td>
        <td class="myStripedTableItems" width="75%">Reads formatted data from given string.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/tmpfile-stdio-c-library-function.html">tmpfile</a></td>
        <td class="myStripedTableItems" width="75%">Creates a temporary file having unique file name.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/tmpnam-stdio-c-library-function.html">tmpnam</a></td>
        <td class="myStripedTableItems" width="75%">Generates and unique and valid temporary filename.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/ungetc-stdio-c-library-function.html">ungetc</a></td>
        <td class="myStripedTableItems" width="75%">Pushes a character back to the given stream.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/vfprintf-stdio-c-library-function.html">vfprintf</a></td>
        <td class="myStripedTableItems" width="75%">Writes formatted data to a stream using an argument list.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/vprintf-stdio-c-library-function.html">vprintf</a></td>
        <td class="myStripedTableItems" width="75%">Print formatted data to stdout using an argument list.</td>
      </tr>
      <tr>
        <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/vsprintf-stdio-c-library-function.html">vsprintf</a></td>
        <td class="myStripedTableItems" width="75%">Writes formatted data to a string using an argument list.</td>
      </tr>
   </tbody>
</table>
<!-- Striped Table HTML Ends here -->
<hr/>
<!-- Striped Table HTML Starts here -->
<h2 id="myH2">Data Types in stdio.h Library</h2>
<table class="table table-bordered table-striped">
   <caption><h3 class="text-left myTableHeader"></h3></caption>
   <thead>
      <tr>
         <th class="text-center">Types</th>
         <th class="text-center">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>fpos_t</strong></td>
         <td class="myStripedTableItems" width="75%">An object used for storing any position within a file.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>FILE</strong></td>
         <td class="myStripedTableItems" width="75%">An object containing information of a file or stream.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>size_t</strong></td>
         <td class="myStripedTableItems" width="75%">An unsigned integral type.</td>
      </tr>
   </tbody>
</table>

* * *


The stdio header provides functions for performing input and output.

Macros:

> **`NULL  
> _IOFBF  
> _IOLBF  
> _IONBF  
> BUFSIZ  
> EOF  
> FOPEN_MAX  
> FILENAME_MAX  
> L_tmpnam  
> SEEK_CUR  
> SEEK_END  
> SEEK_SET  
> TMP_MAX  
> stderr  
> stdin  
> stdout  
> `**

Functions:

> **`clearerr();  
> fclose();  
> feof();  
> ferror();  
> fflush();  
> fgetpos();  
> fopen();  
> fread();  
> freopen();  
> fseek();  
> fsetpos();  
> ftell();  
> fwrite();  
> remove();  
> rename();  
> rewind();  
> setbuf();  
> setvbuf();  
> tmpfile();  
> tmpnam();  
> fprintf();  
> fscanf();  
> printf();  
> scanf();  
> sprintf();  
> sscanf();  
> vfprintf();  
> vprintf();  
> vsprintf();  
> fgetc();  
> fgets();  
> fputc();  
> fputs();  
> getc();  
> getchar();  
> gets();  
> putc();  
> putchar();  
> puts();  
> ungetc();  
> perror();  
> `**

Variables:

**typedef size_t**

**typedef FILE**

**typedef fpos_t**

2.12.1 Variables and Definitions
--------------------------------

 **size_t** is the unsigned integer result of the sizeof keyword.

 **FILE** is a type suitable for storing information for a file stream.

 **fpos_t** is a type suitable for storing any position in a file.
 
 **NULL** is the value of a null pointer constant.

 **_IOFBF**, **_IOLBF**, and **_IONBF** are used in the setvbuf function.

 **BUFSIZ** is an integer which represents the size of the buffer used by the setbuf function.

 **EOF** is a negative integer which indicates an end-of-file has been reached.

 **FOPEN_MAX** is an integer which represents the maximum number of files that the system can guarantee that can be opened simultaneously.

 **FILENAME_MAX** is an integer which represents the longest length of a char array suitable for holding the longest possible filename. If the implementation imposes no limit, then this value should be the recommended maximum value.

 **L_tmpnam** is an integer which represents the longest length of a char array suitable for holding the longest possible temporary filename created by the tmpnam function.

 **SEEK_CUR**, **SEEK_END**, and **SEEK_SET** are used in the fseek function.

 **TMP_MAX** is the maximum number of unique filenames that the function tmpnam can generate.

 **stderr**, **stdin**, and **stdout** are pointers to **FILE** types which correspond to the standard error, standard input, and standard output streams.

[stdio.h](https://www-s.acm.illinois.edu/webmonkeys/book/c_guide/2.12.html)

[stdio - standart giriş / çıkış kitaplığı işlevleri](http://man7.org/linux/man-pages/man3/stdio.3.html)

> [stdin, stdout, stderr - standart G/Ç akışları](http://icecube.wisc.edu/~dglo/c_class/stdio.html)

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

printf() işlevleri çıktıyı stdout'a yazar. getchar() eşdeğeri getc(stdin) dir.
getchar() akımdaki bir sonraki karakteri okur ve onu bir int veya dosya sonundaki EOF'ye atanan bir işaretsiz char olarak döndürür.

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
* * * 

Typedef Nasıl Kullanılıyor
-----------------------------
* * * 
1.  Başka yollarla ilan edilmiş olabilecek veri türleri için eşanlamlıları tanıtmamızı sağlar.
2.  Yapıya yeni ad vermek için kullanılır.
3.  Örnekler oluşturmak, değerleri işleve aktarmak, bildirimde kullanmak için yeni bir isim kullanılır.
* * * 

Canlı Örnek : Typedef Örnek Program
-------------------------------------
* * * 

~~~c
#include<stdio.h>

int main() 
{
typedef int Number;
Number num1 = 40,num2 = 20;
Number cevap;

cevap = num1 + num2;
printf("Cevap : %d",cevap);
return(0);
}
~~~

### Program Çıktısı :

~~~bash
Cevap : 60
~~~
* * * 

Program Açıklamaları :
------------------------
* * * 

Yukarıdaki programda, veri türüne takma ad oluşturmak için typedef kullandık. 'Int' veri türüne takma ad oluşturduk. Tamsayı veri türüne (ör. Number'Sayı') yeni bir isim verdik.

* * *

Yapılarla'Structures' Typedef Kullanmak için Sözdizimi  :
---------------------------------------
* * *
~~~c
typedef int XYZ;  
   XYZ age;
   XYZ roll;
~~~
* * *

Different Ways of Declaring Structure using Typedef :
-----------------------------------------------------
* * * 

~~~c
typedef struct
{
   char ename\[30\];
   int ssn;
   int deptno;
}employee;
~~~

Or

~~~c
typedef struct Record
 {
     char ename\[30\];
     int ssn;
     int deptno;
 }employee;
~~~

In the second example, **Record** is **tag-name**. **’employee’** is nothing but **New Data Type**. We can now create the variables of type **’employee’** Tag name is optional.

### Declaring Variable :

employee e1,e2;

* * * 

Live Example : Using Typedef For Declaring Structure
----------------------------------------------------
* * * 

~~~c
#include<stdio.h>

typedef struct b1 {
   char bname\[30\];
   int ssn;
   int pages;
}book;

book b1 = {"Let Us C",1000,90};

int main() 
{
    printf("\\nName of Book : %s",b1.bname);
    printf("\\nSSN of Book : %d",b1.ssn);
    printf("\\nPages in Book : %d",b1.pages);
    return(0);
}

~~~

Output :
--------

~~~bash
Name of Book  : Let Us C
SSN  of Book  : 1000
Pages in Book : 90
~~~

* * *
