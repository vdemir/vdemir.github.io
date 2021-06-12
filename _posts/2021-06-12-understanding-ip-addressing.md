---
layout: post
title:  "IP Adresleme ve CIDR Grafikleri"
date:   2021-06-12 12:00:00
last_updated: 2021-06-12 12:00:00
description: İnternet sayfalarının ilk açılış gösterimi düşünüldüğünde, sayfanın daha hızlı yüklenmesi ve kullanıcıların hedeflerini olabildiğince çabuk tamamlaması için (İnternet) metin sunucuda birleştirme, küçültme, önbelleğe alma veya gzipleme gibi şeyler düşünürüz. 
excerpt: Prefetching (hazır duruma getirme), preloading (sayfayı önceden yükleme), prerendering (sayfayı önceden oluşturma)
keywords: IP Addressing CIDR
tags:  Web Article Metod Dnsmasq
categories: [Web ]
comments: false
published: true
lang: tr
---

# IP Adreslemeyi Kavrama ve CIDR Grafiklerini Anlama 
 
İnternet'e bağlı her cihazın bir tanıtıcı sözcüğe sahip olması gerekir. İnternet Protokolü (IP) adresleri, İnternet'e bağlanan belirli bir donanım parçasını tanıtmak için kullanılan sayısal adreslerdir.
Bugün kullanımdaki en yaygın iki IP versiyonu, İnternet Protokolü sürüm 4 (IPv4) ve İnternet Protokolü sürüm 6 (IPv6)'dır. Hem IPv4 hem de IPv6 sınırlı müşterek adres sayılarının kümesidir..
IPv4 için bu küme 32 bit (2<sup>32</sup>) boyutundadır ve 4.294.967,296 IPv4 adres bilgisi içerir. IPv6 adres uzayı 128 bit (2<sup>128</sup>) boyutundadır ve ~340x10<sup>36</sup> IPv6 adres bilgisi içerir.
Bilgi depolamak için temel birim olan bir bit, ikili sayı sistemi içindeki bir rakamdır.
IPv4 veya IPv6 havuzundaki her IP adresi, İnternet'e erişmek için kullanılan makinelere ve aygıtlara atanamaz. Bazı IP adresleri, özel ağlarda kullanıldığı gibi başka kullanımlar için ayrılmıştır. Tahsis için kullanılabilir tüm IP adresi sayısının adres kümesindeki toplam sayıdan az olduğu anlamına gelir.

## Ağ alanı adres kodları


IP adresleri, IPv4 veya IPv6 kümesinden alınabilir ve iki kısma ayrılır; ağ grubu ve ana bilgisayar grubu. Ağ kısmı belirli bir ağı, sunucu bilgisayar kısmı da Yerel alan Ağ (LAN)'daki belirli bir düğümü (örneğin, belirli bir bilgisayarı) tanımlar.

## Tahsisat

IP adresleri farklı boyutlu 'bloklardaki' ağlara atanır. Atanan 'blok'un boyutu, bu blokta bulunan IP adreslerinin sayısını gösteren bir eğikten (/) sonra yazılır. Örneğin, bir Internet Servis Sağlayıcısına (ISS) "/16" atanmışsa, yaklaşık 64.000 IPv4 adresi alırlar. "/26" ağı, 64 IPv4 adresi sağlar. Eğikten sonraki sayı ne kadar düşükse, o "blokta" o kadar çok adres bulunur.

## IPv4


Alan adı kodu boyutu, bit olarak, eğikten (/) sonra yazılır. Buna "eğik çizgi notasyonu" denir. IPv4 adres uzayında toplam 32 bit vardır. Örneğin, bir ağ "192.0.2.0/24" adresine sahipse, "24" sayısı ağda kaç bit sınırı olduğunu ifade eder. Bundan, adres uzayı içinde kalan bitlerin sayısı hesaplanabilir. Tüm IPv4 ağları 32 bite sahiptir ve ondalık noktalarla belirtilen adresin her "bölümü" sekiz bit içerir, "192.0.2.0/24", sunucu bilgisayar adreslerini içeren sekiz bit bırakır. Bu, 256 sunucu bilgisayar adresi için yeterli alandır. Bu sunucu bilgisayar adresleri, makinenizi Internet'e bağlamak için gereken IP adresleridir.

10.0.0.0/8" numaralı bir ağ (özel kullanım için ayrılmış ağlardan biri), eğiklik sonrası "/8" ile belirtilen sekiz bit ağ koduna sahip bir ağdır. "8", ağda IPv4 sunucu bilgisayar adreslerini içeren 24 bit kaldığını gösterir: tam olarak 16.777.216 adres.
Not: 16.777.216=2<sup>8</sup>x2<sup>8</sup>x2<sup>8</sup>

##  DNS: Alan Adı Sunucusu 

İnternetteki neredeyse her şey bir DNS talebiyle başlar. DNS, İnternetin sunucu bilgisayar dizinidir. Bir bağlantıya tıkladığınızda, bir uygulama açtığınızda, bir e-posta gönderdiğinizde cihazınızın yaptığı ilk şey dizine sormaktır. 0.0.0.0 geçerli bir adres olmadığından, diğer normal IP servisleri gibi DNS sunucularının da geçerli bir IP adresi ile adreslenmesi gerekir, yani. 0.0.0.0 ve 255.255.255.255 ayrılmış birkaç aralık dışında. Ağ yapılandırmasına bağlı olarak, 192.168.2.0/24 ağındaki 192.168.2.0 ve 192.168.2.255 gibi adresler de geçersiz olabilir. Ayrıca, ad çözümlemesi için sunucunun erişilebilir olması gerekir. 0.0.0.0 adresi için geçerli bir kullanım olsa da: Bağlantıları dinlerken, “bu bilgisayardaki tüm arayüzlerde dinle” anlamına gelir.Bazı programlar, bir değerin ayarlanmadığı durumlarda hatalı olarak 0.0.0.0 görüntüleyebilir.

## Ayrılmamış Etki Alanları İç Yönlendirme (CIDR) Tablosu

Sınıfsız Etki Alanları Arası Yönlendirme (CIDR), yaygın olarak CIDR şeması olarak bilinir ve ağları çalıştıran ve IP adreslerini yönetenler tarafından kullanılır. Her bir &ldquo;eğik çizgi gösteriminde&rdquo; yer alan IP adreslerinin sayısını görmelerini sağlar. ve her bir &ldquo;eğik çizgi gösteriminin&rdquo; bitler halinde. 
The Classless Inter-Domain Routing (CIDR) is commonly known as the CIDR chart and is used by those running networks and managing IP addresses. It enables them to see the number of IP addresses contained within each &ldquo;slash notation&rdquo; and the size of each &ldquo;slash notation&rdquo; in bits.
<img src="https://www.ripe.net/images/IPv4CIDRChart_2015.jpg"/>


![IPv4CIDRChart](/images/IPv4CIDRChart_2015.webp "IPv4CIDRChart"){:height="100%" width="100%"}

Download: <a href="https://www.ripe.net/about-us/press-centre/IPv4CIDRChart_2015.pdf">IPv4 CIDR Chart </a>(PDF)

## IPv6

IPv6 is similar to IPv4, but it is structured so that all LANs have 64 bits of network prefix as opposed to the variable length of network prefix<sup><a href="#1"><strong>1</strong></a></sup> that IPv4 networks have. All IPv6 networks have space for 18,446,744,073,709,551,616 IPv6 addresses.
<img src="https://www.ripe.net/about-us/press-centre/IPv6Chart_2015.png"/>
Download:<a href="https://www.ripe.net/about-us/press-centre/ipv6-chart_2015.pdf"> IPv6 Chart</a> (PDF)
Currently, most ISPs assign /48 network prefixes to subscribers' sites (the End Users' networks). Because all IPv6 networks have /64 prefixes, a /48 network prefix allows 65,536 LANs in an End User's site.
The current minimum IPv6 allocation made by the RIPE NCC is a /32 network prefix. If the LIR only made /48 assignments from this /32 network prefix, they would be able to make 65,536 /48 assignments. If they decided to only assign /56 network prefixes they would have 24 bits available to them, and so could make 16,777,216 /56 assignments.
For example, if a /24 IPv6 allocation is made to an LIR, it would be able to make 16,777,216 /48 assignments or 4,294,967,296 /56 assignments.
To give some perspective, it is worth noting that there are 4,294,967,296 IPv4 addresses in total, significantly less than the number of IPv6 addresses.
<h3>IPv6 Relative Network Sizes</h3>
<table>
<tbody>
<tr>
<td>
/128</div>
</td>
<td>
1 IPv6 address</div>
</td>
<td>
A network interface</div>
</td>
</tr>
<tr>
<td>
/64</div>
</td>
<td>
1 IPv6 subnet</div>
</td>
<td>
18,446,744,073,709,551,616 IPv6 addresses</div>
</td>
</tr>
<tr>
<td>
/56</div>
</td>
<td>
256 LAN segments</div>
</td>
<td>
Popular prefix size for one subscriber site</div>
</td>
</tr>
<tr>
<td>
/48</div>
</td>
<td>
65,536 LAN segments</div>
</td>
<td>
Popular prefix size for one subscriber site</div>
</td>
</tr>
<tr>
<td>
/32</div>
</td>
<td>
65,536 /48 subscriber sites</div>
</td>
<td>
Minimum IPv6 allocation</div>
</td>
</tr>
<tr>
<td>
/24</div>
</td>
<td>
16,777,216 subscriber sites</div>
</td>
<td>
256 times larger than the minimum IPv6 allocation</div>
</td>
</tr>
</tbody>
</table>
<sup>1</sup> RFC2526, Reserved IPv6 Subnet Anycast Addresses (Proposed Standard)
</div>

Created: 04 Jan 2011 - Last updated: 09 Aug 2019</div>
</div>
