---
layout: post
title:  Hello World
date:   2015-09-30 12:00:00
tags:   Flask Qml Programlama
comments: True
---

{{ page.title }}
================

<p class="meta">30 Eylül 2015 - Türkiye</p>

Programlama dilleri hakkında kısa bilgi vereceğimiz bu yazıda çokça örnek verilen ```Hello World``` programlarını yazacağız.

İlk örnek vereceğimiz yapı bir web uygulama çatısı olan flask ki python temellidir. 
Flask, Django dan daha Pythonic olduğu düşünülür çünkü flask ile yazılan web uygulama kodu çoğu durumda daha açıktır. Bir acemi olarak Flask ile kodlamaya başlamak kolaydır çünkü basit bit uygulama yazıp çalıştırmak için çok az miktarda aslı bozulmaksızın yeni uygulamalarda kullanılabilen metni vardır. [Örnek](http://www.fullstackpython.com/flask.html) olarak Flask ile yazılmış bir web uygulaması örneği ```Hello World```.


```
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()
```

***Snapshots***

![_config.yml]({{ site.baseurl }}/images/snapshot12.bmp)

*** Distributed ***

Pisi Linux dağıtımının kararlı sürümleri:

| Sürüm                  |- Çıkış Tarihi |- İndirme Bağlantısı |
|------------------------|---------------|---------------------|
| Pisi Linux 1.0         |- 14.08.2014   |- [Pisi Linux 1.0](https://sourceforge.net/projects/pisilinux/files/1.0/)|
| Pisi Linux 1.1         |- 04.11.2014   |- [Pisi Linux 1.1](https://sourceforge.net/projects/pisilinux/files/1.1/)|
| Pisi Linux 1.2 KDE     |- 10.07.2015   |- [Pisi Linux 1.2](https://sourceforge.net/projects/pisilinux/files/1.2/)|
| Pisi Linux 2.0Alfa5    |- 30.08.2015   |- [Pisi Linux 2.0Alfa5](https://openload.co/f/vuimrNgPjSE/Pisi-Linux-2.0-Alfa5-KDE5-KaraKedi-x86_64.iso)(Test)
| Pisi Linux 1.2 Xfce    |- 21.09.2015   |- [Pisi Linux 1.2](https://openload.co/f/R6JeYpGW3BM/Pisi-Linux-1.2-XFCE-x86_64.iso)|


---