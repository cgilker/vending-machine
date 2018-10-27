//var twitter = (url:"twitter.com", time:"100")


class dataPair {
	
	constructor(url){
		this.time = 0;///should always start zero
		this.url = url; //cant startw ithout unique URL!!!!
		
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
