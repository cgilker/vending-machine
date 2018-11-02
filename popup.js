//let minutesLabel = document.getElementById("minutes");
//let secondsLabel = document.getElementById("seconds");
let urlLabel1 = document.getElementById("url1");
let urlLabel2 = document.getElementById("url2");
let urlLabel3 = document.getElementById("url3");
let urlLabel4 = document.getElementById("url4");
let urlLabel5 = document.getElementById("url5");
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
    this.dataPairs = bg.dataPairs;
    urlLabel1.innerHTML = this.dataPairs[0].getUrl();
    urlLabel2.innerHTML = this.dataPairs[1].getUrl();
    urlLabel3.innerHTML = this.dataPairs[2].getUrl();
    urlLabel4.innerHTML = this.dataPairs[3].getUrl();
    urlLabel5.innerHTML = this.dataPairs[4].getUrl();

});
