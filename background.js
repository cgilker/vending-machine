var dataPairs = [];
var currI;
//A function to create the dataPairs array
function saveUrl(dataPairs){
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
    for(var i = 0; i < dataPairs.length; i++){
      //Stopping all of the timers
      dataPairs[i].stopTimer();
      if(sb == dataPairs[i].getUrl()){
        isContained = true;
        //Starting the timer of this URL
        dataPairs[i].startTimer();
		console.log(dataPairs[i].getTotalTime());
      }
    }
    //If the URL is not already saved, save the URL
    if(!isContained){
      dataPairs.push(dataURL);
      console.log(sb);
    }
  });
  //Returning the new dataPairs array
  return dataPairs;
}

//When the extension is installed:
chrome.runtime.onInstalled.addListener(function() {
  //Activates when a tab is activated
  chrome.tabs.onActivated.addListener(function() {
    //Activates when a new tab is highlighted
    chrome.tabs.onHighlighted.addListener(function() {
      console.log("Tab highlighted");
    });
    //Updating the dataPairs array
    dataPairs = saveUrl(dataPairs);
  });
  //Checking if the tab is updated
  chrome.tabs.onUpdated.addListener(function() {
    console.log("Tab updated");
    //Updating the dataPairs array
    dataPairs = saveUrl(dataPairs);
  });
});






//Always going timer
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

//adds one to total seconds every second
setInterval(time, 1000);

//keeps minutes and seconds in proper format
function time() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
