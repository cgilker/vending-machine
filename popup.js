//let minutesLabel = document.getElementById("minutes");
//let secondsLabel = document.getElementById("seconds");
let urlLabel = document.getElementById("url");
var dataPairs = [];

//adds on to the seconds every 1 second
//setInterval(time, 1000);

//A function to count time


//keeps the seconds and time ints in line so they don't go over 2 char
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

chrome.runtime.getBackgroundPage(function(bg){
    this.totalSeconds = bg.totalSeconds;
//  this.dataPairs = bg.dataPairs;

});
