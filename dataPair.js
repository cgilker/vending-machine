//var twitter = (url:"twitter.com", time:"100")


class dataPair {


	constructor(url){
		var timer = Timers.
		this.url = url; //cant start without unique URL!!!!
		
	}	

	stopTimer(){
		timer.stop();
	}

	startTimer(){
		timer.go();
	}

	 getTime(){
		 return timer.getTime();
	 }
	 setTime(time){
		 this.time = time;
	 }

	 getUrl(){
		return this.url;
	 }
	 concatenate(){
		Console.log(this.time+" "+this.url);
	}
}
