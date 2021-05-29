---
layout: post
title:  "Prefetching, Preloading, Prerendering yerelleştirme"
date:   2021-05-29 12:00:00
last_updated: Aug 29, 2021
description: İnternet sayfalarının ilk açılış gösterimi düşünüldüğünde, sayfanın daha hızlı yüklenmesi ve kullanıcıların hedeflerini olabildiğince çabuk tamamlaması için (İnternet) metin sunucuda birleştirme, küçültme, önbelleğe alma veya gzipleme gibi şeyler düşünürüz. 
excerpt: Prefetching (hazır duruma getirme), preloading (sayfayı önceden yükleme), prerendering (sayfayı önceden oluşturma)
keywords: Prefetching, Preloading, Prerendering ,prefetch preload prerender,prefetch kapatma,prefetch,prefetch dosyası,prefetch klasörü,prefetch ne işe yarar,prefetch silmek,prefetch silme,prefetch ne demek
tags:  Web Article Metod Dnsmasq
categories: [Web ]
comments: false
published: true
lang: tr
---


{% include CSS.html %}

Prefetching (hazır duruma getirme), preloading (önceden yükleme), prerendering (önceden oluşturma)

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/Pre-Browsing/pre-browsing.png" alt="prebrowsing" title="prebrowsing" class="img-responsive" width="576px" height="324px"/>
  <p><small>The pre* &bull; browsing.</small></p>
</div>


İnternet sayfalarının ilk açılış gösterimi düşünüldüğünde, sayfanın daha hızlı yüklenmesi ve kullanıcıların hedeflerini olabildiğince çabuk tamamlaması için İnternet metin sunucusunda ki birleştirme, küçültme, önbelleğe alma veya gzipleme gibi şeyleri düşünürüz. 

Kaynakların önceden hazır duruma getirilmesi (prefetching), başka bir performans artırıcı tekniktir. İnternet metin sunucusuna, kullanıcının gelecekte hangi varlıklara ihtiyaç duyabileceğini -ihtiyaç duymadan önce söylemek için kullanabiliriz. 

> Önceden getirme, İnternet metin sunucuya kesinlikle gidecek veya gelecekte kullanılabilecek kaynaklar hakkında ipucu vermenin bir yoludur, bazı ipuçları mevcut sayfa için, diğerleri ise gelecekteki olası sayfalar için geçerlidir. 

> Geliştiriciler olarak, uygulamalarımızı İnternet metin sunucudan daha iyi biliyoruz. Bu bilgileri, temel kaynaklar hakkında İnternet metin sunucuyu bilgilendirmek için kullanabiliriz. 

Kullanıcıların ihtiyaç duymadan önce neye ihtiyaç duyduklarını tahmin etme tekniğine _prebrowsing_ denir. Bu sadece tek bir teknik olsa da, bir dizi farklı tekniğe ayrılır: "dns-prefetch", "subresource", standart "prefetch", "preconnect" ve "prerender". 

### DNS prefetching


<div class='pull-right alert alert-info' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/images/Pre-Browsing/dns-prefetch.png" alt="dns-prefetch" title="dns-prefetch" class="img-responsive" width="576px" height="324px"/>
  <p><small>DNS &bull; prefetching.</small></p>
</div>

Bu yerelleştirme, İnternet metin sunucuya daha sonra belirli bir URL'den ihtiyaç duyacağımız varlıklar olduğunu bildirir böylece İnternet metin sunucu, DNS'yi olabildiğince çabuk çözebilir. "example.com" URL'sinden bir resim veya ses dosyası gibi bir kaynağa ihtiyacımız olduğunu varsayalım. Belgenin "<head>" kısmına şunu yazardık: 

    <link rel="dns-prefetch" href="//example.com">

Artık, ondan bir dosya istediğimizde, DNS araştırması için beklememiz gerekmeyecek. Bu  yerelleştirme, özellikle üçüncü taraf kodları veya bir </script> tagında sosyal ağlardaki kaynaklar için kullandığımız bir öğeyi yükleyeleceğimizde kullanışlıdır.

Bu basit satır, destekleyen İnternet metin sunuculara, etki alanı içinde gerçekten ihtiyaç duyulmadan çok daha önce DNS'yi getirmeye başlamalarını söyleyecektir. Bu istek, İnternet metin sunucu, komut dosyası öğesine gerçekten ulaştığında, DNS arama işleminin önceden başlatıldığı anlamına gelir. İnternet metin sunucuya küçük bir avantaj sağlar. 

Bu, çok da önemli olmayacak kadar küçük bir performans iyileştirmesi gibi görünebilir, ancak durum böyle değildir - [Chrome her zaman benzer bir şey yapar] (https://docs.google.com/presentation/d/18zlAdKAxnc51y_kj-6sWLmnjl6TLnaru_WH0LJTjP-o). Alanın yalnızca küçük bir bölümünü URL çubuğuna yazarsanız, DNS'yi otomatik olarak önceden çözer (ve hatta bazen sayfayı önceden oluşturur), böylece her istekte çok önemli milisaniyeler kısalır. 

### Preconnect

Much like the DNS prefetch method, preconnect will resolve the DNS but it will also make the TCP handshake, and optional TLS negotiation. It can be used like this:

    <link rel="preconnect" href="https://example.com">

For more information, [Ilya Grigorik wrote a great post](https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/) about this handy resource hint:

> Modern browsers try their best to anticipate what connections the site will need before the actual request is made. By initiating early “preconnects”, the browser can set up the necessary sockets ahead of time and eliminate the costly DNS, TCP, and TLS roundtrips from the critical path of the actual request. That said, as smart as modern browsers are, they cannot reliably predict all the preconnect targets for each and every website.
> 
> The good news is that we can — finally — help the browser; we can tell the browser which sockets we will need ahead of initiating the actual requests via the new preconnect hint shipping in Firefox 39 and Chrome 46!

### Prefetching

If we’re certain that a specific resource will be required in the future, then we can ask the browser to request that item and store it in the cache for reference later. For example an image or a script, or really anything that’s cacheable by the browser:

    <linkrel="prefetch"href="image.png">

Unlike DNS prefetching, we’re actually requesting and downloading that asset and storing it in the cache. However, this is dependent on a number of conditions, as prefetching can be ignored by the browser. For example, a client might abandon the request of a large font file on a slow network. Firefox will only prefetch resources when [“the browser is idle”](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ).

As [Bram Stein explains](http://www.bramstein.com/writing/preload-hints-for-web-fonts.html) in his post on the matter, this could have huge performance benefits for webfonts. At the moment, font files have to wait for the DOM and CSSOM to be constructed before they even download. But, if we prefetch them, then that bottleneck can be circumnavigated with ease.

_Note: although prefetching assets used to be a little difficult to test, Chrome and Firefox will now show prefetched resources in the Network panel. Also, it’s helpful to remember that there’s no same-origin restriction for link prefetching._

### Subresources (see note)

Another prefetching technique helps identify the resources that are the highest priority and should be requested before prefetched items. For example, in Chrome and Opera we could add the following to the `head` of our document:

    <linkrel="subresource"href="styles.css">

[According to the Chromium docs](https://www.chromium.org/spdy/link-headers-and-server-hint/link-rel-subresource), it works like this:

> “LINK rel=subresource” provides a new link relation type with different semantics from LINK rel=prefetch. While rel=prefetch provides a low-priority download of resources to be used on subsequent pages, rel=subresource enables early loading of resources within the current page.

So: if the asset is required for the current page, or if it’s needed as soon as possible, then it’s probably best to use `subresource`, otherwise stick to `prefetch`.

**Important notes:** Andy Davies [clarifies](https://css-tricks.com/prefetching-preloading-prebrowsing/#comment-1596735) how they actually work. It also appears it is [being removed](https://code.google.com/p/chromium/issues/detail?id=581840) from Chrome.

### Prerendering pages

This is the nuclear option, as `prerender` gives us the ability to preemptively load all of the assets of a certain document, like so:

    <linkrel="prerender"href="https://css-tricks.com">

Steve Souders wrote [a great explanation about this technique](http://www.stevesouders.com/blog/2013/11/07/prebrowsing/):

> This is like opening the URL in a hidden tab – all the resources are downloaded, the DOM is created, the page is laid out, the CSS is applied, the JavaScript is executed, etc. If the user navigates to the specified `href`, then the hidden page is swapped into view making it appear to load instantly. Google Search has had this feature for years under the name Instant Pages. Microsoft recently announced they’re going to similarly use prerender in Bing on IE11.

But beware! You should probably be certain that the user will click that link, otherwise the client will download all of the assets necessary to render the page for no reason at all.

Souders continues:

> As with any of this anticipatory work, there’s a risk that the prediction is wrong. If the anticipatory work is expensive (e.g., steals CPU from other processes, consumes battery, or wastes bandwidth) then caution is warranted. It would seem difficult to anticipate which page users will go to next, but high confidence scenarios do exist:
> 
> *   If the user has done a search with an obvious result, that result page is likely to be loaded next.
> *   If the user navigated to a login page, the logged-in page is probably coming next.
> *   If the user is reading a multi-page article or paginated set of results, the page after the current page is likely to be next.

Finally, the [Page Visibility API](https://www.w3.org/TR/page-visibility/) can be used to guard against scripts firing before they’re rendered on the user’s screen.

OK, so with those design considerations out of the way, we can talk about future additions to the spec that might be of interest, too.

### Future option: Preloading

A new spec called [preload](https://w3c.github.io/preload/) suggests that sometimes it’s best to **always** download an asset, regardless of whether the browser thinks that’s a good idea or not. Unlike prefetching assets, which can be ignored, preloading assets **must** be requested by the browser.

    <linkrel="preload"href="image.png">

So, although _preloading is not currently supported by any browser at the moment_, the idea behind it is certainly interesting.

### Wrapping up

Predicting what our users will do next is difficult, and it certainly requires a lot of planning and testing. But, the performance benefits are definitely worth chasing. If we’re willing to experiment with these prefetching techniques, then we’re sure to improve the user experience in a noticeable way.
