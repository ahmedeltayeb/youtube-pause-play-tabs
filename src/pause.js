// YouTube Pause Add-on
// The MIT License
// Copyright (c) 2015 Nishanth Shanmugham


;(function() {
  var a = document.getElementsByTagName("body")[0];
  // a.onkeydown = responder;
  // function responder(event) {
      // spacebar and not inside a the search or comments boxes
      // spacebar = (event.which == 32);
      // clsName = event.target.className;
      // textBox = (clsName.indexOf("search-term") >= 0
                 // || clsName.indexOf("yt-simplebox-text") >= 0);
      // if (spacebar && !textBox) {
      var states = { 1: "playing", 2: "paused" };
      var p = window.document.getElementById("movie_player");
      var s = p && p.getPlayerState && states[p.getPlayerState()];

	  if (s){
		p.pauseVideo();  
	  }

      // playerState is automatically updated by an event elsewhere

      // event.preventDefault();
      // return false;
      // }
  // }
})();


