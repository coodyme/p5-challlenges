export default function createInvader(xPos, yPos, s, spd) {
  let x = xPos
  let y = yPos
  let size = s;
  let speed = spd;
  let dir = 1;

  function show(noStroke, fill, rectMode, rect, CENTER) {
    noStroke();
    fill(200, 200, 200);
    rectMode(CENTER);
    rect(x, y, size, speed);
  }

  function move() {
    x += speed * dir;
  }

  function destroy() {

  }

  return {
    show,
    move,
    destroy
  }
} 