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

This __init__ method will have a signature of (field_a: int, field_b: str) -> None. You can see this by just typing print(inspect.signature(example.__init__))

## Type hinting
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

## Inheritance
Inheritance works as you would expect. You need to wrap the classes in dataclass for the inherited and the base class definitions.
Kalıtım beklediğiniz gibi çalışır. (Miras alınan ve temel) sınıf tanımları için sınıfları -dataclass- veri sınıfına sarmanız gerekir. 

{% highlight python %}
@dataclass
class SimpleBaseObject(object):
    field_0: str

@dataclass
class SimpleDataObject(SimpleBaseObject):
  field_a: str
  field_b: str
{% endhighlight %}

Although, because you can’t declare a non-default field after a default one, you can’t mix default and non-default fields between base and child classes.

[Try it online!](https://tio.run/##K6gsycjPM/7/P60oP1chJbEkMTknsbg4tVghM7cgv6gEIcTF5YBgg0mFgPzMvBIrLgUgqLBSSMvJTywBcyqROVVQjoKtgoGeARdXAZAB1qhhqGeqo2CkZ6rJVVAE4hdo/v8PAA "Python 3 – Try It Online")

