export default function createEntity(a, d, windowWidth, windowHeight, createVector, cos, sin) {
  let center = createVector(windowWidth / 2, windowHeight / 2)
  let position = createVector(center.x, center.y)
  let direction = createVector(cos(a), sin(a))

  let diameter = d;

  function show(noStroke, strokeWeight, fill, ellipse) {
    noStroke('#F9CB28');
    strokeWeight(2)
    fill('#000');
    ellipse(position.x, position.y, diameter, diameter);
  }

  function shift(index, entities) {
    for (let i = index + 1; i < entities.length - 1; i++) {
      if (position.dist(entities[i].getPosition()) < diameter) {
        position.add(direction);
      }
    }
  }

  function hasReachedBorder(width, height) {
    return (
      center.dist(position) > (width / 2) - (diameter / 2) ||
      center.dist(position) > (height / 2) - (diameter / 2) ||
      center.dist(position) === 0
    )
  }

  function getPosition() {
    return position;
  }

  return {
    getPosition,
    show,
    shift,
    hasReachedBorder
  }
}
