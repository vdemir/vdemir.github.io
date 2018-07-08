---
layout: post
title:  Dinamik Bellek
date:   2018-01-04 14:52:00
tags:   C Programlama Linux GCC
comments: False
---
 
<p class="meta">8 Ocak 2018 - Türkiye</p>

<div id="content">
<p itemprop="articleSection">Suppose you want to put a toy in a box, but you only have an approximate idea of its size. For that, you would require a box whose size is equal to the approximate size of the toy.</p>
<p>We face a similar situation in C also when we want to input a sentence as an array of characters but are not sure about the number of characters in the array.</p>
<p itemprop="articleBody">Now, while declaring the character array, if we specify its size smaller than the size of the input string, then we will get an error because the space in the memory allocated to the array is lesser than the size of the input string. This is the same case as trying to fit a big toy in a smaller box. If we specify its size much larger than the size of the input string, then the array will be allocated a space in the memory which is much larger than the size of the input string, thus unnecessarily consuming more memory even when it is not required. This is like putting a small toy in a large box.</p>
<p>In the above case, we don't have idea about the size of the array until the compile time (when computer compiles the code and the string is input by the user). In such cases, we use <strong>malloc()</strong> function</p>
<h2>malloc</h2><hr>
<p><b>malloc</b> function <strong>allocates memory at runtime</strong>. It takes the size in bytes and allocates that much space in the memory. It means that malloc(50) will allocate 50 byte in the memory. It returns a void pointer and is defined in <strong>stdlib.h</strong>.</p>
<p>Let's understand it with the help of an example.</p>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="c"><div class="highlight"><pre><span></span><span class="cp">#include</span> <span class="cpf">&lt;stdio.h&gt;</span><span class="cp"></span>
<span class="cp">#include</span> <span class="cpf">&lt;stdlib.h&gt;</span><span class="cp"></span>
<span class="cp">#include</span> <span class="cpf">&lt;string.h&gt;</span><span class="cp"></span>

<span class="kt">int</span> <span class="nf">main</span><span class="p">()</span>
<span class="p">{</span>
   <span class="kt">char</span> <span class="n">name</span><span class="p">[</span><span class="mi">20</span><span class="p">];</span>
   <span class="kt">char</span> <span class="o">*</span><span class="n">address</span><span class="p">;</span>

   <span class="n">strcpy</span><span class="p">(</span><span class="n">name</span><span class="p">,</span> <span class="s">"Harry Lee"</span><span class="p">);</span>
   <span class="n">address</span> <span class="o">=</span> <span class="p">(</span><span class="kt">char</span><span class="o">*</span><span class="p">)</span><span class="n">malloc</span><span class="p">(</span> <span class="mi">50</span> <span class="o">*</span> <span class="k">sizeof</span><span class="p">(</span><span class="kt">char</span><span class="p">)</span> <span class="p">);</span>  <span class="cm">/* allocating memory dynamically  */</span>
   <span class="n">strcpy</span><span class="p">(</span> <span class="n">address</span><span class="p">,</span> <span class="s">"Lee Fort, 11-B Sans Street"</span><span class="p">);</span>
   
   <span class="n">printf</span><span class="p">(</span><span class="s">"Name = %s</span><span class="se">\n</span><span class="s">"</span><span class="p">,</span> <span class="n">name</span> <span class="p">);</span>
   <span class="n">printf</span><span class="p">(</span><span class="s">"Address: %s</span><span class="se">\n</span><span class="s">"</span><span class="p">,</span> <span class="n">address</span> <span class="p">);</span>
   <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
</div>
<div class="button_output button_outputone" data-target="#one" data-toggle="collapse">
<span>Output</span>
</div>
</div>
<div class="col-md-12 col-sm-12 col-xs-12 collapse" id="one">
<div class="code_out code_outone well">
				Name = Harry Lee<br/>
Address: Lee Fort, 11-B Sans Street
			</div>
</div>
</div>
<p>In the above example, we assigned and printed the name as we used to do till now. For address, we estimated that the number of characters should be around 50. So, the <strong>size of address</strong> will be <strong>50 * sizeof(char)</strong>.<br/>
<strong>char *address - </strong>Here we declared a pointer to character for address without specifying how much memory is required.<br/>
<strong>address = (char*)malloc( 50 * sizeof(char) ) -</strong> By writing this, we assigned a memory of <strong>'50 * sizeof(char)' bytes</strong> for address. We used <strong>(char*)</strong> to typecast the pointer returned by malloc to character.<br/>
<strong>strcpy( address, "Lee Fort, 11-B Sans Street") -</strong> By writing this, finally we assigned the address.</p>
<div class="well imp_well">
<div class="row">
<div class="col-md-1 col-sm-1 well_one">
<i class="fa fa-code"></i>
</div>
<div class="col-md-11 col-sm-11 well_two">
				By default, malloc returns a pointer of type void but we can typecast it into a pointer of any other form (as we converted it into character type in the above example).
			</div>
</div>
</div>
<div class="well imp_well">
<div class="row">
<div class="col-md-1 col-sm-1 well_one">
<i class="fa fa-code"></i>
</div>
<div class="col-md-11 col-sm-11 well_two" style="padding-top:8px;">
				If the space in memory allocated by malloc is insufficient, then the allocation fails and malloc returns NULL pointer
			</div>
</div>
</div>
<p>Let's see another example</p>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="c"><div class="highlight"><pre><span></span><span class="cp">#include</span> <span class="cpf">&lt;stdio.h&gt;</span><span class="cp"></span>
<span class="cp">#include</span> <span class="cpf">&lt;stdlib.h&gt;</span><span class="cp"></span>
<span class="kt">int</span> <span class="nf">main</span><span class="p">()</span>
<span class="p">{</span>
    <span class="kt">int</span> <span class="n">n</span><span class="p">,</span><span class="n">i</span><span class="p">,</span><span class="o">*</span><span class="n">p</span><span class="p">;</span>
    <span class="n">printf</span><span class="p">(</span><span class="s">"Enter number of elements: "</span><span class="p">);</span>
    <span class="n">scanf</span><span class="p">(</span><span class="s">"%d"</span><span class="p">,</span><span class="o">&amp;</span><span class="n">n</span><span class="p">);</span>
    <span class="n">p</span><span class="o">=</span><span class="p">(</span><span class="kt">int</span><span class="o">*</span><span class="p">)</span><span class="n">malloc</span><span class="p">(</span><span class="n">n</span> <span class="o">*</span> <span class="k">sizeof</span><span class="p">(</span><span class="kt">int</span><span class="p">));</span>  <span class="c1">//memory allocated using malloc</span>
    <span class="k">if</span><span class="p">(</span><span class="n">p</span> <span class="o">==</span> <span class="nb">NULL</span><span class="p">)</span>                     
    <span class="p">{</span>
        <span class="n">printf</span><span class="p">(</span><span class="s">"memory cannot be allocated</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
    <span class="p">}</span>
    <span class="k">else</span>
    <span class="p">{</span>
      <span class="n">printf</span><span class="p">(</span><span class="s">"Enter elements of array:</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
      <span class="k">for</span><span class="p">(</span><span class="n">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="n">i</span><span class="o">&lt;</span><span class="n">n</span><span class="p">;</span><span class="o">++</span><span class="n">i</span><span class="p">)</span>
      <span class="p">{</span>
        <span class="n">scanf</span><span class="p">(</span><span class="s">"%d"</span><span class="p">,</span><span class="o">&amp;*</span><span class="p">(</span><span class="n">p</span><span class="o">+</span><span class="n">i</span><span class="p">));</span>
      <span class="p">}</span>
      <span class="n">printf</span><span class="p">(</span><span class="s">"Elements of array are</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
      <span class="k">for</span><span class="p">(</span><span class="n">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="n">i</span><span class="o">&lt;</span><span class="n">n</span><span class="p">;</span><span class="n">i</span><span class="o">++</span><span class="p">)</span>
      <span class="p">{</span>
        <span class="n">printf</span><span class="p">(</span><span class="s">"%d</span><span class="se">\n</span><span class="s">"</span><span class="p">,</span><span class="o">*</span><span class="p">(</span><span class="n">p</span><span class="o">+</span><span class="n">i</span><span class="p">));</span>
      <span class="p">}</span>
    <span class="p">}</span>
    <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
</div>
<div class="button_output button_outputone" data-target="#two" data-toggle="collapse">
<span>Output</span>
</div>
</div>
<div class="col-md-12 col-sm-12 col-xs-12 collapse" id="two">
<div class="code_out code_outone well">
Enter number of elements:<br/>
<span style="color:#ce9d9d">5</span><br/>
Enter elements of array:<br/>
<span style="color:#ce9d9d">1</span><br/>
<span style="color:#ce9d9d">2</span><br/>
<span style="color:#ce9d9d">3</span><br/>
<span style="color:#ce9d9d">4</span><br/>
<span style="color:#ce9d9d">5</span><br/>
Elements of array are<br/>
1<br/>
2<br/>
3<br/>
4<br/>
5
			</div>
</div>
</div>
<p> In this example, firstly, we declared a pointer <strong>p</strong> of type int which contains <strong>n elements</strong>. Thus, p is an integer array containing n elements. So, we assigned a memory of size <strong>n * sizeof(int)</strong> to the array which the pointer 'p' is pointing to. Thus, we now have a memory space allocated to the integer array consisting of 'n' elements. Further, we ask the user to input the values of the elements of the array and display those values.</p>
<h2>calloc</h2><hr>
<p>Now, suppose you want to put more than one toy in a box and you have only an approximate idea of the number of toys and the size of each. For that, you need a box the size of which is equal to the sum of the sizes of all the toys.</p>
<p>In such cases, we use calloc function. Like malloc, calloc also <strong>allocates memory at runtime</strong> and is defined in <strong>stdlib.h</strong>. It takes the number of elements and the size of each element(in bytes), initializes each element to zero and then returns a void pointer to the memory.</p>
<p>Its syntax is</p>
<div style="background-color:#ebebeb;font-size:15px;border:1px solid #d4d4d4;padding-left:8px;padding-top:3px;margin-bottom:10px;margin-top:12px;line-height:25px;font-weight:700;">
<p>
		void *calloc(n, element-size);
	</p>
</div>
<p>Here, <strong>n</strong> is the number of elements and <strong>element-size</strong> is the size of each element.</p>
<p>Let's see the last example of malloc again, but this time with calloc.</p>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="c"><div class="highlight"><pre><span></span><span class="cp">#include</span> <span class="cpf">&lt;stdio.h&gt;</span><span class="cp"></span>
<span class="cp">#include</span> <span class="cpf">&lt;stdlib.h&gt;</span><span class="cp"></span>
<span class="kt">int</span> <span class="nf">main</span><span class="p">()</span>
<span class="p">{</span>
    <span class="kt">int</span> <span class="n">n</span><span class="p">,</span><span class="n">i</span><span class="p">,</span><span class="o">*</span><span class="n">p</span><span class="p">;</span>
    <span class="n">printf</span><span class="p">(</span><span class="s">"Enter number of elements: "</span><span class="p">);</span>
    <span class="n">scanf</span><span class="p">(</span><span class="s">"%d"</span><span class="p">,</span><span class="o">&amp;</span><span class="n">n</span><span class="p">);</span>
    <span class="n">p</span><span class="o">=</span><span class="p">(</span><span class="kt">int</span><span class="o">*</span><span class="p">)</span><span class="n">calloc</span><span class="p">(</span><span class="n">n</span><span class="p">,</span> <span class="k">sizeof</span><span class="p">(</span><span class="kt">int</span><span class="p">));</span>  <span class="c1">//memory allocated using malloc</span>
    <span class="k">if</span><span class="p">(</span><span class="n">p</span> <span class="o">==</span> <span class="nb">NULL</span><span class="p">)</span>                     
    <span class="p">{</span>
        <span class="n">printf</span><span class="p">(</span><span class="s">"memory cannot be allocated</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
    <span class="p">}</span>
    <span class="k">else</span>
    <span class="p">{</span>
      <span class="n">printf</span><span class="p">(</span><span class="s">"Enter elements of array:</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
      <span class="k">for</span><span class="p">(</span><span class="n">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="n">i</span><span class="o">&lt;</span><span class="n">n</span><span class="p">;</span><span class="o">++</span><span class="n">i</span><span class="p">)</span>
      <span class="p">{</span>
        <span class="n">scanf</span><span class="p">(</span><span class="s">"%d"</span><span class="p">,</span><span class="o">&amp;*</span><span class="p">(</span><span class="n">p</span><span class="o">+</span><span class="n">i</span><span class="p">));</span>
      <span class="p">}</span>
      <span class="n">printf</span><span class="p">(</span><span class="s">"Elements of array are</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
      <span class="k">for</span><span class="p">(</span><span class="n">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="n">i</span><span class="o">&lt;</span><span class="n">n</span><span class="p">;</span><span class="n">i</span><span class="o">++</span><span class="p">)</span>
      <span class="p">{</span>
        <span class="n">printf</span><span class="p">(</span><span class="s">"%d</span><span class="se">\n</span><span class="s">"</span><span class="p">,</span><span class="o">*</span><span class="p">(</span><span class="n">p</span><span class="o">+</span><span class="n">i</span><span class="p">));</span>
      <span class="p">}</span>
    <span class="p">}</span>
    <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
</div>
<div class="button_output button_outputone" data-target="#three" data-toggle="collapse">
<span>Output</span>
</div>
</div>
<div class="col-md-12 col-sm-12 col-xs-12 collapse" id="three">
<div class="code_out code_outone well">
				Enter number of elements:<br/>
<span style="color:#ce9d9d">5</span> <br/>
Enter elements of array:<br/>
<span style="color:#ce9d9d">1</span><br/>
<span style="color:#ce9d9d">2</span><br/>
<span style="color:#ce9d9d">3</span><br/>
<span style="color:#ce9d9d">4</span><br/>
<span style="color:#ce9d9d">5</span><br/>
Elements of array are<br/>
1<br/>
2<br/>
3<br/>
4<br/>
5
			</div>
</div>
</div>
<p>So, this is the same as the example of malloc, with a difference in the syntax of calloc. Here we wrote <strong>(int*)calloc(n, sizeof(int))</strong>, where n is the number of elements in the integer array (5 in this case) and sizeof(int) is the size of each of that element. So the total size of the array is <strong>n * sizeof(int)</strong>.</p>
<div class="well imp_well">
<div class="row">
<div class="col-md-1 col-sm-1 well_one">
<i class="fa fa-code"></i>
</div>
<div class="col-md-11 col-sm-11 well_two" style="padding-top:8px;">
				calloc initializes the allocated memory to zero value whereas malloc doesn't.
			</div>
</div>
</div>
<p>To prove it, let's see two examples.</p>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="c"><div class="highlight"><pre><span></span><span class="cp">#include</span> <span class="cpf">&lt;stdio.h&gt;</span><span class="cp"></span>
<span class="cp">#include</span> <span class="cpf">&lt;stdlib.h&gt;</span><span class="cp"></span>
<span class="kt">int</span> <span class="nf">main</span><span class="p">()</span>
<span class="p">{</span>
    <span class="kt">int</span> <span class="n">n</span><span class="p">,</span><span class="n">i</span><span class="p">,</span><span class="o">*</span><span class="n">p</span><span class="p">;</span>
    <span class="n">printf</span><span class="p">(</span><span class="s">"Enter number of elements: "</span><span class="p">);</span>
    <span class="n">scanf</span><span class="p">(</span><span class="s">"%d"</span><span class="p">,</span><span class="o">&amp;</span><span class="n">n</span><span class="p">);</span>
    <span class="n">p</span><span class="o">=</span><span class="p">(</span><span class="kt">int</span><span class="o">*</span><span class="p">)</span><span class="n">calloc</span><span class="p">(</span><span class="n">n</span><span class="p">,</span> <span class="k">sizeof</span><span class="p">(</span><span class="kt">int</span><span class="p">));</span>  
    <span class="k">if</span><span class="p">(</span><span class="n">p</span> <span class="o">==</span> <span class="nb">NULL</span><span class="p">)</span>                     
    <span class="p">{</span>
        <span class="n">printf</span><span class="p">(</span><span class="s">"memory cannot be allocated</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
    <span class="p">}</span>
    <span class="k">else</span><span class="p">{</span>
      <span class="n">printf</span><span class="p">(</span><span class="s">"Elements of array are</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
      <span class="k">for</span><span class="p">(</span><span class="n">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="n">i</span><span class="o">&lt;</span><span class="n">n</span><span class="p">;</span><span class="n">i</span><span class="o">++</span><span class="p">)</span>
      <span class="p">{</span>
        <span class="n">printf</span><span class="p">(</span><span class="s">"%d</span><span class="se">\n</span><span class="s">"</span><span class="p">,</span><span class="o">*</span><span class="p">(</span><span class="n">p</span><span class="o">+</span><span class="n">i</span><span class="p">));</span>
      <span class="p">}</span>
    <span class="p">}</span>
    <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
</div>
<div class="button_output button_outputone" data-target="#four" data-toggle="collapse">
<span>Output</span>
</div>
</div>
<div class="col-md-12 col-sm-12 col-xs-12 collapse" id="four">
<div class="code_out code_outone well">
				Enter number of elements:<br/>
<span style="color:#ce9d9d">5</span> <br/>
Elements of array are<br/>
0<br/>
0<br/>
0<br/>
0<br/>
0
			</div>
</div>
</div>
<p>Here, we specified the number of elements i.e. 5 but did not initialize any. So, calloc initialized each of the elements to 0 and thus the value of each element got printed as 0.</p>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="c"><div class="highlight"><pre><span></span><span class="cp">#include</span> <span class="cpf">&lt;stdio.h&gt;</span><span class="cp"></span>
<span class="cp">#include</span> <span class="cpf">&lt;stdlib.h&gt;</span><span class="cp"></span>
<span class="kt">int</span> <span class="nf">main</span><span class="p">()</span>
<span class="p">{</span>
    <span class="kt">int</span> <span class="n">n</span><span class="p">,</span><span class="n">i</span><span class="p">,</span><span class="o">*</span><span class="n">p</span><span class="p">;</span>
    <span class="n">printf</span><span class="p">(</span><span class="s">"Enter number of elements: "</span><span class="p">);</span>
    <span class="n">scanf</span><span class="p">(</span><span class="s">"%d"</span><span class="p">,</span><span class="o">&amp;</span><span class="n">n</span><span class="p">);</span>
    <span class="n">p</span><span class="o">=</span><span class="p">(</span><span class="kt">int</span><span class="o">*</span><span class="p">)</span><span class="n">malloc</span><span class="p">(</span><span class="n">n</span><span class="p">,</span> <span class="k">sizeof</span><span class="p">(</span><span class="kt">int</span><span class="p">));</span>  
    <span class="k">if</span><span class="p">(</span><span class="n">p</span> <span class="o">==</span> <span class="nb">NULL</span><span class="p">)</span>                     
    <span class="p">{</span>
        <span class="n">printf</span><span class="p">(</span><span class="s">"memory cannot be allocated</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
    <span class="p">}</span>
    <span class="k">else</span>
    <span class="p">{</span>
      <span class="n">printf</span><span class="p">(</span><span class="s">"Elements of array are</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
      <span class="k">for</span><span class="p">(</span><span class="n">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="n">i</span><span class="o">&lt;</span><span class="n">n</span><span class="p">;</span><span class="n">i</span><span class="o">++</span><span class="p">)</span>
      <span class="p">{</span>
        <span class="n">printf</span><span class="p">(</span><span class="s">"%d</span><span class="se">\n</span><span class="s">"</span><span class="p">,</span><span class="o">*</span><span class="p">(</span><span class="n">p</span><span class="o">+</span><span class="n">i</span><span class="p">));</span>
      <span class="p">}</span>
    <span class="p">}</span>
    <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
</div>
<div class="button_output button_outputone" data-target="#five" data-toggle="collapse">
<span>Output</span>
</div>
</div>
<div class="col-md-12 col-sm-12 col-xs-12 collapse" id="five">
<div class="code_out code_outone well">
				prog.c: In function 'main':<br/>
prog.c:7:13: error: too many arguments to function 'malloc'<br/>
     p=(int*)malloc(n, sizeof(int));  <br/>
        ^
			</div>
</div>
</div>
<p>Since malloc doesn't initialize the elements to 0, therefore we got an error in this case.</p>
<div class="well imp_well">
<div class="row">
<div class="col-md-1 col-sm-1 well_one">
<i class="fa fa-code"></i>
</div>
<div class="col-md-11 col-sm-11 well_two" style="padding-top:8px;">
				calloc is used to allocate memory to mostly arrays and structures
			</div>
</div>
</div>
<h2>Realloc</h2><hr>
<p>If suppose we allocated more or less memory than required, then we can change the size of the previously allocated memory space using <span>realloc</span>. Its syntax is as follows.</p>
<div style="background-color:#ebebeb;font-size:15px;border:1px solid #d4d4d4;padding-left:8px;padding-top:3px;margin-bottom:10px;margin-top:12px;line-height:25px;font-weight:700;">
<p>
		void *realloc(pointer, new-size);
	</p>
</div>
<p>Let's see an example on realloc.</p>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="c"><div class="highlight"><pre><span></span><span class="cp">#include</span> <span class="cpf">&lt;stdio.h&gt;</span><span class="cp"></span>
<span class="cp">#include</span> <span class="cpf">&lt;stdlib.h&gt;</span><span class="cp"></span>
<span class="cp">#include</span> <span class="cpf">&lt;string.h&gt;</span><span class="cp"></span>
<span class="kt">int</span> <span class="nf">main</span><span class="p">()</span>
<span class="p">{</span>
    <span class="kt">char</span> <span class="o">*</span><span class="n">p1</span><span class="p">;</span>
    <span class="kt">int</span> <span class="n">m1</span><span class="p">,</span> <span class="n">m2</span><span class="p">;</span>
    <span class="n">m1</span> <span class="o">=</span> <span class="mi">10</span><span class="p">;</span>
    <span class="n">m2</span> <span class="o">=</span> <span class="mi">20</span><span class="p">;</span>
    <span class="n">p1</span> <span class="o">=</span> <span class="p">(</span><span class="kt">char</span><span class="o">*</span><span class="p">)</span><span class="n">malloc</span><span class="p">(</span><span class="n">m1</span><span class="p">);</span>
    <span class="n">strcpy</span><span class="p">(</span><span class="n">p1</span><span class="p">,</span> <span class="s">"Codesdope"</span><span class="p">);</span>
    <span class="n">p1</span> <span class="o">=</span> <span class="p">(</span><span class="kt">char</span><span class="o">*</span><span class="p">)</span><span class="n">realloc</span><span class="p">(</span><span class="n">p1</span><span class="p">,</span> <span class="n">m2</span><span class="p">);</span>
    <span class="n">strcat</span><span class="p">(</span><span class="n">p1</span><span class="p">,</span> <span class="s">"Practice"</span><span class="p">);</span>
    <span class="n">printf</span><span class="p">(</span><span class="s">"%s</span><span class="se">\n</span><span class="s">"</span><span class="p">,</span> <span class="n">p1</span><span class="p">);</span>
    <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
</div>
<div class="button_output button_outputone" data-target="#six" data-toggle="collapse">
<span>Output</span>
</div>
</div>
<div class="col-md-12 col-sm-12 col-xs-12 collapse" id="six">
<div class="code_out code_outone well">
				CodesdopePractice
			</div>
</div>
</div>
<p>In the above example, we declared a pointer <strong>p1</strong> which will be used to dynamically allocate a memory space<br/>
<strong>p1 = (char*)malloc(m1) - </strong>By writing this, we assigned a memory space of 10 bytes which the pointer p1 is pointing to. We used (char*) to typecast the pointer returned by malloc to character.<br/>
<strong>strcpy(p1, "Codesdope") - </strong>This assigns a string value "Codesdope" to the memory which the pointer p1 is pointing to. Currently, the memory space is 10 bytes which can easily store the string "Codesdope", but what if now we want that memory space to store the string "CodesdopePractice"? For this, we need to expand the size of our memory space which we can easily do with <strong>realloc</strong>.<br/>
<strong>p1 = (char*)realloc(p1, m2) - </strong>This increases the size of the memory space (whose address is stored in p1) to 20 bytes(since the value of m2 is 20) which can easily store the string "CodesdopePractice".<br/>
<strong>strcat(p1, "Practice") - </strong>This adds the string "Practice" at the end of the string stored in the memory pointed by p1 i.e. "Codesdope". So now, the memory pointed by p1, now stores the string value "CodesdopePractice".</p>
<h2>free</h2><hr>
<p><strong>free</strong> function is used to deallocate or free the memory after the program finishes which was dynamically allocated in the program. It is adviced to free the dynamically allocated memory after the program finishes so that it becomes available for future use.</p>
<div style="background-color:#ebebeb;font-size:15px;border:1px solid #d4d4d4;padding-left:8px;padding-top:3px;margin-bottom:10px;margin-top:12px;line-height:25px;font-weight:700;">
<p>
		void free(pointer);
	</p>
</div>
<p>This was the syntax of free function whose return type is void. Now, let's see an example where we released the dynamically allocated memory at the end of the program using free.</p>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="c"><div class="highlight"><pre><span></span><span class="cp">#include</span> <span class="cpf">&lt;stdio.h&gt;</span><span class="cp"></span>
<span class="cp">#include</span> <span class="cpf">&lt;stdlib.h&gt;</span><span class="cp"></span>
<span class="kt">int</span> <span class="nf">main</span><span class="p">()</span>
<span class="p">{</span>
    <span class="kt">int</span> <span class="n">n</span><span class="p">,</span><span class="n">i</span><span class="p">,</span><span class="o">*</span><span class="n">p</span><span class="p">;</span>
    <span class="n">printf</span><span class="p">(</span><span class="s">"Enter number of elements:</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
    <span class="n">scanf</span><span class="p">(</span><span class="s">"%d"</span><span class="p">,</span><span class="o">&amp;</span><span class="n">n</span><span class="p">);</span>
    <span class="n">p</span><span class="o">=</span><span class="p">(</span><span class="kt">int</span><span class="o">*</span><span class="p">)</span><span class="n">malloc</span><span class="p">(</span><span class="n">n</span> <span class="o">*</span> <span class="k">sizeof</span><span class="p">(</span><span class="kt">int</span><span class="p">));</span>  
    <span class="k">if</span><span class="p">(</span><span class="n">p</span> <span class="o">==</span> <span class="nb">NULL</span><span class="p">)</span>                     
    <span class="p">{</span>
        <span class="n">printf</span><span class="p">(</span><span class="s">"memory cannot be allocated</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
    <span class="p">}</span>
    <span class="k">else</span>
    <span class="p">{</span>
      <span class="n">printf</span><span class="p">(</span><span class="s">"Enter elements of array:</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
      <span class="k">for</span><span class="p">(</span><span class="n">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="n">i</span><span class="o">&lt;</span><span class="n">n</span><span class="p">;</span><span class="o">++</span><span class="n">i</span><span class="p">)</span>
      <span class="p">{</span>
        <span class="n">scanf</span><span class="p">(</span><span class="s">"%d"</span><span class="p">,</span><span class="o">&amp;*</span><span class="p">(</span><span class="n">p</span><span class="o">+</span><span class="n">i</span><span class="p">));</span>
      <span class="p">}</span>
      <span class="n">printf</span><span class="p">(</span><span class="s">"Elements of array are</span><span class="se">\n</span><span class="s">"</span><span class="p">);</span>
      <span class="k">for</span><span class="p">(</span><span class="n">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="n">i</span><span class="o">&lt;</span><span class="n">n</span><span class="p">;</span><span class="n">i</span><span class="o">++</span><span class="p">)</span>
      <span class="p">{</span>
        <span class="n">printf</span><span class="p">(</span><span class="s">"%d</span><span class="se">\n</span><span class="s">"</span><span class="p">,</span><span class="o">*</span><span class="p">(</span><span class="n">p</span><span class="o">+</span><span class="n">i</span><span class="p">));</span>
      <span class="p">}</span>
    <span class="p">}</span>
    <span class="n">free</span><span class="p">(</span><span class="n">p</span><span class="p">);</span>
    <span class="k">return</span> <span class="mi">0</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
</div>
<div class="button_output button_outputone" data-target="#seven" data-toggle="collapse">
<span>Output</span>
</div>
</div>
<div class="col-md-12 col-sm-12 col-xs-12 collapse" id="seven">
<div class="code_out code_outone well">
				Enter number of elements: <br/>
<span style="color:#ce9d9d">5</span><br/>
Enter elements of array:<br/>
<span style="color:#ce9d9d">1</span><br/>
<span style="color:#ce9d9d">2</span><br/>
<span style="color:#ce9d9d">3</span><br/>
<span style="color:#ce9d9d">4</span><br/>
<span style="color:#ce9d9d">5</span><br/>
Elements of array are<br/>
1<br/>
2<br/>
3<br/>
4<br/>
5
			</div>
</div>
</div>
<p>So here by writing <strong>free(p)</strong>, we released the memory which was dynamically allocated using malloc.</p>

