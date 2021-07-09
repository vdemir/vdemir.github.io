---
layout: post
title:  Python Data Classes
description: Python 3’ün yeni tür etiketlerini kullanmanın avantajını da taşıyorlar.
keywords: linux, python
summary: "Python Data Classes"
excerpt: Python 3’ün yeni tür etiketlerini kullanmanın avantajını da taşıyorlar.
categorie: Programlama
tags:   Python Linux Programlama
categories: Programming
permalink: /:categories/:title/
date:   2019-02-18 12:00:00
last_updated: 2019-02-18 12:00:00
comments: false
published: true
lang: tr
redirect_from:
  - /DataClasses/
---
 
  
## Python 3.7 “Data Classes”

![Data Classes](/images/data-class/data-class.jpg "Data Classes"){:height="100%" width="100%"}

Python 3.7'deki yepyeni bir özellik __“Data Classes”__ dır. __“Data Classes”__ , birden fazla özellik barındıran sınıflar için klişe kod üretimini otomatikleştirmenin bir yoludur.

Ayrıca Python 3’ün yeni tür etiketlerini kullanmanın avantajını da taşıyorlar.

__“Data Classes”__  Python 3.7'deki standart kitaplık içindeki  __“dataclasses”__ yeni veri sınıfları modülü ile sağlanır ve ihtiyacınız olacak 2 önemli şey içerir.
 
1. Bir veri sınıfını dekore etmek için __“dataclass decorator”__ süslü fonksiyonları
2. Alanları yapılandırmak için __“field”__ komut yordamı

## Öntanımlı sihirli yordamlar
Varsayılan ayarla,  herhangi bir dataclass  __init__, __repr__, __str__ ve __eq__ komut yordamlarını sizin için uygulayacak.

__init__ yordamı, sınıfta belirtilen aynı tip açıklamalarla anahtar sözcük ifadelerine sahip olacak.

The __eq__ yordamı, tüm dataclass özniteliklerini sırayla karşılaştıracaktır.

Sınıfın üst kısmında gösterilen tüm alanlar ve tip gösterimi gereklidir. 

{% highlight python %}
from dataclasses import dataclass

@dataclass
class SimpleDataObject(object):
  '''
  In this case,
  __init__, __repr__, __eq__,  will all be generated automatically.
  '''
  
  field_a: int
  field_b: str

example = SimpleDataObject(1, 'b')
print(example)  # SimpleDataObject(field_a=1, field_b='b')

example2 = SimpleDataObject(1, 'b')
print(example == example2)  # True
{% endhighlight %}

|SimpleDataObject(field_a=1, field_b='b')
|True

[Try it online!](https://tio.run/##jU7BTsMwDL3nK57EIatUIQG3SpE4cNmJA9wrt/VYUJqUxBPs64tXuu2wC1JiP9vvPXs6yj7Fp3ne5TRiIKE@UClc4McpZbm2jHm@4iXiTTmBX7T72n1yL5u0pKoxgLVW4zZC9r6gp8K11m3ro5e2rRVlnvIf4q9TxrcPAaS/Y3xw5EzCA@ggaSTxvU6O9xdnfTvPYWipgY9yKbsGRbIx/EOn4@Bur3yoYTtbmSmrcLMSK@DulrqucCpZ7d0iPds//tsfzuEsWna95wPP8y8 "Python 3 – Try It Online")


Bu __init__  yordamı 
|(field_a: int, field_b: str) -> None 
şeklinde bir tanımlayıcıya sahip olabilir. Bunu sadece 
|print(inspect.signature(example.__init__)) 
yazarak görebilirsiniz.

## Tip Gösterimi
Quite importantly, the type hints are merely hints. So giving the wrong types doesn’t issue a warning or attempt a conversion.

Because type hinting is required (otherwise the field is ignored), if you don’t have a specific type, use the Any type from the typing module.


{% highlight python %}
from dataclasses import dataclass


@dataclass
class SimpleDataObject(object):
  '''
  In this case,
  __init__, __repr__, __eq__,  will all be generated automatically.
  '''
  
  field_a: int
  field_b: str

example = SimpleDataObject('a', 'b')
print(example)  # Gives SimpleDataObject(field_a='a', field_b='b')
{% endhighlight %}

|SimpleDataObject(field_a='a', field_b='b')

[Try it online!](https://tio.run/##bU9Na8MwDL37VzzYwQ2EXnYLBHYYjJ126A8wSqKuHo6d2drW/vpUyUJ72EDS09O3poucUnyc52NOIwYS6gOVwgV@nFKWe8gY83Qnq8VBiwI/a/St@@BedmmFqjGAtVbta4ScfEFPhWvlzvnoxblavcxT/vX4c0H8@BBAqh3jnSNnEh5AX5JGEt9r5rK/TVY5eg6DowY@yo12DYpkY/hMy3Fo/15pydawna3MlLV1t5VWwANe/Df/89i2ql1bt0XtMmKerw "Python 3 – Try It Online")

## Mutability
The dataclass decorator has a frozen argument, which is False by default. If specified, fields will be “frozen”, ie read-only and if eq is set to True, which it is by default then the __hash__ magic will be implemented and object instances will be hashable so you can use them as dictionary keys or within a set.


{% highlight python %}
from dataclasses import dataclass

@dataclass(frozen=True)
class ImmutableSimpleDataObject(object):
  '''
  In this case,
  __init__, __repr__, __lt__, __eq__, __gt__ will all be generated automatically.
  '''
  
  field_a: int
  field_b: str

example = {ImmutableSimpleDataObject(1, 'b'), ImmutableSimpleDataObject(2, 'c')}
print(example)

# Gives : {ImmutableSimpleDataObject(field_a=1, field_b='b'), ImmutableSimpleDataObject(field_a=2, field_b='c')}

{% endhighlight %}

|{ImmutableSimpleDataObject(field_a=2, field_b='c'), ImmutableSimpleDataObject(field_a=1, field_b='b')}

[Try it online!](https://tio.run/##hVBNS8QwEL3nVwx4SANFcL0VCh4E2ZMHvYdpO7sbSdKaTNVV/O11drdWL66QZL7ey3vJsOddH6@naZP6AB0yth5zpgwuDH3in5ZSN0teCPqdYv2YRjLq2IJ1CCNj4@lBmJ5uBXvfPFHLRX8MplIAWms51xF45zK0mKmU2loXHVtbSpZoSKfMzx16PsWt1PDqvAeU3RBsKVJCpg5w5D4gu1Ym@8tFR9bGke8sVuAiL2VTQeakFL3hwSrU8PG3@6sSdKNNeeaBK4G02nyqIYlMMV9rlLqAO/cif1mdE5gt1iI026v/E/ymrH5RDgam6Qs "Python 3 – Try It Online")

## Customizing the fields
The core type in dataclasses is the Field type, which belongs to a dataclass.

By default, just setting a class attribute will instantiate a Field on your class as shown in previous examples.

If you need to customise the behaviour, you can use the field factory inside the dataclasses module.

The parameters to field() are:

default: If provided, this will be the default value for this field. This is needed because the field call itself replaces the normal position of the default value.
default_factory: A 0-argument callable that will be called when a default value is needed for this field.
init: Included as a parameter to the generated __init__ method.
repr: Included in the string returned by the generated __repr__ method.
compare: Included in the generated equality and comparison methods (__eq__, __gt__, et al.).
hash: Included in the generated __hash__ method.
There is also another argument, metadata which is not in use yet.

Similar to keyword arguments, fields with default values must be declared last.

Demonstrating the default factory argument,


{% highlight python %}
from dataclasses import dataclass, field
import sys


def get_argv():
    return sys.argv[0]


@dataclass
class SimpleDataObject(object):
  field_a: str
  field_b: str = field(default_factory=get_argv)

example = SimpleDataObject(field_a = 'a')
print(example)  # python3.7 dataclass_4.py test, gives: SimpleDataObject(field_a='a', field_b='dataclass_4.py')
{% endhighlight %}

|SimpleDataObject(field_a='a', field_b='.code.tio')

[Try it online!](https://tio.run/##dZBBi4MwEIXv8ysGetCASGELBUHoYe972ONSZNTRdbEmJFNZf72NqW0ppTkkvJfH9yYxk/zq4WOeG6tPWJNQ1ZNz7LA7GW3lYSXYdNzXsPpucgBQc4MtS0G2HWOVAfplWc52WALpYv9sjz54uHMg7PjtOT1/ever/ONKYh2OwAhFBWXoxN5lGSTmVxn7Zjr3UjRUibZTfptCAfA/LWwffSlZyf4qokiBsd0g8ZpXiBs01/9I94@HF7vUTCjsJMG2G9llb7m5pya3efPoGRGpeb4A "Python 3 – Try It Online")

## Post-Init Processing
You can declare a __post_init__ method, which will run after the auto-generated __init__.


{% highlight python %}
from dataclasses import dataclass, field
import sys


def get_argv():
    return sys.argv[0]


@dataclass
class SimpleDataObject(object): 
  field_a: str
  field_b: str = field(default_factory=get_argv)

  def __post_init__(self):
      self.field_b = self.field_b.upper()

example = SimpleDataObject(field_a = 'a')
print(example)  # Now SimpleDataObject(field_a='a', field_b='dataclass_4.py')
{% endhighlight %}

|SimpleDataObject(field_a='a', field_b='.CODE.TIO')

[Try it online!](https://tio.run/##dVDBSsUwELznKxY8NIFHEfRUKHjwrAePIiGv3TwjeU1Itmq/vm5qXhXEHDbM7M7sJHGh1zDdrKtN4QyjITN4kzNmcOcYEv1QB7AO/Sgqn5cshBjRwglJm3R6l6oTwCchzWkqA22hn69fePBu9xFbhSf28XjP7OPxDQeSYbtUB2yybdKmg0xph8cNQv8NJa82sydtzUAhLf0lhhKsKLm0jiGTdpMjrWVGb2tAgALa6sqGv2E7x4hJsgt@mhKR@3@y1nzcakyjRExuIlnnFcAVPISPf1U9aw6XN/XN/jH6to1Lo9b1Cw "Python 3 – Try It Online")

![Data Classes](/images/data-class/scale.jpg "Data Classes"){:height="100%" width="100%"}

## Sınıfların Kalıtımı
|Kalıtım beklediğiniz gibi çalışır. (Temel ve Miras alınan) sınıf tanımları için sınıfları -dataclass- veri sınıfına sarmanız gerekir. 

{% highlight python %}
from dataclasses import dataclass

@dataclass
class SimpleBaseObject(object):
    field_0: str

@dataclass
class SimpleDataObject(SimpleBaseObject):
  field_a: str
  field_b: str

example = SimpleBaseObject({'b','c'})
print(example) # Gives : SimpleBaseObject(field_0={'b', 'c'})
{% endhighlight %}

|SimpleBaseObject(field_0={'b', 'c'})

Varsayılan bir alandan sonra varsayılan olmayan bir alan bildiremeyeceğiniz için, varsayılan ve varsayılan olmayan alanları, temel ve alt sınıflar arasına karıştıramazsınız. 

{% highlight python %}
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float
    z: float = 0.0

p = Point(1.5, 2.5)
print(p)
{% endhighlight %}

|Point(x=1.5, y=2.5, z=0.0)

[Try it online!](https://tio.run/##K6gsycjPM/7/P60oP1chJbEkMTknsbg4tVghM7cgv6gEIcTF5YBgg0mFgPzMvBIrLgUgqLBSSMvJTywBcyqROVVQjoKtgoGeARdXAZAB1qhhqGeqo2CkZ6rJVVAE4hdo/v8PAA "Python 3 – Try It Online")

