---
layout: post
title:  "IP Adresleme ve CIDR Grafikleri"
date:   2021-06-12 12:00:00
last_updated: 2021-06-12 12:00:00
description: İnternet sayfalarının ilk açılış gösterimi düşünüldüğünde, sayfanın daha hızlı yüklenmesi ve kullanıcıların hedeflerini olabildiğince çabuk tamamlaması için (İnternet) metin sunucuda birleştirme, küçültme, önbelleğe alma veya gzipleme gibi şeyler düşünürüz. 
excerpt: Prefetching (hazır duruma getirme), preloading (sayfayı önceden yükleme), prerendering (sayfayı önceden oluşturma)
keywords: IP Addressing CIDR
tags:  Web Article Html
categories: Web
permalink: /:categories/:title/
comments: false
published: true
lang: tr
redirect_from:
  - /web/2021/06/12/understanding-ip-addressing.html
---

# IP Adreslemeyi Kavrama ve CIDR Grafiklerini Anlama 
 
İnternet'e bağlı her cihazın bir tanıtıcı sözcüğe sahip olması gerekir. İnternet Protokolü (IP) adresleri, İnternet'e bağlsunucun belirli bir donanım parçasını tanıtmak için kullanılan sayısal adreslerdir.
Bugün kullanımdaki en yaygın iki IP versiyonu, İnternet Protokolü sürüm 4 (IPv4) ve İnternet Protokolü sürüm 6 (IPv6)'dır. Hem IPv4 hem de IPv6 sınırlı müşterek adres sayılarının kümesidir..

IPv4 için bu küme 32 bit (2<sup>32</sup>) boyutundadır ve 4.294.967,296 IPv4 adres bilgisi içerir. IPv6 adres uzayı 128 bit (2<sup>128</sup>) boyutundadır ve ~340x10<sup>36</sup> IPv6 adres bilgisi içerir.

Bilgi depolamak için temel birim olan bir bit, ikili sayı sistemi içindeki bir rakamdır.

IPv4 veya IPv6 havuzundaki her IP adresi, İnternet'e erişmek için kullanılan makinelere ve aygıtlara atsunucumaz. Bazı IP adresleri, özel ağlarda kullanıldığı gibi başka kullanımlar için ayrılmıştır. Tahsis için kullanılabilir tüm IP adresi sayısının adres kümesindeki toplam sayıdan az olduğu anlamına gelir.

## Ağ alanı adres kodları


IP adresleri, IPv4 veya IPv6 kümesinden alınabilir ve iki kısma ayrılır; ağ grubu ve sunucu bilgisayar grubu. Ağ kısmı belirli bir ağı, sunucu bilgisayar kısmı da Yerel alan Ağ (LAN)'daki belirli bir düğümü (örneğin, belirli bir bilgisayarı) tanımlar.

## Tahsisat

IP adresleri farklı boyutlu 'bloklardaki' ağlara atanır. Atsunucun 'blok'un boyutu, bu blokta bulunan IP adreslerinin sayısını gösteren bir eğikten (/) sonra yazılır. Örneğin, bir Internet Servis Sağlayıcısına (ISS) "/16" atanmışsa, yaklaşık 64.000 IPv4 adresi alırlar. "/26" ağı, 64 IPv4 adresi sağlar. Eğikten sonraki sayı ne kadar düşükse, o "blokta" o kadar çok adres bulunur.

## IPv4


Alan adı kodu boyutu, bit olarak, eğikten (/) sonra yazılır. Buna "eğik çizgi notasyonu" denir. IPv4 adres uzayında toplam 32 bit vardır. Örneğin, bir ağ "192.0.2.0/24" adresine sahipse, "24" sayısı ağda kaç bit sınırı olduğunu ifade eder. Bundan, adres uzayı içinde kalan bitlerin sayısı hesaplsunucubilir. 

Tüm IPv4 ağları 32 bite sahiptir ve ondalık noktalarla belirtilen adresin her "bölümü" sekiz bit içerir, "192.0.2.0/24", sunucu bilgisayar adreslerini içeren sekiz bit bırakır. Bu, 256 sunucu bilgisayar adresi için yeterli alandır. Bu sunucu bilgisayar adresleri, makinenizi Internet'e bağlamak için gereken IP adresleridir.

10.0.0.0/8" numaralı bir ağ (özel kullanım için ayrılmış ağlardan biri), eğiklik sonrası "/8" ile belirtilen sekiz bit ağ koduna sahip bir ağdır. "8", ağda IPv4 sunucu bilgisayar adreslerini içeren 24 bit kaldığını gösterir: tam olarak 16.777.216 adres.

Not: 16.777.216=2<sup>8</sup>x2<sup>8</sup>x2<sup>8</sup>

##  DNS: Alan Adı Sunucusu 

İnternetteki neredeyse her şey bir DNS talebiyle başlar. DNS, İnternetin sunucu bilgisayar dizinidir. Bir bağlantıya tıkladığınızda, bir uygulama açtığınızda, bir e-posta gönderdiğinizde cihazınızın yaptığı ilk şey dizine sormaktır. 0.0.0.0 geçerli bir adres olmadığından, diğer normal IP servisleri gibi DNS sunucularının da geçerli bir IP adresi ile adreslenmesi gerekir, yani. 0.0.0.0 ve 255.255.255.255 ayrılmış birkaç aralık dışında. 

Ağ yapılandırmasına bağlı olarak, 192.168.2.0/24 ağındaki 192.168.2.0 ve 192.168.2.255 gibi adresler de geçersiz olabilir. Ayrıca, ad çözümlemesi için sunucunun erişilebilir olması gerekir. 0.0.0.0 adresi için geçerli bir kullanım olsa da: Bağlantıları dinlerken, “bu bilgisayardaki tüm arayüzlerde dinle” anlamına gelir.Bazı programlar, bir değerin ayarlanmadığı durumlarda hatalı olarak 0.0.0.0 görüntüleyebilir.

## Ayrılmamış Etki Alan İçi Yönlendirme (CIDR) Tablosu

(CIDR) Tablosu, yaygın olarak CIDR şeması olarak bilinir ve ağ şebekesini çalıştıran ve IP adreslerini yönetenler tarafından kullanılır. Her eğik çizgi notasyonunda yerleşik IP adreslerinin sayısını ve bit cinsinden eğik çizgi notasyonu boyutunu anlamalarını sağlar.


![IPv4CIDRChart](/images/IPv4CIDRChart_2015.jpg "IPv4CIDRChart"){:height="95%" width="95%"}

## IPv6

IPv6, IPv4'e benzer, ancak tüm LAN'lerin IPv4 ağlarının sahip olduğu değişken ağ alanı adres kodu<sup>1</sup> uzunluğunun aksine 64 bit ağ alanı adres koduna sahip olacak şekilde yapılandırılmıştır. Tüm IPv6 ağlarında 18.446.744.073.709.551.616 IPv6 adresi için alan vardır.

## SubNet Mask (alt ağ maskeleri)

Ağlar, daha hızlı veri aktarımı ve daha kolay yönetim sağlamak için alt ağlara ayrılır. Yönlendiriciler bunu, alt ağı belirlemek için IP adresine nereye bakılacağını gösteren bir sayı olan alt ağ maskeleri atayarak gerçekleştirir.


Şu anda, çoğu ISP, abonelerin sitelerine (Son Kullanıcıların ağları) /48 ağ alanı adres koduatar. Tüm IPv6 ağlarında /64 ağ alanı adres kodu bulunduğundan, /48 ağ alanı adres kodubir Son Kullanıcı sitesinde 65.536 LAN'a izin verir.

RIPE NCC tarafından yapılan mevcut minimum IPv6 tahsisi, bir /32 ağ alanı adres kodudir. LIR sadece bu /32 ağ alanı adres kodundan /48 atama yapsaydı, 65.536 /48 atama yapabilirdi. Yalnızca /56 ağ alanı adres kodları atamaya karar verirlerse, kendilerine 24 bit kullanılabilir ve böylece 16.777.216 /56 atama yapabilirler.

Örneğin, bir LIR'ye /24 IPv6 tahsisi yapılırsa, 16.777.216/48 ataması veya 4.294.967,296/56 ataması yapabilecektir. 

Bir bakış açısı vermek gerekirse, toplamda 4,294,967,296 IPv4 adresi olduğunu, IPv6 adreslerinin sayısından önemli ölçüde daha az olduğunu belirtmekte fayda var. 


IP adresine alt ağ maskesi uygulamak, ağ adresini sunucu bilgisayar adresinden ayırır. Ağ bitleri maskedeki 1'ler tarafından, sunucu bilgisayar bitleri ise 0'larla temsil edilir. Alt ağ maskesiyle IP adresinde bit düzeyinde mantıksal AND işlemi gerçekleştirmek ağ adresini üretir. Örneğin, C Sınıfı alt ağ maskesini IP adresimiz 216.3.128.12'ye uygulamak aşağıdaki ağ adresini üretir:


    IP:   1101 1000 . 0000 0011 . 1000 0000 . 0000 1100  (216.003.128.012) 
    Mask: 1111 1111 . 1111 1111 . 1111 1111 . 0000 0000  (255.255.255.000) 
          --------------------------------------------- 
          1101 1000 . 0000 0011 . 1000 0000 

![IPv6Chart](/images/IPv6Chart_2015.png "IPv6Chart"){:height="95%" width="95%"}


## IPv6 Göreli Ağ Boyutları
<table>
<tbody>
<tr>
<td>
/128
</td>
<td>
1 IPv6 adresi
</td>
<td>
Ağ arabirimi
</td>
</tr>
<tr>
<td>
/64
</td>
<td>
1 IPv6 alt ağ
</td>
<td>
18,446,744,073,709,551,616 IPv6 adresi
</td>
</tr>
<tr>
<td>
/56
</td>
<td>
256 LAN segmenti
</td>
<td>
Bir abone sitesi için popüler ağ alanı adres kodu boyutu 
</td>
</tr>
<tr>
<td>
/48
</td>
<td>
65,536 LAN segmenti
</td>
<td>
Bir abone sitesi için popüler ağ alanı adres kodu boyutu 
</td>
</tr>
<tr>
<td>
/32
</td>
<td>
65,536 /48 abone siteleri
</td>
<td>
Minimum IPv6 tahsisi 
</td>
</tr>
<tr>
<td>
/24
</td>
<td>
16,777,216 abone siteleri
</td>
<td>
Minimum IPv6 tahsisinden 256 kat daha büyük 
</td>
</tr>
</tbody>
</table>
<sup>1</sup> RFC2526, Ayrılmış IPv6 Alt Ağ Anycast Adresleri (Önerilen Standart) 


