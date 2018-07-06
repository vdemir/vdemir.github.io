---
layout: post
title: Vocabulary
date:   2018-06-26 13:52:00
tags:   English
comments: False
published: true
---


<p class="meta">27 Haziran 2018 - Türkiye</p>
<hr>

{{ content}}
<div class="container">
  <h2><a href="http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html" target="_blank">highlight</a> demo</h2>
  <div class="panel panel-default">
    <div class="panel-heading">
      <form>
        <div class="form-group">
          <label for="keyword">Search term:</label>
          <input type="text" class="form-control input-sm" value="Lorem" name="keyword" id="keyword">
        </div>
        <button type="button" class="btn btn-default btn-sm" name="perform">Perform</button>
      </form>
    </div>
</div>

{% include paging.html %}
<div class="teaser clearfix"></div>
{% include speech-to-webtext.html %}
{% include CSS.html %}
{% include scripts.html %}
<script>
function search() {
 
   var name = document.getElementById("searchForm").elements["searchItem"].value;
   var pattern = name.toLowerCase();
   var targetId = "";
 
   var divs = document.getElementsByClassName("col-md-2");
   for (var i = 0; i < divs.length; i++) {
      var para = divs[i].getElementsByTagName("p");
      var index = para[0].innerText.toLowerCase().indexOf(pattern);
      if (index != -1) {
         targetId = divs[i].parentNode.id;
         document.getElementById(targetId).scrollIntoView();
         break;
      }
   } 
}
</script>

<script>
$(function() {
  var $context = $(".context");
  var $form = $("form");
  var $button = $form.find("button[name='perform']");
  var $input = $form.find("input[name='keyword']");

  $button.on("click.perform", function() {

    // Determine search term
    var searchTerm = $input.val();

    // Remove old highlights and highlight
    // new search term afterwards
    $context.removeHighlight();
    $context.highlight(searchTerm);

  });
  $button.trigger("click.perform");
});</script>

