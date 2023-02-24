
export default function createShip(xPos, yPos, s, spd) {
  let x = xPos;
  let y = yPos;
  let size = s;
  let speed = spd;
  let dir = 0;

  function show(noStroke, fill, rectMode, rect, CENTER) {
    noStroke();
    fill(0, 200, 0);
    rectMode(CENTER);
    rect(x, y, size, size);
  }

  function move(keyIsDown, LEFT_ARROW, RIGHT_ARROW) {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      x -= 1 * speed;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      x += 1 * speed;
    }
  }

  return {
    show,
    move
  }
}