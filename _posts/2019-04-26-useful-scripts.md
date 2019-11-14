---
layout: post
title: Useful Scripts
date:   2019-09-26 13:52:00
excerpt: "Kullanışlı Betikler"
tags:   Python3 Programlama 
categories: Python
comments: false
published: true
lang: tr
---


*  [python3 isthza](https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/istihza/python3.pdf)
*  [Learning Python Programming with 11 Beginner Tips](https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/pythn/Learning-Tips.pdf)
*  [Modern JavaScript Tutorial](https://javascript.info)
*  [CodingUnit Programming Tutorials](https://www.codingunit.com/)
*  [Hands-On Linux Administration on Azure](https://www.codingunit.com/)


<div class="teaser clearfix"></div>

<script>
function myFunction2() {
    if (document.getElementById('id02').style.display === 'none') {
        document.getElementById('id02').style.display='block';
    } else {
        document.getElementById('id02').style.display='none';
    }
}
</script>

<button  onclick="myFunction2()">Sentences with the word</button> 

<div id="id02" style="display:none">

 {% highlight text  linenos=table %}
- An expression could invoke recursive functions or entire subprograms, for example.
- The numinous quality of the sunset changed a familiar landscape beyond recognition.
{% endhighlight %}
</div>


<script>
function myFunction() {
    if (document.getElementById('id0').style.display === 'none') {
        document.getElementById('id0').style.display='block';
    } else {
        document.getElementById('id0').style.display='none';
    }
}
</script>
<div class="teaser clearfix"></div>

<button  onclick="myFunction()">Bir ifade örneği</button> 

<div id="id0" style="display:none">

 {% highlight text  linenos=table %}
- Bir ifade, örneğin özyinelemeli işlevleri veya tüm alt programlarını çağırabilir.
- Günbatımının akıl almaz kalitesi, tanınmayacak kadar tanıdık bir manzarayı değiştirdi.
{% endhighlight %}
</div>



https://azure.microsoft.com/en-us/resources/whitepapers/

  https://www.johnvansickle.com/ffmpeg/
ffmpeg -f concat -i list.txt -c copy merged.mp4 (list.txt: file 'EIrZ0cvW4AIBT6Z.mp4')


  
sudo find . -name "*.mp3"|sed 's/\.\///;'|sort>List.lst

ffmpeg -framerate 1/10 -i file%d.jpeg -i input.mp3  -c:a copy  -r 30 -s 720x480 -y test.mp4

ffmpeg -i video.mp4 -i audio.mp3 -codec copy -shortest output.mp4

export JEKYLL_VERSION=4.0.0

sudo docker run --rm   --volume="$PWD:/srv/jekyll"   -it jekyll/builder:$JEKYLL_VERSION   jekyll build


git clone https://github.com/xroche/httrack.git --recurse
cd httrack
./configure && make -j8 && make install DESTDIR=/

*wget -q -O - "http://wordpress.org/latest.tar.gz" | tar -xzf - -C /var/www*

soffice --headless --convert-to pdf *.doc
