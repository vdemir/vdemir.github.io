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

"Gerçek" programlama dilleri gibi, Bash'in biraz sınırlı bir uygulamada olsa da fonksiyonel işlevleri vardır. Bir fonksiyonel işlev, bir alt programdır, bir dizi işlemi uygulayan bir kod bloğu -``code block``-, belirli bir görevi gerçekleştiren bir ``black box`` dur. Tekrar eden kodun olduğu her yerde, bir görev -task-, sadece küçük değişikliklerle işlemi tekrar ediyorsa, bir fonksiyon kullanmayı düşünün. 

{% highlight bash %}
function function_name {
command...
}
{% endhighlight %}

veya

{% highlight bash %}
function_name () {
command...
} 
{% endhighlight %}

Bu ikinci form, C programcılarının kalbini neşelendirecek (ve daha taşınabilir).

İsteğe bağlı olarak fonksiyonun açılan parantezi C'de olduğu gibi ikinci satırda görünebilir. 

Bir alt program, bir görevi gerçekleştirmek için bir araya getirilmiş ve bir isim verilmiş talimatlardan oluşur. "Kod Bloğu Yığma -Chunking-", potansiyel olarak çok karmaşık bir görevle tek bir kavram olarak başa çıkmanıza olanak tanır. Bu görevi gerçekleştirmek için bilgisayarın atması gereken birçok adım hakkında endişelenmek yerine, altyordamın adını hatırlamanız yeterlidir. Programınızın görevi yerine getirmesini istediğinizde, alt programı çağırmanız yeterlidir. Alt programlar, karmaşıklıkla başa çıkmak için önemli bir araçtır.

Bir altyordamın bazen "black box" olduğu söylenir, çünkü "içinde" ne olduğunu göremiyorsunuz (veya daha kesin olmak gerekirse, genellikle içini görmek istemezsiniz, çünkü o zaman bununla uğraşmak zorunda kalırsınız). altyordamın gizlemeyi amaçladığı tüm karmaşıklık). Elbette, dünyanın geri kalanıyla hiçbir şekilde etkileşime girmeyen bir kara kutu oldukça işe yaramaz olurdu. Bir kara kutu, dünyanın geri kalanıyla bir tür arayüze ihtiyaç duyar, bu da kutunun içindekiler ve dışındakiler arasında bir miktar etkileşime izin verir. Fiziksel bir kara kutunun dışında, basabileceğiniz düğmeler, ayarlayabileceğiniz kadranlar ve bilgileri ileri geri iletmek için kullanılabilecek yuvalar olabilir. Karmaşıklığı yaratmaya değil saklamaya çalıştığımız için kara kutuların ilk kuralına sahibiz:

|**Bir kara kutunun arayüzü oldukça basit, iyi tanımlanmış ve anlaşılması kolay olmalıdır.** 

Şimdi, bir kara kutunun bir içi vardır - görevi gerçekten gerçekleştiren bir alt programdaki kod veya televizyon setinizin içindeki tüm elektronik parçalar. Bir kara kutunun içine onun uygulaması denir. Kara kutuların ikinci kuralı şudur: 

|**Bir kara kutu kullanmak için, uygulaması hakkında hiçbir şey bilmenize gerek yoktur; tüm bilmeniz gereken onun arayüzü.**

Elbette bir kara kutuya sahip olmak için, ilk etapta birisinin uygulamayı tasarlamış ve inşa etmiş olması gerekir. Kara kutu fikri, hem uygulayıcının hem de kara kutunun kullanıcısının yararına çalışır. Sonuçta, kara kutu sınırsız sayıda farklı durumda kullanılabilir. Kara kutunun uygulayıcısının bunların hiçbirini bilmesine gerek yok. Uygulayıcının sadece kutunun kendisine atanan görevi yerine getirdiğinden ve dünyanın geri kalanıyla doğru bir şekilde arayüz oluşturduğundan emin olması gerekir. Bu, kara kutuların üçüncü kuralıdır: 

|**Bir kara kutunun uygulayıcısının, kutunun kullanılacağı daha büyük sistemler hakkında hiçbir şey bilmesine gerek yoktur.** 

Bir Bash fonksiyonu, aslında birçok kez çağrılabilen temel komut grubudur. Bir fonksiyonun amacı, bash betiklerinizi -bash script de denir- daha okunaklı hale getirmenize yardımcı olmak ve aynı kodu tekrar tekrar yazmaktan kaçınmaktır. Çoğu programlama diliyle karşılaştırıldığında, Bash fonksiyonları biraz kısıtlıdır.

Bu eğitim, Bash fonksiyonlarının temellerini kapsar ve onları kabuk betiklerinizde -shell scrip'te denir- nasıl kullanacağınızı gösterir.

![Bash Functions](/images/bash/Brain.jpg "Brain"){:height="57%" width="57%"}

## Bash Fonksiyonu Tanımlamak 

Bir bash fonksiyon ifadesi bildirmek kolaydır. Fonksiyonlar iki farklı biçimde bildirilebilir:

|İlk fonksiyon biçimi -function name ile- başlar, ardından parantezler gelir. Bu biçim tercih edilen ve daha çok kullanılan formattır. 


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

{% highlight bash %}
#!/bin/bash

hello_world () {
   echo 'merhaba, dünya'
}
{% endhighlight %}

{% highlight bash %}
hello_world
{% endhighlight %}

Kodu satır satır inceleyelim:

3. satırda fonksiyona isim vererek tanımlıyoruz. Kıvrımlı ayraç {, işlevin gövdesinin başlangıcını belirtir.
4. satır, işlev gövdesidir. İşlev gövdesi birden çok komut, ifade ve değişken bildirimi içerebilir.
5. satır, kapanış küme parantezi }, hello_world işlevinin sonunu tanımlar.
7. satırda fonksiyonu çalıştırıyoruz. İşlevi istediğiniz kadar çalıştırabilirsiniz.

Komut dosyasını çalıştırırsanız, merhaba, dünya yazdıracaktır. 

### **İndirmeler**


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
