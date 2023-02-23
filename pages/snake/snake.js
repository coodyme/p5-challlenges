
export default function createSnake(createVector) {
  let position = createVector(0, 0);
  let direction = createVector(0, 0);
  let node = [];
  let nodes = 0;

  function eat(apple, print, dist) {
    let d = dist(
      position.x,
      position.y,
      apple.getPosition().x,
      apple.getPosition().y
    )

    if (d < 1) {
      nodes++;
      print("NODES: ", nodes);
      return true;
    }
    return false;
  }

  function setDirection(dir) {
    direction = dir
  }

  function move(createVector, SCALE, constrain, width, height) {
    if (nodes === node.length) {
      for (let i = 0; i < node.length - 1; i++) {
        node[i] = node[i + 1];
      }
    }

    node[nodes - 1] = createVector(
      position.x,
      position.y
    );

    position.x = constrain(
      position.x + direction.x * SCALE,
      0,
      width - SCALE
    );

    position.y = constrain(
      position.y + direction.y * SCALE,
      0,
      height - SCALE
    );
  }

  function show(noStroke, fill, rect, SCALE) {
    noStroke();
    fill('#F9CB28');
    for (let i = 0; i < node.length; i++) {
      rect(node[i].x, node[i].y, SCALE, SCALE)
    }
    rect(position.x, position.y, SCALE, SCALE);
  }

  return {
    eat,
    setDirection,
    move,
    show,
  }
}