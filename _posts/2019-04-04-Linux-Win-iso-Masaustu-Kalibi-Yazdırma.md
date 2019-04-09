---
layout: post
title:  Linux ile Win10 iso Kalıbı Yazdırmak
date:   2019-04-04 12:00:00
tags:   Linux
categories: [Linux]
comments: false
published: true
lang: tr
---

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- Opsiyonel tema -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">


BIOS önyüklemesinde GPT için ilk bölüm 8MB biçimlendirilmemiş ve 'bios_grub' bayrak setine ihtiyacınız var.


### İndirmeler

İndirmeyi başlatmak için aşağıdan bir bağlantı seçin. 


| Sürüm                  |  Çıkış Tarihi |  İndirme Bağlantısı |
|------------------------|---------------|---------------------|
| windows10ISO         |  24.10.2018   |  [windows10ISO](https://www.microsoft.com/TR-TR/software-download/windows10ISO)|




### Win10 iso listesi

<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="{{ site.baseurl }}/assets/usbwriter/woeusb.png" alt="programs" class="resize" />
  <p><small>Win10 &bull; DeskTop.</small></p>
</div>



### Woeusb'yi Oluştur Ve Yükle

Gerçek bir Windows DVD veya görüntüden bir Windows USB stick yükleyici oluşturmak için bir Linux programı.


| Sürüm                  |  Çıkış Tarihi |  İndirme Bağlantısı |
|------------------------|---------------|---------------------|
| WoeUSB         |  14.10.2018   |  [WoeUSB](https://github.com/slacka/WoeUSB)|




<div class='pull-right alert alert-warning' style="margin: 15px; text-align: center;">
  <img src="https://raw.githubusercontent.com/slacka/WoeUSB/master/dev/woeusbgui-screenshot.png" alt="programs" class="resize" />
  <p><small>WoeUSB &bull; Win10.</small></p>
</div>

### Genel yöntem

{% highlight bash %}
$ autoreconf --force --install # Most non-Debian derived distros will need this
$ ./configure --prefix=/usr
$ make
$ sudo make install
{% endhighlight %}


Bu paket iki program içerir:

woeusb: varolan bir Windows Yükleme diskinden veya disk görüntüsünden kendi önyüklenebilir Windows yükleme USB depolama aygıtınızı oluşturmanızı sağlayan bir komut satırı yardımcı programı.

<style>
img.resize {
  max-width:100%;
  max-height:100%;
}
</style>
 

<html>
        <title>Table Example</title>
        <style>
            table {
                border-collapse: collapse;
                width: 100%;
            }
            th, td {
                border: 1px solid #ccc;
                padding: 10px;
            }
            table.alt tr:nth-child(even) {
                background-color: #eee;
            }
            table.alt tr:nth-child(odd) {
                background-color: #fff;
            }            
        </style>
 </html> 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<script src="https://unpkg.com/pdfjs-dist@2.0.943/build/pdf.min.js"></script>


<script src="https://unpkg.com/pdfjs-dist@2.0.943/build/pdf.worker.min.js"></script>
 
<script src="http://mozilla.github.io/pdf.js/build/pdf.js"></script>


<body>
<h1>PDF.js previous/Next example</h1>

<div>
<hr/>
	<canvas id="live-canvas"></canvas>
  <button id="prevlive">previous</button>
  <button id="livenext">next</button>
<br/>
	<span>Page: <span id="live_number"></span> / <span id="total_count"></span></span>
</div>
</body>

<script>
var pdfurl = 'http://cdn.mozilla.net/pdfjs/tracemonkey.pdf';
PDFJS.workerSrc = 'http://mozilla.github.io/pdf.js/build/pdf.worker.js';

var livePdf = null,
pdfnumber = 1,
pageRendering = false,
nympsystem = null,
scale = 0.8,
canvas = document.getElementById('live-canvas'),
ctx = canvas.getContext('2d');

function renderPage(number) {
  pageRendering = true;
  livePdf.getPage(number).then(function(page) {
    var viewport = page.getViewport(scale);
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);

    renderTask.promise.then(function() {
      pageRendering = false;
      if (nympsystem !== null) {
        renderPage(nympsystem);
        nympsystem = null;
      }
    });
  });

  document.getElementById('live_number').textContent = pdfnumber;
}

function queueRenderPage(number) {
  if (pageRendering) {
    nympsystem = number;
  } else {
    renderPage(number);
  }
}

function onprevlivePage() {
  if (pdfnumber <= 1) {
    return;
  }
  pdfnumber--;
  queueRenderPage(pdfnumber);
}
document.getElementById('prevlive').addEventListener('click', onprevlivePage);

function livelivenextPage() {
  if (pdfnumber >= livePdf.numberPages) {
    return;
  }
  pdfnumber++;
  queueRenderPage(pdfnumber);
}
document.getElementById('livenext').addEventListener('click', livelivenextPage);

PDFJS.getDocument(pdfurl).then(function(livePdf_) {
  livePdf = livePdf_;
  document.getElementById('total_count').textContent = livePdf.numberPages;

  renderPage(pdfnumber);
});
</script>
<style>
#live-canvas {
  border:1px solid black;
}
</style>





<a href="#" id="live-back-top" title="Back to top">↑</a>


<script>
if ($('#live-back-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#live-back-top').addClass('show');
            } else {
                $('#live-back-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#live-back-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
</script>

<style>
#live-back-top {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 9999;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 30px;
    background: #f5f5f5;
    color: #444;
    cursor: pointer;
    border: 0;
    border-radius: 2px;
    text-decoration: none;
    transition: opacity 0.2s ease-out;
    opacity: 0;
}
#live-back-top:hover {
    background: #e9ebec;
}
#live-back-top.show {
    opacity: 1;
}
#content {
    height: 2000px;
}

</style>








