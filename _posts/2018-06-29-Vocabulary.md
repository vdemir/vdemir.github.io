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

<div class="container">
  <h2><a href="https://markjs.io/" target="_blank">mark.js</a> demo</h2>
  <div class="panel panel-default">
    <div class="panel-heading">
      <form class="row">
        <div class="col-xs-6">
          <div class="form-group">
            <label for="keyword">Search term:</label>
            <input type="text" class="form-control input-sm" value="Lorem" name="keyword" id="keyword">
          </div>
        <button type="button" class="btn btn-default btn-sm" name="perform">Perform</button>
        </div>
        <div class="col-xs-6">
          <div class="form-group">
            <label for="accuracy">Accuracy:</label>
            <select class="form-control input-sm" name="accuracy" id="accuracy">
              <option value="exactly">exactly</option>
              <option value="partially" selected>partially</option>
              <option value="complementary">complementary</option>
             </select>
          </div>
           <div class="form-group">
            <label for="element" class="noTransform">Element</label>
            <input type="text" class="form-control input-sm" value="mark" name="element" id="element">
          </div>
          <div class="form-group">
            <label for="className" class="noTransform">Class name</label>
            <input type="text" class="form-control input-sm" value="highlight" name="className" id="className">
          </div>
          <div class="form-group">
            <label for="diacritics" class="noTransform"><input type="checkbox" value="true" name="diacritics" id="diacritics" checked> diacritics</label>
          </div>
          <div class="form-group">
            <label for="separateWordSearch" class="noTransform"><input type="checkbox" value="true" name="separateWordSearch" id="separateWordSearch" checked> separate word search</label>
          </div>
        </div>
      </form>
      <strong>For a full list of methods and options visit the <a href="https://markjs.io/configurator.html" target="_blank">configurator</a></strong>
    </div>
    {{ content}}
  </div>
</div>
{% include paging.html %}
<div class="teaser clearfix"></div>
{% include speech-to-webtext.html %}
{% include CSS.html %}
{% include scripts.html %}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/mark.js/7.0.0/jquery.mark.min.js"></script>



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

