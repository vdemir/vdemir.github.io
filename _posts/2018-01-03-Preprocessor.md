---
layout: post
title:  C Programlamada Önişlemci Yönergeleri
date:   2018-01-03 12:52:00
tags:   C Programlama
comments: False
---

{{ page.title }}
================

<p class="meta">3 Ocak 2018 - Türkiye</p>

<!-- Paragraph HTML Starts Here -->
<p class="myParagraph">
C Önişlemci[Preprocessor] derleyicinin[compiler] bir parçası değildir ancak C programlama dilinin gücünü genişletir. Tüm önişlemci yönergeleri bir # simgesi ile başlar.<br/><br/>
Önişlem adımı kaynak kodunun derlenmesinden önce gelir ve gerçek derleme öncesi gereken ön-işlemleri yapmasını derleyiciye bildirir.
</p><a name='more'></a>
<!-- Paragraph HTML Ends Here -->
<!-- Points to remember HTML Starts here -->
<div class="alert alert-info">
<!-- UnOrdered Items Html Starts -->
<strong>Önişlemci Yönergeleri Hakkında Önemli Noktalar</strong>
<ul><em>
  <li>Önişlemci yönergeleri, kaynak kodunun derlenmesinden önce işlenir.</li>
  <li>Tüm önişlemci yönergeleri bir # simgesi ile başlar.</li>
  <li>Önişlemci yönergeleri noktalı virgülle bitmez.</li>
</em></ul>
</div>
<br/>
<div class="alert alert-success">
<strong>Önişlemci Yönerge Türleri</strong>
<ul><em>
<li>Makro Yerleştirme</li>
<li>Şartlı Derleme</li>
<li>Dosya İçeriği</li>
</em></ul>
</div>
Below is the list of Preprocessor Directives
<!-- Striped Table HTML Starts here -->
<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th class="text-center">Directive</th>
         <th class="text-center">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#include</b></td>
         <td class="myStripedTableItems text-left" width="75%">It includes header file inside a C Program.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#define</b></td>
         <td class="myStripedTableItems text-left" width="75%">It is substitution macro. It substitute a constant with an expression.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#if</b></td>
         <td class="myStripedTableItems text-left" width="75%">It include a block of code depending upon the result of conditional expression.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#else</b></td>
         <td class="myStripedTableItems text-left" width="75%">It is complement of #if</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#elif</b></td>
         <td class="myStripedTableItems text-left" width="75%">#else and #if in one statement. It is similar to else if ladder.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#endif</b></td>
         <td class="myStripedTableItems text-left" width="75%">It flags the end of conditional directives like #if, #elif etc.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#undef</b></td>
         <td class="myStripedTableItems text-left" width="75%">Undefines a preprocessor macro.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#ifdef</b></td>
         <td class="myStripedTableItems text-left" width="75%">Returns true If constant is defined earlier using #define.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#ifndef</b></td>
         <td class="myStripedTableItems text-left" width="75%">Returns true If constant is not defined earlier using #define.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#pragma</b></td>
         <td class="myStripedTableItems text-left" width="75%">Issues special commands to the compiler.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>#error</b></td>
         <td class="myStripedTableItems text-left" width="75%">Prints error message on stderr.</td>
      </tr>
   </tbody>
</table>
<!-- Striped Table HTML Ends here -->
<hr/>
<h2 id="myH2">#include Preprocessor Directives</h2>
<!-- Paragraph HTML Starts Here -->
<p class="myParagraph">
#inclide Preprocessor Directives is used to include header file inside C Program. It checks for header file in current directory, If path is not mentioned. To include user defined header file we use double quote instead of using triangular bracket.
</p>
<!-- Paragraph HTML Ends Here -->
<i>For Example</i><br/>
<pre>
#include <string.h>          // Standard Header File
#include "myHeaderFile.h"    // User Defined Header File
</pre>
<!-- Paragraph HTML Starts Here -->
<p class="myParagraph">
First line tells the preprocessor to replace this line with content of string.h header file.<br/>
Second line tells the preprocessor to get myHeaderFile.h from the current directory and add the content of myHeaderFile.h file.
</p>
<!-- Paragraph HTML Ends Here -->
<hr/>
<h2 id="myH2">#define Preprocessor Directives</h2>
<!-- Paragraph HTML Starts Here -->
<p class="myParagraph">
It is simple substitution macro. It substitute all occurrences of the constant and replace them with a expression.
</p>
<!-- Paragraph HTML Ends Here -->
<div class="alert alert-info">
#define identifier value
</div>
<ul>
<li><b>#define</b> : It is preprocessor directive used for text substitution.</li><br/>
<li><b>identifier</b> : It is an identifier used in program which will be replaced by value.</li><br/>
<li><b>value</b> : This is the value to be substituted for identifier.</li><br/>
</ul>
<i>For Example</i><br/>
<pre>
#define PIE 3.141
#define ZERO 0
</pre>
<hr/>
<strong>C Program to show use of #define Preprocessor Directives</strong>
<!-- SyntaxHighllighter HTML Starts here --> 
<pre class="brush: cpp;toolbar: false; gutter: true;">
#include &lt;stdio.h&gt;
#include &lt;conio.h&gt;

#define PI 3.141

int main(){
    int radius;
    float circumference;
    printf(&quot;Enter the radius of circle\n&quot;);
    scanf(&quot;%d&quot;, &amp;radius);
    
    circumference = 2*PI*radius;
    
    printf(&quot;Circumference of Circle = %f&quot;, circumference);
    
    getch();
    return 0;
}
</pre>
<!-- SyntaxHighllighter HTML Ends here --> 
<!-- Program Output Starts -->
<br/>
Output
<pre>
Enter the radius of circle
5
Circumference of Circle = 31.410000
</pre>
<!-- Program Output Ends -->
<h3 id="myH3">#define macro substitution with arguments</h3>
<!-- Paragraph HTML Starts Here -->
<p class="myParagraph">
#define Preprocessing directive can be used to write macro definitions with parameters.
</p>
<!-- Paragraph HTML Ends Here -->
<div class="alert alert-info">
<ul>
    <li>Whenever a macro identifier is encountered, the arguments are substituted by the actual arguments from the c program.</li>
    <li>No data type defined for macro arguments. You can pass any numeric like int, float etc.</li>
    <li>Argument macro is not case sensitive.</li>
</ul>
</div>
<i>For Example</i><br/>
<pre>
#define circumference(r) (2*3.141*(r))
</pre>
<hr/>
<h2 id="myH2small">C Program to show Macro Substitution with Arguments</h2>
<!-- SyntaxHighllighter HTML Starts here --> 
<pre class="brush: cpp;toolbar: false; gutter: true;">
#include &lt;stdio.h&gt;
#include &lt;conio.h&gt;

#define circumference(r) (2*3.141*(r))

int main(){
    int radius;
    float c;
    printf(&quot;Enter the radius of circle\n&quot;);
    scanf(&quot;%d&quot;, &amp;radius);
    
    c = circumference(radius);
    
    printf(&quot;Circumference of Circle = %f&quot;, c);
    
    getch();
    return 0;
}
</pre>
<!-- SyntaxHighllighter HTML Ends here --> 
<!-- Program Output Starts -->
<br/>
Output
<pre>
Enter the radius of circle
5
Circumference of Circle = 31.410000
</pre>
<!-- Program Output Ends -->
<strong>#if, #else and #endif Conditional Compilation Preprocessor Directives</strong>
<!-- Paragraph HTML Starts Here -->
<p class="myParagraph">
The Conditional Compilation Directives allow us to include a block of code based on the result of conditional expression.
</p>
<!-- Paragraph HTML Ends Here -->
<div class="text-left alert alert-info">
<strong><em>
#if&nbsp;Condition_Expression<br/>
&nbsp;&nbsp;&nbsp;&nbsp;statements;<br/>
#else<br/>
&nbsp;&nbsp;&nbsp;&nbsp;statements;<br/>
#endif<br/>
</em></strong>
</div>
It is similar to if else condition but before compilation.<br/>Condition_Expression must be only constant expression.
<h2 id="myH2small">C program to show Conditional Compilation using #if, #else and #endif</h2>
<!-- SyntaxHighllighter HTML Starts here --> 
<pre class="brush: cpp;toolbar: false; gutter: true;">
#include &lt;stdio.h&gt;
#include &lt;conio.h&gt;

#define COUNT 5

void main(){
   #if(COUNT &gt; 1)
       printf(&quot;Enter %d numbers\n&quot;, COUNT);
   #else
       printf(&quot;Enter a number\n&quot;);
   #endif

   getch();
   return 0;
}
</pre>
<!-- SyntaxHighllighter HTML Ends here --> 
<!-- Program Output Starts -->
<br/>
Output
<pre>
Enter 5 numbers
</pre>
<!-- Program Output Ends -->
<hr/>
<h2 id="myH2">Predefined Macros in C Language</h2>
<!-- Paragraph HTML Starts Here -->
<p class="myParagraph">
C Programming language defines a number of macros. Below is the list of some commonly used macros.
</p>
<!-- Paragraph HTML Ends Here -->
<!-- Striped Table HTML Starts here -->
<table class="table table-bordered table-striped">
   <thead>
      <tr>
         <th class="text-center">Macro</th>
         <th class="text-center">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>NULL</b></td>
         <td class="myStripedTableItems text-left" width="75%">Value of a null pointer constant.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>EXIT_SUCCESS</b></td>
         <td class="myStripedTableItems text-left" width="75%">Value for the exit function to return in case of successful completion of program.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>EXIT_FAILURE</b></td>
         <td class="myStripedTableItems text-left" width="75%">Value for the exit function to return in case of program termination due to failure.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>RAND_MAX</b></td>
         <td class="myStripedTableItems text-left" width="75%">Maximum value returned by the rand function.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__FILE__</b></td>
         <td class="myStripedTableItems text-left" width="75%">Contains the current filename as a string.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__LINE__</b></td>
         <td class="myStripedTableItems text-left" width="75%">Contains the current line number as a integer constant.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__DATE__</b></td>
         <td class="myStripedTableItems text-left" width="75%">Contains current date in "MMM DD YYYY" format.</td>
      </tr>
      <tr>
         <td class="myStripedTableItems text-center" width="25%"><b>__TIME__</b></td>
         <td class="myStripedTableItems text-left" width="75%">Contains current time in "HH:MM:SS" format.</td>
      </tr>
   </tbody>
</table>
<!-- Striped Table HTML Ends here -->
<h2 id="myH2small">C Program to print value of Predefined Macros</h2>
<!-- SyntaxHighllighter HTML Starts here --> 
<pre class="brush: cpp;toolbar: false; gutter: true;">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;conio.h&gt;

int main(){
   printf(&quot;NULL : %d\n&quot;, NULL );
   printf(&quot;EXIT_SUCCESS : %d\n&quot;, EXIT_SUCCESS );
   printf(&quot;EXIT_FAILURE : %d\n&quot;, EXIT_FAILURE );
   printf(&quot;RAND_MAX : %d\n&quot;, RAND_MAX );
   printf(&quot;File Name : %s\n&quot;, __FILE__ );
   printf(&quot;DATE : %s\n&quot;, __DATE__ );
   printf(&quot;Line : %d\n&quot;, __LINE__ );

   getch();
   return 0;
}
</pre>
<!-- SyntaxHighllighter HTML Ends here --> 
<!-- Program Output Starts -->
<br/>
Output
<pre>
NULL : 0
EXIT_SUCCESS : 0
EXIT_FAILURE : 1
RAND_MAX : 32767
File Name : PreProcessorMacro.c
DATE : Jan 27 2015
Line : 12
</pre>
<!-- Program Output Ends -->
<br/>
