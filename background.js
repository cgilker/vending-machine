 chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.onCreated.addListener(function() {
        console.log("A new tab");
    });
 });
