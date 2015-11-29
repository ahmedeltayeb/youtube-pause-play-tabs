

document.addEventListener('DOMContentLoaded', function() {
	var pauseButton = document.getElementById('pauseButton');
	pauseButton.addEventListener('click', function() {
		chrome.windows.getAll({populate : true}, function(windows) {
			windows.forEach(function(window) {
				window.tabs.forEach(function(tab) {
					chrome.tabs.sendMessage(tab.id, {pauseVideo: true}, function(response){
						if(response != null) { // Content script ready
						} else { // No listener on the other end
							chrome.tabs.executeScript(tab.id, {file: "src/content.js"}, function(){
								if(chrome.runtime.lastError) {
									console.error(chrome.runtime.lastError);
									throw Error("Unable to inject script into tab " + tab.url);
								}
								// OK, now it's injected and ready
								chrome.tabs.sendMessage(tab.id, {pauseVideo: true});
							});
						}
					});
				});
			});
		});
	}, false);
	
	
	var playButton = document.getElementById('playButton');
	playButton.addEventListener('click', function() {
		chrome.windows.getAll({populate : true}, function(windows) {
			windows.forEach(function(window) {
				window.tabs.forEach(function(tab) {
					chrome.tabs.sendMessage(tab.id, {playVideo: true}, function(response){
						if(response != null) { // Content script ready
						} else { // No listener on the other end
							chrome.tabs.executeScript(tab.id, {file: "src/content.js"}, function(){
								if(chrome.runtime.lastError) {
									console.error(chrome.runtime.lastError);
									throw Error("Unable to inject script into tab " + tab.url);
								}
								// OK, now it's injected and ready
								chrome.tabs.sendMessage(tab.id, {playVideo: true});
							});
						}
					});
				});
			});
		});
	}, false);
	
}, false);

