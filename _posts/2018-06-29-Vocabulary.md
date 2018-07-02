---
layout: post
title: Vocabulary
date:   2018-06-26 13:52:00
tags:   English
comments: False
---

{{ page.title }}
================

<p class="meta">27 Haziran 2018 - Türkiye</p>
<hr>
{% include paging.html %}


<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/materialize/0.95.1/css/materialize.min.css">

<div class="container">
  
    <div class="row">
      <label>Choose voice</label>
      <select id="voices"></select>
    </div>
    <div class="row">
      <div class="col s6"> 
          <input type="Hidden" id="rate" value="10" />
        
     
      
          <input type="Hidden" id="pitch" value="1" />
   
      
    </div>
    <div class="row">
      <div class="input-field col s12">
        <textarea id="message" class="materialize-textarea"></textarea>
        <label>Write message</label>
      </div>
    </div>
    <a href="#" id="speak" class="waves-effect waves-light btn">Speak</a>
</div>

<div id="modal1" class="modal">
  <h4>Speech Synthesis not supported</h4>
  <p>Your browser does not support speech synthesis.</p>
  <p>We recommend you use Google Chrome.</p>
  <div class="action-bar">
    <a href="#" class="waves-effect waves-green btn-flat modal-action modal-close">Close</a>
  </div>
</div>

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/materialize/0.95.1/js/materialize.min.js"></script>

<script>
$(function(){
  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = function() {
      var $voicelist = $('#voices');

      if($voicelist.find('option').length == 0) {
        speechSynthesis.getVoices().forEach(function(voice, index) {
          console.log(voice);
          var $option = $('<option>')
          .val(index)
          .html(voice.name + (voice.default ? ' (default)' :''));

          $voicelist.append($option);
        });

        $voicelist.material_select();
      }
    }

    $('#speak').click(function(){
      var text = $('#message').val();
      var msg = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[$('#voices').val()];
      msg.rate = $('#rate').val() / 10;
      msg.pitch = $('#pitch').val();
      msg.text = text;

      msg.onend = function(e) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
      };

      console.log(speechSynthesis);

      speechSynthesis.speak(msg);
    })
  } else {
    $('#modal1').openModal();
  }
});
</script>


{% include CSS.html %}


