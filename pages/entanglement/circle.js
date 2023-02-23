
export default function createCircle(x, y, r, xSpeed, ySpeed) {
  let posX = x
  let posY = y
  let radius = r
  let speedX = xSpeed
  let speedY = ySpeed

  function update(width, height) {
    if (posX > width + radius * 10 || posX < -(radius * 10)) {
      speedX = speedX * -1;
    }
    if (posY > height + radius * 10 || posY < -(radius * 10)) {
      speedY = speedY * -1;
    }

    posX = posX + speedX;
    posY = posY + speedY;
  }

  function render(noStroke, fill, ellipse, color) {
    noStroke();
    fill(...color);
    ellipse(posX, posY, radius, radius);
  }

  function getPosition() {
    return { x: posX, y: posY }
  }

  return {
    getPosition,
    update,
    render
  }
}