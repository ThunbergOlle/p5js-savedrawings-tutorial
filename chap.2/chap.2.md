#### Setting up variables & event listeners :book:
It's going to work like this: When the mousebutton is clicked and the user starts drawing, we simply record it and save it as an array. The array will then be parsed to a json file that you can download. In order to view the drawing you can then reverse the save function to read the cordinates correctly. 

If this doesn't make sense now, no problem! You will understand while we do it! :smile:

__sketch.js__

Inside sketch.js we want to define some variables which is going to be very useful later. Be sure to this at the very top of the script in order to not confuse the script later on!

We want to start with a variable if it should draw or not. Basicly if the pen is down or up. We can define the variable like this: ```let drawtheLine = false``` and then some other variables will be need to be defined. __please read the comments in the following code__

```js
let drawtheLine = false; //As I said before
let lastX; //Last cordinate of the line
let lastY; //Lst cordinate of the line
let x; //Current mouse cordinate
let y; // Current mouse cordinate

// Old code
setup = () => {
...
```

If these variables doesn't make sense now. It will be explain later in the code so don't worry! :balloon:

Now there is a problem. How do we know when the mouse button is clicked and the we should start drawing? :ant:

We are lucky! There is actually an event listener that listens for an event called ```mousedown```. We can implement this by calling it on the window like this:
```js
let drawtheLine = false; //As I said before
let lastX; //Last cordinate of the line
let lastY; //Lst cordinate of the line
let x; //Current mouse cordinate
let y; // Current mouse cordinate

window.onmousedown = () => drawtheLine = true; //When the mouse is pressed we should change the draw the line variable
window.onmouseup = () => drawtheLine = false; //Opposit.

```

Please note that there is also and ```onmouseup``` event which is called when the mouse button is no longer pressed. Read more about these here:
[onmousedown](https://www.w3schools.com/jsref/event_onmousedown.asp)
[onmouseup](https://www.w3schools.com/jsref/event_onmouseup.asp)

We can test if this works by typing ```console.log(drawtheLine)``` inside the draw function.

But we need one more event listener. The last event listener that we need is called ```onmousemove``` ([readmore](https://www.w3schools.com/jsref/event_onmousemove.asp)).
Let's implement that aswell.

```js
...
window.onmousedown = () => drawtheLine = true; //When the mouse is pressed we should change the draw the line variable
window.onmouseup = () => drawtheLine = false; //Opposit.
onmousemove = (event) => { x = event.clientX, y = event.clientY }
...
```

The ```onmousemove``` has a callback event which we can get the clientX and clientY attribute from. Those represent the X and Y position of the mouse on the page. For example (x: 300, y: 500). We get them from the event variable.

We should set the x and y variables to be equal to clientY and clientX. This is because as you may remember the variables X & Y should be the current mouse position.

---
Secound chapter done! :apple:
After every chapter you can see the files here in the folder if you've missed something.

[Next](https://github.com/ThunbergOlle/p5js-savedrawings-tutorial/blob/master/chap.3/chap.3.md)
