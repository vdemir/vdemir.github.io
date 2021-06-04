---
layout: post
title:  C Preprocessor Bildirimleri
date:   2018-01-03 12:52:00
tags:   C Programlama Linux GCC
comments: true
published: true
lang: tr
---
 

C Preprocessor Önişlemci bildirimleri compiler derleyicinin bir parçası değildir ancak C programlama dilinin gücünü genişletir. Tüm önişlemci direktifleri bir # sembolü ile başlar. Önişleme adımı, programın kaynak kodunun derlenmesinden önce başlar ve asıl derleme öncesi gerekli ön-işlemlerin yapılmasını derleyiciye bildirir.

!\[\_config.yml\]({{ site.baseurl }}/images/IncludeLibrary.png) ## Önişlemci Bildirimleri Hakkında Önemli Hususlar

_*   Önişlemci talimatları, kaynak kodunun derlenmesinden önce uygulanır.
*   Tüm önişlemci talimatları bir # simgesi ile başlar.
*   Önişlemci talimatları noktalı virgülle bitmez._

!\[\_config.yml\]({{ site.baseurl }}/images/C-PreProcessor.jpg) ## Önişlemci Talimat Tipleri

_*   Macro Talimatları
*   Şartlı Derleme Talimatları
*   Dosya Dahil Etme Talimatları_

\*\[Macro\]Büyük Ölçekte Geçerli Değer Yerleştirme ## Önişlemci talimatlarının bir listesi aşağıdadır

Talimat

Tanımı

**#include**

Bir C Programına üsbilgi dosyasını\[header file\] dahil eder.

**#define**

İkame makrosudur. Bir ifade vasıtası ile sabit bir değeri programa yerleştirir.

**#if**

Koşullu ifadenin sonucuna bağlı bir kod bloğu içerir.

**#else**

#if'in tamamlayıcısıdır.

**#elif**

#else ve #if ile benzerdir.

**#endif**

Bu, #if, #elif gibi koşullu yönergelerin sonunu işaretler.

**#undef**

Tanımsız bir önişlemci makrosu.

**#ifdef**

Eğer bir sabit değer daha önce #define ile tanımlanmışsa true döndürür.

**#ifndef**

Eğer sabit değer daha önce #define ile tanımlanmamışsa true döndürür.

**#pragma**

Derleyiciye özel komutlar verir.

**#error**

Hata mesajını stderr'da yazdırır.

\[!\[SUNMI(선미) \_ Gashina(가시나)\](http://img.youtube.com/vi/ur0hCdne2-s/0.jpg)\](https://www.youtube.com/watch?v=ur0hCdne2-s) ## #include önişlemci bildirimleri

#include Önişlemci Bildirimleri, C Programında üstbilgi(\*.h) dosyasını eklemek için kullanılır. Yol belirtilmemişse, geçerli dizindeki üstbilgi(\*.h) dosyasını denetler. Kullanıcı tanımlı üstbilgi(\*.h) dosyasını eklemek için açılı parantez<> yerine çift tırnak"" işareti kullanıyoruz.

_Örneğin_  
\~~~c #include // Standard ÜstBilgi Dosyası #include "myHeaderFile.h" // Kullanıcı Tanımlı ÜstBilgi Dosyası ~~~

İlk satır Önişlemciye bu satırı string.h başlık dosyasının içeriğiyle değiştirmesini söyler.  
İkinci satır önişlemciye myHeaderFile.h dosyasını geçerli dizinden almasını ve myHeaderFile.h dosyasının içeriğini eklemesini söyler.

\## #define önişlemci bildirimleri

Bu basit bir büyük ölçekte geçerli yerleştirmedir. Sabitin tüm tekrarlamalarını yerlerine koyar ve bir ifadeyle değiştirir.

\~~~ #define identifier value ~~~

*   **#define** : Metin\[text\] yerleştirme için kullanılan önişlemci bildirimidir.
  
*   **identifier** : Programda kullanılan ve değeri ile değiştirilecek bir tanımlayıcıdır.
  
*   **value** : Tanımlayıcı için değiştirilecek değerdir.
  

_Örneğin_  
\~~~ #define PIE 3.141 #define ZERO 0 ~~~ ### #define Ön işlemci bildirimlerinin kullanımını göstermek için C programı ~~~c #include #define PI 3.141 int main(){ int radius; float circumference; printf("Dairenin yarıçapını girin:?"); scanf("%d", &radius); circumference = 2\*PI\*radius; printf("Çemberin Çevresi = %f\\n", circumference); return 0; } ~~~ ### Çıktısı ~~~ ./my\_app Dairenin yarıçapını girin:?77 Çemberin Çevresi = 483.713989 ~~~ ## #define seçenekleri ile Macro yerleştirme

#define ön-işlem bildirimi, parametrelerle Macro tanımları yazmak için kullanılabilir.

*   Büyük ölçekte geçerli bir Macro \[identifier\] tanımlayıcı ile karşılaşıldığında, değişkenler C programındaki gerçek bağımsız değişkenlerle değiştirilir.
*   Büyük ölçekte geçerli bağımsız Macro değişkenler için tanımlanmış veri türü yoktur. Int, float vb. gibi sayısal değerleri geçirebilirsiniz.
*   Büyük ölçekte geçerli bağımsız Macro değişkenler, büyük/küçük harf duyarlı değildir.

_Örneğin_  
\~~~ #define circumference(r) (2\*3.141\*(r)) ~~~ ### Macro değişkenleri yerleştirmeyi Gösteren C Programı ~~~c #include #include #define circumference(r) (2\*3.141\*(r)) int main(){ int radius; float c; struct lconv \*loc; setlocale (LC\_ALL, "tr\_TR.UTF-8"); loc = localeconv(); printf("Dairenin yarıçapını girin:?"); scanf("%d", &radius); c = circumference(radius); printf("Çemberin Çevresi = %f\\n", c); printf("Para birimi sembolü: %s\\n", loc->currency\_symbol); return 0; } ~~~ ### Çıktısı ~~~ Dairenin yarıçapını girin:?77 Çemberin Çevresi = 483,713989 Para birimi sembolü: ₺ ~~~ ## #if, #else ve #endif Koşullu Derleme Önişlemci Bildirimleri

Koşullu Derleme Bildirimleri, koşullu ifadenin sonucuna dayalı bir kod bloğu eklememizi sağlar.

\~~~ #if Condition\_Expression statements; #else statements; #endif ~~~ #If, #else durumuna benzer ancak derlemeden önce, (Condition\_Expression) yalnızca sabit bir ifade olmalıdır. ### #if, #else ve #endif kullanarak Koşullu Derlemeyi gösteren C programı. ~~~c #include #define NUM 11 void main() { #if((NUM%2)==0) printf("Sayi Cifttir\\n"); #else printf("Sayi Tektir\\n"); #endif } ~~~ ### Çıktısı ~~~ gcc -o my\_app \*.c Sayi Tektir ~~~ ### Başka Bir Örnekte #if ve #else Kullanımı ~~~c #include #include int main(void) { int ch; while ((ch=getchar()) != EOF) /\* stdin(klavyeden) "abcde" oku/yaz \*/ printf("%c", ch); /\* EOF'ye ulaşma nedenini test et. \*/ if (feof(stdin)) /\* eğer dosya sonu durumundan kaynaklanan bir arıza varsa \*/ puts("Dosya sonuna ulaşıldı"); else if (ferror(stdin)) /\* eğer başarısızlık başka bir hatadan kaynaklanırsa \*/ { perror("getchar()"); fprintf(stderr,"getchar() dosya %s satırda başarısız oldu # %d\\n", \_\_FILE\_\_,\_\_LINE\_\_-9); exit(EXIT\_FAILURE); } return EXIT\_SUCCESS; } ~~~ ### Çıktısı ~~~ gcc -o my\_app \*.c rty45h546543dfdezü rty45h546543dfdezü """""""""""""" """""""""""""" 431368/+\*+ 431368/+\*+ ~~~ ## C Dilinde Önceden Tanımlanmış Macro bildirimleri

C Programlama dili, bir dizi Macro yerleştirmeler tanımlar. Aşağıda, yaygın olarak kullanılan bazı Macro yerleştirmelerin listesi bulunmaktadır.

Macro

Tanımı

**NULL**

Bir boş\[NULL\] gösterici sabitinin değeri.

**EXIT\_SUCCESS**

Programın başarıyla tamamlanması durumunda çıkış fonksiyonunun geri dönüş değeri.

**EXIT\_FAILURE**

Başarısızlık nedeniyle programın sonlandırılması durumunda geri döndürülecek çıkış fonksiyonu değeri.

**RAND\_MAX**

Rand işlevi tarafından döndürülen maksimum değer.

**\_\_FILE\_\_**

Geçerli dosya adını bir dize olarak içerir.

**\_\_LINE\_\_**

Geçerli satır sayısını bir tam sayı sabiti olarak içerir.

**\_\_DATE\_\_**

MM DD YYYY" biçiminde geçerli tarih içerir.

**\_\_TIME\_\_**

HH: MM: SS" biçimindeki geçerli saati içerir.

\### Macro bildirimlerinin değerini basan C programı ~~~c #include #include int main(){ printf("NULL : %d\\n", NULL ); printf("EXIT\_SUCCESS : %d\\n", EXIT\_SUCCESS ); printf("EXIT\_FAILURE : %d\\n", EXIT\_FAILURE ); printf("RAND\_MAX : %d\\n", RAND\_MAX ); printf("File Name : %s\\n", \_\_FILE\_\_ ); printf("DATE : %s\\n", \_\_DATE\_\_ ); printf("Line : %d\\n", \_\_LINE\_\_ ); return 0; } ~~~ \### Çıktısı ~~~ NULL : 0 EXIT\_SUCCESS : 0 EXIT\_FAILURE : 1 RAND\_MAX : 2147483647 File Name : PreProcessorMacro.c DATE : Jan 7 2018 Line : 11 ~~~
