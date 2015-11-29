
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // sendResponse(document.all[0].outerHTML);
  if (request.pauseVideo){
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('src/pause.js');
	s.onload = function() { this.parentNode.removeChild(this); };
	(document.head||document.documentElement).appendChild(s);
  } else if (request.playVideo){
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('src/play.js');
	s.onload = function() { this.parentNode.removeChild(this); };
	(document.head||document.documentElement).appendChild(s);
  }

  sendResponse(document.all[0]);
  // document.dispatchEvent(new CustomEvent('Buffer2Remote', {todo: "LOL"}));
});
