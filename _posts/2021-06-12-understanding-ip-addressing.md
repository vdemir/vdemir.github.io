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
<h1>IP Adreslemeyi Kavrama ve CIDR Grafiklerini Anlama</h1> 
<div> 
<p>İnternet'e bağlı her cihazın bir tanıtıcı sözcüğe sahip olması gerekir. İnternet Protokolü (IP) adresleri, İnternet'e bağlanan belirli bir donanım parçasını tanıtmak için kullanılan sayısal adreslerdir.</p>
<p>Bugün kullanımdaki en yaygın iki IP versiyonu, İnternet Protokolü sürüm 4 (IPv4) ve İnternet Protokolü sürüm 6 (IPv6)'dır. Hem IPv4 hem de IPv6 sınırlı müşterek adres sayılarının kümesidir..</p>
<p>IPv4 için bu küme 32 bit (2<sup>32</sup>) boyutundadır ve 4.294.967,296 IPv4 adres bilgisi içerir. IPv6 adres uzayı 128 bit (2<sup>128</sup>) boyutundadır ve 340.282.366.920.938.463.463.374.607.431.768.211.456 IPv6 adres bilgisi içerir.</p> 
<p>Bilgi depolamak için temel birim olan bir bit, ikili sayı sistemi içindeki bir rakamdır.</p>
<p>IPv4 veya IPv6 havuzundaki her IP adresi, İnternet'e erişmek için kullanılan makinelere ve aygıtlara atanamaz. Bazı IP adresleri, özel ağlarda kullanıldığı gibi başka kullanımlar için ayrılmıştır. Tahsis için kullanılabilir tüm IP adresi sayısının adres kümesindeki toplam sayıdan az olduğu anlamına gelir.</p>

## **İnternet Ağ Şebeke önekleri** 


<p>IP adresleri, IPv4 veya IPv6 kümesinden alınabilir ve iki kısma ayrılır; ağ grubu ve ana bilgisayar grubu. Ağ kısmı belirli ağı, sunucu bilgisayar kısmı da Yerel alan Ağ (LAN)'daki belirli bir düğümü (örneğin, belirli bir bilgisayarı) tanımlar.</p>

## **Tahsisat**

<p>IP adresleri farklı boyutlu 'bloklardaki' ağlara atanır. Atanan 'blok'un boyutu, bu blokta bulunan IP adreslerinin sayısını gösteren bir eğikten (/) sonra yazılır. Örneğin, bir Internet Servis Sağlayıcısına (ISS) "/16" atanmışsa, yaklaşık 64.000 IPv4 adresi alırlar. "/26" ağı, 64 IPv4 adresi sağlar. Eğikten sonraki sayı ne kadar düşükse, o "blokta" o kadar çok adres bulunur.</p>

## **IPv4**


<p>Ağnın boyutu, bit olarak, eğik sonra yazılır. Buna "eğik çizgi notasyonu" denir. IPv4 adres alanında toplam 32 bit vardır. Örneğin, bir ağ "192.0.2.0/24" adresine sahipse, "24" sayısı ağda kaç bit bulunduğunu ifade eder. Bundan, adres alanı için kalan bit sayısı hesaplanabilir. Tüm IPv4 ağlarının 32 biti olduğu ve ondalık noktalarla belirtilen adresin her "bölümü" sekiz bit içerdiğinden, "192.0.2.0/24" ana bilgisayar adreslerini içerecek sekiz bit bırakır. Bu, 256 ana bilgisayar adresi için yeterli alandır. Bu ana bilgisayar adresleri, makinenizi Internet'e bağlamak için gereken IP adresleridir.</p>

<p>The size of the prefix, in bits, is written after the oblique. This is called &ldquo;slash notation&rdquo;. There is a total of 32 bits in IPv4 address space. For example, if a network has the address &ldquo;192.0.2.0/24&rdquo;, the number &ldquo;24&rdquo; refers to how many bits are contained in the network. From this, the number of bits left for address space can be calculated. As all IPv4 networks have 32 bits, and each &ldquo;section&rdquo; of the address denoted by the decimal points contains eight bits, &ldquo;192.0.2.0/24&rdquo; leaves eight bits to contain host addresses. This is enough space for 256 host addresses. These host addresses are the IP addresses that are necessary to connect your machine to the Internet.</p>
<p>A network numbered &ldquo;10.0.0.0/8&rdquo; (which is one of those reserved for private use) is a network with eight bits of network prefix, denoted by &ldquo;/8&rdquo; after the oblique. The &ldquo;8&rdquo; denotes that there are 24 bits left over in the network to contain IPv4 host addresses: 16,777,216 addresses to be exact.</p>
## **Classless Inter-Domain Routing (CIDR) Chart**
<p>The Classless Inter-Domain Routing (CIDR) is commonly known as the CIDR chart and is used by those running networks and managing IP addresses. It enables them to see the number of IP addresses contained within each &ldquo;slash notation&rdquo; and the size of each &ldquo;slash notation&rdquo; in bits.</p>
<p><img src="https://www.ripe.net/images/IPv4CIDRChart_2015.jpg"/></p>
<p>Download: <a href="https://www.ripe.net/about-us/press-centre/IPv4CIDRChart_2015.pdf">IPv4 CIDR Chart </a>(PDF)</p>
## **IPv6**
<p>IPv6 is similar to IPv4, but it is structured so that all LANs have 64 bits of network prefix as opposed to the variable length of network prefix<sup><a href="#1"><strong>1</strong></a></sup> that IPv4 networks have. All IPv6 networks have space for 18,446,744,073,709,551,616 IPv6 addresses.</p>
<p><img src="https://www.ripe.net/about-us/press-centre/IPv6Chart_2015.png"/></p>
<p>Download:<a href="https://www.ripe.net/about-us/press-centre/ipv6-chart_2015.pdf"> IPv6 Chart</a> (PDF)</p>
<p>Currently, most ISPs assign /48 network prefixes to subscribers' sites (the End Users' networks). Because all IPv6 networks have /64 prefixes, a /48 network prefix allows 65,536 LANs in an End User's site.</p>
<p>The current minimum IPv6 allocation made by the RIPE NCC is a /32 network prefix. If the LIR only made /48 assignments from this /32 network prefix, they would be able to make 65,536 /48 assignments. If they decided to only assign /56 network prefixes they would have 24 bits available to them, and so could make 16,777,216 /56 assignments.</p>
<p>For example, if a /24 IPv6 allocation is made to an LIR, it would be able to make 16,777,216 /48 assignments or 4,294,967,296 /56 assignments.</p>
<p>To give some perspective, it is worth noting that there are 4,294,967,296 IPv4 addresses in total, significantly less than the number of IPv6 addresses.</p>
<h3>IPv6 Relative Network Sizes</h3>
<table>
<tbody>
<tr>
<td>
<div>/128</div>
</td>
<td>
<div>1 IPv6 address</div>
</td>
<td>
<div>A network interface</div>
</td>
</tr>
<tr>
<td>
<div>/64</div>
</td>
<td>
<div>1 IPv6 subnet</div>
</td>
<td>
<div>18,446,744,073,709,551,616 IPv6 addresses</div>
</td>
</tr>
<tr>
<td>
<div>/56</div>
</td>
<td>
<div>256 LAN segments</div>
</td>
<td>
<div>Popular prefix size for one subscriber site</div>
</td>
</tr>
<tr>
<td>
<div>/48</div>
</td>
<td>
<div>65,536 LAN segments</div>
</td>
<td>
<div>Popular prefix size for one subscriber site</div>
</td>
</tr>
<tr>
<td>
<div>/32</div>
</td>
<td>
<div>65,536 /48 subscriber sites</div>
</td>
<td>
<div>Minimum IPv6 allocation</div>
</td>
</tr>
<tr>
<td>
<div>/24</div>
</td>
<td>
<div>16,777,216 subscriber sites</div>
</td>
<td>
<div>256 times larger than the minimum IPv6 allocation</div>
</td>
</tr>
</tbody>
</table>
<p><sup>1</sup> RFC2526, Reserved IPv6 Subnet Anycast Addresses (Proposed Standard)</p>
</div>
<div>
<div>Created: 04 Jan 2011 - Last updated: 09 Aug 2019</div>
</div>
