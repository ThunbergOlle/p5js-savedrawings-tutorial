#### Starting with the basics. :heart:

Let's start simple by importing and creating a simple index & sketch file.

__index.html__
```html
<!DOCTYPE html>
<html>


<head>
    <title>ML learning tensorflow.js</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
    <link rel="stylesheet" href="">
    <script src="sketch.js"></script>
</head>

<body style="margin: 0; padding: 0;">
<button onclick="saveDrawing(drawing)">Save</button>
<br>



</body>

</html>
```

Notice that there is a button which has an onclick event attached to it. This will be needed.

__sketch.js__
Let's start simple with creating a setup function that p5 will call when the page loads. Inside the function there is a 
```js 
createCanvas(windowWidth, WindowHeight
```
That simple creates the canvas and after that we chose a background width the color 255.

It should look like this:
```js
setup = () => {
    createCanvas(windowWidth, windowHeight)
    background(255);
}
```
When the setup function has been created we define the draw function like this:
```js
draw = () => {
    
}
```

First chapter done! :apple:
After every chapter you can see the files here in the folder if you've missed something.

[Next](https://www.google.com)
