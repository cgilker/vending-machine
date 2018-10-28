//A function to create the urls array
function saveUrl(urls){
  console.log("Tab activated");
  
  //Finding the current URL and save it
  chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    //The current URL
    var tab = tabs[0].url;
    //The cut down URL
    var sb = "";
    //A variable indicating if the URL has been saved already or not
    var isContained = false;
    //The dataPair for this URL
    var dataURL;
    //If the URL contains ".com/"
    if(tab.search(".com/") != -1){
      //A loop to cut down the size of the URL
      for(var j = 0; j < tab.search(".com/") + 5; j++){
        sb = sb + tab.charAt(j);
      }
    }
    //Making a new dataPair and starting its timer
    dataURL = new dataPair(sb);
    dataURL.startTimer();
    //A loop to check if the URL is already saved
    for(var i = 0; i < urls.length; i++){
      //Stopping all of the timers
      urls[i].stopTimer();
      if(sb == urls[i].getUrl()){
        isContained = true;
        //Starting the timer of this URL
        urls[i].startTimer();
		console.log(urls[i].getTotalTime());
      }
    }
    //If the URL is not already saved, save the URL
    if(!isContained){
      urls.push(dataURL);
      console.log(sb);
    }
  });
  //Returning the new urls array
  return urls;
}

//When the extension is installed:
chrome.runtime.onInstalled.addListener(function() {
  //A variable to store the URLs
  var urls = [];
  //Activates when a tab is activated
  chrome.tabs.onActivated.addListener(function() {
    //Activates when a new tab is highlighted
    chrome.tabs.onHighlighted.addListener(function() {
      console.log("Tab highlighted");
    });
    //Updating the urls array
    urls = saveUrl(urls);
  });
  //Checking if the tab is updated
  chrome.tabs.onUpdated.addListener(function() {
    console.log("Tab updated");
    //Updating the urls array
    urls = saveUrl(urls);
  });
});
