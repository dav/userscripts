// ==UserScript==
// @name       SFPublicLibrarySafari
// @description Fill in the form at the SF Public Library Safari login page
// @namespace  dav
// @author     Dav Yaginuma
// @match      http://ezproxy.sfpl.org/login
// ==/UserScript==

// See https://gist.github.com/437513
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}


// the guts of this userscript
function main() {
  var barCode = '123412341234';
  var pin = 'pin#';
  $('[name="user"]').val(barCode);
  $('[name="pin"]').val(pin);
}

// load jQuery and execute the main function
addJQuery(main);