
import { p5i } from 'p5i'

const ITERATIONS = 100000;
const DELAY = 1;
const DOT_SIZE = 1;

let vectors = []
let A, B, C

function setup({
	createCanvas,
	background,
	angleMode,
	windowWidth,
	windowHeight,
	createVector,
	random,
	DEGREES,
	stroke,
	strokeWeight,
	point,
	floor
}) {
	createCanvas(windowWidth, windowHeight);
	background(0)
	angleMode(DEGREES)

	A = createVector(DOT_SIZE / 2, windowHeight - (DOT_SIZE / 2), 0)
	B = createVector(windowWidth / 2, DOT_SIZE / 2, 0)
	C = createVector(windowWidth - (DOT_SIZE / 2), windowHeight - (DOT_SIZE / 2), 0)

	dot(A.x, A.y, 150, stroke, strokeWeight, point)
	dot(B.x, B.y, 150, stroke, strokeWeight, point)
	dot(C.x, C.y, 150, stroke, strokeWeight, point)

	let ABC = area(A, B, C)

	let inside = false

	let P = createVector(0, 0)

	while (inside === false) {
		P = createVector(floor(random(windowWidth)), floor(random(windowHeight)))
		let PAB = area(P, A, B)
		let PBC = area(P, B, C)
		let PAC = area(P, A, C)
		inside = (ABC === PAB + PBC + PAC)
	}

	dot(P.x, P.y, 150, stroke, strokeWeight, point)

	let half = createVector(0, 0)

	for (let i = 0; i < ITERATIONS; i++) {
		setTimeout(() => {
			let lastVertex = random(['A', 'B', 'C'])

			if (i < 1) {
				half = createVector(P.x, P.y)
			}

			if (lastVertex === 'A') {
				half = createVector((A.x + half.x) / 2, (A.y + half.y) / 2)
			} else if (lastVertex === 'B') {
				half = createVector((B.x + half.x) / 2, (B.y + half.y) / 2)
			} else if (lastVertex === 'C') {
				half = createVector((C.x + half.x) / 2, (C.y + half.y) / 2)
			}

			dot(half.x, half.y, '#ed225d', stroke, strokeWeight, point)

		}, DELAY * i)
	}
}

function area(A, B, C) {
	return Math.abs((A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y)) / 2.0)
}

function dot(x, y, color, stroke, strokeWeight, point) {
	stroke(color);
	strokeWeight(DOT_SIZE);
	point(x, y);
}

p5i({ setup }, document.getElementById('sketch'))
