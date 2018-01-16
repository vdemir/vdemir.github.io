---
layout: post
title:  C'de struct yapıyı bir fonksiyona geçirmek
date:   2018-01-16 13:52:00
tags:   Struct
comments: False
---

{{ page.title }}
================

<p class="meta">16 Ocak 2018 - Türkiye</p>
## C programlamada struct yapıyı bir fonksiyona nasıl geçiririm?

Bu yazıda, ```struct``` yapıları bir fonksiyon işlevine argüman olarak geçirmek için alakalı örnekler bulacaksınız ve bunları programınızda kullanabilirsiniz.

![Alternative text](/images/c-structure-functions.jpg "C'de struct ve fonksiyon işlevi")

C'de, ```struct``` iki yöntemle fonksiyon işlevlere geçirilebilir:

1. Değerle geçme (aktüel değeri argüman olarak geçirme)
2. Referansa göre geçmek (bir argümanın adresini iletmek)

## struct yapıyı değerine göre geçirme

Bir ```struct``` değişkeni, normal bir değişken gibi argüman olarak fonksiyon işlevine geçirilebilir.

```struct``` yapı değerle geçirilirse, fonksiyon işlevi tanımındaki ```struct``` yapı değişkeni üzerinde yapılan değişiklikler orijinal olarak geçirilen ```struct``` yapı değişkeninde yansımaz.

Bir öğrenci ```struct``` yapı oluşturan, ```name``` ile ```roll``` içeren ve bilgileri görüntüleyen C programı.



***

~~~c

#include <stdio.h>
struct student
{
    char name[50];
    int roll;
};

void display(struct student stu);

// fonksiyon islevi prototipi struct yapi bildiriminde asagida olmalidir 
// aksi takdirde derleyici hata gosterir

int main()
{
    struct student stud;
    printf("Ogrencinin ismini giriniz: ");
    scanf("%s", &stud.name);
    printf("Ogrencinin numarasini giriniz:");
    scanf("%d", &stud.roll);
    display(stud);   //  yapisal degiskene gore arguman atamak
    return 0;
}
void display(struct student stu){
  printf("Output\nName: %s",stu.name);
  printf("\nRoll: %d\n",stu.roll);
}
~~~

