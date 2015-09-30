---
layout: post
title:  Hello World!
date:   2015-09-30 12:00:00
tags:   Flask QML Programlama Pisi Linux
comments: True
---

{{ page.title }}
================

<p class="meta">30 Eylül 2015 - Türkiye</p>

Programlama dilleri hakkında kısa bilgi vereceğimiz bu yazıda çokça yer verilen örnek programlardan ```Hello World``` yazacağız.

Flask, ilk örnek vereceğimiz python temelli bir web uygulama çatısıdır. 
Django dan daha Pythonic olduğu düşünülür çünkü Flask ile yazılan web uygulamaları çoğu durumda daha açıktır. Flask ile kodlamaya başlamak kolaydır çünkü basit bir uygulama yazıp çalıştırmak için çok az miktarda kalıplaşmış yapı vardır. [Örnek](http://www.fullstackpython.com/flask.html) olarak Flask ile yazılmış bir web uygulaması olan ```Hello World``` programı app.py dosyasına kaydedilir ve ```python app.py``` komutuyla çalıştırılır. Web tarayıcı çubuğuna ```localhost:5000``` yazılarak okunabilir.

```
## app.py

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Merhaba! Pisi Linux tan Selamlar'

if __name__ == '__main__':
    app.run()
```

İkinci olarak tanıtacağımız dil QML , Qt yarı-nesnel Dil, JavaScript sözdizimine benzerlikleri ile bir programlama dilidir. Esneklik ve basitlik ile tasarlanmış modern dil modelini ve sözdizilimini evrensel web teknolojileri ```JavaScript``` ve ```CSS``` den miras almıştır. Özünde yatan Qt kütüphaneleri ile birleştiğinde QML, dokunmatik özellikli UI ve hafif animasyon uygulamaları oluşturmak için üst düzey bir UI teknolojisidir. C ve Python gibi geleneksel dillerden farklıdır, yani, UI öğeleri ve bunların etkileşimini tanımlamak için kullanılır. Bu nedenle, geleneksel karmaşık görsel hareket geçişlerini uygulamak son derece kolaydır. [Örnek](https://qmlbook.github.io/) uygulama bir metin editöründe yazıldıktan sonra ```hello.qml``` olarak kaydedilir ve ```/usr/lib/qt5/bin/qmlscene hello.qml``` yazılarak çalıştırılır.

```
// HelloWorld.qml
​
import QtQuick 2.0
​
Rectangle {
    width: 360
    height: 360
    Text {
        anchors.centerIn: parent
        text: "Merhaba! Qt 5 ten Selamlar"
    }
    MouseArea {
        anchors.fill: parent
        onClicked: {
            Qt.quit();
        }
    }
}
```

***Snapshots***

![_config.yml]({{ site.baseurl }}/images/snapshot13.bmp)

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