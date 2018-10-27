 chrome.runtime.onInstalled.addListener(function() {
   chrome.tabs.onActiveChanged.addListener(function() {
     chrome.tabs.onHighlightChanged.addListener(function(){
       console.log("Switched tab");
     });
     console.log("Tab state changed");
     chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
       var tab = tabs[0];
       console.log(tab.url);
     });
   });
 });
