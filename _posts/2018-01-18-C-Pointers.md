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

Programınızda bir değişkene sahipseniz, `&var`, size bellekteki adresini verir, burada `&` reference operatörü olarak adlandırılır.

scanf() fonksiyon işlevini kullanırken bu gösterimi görmüş olmalısınız.
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

Yukarıdaki kaynak kodunda, `5` değeri bellek yeri `2686778`'de saklanır. `var`, sadece o yere verilen isimdir.

Pointer İşaretçi Değişkenler
-----------------

C'de sadece başka bir değişkenin adresini saklamanızı sağlayan özel bir değişken vardır. Pointer değişkeni veya basitçe pointer işaretçi olarak adlandırılır.

Declaration of Pointer
~~~
data\_type* pointer\_variable_name;
int* p;
~~~
Above statement defines, p as pointer variable of type `int`.

### Reference operator (&) and Dereference operator (*)

As discussed, & is called reference operator. It gives you the address of a variable.

Likewise, there is another operator that gets you the value from the address, it is called a dereference operator (*).

Below example clearly demonstrates the use of pointers, reference operator and dereference operator.

**Note:** The * sign when declaring a pointer is not a dereference operator. It is just a similar notation that creates a pointer.

### Example To Demonstrate Working of Pointers
~~~c
    /* Source code to demonstrate, handling of pointers in C program */
    #include <stdio.h>
    int main(){
       int* pc;
       int c;
       c=22;
       printf("Address of c:%u\n",&c);
       printf("Value of c:%d\n\n",c);
       pc=&c;
       printf("Address of pointer pc:%u\n",pc);
       printf("Content of pointer pc:%d\n\n",*pc);
       c=11;
       printf("Address of pointer pc:%u\n",pc);
       printf("Content of pointer pc:%d\n\n",*pc);
       *pc=2;
       printf("Address of c:%u\n",&c);
       printf("Value of c:%d\n\n",c);
       return 0;
    }
~~~
~~~bash
**Output**

Address of c: 2686784
Value of c: 22

Address of pointer pc: 2686784
Content of pointer pc: 22

Address of pointer pc: 2686784
Content of pointer pc: 11

Address of c: 2686784
Value of c: 2
~~~

![Working of pointers in C programming](//cdn.programiz.com/sites/tutorial2program/files/pointers-in-c-programming.jpg "C pointers")

**Explanation of program and figure**

1.  `int* pc;` creates a pointer pc and `int c;` creates a normal variable c.  
    Since pc and c are both not initialized, pointer pc points to either no address or a random address. Likewise, variable c is assigned an address but contains a random/garbage value.
2.  `c=22;` assigns 22 to the variable c, i.e.,22 is stored in the memory location of variable c.  
    Note that, when printing `&c` (address of c), we use %u rather than %d since address is usually expressed as an unsigned integer (always positive).
3.  `pc=&c;` assigns the address of variable to c to the pointer pc.  
    When printing, you see value of pc is the same as the address of c and the content of pc (*pc) is 22 as well.
4.  `c=11;` assigns 11 to variable c.  
    We assign a new value to c to see its effect on pointer pc.
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
