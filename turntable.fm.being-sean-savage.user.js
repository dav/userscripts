// ==UserScript==
// @name       Being Sean Savage
// @description Make all the avatars have Sean Savage head.
// @namespace  dav
// @author     Dav Yaginuma
// @match      http://turntable.fm/*
// ==/UserScript==

console.log("Loading: Being Sean Savage");


// See https://gist.github.com/437513
function addJQuery() {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + main.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
	var swapHeadFront = function(avatarNumber, newhead) {
		var imgs = $("img[src$='/avatars/"+avatarNumber+"/headfront.png']");
		if (imgs.length>0) {
			imgs.each(function(index,img) {
				$(img).attr("src",newhead);
			});
		}

		var imgs = $("img[src$='/avatars/"+avatarNumber+"/headback.png']");
		if (imgs.length>0) {
			imgs.each(function(index,img) {
				$(img).attr("src",newhead);
			});
		}
	};
	var avatarLoop = function() {
	  console.log("Sean-ifying");
	  for (var i = 1; i<50; i++) {
		swapHeadFront(i, "http://akuaku.org/dav/images/misc/sean-headfront.png");
	  }
	  console.log("Done.")
	}
	console.log("Setting interval");
	setInterval(avatarLoop, 30000);
	console.log("Set.");
}

// load jQuery and execute the main function
window.setTimeout(addJQuery, 5000);
