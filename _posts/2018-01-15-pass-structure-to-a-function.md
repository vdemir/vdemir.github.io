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


<script>
window.onload = init;
var code = [];
var prettyCode = [];

var iFrameTimeoutIDs = [];

var codeDivs;

function init(){ 
	jQuery("pre code").parent("pre").wrap("<div class='code-wrapper' style='position:relative;'></div>");
	codeDivs = document.querySelectorAll('pre code');
	for(var i=0; i<codeDivs.length; i++) {
		 var sourceCode = codeDivs[i].textContent;
                 var prettySourceCode = codeDivs[i].innerHTML;
		 code.push(sourceCode);
                 prettyCode.push(prettySourceCode);
		 var iframe = document.createElement("iframe");
		 iframe.setAttribute("src", "https://play.programiz.com/c.html?embed=true");
		 iframe.setAttribute("class","playground");
		
		// iframe.style.height = "0";
		 iframe.style.width = "0";
		 iframe.style.border = "none";
		 iframe.setAttribute("scrolling", "no");
		 iframe.setAttribute("onload", "onloadhandler(this," + i + ");");
		 iframe.setAttribute("onerror", "onerrorhandler(this," + i + ");");
		// iframe.style.position = "absolute";
		// iframe.style.top = "0";
		// iframe.style.left = "0";

		 iFrameTimeoutIDs[i] = removeIFrameBecauseOfTimeout(iframe, i);

		 jQuery(codeDivs[i]).parent('pre').after(jQuery(iframe));

		// jQuery(codeDivs[i]).parent('pre').replaceWith(jQuery(iframe));

	}
}


function removeIFrameBecauseOfTimeout(iframe, i) {
	return setTimeout(function(){
		 	jQuery(iframe).remove();
		 }, 3000);
}

function iFrameLoadError(iframe, i){
    jQuery(iframe).hide();
    jQuery(codeDivs[i]).parent('pre').show();
}

var timeoutIDs = [];

function hideIFrameBecauseHandshakeFailed(iframe, i) {
	return setTimeout(function(){
            jQuery(iframe).hide();
            jQuery(codeDivs[i]).parent('pre').show();
        }, 200);
}

function onloadhandler(iframe, i){
	   clearTimeout(iFrameTimeoutIDs[i]);

       var sourceCode = code[i];
       var prettySourceCode = prettyCode[i];
       iframe.contentWindow.postMessage(sourceCode, "*"); 

       jQuery(codeDivs[i]).parent('pre').hide();
       setTimeout(function(){
       	 iframe.style.width = "100%";
       	 iframe.style.minHeight = "500px";
       	jQuery(iframe).show();
       }, 100);
     
       timeoutIDs[i] = hideIFrameBecauseHandshakeFailed(iframe, i);
 }

window.addEventListener('message', function(event) { 
    // IMPORTANT: Check the origin of the data! 
    if (~event.origin.indexOf('https://play.programiz.com')) { 
        // The data has been sent from your site 
        for(var i=0; i < timeoutIDs.length; i++) {
        	clearTimeout(timeoutIDs[i]);
        }
    } else { 
    	// console.log(event);
        // The data hasn't been sent from your site! 
        // Be careful! Do not use it. 
        return; 
    } 
}); 
  </script>

 
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<script type="text/javascript" src="//cdn.programiz.com/sites/tutorial2program/files/js/js_3TykeRWpejhD4-J3vdlaNXdULg9xhOZhbsppK0o2bUs.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>

<script type="text/javascript" src="//cdn.programiz.com/sites/tutorial2program/files/js/js_Xdog1yvbsHUl33-wo9ctRnQMgE_3uBBG15y3yJm_2eY.js"></script>
<script type="text/javascript" src="//cdn.programiz.com/sites/tutorial2program/files/js/js_6mtNsXgWzNZac4UBJK9kpj3XdXTz7NcBgjY5eMSdK94.js"></script>

<script type="text/javascript" src="//cdn.programiz.com/sites/tutorial2program/files/js/js_1idk1Z3VP3hlw_7ergGcv0EkKW5OmiHkq_oP2y09WAM.js"></script>

<pre>
<code>#include
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
