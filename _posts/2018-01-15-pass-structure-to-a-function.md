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
<script type="text/javascript">
<!--//--><![CDATA[//><!--
window.jQuery || document.write("<script src='/sites/all/modules/jquery_update/replace/jquery/1.10/jquery.min.js'>\x3C/script>")
//--><!]]>
</script>
<script type="text/javascript" src="//cdn.programiz.com/sites/tutorial2program/files/js/js_3TykeRWpejhD4-J3vdlaNXdULg9xhOZhbsppK0o2bUs.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
window.jQuery.ui || document.write("<script src='/sites/all/modules/jquery_update/replace/ui/ui/minified/jquery-ui.min.js'>\x3C/script>")
//--><!]]>
</script>
<script type="text/javascript" src="//cdn.programiz.com/sites/tutorial2program/files/js/js_Xdog1yvbsHUl33-wo9ctRnQMgE_3uBBG15y3yJm_2eY.js"></script>
<script type="text/javascript" src="//cdn.programiz.com/sites/tutorial2program/files/js/js_6mtNsXgWzNZac4UBJK9kpj3XdXTz7NcBgjY5eMSdK94.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-36675496-1", {"cookieDomain":"auto"});ga("set", "anonymizeIp", true);ga("send", "pageview");
//--><!]]>
</script>
<script type="text/javascript" src="//cdn.programiz.com/sites/tutorial2program/files/js/js_1idk1Z3VP3hlw_7ergGcv0EkKW5OmiHkq_oP2y09WAM.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","ajaxPageState":{"theme":"c","theme_token":"MwqMThx03ZlKea15yJRNpzZFHAX_lRqcAFK4mtudB80","js":{"sites\/all\/libraries\/prettify\/prettify.js":1,"sites\/all\/modules\/prettify\/prettify.loader.js":1,"\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.10.2\/jquery.min.js":1,"0":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"\/\/ajax.googleapis.com\/ajax\/libs\/jqueryui\/1.10.2\/jquery-ui.min.js":1,"1":1,"sites\/all\/modules\/codefilter\/codefilter.js":1,"sites\/all\/modules\/search_autocomplete\/js\/jquery.autocomplete.js":1,"sites\/all\/modules\/google_analytics\/googleanalytics.js":1,"2":1,"sites\/all\/themes\/Ultimate\/sidr-package-1.2.1\/jquery.sidr.min.js":1,"sites\/all\/themes\/Ultimate\/js\/plugins.js":1,"sites\/all\/themes\/Ultimate\/js\/main.js":1},"css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.messages.css":1,"modules\/system\/system.theme.css":1,"misc\/ui\/jquery.ui.core.css":1,"misc\/ui\/jquery.ui.theme.css":1,"misc\/ui\/jquery.ui.menu.css":1,"misc\/ui\/jquery.ui.autocomplete.css":1,"sites\/all\/modules\/codefilter\/codefilter.css":1,"modules\/field\/theme\/field.css":1,"modules\/node\/node.css":1,"sites\/all\/modules\/quiz\/quiz.css":1,"modules\/user\/user.css":1,"sites\/all\/modules\/views\/css\/views.css":1,"sites\/all\/modules\/ctools\/css\/ctools.css":1,"sites\/all\/modules\/search_autocomplete\/css\/themes\/basic-blue.css":1,"sites\/all\/themes\/Ultimate\/css\/normalize.css":1,"sites\/all\/themes\/Ultimate\/css\/main.css":1,"sites\/all\/themes\/Ultimate\/sidr-package-1.2.1\/stylesheets\/jquery.sidr.dark.css":1,"sites\/all\/themes\/c\/c.css":1,"sites\/all\/modules\/prettify\/styles\/stackoverflow.css":1}},"prettify":{"linenums":false,"match":"","nocode":"nocode","custom":[],"markup":{"precode":true,"code":false,"pre":false}},"search_autocomplete":{"form6":{"selector":"#search-api-page-search-form[action=\u0022\/searchh\u0022] #edit-keys-2","minChars":"3","max_sug":"10","type":"internal","datas":"https:\/\/www.programiz.com\/search_autocomplete\/autocomplete\/6\/","fid":"6","theme":"basic-blue","auto_submit":"1","auto_redirect":"1"},"form7":{"selector":"#search-api-page-search-form-simplest-programming-tutorials-f #edit-keys-2","minChars":"3","max_sug":"10","type":"internal","datas":"https:\/\/www.programiz.com\/search_autocomplete\/autocomplete\/7\/","fid":"7","theme":"basic-blue","auto_submit":"1","auto_redirect":"1"}},"googleanalytics":{"trackOutbound":1,"trackMailto":1,"trackDownload":1,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"},"urlIsAjaxTrusted":{"\/c-programming\/c-structure-function":true}});
//--><!]]>
</script>

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
<script type="text/javascript" src="//static.mailerlite.com/js/w/webforms.js?v25"></script>  </div>
</div>

<script type="text/javascript" src="//static.mailerlite.com/js/w/webforms.js?v25"></script>

