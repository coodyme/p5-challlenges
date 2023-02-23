import { p5i } from 'p5i';

const { mount, createCanvas, background, smooth, frameRate, fill, circle, cos, sin, TWO_PI, PI } = p5i()

const ENTITY_AMOUNT = 24;
const DIAMETER = 100;

function setup({ windowHeight, windowWidth }) {
	createCanvas(windowWidth, windowHeight);
	smooth();
	frameRate(24);
	background(0);

	let r = DIAMETER / 2;
	let circumference = PI * DIAMETER;
	let size = (circumference / ENTITY_AMOUNT);
	let cx = windowWidth / 2.0;
	let cy = windowHeight / 2.0;

	fill('#F9CB28');
	for (let j = 0; j < 10; j++) {
		setTimeout(() => {
			for (let i = 0; i <= ENTITY_AMOUNT; ++i) {

				setTimeout(() => {
					let angle = i * TWO_PI / ENTITY_AMOUNT;
					let x = cx + cos(angle) * r * j;
					let y = cy + sin(angle) * r * j;
					circle(x, y, size);
				}, 100 * i)
			}
		}, 100 * j)
	}
}

mount(document.getElementById('sketch'), { setup })