
let timer
let time
let startTime = 0
let currentTime = 0
let leftTime = 10
let interval

function setup() {
	noCanvas()
	startTime = millis()

	timer = createP("Countdown Timer");
	timer.style('margin', '10 40px');
	timer.style("font-size", "40px");
	
	time = createP("Time");
	time.style('margin', '10 40px');
	time.style("font-size", "20px");

	var params = getURLParams();
  console.log(params);
  if (params.min) {
    var min = params.min;
    leftTime = min * 60;
  }

	interval = setInterval(timeIt, 1000)
}

function convertSeconds(seconds) {
	let min = floor(seconds / 60)
	let sec = seconds % 60
	return nf(min, 2) + ":" + nf(sec, 2)
}

function timeIt() {
	currentTime = floor((millis() - startTime) / 1000)
	time.html(convertSeconds(leftTime - currentTime))
	
	if (currentTime == leftTime) {
		clearInterval(interval)
	}
}	