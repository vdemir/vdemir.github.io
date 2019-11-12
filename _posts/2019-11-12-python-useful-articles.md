---
layout: new
title:  Python Useful Articles
date:   2019-04-14 12:00:00
tags:   books
categories: [Books ]
comments: false
published: true
lang: tr
---

<html lang="en-US">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-param" content="_csrf">
<meta name="csrf-token" content="WEfDrt-MWPWZ2KjKHeFLbgPPpXrZJehu-Wx_h_WGK9saNqvxjLkew8OQzI9cvik6YJr2GesVvyejOkzTr-tMsQ==">
    <link rel="shortcut icon" href="/assets/Bootstrap/krajee-logo.ico" type="image/x-icon">
    <link rel="icon" href="/assets/Bootstrap/krajee-logo.ico" type="image/x-icon">
    <title>Bootstrap File Input Resumable Uploads Demo - &copy; Kartik</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
<link href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" rel="stylesheet">
<link href="/assets/Bootstrap/all-krajee.min.css?ver=201903112143" rel="stylesheet">
<link href="/assets/Bootstrap/fileinput.css?ver=201909132002" rel="stylesheet">
<link href="/assets/Bootstrap/dropdown.min.css" rel="stylesheet">
<script src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" async></script>
<script src="https://buttons.github.io/buttons.js" async></script>
<script>(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:'ca-pub-4718928441117602',enable_page_level_ads:true});
(function() {
    var send = XMLHttpRequest.prototype.send,
        token = document.getElementsByTagName('meta')['csrf-token'].content;
    XMLHttpRequest.prototype.send = function(data) {
        this.setRequestHeader('X-CSRF-Token', token);
        return send.apply(this, arguments);
    };
}());
function closepop() { $("#pop").popover("hide"); }</script>    <script>
!function(){var t,e="015793334654161961524:wlcacatlyyk",c=document.createElement("script");c.type="text/javascript",c.async=!0,c.src=("https:"==document.location.protocol?"https:":"http:")+"//www.google.com/cse/cse.js?cx="+e,t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(c,t)}();
</script></head>
<body onload="prettyPrint()">
<div id="top-navbar">
    <nav id="w6" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top pt-0 pb-0">
<a class="navbar-brand" href="https://www.krajee.com" title="Krajee.com - Web Development Evolved"><img alt="Krajee" class="krajee-logo" src="https://plugins.krajee.com/assets/prod/img/krajee-logo.png"></a>
<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#w6-collapse" aria-controls="w6-collapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
<div id="w6-collapse" class="collapse navbar-collapse">
<ul id="w7" class="navbar-nav mr-auto nav"><li class="nav-item"><a class="nav-link" href="/" title="Krajee Plugins Home Page"><i class="fas fa-home"></i> Home</a></li>
<li class="dropdown nav-item"><a id="pluginsMenu" class="nav-link dropdown-toggle active" href="#" title="Krajee Yii2 Demos" role="button" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown"><i class="fas fa-fw fa-link"></i> Plugins</a><div id="w8" class="dropdown-menu"><h6 class="dropdown-header">Bootstrap</h6>
<a class="dropdown-item" href="/markdown-editor" title="Krajee Bootstrap Markdown Editor Plugin"><i class="fas fa-fw fa-edit"></i> Markdown Editor <span class="badge badge-success">New</span></a>
<a class="dropdown-item active" href="/file-input" title="Krajee Bootstrap File Input Plugin"><i class="fas fa-fw fa-folder-open"></i> File Input</a>
<a class="dropdown-item" href="/star-rating" title="Krajee Bootstrap Star Rating Plugin"><i class="fas fa-fw fa-star"></i> Star Rating</a>
<a class="dropdown-item" href="/tabs-x" title="Krajee Bootstrap Tabs Extended Plugin"><i class="fas fa-fw fa-folder"></i> Tabs X</a>
<a class="dropdown-item" href="/popover-x" title="Krajee Bootstrap Popover Extended Plugin"><i class="fas fa-fw fa-comment"></i> Popover X</a>
<a class="dropdown-item" href="/checkbox-x" title="Krajee Bootstrap Checkbox Extended Plugin"><i class="fas fa-fw fa-check-square"></i> Checkbox X</a>
<div class="dropdown-divider"></div>
<h6 class="dropdown-header">Other</h6>
<a class="dropdown-item" href="/dependent-dropdown" title="Krajee Dependent Dropdown Plugin"><i class="fas fa-fw fa-list"></i> Dependent Dropdown</a>
<a class="dropdown-item" href="/strength-meter" title="Krajee Strength Meter Plugin"><i class="fas fa-fw fa-lock"></i> Strength Meter</a>
<a class="dropdown-item" href="/php-date-formatter" title="Krajee PHP Date Formatter Library"><i class="fas fa-fw fa-calendar"></i> PHP Date Formatter</a></div></li>
<li class="dropdown nav-item"><a id="resourcesMenu" class="nav-link dropdown-toggle" href="#" title="Other Krajee Resources" role="button" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown"><i class="fas fa-fw fa-certificate"></i> Resources</a><div id="w9" class="dropdown-menu"><a class="dropdown-item" href="https://demos.krajee.com" title="Krajee Yii2 Demos"><i class="fas fa-fw fa-play"></i> Yii2 Demos</a>
<a class="dropdown-item" href="https://webtips.krajee.com" title="Krajee Web Tips &amp; Resources"><i class="fas fa-fw fa-fire"></i> Web Tips</a>
<a class="dropdown-item" href="https://kartikv.krajee.com" title="Weblog of Kartik Visweswaran"><i class="fas fa-fw fa-edit"></i> Kartik's Weblog</a></div></li>
<li class="nav-item"><a class="nav-link text-danger" href="https://webtips.krajee.com/tag/bootstrap-fileinput" title="Bootstrap Fileinput web tips" target="_blank"><i class="fas fa-bell kv-animated-bell"></i> Tips</a></li></ul><form class="form-inline kv-navbar-form" id="kv-gs-form" role="search">
    <div class="input-group">
        <input id="kv-gs-query" type="text" class="form-control" placeholder="Search Krajee Plugins ..." autocomplete="off">
        <span class="input-group-btn" title="Submit"><button type="submit" class="btn btn-outline-info"><i class="fa fa-search"></i></button></span>
    </div>
    <div style="display:flex;flex-direction:column;margin:5px">
        <img src="//www.google.com/images/poweredby_transparent/poweredby_000000.gif" alt="Google">
        <span class="text-white" style="font-size:8px">Custom Search</span>
    </div>
        <div onclick="window.location.hash='#comments'" title="Comments for this page"
         class="btn btn-link text-info" style="cursor:pointer;padding:5px 2px 5px 5px">
        <span class="icon-animated-vertical"><i class="fa fa-lg fa-comments"></i></span> <a
                class="badge badge-info"
                href="https://plugins.krajee.com/file-resumable-uploads-demo#disqus_thread">&hellip;</a>
    </div>
    </form></div>
</nav></div>
<div id="wrapper" class="init-sidebar">
    <!-- Sidebar -->
    <div id="sidebar-wrapper">
        <ul id="sidebar" class="nav sidebar-nav flex-column flex-nowrap">
            <li class="sidebar-brand">
                <a class="nav-link" id="menu-toggle" href="#" title="Contents: Bootstrap File Input Resumable Uploads Demo" onclick="togSideMenu(event)">
                    <span class="main-icon"><i class="fas fa-bars"></i></span>bootstrap-fileinput                </a>
            </li>
            <li><a class="navigate nav-link" href="#top" title="Top of page"><span class="sub-icon"><i class="fas fa-arrow-circle-up"></i></span> &mdash; Top &mdash;</a></li>
                            <li><a class="nav-link" href="#resumable-uploads-1" title="Resumable Scenario # 1"><span class="sub-icon"><i class="fas fa-play-circle"></i></span> Resumable Scenario # 1</a></li><li><a class="nav-link" href="#resumable-uploads-2" title="Resumable Scenario # 2"><span class="sub-icon"><i class="fas fa-play-circle"></i></span> Resumable Scenario # 2</a></li><li><a class="nav-link" href="#resumable-uploads-3" title="Resumable Scenario # 3"><span class="sub-icon"><i class="fas fa-play-circle"></i></span> Resumable Scenario # 3</a></li>                        <li><a class="nav-link" href="#comments" title="Comments & Discussion"><span class="sub-icon"><i class="fas fa-comment"></i></span> Comments & Discussion</a></li>
            <li><a class="navigate nav-link" href="#bottom" title="Bottom of page"><span class="sub-icon"><i class="fas fa-arrow-circle-down"></i></span> &mdash; Bottom &mdash;</a></li>
            <li><div class="kv-sidenav-ad"><div id="w10" style="margin-left:-5px;"></div></div></li>
        </ul>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div id="page-content-inner" class="container-fluid">
            <div id="top" class="kv-title-box">
                <div class="row">
                    <div class="col-lg-7 kv-title-text">
                        <h2 class="kv-main-title"><span class="fas fa-folder-open"></span>
                            Resumable Uploads Demo                        </h2>
                    </div>
                    <div class="col-lg-5 kv-title-pills">
                        <ul class="nav nav-pills">
                            <li class="nav-item"><a class="nav-link" href="http://github.com/kartik-v/bootstrap-fileinput" title="bootstrap-fileinput github repository"><span class="fas fa-cloud"></span> Source</a></li>
<li class="nav-item"><a class="nav-link" href="/file-input" title="bootstrap-fileinput documentation"><span class="fas fa-book"></span> Docs</a></li>
<li class="nav-item"><a class="nav-link" href="/file-input/demo#resumable-uploads" title="bootstrap-fileinput demonstration"><span class="fas fa-play"></span> Demo</a></li>
<li class="nav-item"><a class="nav-link active" href="/file-resumable-uploads-demo" title="Resumable Uploads"><span class="fas fa-play"></span> Resumabl&hellip;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="kv-crumb-bar">
                <div class="row">
                    <div class="col-lg-5 kv-crumbs">
                        <ol class="breadcrumb"><li class="breadcrumb-item"><a href="/">Home</a></li>
<li class="breadcrumb-item"><a href="/file-input">Bootstrap File Input</a></li>
<li class="breadcrumb-item"><a href="/file-input/demo#resumable-uploads">Demos</a></li>
<li class="breadcrumb-item active">Resumable Uploads</li>
</ol>                    </div>
                    <div class="col-lg-7 kv-buttons">
                        <a class="github-button" href="https://github.com/kartik-v/bootstrap-fileinput/subscription" title="Watch" data-show-count="true" aria-label="Watch kartik-v/bootstrap-fileinput on GitHub">Watch</a> <a class="github-button" href="https://github.com/kartik-v/bootstrap-fileinput" data-show-count="true" title="aria-label="Star kartik-v/bootstrap-fileinput on GitHub">Star</a> <a class="github-button" href="https://github.com/kartik-v/bootstrap-fileinput/fork" data-show-count="true" aria-label="Fork kartik-v/bootstrap-fileinput on GitHub">Fork</a> <a class="github-button" href="https://github.com/kartik-v/bootstrap-fileinput/issues" data-show-count="true" aria-label="Issue kartik-v/bootstrap-fileinput on GitHub">Issue</a> <a class="github-button" href="https://github.com/kartik-v" data-show-count="true" aria-label="Follow @kartik-v on GitHub">@kartik-v</a>                    </div>
                </div>
            </div>
            <div class="adblock-msg alert alert-danger" style="display:none;">
	<button class="close text-right pull-right float-right">&times;</button>
	<div style="float:left;font-size:18px;margin-right:20px"><i class="fa fa-exclamation-triangle fa-4x"></i></div><h4>Oops!</h4>
	Your browser seems to have an ad-blocking plugin enabled. It is recommended if you can add this domain to your adblocker's whitelist to enable a seamless viewing experience
	of the jQuery plugin demos on this site. If you still feel that you find specific content intrusive or inappropriate, please <a href="mailto:feedback@krajee.com" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-envelope"></i> mail us</a>
</div>            <div class="my-2">
                <form action="https://www.paypal.com/cgi-bin/webscr" class="form-inline justify-content-center text-muted small" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="DTP3NZQ6G2AYU">
    <span class="mx-1">Thankful to Krajee!</span>
        <button class="btn btn-sm btn-warning" type="submit" title="Donate to Krajee via Paypal"><i class="fas fa-lg fa-hand-holding-usd"></i> DONATE</button>
    <input type="hidden" name="currency_code" value="USD">
    <span class="mx-1">to get more out of us. 
        <button id="pop" type="button" class="btn btn-sm btn-info kv-paypal" style="padding:1px 5px;font-size:12px" 
            title="    <b>Why donate?</b>
    <button type='button' class='close' onclick='closepop()' style='margin-top:-5px'>&times;</button>" data-html="true" data-animation="true" data-toggle="popover" data-placement="right" data-content="<div class='small text-justify'><p>We strive hard in creating high quality JQuery plugins for the community as <b>free</b> open source code, and maintaining this demonstration site.</p><p>Any donation would help us maintain our resources better and help improve our plugins or create new ones.</p><p>Even, if it does not fulfil our 
resource needs, it will still be a nice way to thank us and buy us a <i class='fas fa-coffee'></i>.</p><p>We accept donations through 
<a href='https://www.paypal.com' target='_blank'>PayPal</a>. You can also <a href='http://krajee.com/contact/'>send us your details</a> for us to acknowledge your 
contribution.</p></div>">
            <i class="fas fa-info-circle"></i> Learn
        </button>
    </span>
</form>            </div>
            <div class="text-center" style="overflow:hidden">
                
        <!-- Leaderboard -->
        <ins class="adsbygoogle"
             style="display:inline-block;width:728px;height:90px"
             data-ad-client="ca-pub-4718928441117602"
             data-ad-slot="4893266174">
        </ins>
        <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>            </div>
                        <div class="text-justify">
                <p class="lead">Configuring advanced resumable / chunk  ajax based uploads for the <b>bootstrap-fileinput</b> plugin. Refer the <a href="/file-input#ajax-resumable">resumable uploads section</a> for overview on setting up resumable / chunk uploads including a sample server code (PHP example) for processing the file chunks on the server.</p>                <div class="bs-callout bs-callout-warning">
                    <h4>Tip</h4>
                    <p>Not seeing the updated content on this page! Hard refresh your browser to clean cache for this page (e.g. <kbd>SHIFT-F5</kbd> on Windows Chrome)</p>
                </div>
            </div>
                        <div class="text-center">
    <div style="padding:4px">
        <!-- Horizontal Medium Link -->
        <ins class="adsbygoogle"
             style="display:inline-block;width:468px;height:15px"
             data-ad-client="ca-pub-4718928441117602"
             data-ad-slot="4827070579">
        </ins>
        <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></div>
</div>
<div class="mx-auto" style="width:340px;height:300px">
    <div class="kv-ad-large">
        <!-- Large Rectangle -->
        <ins class="adsbygoogle"
             style="display:inline-block;width:336px;height:280px"
             data-ad-client="ca-pub-4718928441117602"
             data-ad-slot="5811596173">
        </ins>
        <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></div>
</div>
<div class="bs-section">
    	<div class="page-header bs-header">
		<h1 id="resumable-uploads-1" class="display-4">
            <a class="kv-anchor" title="Permalink" href="#resumable-uploads-1" data-toggle="tooltip"><span class="fa fa-link"></span></a>
                                Resumable Scenario # 1                <small></small>
            
		</h1>
	</div>
    	<p>This example shows a basic resumable upload setup to upload large sized files as smaller chunks. You can select multiple files in this example. You need to set <samp><a href="/file-input/plugin-options#enableResumableUpload">enableResumableUpload</a></samp> to <code>true</code> for enabling resumable uploads. The <samp><a href="/file-input/plugin-options#uploadUrl">uploadUrl</a></samp> will receive each file chunk for processing. The maximum file count that can be selected simultaneously for upload is set to <code>5</code>. The default chunk size settings are used (i.e. <code>2048 KB</code> or <code>2 MB</code> per chunk). The example also shows configuration of <code>showZoom</code> within <samp><a href="/file-input/plugin-options#fileActionSettings">fileActionSettings</a></samp> as a callback function (whereby the zoom button in the file thumbnails is displayed only for specific selected file types i.e. <code>pdf</code> and <code>image</code>).</p><p>Note that once you click upload, only the pause button is shown for pausing and resuming the upload from the last position. The cancel button is by default not displayed.</p><p>Refer the <a href="/file-input#ajax-resumable">resumable uploads section</a> for overview on setting up resumable / chunk uploads including a sample server code (PHP example) for processing the file chunks on the server.</p>						<div class="bs-example">
                <div>
				<label for="input-res-1">File Gallery</label>
<div class="file-loading">
    <input id="input-res-1" name="input-res-1[]" type="file" multiple>
</div>                </div>
			</div>
			<pre class="prettyprint linenums">&lt;label for=&quot;input-res-1&quot;&gt;File Gallery&lt;/label&gt;
&lt;div class=&quot;file-loading&quot;&gt;
    &lt;input id=&quot;input-res-1&quot; name=&quot;input-res-1[]&quot; type=&quot;file&quot; multiple&gt;
&lt;/div&gt;
&lt;script&gt;
$(document).ready(function() {
    $(&quot;#input-res-1&quot;).fileinput({
        uploadUrl: &quot;/site/upload-file-chunks&quot;,
        enableResumableUpload: true,
        maxFileCount: 5,
        theme: &#039;fas&#039;,
        deleteUrl: &#039;/site/file-delete&#039;,
        fileActionSettings: {
            showZoom: function(config) {
                if (config.type === &#039;pdf&#039; || config.type === &#039;image&#039;) {
                    return true;
                }
                return false;
            }
        }
    });
});
&lt;/script&gt;</pre>
			</div><div class="bs-section">
    	<div class="page-header bs-header">
		<h1 id="resumable-uploads-2" class="display-4">
            <a class="kv-anchor" title="Permalink" href="#resumable-uploads-2" data-toggle="tooltip"><span class="fa fa-link"></span></a>
                                Resumable Scenario # 2                <small></small>
            
		</h1>
	</div>
    	<p>A variation of scenario # 1, where the plugin includes an option to test the status of a partially uploaded earlier file and resume upload from the previously uploaded point. To test this example, first <a href='http://kartik-v.github.io/bootstrap-fileinput-samples/samples/SampleJPGImage30MB.jpg'>download this 30MB sample image file</a> to your client and try to upload (without changing the file name). The <code>testUrl</code> within <samp><a href="/file-input/plugin-options#resumableUploadOptions">resumableUploadOptions</a></samp> will validate the <code>chunksUploaded</code> as an array list of 14 chunk indices already uploaded. The upload will recalibrate and resume from <code>~52%</code> progress onwards. For this example, the <code>chunkSize</code> is set to <code>1024 KB</code> (i.e. <code>1 MB</code>) within <samp><a href="/file-input/plugin-options#resumableUploadOptions">resumableUploadOptions</a></samp>. The example also enables the cancel button for cancelling/aborting uploads by setting <samp><a href="/file-input/plugin-options#showCancel">showCancel</a></samp> to explicitly true. Note that only image files are allowed for this example by setting <samp><a href="/file-input/plugin-options#allowedFileTypes">allowedFileTypes</a></samp> and the <code>accept</code> attribute within the native file input markup. Note also that you may not be able to preview the content of the 30 MB image file for this example, as it is controlled by the <samp><a href="/file-input/plugin-options#maxFilePreviewSize">maxFilePreviewSize</a></samp> (which defaults to <code>25600 KB</code> i.e. <code>25 MB</code>).</p><p>Refer the <a href="/file-input#ajax-resumable">resumable uploads section</a> for overview on setting up resumable / chunk uploads including a sample server code (PHP example) for processing the file chunks on the server.</p>						<div class="bs-example">
                <div>
				<label for="input-res-2">File Gallery</label>
<div class="file-loading">
    <input id="input-res-2" name="input-res-2[]" type="file" multiple accept="image/*">
</div>                </div>
			</div>
			<pre class="prettyprint linenums">&lt;label for=&quot;input-res-2&quot;&gt;File Gallery&lt;/label&gt;
&lt;div class=&quot;file-loading&quot;&gt;
    &lt;input id=&quot;input-res-2&quot; name=&quot;input-res-2[]&quot; type=&quot;file&quot; multiple accept=&quot;image/*&quot;&gt;
&lt;/div&gt;
&lt;script&gt;
$(document).ready(function() {
    $(&quot;#input-res-2&quot;).fileinput({
        uploadUrl: &quot;/site/upload-file-chunks&quot;,
        enableResumableUpload: true,
        allowedFileTypes: [&#039;image&#039;],
        showCancel: true,
        resumableUploadOptions: {
            testUrl: &quot;/site/test-file-chunks&quot;,
            chunkSize: 1024, // 1 MB chunk size
        },
        maxFileCount: 5,
        theme: &#039;fas&#039;,
        deleteUrl: &#039;/site/file-delete&#039;,
        fileActionSettings: {
            showZoom: function(config) {
                if (config.type === &#039;pdf&#039; || config.type === &#039;image&#039;) {
                    return true;
                }
                return false;
            }
        }
    });
});
&lt;/script&gt;</pre>
			</div><div class="bs-section">
    	<div class="page-header bs-header">
		<h1 id="resumable-uploads-3" class="display-4">
            <a class="kv-anchor" title="Permalink" href="#resumable-uploads-3" data-toggle="tooltip"><span class="fa fa-link"></span></a>
                                Resumable Scenario # 3                <small></small>
            
		</h1>
	</div>
    	<p>A variation of scenario 1 to show few other ways to configure the plugin for resumable uploads. You can set <samp><a href="/file-input/plugin-options#uploadExtraData">uploadExtraData</a></samp>  to send and receive additional data and information. For example, this scenario sends an <code>uploadToken</code> via <samp><a href="/file-input/plugin-options#uploadExtraData">uploadExtraData</a></samp> to validate the rights/accesses for the upload. This example shows how to use the plugin resumable events like <samp><a href="/file-input/plugin-events#fileuploaded">fileuploaded</a></samp>, <samp><a href="/file-input/plugin-events#fileuploaderror">fileuploaderror</a></samp>, and <samp><a href="/file-input/plugin-events#filebatchuploadcomplete">filebatchuploadcomplete</a></samp>. Check the browser console for data received via these events. This example also shows how you can have an <samp><a href="/file-input/plugin-options#initialPreview">initialPreview</a></samp> and <samp><a href="/file-input/plugin-options#initialPreviewConfig">initialPreviewConfig</a></samp> configured for displaying initially uploaded files. It also uses an icon only preview for this example via the <samp><a href="/file-input/plugin-options#preferIconicPreview">preferIconicPreview</a></samp>, <samp><a href="/file-input/plugin-options#previewFileIconSettings">previewFileIconSettings</a></samp>, and <samp><a href="/file-input/plugin-options#previewFileExtSettings">previewFileExtSettings</a></samp> settings.</p><p>Refer the <a href="/file-input#ajax-resumable">resumable uploads section</a> for overview on setting up resumable / chunk uploads including a sample server code (PHP example) for processing the file chunks on the server.</p>						<div class="bs-example">
                <div>
				<label for="input-res-3">File Gallery</label>
<div class="file-loading">
    <input id="input-res-3" name="input-res-3[]" type="file" multiple>
</div>                </div>
			</div>
			<pre class="prettyprint linenums">&lt;label for=&quot;input-res-3&quot;&gt;File Gallery&lt;/label&gt;
&lt;div class=&quot;file-loading&quot;&gt;
    &lt;input id=&quot;input-res-3&quot; name=&quot;input-res-3[]&quot; type=&quot;file&quot; multiple&gt;
&lt;/div&gt;
&lt;script&gt;
$(document).ready(function() {
    $(&quot;#input-res-3&quot;).fileinput({
        uploadUrl: &quot;/site/upload-file-chunks&quot;,
        enableResumableUpload: true,
        maxFileCount: 5,
        theme: &#039;fas&#039;,
        deleteUrl: &#039;/site/file-delete&#039;,
        uploadExtraData: {
            uploadToken: &quot;SOME_VALID_TOKEN&quot;
        },
        overwriteInitial: false,
        initialPreview: [
            // TEXT DATA
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut mauris ut libero fermentum feugiat eu et dui. Mauris condimentum rhoncus enim, sed semper neque vestibulum id. Nulla semper, turpis ut consequat imperdiet, enim turpis aliquet orci, eget venenatis elit sapien non ante. Aliquam neque ipsum, rhoncus id ipsum et, volutpat tincidunt augue. Maecenas dolor libero, gravida nec est at, commodo tempor massa. Sed id feugiat massa. Pellentesque at est eu ante aliquam viverra ac sed est.&quot;,
            // PDF DATA
            &#039;http://kartik-v.github.io/bootstrap-fileinput-samples/samples/pdf-sample.pdf&#039;,
            // VIDEO DATA
            &quot;http://kartik-v.github.io/bootstrap-fileinput-samples/samples/small.mp4&quot;
        ],
        initialPreviewAsData: true, // defaults markup  
        initialPreviewConfig: [
            {caption: &quot;Lorem Ipsum.txt&quot;, type: &quot;text&quot;, size: 1430, url: &quot;/site/file-delete&quot;, key: 12}, 
            {type: &quot;pdf&quot;, size: 8000, caption: &quot;PDF Sample.pdf&quot;, url: &quot;/site/file-delete&quot;, key: 14}, 
            {type: &quot;video&quot;, size: 375000, filetype: &quot;video/mp4&quot;, caption: &quot;Krajee Sample.mp4&quot;, url: &quot;/site/file-delete&quot;, key: 15} 
        ],
        preferIconicPreview: true,
        previewFileIconSettings: { // configure your icon file extensions
            &#039;doc&#039;: &#039;&lt;i class=&quot;fas fa-file-word text-primary&quot;&gt;&lt;/i&gt;&#039;,
            &#039;xls&#039;: &#039;&lt;i class=&quot;fas fa-file-excel text-success&quot;&gt;&lt;/i&gt;&#039;,
            &#039;ppt&#039;: &#039;&lt;i class=&quot;fas fa-file-powerpoint text-danger&quot;&gt;&lt;/i&gt;&#039;,
            &#039;pdf&#039;: &#039;&lt;i class=&quot;fas fa-file-pdf text-danger&quot;&gt;&lt;/i&gt;&#039;,
            &#039;zip&#039;: &#039;&lt;i class=&quot;fas fa-file-archive text-muted&quot;&gt;&lt;/i&gt;&#039;,
            &#039;htm&#039;: &#039;&lt;i class=&quot;fas fa-file-code text-info&quot;&gt;&lt;/i&gt;&#039;,
            &#039;txt&#039;: &#039;&lt;i class=&quot;fas fa-file-alt text-info&quot;&gt;&lt;/i&gt;&#039;,
            &#039;mov&#039;: &#039;&lt;i class=&quot;fas fa-file-video text-warning&quot;&gt;&lt;/i&gt;&#039;,
            &#039;mp3&#039;: &#039;&lt;i class=&quot;fas fa-file-audio text-warning&quot;&gt;&lt;/i&gt;&#039;,
            // note for these file types below no extension determination logic 
            // has been configured (the keys itself will be used as extensions)
            &#039;jpg&#039;: &#039;&lt;i class=&quot;fas fa-file-image text-danger&quot;&gt;&lt;/i&gt;&#039;, 
            &#039;gif&#039;: &#039;&lt;i class=&quot;fas fa-file-image text-muted&quot;&gt;&lt;/i&gt;&#039;, 
            &#039;png&#039;: &#039;&lt;i class=&quot;fas fa-file-image text-primary&quot;&gt;&lt;/i&gt;&#039;    
        },
        previewFileExtSettings: { // configure the logic for determining icon file extensions
            &#039;doc&#039;: function(ext) {
                return ext.match(/(doc|docx)$/i);
            },
            &#039;xls&#039;: function(ext) {
                return ext.match(/(xls|xlsx)$/i);
            },
            &#039;ppt&#039;: function(ext) {
                return ext.match(/(ppt|pptx)$/i);
            },
            &#039;zip&#039;: function(ext) {
                return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
            },
            &#039;htm&#039;: function(ext) {
                return ext.match(/(htm|html)$/i);
            },
            &#039;txt&#039;: function(ext) {
                return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
            },
            &#039;mov&#039;: function(ext) {
                return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
            },
            &#039;mp3&#039;: function(ext) {
                return ext.match(/(mp3|wav)$/i);
            }
        }
    }).on(&#039;fileuploaded&#039;, function(event, previewId, index, fileId) {
        console.log(&#039;File Uploaded&#039;, &#039;ID: &#039; + fileId + &#039;, Thumb ID: &#039; + previewId);
    }).on(&#039;fileuploaderror&#039;, function(event, previewId, index, fileId) {
        console.log(&#039;File Upload Error&#039;, &#039;ID: &#039; + fileId + &#039;, Thumb ID: &#039; + previewId);
    }).on(&#039;filebatchuploadcomplete&#039;, function(event, preview, config, tags, extraData) {
        console.log(&#039;File Batch Uploaded&#039;, preview, config, tags, extraData);
    });

    // uncomment below if you need to monitor file upload chunk status or take actions based on events
    /*
    $(&quot;#input-res-3&quot;).on(&#039;filechunkbeforesend&#039;, function(event, fileId, index, retry, fm, rm, outData) {
        console.log(&#039;File Chunk Before Send&#039;, &#039;ID: &#039; + fileId + &#039;, Index: &#039; + index + &#039;, Retry: &#039; + retry);
    }).on(&#039;filechunksuccess&#039;, function(event, fileId, index, retry, fm, rm, outData) {
        console.log(&#039;File Chunk Success&#039;, &#039;ID: &#039; + fileId + &#039;, Index: &#039; + index + &#039;, Retry: &#039; + retry);
    }).on(&#039;filechunkerror&#039;, function(event, fileId, index, retry, fm, rm, outData) {
        console.log(&#039;File Chunk Error&#039;, &#039;ID: &#039; + fileId + &#039;, Index: &#039; + index + &#039;, Retry: &#039; + retry);
    }).on(&#039;filechunkajaxerror&#039;, function(event, fileId, index, retry, fm, rm, outData) {
        console.log(&#039;File Chunk Ajax Error&#039;, &#039;ID: &#039; + fileId + &#039;, Index: &#039; + index + &#039;, Retry: &#039; + retry);
    }).on(&#039;filechunkcomplete&#039;, function(event, fileId, index, retry, fm, rm, outData) {
        console.log(&#039;File Chunk Complete&#039;, &#039;ID: &#039; + fileId + &#039;, Index: &#039; + index + &#039;, Retry: &#039; + retry);
    });
    */

    // uncomment below if you need file&#039;s test status (via resumableUploadOptions.testUrl) or take actions based on events
    /*
    $(&quot;#input-res-3&quot;).on(&#039;filetestbeforesend&#039;, function(event, fileId, fm, rm, outData) {
        console.log(&#039;File Test Before Send&#039;, &#039;ID: &#039; + fileId);
    }).on(&#039;filetestsuccess&#039;, function(event, fileId, fm, rm, outData) {
        console.log(&#039;File Test Success&#039;, &#039;ID: &#039; + fileId);
    }).on(&#039;filetesterror&#039;, function(event, fileId, fm, rm, outData) {
        console.log(&#039;File Test Error&#039;, &#039;ID: &#039; + fileId);
    }).on(&#039;filetestajaxerror&#039;, function(event, fileId, fm, rm, outData) {
        console.log(&#039;File Test Ajax Error&#039;, &#039;ID: &#039; + fileId);
    }).on(&#039;filetestcomplete&#039;, function(event, fileId, fm, rm, outData) {
        console.log(&#039;File Test Complete&#039;, &#039;ID: &#039; + fileId);
    });;
    */
});
&lt;/script&gt;</pre>
			</div>            <div class="bs-section">
                <div id="comments">
                    <div class="page-header bs-header">
                        <h1 id="comments-heading" class="display-4">
                            <a class="kv-anchor" title="" href="#comments" data-toggle="tooltip"
                               data-original-title="Permalink">
                                <span class="fas fa-link"></span></a>
                            Comments & Discussion
                        </h1>
                    </div>
                    <div class="bs-callout bs-callout-info">
                        <h4><i class="fas fa-exclamation-circle"></i> Note</h4>
                        <p>You can now visit the <a href="https://webtips.krajee.com/questions">Krajee Webtips Q & A forum</a> 
                        for searching OR asking questions OR helping programmers with answers on these extensions and plugins. 
                        For asking a question <a href="https://webtips.krajee.com/ask-question">click here</a>. Select the 
                        appropriate <b>question category</b> (i.e. <i>Krajee Plugins</i>) and choose this current page plugin 
                        in the <b>question related to</b> field.</p>
                        <p>
                        <small>The comments and discussion section below are intended for generic discussions or
                            feedback for this plugin. Developers may not be able to search or lookup here
                            specific questions or tips on usage for this plugin.
                        </small>
                        </p>
                    </div>
                    <div class="clearfix">&nbsp;</div>
                    <div class="page-comments">
                        	<div id="disqus_thread"></div>
	<!--[if (gt IE 8)]><!-->
	<script type="text/javascript">
        var disqus_config = function() {
			this.page.url = 'https://plugins.krajee.com/file-resumable-uploads-demo';
		};
        (function () {
            var d = document, s = d.createElement('script');
            s.src = 'https://krajee.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
	</script>
	<!--<![endif]-->

	<!--[if (lt IE 9)]>
	<div class="alert alert-warning">
		<strong>Note:</strong> Please use an updated browser to view comments.	</div>
	<![endif]-->
<noscript><div class="alert alert-danger">Please enable JavaScript to view the .</div></noscript>                    </div>
                </div>
            </div>
        </div>
        <!-- stat counter -->
        <script type="text/javascript">
            document.write('<div class="text-center"><span class="badge badge-secondary">');
            var sc_project=11350018;
            var sc_invisible=0;
            var sc_security="d7391d0a";
            var sc_text=2;
            var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");
            document.write("<sc"+"ript type='text/javascript' src='" + scJsHost+ "statcounter.com/counter/counter.js'></"+"script>");
            document.write(' visitors to Krajee JQuery Plugins since 22-May-2017</span></div>');
        </script>        
        <!-- Footer -->
        <footer class="footer">
            <div id="bottom" class="kv-container">
                <div class="footer-right">
                    &copy; Kartik Visweswaran 2019                    <small><br>Powered by <a href="http://www.yiiframework.com/" rel="external">Yii Framework</a> | <a href="/site/privacy">Privacy Policy</a></small>
                </div>
                <div class="footer-left">
                    <div id="w12" class="kv-social-bar"><a class="text-info" href="https://www.facebook.com/KrajeeSolutions" title="Join us on Facebook"><i class='fab fa-3x fa-facebook-square'></i></a>
<a class="text-primary" href="http://twitter.com/KrajeeSolutions" title="Join us on Twitter"><i class='fab fa-3x fa-twitter-square'></i></a>
<a class="text-danger" href="http://google.com/+KrajeeSolutions" title="Join us on Google+"><i class='fab fa-3x fa-google-plus-square'></i></a>
<a class="text-info" href="http://in.linkedin.com/in/KrajeeSolutions" title="Join us on LinkedIn"><i class='fab fa-3x fa-linkedin'></i></a>
<a class="text-muted" href="http://github.com/kartik-v" title="Join us on GitHub"><i class='fab fa-3x fa-github-square'></i></a>
<a class="btn btn-primary" href="http://vk.com/KrajeeSolutions" title="Join us on VKontakte" style="margin-top:-26px;padding:5px;border-radius:8px"><i class='fab fa-vk' style='font-size:1.6em'></i></a></div>                </div>
            </div>
        </footer>
                	<script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            };
            i[r].l = 1 * new Date();
            a = s.createElement(o);
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', '__gaTracker');

        __gaTracker('create', 'UA-52095950-1', 'krajee.com');
                __gaTracker('send', 'pageview');
        	</script>
<noscript><div class="alert alert-danger">You must enable Javascript on your browser for the site to work optimally and display sections completely.</div></noscript>    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<div id="kv-gs-results-cont" class="modal fade">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">
                    <i class="fa fa-search"></i> Search Results: 
                    <samp class="text-info"></samp>
                </h3>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                </button>
            </div>
            <div class="modal-body">
                <gcse:searchresults-only>
                    <div class="kv-loading-big mx-auto align-middle" style="height:200px;width:200px"></div>
                </gcse:searchresults-only>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<style>
#kv-gs-query{border-color:#fff}#kv-gs-query:focus{border-color:#80bdff}.gsc-control-cse{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.gsc-adBlock{margin:0 0 0 -5px}.gsc-above-wrapper-area,.gsc-thumbnail-inside,.gsc-url-top{padding:0}.gs-result .gs-title,.gs-result .gs-title *{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}.gs-result .gs-title :hover,.gs-result .gs-title:hover{color:#0056b3;text-decoration:underline}.gsc-result .gs-title{height:1.4em}.gsc-result-info{padding-left:0}.gsc-results .gsc-cursor-box{margin:5px 0 0}.gsc-results .gsc-cursor-box .gsc-cursor-page{display:block;padding:.5rem .75rem;margin:0 0 0 -1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #ddd;float:left}.gsc-results .gsc-cursor-box .gsc-cursor-page:focus,.gsc-results .gsc-cursor-box .gsc-cursor-page:hover{color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#ddd}.gsc-results .gsc-cursor-box .gsc-cursor-current-page{color:#fff;background-color:#007bff;border-color:#007bff}.gsc-cursor-page:first-child{margin-left:0;border:1px solid #ddd;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.gsc-cursor-page:last-child{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.gs-error-result .gs-snippet,.gs-no-results-result .gs-snippet{margin:0;padding:15px 20px;border-radius:.25rem;color:#856404;background-color:#fff3cd;border-color:#ffeeba}.gsc-selected-option-container{border-radius:.25rem}
</style><script id="dsq-count-scr" src="//krajee.disqus.com/count.js" async></script>
<script src="https://plugins.krajee.com/assets/1d958cec/js/plugins/purify.min.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
<script src="https://plugins.krajee.com/assets/prod/all-krajee.min.js?ver=201903112143"></script>
<script src="https://plugins.krajee.com/assets/1d958cec/js/plugins/sortable.min.js"></script>
<script src="https://plugins.krajee.com/assets/1d958cec/js/plugins/piexif.min.js"></script>
<script src="https://plugins.krajee.com/assets/1d958cec/js/fileinput.js?ver=201909132002"></script>
<script src="https://plugins.krajee.com/assets/1d958cec/themes/fas/theme.min.js?ver=201908311938"></script>
<script src="https://plugins.krajee.com/assets/fc69cbca/js/dropdown.min.js"></script>
<script>jQuery(function ($) {
    $("#input-res-1").fileinput({
        uploadUrl: "/site/upload-file-chunks",
        enableResumableUpload: true,
        maxFileCount: 5,
        theme: 'fas',
        deleteUrl: '/site/file-delete',
        fileActionSettings: {
            showZoom: function(config) {
                if (config.type === 'pdf' || config.type === 'image') {
                    return true;
                }
                return false;
            }
        }
    });
    $("#input-res-2").fileinput({
        uploadUrl: "/site/upload-file-chunks",
        enableResumableUpload: true,
        allowedFileTypes: ['image'],
        showCancel: true,
        resumableUploadOptions: {
            testUrl: "/site/test-file-chunks",
            chunkSize: 1024, // 1 MB chunk size
        },
        maxFileCount: 5,
        theme: 'fas',
        deleteUrl: '/site/file-delete',
        fileActionSettings: {
            showZoom: function(config) {
                if (config.type === 'pdf' || config.type === 'image') {
                    return true;
                }
                return false;
            }
        }
    });
    $("#input-res-3").fileinput({
        uploadUrl: "/site/upload-file-chunks",
        enableResumableUpload: true,
        maxFileCount: 5,
        theme: 'fas',
        deleteUrl: '/site/file-delete',
        uploadExtraData: {
            uploadToken: "SOME_VALID_TOKEN"
        },
        overwriteInitial: false,
        initialPreview: [
            // TEXT DATA
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut mauris ut libero fermentum feugiat eu et dui. Mauris condimentum rhoncus enim, sed semper neque vestibulum id. Nulla semper, turpis ut consequat imperdiet, enim turpis aliquet orci, eget venenatis elit sapien non ante. Aliquam neque ipsum, rhoncus id ipsum et, volutpat tincidunt augue. Maecenas dolor libero, gravida nec est at, commodo tempor massa. Sed id feugiat massa. Pellentesque at est eu ante aliquam viverra ac sed est.",
            // PDF DATA
            'http://kartik-v.github.io/bootstrap-fileinput-samples/samples/pdf-sample.pdf',
            // VIDEO DATA
            "http://kartik-v.github.io/bootstrap-fileinput-samples/samples/small.mp4"
        ],
        initialPreviewAsData: true, // defaults markup  
        initialPreviewConfig: [
            {caption: "Lorem Ipsum.txt", type: "text", size: 1430, url: "/site/file-delete", key: 12}, 
            {type: "pdf", size: 8000, caption: "PDF Sample.pdf", url: "/site/file-delete", key: 14}, 
            {type: "video", size: 375000, filetype: "video/mp4", caption: "Krajee Sample.mp4", url: "/site/file-delete", key: 15} 
        ],
        preferIconicPreview: true,
        previewFileIconSettings: { // configure your icon file extensions
            'doc': '<i class="fas fa-file-word text-primary"></i>',
            'xls': '<i class="fas fa-file-excel text-success"></i>',
            'ppt': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
            'htm': '<i class="fas fa-file-code text-info"></i>',
            'txt': '<i class="fas fa-file-alt text-info"></i>',
            'mov': '<i class="fas fa-file-video text-warning"></i>',
            'mp3': '<i class="fas fa-file-audio text-warning"></i>',
            // note for these file types below no extension determination logic 
            // has been configured (the keys itself will be used as extensions)
            'jpg': '<i class="fas fa-file-image text-danger"></i>', 
            'gif': '<i class="fas fa-file-image text-muted"></i>', 
            'png': '<i class="fas fa-file-image text-primary"></i>'    
        },
        previewFileExtSettings: { // configure the logic for determining icon file extensions
            'doc': function(ext) {
                return ext.match(/(doc|docx)$/i);
            },
            'xls': function(ext) {
                return ext.match(/(xls|xlsx)$/i);
            },
            'ppt': function(ext) {
                return ext.match(/(ppt|pptx)$/i);
            },
            'zip': function(ext) {
                return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
            },
            'htm': function(ext) {
                return ext.match(/(htm|html)$/i);
            },
            'txt': function(ext) {
                return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
            },
            'mov': function(ext) {
                return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
            },
            'mp3': function(ext) {
                return ext.match(/(mp3|wav)$/i);
            }
        }
    }).on('fileuploaded', function(event, previewId, index, fileId) {
        console.log('File Uploaded', 'ID: ' + fileId + ', Thumb ID: ' + previewId);
    }).on('fileuploaderror', function(event, previewId, index, fileId) {
        console.log('File Upload Error', 'ID: ' + fileId + ', Thumb ID: ' + previewId);
    }).on('filebatchuploadcomplete', function(event, preview, config, tags, extraData) {
        console.log('File Batch Uploaded', preview, config, tags, extraData);
    });

    // uncomment below if you need to monitor file upload chunk status or take actions based on events
    /*
    $("#input-res-3").on('filechunkbeforesend', function(event, fileId, index, retry, fm, rm, outData) {
        console.log('File Chunk Before Send', 'ID: ' + fileId + ', Index: ' + index + ', Retry: ' + retry);
    }).on('filechunksuccess', function(event, fileId, index, retry, fm, rm, outData) {
        console.log('File Chunk Success', 'ID: ' + fileId + ', Index: ' + index + ', Retry: ' + retry);
    }).on('filechunkerror', function(event, fileId, index, retry, fm, rm, outData) {
        console.log('File Chunk Error', 'ID: ' + fileId + ', Index: ' + index + ', Retry: ' + retry);
    }).on('filechunkajaxerror', function(event, fileId, index, retry, fm, rm, outData) {
        console.log('File Chunk Ajax Error', 'ID: ' + fileId + ', Index: ' + index + ', Retry: ' + retry);
    }).on('filechunkcomplete', function(event, fileId, index, retry, fm, rm, outData) {
        console.log('File Chunk Complete', 'ID: ' + fileId + ', Index: ' + index + ', Retry: ' + retry);
    });
    */

    // uncomment below if you need file's test status (via resumableUploadOptions.testUrl) or take actions based on events
    /*
    $("#input-res-3").on('filetestbeforesend', function(event, fileId, fm, rm, outData) {
        console.log('File Test Before Send', 'ID: ' + fileId);
    }).on('filetestsuccess', function(event, fileId, fm, rm, outData) {
        console.log('File Test Success', 'ID: ' + fileId);
    }).on('filetesterror', function(event, fileId, fm, rm, outData) {
        console.log('File Test Error', 'ID: ' + fileId);
    }).on('filetestajaxerror', function(event, fileId, fm, rm, outData) {
        console.log('File Test Ajax Error', 'ID: ' + fileId);
    }).on('filetestcomplete', function(event, fileId, fm, rm, outData) {
        console.log('File Test Complete', 'ID: ' + fileId);
    });;
    */
loadAdversal('w10', '3808879', '300x1050', '300', '1050', '300x600,160x600,120x600,300x250,250x250,200x200,180x150');
setTimeout(function() {
    if ($.trim($('.adsbygoogle').html()).length < 10) {
        $('.adblock-msg').slideDown('slow');
    }
}, 1000);
$('.adblock-msg .close').on('click', function(e) {
	$('.adblock-msg').slideUp('slow');
});
});</script></body>
</html>
