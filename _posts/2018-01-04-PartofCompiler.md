---
layout: post
title:  Derleyicinin[compiler] parçaları[yetenekleri] nelerdir?
date:   2018-01-03 12:52:00
tags:   C Programlama
comments: False
---

{{ page.title }}
================

<p class="meta">4 Ocak 2018 - Türkiye</p>

<p class="ui_qtext_para">Genel amaçlı bir dil için bir derleyicinin birincil bileşenleri şunlardır:</p><ul><li>Simge tablosu - İsim, veri türü, kapsam, bağlantı vb. de dahil olmak üzere tanımlayıcılar hakkında bilgi sağlar.</li><li>Sözcüksel[Lexical] analizci - Giriş kaynak kodunu okumak, girdiyi tek tek belirteçlere ayırabilmek ve (bazı durumlarda) sembol tablosuyla etkileşim kurmaktan sorumludur.

Sözcüksel analizciler genellikle lex veya flex gibi kuralları ve eylemleri genel amaçlı bir programlama dili haline dönüştürmek için kullanılan kurallar ve eylemler şeklinde uygulanmaktadır.</li><li>Ayrıştırıcı[parser] - Sözcüksel analizcinin dilin sözdizimsel kurallarına uydurduğu belirteç dizilerini eşleştirmesinden ve programın dahili bir temsilini (örneğin, soyut sözdizim ağacı vb.) oluşturmaktan sorumludur. Bir ayrıştırıcı, bunu doğrulamaktadır. giriş dili dilin sözdizimi kurallarıyla eşleşir ve (çoğunlukla) girdinin anlamsal anlamda mantıklı gelip gelmediğine bakar. Ayrıştırıcılar genellikle kurallar ve eylemler biçiminde uygulanır, kuralları dönüştürmek için yacc veya bison gibi araçları kullanırlar ve eylemleri genel amaçlı bir programlama diline dönüştürür. Ayrıştırıcı çıktısı, programın yapısını, programın donanımdan bağımsız bir ara dil gösterimini ya da her ikisinin bir kombinasyonunu temsil eden bir veri yapısı olabilir.</li><li>Optimize Edici - Son programdaki talimat sayısını, son programın gerektirdiği bellek miktarını, son programın genel hızını veya bunların bir kombinasyonunu azaltmanın yollarını bulmak için ayrıştırıcı çıktısını inceler. Kod boyutu ve kod hızı arasında genellikle bir zaafiyet vardır ve bu bazen kullanıcı tarafından konfigüre edilebilir. Bir eniyileyici CPU hedefinden bağımsız seviyede (ayrıştırıcı çıktısı, nihai hedef CPU hakkında bilgi sahibi olmadan), CPU'ya özgü komut düzeyinde (hedef mimarinin derin bilgisi gerektirir) veya bazıları ikisinin birleşimi. Bazı uygulamalarda, optimizasyon için birden fazla aşama vardır. Modern iyileştiriciler tarafından gerçekleştirilen analiz, talimatlar ve veriler için önbellek hitlerinin en üst düzeye çıkarılması gibi konularda çok sofistike çalışıyor </li><li>Kod üreteci - Ayrıştırıcı ve iyileştirici tarafından sağlanan bilgileri kullanarak, nihai programın gerçek makine talimatlarını çıkartır. (Bazı durumlarda, iyileştirici ve kod üretecinin özellikleri bir araya getirilir.) Kod üreteci, hedef CPU'nun yönerge seti hakkında yakından bilgi sahibidir ve montaj dili kaynak kodunu (nesne koduna eklenmelidir) üretebilir veya doğrudan bağlantıya hazır nesne kodu üretirler. </li></ul><p class="ui_qtext_para">Birçok komut satırı aracı ve IDE, derleme sonrasında otomatik olarak bağ oluşturabilse de, bağlayıcı[linker] genellikle derleyiciden ayrı bir araç olarak düşünülür.</p>
