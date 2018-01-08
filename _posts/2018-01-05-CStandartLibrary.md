---
layout: post
title:  stdlib.h Standart C Kitaplığı
date:   2018-01-04 13:52:00
tags:   C Programlama
comments: False
---

{{ page.title }}
================

<p class="meta">7 Ocak 2018 - Türkiye</p>

<p class="myParagraph">
The <strong>stdlib.h üstbilgi dosyası</strong>, dizi dönüştürme, dinamik bellek yönetimi, tamsayı aritmetiği, sistem komutları, rasgele sayı üretme, arama ve sıralama vb. de dahil olmak üzere genel amaçlı faydalı fonksiyonları içerir. 
</p>
<hr/>
<!-- Striped Table HTML Starts here -->
<h2 id="myH2">List of stdlib.h Library Functions</h2>
Click on function names below to see detailed description of functions.
<table class="table table-bordered table-striped">
   <caption><h3 class="text-left myTableHeader"></h3></caption>
   <thead>
      <tr>
         <th class="text-center">Function</th>
         <th class="text-center">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
     <!-- use width="25%" on td for customizing width -->
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/abort-stdlib-c-library-function.html">abort</a></td>
         <td class="myStripedTableItems" width="75%">Abort current program at the point of call.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/abs-stdlib-c-library-function.html">abs</a></td>
         <td class="myStripedTableItems" width="75%">Returns the absolute value of integer.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/atexit-stdlib-c-library-function.html">atexit</a></td>
         <td class="myStripedTableItems" width="75%">Sets a function to be executed on program termination.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/atof-stdlib-c-library-function.html">atof</a></td>
         <td class="myStripedTableItems" width="75%">Converts a string to floating point number(double).</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/atoi-stdlib-c-library-function.html">atoi</a></td>
         <td class="myStripedTableItems" width="75%">Converts a string to an integer number(int).</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/atol-stdlib-c-library-function.html">atol</a></td>
         <td class="myStripedTableItems" width="75%">Converts a string to a long integer number.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/bsearch-stdlib-c-library-function.html">bsearch</a></td>
         <td class="myStripedTableItems" width="75%">Performs binary search in a sorted array.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/calloc-stdlib-c-library-function.html">calloc</a></td>
         <td class="myStripedTableItems" width="75%">Allocates a memory block and initialize it with zero.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/div-stdlib-c-library-function.html">div</a></td>
         <td class="myStripedTableItems" width="75%">Returns quotient and remainder of integer division.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/exit-stdlib-c-library-function.html">exit</a></td>
         <td class="myStripedTableItems" width="75%">Terminates the calling program normally.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/free-stdlib-c-library-function.html">free</a></td>
         <td class="myStripedTableItems" width="75%">Deallocate memory block previously allocated by calloc, malloc, or realloc.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/getenv-stdlib-c-library-function.html">getenv</a></td>
         <td class="myStripedTableItems" width="75%">Searches for the environment variable whose name is passed as argument.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/labs-stdlib-c-library-function.html">labs</a></td>
         <td class="myStripedTableItems" width="75%">Returns the absolute value long integer.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/ldiv-stdlib-c-library-function.html">ldiv</a></td>
         <td class="myStripedTableItems" width="75%">Returns quotient and remainder of long integer division.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/malloc-stdlib-c-library-function.html">malloc</a></td>
         <td class="myStripedTableItems" width="75%">Allocates a memory block and returns a pointer to it.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/qsort-stdlib-c-library-function.html">qsort</a></td>
         <td class="myStripedTableItems" width="75%">Sorts elements of an array.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/rand-stdlib-c-library-function.html">rand</a></td>
         <td class="myStripedTableItems" width="75%">Generate pseudo random number in range of 0 to RAND_MAX.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/realloc-stdlib-c-library-function.html">realloc</a></td>
         <td class="myStripedTableItems" width="75%">Reallocates a memory block and returns a pointer to it.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/srand-stdlib-c-library-function.html">srand</a></td>
         <td class="myStripedTableItems" width="75%">Initialize random number generator used by rand function.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/strtod-stdlib-c-library-function.html">strtod</a></td>
         <td class="myStripedTableItems" width="75%">Converts a string to a double and return remaining string.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/strtol-stdlib-c-library-function.html">strtol</a></td>
         <td class="myStripedTableItems" width="75%">Converts a string to a long integer and return remaining string.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/strtoul-stdlib-c-library-function.html">strtoul</a></td>
         <td class="myStripedTableItems" width="75%">Converts a string to a unsigned long integer and return remaining string.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><a href="http://www.techcrashcourse.com/2015/08/system-stdlib-c-library-function.html">system</a></td>
         <td class="myStripedTableItems" width="75%">Execute system command in host environment.</td>
      </tr>
   </tbody>
</table>
<!-- Striped Table HTML Ends here -->
<hr/>
<!-- Striped Table HTML Starts here -->
<h2 id="myH2">Macros Defined in stdlib.h Library</h2>
<table class="table table-bordered table-striped">
   <caption><h3 class="text-left myTableHeader"></h3></caption>
   <thead>
      <tr>
         <th class="text-center">Macro</th>
         <th class="text-center">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
     <!-- use width="25%" on td for customizing width -->
         <td class="myStripedTableItems text-center" width="25%"><strong>NULL</strong></td>
         <td class="myStripedTableItems" width="75%">Null pointer constant</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>EXIT_FAILURE</strong></td>
         <td class="myStripedTableItems" width="75%">This value is used in exit function to represent abnormal termination of program due to failure</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>EXIT_SUCCESS</strong></td>
         <td class="myStripedTableItems" width="75%">This value is used in exit function to represent success termination of program</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>EXIT_SUCCESS</strong></td>
         <td class="myStripedTableItems" width="75%">This value is used in exit function to represent success termination of program</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>RAND_MAX</strong></td>
         <td class="myStripedTableItems" width="75%">Maximum value returned by rand function</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>MB_CUR_MAX</strong></td>
         <td class="myStripedTableItems" width="75%">Maximum number of bytes in a multi-byte character</td>
      </tr>
   </tbody>
</table>
<!-- Striped Table HTML Ends here -->
<hr/>
<!-- Striped Table HTML Starts here -->
<h2 id="myH2">Data Types in stdlib.h Library</h2>
<table class="table table-bordered table-striped">
   <caption><h3 class="text-left myTableHeader"></h3></caption>
   <thead>
      <tr>
         <th class="text-center">Types</th>
         <th class="text-center">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
     <!-- use width="25%" on td for customizing width -->
         <td class="myStripedTableItems text-center" width="25%"><strong>div_t</strong></td>
         <td class="myStripedTableItems" width="75%">Structure returned by the div function.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>ldiv_t</strong></td>
         <td class="myStripedTableItems" width="75%">Structure returned by the ldiv function.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>size_t</strong></td>
         <td class="myStripedTableItems" width="75%">Unsigned integral type.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><strong>wchar_t</strong></td>
         <td class="myStripedTableItems" width="75%">A typedef of an integral type of the size of a wide character constant.</td>
      </tr>
   </tbody>
</table>
<!-- Striped Table HTML Ends here -->
<div style='clear: both;'></div>
