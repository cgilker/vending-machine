<<<<<<< HEAD
 //these things happen on installation
 //h
//chrome.runtime.onInstalled.addListener(function() {
  //  var tops = topSites.get(function{});
 //});
 
/*	 
chrome.runtime.onMessage.addListener(function() {
	var tops = topSites.get();
});
*/
=======
 chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.onCreated.addListener(function() {
        console.log("A new tab");
    });
 });
>>>>>>> cf53904341fddaf15de0a87d1915cab7b21a378e
