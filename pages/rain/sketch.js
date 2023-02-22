import { p5i } from 'p5i'
import createDrop from './drop'

const RATE = 100;

let bgColor = 0;
let drops = [];

function setup({ createCanvas, windowWidth, windowHeight, random, width, height, map }) {
	createCanvas(windowWidth, windowHeight);

	for(var i = 0; i < RATE; i++) {
		let drop = createDrop(random, width, height, map)
		drops[i] = drop
	}
}

function draw({ background, map, mouseX, width, height, random, stroke, line }) {
	
	bgColor = map(mouseX, 0, width, 0, 255);
	
	background(bgColor);
	
	for(var i = 0; i < RATE; i++) {
		drops[i].fall(height, random, width);
		drops[i].display(map, mouseX, width, stroke, line);
	}
}

p5i({ setup, draw }, document.getElementById('sketch'))