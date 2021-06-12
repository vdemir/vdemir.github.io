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
<h1>Understanding IP Addressing and CIDR Charts</h1>
<div>
<p>Every device connected to the Internet needs to have an identifier. Internet Protocol (IP) addresses are the numerical addresses used to identify a particular piece of hardware connected to the Internet.</p>
<p>The two most common versions of IP in use today are Internet Protocol version 4 (IPv4) and Internet Protocol version 6 (IPv6). Both IPv4 and IPv6 addresses come from finite pools of numbers.</p>
<p>For IPv4, this pool is 32-bits (2<sup>32</sup>) in size and contains 4,294,967,296 IPv4 addresses. The IPv6 address space is 128-bits (2<sup>128</sup>) in size, containing 340,282,366,920,938,463,463,374,607,431,768,211,456 IPv6 addresses.</p>
<p>A bit is a digit in the binary numeral system, the basic unit for storing information.</p>
<p>Not every IP address in the IPv4 or IPv6 pool can be assigned to the machines and devices used to access the Internet. Some IP addresses have been reserved for other uses, such as for use in private networks. This means that the total number of IP addresses available for allocation is less than the total number in the pool.</p>
<h2>Network prefixes</h2>
<p>IP addresses can be taken from the IPv4 or the IPv6 pool and are divided into two parts, a network section and a host section. The network section identifies the particular network and the host section identifies the particular node (for example, a certain computer) on the Local Area Network (LAN).</p>
<h2>Allocation</h2>
<p>IP addresses are assigned to networks in different sized &lsquo;blocks'. The size of the &lsquo;block' assigned is written after an oblique (/), which shows the number of IP addresses contained in that block. For example, if an Internet Service Provider (ISP) is assigned a &ldquo;/16&rdquo;, they receive around 64,000 IPv4 addresses. A &ldquo;/26&rdquo; network provides 64 IPv4 addresses. The lower the number after the oblique, the more addresses contained in that &ldquo;block&rdquo;.</p>
<h2>IPv4</h2>
<p>The size of the prefix, in bits, is written after the oblique. This is called &ldquo;slash notation&rdquo;. There is a total of 32 bits in IPv4 address space. For example, if a network has the address &ldquo;192.0.2.0/24&rdquo;, the number &ldquo;24&rdquo; refers to how many bits are contained in the network. From this, the number of bits left for address space can be calculated. As all IPv4 networks have 32 bits, and each &ldquo;section&rdquo; of the address denoted by the decimal points contains eight bits, &ldquo;192.0.2.0/24&rdquo; leaves eight bits to contain host addresses. This is enough space for 256 host addresses. These host addresses are the IP addresses that are necessary to connect your machine to the Internet.</p>
<p>A network numbered &ldquo;10.0.0.0/8&rdquo; (which is one of those reserved for private use) is a network with eight bits of network prefix, denoted by &ldquo;/8&rdquo; after the oblique. The &ldquo;8&rdquo; denotes that there are 24 bits left over in the network to contain IPv4 host addresses: 16,777,216 addresses to be exact.</p>
<h2>Classless Inter-Domain Routing (CIDR) Chart</h2>
<p>The Classless Inter-Domain Routing (CIDR) is commonly known as the CIDR chart and is used by those running networks and managing IP addresses. It enables them to see the number of IP addresses contained within each &ldquo;slash notation&rdquo; and the size of each &ldquo;slash notation&rdquo; in bits.</p>
<p><img src="https://www.ripe.net/images/IPv4CIDRChart_2015.jpg"/></p>
<p>Download: <a href="https://www.ripe.net/about-us/press-centre/IPv4CIDRChart_2015.pdf">IPv4 CIDR Chart </a>(PDF)</p>
<h2>IPv6</h2>
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