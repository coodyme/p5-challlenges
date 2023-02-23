export default function createEntity(posX, posY, radius) {
  let x = posX;
  let y = posY;
  let r = radius;

  function display(noStroke, fill, circle) {
    noStroke();
    fill(255, 200, 0);
    circle(x, y, r);
  }

  function move() {
  }

  return {
    display,
    move,
  }
}
