//var twitter = (url:"twitter.com", time:"100")


class dataPair {
	var timer;
	constructor(url){
		timer = new Timer();
		this.time = 0;///should always start zero
		this.url = url; //cant startw ithout unique URL!!!!

	}

	stopTimer(){
		timer.stop();
	}

	startTimer(){
		timer.go();
	}

	 getTime(){
		 return this.time;
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
