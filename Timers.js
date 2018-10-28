var totalSeconds = 0;
var go = false;

  //a method to stop the timer
   function stop(){
    go = false;
  }

  //a method to start the timer again
   function start(){
    go = true;
    //the reason the timer stop
    setInterval(timeCounter(), 1000);
  }

  function getTime(){
    return totalSeconds;
  }

  //a method to continue the timeline
   function timeCounter() {
    ++totalSeconds;
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

  function assignTime(secondsLabel, minutesLabel){
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }
