---
layout: post
title:  C'de Pointer ve Struct Yapıları
description: Bu makalede, structure yapı içindeki verilere erişmek için pointer işaretçilerle çalışmanıza yardımcı olacak alakalı örnekler bulacaksınız.
date:   2018-01-16 13:52:00
tags:   C Programlama Linux
comments: false
published: false
lang: tr
---

{% include CSS.html %}
## C Programlama Yapısı ve İşaretçi

Bu makalede, ```structure``` yapı içindeki verilere erişmek için ```pointer``` işaretçilerle çalışmanıza yardımcı olacak alakalı örnekler bulacaksınız.

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/c-structure-functions.jpg" alt="programs" class="resize" />
  <p><small>structure &bull; pointer.</small></p>
</div> 
  
<style>
img.resize {
  max-width:100%;
  max-height:100%;
}
</style>

```Struct``` yapılar oluşturulabilir ve ```pointer``` işaretçiler kullanılarak erişilebilir. Bir ```struct``` yapının ```pointer``` işaretçi değişkeni aşağıdaki gibi oluşturulabilir:

~~~c
struct name {
    member1;
    member2;
    .
    .
};

int main()
{
    struct name *ptr;
}
~~~

Here, the pointer variable of type `**struct name**` is created.

Accessing structure's member through pointer
--------------------------------------------

A structure's member can be accesssed through pointer in two ways:

1.  Referencing pointer to another address to access memory
2.  Using dynamic memory allocation

### 1. Referencing pointer to another address to access the memory

Consider an example to access structure's member through pointer.
~~~c
    #include <stdio.h>
    typedef struct person
    {
       int age;
       float weight;
    };
    
    int main()
    {
        struct person *personPtr, person1;
        personPtr = &person1;            // Referencing pointer to memory address of person1
    
        printf("Enter integer: ");
        scanf("%d",&(*personPtr).age);
    
        printf("Enter number: ");
        scanf("%f",&(*personPtr).weight);
    
        printf("Displaying: ");
        printf("%d%f",(*personPtr).age,(*personPtr).weight);
    
        return 0;
    }
~~~

In this example, the pointer variable of type **`struct person`** is referenced to the address of person1. Then, only the structure member through pointer can can accessed.

**Using -> operator to access structure pointer member**

Structure pointer member can also be accessed using `->` operator.

### 2. Accessing structure member through pointer using dynamic memory allocation

To access structure member using pointers, memory can be allocated dynamically using [malloc() function](/c-programming/c-dynamic-memory-allocation "Dynamic memory allocation using malloc()") defined under `"stdlib.h"` header file.

#### Syntax to use malloc()

ptr = (cast-type*) malloc(byte-size)

**Example to use structure's member through pointer using malloc() function.**
~~~c
    #include <stdio.h>
    #include <stdlib.h>
    struct person {
       int age;
       float weight;
       char name[30];
    };
    
    int main()
    {
       struct person *ptr;
       int i, num;
    
       printf("Enter number of persons: ");
       scanf("%d", &num);
    
       ptr = (struct person*) malloc(num * sizeof(struct person));
       // Above statement allocates the memory for n structures with pointer personPtr pointing to base address */
    
       for(i = 0; i < num; ++i)
       {
           printf("Enter name, age and weight of the person respectively:\n");
           scanf("%s%d%f", &(ptr+i)->name, &(ptr+i)->age, &(ptr+i)->weight);
       }
    
       printf("Displaying Infromation:\n");
       for(i = 0; i < num; ++i)
           printf("%s\t%d\t%.2f\n", (ptr+i)->name, (ptr+i)->age, (ptr+i)->weight);
    
       return 0;
    }
~~~

**Output**

~~~bash
Enter number of persons: 2
Enter name, age and weight of the person respectively:
Adam
2
3.2
Enter name, age and weight of the person respectively:
Eve
6
2.3
Displaying Information:
Adam	2	3.20
Eve	6	2.30
~~~

