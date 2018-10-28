//var twitter = (url:"twitter.com", totalTime:"100")
class dataPair {

	constructor(url){

		this.url = url; //cant start without unique URL!!!!
		this.totalTime = 0;
		this.stoppingTime = 0;
		this.startingTime = 0;
	}	
	//called on all tabs when moved to a new tab
	stopTimer(){
		this.stoppingTime = Date.now();
		this.totalTime = this.totalTime + this.stoppingTime - this.startingTime;
	}

	//called on the new open tab
	startTimer(startingTime){
		this.startingTime = Date.now();
	}
	
	//returns totalTime for this url
	 getTotalTime(){
		 return this.totalTime;
	 }
	 //shouldnt use
	 setTime(time){
		 this.time = time;
	 }

	 getUrl(){
		return this.url;
	 }
	 concatenate(){
		return getTotalTime()+" "+this.url;
	}
}
