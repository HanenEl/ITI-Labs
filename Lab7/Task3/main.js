var seconds = 0;
var minutes = 0;
var hours = 0;
var interval =0;
function StartWatch(){
	seconds ++;
	if(seconds >= 60){	
		seconds=0;	
		minutes++;
		if(minutes >= 60){ 
            minutes = 0;
            hours++; 
        }
	}
	var secs = seconds < 10 ? "0" + seconds : seconds;
	var mins = minutes < 10 ? "0" + minutes : minutes;
	var hrs = hours < 10 ? "0" + hours : hours;

	document.getElementById('time').innerHTML = hrs + ":" + mins + ":" + secs ;
}

function Start(){
    if(!interval) {
        interval = setInterval(StartWatch, 1000);
    }
}

function Stop(){
    clearInterval(interval);
    interval = 0;
}

function Reset() {
    clearInterval(interval); 
    interval = 0;
    seconds = 0; 
    minutes = 0; 
    hours = 0; 
    document.getElementById('time').innerHTML = "00:00:00"; 
}




