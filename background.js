 chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    chrome.tabs.onCreated.addListener(function() {
      chrome.storage.sync.set(function() {
        console.log("A new tab");
      });
    });
 });
