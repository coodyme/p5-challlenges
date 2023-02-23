import { p5i } from 'p5i';
import createEntity from './entity';

const { mount, createCanvas, background, createVector, cos, sin, stroke, strokeWeight, fill, ellipse } = p5i()

// this is the golden angle in radians
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))
const ENTITY_DIAMETER = 100
const LIMIT = 400

console.log(GOLDEN_ANGLE)

let entities = []
let c

function setup({ windowHeight, windowWidth }) {
	createCanvas(windowWidth, windowHeight);
	background(0);

	entities = Array.from({ length: LIMIT }, (_, i) => {
		let entity = createEntity(
			i * GOLDEN_ANGLE,
			ENTITY_DIAMETER - i,
			windowWidth,
			windowHeight,
			createVector,
			cos,
			sin
		)

		return entity
	})

}

function draw({ windowHeight, windowWidth }) {
	background(0);

	for (let i = 0; i < entities.length; i++) {
		entities[i].shift(i, entities);

		if (entities[i].hasReachedBorder(windowWidth, windowHeight)) {
			entities.splice(i, 1);
		} else {
			entities[i].show(stroke, strokeWeight, fill, ellipse);
		}

		c++;
	}


	let entity = createEntity(
		c * GOLDEN_ANGLE,
		ENTITY_DIAMETER - c,
		windowWidth,
		windowHeight,
		createVector,
		cos,
		sin
	)

	entities.push(entity);
}

mount(document.getElementById('sketch'), { setup, draw })
