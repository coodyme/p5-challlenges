export default function createPlayer(x, y, w, h) {
    let posX = x
    let posY = y
    let width = w
    let height = h

    function display() {
        noStroke();
        fill(0, 0, 0, 100)
        rect(posX, posY, width, height)
    }

    function move() {

    }

    return {
        display,
        move
    }
}