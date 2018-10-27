 chrome.runtime.onInstalled.addListener(function() {
   chrome.tabs.onActiveChanged.addListener(function() {
     chrome.tabs.onHighlightChanged.addListener(function(){
       console.log("Switched tab");
     });
     console.log("Tab state changed");
   });
 });
