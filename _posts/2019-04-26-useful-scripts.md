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


## Python
 
*  [AUTOMATE THE BORING STUFFWITH PYTHON](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/pythn/automate-the-boring-stuff-with-python-2015-.pdf)
*  [C Programming](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/pythn/C Programming Absolute Beginner.pdf)
*  [Coding Projects in Python](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/pythn/C Programming Absolute Beginner.pdf)
*  [Learn Python in One Day and Learn It Well](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/pythn/Learn Python in One Day.pdf)
*  [Python Tricks: The Book](https://vdemir.github.io/viewer/web/viewer.html?file=/assets/pythn/Python Tricks: A Buffet of Awesome Python Features.pdf)

*  [python3 isthza](https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/istihza/python3.pdf)
*  [Learning Python Programming with 11 Beginner Tips](https://vdemir.github.io/viewer/web/viewer.html?file=https://vdemir.github.io/assets/pythn/Learning-Tips.pdf)
*  [Modern JavaScript Tutorial](https://javascript.info)
*  [CodingUnit Programming Tutorials](https://www.codingunit.com/)
*  [Hands-On Linux Administration on Azure](https://www.codingunit.com/)


<div class="teaser clearfix"></div>

<script>
function myFunction3() {
    if (document.getElementById('id03').style.display === 'none') {
        document.getElementById('id03').style.display='block';
    } else {
        document.getElementById('id03').style.display='none';
    }
}
</script>

<button  onclick="myFunction3()">Meaning of the word</button> 

<div id="id03" style="display:none">

 {% highlight text  linenos=table %}
 - threat:tehdit, tehlike; tehdit etmek
 - complain: şikayet etmek, yakınmak
 - slander: iftira etmek
 - comprehebd: anlamak, kavramak
 - thaw: karı ve buzu eritmek
 - slip: kayma; ayak kayması; srçmek; ufak hata
 - aspect: görünüş, manzara; yüz, cephe, hat
 - wonder: hayran olmak, şüphe ve meraka düşmek
 - rather than: tercihen
 - significant: manalı, ehemniyetli
 - outcome: netice, sonuç
 - comprehension: anlama, kavramak
 - curriculum: müfredat, öğretim programı
 - encompass: kapsamak, kuşatmak
 - enhance: arttırmak
 - arguably: muhtemelen
 - prominent: öne çıkan
 - altering: değişim
 - as involved as: oldukça meşgul
 - exhaustive: teferruatlı, kapsamlı
 - counterparts: benzerleri, tamamlayıcıları
{% endhighlight %}
</div>

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
 - Australian engineers brought significant innovation to gold and metalliferous mining.
 - The threat of a thunderstorm made it necessary to cancel the picnic.
 - Officials complain that some reporters have prejudged the outcome of the investigation.
 - In such cases, luck plays a part and it might well decide the outcome of the match.
 - An expression could invoke recursive functions or entire subprograms, for example.
 - The numinous quality of the sunset changed a familiar landscape beyond recognition.
 - Both types of curriculum encompass listening comprehension, speaking, reading, writing, and grammar components.
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
 - Avusturalyalı mühendisler altın ve metal zengin madenciliğine önemli yenilikler getirdi.
 - Fırtına tehdidi pikniği iptal etmeyi gerekli kıldı.
 - Yetkililer, bazı gazetecilerin soruşturma sonucuna peşin hüküm verdiğinden şikayet ediyor.
 - Bu gibi durumlarda şans bir rol oynar ve maçın sonucuna iyi karar verebilir.
 - Bir ifade, örneğin özyinelemeli işlevleri veya tüm alt programlarını çağırabilir.
 - Günbatımının akıl almaz kalitesi, tanınmayacak kadar tanıdık bir manzarayı değiştirdi.
 - Her iki tür müfredat da dinleme, anlama, konuşma, okuma, yazma ve gramer bileşenlerini içerir.
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


How to Use Python Lambda Functions
In Python, a Lambda Function refers to a small, anonymous function. We call the functions anonymous because technically it has no name — we don’t define it with the standard def keyword that we normally use in Python. Instead, Lambda Functions are defined as one-liners that execute a single expression.

Although they look different, Lambda Functions behave in the same way as regular functions that are declared using the def keyword. They are executed in a similar way as regular Python functions, with the exception that they strictly execute a single expression.

Lambda functions are mainly used for creating small, single-use functions. You’ll often see them in-place of what might otherwise be a fully defined function, but written as a Lambda to save time and space. From the Python Design and History FAQ:

Unlike lambda forms in other languages, where they add functionality, Python lambdas are only a shorthand notation if you’re too lazy to define a function.

For a concrete description, Lambda functions can be understood through the following 3 points:

A Lambda Function must always execute a single expression
An expression is a Python code run by the lambda function, which may or may not return any value
A lambda function can take any number of input arguments and return any number of output arguments, as long as the function is maintained as a single expression
Basic Lambda Functions in Python
All Python Lambda Functions following the same exact syntax:

lambda arguments: expression
For example, let's say we want to declare a Lambda Function that computes the remainder of a division operation. Of course, we could do this without a function with Python’s % operator, but it’s not very readable when going through the code. It’s easy to miss and not intuitive to catch when reading through for the first time.

When we use a Lambda Function however, we’re able to clean things up for better readability and cleaner code:

compute_remainder = lambda x, y: x % y
Our Lambda Function takes on 2 arguments, x and y, and then computes the remainder of those 2 using Python’s % operator via x % y. To call the function, all we have to do is apply it like any other regular Python function by passing the arguments and saving the return value in a variable.

### Prints out 1
r = compute_remainder(10, 3)
print(r)
Our code using the Lambda Function is simple and contained.

The filter() Function
The filter() function is used to select specific elements from a Python sequence. A Python sequence is a data type that can hold multiple elements such as a list, tuple, set, or string.

The filter function will take two items as an input, an object and a sequence:

filter(object, sequence)
The object will be our Python Lambda Function. Thus, we are filtering the sequence using our Python Lambda function.

Since the Lambda Function we are passing will be performing a filtering operation, we’ll need it to strictly return a single boolean value — True to keep an element and False to filter it out. The filter function will then return another sequence only containing the elements that evaluated to True by the Lambda.

For example, let’s say we have a list of numbers in which we want to filter out all numbers which are less than 50. We can do this with list comprehension:

### Prints out [66, 91, 98, 80, 99]
data = [66, 15, 91, 30, 35, 38, 43, 20, 38, 28, 98, 50, 7, 80, 99]
filtered = [d for d in data if d > 50]
print(filtered)
While list comprehension is definitely Pythonic, it’s not very reader-friendly. Instead, the filter function with a Lambda will look a lot cleaner.

### Prints out [66, 91, 98, 80, 99]
data = [66, 15, 91, 30, 35, 38, 43, 20, 38, 28, 98, 50, 7, 80, 99]
filtered = list(filter(lambda x: (x > 50), data))
print(filtered)
Our filter fits nicely into a one-liner while being more readable than list comprehension and accomplishing the same task.

The map() Function
The map() function is used to apply an operator or expression to every element in a sequence. For example, if your sequence is a list of numbers, you might want to divide each number by 2, which is a great situation to use the map() function.

The map function will take two items as an input, an object and a sequence:

map(object, sequence)
Just like before, the object will be our Python Lambda Function. Thus, we are executing the expression in our Lambda to each element in the sequence.

Since the Lambda Function we are passing will be executing an expression on each list element, our Lambda can return any type of value. The only thing to really keep an eye out for is that your list doesn’t have any elements that would throw an error at your Lambda function. For example, you might have a list that contains both integers and strings, so attempting to divide each element by 2 wouldn’t work.

Let’s use a similar example to the one we used with filter() we had a list of numbers. In this case, we’re going to write code to square each element in the list. Again, we can always do this with list comprehension:

### Prints out [33.0, 7.5, 45.5, 15.0, 17.5, 19.0, 21.5, 10.0, 19.0, ### 14.0, 49.0, 25.0, 3.5, 40.0, 49.5]
data = [66, 15, 91, 30, 35, 38, 43, 20, 38, 28, 98, 50, 7, 80, 99]
mapped = [(x / 2) for x in data]
print(mapped)
While list comprehension is definitely Pythonic, it’s not very reader-friendly. Instead, the map function with a Lambda will look a lot cleaner.

### Prints out [33.0, 7.5, 45.5, 15.0, 17.5, 19.0, 21.5, 10.0, 19.0, ### 14.0, 49.0, 25.0, 3.5, 40.0, 49.5]
data = [66, 15, 91, 30, 35, 38, 43, 20, 38, 28, 98, 50, 7, 80, 99]
mapped = list(map(lambda x: (x / 2), data))
print(mapped)
Our mapping fits nicely into a one-liner while being more readable than list comprehension and accomplishing the same task.

Conclusion
So there you have it! Your practical introduction to Python Lambda Functions.

If you’re hungry for more, not to worry! There’s a whole lot more to learn about the many intricacies of Python. As recommended reading, the Real Python is a great resource with many in-depth tutorials. If you want to learn more about Python in general, Coursera has a Python for Everybody course that’s more application focused.

