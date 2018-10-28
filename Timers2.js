//i want to use dates and timestamps

  
  //the difference between the current time and the time at which it begun is the time to display
  //do i start the timer as soon as this is made
  
  
  function Timers2(){
	  
  }
  function findTimeElapsed(deltaTime){
	this.deltaTime = Date.now() - startingTime;
	return this.deltaTime;
  }
  
  function stopTime(){
	
  }
  
  stopTime(findTimeElapsed(this.deltaTime)
  
  //a method to continue the timeline
   timeCounter() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }

 
}
