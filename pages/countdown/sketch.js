
import { p5i } from 'p5i'

const { mount, noCanvas, millis, createP, createDiv, getURLParams, floor, nf } = p5i()

let timer
let time
let startTime = 0
let currentTime = 0
let leftTime = 10
let interval

function setup() {
	noCanvas()
	startTime = millis()

	timer = createP("T-minus");
	timer.style("font-size", "40px");

	time = createP("...");
	time.style('color', '#F9CB28')
	time.style("font-size", "80px");

	let div = createDiv()
	div.child(timer)
	div.child(time)
	div.style('display', 'flex')
	div.style('flex-direction', 'column')
	div.style('text-align', 'center')
	div.style('justify-content', 'center')

	document.body.style = 'display: flex; justify-content: center; align-items: center; height: 100vh'

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
		timer.remove()
		time.html("Time's up!")
		clearInterval(interval)
	}
}

mount(document.getElementById('sketch'), { setup })
