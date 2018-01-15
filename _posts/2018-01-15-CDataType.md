---
layout: post
title:  C'de Data Tipleri
date:   2018-01-15 13:53:00
tags:   Data Type
comments: False
---

{{ page.title }}
================

<p class="meta">15 Ocak 2018 - Türkiye</p>
## Data Tipleri

C'deki data tipleri, değişkenlerin veya farklı türdeki fonksiyonları bildirilmesi için kullanılan geniş bir sistemi ifade eder. Bir değişkenin depolamada ne kadar yer kapladığını ve saklanan bit düzeninin nasıl yorumlandığını tipi belirler.

C'deki tipler aşağıdaki gibi sınıflandırılabilir:

- Temel tipler

|Bunlar aritmetik tiplerdir ve ayrıca: (a) integer tipler ve (b) kayan noktalı tipler olarak sınıflandırılırlar.

- Numaralandırılmış tipler

|Bunlar tekrar aritmetik türleridir ve program boyunca yalnızca belirli kesikli tamsayı değerlerini atayabilen değişkenleri tanımlamak için kullanılırlar.

- void tipi

|void belirleyici tip, kullanılabilir bir değer olmadığını gösterir.

- Türemiş tipler

|(A) Pointer tipler, (b) Array tipler, (c) Structure tipler, (d) Union tipler ve (e) Fonksiyon tipler.

Array tipleri ve structure tipleri ortaklaşa toplanmış tipler olarak adlandırılır. Bir fonksiyon tipi, fonksiyon dönüş değerinin tipini belirtir. Gelecek bölümlerde başka tiplerin de ele alınacağı aşağıdaki bölümde temel tipleri göreceğiz.

## Integer Tipler

Aşağıdaki tabloda, standart integer tiplerinin ayrıntıları, depolama alanı boyutlarıyla ve değer aralıklarıyla birlikte verilmektedir.

<table style="text-align:center;" class="table table-bordered">
<tr>
<th style="width:23%;text-align:center;">Type</th>
<th style="width:20%;text-align:center;">Storage size</th>
<th style="text-align:center;">Value range</th>
</tr>
<tr>
<td>char</td>
<td>1 byte</td>
<td>-128 to 127 or 0 to 255</td>
</tr>
<tr>
<td>unsigned char</td>
<td>1 byte</td>
<td>0 to 255</td>
</tr>
<tr>
<td>signed char</td>
<td>1 byte</td>
<td>-128 to 127</td>
</tr>
<tr>
<td style="vertical-align:middle;">int</td>
<td style="vertical-align:middle;">2 or 4 bytes</td>
<td>-32,768 to 32,767 or -2,147,483,648 to 2,147,483,647</td>
</tr>
<tr>
<td>unsigned int</td>
<td>2 or 4 bytes</td>
<td>0 to 65,535 or 0 to 4,294,967,295</td>
</tr>
<tr>
<td>short</td>
<td>2 bytes</td>
<td>-32,768 to 32,767</td>
</tr>
<tr>
<td>unsigned short</td>
<td>2 bytes</td>
<td>0 to 65,535</td>
</tr>
<tr>
<td>long</td>
<td>4 bytes</td>
<td>-2,147,483,648 to 2,147,483,647</td>
</tr>
<tr>
<td>unsigned long</td>
<td>4 bytes</td>
<td>0 to 4,294,967,295</td>
</tr>
</table>

Belli bir data tipinin veya değişkenin tam boyutunu elde etmek için ```sizeof``` operatörünü kullanabilirsiniz. ```sizeof(type)``` ifadeleri, nesnenin veya yazının bayt cinsinden depolama boyutu sağlar. Aşağıda verilen, herhangi bir makinedeki ```int``` türünün boyutunu elde etmek için bir örnektir.

~~~c
#include <stdio.h>
#include <limits.h>

int main() {

   printf("Storage size for int : %ld \n", sizeof(int));
   
   return 0;
}
~~~

~~~bash
cc -std=c11 -Wall -g my_app.c -o my_app
Storage size for int : 4
~~~

## Kayan Noktalı Tipler

Aşağıdaki tabloda, standart kayan nokta tiplerinin ayrıntıları, depolama boyutları ve değer aralıkları ve bunların hassaslığı ile birlikte verilmektedir.

<table style="text-align:center;" class="table table-bordered">
<tr>
<th style="text-align:center;">Type</th>
<th style="text-align:center;">Storage size</th>
<th style="text-align:center;">Value range</th>
<th style="text-align:center;">Precision</th>
</tr>
<tr>
<td>float</td>
<td>4 byte</td>
<td>1.2E-38 to 3.4E+38</td>
<td>6 decimal places</td>
</tr>
<tr>
<td>double</td>
<td>8 byte</td>
<td>2.3E-308 to 1.7E+308</td>
<td>15 decimal places</td>
</tr>
<tr>
<td>long double</td>
<td>10 byte</td>
<td>3.4E-4932 to 1.1E+4932</td>
<td>19 decimal places</td>
</tr>
</table>

float.h üst başlık dosyası, yukarda verlen bu değerleri ve programlarınızdaki gerçek sayıların ikili gösterimi hakkında diğer detayları kullanmanıza izin veren makroları tanımlar. Aşağıdaki örnek, bir float tipini ve onun değer aralığı tarafından alınan saklama alanını yazdırır.

~~~c
#include <stdio.h>
#include <float.h>

int main() {
   printf("Storage size for float : %ld\n", sizeof(float));
   printf("Minimum float positive value: %E\n", FLT_MIN );
   printf("Maximum float positive value: %E\n", FLT_MAX );
   printf("Precision value: %d\n", FLT_DIG );
   
   return 0;
}
~~~

Yukarıdaki programı derlediğinizde ve çalıştırdığınızda, Linux'ta aşağıdaki sonucu verir:

~~~bash
Storage size for float : 4
Minimum float positive value: 1.175494E-38
Maximum float positive value: 3.402823E+38
Precision value: 6
~~~


## void tip

void tip, kullanılabilir bir değer olmadığını belirtir. Üç çeşit durumlarda kullanılır.

<table class="table table-bordered">
<tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Types &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>Function returns as void</b></p>
<p>C'de herhangi bir değer döndürmeyen çeşitli işlevler vardır ya da işlevsiz olduklarını söyleyebilirsiniz. Dönüş değeri olmayan bir işlevin dönüş tipi void'dur. For example, <b>void exit (int status);</b></p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>Function arguments as void</b></p>
<p>TC'de herhangi bir parametre kabul etmeyen çeşitli fonksiyonlar vardır. Parametre içermeyen bir fonksiyon boşluğu kabul edebilir. For example, <b>int rand(void);</b></p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>Pointers to void</b></p>
<p>void * tipinde bir işaretçi, bir nesnenin adresini temsil eder, ancak tipini belirtmez. For example, a memory allocation function <b>void *malloc( size_t size );</b> herhangi bir veri türüne aktarılabilen void işaretçisini döndürür.</p>
</td>
</tr>
</table>



* * *
