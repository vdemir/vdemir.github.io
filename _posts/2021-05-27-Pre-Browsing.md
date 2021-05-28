---
layout: post
title:  "Prefetching, preloading, prebrowsing"
date:   2021-05-24 12:00:00
last_updated: Aug 29, 2021
description: İnternet sayfalarının ilk açılış gösterimi düşünüldüğünde, sayfanın daha hızlı yüklenmesi ve kullanıcıların hedeflerini olabildiğince çabuk tamamlaması için (internet) metin sunucuda birleştirme, küçültme, önbelleğe alma veya gzipleme gibi şeyler düşünürüz. 
excerpt: Prefetching (önceden getirme), preloading (önceden yükleme), prebrowsing (ön göz atma)
keywords: Prefetch, preload
tags:  Books
categories: [Books ]
comments: false
published: false
lang: tr
---

Prefetching (önceden getirme), preloading (önceden yükleme), prebrowsing (ön göz atma)

İnternet sayfalarının ilk açılış gösterimi düşünüldüğünde, sayfanın daha hızlı yüklenmesi ve kullanıcıların hedeflerini olabildiğince çabuk tamamlaması için (internet) metin sunucuda birleştirme, küçültme, önbelleğe alma veya gzipleme gibi şeyler düşünürüz. 


Kaynakların önceden getirilmesi (prefetching), başka bir performans artırıcı tekniktir. (internet) metin sunucuya, kullanıcının gelecekte hangi varlıklara ihtiyaç duyabileceğini -ihtiyaç duymadan önce-söylemek için kullanabiliriz. 


> Önceden getirme, (internet) metin sunucuya kesinlikle gidecek veya gelecekte kullanılabilecek kaynaklar hakkında ipucu vermenin bir yoludur, bazı ipuçları mevcut sayfa için, diğerleri ise gelecekteki olası sayfalar için geçerlidir. 


> Geliştiriciler olarak, uygulamalarımızı (internet) metin sunucudan daha iyi biliyoruz. Bu bilgileri, temel kaynaklar hakkında (internet) metin sunucuyu bilgilendirmek için kullanabiliriz. 


This practice of guessing what users need before they need it is has been called _prebrowsing_. It’s not just a single technique though, it breaks down into a number of different techniques: `dns-prefetch`, `subresource`, the standard `prefetch`, `preconnect`, and `prerender`.


Kullanıcıların ihtiyaç duymadan önce neye ihtiyaç duyduklarını tahmin etme tekniğine _prebrowsing_ denir. Bu sadece tek bir teknik olsa da, bir dizi farklı tekniğe ayrılır: "dns-prefetch", "subresource", standart "prefetch", "preconnect" ve "prerender". 

### DNS prefetching

This notifies the client that there are assets we’ll need later from a specific URL so the browser can resolve the DNS as quickly as possible. Say we need a resource, like an image or an audio file, from the URL `example.com`. In the `<head>` of the document we’d write:

Bu, (internet) metin sunucuya daha sonra belirli bir URL'den ihtiyaç duyacağımız varlıklar olduğunu bildirir, böylece (internet) metin sunucu DNS'yi olabildiğince çabuk çözebilir. "example.com" URL'sinden bir resim veya ses dosyası gibi bir kaynağa ihtiyacımız olduğunu varsayalım. Belgenin "<head>" kısmına şunu yazardık: 


    <linkrel="dns-prefetch"href="//example.com">

Then, when we request a file from it, we’ll no longer have to wait for the DNS lookup. This is particularly useful if we’re using code from third parties or resources from social networks where we might be loading a widget from a `<script>`.

In his [epic front-end performance post](http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/#section:dns-prefetching), Harry Roberts suggests using this technique:

> That simple line will tell supportive browsers to start prefetching the DNS for that domain a fraction before it’s actually needed. This means that the DNS lookup process will already be underway by the time the browser hits the script element that actually requests the widget. It just gives the browser a small head start.

This might seem like such a tiny performance improvement as to not matter very much, but this is not necessarily the case – [Chrome does something similar all the time](https://docs.google.com/presentation/d/18zlAdKAxnc51y_kj-6sWLmnjl6TLnaru_WH0LJTjP-o/present?slide=id.g120f70e9a_041). It’ll automatically preresolve the DNS (and sometimes even prerender the page) if you type just a small part of the domain into the URL bar, thus shaving crucial milliseconds off each request.

### Preconnect

Much like the DNS prefetch method, preconnect will resolve the DNS but it will also make the TCP handshake, and optional TLS negotiation. It can be used like this:

    <linkrel="preconnect"href="https://css-tricks.com">

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
