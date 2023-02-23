import { p5i } from 'p5i';

const { mount, createCanvas, background } = p5i()

function setup({ windowHeight, windowWidth }) {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0)
}

mount(document.getElementById('sketch'), { setup, draw })

