export default function createSafe(x, y, r, c) {
    let posX = x
    let posY = y
    let radius = r
    let color = c

    function display(noFill, strokeWeight, stroke, ellipse) {
        noFill();
        strokeWeight(2);
        stroke(color)
        ellipse(posX, posY, radius);
    }

    return {
        posX,
        posY,
        radius,
        display
    }
}