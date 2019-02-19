---
layout: post
title:  Python Data Classes
date:   2019-02-18 12:00:00
last_updated: 2019-02-18 12:00:00
keywords: linux, python
summary: "Python Data Classes"
excerpt: This post is about Python.
categorie: Programlama
tags:   Python Linux Programlama
categories: [Python, Programlama]
permalink: /DataClasses/
comments: false
published: true
lang: tr
---
 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- Opsiyonel tema -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
 
  
## A brief tour of Python 3.7 data classes 
Python 3.7'deki yepyeni bir özellik “Data Classes” dır. Veri sınıfları, birden fazla özellik barındıran sınıflar için klişe kod üretimini otomatikleştirmenin bir yoludur.

Ayrıca Python 3’ün yeni tür ipuçlarını kullanmanın avantajını da taşıyorlar.


Dataclasses come in the new dataclasses module within the standard library in Python 3.7 and there are 2 important things you’ll need.

The dataclass decorator, for decorating a data class
The field method, for configuring fields
Default magic methods
In the default setting, any dataclass will implement __init__, __repr__, __str__ and __eq__ for you.

The __init__ method will have keyword-arguments with the same type annotations that are specified on the class.

The __eq__ method will compare all dataclass attributes in order.

All fields are declared at the top of the class and type hinting is required. 

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
    return sys.argv[1]


@dataclass
class SimpleDataObject(object):
  field_a: str
  field_b: str = field(default_factory=get_argv)

example = SimpleDataObject(field_a = 'a')
print(example)  # python3.7 dataclass_4.py test, gives: SimpleDataObject(field_a='a', field_b='test')


{% endhighlight %}

## Post-Init Processing
You can declare a __post_init__ method, which will run after the auto-generated __init__.


{% highlight python %}
from dataclasses import dataclass, field
import sys


def get_argv():
    return sys.argv[1]


@dataclass
class SimpleDataObject(object): 
  field_a: str
  field_b: str = field(default_factory=get_argv)

  def __post_init__(self):
      self.field_b = self.field_b.upper()

example = SimpleDataObject(field_a = 'a')
print(example)  # Now SimpleDataObject(field_a='a', field_b='TEST')
{% endhighlight %}

## Inheritance
Inheritance works as you would expect. You need to wrap the classes in dataclass for the inherited and the base class definitions.


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


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>









