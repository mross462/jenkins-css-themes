// Require JS
var jq = document.createElement('script');
jq.src = "http://code.jquery.com/jquery-latest.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
jQuery.noConflict();

// Emacs codemirror keymap
var emacs = document.createElement('script');
emacs.src = "http://codemirror.net/keymap/emacs.js";
document.getElementsByTagName('head')[0].appendChild(emacs);

setTimeout(function(){
  document.getElementById('search-box').setAttribute("type","search");
  document.getElementById('main-table').setAttribute("style","none");
}, 350);

$(document).ready(function(){

  CodeMirror.defaults = {
    theme: 'menlo',
    smartIndent: true,
    indentWithTabs: false,
    keymap: 'emacs',
    lineNumbers: true,
    undoDepth: 100
  }

})
