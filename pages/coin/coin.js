export default function createCoin(x, y, r, c) {
    let posX = x
    let posY = y
    let radius = r
    let color = c

    function pulse(fill, noStroke, ellipse) { }

    function display(fill, noStroke, ellipse) {
        fill(color);
        noStroke();
        ellipse(posX, posY, radius);
    }

    function getPosition() {
        return {
            x: posX,
            y: posY
        }
    }

    return {
        getPosition,
        posX,
        posY,
        radius,
        pulse,
        display
    }
}