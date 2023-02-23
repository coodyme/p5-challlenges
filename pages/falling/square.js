export default function createBlock(x, y, w, h) {
    let posX = x
    let posY = y
    let width = w
    let height = h

    function display(noStroke, fill, rect) {
        noStroke();
        fill(200, 0, 0, 100);
        rect(posX, posY, width, height)
    }

    function fall() {
        posY += 2;
    }

    return {
        display,
        fall
    }
}