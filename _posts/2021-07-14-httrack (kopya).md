---
layout: post
title:  Programmable Functions for GNU Bash
description: Bir Bash fonksiyonu, aslında birçok kez çağrılabilen temel komut grubudur.
date:   2021-07-14 12:00:00
last_updated: 2021-07-14 18:57:00
tags:   Linux
categories: Linux
permalink: /:categories/:title/
comments: false
published: true
lang: tr
---

Bir Bash fonksiyonu, aslında birçok kez çağrılabilen temel komut grubudur. Bir fonksiyonun amacı, bash betiklerinizi -bash script de denir- daha okunaklı hale getirmenize yardımcı olmak ve aynı kodu tekrar tekrar yazmaktan kaçınmaktır. Çoğu programlama diliyle karşılaştırıldığında, Bash fonksiyonları biraz kısıtlıdır.

Bu eğitim, Bash fonksiyonlarının temellerini kapsar ve onları kabuk betiklerinizde -shell scrip'te denir- nasıl kullanacağınızı gösterir.

## Bash'i Tanımlamak 


![Bash Functions](/images/bash/Brain.jpg "Bash Functions"){:height="77%" width="77%"}



{% highlight bash %}
function_name () {
  commands
}
{% endhighlight %}


Tek sıralı gösterim:


{% highlight bash %}
function_name () { commands; }
{% endhighlight %}


***
### **İndirmeler**

***

İndirmeyi başlatmak için aşağıdan bir bağlantı seçin. 

| Sürüm        | Çıkış Tarihi | İndirme Bağlantısı                                                               |
|--------------|--------------|----------------------------------------------------------------------------------|
| 5.1 | 2020-12-06   | [Bash](http://git.savannah.gnu.org/cgit/bash.git/snapshot/bash-5.1.tar.gz)   |

***

### **Kuruluma Hazırlık**

***
{% highlight bash %}
sudo pisi it -c system.devel

Aşağıdaki paket(ler) zaten kurulu ve yeniden kurulmayacak:
binutils          g++            gcc         glibc-devel  
linux-headers  
nano
openssl-11-devel  openssl-devel  zlib-devel

Aşağıdaki paketler kurulacak:
abireport                    autoconf          automake        
bash-completion-devel        bison             catbox          
cmake                        dbus-devel        diffstat        
diffutils                    expat-devel       fakeroot        
file-devel                   flex              flex-devel      
gfortran                     glib2-devel       gmp-devel       
gobject-introspection-devel  intltool          libarchive-bin  
libffi-devel                 libgcrypt-devel   libgfortran     
libgpg-error-devel           libgudev-devel    libpcre-devel   
libtool-devel                libxml2-devel     m4              
make                         meson             mpc-devel       
mpfr-devel                   nasm              ncurses-devel   
ninja                        pam-devel         patch           
pkg-config                   polkit-devel      python-configobj
python-devel                 pyyaml            quilt           
readline-devel               ruamel_yaml       systemd-devel   
texinfo                      util-linux-devel  ypkg            
{% endhighlight %}

 
