#### Drawing :blossom:
In this chapter we will start with the drawing function.

__sketch.js__
We are going to be working a lot inside the draw function. Lets see where we are now.
```js
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
    //As you can see, this is empty.
}
```
Now let us dive into the draw function and see what can be needed.
I think we should start by defining a framerate and talking a little about the drawbacks of having a high one.

Since the script is going to save to the array once every frame if the mouse is pressed we need to lower the framerate. I find that 30 is a good amount if you don't want to have looooong arrays. But then if the framerate is too low, the loading of the drawing will become weird.

Anyway, you can tweak this how you want, but let's set it to 30 for now.
```js
draw = () => {
    frameRate(30);
}
```

When that is done we will need to make a simple if statement to check whenever we should draw the line or not. We can check this thanks to the event listener that we added in the secound chapter.
```js
draw = () => {
    frameRate(30);
    if(drawtheLine === true){

    }else {

    }
}
```
So great! Now we know if we should draw or not. Easy! It is time for some brush tweaking!
Let start with the ```strokeWeight```. This is a method built into p5js in order to change the size of the "brush". p5 has got some great references here: https://p5js.org/reference/#/p5/strokeWeight

Anyway we want to set it to two: ```strokeWeight(2)```
We do this inside the if statement.

Another thing that we should set inside the if statement if ```drawtheLine``` is ```true``` is to set the stroke color. Let's set it to zero: ```stroke(0)```

It should look like this:
```js
draw = () => {
    frameRate(30);
    if(drawtheLine === true){
        strokeWeight(2)
        stroke(0);
    }else {

    }
}
```
It is time for drawing the line. We do this by using the ```line``` method.
The method works like this: 
```js
line(x1,y1,x2,y2);
```
The X1 stands for the starting point of the line's x value and the x2 stands for the finish point of the lines x value. The same goes for y1 & y2. 

For example if we want to draw a straight line: 
```js
line(100, 100, 200, 100);
```
This will draw a straight line from (100, 100) to (200, 100) on the canvas.

Here is where the lastX & lastY comes in really handy! Basicly, that should be the starting X and Y point. And the targeted cords for the line is of course the current X and Y position of the mouse.

After the line is drawn, we need to update the lastX & lastY cords to the current.
```js
draw = () => {
    frameRate(30);
    if(drawtheLine === true){
        strokeWeight(2)
        stroke(0);
        line(lastX, lastY, x, y);
        lastX = x;
        lastY = y;
    }else {

    }
}
```
We also have to do something if we shouldn't draw the line. Inside the ```else``` statement we should update the lastX and lastY value but not draw anything. A way to go is to simply change the stroke to make it invisible (Change to to the same color as background (in this case 255)). 

```js
draw = () => {
    frameRate(30);
    if(drawtheLine === true){
        strokeWeight(2)
        stroke(0);
        line(lastX, lastY, x, y);
        lastX = x;
        lastY = y;
    }else {
        stroke(255);
        lastX = x;
        lastY = y;
    }
}
```

If everything is done correctly, you should be able to draw on the canvas now without any problems! :+1:

In the next final chapter, we will handle the saving part.

---
Third chapter done! :apple:
After every chapter you can see the files here in the folder if you've missed something.

[Next](https://www.google.com)
