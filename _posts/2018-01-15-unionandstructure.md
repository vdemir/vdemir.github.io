---
layout: post
title:  union ve struct
date:   2018-01-16 13:52:00
tags:   Typedef
comments: False
---

{{ page.title }}
================

<p class="meta">16 Ocak 2018 - Türkiye</p>
## union ve struct arasındaki kullanım farkı

union pek çok açıdan struct yapıya benzer olsa da, aralarındaki farkı anlamak çok önemlidir.

Birincil fark, bu örnekle gösterilebilir:


~~~c
#include <stdio.h>
union unionJob
{
   //defining a union
   char name[32];
   float salary;
   int workerNo;
} uJob;

struct structJob
{
   char name[32];
   float salary;
   int workerNo;
} sJob;

int main()
{
   printf("size of union = %d", sizeof(uJob));
   printf("\nsize of structure = %d", sizeof(sJob));
   return 0;
}
~~~

## Çıktı
~~~bash
size of union = 32
size of structure = 40
~~~

## struct yapılara union yapıdan daha fazla bellek tahsis edilir

Yukarıdaki örnekte görüldüğü gibi, union ve struct yapı arasında bellek ayırmada bir fark vardır.

struct değişkenini depolamak için gereken bellek miktarı, tüm üyelerin bellek boyutunun toplamıdır.



