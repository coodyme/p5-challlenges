
const ITERATIONS = 100000;
const DELAY = 0.1
const DOT_SIZE = 1;

let vectors = []

let A, B, C

function area(A, B, C) {
	return abs((A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y)) / 2.0)
}

function setup() {
	createCanvas(800, 800);
	background(150)
	angleMode(DEGREES)

	A = createVector(DOT_SIZE/2, height - (DOT_SIZE/2), 0)
	B = createVector(width/2, DOT_SIZE/2, 0)
	C = createVector(width - (DOT_SIZE/2), height - (DOT_SIZE/2), 0)

	dot(A.x, A.y, 255)
	dot(B.x, B.y, 255)
	dot(C.x, C.y, 255)

	let ABC = area(A, B, C)

	let inside = false

	let P = createVector(0, 0)

	while(inside === false) {
		P = createVector(floor(random(width)), floor(random(height)))
		let PAB = area(P, A, B)
		let PBC = area(P, B, C)
		let PAC = area(P, A, C)
		inside = (ABC === PAB + PBC + PAC)
	}

	dot(P.x, P.y, 255)
	
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
			
			dot (half.x, half.y, 0)
	
		}, DELAY * i)
	}
}


function dot(x, y, color) {
	this.x = x;
	this.y = y;
	stroke(color);
	strokeWeight(DOT_SIZE);
	point(this.x, this.y);
}