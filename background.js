chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.onActivated.addListener(function() {
    chrome.tabs.onHighlighted.addListener(function(){
      console.log("Tab highlighted");
    });
    console.log("Tab activated");
      chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        var tab = tabs[0].url;
        var sb = "";
        if(tab.search(".com/") != -1){
          for(var j = 0; j < tab.search(".com/") + 5; j++){
            sb = sb + tab.charAt(j);
            }
          }
          console.log(sb);
        });
    chrome.tabs.onUpdated.addListener(function() {
      console.log("Tab updated");
      chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        var tab = tabs[0].url;
        var sb = "";
        if(tab.search(".com/") != -1){
          for(var j = 0; j < tab.search(".com/") + 5; j++){
            sb = sb + tab.charAt(j);
            }
          }
          console.log(sb);
      });
    });
  });
});
