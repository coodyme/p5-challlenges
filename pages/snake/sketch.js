
import { p5i } from 'p5i'
import createSnake from './snake';
import createApple from './apple';
import createGrid from './grid';

const {
	mount,
	createCanvas,
	createVector,
	frameRate,
	UP_ARROW,
	LEFT_ARROW,
	DOWN_ARROW,
	RIGHT_ARROW,
	noStroke,
	fill,
	rect,
	print,
	dist,
	random,
	constrain
} = p5i()

let grid;
let snake;
let apple;

const SCALE = 25;

function setup({ windowWidth, windowHeight }) {
	createCanvas(windowWidth, windowHeight);
	frameRate(10);

	grid = createGrid();
	grid.generate(windowWidth, windowHeight, SCALE, createVector);

	snake = createSnake(createVector);

	apple = createApple(createVector);
	apple.setPosition(random, createVector, grid);
}

function draw({ windowWidth, windowHeight }) {
	grid.show(noStroke, fill, rect, SCALE);

	snake.move(createVector, SCALE, constrain, windowWidth, windowHeight);
	snake.show(noStroke, fill, rect, SCALE);
	apple.show(noStroke, fill, rect, SCALE);

	if (snake.eat(apple, print, dist)) {
		apple.setPosition(random, createVector, grid);
	}
}

function keyPressed({ keyCode }) {
	if (keyCode === UP_ARROW || keyCode === 87) {
		snake.setDirection(createVector(0, -1));
	}
	if (keyCode === LEFT_ARROW || keyCode === 65) {
		snake.setDirection(createVector(-1, 0));
	}
	if (keyCode === DOWN_ARROW || keyCode === 83) {
		snake.setDirection(createVector(0, 1));
	}
	if (keyCode === RIGHT_ARROW || keyCode === 68) {
		snake.setDirection(createVector(1, 0))
	}
}

mount(document.getElementById('sketch'), { setup, draw, keyPressed })