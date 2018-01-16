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

Bir yapı değişkeni, normal bir değişken gibi argüman olarak işleve geçirilebilir.

Yapı değerle geçirilirse, işlev tanımındaki yapı değişkeni üzerinde yapılan değişiklikler orijinal olarak geçirilen yapı değişkeninde yansımaz.

C programı oluşturmak için bir yapı oluşturan öğrenci, ismi içeren ve rulo ve bilgileri görüntüler.
***


