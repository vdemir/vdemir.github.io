---
layout: post
title:  union ve struct yapıları
date:   2018-01-16 13:52:00
tags:   Typedef
comments: False
---

{{ page.title }}
================

<p class="meta">16 Ocak 2018 - Türkiye</p>
## union ve struct arasındaki kullanım farkı

```union``` pek çok açıdan ```struct``` yapıya benzer olsa da, aralarındaki farkı anlamak çok önemlidir.

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

***

</br> 

## struct yapılara union yapıdan daha fazla bellek tahsis edilir

Yukarıdaki örnekte görüldüğü gibi, ```union``` ve ```struct``` yapı arasında bellek ayırmada bir fark vardır.

```struct``` değişkenini depolamak için gereken bellek miktarı, tüm üyelerin bellek boyutunun toplamıdır.

![Alternative text](/images/C-structure-memory-allocation.jpg "struct değişkeni belleği")

Ancak, bir ```union``` değişkenini depolamak için gereken bellek, ```union``` yapının en büyük öğesi için gereken bellektir.


![Alternative text](/images/memory-allocation-union.jpg "union değişkeni belleği")

## Aynı anda yalnızca bir union üyesine erişilebilir

```struct``` durumunda, üyelerinin tümüne her an erişilebilir.

Ancak, ```union``` durumunda, bir kerede yalnızca üyelerinden birine erişilebilir ve diğer tüm üyeler çöp değerleri içerir.


~~~c
#include <stdio.h>
union job
{
   char name[32];
   float salary;
   int workerNo;
} job1;

int main()
{
   printf("Enter name:\n");
   scanf("%s", &job1.name);

   printf("Enter salary: \n");
   scanf("%f", &job1.salary);

   printf("Displaying\nName :%s\n", job1.name);
   printf("Salary: %.1f", job1.salary);

   return 0;
}
~~~

<>

## Çıktı
~~~bash
Enter name 
Hillary
Enter salary
1234.23
Displaying
Name: f%Bary
Salary: 1234.2
~~~
***

Not: İsim için farklı çöp değeri veya ```empty string``` (boş dize) alabilirsiniz.

Başlangıçta programda ```Hillary, job1.name```'de saklanır ve ```job1```'in diğer tüm üyeleri, örneğin ```salary```, ```workerNo``` çöp değerleri içerecektir.

Ancak, kullanıcı ```salary``` değerini girdiğinde; 1234.23, ```job1.salary```'de saklanacak ve diğer üyeler de, örn. ```name, workerNo```, artık çöp değerleri içerecek.

Böylece çıktıda, ```salary``` doğru bir şekilde yazdırılır, ancak ```name``` bazı ```random string``` karakterleri (rastgele dizgeleri) gösterir.

## Union Yapıyı Bir Fonksiyona Geçirme

```Union```, C programlamasındaki foksiyonlara ```struct``` yapılarla benzer şekilde geçirilebilir.

