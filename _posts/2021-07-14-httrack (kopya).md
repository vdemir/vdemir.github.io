---
layout: post
title:  Programmable Functions for GNU Bash
description: Bir Bash fonksiyonu, aslında birçok kez çağrılabilen temel komut grubudur.
date:   2021-07-14 12:00:00
last_updated: 2021-07-14 18:57:00
tags:   Linux
categories: Linux
permalink: /:categories/:title/
comments: false
published: true
lang: tr
---

Bir Bash fonksiyonu, aslında birçok kez çağrılabilen temel komut grubudur. Bir fonksiyonun amacı, bash betiklerinizi -bash script de denir- daha okunaklı hale getirmenize yardımcı olmak ve aynı kodu tekrar tekrar yazmaktan kaçınmaktır. Çoğu programlama diliyle karşılaştırıldığında, Bash fonksiyonları biraz kısıtlıdır.

Bu eğitim, Bash fonksiyonlarının temellerini kapsar ve onları kabuk betiklerinizde -shell scrip'te denir- nasıl kullanacağınızı gösterir.

![Bash Functions](/images/bash/Brain.jpg "Bash Functions"){:height="77%" width="77%"}

## Bash'i Tanımlamak 

Bir bash fonksiyonu ifadesi kolaydır. Fonksiyonlar iki farklı biçimde bildirilebilir:

İlk biçim fonksiyon adıyla -function name ile- başlar, ardından parantezler gelir. Bu tercih edilen ve daha çok kullanılan formattır. 

{% highlight bash %}
function_name () {
  commands
}
{% endhighlight %}


Tek sıralı gösterim:


{% highlight bash %}
function_name () { commands; }
{% endhighlight %}


***
### **İndirmeler**

***

İndirmeyi başlatmak için aşağıdan bir bağlantı seçin. 

| Sürüm        | Çıkış Tarihi | İndirme Bağlantısı                                                               |
|--------------|--------------|----------------------------------------------------------------------------------|
| 5.1 | 2020-12-06   | [Bash](http://git.savannah.gnu.org/cgit/bash.git/snapshot/bash-5.1.tar.gz)   |

***

### **Kuruluma Hazırlık**

***

{% highlight bash %}

configure --prefix=/usr
make
make install
{% endhighlight %}

 
***

### **Alıştırmlar**

***
Bir dizindeki pdf dosyalarının uzantıları hariç isimlerini dosya adına çeviren bash betiği aşağıdadır.

{% highlight bash %}
for i in *.pdf; do   mkdir ${i%%.*}; done
{% endhighlight %}
