class Timers {

  constructor(){
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    var go = false;
  }

  //a method to stop the timer
   stop(){
    go = false;
  }

  //a method to start the timer again
   go(){
    go = true;
  }

  //the reason the timer can stop
  if(go){
  setInterval(timeCounter, 1000);
  }

  //a method to continue the timeline
   timeCounter() {
    ++totalSeconds;
    secondsLabel = pad(totalSeconds % 60);
    minutesLabel = pad(parseInt(totalSeconds / 60));
  }

  //a method so that numbers count properly
   pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
}
