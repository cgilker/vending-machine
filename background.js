 chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.onActiveChanged.addListener(function(){
      console.log("Changed tab");
    });
 });