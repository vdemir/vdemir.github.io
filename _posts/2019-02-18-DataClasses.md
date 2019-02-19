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
 
 
<div class="alert alert-success" role="success">
<p><strong>Python Data Classes</strong></p>
</div>
<br>
 A Brand-new feature in Python 3.7 is “Data Classes”. Data classes are a way of automating the generation of boiler-plate code for classes which store multiple properties.

They also carry the benefit of using Python 3’s new type hinting.


Dataclasses come in the new dataclasses module within the standard library in Python 3.7 and there are 2 important things you’ll need.

The dataclass decorator, for decorating a data class
The field method, for configuring fields
Default magic methods
In the default setting, any dataclass will implement __init__, __repr__, __str__ and __eq__ for you.

The __init__ method will have keyword-arguments with the same type annotations that are specified on the class.

The __eq__ method will compare all dataclass attributes in order.

All fields are declared at the top of the class and type hinting is required. 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>









