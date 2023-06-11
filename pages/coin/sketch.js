import { p5i } from 'p5i'
import createPlayer from './player'
import createCoin from './coin'
import createSafe from './safe'

let bColor;
let pColor;
let cColor;
let sColor;

let player;
let safe;
let coins = [];

const PLAYER_RADIUS = 50;
const SAFE_RADIUS = 5;
const COIN_RADIUS = 25;
const COIN_AMOUNT = 20;

let movingRight = false;
let movingLeft = false;
let movingUp = false;
let movingDown = false;


function setup({
	windowWidth,
	windowHeight,
	color,
	createCanvas,
	random,
	fill,
	noStroke,
	ellipse
}) {
	createCanvas(windowWidth, windowHeight);

	// Define background, player and coin colors.
	bColor = color(0);
	pColor = color('#ed225d');
	cColor = color('#666666');
	sColor = color('#ffffff');

	// Create player object.
	player = createPlayer(windowWidth / 2, windowHeight / 2, PLAYER_RADIUS, pColor);
	player.display(fill, noStroke, ellipse)

	let radius = (windowWidth + windowHeight) / SAFE_RADIUS
	// Create safe zone object.
	safe = createSafe(windowWidth / 2, windowHeight / 2, radius, sColor);

	// Create coins to display on the screen.
	for (let i = 0; i < COIN_AMOUNT; i++) {
		let x = random(COIN_RADIUS, windowWidth - COIN_RADIUS);
		let y = random(COIN_RADIUS, windowHeight - COIN_RADIUS);
		coins[i] = createCoin(x, y, COIN_RADIUS, cColor)
	}
}

function draw({ background, noFill, fill, noStroke, ellipse, strokeWeight, stroke, dist }) {
	background(bColor);

	player.display(fill, noStroke, ellipse);
	player.move(movingRight, movingLeft, movingUp, movingDown)

	safe.display(noFill, strokeWeight, stroke, ellipse);

	for (let coin of coins) {
		coin.pulse(fill, noStroke, ellipse);
		coin.display(fill, noStroke, ellipse);
		if (isColliding(player, coin, dist)) {
			coins.splice(coins.indexOf(coin), 1)
		}
	}
}

function isColliding(player, coin, dist) {
	let playerPos = player.getPosition()
	let coinPos = coin.getPosition()
	let d = dist(playerPos.x, playerPos.y, coinPos.x, coinPos.y);
	return (d <= player.radius / 2)
}

function keyPressed({ key }) {
	if (key == 'w') {
		movingUp = true;
	}
	if (key == 'a') {
		movingLeft = true;
	}
	if (key == 's') {
		movingDown = true;
	}
	if (key == 'd') {
		movingRight = true;
	}
}

function keyReleased({ key }) {
	if (key == 'w') {
		movingUp = false;
	}
	if (key == 'a') {
		movingLeft = false;
	}
	if (key == 's') {
		movingDown = false;
	}
	if (key == 'd') {
		movingRight = false;
	}
}

p5i({ setup, draw, keyPressed, keyReleased }, document.getElementById('sketch'))
