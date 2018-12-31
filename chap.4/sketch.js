let drawtheLine = false; //As I said before
let lastX; //Last cordinate of the line
let lastY; //Lst cordinate of the line
let x; //Current mouse cordinate
let y; // Current mouse cordinate
let drawing = [];
window.onmousedown = () => drawtheLine = true; //When the mouse is pressed we should change the draw the line variable
window.onmouseup = () => drawtheLine = false; //Opposit.
onmousemove = (event) => { x = event.clientX, y = event.clientY }
setup = () => {
    createCanvas(windowWidth, windowHeight)
    background(255);
}
draw = () => {
    frameRate(30);
    if(drawtheLine === true){
        strokeWeight(2)
        stroke(0);
        line(lastX, lastY, x, y);
        drawing.push([lastX, lastY, x, y]);
        lastX = x;
        lastY = y;
    }else {
        stroke(255);
        lastX = x;
        lastY = y;
    }
}
saveDrawing = (drawing, nameOfDrawing) => {
    createStringDict(drawing).saveJSON(nameOfDrawing);
}