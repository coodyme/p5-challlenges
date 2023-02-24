import { p5i } from 'p5i';
import createBullet from './bullet';
import createInvader from './invader';
import createShip from './ship';

const { mount, createCanvas, background, noStroke, fill, rectMode, rect, floor, CENTER } = p5i()

const INVADER_SPACING = 5;
const INVADER_X_SPEED = 0.1;
const INVADER_SHIFT_TIME = 1;

const PADDING = 50;

const ROW = 5;
const COLUMN = 11;

const SHIP_SPEED = 2;
const SHIP_SIZE = 20;

const BULLET_SPEED = 5;
const BULLET_SIZE = 10;

let ship;
let invaders = [];
let bullets = [];
let amount;

function setup({ windowHeight, windowWidth }) {
	createCanvas(windowWidth, windowHeight);

	// Setup ship
	ship = createShip(windowWidth / 2, windowWidth - 100, SHIP_SIZE, SHIP_SPEED);

	// Setup Sizes
	let rectSize = windowWidth - (PADDING * 2);
	console.log("Rect Size: ", rectSize);

	let spacingRectSize = (COLUMN - 1) * INVADER_SPACING;
	console.log("Spacing Rect Size: ", spacingRectSize);

	let invaderRectSize = rectSize - spacingRectSize;
	console.log("Invader Rect Size: ", invaderRectSize);

	let invaderSize = floor(invaderRectSize / COLUMN);
	console.log("Invader Size: ", invaderSize);

	// Setup Invaders
	for (let i = 0; i < ROW; i++) {
		for (let j = 0; j < COLUMN; j++) {
			//let x = (INVADER_SPACING * j) + (invaderSize * (j));
			//let y = (INVADER_SPACING * i) + (invaderSize * (i - 1));
			let x = windowWidth / 2;
			let y = (INVADER_SPACING * i) + (invaderSize * (i - 1));
			let inv = createInvader(x, y, invaderSize, INVADER_X_SPEED);
			console.log("Invader", "(", i, ",", j, ")", "Pos", "(", "x:", x, "y:", y, ")");
			invaders.push(inv);
		}
	}
}

function draw({ keyIsDown, LEFT_ARROW, RIGHT_ARROW }) {
	background(50);

	ship.show(noStroke, fill, rectMode, rect, CENTER);
	ship.move(keyIsDown, LEFT_ARROW, RIGHT_ARROW);

	for (let i = 0; i < invaders.length; i++) {
		invaders[i].show(noStroke, fill, rectMode, rect);
		//invader[i].move();
	}

	for (let i = 0; i < bullets.length; i++) {
		bullets[i].show(noStroke, fill, rectMode, rect, CENTER);
		bullets[i].move();

		for (let j = 0; j < invaders.length; j++) {
			if (bullets[i].hit(
				bullets[i].x,
				bullets[i].y,
				bullets[i].size,
				bullets[i].size,
				invaders[j].x,
				invaders[j].y,
				invaders[j].size,
				invaders[j].size,
			)) {
				//bullets.splice(i, 1);
				console.log("Hit");
			}
		}
	}
}

function keyPressed() {
	if (keyCode === 32) {
		var b = createBullet(ship.x, ship.y, BULLET_SIZE, BULLET_SPEED);
		bullets.push(b);
	}
}

mount(document.getElementById('sketch'), { setup, draw })