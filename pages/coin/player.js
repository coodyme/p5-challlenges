export default function createPlayer(x, y, r, color) {
    let posX = x
    let posY = y
    let radius = r
    let speed = 5

    function move(movingRight, movingLeft, movingUp, movingDown) {
        if (movingRight) {
            posX += speed;
        }
        if (movingLeft) {
            posX -= speed;
        }
        if (movingUp) {
            posY -= speed;
        }
        if (movingDown) {
            posY += speed;
        }
    }

    function getPosition() {
        return {
            x: posX,
            y: posY
        }
    }

    function display(fill, noStroke, ellipse) {
        fill(color);
        noStroke();
        ellipse(posX, posY, radius);
    }

    return {
        getPosition,
        radius,
        move,
        display
    }
}