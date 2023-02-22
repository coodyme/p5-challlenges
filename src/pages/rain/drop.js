export default function createDrop(random, width, height, map) {
	let x = random(width);
	let y = random(-height, -height/2);
	let z = random(0,20);
	let size = map(z, 0, 20, 10, 30);
	let ySpeed = map(z, 0, 20, 7.5, 15);
	let dropColor = 255;

	function display(map, mouseX, width, stroke, line) {
		dropColor = map(mouseX, 0, width, 255, 0);
		stroke(dropColor);
		line(x, y, x, y + size);

	};

	function fall(height, random, width) {
		y += ySpeed;

		if (y > height) {
			y = random(-200, -100);
			x = random(width);
		}
	};

	return {
		display,
		fall
	}
}