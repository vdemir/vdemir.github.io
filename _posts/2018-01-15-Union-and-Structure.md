---
layout: post
title:  C'de Union ve Struct Yapıları
date:   2018-01-16 13:52:00
tags:   Union Struct
comments: False
---

{{ page.title }}
================

 <head>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
  <title>CSS Typed OM Level 1</title>
  <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
  <meta content="WD" name="w3c-status">
  <link href="default.css" rel="stylesheet" type="text/css">
  <meta content="Bikeshed version 214e5510b850ac6c32ab4be02484a8388cfe3eff" name="generator">
  <link href="https://www.w3.org/TR/css-typed-om-1/" rel="canonical">
<style>
/* Put nice boxes around each algorithm. */
[data-algorithm]:not(.heading) {
  padding: .5em;
  border: thin solid #ddd; border-radius: .5em;
  margin: .5em calc(-0.5em - 1px);
}
[data-algorithm]:not(.heading) > :first-child {
  margin-top: 0;
}
[data-algorithm]:not(.heading) > :last-child {
  margin-bottom: 0;
}
[data-algorithm] [data-algorithm] {
    margin: 1em 0;
}
</style>
<style>/* style-md-lists */

            /* This is a weird hack for me not yet following the commonmark spec
               regarding paragraph and lists. */
            [data-md] > :first-child {
                margin-top: 0;
            }
            [data-md] > :last-child {
                margin-bottom: 0;
            }</style>
<style>/* style-selflinks */

            .heading, .issue, .note, .example, li, dt {
                position: relative;
            }
            a.self-link {
                position: absolute;
                top: 0;
                left: calc(-1 * (3.5rem - 26px));
                width: calc(3.5rem - 26px);
                height: 2em;
                text-align: center;
                border: none;
                transition: opacity .2s;
                opacity: .5;
            }
            a.self-link:hover {
                opacity: 1;
            }
            .heading > a.self-link {
                font-size: 83%;
            }
            li > a.self-link {
                left: calc(-1 * (3.5rem - 26px) - 2em);
            }
            dfn > a.self-link {
                top: auto;
                left: auto;
                opacity: 0;
                width: 1.5em;
                height: 1.5em;
                background: gray;
                color: white;
                font-style: normal;
                transition: opacity .2s, background-color .2s, color .2s;
            }
            dfn:hover > a.self-link {
                opacity: 1;
            }
            dfn > a.self-link:hover {
                color: black;
            }

            a.self-link::before            { content: "¶"; }
            .heading > a.self-link::before { content: "§"; }
            dfn > a.self-link::before      { content: "#"; }</style>
<style>/* style-counters */

            body {
                counter-reset: example figure issue;
            }
            .issue {
                counter-increment: issue;
            }
            .issue:not(.no-marker)::before {
                content: "Issue " counter(issue);
            }

            .example {
                counter-increment: example;
            }
            .example:not(.no-marker)::before {
                content: "Example " counter(example);
            }
            .invalid.example:not(.no-marker)::before,
            .illegal.example:not(.no-marker)::before {
                content: "Invalid Example" counter(example);
            }

            figcaption {
                counter-increment: figure;
            }
            figcaption:not(.no-marker)::before {
                content: "Figure " counter(figure) " ";
            }</style>
<style>/* style-autolinks */

            .css.css, .property.property, .descriptor.descriptor {
                color: #005a9c;
                font-size: inherit;
                font-family: inherit;
            }
            .css::before, .property::before, .descriptor::before {
                content: "‘";
            }
            .css::after, .property::after, .descriptor::after {
                content: "’";
            }
            .property, .descriptor {
                /* Don't wrap property and descriptor names */
                white-space: nowrap;
            }
            .type { /* CSS value <type> */
                font-style: italic;
            }
            pre .property::before, pre .property::after {
                content: "";
            }
            [data-link-type="property"]::before,
            [data-link-type="propdesc"]::before,
            [data-link-type="descriptor"]::before,
            [data-link-type="value"]::before,
            [data-link-type="function"]::before,
            [data-link-type="at-rule"]::before,
            [data-link-type="selector"]::before,
            [data-link-type="maybe"]::before {
                content: "‘";
            }
            [data-link-type="property"]::after,
            [data-link-type="propdesc"]::after,
            [data-link-type="descriptor"]::after,
            [data-link-type="value"]::after,
            [data-link-type="function"]::after,
            [data-link-type="at-rule"]::after,
            [data-link-type="selector"]::after,
            [data-link-type="maybe"]::after {
                content: "’";
            }

            [data-link-type].production::before,
            [data-link-type].production::after,
            .prod [data-link-type]::before,
            .prod [data-link-type]::after {
                content: "";
            }

            [data-link-type=element],
            [data-link-type=element-attr] {
                font-family: Menlo, Consolas, "DejaVu Sans Mono", monospace;
                font-size: .9em;
            }
            [data-link-type=element]::before { content: "<" }
            [data-link-type=element]::after  { content: ">" }

            [data-link-type=biblio] {
                white-space: pre;
            }</style>
<style>/* style-dfn-panel */

        .dfn-panel {
            position: absolute;
            z-index: 35;
            height: auto;
            width: -webkit-fit-content;
            width: fit-content;
            max-width: 300px;
            max-height: 500px;
            overflow: auto;
            padding: 0.5em 0.75em;
            font: small Helvetica Neue, sans-serif, Droid Sans Fallback;
            background: #DDDDDD;
            color: black;
            border: outset 0.2em;
        }
        .dfn-panel:not(.on) { display: none; }
        .dfn-panel * { margin: 0; padding: 0; text-indent: 0; }
        .dfn-panel > b { display: block; }
        .dfn-panel a { color: black; }
        .dfn-panel a:not(:hover) { text-decoration: none !important; border-bottom: none !important; }
        .dfn-panel > b + b { margin-top: 0.25em; }
        .dfn-panel ul { padding: 0; }
        .dfn-panel li { list-style: inside; }
        .dfn-panel.activated {
            display: inline-block;
            position: fixed;
            left: .5em;
            bottom: 2em;
            margin: 0 auto;
            max-width: calc(100vw - 1.5em - .4em - .5em);
            max-height: 30vh;
        }

        .dfn-paneled { cursor: pointer; }
        </style>
<style>/* style-syntax-highlighting */
pre.idl.highlight { color: #708090; }
.highlight:not(.idl) { background: hsl(24, 20%, 95%); }
code.highlight { padding: .1em; border-radius: .3em; }
pre.highlight, pre > code.highlight { display: block; padding: 1em; margin: .5em 0; overflow: auto; border-radius: 0; }
.highlight .c { color: #708090 } /* Comment */
.highlight .k { color: #990055 } /* Keyword */
.highlight .l { color: #000000 } /* Literal */
.highlight .n { color: #0077aa } /* Name */
.highlight .o { color: #999999 } /* Operator */
.highlight .p { color: #999999 } /* Punctuation */
.highlight .cm { color: #708090 } /* Comment.Multiline */
.highlight .cp { color: #708090 } /* Comment.Preproc */
.highlight .c1 { color: #708090 } /* Comment.Single */
.highlight .cs { color: #708090 } /* Comment.Special */
.highlight .kc { color: #990055 } /* Keyword.Constant */
.highlight .kd { color: #990055 } /* Keyword.Declaration */
.highlight .kn { color: #990055 } /* Keyword.Namespace */
.highlight .kp { color: #990055 } /* Keyword.Pseudo */
.highlight .kr { color: #990055 } /* Keyword.Reserved */
.highlight .kt { color: #990055 } /* Keyword.Type */
.highlight .ld { color: #000000 } /* Literal.Date */
.highlight .m { color: #000000 } /* Literal.Number */
.highlight .s { color: #a67f59 } /* Literal.String */
.highlight .na { color: #0077aa } /* Name.Attribute */
.highlight .nc { color: #0077aa } /* Name.Class */
.highlight .no { color: #0077aa } /* Name.Constant */
.highlight .nd { color: #0077aa } /* Name.Decorator */
.highlight .ni { color: #0077aa } /* Name.Entity */
.highlight .ne { color: #0077aa } /* Name.Exception */
.highlight .nf { color: #0077aa } /* Name.Function */
.highlight .nl { color: #0077aa } /* Name.Label */
.highlight .nn { color: #0077aa } /* Name.Namespace */
.highlight .py { color: #0077aa } /* Name.Property */
.highlight .nt { color: #669900 } /* Name.Tag */
.highlight .nv { color: #222222 } /* Name.Variable */
.highlight .ow { color: #999999 } /* Operator.Word */
.highlight .mb { color: #000000 } /* Literal.Number.Bin */
.highlight .mf { color: #000000 } /* Literal.Number.Float */
.highlight .mh { color: #000000 } /* Literal.Number.Hex */
.highlight .mi { color: #000000 } /* Literal.Number.Integer */
.highlight .mo { color: #000000 } /* Literal.Number.Oct */
.highlight .sb { color: #a67f59 } /* Literal.String.Backtick */
.highlight .sc { color: #a67f59 } /* Literal.String.Char */
.highlight .sd { color: #a67f59 } /* Literal.String.Doc */
.highlight .s2 { color: #a67f59 } /* Literal.String.Double */
.highlight .se { color: #a67f59 } /* Literal.String.Escape */
.highlight .sh { color: #a67f59 } /* Literal.String.Heredoc */
.highlight .si { color: #a67f59 } /* Literal.String.Interpol */
.highlight .sx { color: #a67f59 } /* Literal.String.Other */
.highlight .sr { color: #a67f59 } /* Literal.String.Regex */
.highlight .s1 { color: #a67f59 } /* Literal.String.Single */
.highlight .ss { color: #a67f59 } /* Literal.String.Symbol */
.highlight .vc { color: #0077aa } /* Name.Variable.Class */
.highlight .vg { color: #0077aa } /* Name.Variable.Global */
.highlight .vi { color: #0077aa } /* Name.Variable.Instance */
.highlight .il { color: #000000 } /* Literal.Number.Integer.Long */
</style>

<link href="/css/base.css" rel="stylesheet" type="text/css">
</head>

<p class="meta">16 Ocak 2018 - Türkiye</p>
## union ve struct arasındaki kullanım farkı
```union``` pek çok açıdan ```struct``` yapıya benzer olsa da, aralarındaki farkı anlamak çok önemlidir.

Birincil fark, bu örnekle gösterilebilir:

~~~c
#include <stdio.h>
union unionJob
{
   //defining a union
   char name[32];
   float salary;
   int workerNo;
} uJob;

struct structJob
{
   char name[32];
   float salary;
   int workerNo;
} sJob;

int main()
{
   printf("size of union = %d", sizeof(uJob));
   printf("\nsize of structure = %d", sizeof(sJob));
   return 0;
}
~~~

## Çıktı
~~~bash
size of union = 32
size of structure = 40
~~~

## struct yapılara union yapıdan daha fazla bellek tahsis edilir

Yukarıdaki örnekte görüldüğü gibi, ```union``` ve ```struct``` yapı arasında bellek ayırmada bir fark vardır.

```struct``` değişkenini depolamak için gereken bellek miktarı, tüm üyelerin bellek boyutunun toplamıdır.

![Alternative text](/images/C-structure-memory-allocation.jpg "struct değişkeni belleği")

Ancak, bir ```union``` değişkenini depolamak için gereken bellek, ```union``` yapının en büyük öğesi için gereken bellektir.


![Alternative text](/images/memory-allocation-union.jpg "union değişkeni belleği")

## Aynı anda yalnızca bir union üyesine erişilebilir

```struct``` durumunda, üyelerinin tümüne her an erişilebilir.

Ancak, ```union``` durumunda, bir kerede yalnızca üyelerinden birine erişilebilir ve diğer tüm üyeler çöp değerleri içerir.

~~~c
#include <stdio.h>
union job
{
   char name[32];
   float salary;
   int workerNo;
} job1;

int main()
{
   printf("Enter name:\n");
   scanf("%s", &job1.name);

   printf("Enter salary: \n");
   scanf("%f", &job1.salary);

   printf("Displaying\nName :%s\n", job1.name);
   printf("Salary: %.1f", job1.salary);

   return 0;
}
~~~

## Çıktı
~~~bash
Enter name 
Hillary
Enter salary
1234.23
Displaying
Name: f%Bary
Salary: 1234.2
~~~
***

Not: İsim için farklı çöp değeri veya ```empty string``` (boş dize) alabilirsiniz.

Başlangıçta programda ```Hillary, job1.name```'de saklanır ve ```job1```'in diğer tüm üyeleri, örneğin ```salary```, ```workerNo``` çöp değerleri içerecektir.

Ancak, kullanıcı ```salary``` değerini girdiğinde; 1234.23, ```job1.salary```'de saklanacak ve diğer üyeler de, örn. ```name, workerNo```, artık çöp değerleri içerecek.

Böylece çıktıda, ```salary``` doğru bir şekilde yazdırılır, ancak ```name``` bazı ```random string``` karakterleri (rastgele dizgeleri) gösterir.

## Union Yapıyı Bir Fonksiyona Geçirme

```Union```, C programlamasındaki foksiyonlara ```struct``` yapılarla benzer şekilde geçirilebilir.

***
