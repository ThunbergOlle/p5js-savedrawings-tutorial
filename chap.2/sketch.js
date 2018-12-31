let drawtheLine = false; //As I said before
let lastX; //Last cordinate of the line
let lastY; //Lst cordinate of the line
let x; //Current mouse cordinate
let y; // Current mouse cordinate

window.onmousedown = () => drawtheLine = true; //When the mouse is pressed we should change the draw the line variable
window.onmouseup = () => drawtheLine = false; //Opposit.
onmousemove = (event) => { x = event.clientX, y = event.clientY }
setup = () => {
    createCanvas(windowWidth, windowHeight)
    background(255);
}
draw = () => {
    
}