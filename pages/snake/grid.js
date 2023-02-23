export default function createGrid() {
  let rows;
  let cols;
  let tiles = [];

  function generate(windowWidth, windowHeight, SCALE, createVector) {
    rows = windowWidth / SCALE;
    cols = windowHeight / SCALE;

    let counter = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let x = i * SCALE;
        let y = j * SCALE;

        counter = counter + 1;
        tiles[counter] = createVector(x, y);
      }
    }
  }

  function show(noStroke, fill, rect, SCALE) {
    let counter = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        counter = counter + 1;
        let c = 0;
        if ((i + j) % 2 === 0)
          c = 10;

        noStroke();
        fill(c);
        rect(tiles[counter].x, tiles[counter].y, SCALE, SCALE);
      }
    }
  }

  return {
    generate,
    show
  }
}