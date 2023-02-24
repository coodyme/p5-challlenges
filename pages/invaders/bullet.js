export default function createBullet(xPos, yPos, s, spd) {
  let x = xPos
  let y = yPos
  let size = s
  let speed = spd

  function show(noStroke, fill, rectMode, rect) {
    noStroke();
    fill(200, 200, 200);
    rectMode(CENTER);
    rect(x, y, size, size);
  }

  function move() {
    y -= speed;
  }

  function hit(x, y, w, h, x2, y2, w2, h2) {
    if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
      return true;
    }
    return false;
  }

  return {
    show,
    move,
    hit
  }
}