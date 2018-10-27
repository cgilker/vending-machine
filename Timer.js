class Timers{
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var go = true;

//a method to stop the timer
function stop(){
  go = false;
}

//a method to start the timer again
function go(){
  go = true;
}

//the reason the timer can stop
if(go){
setInterval(setTime, 1000);
}

//a method to continue the timeline
function setTime() {
  ++totalSeconds;
  secondsLabel = pad(totalSeconds % 60);
  minutesLabel = pad(parseInt(totalSeconds / 60));
}

//a method so that numbers count properly
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
}
