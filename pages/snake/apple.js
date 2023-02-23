
export default function createApple(createVector) {
  let position = createVector(50, 0);

  function setPosition(random, createVector, grid) {
    let tile = random(grid.tiles);
    position = createVector(tile.x, tile.y);
  }

  function show(noStroke, fill, rect, SCALE) {
    noStroke();
    fill('#FF4D4D');
    rect(position.x, position.y, SCALE, SCALE)
  }

  function getPosition() {
    return position;
  }

  return {
    getPosition,
    setPosition,
    show,
  }
}