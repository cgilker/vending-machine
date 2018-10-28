//var twitter = (url:"twitter.com", time:"100")
class dataPair {

	constructor(url){
		this.timer = new Timers();
		this.url = url; //cant start without unique URL!!!!

	}

	stopTimer(){
		this.timer.stop();
	}

	startTimer(){
		this.timer.startTimer();
	}

	 getTime(){
		 return this.timer.getTime();
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
