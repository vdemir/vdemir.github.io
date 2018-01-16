---
layout: post
title:  C'de struct yapıyı bir fonksiyona geçirmek
date:   2018-01-16 13:52:00
tags:   Struct
comments: False
---

{{ page.title }}
================

<p class="meta">16 Ocak 2018 - Türkiye</p>
## C programlamada struct yapıyı bir fonksiyona nasıl geçiririm?

Bu yazıda, ```struct``` yapıları bir fonksiyon işlevine argüman olarak geçirmek için alakalı örnekler bulacaksınız ve bunları programınızda kullanabilirsiniz.

![Alternative text](/images/c-structure-functions.jpg "C'de struct ve fonksiyon işlevi")

C'de, ```struct``` iki yöntemle fonksiyon işlevlere geçirilebilir:

1. Değerle geçme (aktüel değeri argüman olarak geçirme)
2. Referansa göre geçmek (bir argümanın adresini iletmek)

## struct yapıyı değerine göre geçirme

Bir ```struct``` değişkeni, normal bir değişken gibi argüman olarak fonksiyon işlevine geçirilebilir.

```struct``` yapı değerle geçirilirse, fonksiyon işlevi tanımındaki ```struct``` yapı değişkeni üzerinde yapılan değişiklikler orijinal olarak geçirilen ```struct``` yapı değişkeninde yansımaz.

Bir öğrenci ```struct``` yapı oluşturan, ```name``` ile ```roll``` içeren ve bilgileri görüntüleyen C programı.
***

<body>
          <div class="region region-after-body">
    <div id="block-block-129" class="block block-block">

    
  <div class="content">
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKXT7MH"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->  </div>
</div>
  </div>

<div id="programiz-header" class="nav-down clearfix">
<header class="header-wrapper">
<div class="logo-header-wrapper clearfix">

	
<div class="logo">
<a href="/c-programming" title="C Programming">C Programming Logo</a>
</div>

<div class="secondary-nav">
    <ul>
        <li><a href="/cpp-programming" title="C++">C++</a></li>
        <li><a href="/python-programming" title="Python Tutorial">Python</a></li>
        <li><a href="/r-programming" title="R Tutorial">R Tutorial</a></li>
        <li><a href="/java-programming" title="Java Tutorial">Java</a></li>
        <li><a href="/kotlin-programming" title="Kotlin Tutorial">Kotlin</a></li>
    </ul>
</div>

</div>
<div class="main-nav-wrapper clearfix">
<div>
    <nav class="main-nav">
        <h2>MENU</h2>
        <ul>
            <li class="desktop-only"><a class="material-icons" title= "Programiz Home" href="/" >home</a></li>
            <li><a class="c-programming" title="C Tutorial" href="/c-programming">Tutorial</a></li>
            <li><a title="C Examples" class="c-programming" href="/c-programming/examples">Examples</a></li>
            <li class="desktop-only"><a class="c-programming" title="C Library Functions" href="/c-programming/library-function">Library Functions</a></li>
        </ul>
    </nav>
<a href="" class="material-icons search-icon">search</a>
</div>
</div>
</header>
</div>
<div id="search-area" class="clearfix">
<span class="material-icons">close</span>
  <div class="region region-search">
    <div id="block-search-api-page-simplest-programming-tutorials-f" class="block block-search-api-page">

    <h2>Simplest programming tutorials for beginners</h2>
  
  <div class="content">
    <form action="/c-programming/c-structure-function" method="post" id="search-api-page-search-form-simplest-programming-tutorials-f" accept-charset="UTF-8"><div><div class="form-item form-type-textfield form-item-keys-2">
  <label class="element-invisible" for="edit-keys-2">What do you want to learn today? </label>
 <input placeholder="Example: Python list" type="text" id="edit-keys-2" name="keys_2" value="" size="15" maxlength="128" class="form-text" />
</div>
<input type="hidden" name="id" value="2" />
<input type="submit" id="edit-submit-2" name="op" value="Go" class="form-submit" /><input type="hidden" name="form_build_id" value="form-ZKdeuySOxf2fFUt0So-QNFjf4cirLS5KvPxpBQ45Pys" />
<input type="hidden" name="form_id" value="search_api_page_search_form_simplest_programming_tutorials_f" />
</div></form>  </div>
</div>
  </div>
</div>
<div id="main-wrapper-two-column" class="clearfix">
<div class="clearfix">
<div id="programiz-main-content">
<section class="main-content">
<h1>How to pass structure to a function in C programming?</h1>
 
<div class="page-short-description">
In this article, you'll find relevant examples to pass structures as an argument to a function, and use them in your program.</div>
<div class="inside-content">
  <div class="region region-content-inside">
    <div id="block-block-141" class="block block-block">

    
  <div class="content">
    <style>
#programiz_728x90_300x250_320x50_320x100_ATF { display: block; width: 300px; height: 250px; margin: 15px auto; }
@media(min-width: 1200px) { #programiz_728x90_300x250_320x50_320x100_ATF { margin: 15px auto 12px; width: 728px; height: 90px; margin-left: 0; } }
</style>

<!-- programiz_728x90_300x250_320x50_320x100_ATF -->
<div id="programiz_728x90_300x250_320x50_320x100_ATF">
<script data-cfasync="false" type="text/javascript">
    freestar.queue.push(function () { googletag.display('programiz_728x90_300x250_320x50_320x100_ATF'); });
</script>
</div>  </div>
</div>
  </div>
</div>
  
<img src="//cdn.programiz.com/sites/tutorial2program/files/c-structure-functions.jpg" alt="C Programming Structure and Function" title="C Programming Structure and Function" >
<div class="clearfix">


  <div class="region region-content">
    <div id="block-system-main" class="block block-system">

    
  <div class="content">
    <div id="node-151" class="node node-c-tutorial clearfix" about="/c-programming/c-structure-function" typeof="sioc:Item foaf:Document">
<span property="dc:title" content="How to pass structure to a function in C programming?" class="rdf-meta element-hidden"></span><div class="content clearfix">
<div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><p>In C, <a href="/c-programming/c-structures" title="C structures">structure</a> can be passed to <a href="/c-programming/c-functions" title="C Functions">functions</a> by two methods:</p>

<ol>
	<li><a href="/c-programming/c-user-defined-functions">Passing by value (passing actual value as argument)</a></li>
	<li><a href="/c-programming/c-pointer-functions">Passing by reference (passing address of an&nbsp;argument)</a></li>
</ol>

<h3>Passing structure by value</h3>

<p>A structure variable can be passed to the function as an argument as a normal variable.</p>

<p>If structure is passed by value, changes made to the structure variable inside the function definition does not reflect in the originally passed structure variable.</p>

<p><strong>C program to create a structure student, containing name and roll and display the information.</strong></p>

<pre>
<code>#include &lt;stdio.h&gt;
struct student
{
    char name[50];
    int roll;
};

void display(struct student stu);
// function prototype should be below to the structure declaration otherwise compiler shows error

int main()
{
    struct student stud;
    printf(&quot;Enter student&#39;s name: &quot;);
    scanf(&quot;%s&quot;, &amp;stud.name);
    printf(&quot;Enter roll number:&quot;);
    scanf(&quot;%d&quot;, &amp;stud.roll);
    display(stud);   // passing structure variable stud as argument
    return 0;
}
void display(struct student stu){
  printf(&quot;Output\nName: %s&quot;,stu.name);
  printf(&quot;\nRoll: %d&quot;,stu.roll);
}</code>
</pre>

<p><strong>Output</strong></p>

<pre>
<samp>Enter student&#39;s name: Kevin Amla
Enter roll number: 149
Output
Name: Kevin Amla
Roll: 149
</samp></pre>

<h3>Passing structure by reference</h3>

<p><div  id="block-inject-1" class="block-inject block-inject-1"><div id="block-block-142" class="block block-block">

    
  <div class="content">
    <style>
#programiz_300x250_320x100_320x50_incontent { width: 300px; height: 250px; }
</style>
<!-- programiz_300x250_320x100_320x50_incontent -->
<div id="programiz_300x250_320x100_320x50_incontent">
<script data-cfasync="false" type="text/javascript">
    freestar.queue.push(function () { googletag.display('programiz_300x250_320x100_320x50_incontent'); });
</script>
</div>  </div>
</div>
</div><div class="clearfix"></div><p><div  id="adhuro-block-inject-1" class="adhuro-block-inject adhuro-block-inject-1"></div><p>The memory address of a structure variable is passed to function while passing it by reference.</p>

<p>If structure is passed by reference, changes made to the structure variable inside function definition reflects in the originally passed structure variable.</p>

<p><strong>C program to add two distances (feet-inch system) and display the result without the return statement.</strong></p>

<pre>
<code>#include &lt;stdio.h&gt;
struct distance
{
    int feet;
    float inch;
};
void add(struct distance d1,struct distance d2, struct distance *d3); 

int main()
{
    struct distance dist1, dist2, dist3;

    printf(&quot;First distance\n&quot;);
    printf(&quot;Enter feet: &quot;);
    scanf(&quot;%d&quot;, &amp;dist1.feet);
    printf(&quot;Enter inch: &quot;);
    scanf(&quot;%f&quot;, &amp;dist1.inch);

    printf(&quot;Second distance\n&quot;);
    printf(&quot;Enter feet: &quot;);
    scanf(&quot;%d&quot;, &amp;dist2.feet);
    printf(&quot;Enter inch: &quot;);
    scanf(&quot;%f&quot;, &amp;dist2.inch);

    add(dist1, dist2, &amp;dist3); 

    //passing structure variables dist1 and dist2 by value whereas passing structure variable dist3 by reference
    printf(&quot;\nSum of distances = %d\&#39;-%.1f\&quot;&quot;, dist3.feet, dist3.inch);

    return 0;
}
void add(struct distance d1,struct distance d2, struct distance *d3) 
{
     //Adding distances d1 and d2 and storing it in d3
     d3-&gt;feet = d1.feet + d2.feet; 
     d3-&gt;inch = d1.inch + d2.inch;

     if (d3-&gt;inch &gt;= 12) {     /* if inch is greater or equal to 12, converting it to feet. */
         d3-&gt;inch -= 12;
         ++d3-&gt;feet;
    }
}</code>
</pre>

<p><strong>Output</strong></p>

<pre>
<samp>First distance
Enter feet: 12
Enter inch: 6.8
Second distance
Enter feet: 5
Enter inch: 7.5

Sum of distances = 18&#39;-2.3&quot;
</samp></pre>

<p>In this program, structure variables <var>dist1</var> and <var>dist2</var> are passed by value to the <code>add</code> function (because value of <var>dist1</var> and <var>dist2</var> does not need to be displayed in main function).</p>

<p>But, <var>dist3</var> is passed by reference ,i.e, address of <var>dist3</var> <code>(&amp;dist3)</code> is passed as an argument.</p>

<p>Due to this, the structure pointer variable <var>d3</var> inside the <code>add</code> function points to the address of <var>dist3&nbsp;</var>from the calling <code>main</code> function. So, any change made to the <var>d3</var> variable is seen in <var>dist3</var> variable in main function.</p>

<p>As a result, the correct sum is displayed in the output.</p>
</div></div></div></div>
</div>  </div>
</div>
  </div>



<div class="content-bottom"> 
  <div class="region region-content-bottom">
    <div id="block-views-ff0fb66b64e29ce00dbdba9ef9dcaf41" class="block block-views">

    
  <div class="content">
    <div class="view view-c-programming-related-examples view-id-c_programming_related_examples view-display-id-block view-dom-id-cc84d06972227d175022387a79219282">
            <div class="view-header">
      <p>Check out these examples to learn more:</p>    </div>
  
  
  
      <div class="view-content">
      <div class="item-list">    <ul>          <li class="views-row views-row-1 views-row-odd views-row-first">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="/c-programming/examples/complex-number-add">Add Two Complex Numbers by Passing Structure to a Function</a></span>  </div></li>
          <li class="views-row views-row-2 views-row-even views-row-last">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="/c-programming/examples/time-structure">Calculate Difference Between Two Time Periods</a></span>  </div></li>
      </ul></div>    </div>
  
  
  
  
  
  
</div>  </div>
</div>
<div id="block-block-4" class="block block-block">

    
  <div class="content">
    <ul class="custom-pager clearfix">
    <li class="previous">
    <strong>PREVIOUS</strong>
    <br>
    <a href="https://www.programiz.com/c-programming/c-structures-pointers">Structure & Pointers</a></li>
<li class="next">
    <strong>NEXT</strong>
    <br>
    <a href="https://www.programiz.com/c-programming/c-unions">C Union</a></li>
</ul>
  </div>
</div>
<div id="block-block-140" class="block block-block">

    
  <div class="content">
    <hr>
<style>
#programiz_728x90_300x250_320x50_320x100_BTF { width: 300px; height: 250px; }
@media(min-width: 1200px) {  #programiz_728x90_300x250_320x50_320x100_BTF { width: 728px; height: 90px; }}
</style>

<!-- programiz_728x90_300x250_320x50_320x100_BTF -->
<div id="programiz_728x90_300x250_320x50_320x100_BTF">
<script data-cfasync="false" type="text/javascript">
    freestar.queue.push(function () { googletag.display('programiz_728x90_300x250_320x50_320x100_BTF'); });
</script>
</div>  </div>
</div>
<div id="block-block-146" class="block block-block">

    
  <div class="content">
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9007421361448641"
     data-ad-slot="4231379622"
     data-matched-content-ui-type="text"
     data-matched-content-rows-num="3"
     data-matched-content-columns-num="2"
     data-ad-format="autorelaxed"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>  </div>
</div>
  </div>
</div>
</div>
</section>
</div>
<aside id="programiz-left-sidebar">
  <div class="region region-sidebar-left">
    <div id="block-block-1" class="block block-block">

    
  <div class="content">
    <nav class="header-list-menu">
	<h2>C Programming</h2>
	<ul class="topmenu">
		<li>
			<h3>C Introduction</h3>
			<ul class="submenu">
				<li><a href="https://www.programiz.com/c-programming/c-keywords-identifier" target="_top">Keywords &amp; Identifier</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-variables-constants" target="_top">Variables &amp; Constants</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-data-types" target="_top">C Data Types</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-input-output" target="_top">C Input/Output</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-operators" target="_top">C Operators</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-introduction-examples" target="_top">C Introduction Examples</a></li>
			</ul>
		</li>
		<li>
			<h3>C Flow Control</h3>
			<ul class="submenu">
				<li><a href="https://www.programiz.com/c-programming/c-if-else-statement" target="_top">C if...else</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-for-loop" target="_top">C for Loop</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-do-while-loops" target="_top">C do...while Loop</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-break-continue-statement" target="_top">C break and continue</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-switch-case-statement" target="_top">C switch...case</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-goto-statement">C Programming goto</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-decision-making-loops-examples" target="_top">Control Flow Examples</a></li>
			</ul>
		</li>
		<li>
			<h3>C Functions</h3>
			<ul class="submenu">
				<li><a href="https://www.programiz.com/c-programming/c-functions" target="_top">C Programming Functions</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-user-defined-functions" target="_top">C User-defined Functions</a></li>
				<li><a href="https://www.programiz.com/c-programming/types-user-defined-functions">C Function Types</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-recursion" target="_top">C Recursion</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-storage-class" target="_top">C Storage Class</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-functions-examples" target="_top">C Function Examples</a></li>
			</ul>
		</li>
		<li>
			<h3>C Programming Arrays</h3>
			<ul class="submenu">
				<li><a href="https://www.programiz.com/c-programming/c-arrays">C Programming Arrays</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-multi-dimensional-arrays" target="_top">C Multi-dimensional Arrays</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-arrays-functions" target="_top">C Arrays &amp; Function</a></li>
			</ul>
		</li>
		<li>
			<h3>C Programming Pointers</h3>
			<ul class="submenu">
				<li><a href="https://www.programiz.com/c-programming/c-pointers" target="_top">C Programming Pointers</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-pointers-arrays" target="_top">C Pointers &amp; Arrays</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-pointer-functions" target="_top">C Pointers And Functions</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-dynamic-memory-allocation" target="_top">C Memory Allocation</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-pointer-examples" target="_top">Array &amp; Pointer Examples</a></li>
			</ul>
		</li>
		<li>
			<h3>C Programming Strings</h3>
			<ul class="submenu">
				<li><a href="https://www.programiz.com/c-programming/c-strings">C Programming String</a></li>
				<li><a href="https://www.programiz.com/c-programming/string-handling-functions" target="_top">C String Functions</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-string-examples">C String Examples</a></li>
			</ul>
		</li>
		<li>
			<h3>Structure And Union</h3>
			<ul class="submenu">
				<li><a href="https://www.programiz.com/c-programming/c-structures" target="_top">C Structure</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-structures-pointers" target="_top">Structures &amp; Pointers</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-structure-function" target="_top">C Structure &amp; Function</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-unions" target="_top">C Programming Union</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-structure-examples" target="_top">Structure Examples</a></li>
			</ul>
		</li>
		<li>
			<h3>C Programming Files</h3>
			<ul class="submenu">
				<li><a href="https://www.programiz.com/c-programming/c-file-input-output" target="_top">C Files Input/Output</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-file-examples">C Files Examples</a></li>
			</ul>
		</li>
		<li>
			<h3>Additional Topics</h3>
			<ul class="submenu">
				<li><a href="https://www.programiz.com/c-programming/c-enumeration" target="_top">C Enumeration</a></li>
				<li><a href="https://www.programiz.com/c-programming/c-preprocessor-macros" target="_top">C Preprocessors</a></li>
				<li><a href="https://www.programiz.com/c-programming/library-function">C Library Functions</a></li>
				<li><a href="https://www.programiz.com/c-programming/examples">C Programming Examples</a></li>
			</ul>
		</li>
	</ul>
</nav>  </div>
</div>
<div id="block-block-143" class="block block-block">

    
  <div class="content">
    <style>
#programiz_300x600_300x250_left { display: none; }
@media(min-width: 900px) { #programiz_300x600_300x250_left { display: block; width: 300px; height: 250px; }} 
</style>

<!-- programiz_300x600_300x250_left -->
<div id="programiz_300x600_300x250_left">
<script data-cfasync="false" type="text/javascript">
    freestar.queue.push(function () { googletag.display('programiz_300x600_300x250_left'); });
</script>
</div>  </div>
</div>
<div id="block-block-30" class="block block-block">

    
  <div class="content">
    <div class="subscribe ml-subscribe-form ml-subscribe-form-1805321" id="mlb2-1805321">
	<h3>Receive the latest tutorial to improve your programming skills</h3>

	<div class="ml-vertical-align-center">
		<div class="subscribe-form ml-block-success" style="display:none">
			<div class="form-section">
				<p>You have successfully subscribed to our newsletter.</p>
			</div>
		</div>

		<form action="//app.mailerlite.com/webforms/submit/k8c3w0" class="ml-block-form" data-code="k8c3w0" method="POST" target="_blank"><input name="fields[email]" placeholder="Enter Your Email" type="text" value="" /> <input name="ml-submit" type="hidden" value="1" /><button class="primary" type="submit">Join</button><button class="loading" disabled="disabled" style="display: none;" type="submit"><img height="20" src="//static.mailerlite.com/images/rolling.gif" style="width: 20px; height: 20px;" width="20" /></button></form>
		<script>
            function ml_webform_success_1805321() {
                jQuery('.ml-subscribe-form-1805321 .ml-block-success').show();
                jQuery('.ml-subscribe-form-1805321 .ml-block-form').hide();
            };
        </script></div>
</div>
<script type="text/javascript" src="//static.mailerlite.com/js/w/webforms.js?v25"></script>  </div>
</div>
<div id="block-block-144" class="block block-block">

    
  <div class="content">
    <style>
#programiz_300x600_300x250_left_2 { display: none; }
@media(min-width: 900px) { #programiz_300x600_300x250_left_2 { display: block; width: 300px; height: 600px; }} 
</style>
<!-- programiz_300x600_300x250_left_2 -->
<div align="center" id="programiz_300x600_300x250_left_2">
<script data-cfasync="false" type="text/javascript">
    freestar.queue.push(function () { googletag.display('programiz_300x600_300x250_left_2'); });
</script>
</div>  </div>
</div>
  </div>
</aside>
</div>
</div>
<div id="back-to-top"></div>
<footer id="footer">
<div class="clearfix footer-wrapper">
<div class="footer-left">
  <div class="region region-footer-left">
    <div id="block-block-86" class="block block-block">

    
  <div class="content">
    <div class="subscribe ml-subscribe-form ml-subscribe-form-5357625" id="mlb2-5357625">
	<p>Get Latest Updates on Programiz</p>

	<div class="ml-vertical-align-center">
		<div class="subscribe-form ml-block-success" style="display:none">
			<div class="form-section">
				<p>You have successfully subscribed to our newsletter.</p>
			</div>
		</div>

		<form action="//app.mailerlite.com/webforms/submit/z7v3o3" class="ml-block-form" data-code="z7v3o3" method="POST" target="_blank"><input name="fields[email]" placeholder="Enter Your Email" type="text" value="" /> <input name="ml-submit" type="hidden" value="1" /><button class="primary" type="submit">Subscribe</button><button class="loading" disabled="disabled" style="display: none;" type="submit"><img height="20" src="//static.mailerlite.com/images/rolling.gif" style="width: 20px; height: 20px;" width="20" /></button></form>
		<script>
            function ml_webform_success_1805321() {
                jQuery('.ml-subscribe-form-1805321 .ml-block-success').show();
                jQuery('.ml-subscribe-form-1805321 .ml-block-form').hide();
            };
        </script></div>
</div>
<script type="text/javascript" src="//static.mailerlite.com/js/w/webforms.js?v25"></script>  </div>
</div>
  </div>
</div>
<div class="footer-right">
  <div class="region region-footer-right">
    <div id="block-block-87" class="block block-block">

    
  <div class="content">
    <ul>
	<li><a href="/about-us">About</a></li>
	<li><a href="/contact">Contact</a></li>
	<li><a href="/advertise">Advertise</a></li>
</ul>
  </div>
</div>
  </div>
</div>
</div>
<div class="copyright">
Copyright © by Programiz | All rights reserved | <a href="/privacy-policy">Privacy Policy</a>
</div>
</footer>
      <div class="region region-fancy-bar">
    <div id="block-block-128" class="block block-block">

    
  <div class="content">
    <style>
    .fancy-premium {
        background: white;
    }

     .light .fancy-cross, .light .fancy-text, .light .fancy-text strong {
           color: rgb(72, 72, 94);
     }
   
     .light .fancy-cross {
           font-size: 16px;
           font-weight: bold;
     }

    .hongkong .fancy-cross {
        color: #F53545;
        background: none;
    }

    .hongkong .fancy-text, .hongkong .fancy-text strong {
        color: #F53545;
    } 

    .hongkong .fancy-sign-up {
        background: #F53545;
        color: white;
    }

    .fullstackacademy .fancy-text, .springboard .fancy-text, .springboard .fancy-text strong, .devmountain .fancy-text, .devmountain .fancy-text strong,  .mentorit .fancy-text, .mentorit .fancy-text strong, .mentorit .fancy-cross,.barcelona .fancy-text, .barcelona .fancy-text strong, .barcelona .fancy-cross, .india .fancy-text {
        color: rgb(72, 72, 94);
    }
    .springboard .fancy-cross {
        color: rgb(72, 72, 94);
    }

    .springboard .fancy-sign-up {
        background: #F47827;
        color: white;
    }
</style>

<script>

    (function ($) {
        
       function devMountain() {
              var fancyCode = '<div class="devmountain fancy-premium clearfix"><div><span class="fancy-cross">x</span><a href="devmountain.com/programiz?utm_campaign=simplest_tutorials" rel="nofollow" class="fancy-premium-wrapper"><span class="fancy-logo"><img src="//cdn.programiz.com/sites/tutorial2program/files/devmountain_logo.png" alt=""></span><span class="fancy-text">Learn tech skills fast at DevMountain code bootcamps. <strong>A new career in 12 weeks</strong>.</span><span class="fancy-sign-up">Sign Up Now</span></a></div></div>';
            $("footer").append(fancyCode);
       }

       function BarcelonaCodeSchool() {
            var fancyCode = '<div class="barcelona fancy-premium clearfix"><div><span class="fancy-cross">x</span><a href="https://barcelonacodeschool.com?utm_campaign=programiz" rel="nofollow" class="fancy-premium-wrapper"><span class="fancy-logo"><img src="//cdn.programiz.com/sites/tutorial2program/files/barcelona-code-school-logo.png" alt="" style="height:50px"></span><span class="fancy-text">JavaScript Full-Stack Bootcamp. <strong>Learn web development and find a job!</strong>.</span><span class="fancy-sign-up">Learn more</span></a></div></div>';
            $("footer").append(fancyCode);
       }

       



        function dataScienceIntensive() {
            var fancyCode = '<div class="springboard fancy-premium clearfix"><div><span class="fancy-cross">x</span><a href="https://www.springboard.com/workshops/data-science-intensive/?afmc=2w" rel="nofollow" class="fancy-premium-wrapper"><span class="fancy-logo"><img src="//cdn.programiz.com/sites/tutorial2program/files/springboard-logo.png" alt=""></span><span class="fancy-text"><strong>Online Data Science Course.</strong> Prepare for a Data Science career with Python.</span><span class="fancy-sign-up">Sign Up Now</span></a></div></div>';
            $("footer").append(fancyCode);
        }

    
        function dataScienceCareerTrack() {
            var fancyCode = '<div class="springboard fancy-premium clearfix"><div><span class="fancy-cross">x</span><a href="https://www.springboard.com/workshops/data-science-career-track/?afmc=2u" rel="nofollow" class="fancy-premium-wrapper"><span class="fancy-logo"><img src="//cdn.programiz.com/sites/tutorial2program/files/springboard-logo.png" alt=""></span><span class="fancy-text"><strong>Become a Data Scientist.</strong> Get a Data Science Job Guaranteed.</span><span class="fancy-sign-up">Sign Up Now</span></a></div></div>';
            $("footer").append(fancyCode);
        }

        function unitedStatesCode() {
          //   devMountain();
    
            var number = Math.random().toFixed(2)*50;

            if (number < 25) {
                dataScienceIntensive();
            }
            else {
                dataScienceCareerTrack();
            } 
        }

        function hongkongCode() {
            var fancyCode = '<div class="hongkong fancy-premium clearfix"><div><span class="fancy-cross">x</span><a href="http://www.acceleratedhk.com/data?utm_source=programiz&utm_medium=referral&utm_campaign=programiz_referral" rel="nofollow" class="fancy-premium-wrapper"><span class="fancy-logo"><img src="//cdn.programiz.com/sites/tutorial2program/files/accelerate_logo.png" alt=""></span><span class="fancy-text"><strong>Data Scientists are in-demand in Hong Kong.</strong> Start learning with our 6 week Data Science & Machine Learning certificate.</span><span class="fancy-sign-up">Learn More</span></a></div></div>'
                $("footer").append(fancyCode);
        }

       function fullStackAcademyCode() {
            var fancyCode = '<div class="fullstackacademy light fancy-premium clearfix"><div><span class="fancy-cross">x</span><a href="http://prep.fullstackacademy.com/?utm_source=Programiz&utm_medium=Banner&utm_campaign=FSPrepBannerProgramiz" rel="nofollow" class="fancy-premium-wrapper"><span class="fancy-logo"><img src="//cdn.programiz.com/sites/tutorial2program/files/fsacademy-logo.png" alt=""></span><span class="fancy-text"><strong>Free Coding Bootcamp Prep.</strong> Get Into a Top Coding School | Fullstack Academy</span><span class="fancy-sign-up">Learn More</span></a></div></div>'
                $("footer").append(fancyCode);
        }

        function nepalCode() {
             var fancyCode = '<div class="mentorit fancy-premium clearfix"><div><span class="fancy-cross">x</span><a href="http://mentorit.com.np?utm_source=programiz&utm_medium=referral&utm_campaign=programiz_referral" rel="nofollow" class="mentorit-link fancy-premium-wrapper"><span class="fancy-logo"><img src="//cdn.programiz.com/sites/tutorial2program/files/mentor-it-logo.png" alt=""></span><span class="fancy-text"><strong>Learn programming at Mentor IT, Lalitpur!</strong> Get internship and job placement in top Nepalese software companies.</span><span class="fancy-sign-up">Learn More</span></a></div></div>'
                $("footer").append(fancyCode);
        }

        function indiaCode() {
             var fancyCode = '<div class="light fancy-premium clearfix"><div><span class="fancy-cross">x</span><a href="https://www.programiz.com/advertise/india?utm_source=programiz&utm_medium=referral&utm_campaign=programiz_fancybar_india" rel="nofollow" class="fancy-premium-wrapper"><span class="fancy-text"><strong>Grow your business with Programiz!</strong> Reach out to millions of engineering students in India.</span><span class="fancy-sign-up">Learn More</span></a></div></div>'
                $("footer").append(fancyCode);
        }

        function defaultCode() {
            var fancyCode = '\<script async type="text\/javascript" src="\/\/cdn.fancybar.net\/ac\/fancybar.js?zoneid=1502&serve=C6ADVKE&placement=programiz" id="_fancybar_js"\>\<\/script\>'
            $("footer").append(fancyCode);
        }

        
        function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var testmode = getParameterByName('testmode');

        defaultCode();
        
 
        /* $.getJSON('https://freegeoip.net/json/', function (location) {
             if(testmode === "true") {
                  BarcelonaCodeSchool();
                  return;
            }
            var country = location.country_name;
            switch (country) {
                case "Hong Kong":
                    hongkongCode();
                    break;
                default: 
                    console.log(1);
                    defaultCode();
            }
        }); */
    

    }(jQuery));
</script>  </div>
</div>
  </div>
  <script type="text/javascript" src="//cdn.programiz.com/sites/tutorial2program/files/js/js_wMq06n34El81cPtKvKVuAehyOEwepE71d1W2gGcEjDE.js"></script>
<script type="text/javascript" src="//cdn.programiz.com/sites/tutorial2program/files/js/js_ZPMVUwauT3CzfUSIYk-Kc3nwhp80i90VcKjYuHm5owQ.js"></script>
</body>
