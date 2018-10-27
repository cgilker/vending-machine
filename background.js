chrome.runtime.onInstalled.addListener(function() {
  //A variable to store the URLs
  var urls = [];
  //Activates when a tab is activated
  chrome.tabs.onActivated.addListener(function() {
    //Activates when a new tab is highlighted
    chrome.tabs.onHighlighted.addListener(function() {
      console.log("Tab highlighted");
    });
    console.log("Tab activated");
    //Finding the current URL and save it
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
      //The current URL
      var tab = tabs[0].url;
      //The cut down URL
      var sb = "";
      //A variable indicating if the URL has been saved already or not
      var isContained = false;
      //If the URL contains ".com/"
      if(tab.search(".com/") != -1){
        //A loop to cut down the size of the URL
        for(var j = 0; j < tab.search(".com/") + 5; j++){
          sb = sb + tab.charAt(j);
        }
      }
      //A loop to check if the URL is already saved
      for(var i = 0; i < urls.length; i++){
        if(sb == urls[i]){
          isContained = true;
        }
      }
      //If the URL is not already saved, save the URL
      if(!isContained){
        urls.push(sb);
        console.log(sb);
      }
    });
    //Checking if the tab is updated
    chrome.tabs.onUpdated.addListener(function() {
      console.log("Tab updated");
      //Finding the URL of the current tab
      chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        //The current URL
        var tab = tabs[0].url;
        //The cut down URL
        var sb = "";
        //A variable indicating if the URL has been saved already
        var isContained = false;
        //If the URL contains ".com/"
        if(tab.search(".com/") != -1){
          //A loop to cut down the size of the URL
          for(var j = 0; j < tab.search(".com/") + 5; j++){
            sb = sb + tab.charAt(j);
            }
          }
          //A loop to check if the URL is already saved
          for(var i = 0; i < urls.length; i++){
            if(sb == urls[i]){
              isContained = true;
            }
          }
          //If the URL is not already saved, save it
          if(!isContained){
            urls.push(sb);
            console.log(sb);
          }
      });
    });
  });
});
