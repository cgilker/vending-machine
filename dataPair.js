//var twitter = (url:"twitter.com", time:"100")
class dataPair {

	constructor(url){
		this.url = url; //cant start without unique URL!!!!

	}

	stopTimer(){
		stop();
	}

	startTimer(){
		start();
	}

	 getTime(){
		 return getTime();
	 }

	 getUrl(){
		return this.url;
	 }
	 concatenate(){
		Console.log(this.time+" "+this.url);
	}
}
