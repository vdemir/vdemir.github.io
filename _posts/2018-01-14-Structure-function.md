---
layout: post
title:  C'de Struct Yapı ve Fonksiyon
description: Bu yazıda, struct yapıları bir fonksiyon işlevine argüman olarak geçirmek için alakalı örnekler bulacaksınız ve bunları programınızda kullanabilirsiniz.
date:   2018-01-16 13:52:00
last_updated: 2021-06-05 18:57:00
excerpt: "C, Programming"
tags:   C Programlama Linux
categories: Programming
permalink: /ceviriler/ceviriler2/2018-01-14-Structure-function.html
comments: false
published: true
lang: tr
---


### C programlamada struct yapıyı bir fonksiyona nasıl geçiririm?

Bu yazıda, ```struct``` yapıları bir fonksiyon işlevine argüman olarak geçirmek için alakalı örnekler bulacaksınız ve bunları programınızda kullanabilirsiniz.

![Alternative text](/images/c-structure-functions.jpg "C'de struct ve fonksiyon işlevi"){:height="80%" width="80%"}

C'de, ```struct``` iki yöntemle fonksiyon işlevlere geçirilebilir:

1. Değerle geçme (aktüel değeri argüman olarak geçirme)
2. Referansa göre geçmek (bir argümanın adresini iletmek)

### struct yapıyı değerine göre geçirme

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

// Fonksiyon islevi prototipi, struct yapi bildiriminde asagida olmalidir 
// aksi takdirde derleyici hata gosterir

int main()
{
    struct student stud;
    printf("Ogrencinin ismini giriniz: ");
    scanf("%s", stud.name);
    printf("Ogrencinin numarasini giriniz:");
    scanf("%d", &stud.roll);
    display(stud);   //  Yapisal degiskene ait sapmayi
    return 0;       //   arguman olarak kabul etmek
}
void display(struct student stu){
  printf("Cevap\nIsim: %s",stu.name);
  printf("\nNumara: %d\n",stu.roll);
}
~~~


<script src="//onlinegdb.com/embed/js/9MsV6XHiu?theme=dark"></script>
