

import { p5i } from 'p5i'
import { sqrDistance } from '../../utils/math'
import createCircle from './circle';

const {
	mount,
	createCanvas,
	background,
	random,
	fill,
	ellipse,
	lerp,
	stroke,
	noStroke,
	strokeWeight,
	map,
	line
} = p5i()

const COLOR = [200, 200, 200];
const MIN_SIZE = 2;
const MAX_SIZE = 10;
const AMOUNT = 100;
const MAX_SPEED = 2.5;
const MIN_SPEED = 0.3;
const MIN_DISTANCE = 1000;

let circles = [];

function setup({ windowWidth, windowHeight, width, height, }) {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < AMOUNT; i++) {
		let randomX = random(width);
		let randomY = random(height);
		let size = random(MIN_SIZE, MAX_SIZE);
		let xSpeed = random(MIN_SPEED, MAX_SPEED);
		let ySpeed = random(MIN_SPEED, MAX_SPEED);
		circles[i] = createCircle(randomX, randomY, size, xSpeed, ySpeed);
	}
}

function draw({ width, height }) {
	background(0);

	for (let i = 0; i < circles.length; i++) {
		let c1 = circles[i];

		circles[i].update(width, height);
		circles[i].render(noStroke, fill, ellipse, COLOR);

		for (let j = i + 1; j < circles.length; j++) {
			let c2 = circles[j];
			let c1Pos = c1.getPosition();
			let c2Pos = c2.getPosition();
			let d = sqrDistance(c1Pos.x, c1Pos.y, c2Pos.x, c2Pos.y);
			if (d <= (MIN_DISTANCE * MIN_DISTANCE)) {
				let a = lerp(255, 0, map(d, 0, Math.pow(255, 1.5), 0, 1));
				stroke(...COLOR, a);
				strokeWeight(1);
				line(c1Pos.x, c1Pos.y, c2Pos.x, c2Pos.y);
			}
		}
	}
}

mount(document.getElementById('sketch'), { setup, draw })
