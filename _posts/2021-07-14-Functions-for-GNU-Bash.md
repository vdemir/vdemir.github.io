---
layout: post
title:  Programmable Functions for GNU Bash
description: Bir Bash fonksiyonu, aslında birçok kez çağrılabilen temel komut grubudur.
excerpt: 'GNU Bash Fonksiyonları'
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

![Bash Functions](/images/bash/Brain.jpg "Brain"){:height="57%" width="57%"}

## Bash Fonksiyonlarını Tanımlamak 

Bir bash fonksiyon ifadesi bildirmek kolaydır. Fonksiyonlar iki farklı biçimde bildirilebilir:

|İlk fonksiyon biçimi -function name ile- adıyla başlar, ardından parantezler gelir. Bu biçim tercih edilen ve daha çok kullanılan formattır. 


{% highlight bash %}
function_name () {
  commands
}
{% endhighlight %}

Tek sıralı gösterim:

{% highlight bash %}
function_name () { commands; }
{% endhighlight %}

|İkinci biçimde, ayrılmış -reserved- sözcük **function** ile başlar, ardından fonksiyon adı gelir. 

{% highlight bash %}
function function_name {
  commands
}
{% endhighlight %}

Tek sıralı gösterim:

{% highlight bash %}
function function_name { commands; }
{% endhighlight %}

#### Dikkat edilmesi gereken birkaç nokta:

- Kıvrımlı parantezler ({}) arasındaki komutlara fonksiyon fonksiyon işlevin gövdesi denir. Kıvrımlı parantezler gövdeden boşluk veya satırsonu ile ayrılmalıdır.
- Bir fonksiyon işlev tanımlamak onu yürütmez. Bir bash fonksiyon fonksiyon işlevini çağırmak için, fonksiyon işlev adını kullanmanız yeterlidir. Kabuk betiğinde fonksiyon işlev her çağrıldığında küme parantezleri arasındaki komutlar yürütülür.
- İşlev tanımı, fonksiyon işleve yapılan herhangi bir çağrıdan önce yerleştirilmelidir.
- Tek satırlı “sıkıştırılmış” fonksiyon fonksiyon işlevleri kullanırken noktalı virgül ; fonksiyondaki son komutu takip etmelidir.
- Her zaman fonksiyon işlev adlarınızı açıklayıcı tutmaya çalışın.

#### Bunu daha iyi anlamak için aşağıdaki örneğe bir göz atın: 



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

### **Alıştırmalar**

***
Bir dizindeki pdf dosyalarının uzantıları hariç isimlerini dosya adına çeviren bash betiği aşağıdadır.

{% highlight bash %}
for i in *.pdf; do
mkdir ${i%%.*}; done
{% endhighlight %}
