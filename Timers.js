
class Timers {

  constructor(){
    this.minutesLabel = document.getElementById("minutes");
    this.secondsLabel = document.getElementById("seconds");
    this.totalSeconds = 0;
    this.go = false;
  }

  //a method to stop the timer
   stop(){
    this.go = false;
  }

  //a method to start the timer again
   startTimer(){
    this.go = true;
    //the reason the timer stop
    setInterval(this.timeCounter, 1000);
  }

  getTime(){
    return this.totalSeconds;
  }

  //a method to continue the timeline
   timeCounter() {
    ++this.totalSeconds;
    this.secondsLabel.innerHTML = pad(this.totalSeconds % 60);
    this.minutesLabel.innerHTML = pad(parseInt(this.totalSeconds / 60));
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
