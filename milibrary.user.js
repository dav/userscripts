// ==UserScript==
// @name       MILibrary
// @description Fill in the form at the Mechanic's Institute login page
// @namespace  dav
// @author     Dav Yaginuma
// @match      http://search.milibrary.org/patroninfo
// ==/UserScript==

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
  var patronName = 'Dav Yaginuma';
  var patronId = '21750000241245';
  $('#name').val(patronName);
  $('#code').val(patronId);
}

// load jQuery and execute the main function
addJQuery(main);