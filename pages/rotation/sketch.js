import { p5i } from 'p5i';

const {
	mount,
	createCanvas,
	background,
	noFill,
	translate,
	rotateY,
	radians,
	box,
	push,
	pop,
	WEBGL,
	tan,
	perspective,
	stroke,
} = p5i()

let w = 100;

function setup({ windowWidth, windowHeight }) {
	createCanvas(windowWidth, windowHeight, WEBGL);

	var fov = 60 / 180 * Math.PI;
	var camZ = windowHeight / 2 / tan(fov / 2.0);
	perspective(fov, windowWidth / windowHeight, camZ * 0.1, camZ * 10);

}

function draw({ windowWidth }) {
	background(0);

	rotateY(radians(30));


	noFill();
	for (let z = 0; z < windowWidth; z += w) {
		push();
		translate(0, 0, z - windowWidth / 2);
		stroke('#ed225d')
		box(w, w, 0);
		pop();
	}
}


mount(document.getElementById('sketch'), { setup, draw })
