 chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
	 chrome.windows.onCreated.addListener(function() {

     console.log("A new tab");

   });
 });
