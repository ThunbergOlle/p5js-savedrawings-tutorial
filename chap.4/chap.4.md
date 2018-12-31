#### Handling the data :banana:
In this final chapter we will save the cords and drawing to an array and finally to a .json file.

__sketch.js__
We need to define a new variable. Let's call it ```drawing```. We define it at the top of the script by doing.
```js
let drawing = [];
```

After the drawing variable is defined, we should put some data in it. And the data that we want to put in it is ofcourse the drawing data.

We can to this pretty simple by doing:
```js
draw = () => {
    frameRate(30);
    if(drawtheLine === true){
        strokeWeight(2)
        stroke(0);
        line(lastX, lastY, x, y);

        // NEW

        drawing.push([lastX, lastY, x, y]);

        // NEW
        lastX = x;
        lastY = y;
    }else {
        stroke(255);
        lastX = x;
        lastY = y;
    }
}
```
What we did there is simply to push the data about the mouse to the drawing array.

Alright great! Now we have got the data of the drawing inside an array and we can use it in order to save it as a json file.

Remember this?
```html
<button onclick="saveDrawing(drawing)">Save</button>
```
Let's change it a bit, update it with this:
```html
<button onclick="saveDrawing(drawing, 'mydrawing')">Save</button>
```
The new string that was added is the name of the json file. You can change this to whatever name that you want to save the json file with. 

Now when the button has been fixed. Let's write the function that is called when the button is clicked.
```js
saveDrawing = (drawing, nameOfDrawing) => {

}
```
We take in the drawing itself and the name of the drawing.
Now let's save it as a JSON file. This can be tricky but p5 makes it easy. You can simply do it like this:

```js
saveDrawing = (drawing, nameOfDrawing) => {
    createStringDict(drawing).saveJSON(nameOfDrawing);
}
```
createStringDict: https://p5js.org/reference/#/p5/createStringDict
saveJSON: https://p5js.org/reference/#/p5.TypedDict/saveJSON

The whole sketch.js script should look like this:
```js
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
```

Now hit save and everything should be setup and working. When you click the "save" button it should download a json file with everything in it. :fire:


---
Final chapter done! :apple:
Doesn't it work? Check the files inside this folder. 

Thanks for reading! Did you note something weird? Open an [issue](https://github.com/ThunbergOlle/p5js-savedrawings-tutorial/issues)
