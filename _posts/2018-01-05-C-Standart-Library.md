---
layout: post
title:  stdio.h Standart C Kitaplığı
description: Bir stdio.h üstbilgi dosyası, giriş ve çıkış işlemlerini gerçekleştirmek için C standart kütüphane işlevleri içerir.
date:   2018-01-04 13:52:00
tags:   C Programlama Linux GCC
comments: true
published: true
lang: tr
---

Bir **stdio.h üstbilgi dosyası**, giriş ve çıkış işlemlerini gerçekleştirmek için C standart kütüphane işlevleri içerir. Stdin, stdout ve stderr'de ve dosya üzerinde giriş ve çıkış işlemleri gerçekleştiren fonksiyonları içerir. Getchar gibi özel bir veri türü için özel olarak tanımlanan işlevleri ve printf ve scanf gibi genel işlevleri içerir.

* * *

List of stdio.h Library Functions
---------------------------------

Click on function names below to see detailed description of functions.

Function

Description

[clearerr]

Clears error indicators associated with a given stream.

[fclose]

Closes the stream and flushes buffers associated with the given stream.

[feof]

Checks the end-of-file indicator of the given stream.

[ferror]

Checks the error indicator of the given stream.

[fflush]

Flushes the content of the given stream.

[fgetc]

Gets the next character from the given stream.

[fgetpos]

Gets current position of the given stream.

[fgets]

Reads a line from given stream and stores it into a character array.

[fopen]

Opens a file in the given mode.

[fprintf]

Writes formatted output to a stream.

[fputc]

Writes a character to the given stream.

[fputs]

Writes a string to the given stream excluding the null terminating character.

[fread]

Reads data from the given stream and stores it into an array.

[freopen]

Reopens a stream with different file or mode.

[fscanf]

Read formatted data from given stream.

[fseek]

Changes the position indicator of the given stream.

[fsetpos]

Sets the position indicator of the given stream.

[ftell]

Returns the current position of the given stream.

[fwrite]

Writes data from an array to the given stream.

[getc]

Gets the next character from the given stream and increments the position indicator.

[getchar]

Returns a character from stdin stream.

[gets]

Reads a line from stdin and stores it into given character array.

[perror]

Prints an error message to stderr.

[printf]

Print formatted data to stdout.

[putc]

Writes a character to the given stream and increment the position indicator.

[putchar]

Writes a character to stdout stream.

[puts]

Writes a string to stdout stream excluding null terminating character.

[remove]

Deletes a file.

[rename]

Changes the name of an existing file.

[rewind]

Reset the position indicator to the beginning of the file.

[scanf]

Reads formatted data from stdin.

[setbuf]

Sets buffer for the given stream.

[setvbuf]

Sets buffer for the given stream with various buffering modes.

[sprintf]

Writes formatted data to given string.

[sscanf]

Reads formatted data from given string.

[tmpfile]

Creates a temporary file having unique file name.

[tmpnam]

Generates and unique and valid temporary filename.

[ungetc]

Pushes a character back to the given stream.

[vfprintf]

Writes formatted data to a stream using an argument list.

[vprintf]

Print formatted data to stdout using an argument list.

[vsprintf]

Writes formatted data to a string using an argument list.

* * *

Data Types in stdio.h Library
-----------------------------

Types

Description

**fpos\_t**

An object used for storing any position within a file.

**FILE**

An object containing information of a file or stream.

**size\_t**

An unsigned integral type.

[clearerr]: http://www.techcrashcourse.com/2015/08/clearerr-stdio-c-library-function.html
[fclose]: http://www.techcrashcourse.com/2015/08/fclose-stdio-c-library-function.html
[feof]: http://www.techcrashcourse.com/2015/08/feof-stdio-c-library-function.html
[ferror]: http://www.techcrashcourse.com/2015/08/ferror-stdio-c-library-function.html
[fflush]: http://www.techcrashcourse.com/2015/08/fflush-stdio-c-library-function.html
[fgetc]: http://www.techcrashcourse.com/2015/08/fgetc-stdio-c-library-function.html
[fgetpos]: http://www.techcrashcourse.com/2015/08/fgetpos-stdio-c-library-function.html
[fgets]: http://www.techcrashcourse.com/2015/08/fgets-stdio-c-library-function.html
[fopen]: http://www.techcrashcourse.com/2015/08/fopen-stdio-c-library-function.html
[fprintf]: http://www.techcrashcourse.com/2015/08/fprintf-stdio-c-library-function.html
[fputc]: http://www.techcrashcourse.com/2015/08/fputc-stdio-c-library-function.html
[fputs]: http://www.techcrashcourse.com/2015/08/fputs-stdio-c-library-function.html
[fread]: http://www.techcrashcourse.com/2015/08/fread-stdio-c-library-function.html
[freopen]: http://www.techcrashcourse.com/2015/08/freopen-stdio-c-library-function.html
[fscanf]: http://www.techcrashcourse.com/2015/08/fscanf-stdio-c-library-function.html
[fseek]: http://www.techcrashcourse.com/2015/08/fseek-stdio-c-library-function.html
[fsetpos]: http://www.techcrashcourse.com/2015/08/fsetpos-stdio-c-library-function.html
[ftell]: http://www.techcrashcourse.com/2015/08/ftell-stdio-c-library-function.html
[fwrite]: http://www.techcrashcourse.com/2015/08/fwrite-stdio-c-library-function.html
[getc]: http://www.techcrashcourse.com/2015/08/getc-stdio-c-library-function.html
[getchar]: http://www.techcrashcourse.com/2015/08/getchar-stdio-c-library-function.html
[gets]: http://www.techcrashcourse.com/2015/08/gets-stdio-c-library-function.html
[perror]: http://www.techcrashcourse.com/2015/08/perror-stdio-c-library-function.html
[printf]: http://www.techcrashcourse.com/2015/08/printf-stdio-c-library-function.html
[putc]: http://www.techcrashcourse.com/2015/08/putc-stdio-c-library-function.html
[putchar]: http://www.techcrashcourse.com/2015/08/putchar-stdio-c-library-function.html
[puts]: http://www.techcrashcourse.com/2015/08/puts-stdio-c-library-function.html
[remove]: http://www.techcrashcourse.com/2015/08/remove-stdio-c-library-function.html
[rename]: http://www.techcrashcourse.com/2015/08/rename-stdio-c-library-function.html
[rewind]: http://www.techcrashcourse.com/2015/08/rewind-stdio-c-library-function.html
[scanf]: http://www.techcrashcourse.com/2015/08/scanf-stdio-c-library-function.html
[setbuf]: http://www.techcrashcourse.com/2015/08/setbuf-stdio-c-library-function.html
[setvbuf]: http://www.techcrashcourse.com/2015/08/setvbuf-stdio-c-library-function.html
[sprintf]: http://www.techcrashcourse.com/2015/08/sprintf-stdio-c-library-function.html
[sscanf]: http://www.techcrashcourse.com/2015/08/sscanf-stdio-c-library-function.html
[tmpfile]: http://www.techcrashcourse.com/2015/08/tmpfile-stdio-c-library-function.html
[tmpnam]: http://www.techcrashcourse.com/2015/08/tmpnam-stdio-c-library-function.html
[ungetc]: http://www.techcrashcourse.com/2015/08/ungetc-stdio-c-library-function.html
[vfprintf]: http://www.techcrashcourse.com/2015/08/vfprintf-stdio-c-library-function.html
[vprintf]: http://www.techcrashcourse.com/2015/08/vprintf-stdio-c-library-function.html
[vsprintf]: http://www.techcrashcourse.com/2015/08/vsprintf-stdio-c-library-function.html

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
