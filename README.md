<h1 align="center">
  Platformer Game
</h1>

<p>
  In this platformer game project, I continued to learn about classes, objects, inheritance, and encapsulation. Furthermore, I learnt how to design and organize game elements efficiently and gain insights into problem-solving and code reusability.
</p>

## Preview
https://github.com/user-attachments/assets/96dc1db6-3a3e-435b-b4ff-6d4e02d060f6

## Steps
**S1**<br>
In this project, you are going to learn intermediate Object Oriented Programming principles by building a platformer game. All of the HTML and CSS have been provided for you.<br>

Start by using `document.getElementById()` to get the `#start-btn` and `#canvas` elements. Store them in `const` variables named `startBtn` and `canvas` respectively.

```js
const startBtn = document.getElementById("start-btn");
const canvas  = document.getElementById("canvas");
```

**S2**<br>
Next, you will need to use `document.querySelector` to get the `.start-screen` and `.checkpoint-screen` elements. Store them in `const` variables called `startScreen` and `checkpointScreen` respectively.

```js
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
```

**S3**<br>
The next step is to target the paragraph element inside the `.checkpoint-screen` element.<br>

Use `document.querySelector` and the child combinator `>` to target the paragraph element. Assign that value to a `const` variable called `checkpointMessage`.

```js
const checkpointMessage = document.querySelector(".checkpoint-screen > p")
```

**S4**<br>
Before you can begin building out the functionality for the game, you will need to set up the ability to add 2D graphics.<br>

The <i>Canvas API</i> can be used to create graphics in games using JavaScript and the HTML `canvas` element. You will need to use the getContext method which will provide the context for where the graphics will be rendered.

<b>`Example Code:`</b><br>
`canvas.getContext("2d");`<br>

Assign that `getContext` method to a `const` variable called `ctx`.

```js
const ctx = canvas.getContext("2d");
```

**S5**<br>
The `canvas` element has a `width` property which is a positive number that represents the width of the canvas.<br>

<b>`Example Code:`</b><br>
`canvas.width`<br>

Below your `const` declarations, append the `width` property to the `canvas` variable.

```js
canvas.width
```

**S6**<br>
The `innerWidth` property is a number that represents the interior width of the browser window. Assign `innerWidth` to `canvas.width`.

```js
canvas.width = innerWidth;
```

**S7**<br>
The `innerHeight` property is a number that represents the interior height of the browser window. Below your `canvas.width`, append the `height` property to the `canvas` variable and assign it `innerHeight`.

```js
canvas.height = innerHeight;
```

**S8**<br>
In your platformer game, the main player will need to jump between the different platforms. When the player jumps, you will need to apply gravity to bring them back down.<br>

Create a new `const` variable called `gravity` and assign it the number `0.5`.

```js
const gravity = 0.5;
```

**S9**<br>
In the game, the player will have the opportunity to cross different checkpoints. You will need to keep track of the status for the checkpoint collision detection.

Use `let` to create a new variable called `isCheckpointCollisionDetectionActive` and assign it the value of `true`.

```js
let isCheckpointCollisionDetectionActive = true;
```

**S10**<br>
As you are designing the game, you will need to make sure that the size of the elements in the game are responsive and adapt to different screen sizes.<br>

Start by creating an arrow function called `proportionalSize` that takes in a `size` parameter.

```js
const proportionalSize = (size) => {};
```

**S11**<br>
The `width` and the `height` of the main player, platforms and checkpoints will be proportional sized relative to the `innerHeight` of the browser screen. The goal is to make the game responsive and visually consistent across different screen sizes.<br>

Inside your `proportionalSize` function, you will need to return a ternary that checks if `innerHeight` is less than `500`. If so, return `Math.ceil((size / 500) * innerHeight)`, otherwise return `size`.

```js
const proportionalSize = (size) => {
  return innerHeight <500 ? Math.ceil((size / 500) * innerHeight) : size;
};
```

**S12**<br>
The next step is to define some characteristics for the main player of the game. Start by creating a new `class` called `Player`.

```js
class Player {}
```

**S13**<br>
Inside your `Player` class, you will need to define the player's position, velocity, width, and height values. All of these values will be defined inside the constructor method.<br>

Create an empty constructor inside your `Player` class.

```js
class Player {
  constructor() {}
}
```

**S14**<br>
Inside your constructor, use the `this` keyword to set the `position` property to an empty object.

```js
this.position = {};
```

**S15**<br>
Inside your `position` object, add a new key called `x` with a value of `proportionalSize(10)`. After that, add another key called `y` with a value of `proportionalSize(400)`.<br>

You need to use the `proportionalSize` function here to make sure that the player's position is always proportional to the screen size. This is important because you want the player to be able to move around the screen regardless of the screen size.

```js
this.position = {
    x: proportionalSize(10),
    y: proportionalSize(400)
};
```

**S16**<br>
Below your `position` object, use the `this` keyword to set the `velocity` property to an object. Inside that new `velocity` object, create a key called `x` with a value of `0` and a new key called `y` with a value of `0`.<br>

The `velocity` property will be used to store the player's speed in the `x` and `y directions.

```js
this.velocity = {
    x: 0,
    y: 0
}
```

**S17**<br>
Below your `velocity` object, use the `this` keyword to set the `width` property to `proportionalSize(40)`. Below your `width` property, use the `this` keyword to set the `height` property to `proportionalSize(40)`.<br>

You are using the `proportionalSize()` function here to set the `width` and `height` properties of your class to be proportional to the height of the screen.

```js
this.width = proportionalSize(40);
this.height  = proportionalSize(40);
```

**S18**<br>
The next step is to create a `draw()` method, which will be responsible for creating the player's `width`, `height`, `position`, and fill color. Below your constructor, create an empty `draw()` method.

```js
draw() {}
```

**S19**<br>
Now, you need to set the color for your player. Inside the `draw()` method, assign the string `"#99c9ff"` to `ctx.fillStyle`.

```js
draw() {
  ctx.fillStyle = "#99c9ff";
}
```

**S20**<br>
Below your `ctx.fillStyle`, you need to create the player's shape by calling the `fillRect()` method on the `ctx` object which you instantiated earlier.<br>

<b>`Example Code`</b><br>
`fillRect(x, y, width, height)`<br>

Inside the `fillRect()` method add the `this.position.x`, `this.position.y`, `this.width` and `this.height` values.

```js
ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
```

**S21**<br>
The next step is to create an `update()` method which will be responsible for updating the player's position and velocity as it moves throughout the game. Below your `draw()` method, create an empty `update()` method.

```js
update() {}
```

**S22**<br>
Inside the `update()` method, call the `draw()` method to ensure that the player is continually drawn on the screen as the game updates. Don't forget to include the `this` keyword.

```js
update() {
  this.draw();
}
```

**S23**<br>
When the player moves to the right, you will need to adjust its velocity. Use the addition assignment operator to add the velocity's `x` coordinate to the player's `x` position. Don't forget to include the `this` keyword for the velocity and position.

```js
this.position.x += this.velocity.x;
```

**S24**<br>
When the player jumps up, you will need to add the logic for adjusting its velocity. Use the addition assignment operator to add the velocity's `y` coordinate to the player's `y` position. Don't forget to include the `this` keyword for the velocity and position.

```js
this.position.y += this.velocity.y;
```

**S25**<br>
Right now, when the player jumps up, it is possible for it to move past the height of the canvas. To fix that, you will need to add a condition to stop the player from falling past the height of the canvas. Create an empty `if` statement that checks if the sum of the player's `y` position, height, and `y` velocity is less than or equal to the height of the canvas.

```js
if (this.position.y + this.height + this.velocity.y <= canvas.height) {}
```

**S26**<br>
In the `if` statement, add another `if` statement to check if the player's `y` position is less than `0`.

```js
if (this.position.y + this.height + this.velocity.y <= canvas.height) {
  if (this.position.y < 0) {}
}
```

**S27**<br>
Inside the inner `if` statement, assign 0 to the player's `y` position.

```js
if (this.position.y < 0) {
  this.position.y = 0;
}
```

**S28**<br>
Below the `this.position.y = 0`, assign `gravity` to the velocity's `y` position.

```js
this.velocity.y = gravity;
```

**S29**<br>
Below your inner `if` statement, use the addition assignment operator to add `gravity` to the `y` velocity.

```js
this.velocity.y += gravity;
```

**S30**<br>
Add an `else` clause that assigns `0` to `this.velocity.y`.

```js
else {
  this.velocity.y = 0;
}
```

**S31**<br>
The final condition you need to add inside the `Player` class is to ensure that the player stays within the boundaries of the canvas screen and doesn't move too far off to the left. Create an `if` statement, to check if the player's `x` position is less than the width.

```js
if (this.position.x < this.width) {}
```

**S32**<br>
Inside the `if` statement, assign the width to the player's `x` position.

```js
if (this.position.x < this.width) {
  this.position.x = this.width;
}
```

**S33**<br>
For the last condition, you will need to check if the player's `x` position has exceeded the right edge of the canvas. If it has, you will need to set the player's `x` position to the maximum value so the player does not accidentally go off screen to the right.<br>

Inside your `update` method, create an `if` statement that checks if `this.position.x >= canvas.width - this.width * 2`.

```js
if (this.position.x >= canvas.width - this.width * 2) {}
```

**S34**<br>
Inside your `if` statement, assign `canvas.width - this.width * 2` to `this.position.x`. This will ensure that the player's `x` position will never exceed the right edge of the canvas. 

```js
if (this.position.x >= canvas.width - this.width * 2) {
  this.position.x = canvas.width - this.width * 2;
}
```

**S35**<br>
The next step is to use the `new` keyword to create a new instance of the `Player` object and assign it to a new `const` variable called `player`.

```js
const player = new Player();
```

**S36**<br>
Now it is time to see your new player drawn on the screen. Start by creating an empty arrow function called `startGame`.

```js
const startGame = () => {}
```

**S37**<br>
Inside your `startGame` function, you will need to display the `canvas` element and hide the `startScreen` container. Use `canvas.style.display` to change the display value to `"block"`. Below that, use `startScreen.style.display` to change the display value to `"none"`.

```js
const startGame = () => {
  canvas.style.display = "block";
  startScreen.style.display = "none";
}
```

**S38**<br>
To visualize the player on the screen, you need to draw it on the canvas. Inside the `startGame` function, call the `.draw()` method of your `player` object.

```js
player.draw();
```

**S39**<br>
Now it's time to add the functionality for the start game button. Add an `addEventListener` to the `startBtn` and pass in a `click` event and a reference to the `startGame` function. Click on the start game button, and you should see a light blue square on the screen which represents the main player.

```js
startBtn.addEventListener("click", startGame);
```

**S40**<br>
Now that you can see the player on the screen, it is time to start adding the functionality for moving the player across the screen. Create a new empty arrow function called `animate`.

```js
const animate = () => {}
```

**S41**<br>
The <i>requestAnimationFrame()</i> web API, takes in a callback and is used to update the animation on the screen. The `animate` function will be responsible for updating the player's position and continually drawing it on the canvas.<br>

Inside the `animate` function, call the `requestAnimationFrame()` API and pass `animate` as the argument.

```js
const animate = () => {
  requestAnimationFrame(animate);
}
```

**S42**<br>
As the player moves through the game, you will need to clear the canvas before rendering the next frame of the animation. You can use the <i>clearRect()</i> Web API to accomplish this. It takes in an `x`, `y`, `width`, and `height` arguments.<br>

Below your `requestAnimationFrame`, call the `clearRect()` method on the `ctx` variable and pass in `0, 0, canvas.width, canvas.height` as the arguments.

```js
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

**S43**<br>
The next step is to update the player's position as it moves throughout the game. Below your `ctx.clearRect()`, call the `update()` method on the player.

```js
player.update();
```

**S44**<br>
To manage the player's movement in the game, you will need to monitor when the left and right arrow keys are pressed. Create a new `const` variable called `keys` and assign it an empty object.

```js
const keys = {}
```

**S45**<br>
Inside the `keys` object, add a new key called `rightKey` and assign it an object with the key-value pair of `pressed: false`. Below the `rightKey` object, create a `leftKey` object and assign it an object with the key-value pair of `pressed: false`.

```js
const keys = {
  rightKey: {pressed: false},
  leftKey: {pressed: false}
}

```

**S46**<br>
The next step is to add the logic for increasing or decreasing a player's velocity based on if they move to the left or right of the screen.<br>

Inside the `animate` function, create an `if` statement where the condition checks if the right key was pressed and the player's `x` position is less than `proportionalSize(400)`. You need to use the `proportionalSize` function here to make sure the player's `x` position is always proportional to the screen size.

```js
if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {}
```

**S47**<br>
Inside the `if` statement, assign the number `5` to the player's `x` velocity.

```js
if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
  player.velocity.x = 5;
}
```

**S48**<br>
Add an `else if` statement where the condition checks if the left key was pressed and the player's `x` position is greater than `proportionalSize(100)`. You need to use the `proportionalSize` function here to make sure the player's `x` position is always proportional to the screen size.<br>

Inside the `else if` statement, assign the number `-5` to the player's `x` velocity.

```js
else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
  player.velocity.x = -5;
}
```

**S49**<br>
Add an `else` clause that assigns the number `0` to the player's `x` velocity.

```js
else {
  player.velocity.x = 0;
}
```

**S50**<br>
The next step is to add the functionality that will be responsible for moving the player across the screen. Create a new arrow function called `movePlayer` that has three parameters called `key`, `xVelocity`, `isPressed`.

```js
const movePlayer = (key, xVelocity, isPressed) => {}
```

**S51**<br>
In the game, the player will interact with different checkpoints. If the `isCheckpointCollisionDetectionActive` is false, then you will need to stop the player's movements on the `x` and `y` axes.<br>

Start by creating an `if` statement where the condition checks if the `isCheckpointCollisionDetectionActive` is false. Remember that you can use the `!` operator to check if the variable is false.

```js
const movePlayer = (key, xVelocity, isPressed) => {
  if (!isCheckpointCollisionDetectionActive) {}
}
```

**S52**<br>
Inside the `if` statement, set the player's `x` velocity to `0` and the player's `y` velocity to `0`. Below that, add a `return` statement.

```js
if (!isCheckpointCollisionDetectionActive) {
  player.velocity.x = 0;
  player.velocity.y = 0;
  return player
}
```

**S53**<br>
Below the `if` statement, create a `switch` statement with a value of `key`.

```js
switch (key) {}
```

**S54**<br>
The first case you will want to add is when the left arrow key is pressed. Inside the `switch` statement, add a new case called `"ArrowLeft"`.

```js
switch (key) {
  case "ArrowLeft":
}
```

**S55**<br>
Inside the `case` clause, assign `isPressed` to `keys.leftKey.pressed`. Below that, add an `if` statement that checks if `xVelocity` is equal to 0. If so, assign the `xVelocity` to `player.velocity.x`.

```js
switch (key) {
  case "ArrowLeft":
    keys.leftKey.pressed = isPressed;
    if (xVelocity === 0) {
      player.velocity.x = xVelocity
    }
}
```

**S56**<br>
Below your `if` statement, use the subtraction assignment operator to subtract the `xVelocity` from `player.velocity.x`. To close out this case, make sure to add a `break` statement.

```js
player.velocity.x -= xVelocity
break;
```

**S57**<br>
The player can jump up by using the up arrow key or the spacebar.<br>

Add three new cases for `"ArrowUp"`, `" "`, and `"Spacebar"`. Remember that you can group cases together when they share the same operation. Inside those cases, use the subtraction assignment operator to subtract `8` from `player.velocity.y`.<br>

To close out these cases, make sure to add a `break` statement.

```js
case "ArrowUp":
case " ":
case "Spacebar":
  player.velocity.y -= 8;
```

**S58**<br>
The last case you will need to add will be for "ArrowRight". Inside that case, assign `isPressed` to `keys.rightKey.pressed`.<br>

Add an if statement that checks if `xVelocity` is equal to 0. If so, assign the `xVelocity` to `player.velocity.x`. Below that `if` statement, use the addition assignment operator to assign the `xVelocity` to `player.velocity.x`.

```js
case "ArrowRight":
  keys.rightKey.pressed = isPressed;
  if (xVelocity === 0) {
    player.velocity.x = xVelocity;
    }
  player.velocity.x += xVelocity;
```

**S59**<br>
Now it is time to add the event listeners that will be responsible for calling the `movePlayer` function. Start by adding an `addEventListener` to the global `window` object.<br>

For the arguments, pass in the `keydown` event and an arrow function that uses the destructuring assignment to get the `key` property from the `event` object in the event listener parameter. Here is the syntax for using the destructuring assignment in the parameter list of the arrow function

<b>`Example Code:`</b><br>
`btn.addEventListener('click', ({ target }) => {`<br>
  `console.log(target);`<br>
`});`<br>

```js
window.addEventListener("keydown", ({key}) => {});
```

**S60**<br>
Inside the arrow function, call the `movePlayer` function and pass in `key`, `8`, and `true` as arguments.

```js
window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true);
});
```

**S61**<br>
Add another `addEventListener` to the global `window` object and pass in the `keyup` event and use destructuring to pass in the `key` property from the event.

```js
window.addEventListener("keyup", ({key}) => {});
```

**S62**<br>
Inside the callback function, call the `movePlayer` function and pass in `key`, `0`, and `false` as arguments.

```js
movePlayer(key, 0, false);
```

**S63**<br>
Before you can start moving your player across the screen, you will need to use the `animate` function. Inside the `startGame` function, delete `player.draw()` and call the `animate` function.<br>

Click the Start Game button and use the left and right arrow keys to move the player across the screen. You can also use the spacebar or the up arrow key to jump up.

```js
animate();
```

**S64**<br>
The next step is to create the platforms and platform logic. Start by creating a new `Platform` class.

```js
class Platform {}
```

**S65**<br>
Inside the `Platform` class, create a constructor that takes in the `x` and `y` coordinates.

```js
class Platform {
  constructor (x, y) {}
}
```

**S66**<br>
When working with objects where the property name and value are the same, you can use the shorthand property name syntax. This syntax allows you to omit the property value if it is the same as the property name.<br>

<b>`Example Code:`</b><br>
`// using shorthand property name syntax`<br>
`obj = {`<br>
  `a, b, c`<br>
`}`<br>

The following code is the same as:<br>
<b>`Example Code:`</b><br>
`obj = {`<br>
  `a: a,`<br>
  `b: b,`<br>
  `c: c`<br>
`}`<br>

Inside the constructor, add `this.position` and assign it an object with the `x` and `y` coordinates. Make sure to use the shorthand property syntax .

```js
constructor(x, y) {
  this.position = {x, y}
}
```

**S67**<br>
Next, add a `width` property to the constructor and assign it the number 200. Don't forget to use the `this` keyword to access the properties.

```js
this.width = 200;
```

**S68**<br>
Below that, add a `height` property and assign it the number `proportionalSize(40)`. You need to use the `proportionalSize()` function to make sure the `height` is proportional to the screen size. Remember to use the this keyword to access the properties.

```js
this.height = proportionalSize(40);
```

**S69**<br>
Next, add a `draw` method to the `Platform` class.

```js
draw() {}
```

**S70**<br>
Inside the `draw` method, assign `"#acd157"` to the `ctx.fillStyle`. Below that, call the `ctx.fillRect` method and pass in the `x` and `y` coordinates, along with the `width` and `height` properties. Remember to include `this` before each property.

```js
ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
```

**S71**<br>
The next step will be to create a list of positions for the platforms. Start by creating a new `const` variable called `platformPositions` and assign it an empty array.

```js
const platformPositions = []
```

**S72**<br>
Inside the `platformPositions`, you will need to add the list of positions for the platforms. Add a new object that has an `x` property with a value of `500` and a `y` property with a value of `proportionalSize(450)`.

```js
const platformPositions = [
  { x: 500, y: proportionalSize(450) }
];

```

**S73**<br>
Below that, add another object with an `x` property with a value of `700` and a `y` property with a value of `proportionalSize(400)`.

```js
{ x: 700, y: proportionalSize(400) }
```

**S74**<br>
Add the rest of the platform positions to the `platformPositions` array with the following values:

<b>`Example Code:`</b><br>
`x=850  y=proportionalSize(350)`<br>
`x=900  y=proportionalSize(350)`<br>
`x=1050 y=proportionalSize(150)`<br>
`x=2500 y=proportionalSize(450)`<br>
`x=2900 y=proportionalSize(400)`<br>
`x=3150 y=proportionalSize(350)`<br>
`x=3900 y=proportionalSize(450)`<br>
`x=4200 y=proportionalSize(400)`<br>
`x=4400 y=proportionalSize(200)`<br>
`x=4700 y=proportionalSize(150)`<br>

```js
{ x: 850, y: proportionalSize(350) },
{ x: 900, y: proportionalSize(350) },
{ x: 1050, y: proportionalSize(150) },
{ x: 2500, y: proportionalSize(450) },
{ x: 2900, y: proportionalSize(400) },
{ x: 3150, y: proportionalSize(350) },
{ x: 3900, y: proportionalSize(450) },
{ x: 4200, y: proportionalSize(400) },
{ x: 4400, y: proportionalSize(200) },
{ x: 4700, y: proportionalSize(150) }
```

**S75**<br>
The next step is to create a list of new platform instances using the `Platform` class. You will later reference this list to draw the platforms on the canvas. Start by creating a new `const` variable called `platforms` and assign it `platformPositions.map()`.

```js
const platforms = platformPositions.map();
```

**S76**<br>
In the map callback function, pass in `platform` for the parameter and implicitly return the creation of a new `Platform` instance with the `platform.x` and `platform.y` values passed in as arguments.

```js
const platforms = platformPositions.map(
  (platform) => new Platform(platform.x, platform.y)
);
```

**S77**<br>
Inside the `animate` function, you will need to draw each of the platforms onto the canvas. <br>

Add a `forEach` loop that iterates through the `platforms` array. Inside the callback function, add a `platform` parameter and for the body of the function call the `draw` method on each `platform`.

```js
platforms.forEach((platform) => {
  platform.draw()
})
```

**S78**<br>
If you try to start the game, you will notice that the platforms are rendered on the screen. But as the player moves to the right, the platform does not move with it.<br>

To fix this issue, you will need to update the platform's `x` position as the player moves across the screen. Inside the `animate` function, add a condition to check if the right key was pressed and if the `isCheckpointCollisionDetectionActive` is true.

```js
if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {}
```

**S79**<br>
Inside your condition, add a `forEach` loop to iterate through the `platforms` array. Inside the loop, use the subtraction assignment operator to subtract 5 from the platform's `x` position.

```js
if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
  platforms.forEach((platform) => {platform.position.x -= 5})
}
```

**S80**<br>
Next, add an `else if` statement to check if the left key was pressed and if `isCheckpointCollisionDetectionActive` is true.<br>

Inside that condition, add a `forEach` loop to iterate through the `platforms` array. Inside the loop, use the addition assignment operator to add 5 to the platform's `x` position.

```js
else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
  platforms.forEach((platform) => {
    platform.position.x += 5;
  });
}
```

**S81**<br>
When you start the game, you will notice that the position of the platforms is animating alongside the player. But if you try to jump below one of the platforms, then you will jump right through it.<br>

To fix this issue, you will need to add collision detection logic to the game. Start by calling the `forEach` method on the `platforms` array. For the callback function pass in `platform` as the parameter.

```js
platforms.forEach((platform) => {});
```

**S82**<br>
Inside the callback function, create a new `const` variable called `collisionDetectionRules` and assign it an empty array. Inside that array, add a boolean expression that checks whether the player's `y` position plus the player's height is less than or equal to the platform's `y` position.

```js
platforms.forEach((platform) => {
  const collisionDetectionRules = [
    player.position.y + player.height <= platform.position.y
  ]
});
```

**S83**<br>
Add another boolean expression that checks if the sum of the player's `y` position, height, and `y` velocity is greater than or equal to the platform's `y` position.

```js
player.position.y + player.height + player.velocity.y >= platform.position.y
```

**S84**<br>
Below that boolean expression, add another boolean expression that checks if the player's `x` position is greater than or equal to the platform's `x` position minus half of the player's width.

```js
player.position.x >= platform.position.x - player.width / 2
```

**S85**<br>
Add one last boolean expression that checks if the player's `x` position is less than or equal to the sum of the platform's `x` position plus the platform's width minus one-third of the player's width.

```js
player.position.x <= platform.position.x + platform.width - player.width / 3
```

**S86**<br>
Next, add an `if` statement that checks if every rule in the `collisionDetectionRules` array is truthy. Make sure to use the `every` method for this. Inside the body of the `if` statement, assign the number 0 to the player's `y` velocity followed by a `return` statement.

```js
if (collisionDetectionRules.every((rule) => rule)) {
  player.velocity.y = 0;
  return 
}
```

**S87**<br>
Create a new `const` variable called `platformDetectionRules` and assign it an empty array.

```js
const platformDetectionRules = [];
```

**S88**<br>
Inside that array, add a boolean expression that checks if the player's `x` position is greater than or equal to the platform's `x` position minus half of the player's width. 

```js
player.position.x >= platform.position.x - player.width / 2
```

**S89**<br>
Below that boolean expression, add another boolean expression that checks if the player's `x` position is less than or equal to the sum of the platform's `x` position plus the platform's width minus one-third of the player's width.

```js
player.position.x <= platform.position.x + platform.width - player.width / 3
```

**S90**<br>
Add another boolean expression that checks if the player's `y` position plus the player's height is greater than or equal to the platform's `y` position.<br>

Below that, add another boolean expression that checks if the player's `y` position is less than or equal to the sum of the platform's `y` position plus the platform's height.

```js
player.position.y + player.height >= platform.position.y,
player.position.y <= platform.position.y + platform.height
```

**S91**<br>
Add an `if` statement that checks if every platform detection rule is `true`. Make sure to use the `every` method for this.

```js
if (platformDetectionRules.every(rule => rule)) {}
```

**S92**<br>
Inside the body of the `if` statement, assign `platform.position.y + player.height` to the player's y position. Then, assign `gravity` to the player's `y` velocity. Now, when you start the game, you will be able to jump underneath the platform and collide with it.

```js
if (platformDetectionRules.every(rule => rule)) {
  player.position.y = platform.position.y + player.height;
  player.velocity.y = gravity;
};
```

**S93**<br>
The last portion of the project is to add the logic for the checkpoints. When a player collides with a checkpoint, the checkpoint screen should appear. Start by creating a new `class` called `CheckPoint`.

```js
class CheckPoint {}
```

**S94**<br>
Inside that `CheckPoint` class, add a constructor with `x`, `y` and `z` parameters.

```js
constructor(x, y, z) {}
```

**S95**<br>
Inside the constructor, create an object with `x` and `y` parameters and assign it to the `position`. Remember to use the `this` keyword to access the properties.

```js
constructor(x, y, z) {
  this.position = {
    x,
    y,
  }
};
```

**S96**<br>
The next step is to add the `width` and `height` to the `CheckPoint` class. The `width` and `height` should be `proportionalSize(40)` and `proportionalSize(70)` respectively.

```js
this.width = proportionalSize(40);
this.height = proportionalSize(70);
```

**S97**<br>
Below the checkpoint's `width` and `height` properties, use the `this` keyword to add a new `claimed` property and assign it the value of `false`. This property will be used to check if the player has reached the checkpoint.

```js
this.claimed = false;
```

**S98**<br>
Now you need to create a `draw` method for the `CheckPoint` class. Inside the `draw` method, add a `fillStyle` property to the `ctx` object and set it to `"#f1be32"`.<br>

Below the `fillStyle` property, use the `fillRect` method on the `ctx` object and pass in the `x`, `y`, `width`, and `height` properties as arguments.

```js
draw() {
  ctx.fillStyle = "#f1be32";
  ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}
```

**S99**<br>
The last method you will need to add to the `CheckPoint` class is the `claim` method. Inside the `claim` method, assign `0` to the `width` and `height` properties of the `CheckPoint` instance.<br>

Below those properties, assign `Infinity` to the `y` position. Lastly, assign `true` to the `claimed` property.

```js
claim () {
  this.width = 0;
  this.height = 0;
  this.position.y = Infinity;
  this.claimed = true;
}
```

**S100**<br>
Use `const` to create a new array called `checkpointPositions`. Inside that array, add an object for each of the following positions<br>

<b>`Example Code:`</b><br>
`x: 1170, y: proportionalSize(80), z: 1`<br>
`x: 2900, y: proportionalSize(330), z: 2`<br>
`x: 4800, y: proportionalSize(80), z: 3`<br>

```js
const checkpointPositions = [
  { x: 1170, y: proportionalSize(80), z: 1 },
  { x: 2900, y: proportionalSize(330), z: 2 }, 
  { x: 4800, y: proportionalSize(80), z: 3 } 
]
```

**S101**<br>
The next step is to create a list of new `checkpoint` instances using the `CheckPoint` class. Start by creating a new `const` variable called `checkpoints` and assign it `checkpointPositions.map()`.<br>

For the `map` callback function, pass in `checkpoint` for the parameter and implicitly return the creation of a new `CheckPoint` instance with the `checkpoint.x`, `checkpoint.y` and `checkpoint.z` values passed in as arguments.

```js
const checkpoints = checkpointPositions.map((checkpoint) => new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z))
```

**S102**<br>
Inside the animate function, you will need to draw each of the checkpoints onto the canvas. Add a `forEach` loop that iterates through the `checkpoints` array.<br>

Inside the callback function, add a `checkpoint` parameter and for the body of the function call the `draw` method on each `checkpoint`.

```js
checkpoints.forEach((checkpoint) => {
  checkpoint.draw();
})
```

**S103**<br>
Inside your condition, add a `forEach` loop to iterate through the `checkpoints` array. Use `checkpoint` as the parameter name for the callback function. Inside the loop, use the subtraction assignment operator to subtract 5 from the checkpoints's `x` position.

```js
checkpoints.forEach((checkpoint) => {
  checkpoint.position.x -= 5;
})
```

**S104**<br>
Inside your `else if` statement, add a `forEach` loop to iterate through the `checkpoints` array. Use `checkpoint` as the parameter name for the callback function. Inside the loop, use the addition assignment operator to add 5 to the checkpoints's x position.

```js
checkpoints.forEach((checkpoint) => {
  checkpoint.position.x += 5;
})
```

**S105**<br>
The next step is to create a function that will show the checkpoint message when the player reaches a checkpoint. Create a new arrow function called `showCheckpointScreen` that takes in a `msg` parameter.

```js
const showCheckpointScreen = (msg) => {}
```

**S106**<br>
Inside the `showCheckpointScreen` function, set the `checkpointScreen` `style.display` property to `"block"`.

```js
checkpointScreen.style.display = "block";
```

**S107**<br>
Set the `checkpointMessage's` `textContent` property to the `msg` parameter.

```js
checkpointMessage.textContent = msg;
```

**S108**<br>
Create an `if` statement that checks if `isCheckpointCollisionDetectionActive` is true.<br>

Inside the `if` statement, add a `setTimeout()` that takes in a callback function and a delay of 2000 milliseconds.<br>

For the callback function, it should set the `checkpointScreen` `style.display` property to `"none"`.

```js
if (isCheckpointCollisionDetectionActive) {
  setTimeout(() => (checkpointScreen.style.display = "none"), 2000)
}
```

**S109**<br>
The last few steps involve updating the `animate` function to display the checkpoint screen when the player reaches a checkpoint. Start by adding a `forEach` to the `checkpoints` array. For the callback function, use `checkpoint`, `index` and `checkpoints` for the parameters.

```js
checkpoints.forEach((checkpoint, index, checkpoints) => {})
```

**S110**<br>
Create a new `const` variable called `checkpointDetectionRules` and assign it an empty array. Inside that array, add a boolean expression that checks if the player's `position.x` is greater than or equal to the checkpoint's `position.x`.

```js
checkpoints.forEach((checkpoint, index, checkpoints) => {
  const checkpointDetectionRules = [
    player.position.x >= checkpoint.position.x
  ] 
});
```

**S111**<br>
Add another boolean expression that checks if the player's `position.y` is greater than or equal to the checkpoint's `position.y`.<br>

Below that statement, add another boolean expression that checks if the player's `position.y` plus the player's `height` is less than or equal to the checkpoint's `position.y` plus the checkpoint's `height`.<br>

Below that statement, add the `isCheckpointCollisionDetectionActive` variable.

```js
player.position.y >= checkpoint.position.y,
player.position.y + player.height <= checkpoint.position.y + checkpoint.height,
isCheckpointCollisionDetectionActive
```

**S112**<br>
You will need to add two more checkpoint detection rules to the `checkpointDetectionRules` array.<br>

The first rule should check if the player's `x` position minus the player's `width` is less than or equal to the checkpoint's `x` position minus the checkpoint's `width` plus the player's `width` multiplied by `0.9`. This will ensure that the player is close enough to the checkpoint to claim it.<br>

The second rule should check if index is strictly equal to `0` or if the previous checkpoint(`checkpoints[index - 1].claimed`) is true. This will ensure that the player can only claim the first checkpoint or a checkpoint that has already been claimed.

```js
player.position.x - player.width <= checkpoint.position.x - checkpoint.width + player.width * 0.9,
index === 0 || checkpoints[index - 1].claimed === true
```

**S113**<br>
Next, add an `if` statement that checks if every rule in the `checkpointDetectionRules` array is true. Make sure to use the `every` method for this.

```js
if (checkpointDetectionRules.every(rule => rule)) {}
```

**S114**<br>
Inside the `if` statement, call the `claim` method on the `checkpoint` object.

```js
checkpoint.claim()
```

**S115**<br>
The next step is to write a condition that checks if the player has reached the last checkpoint. Start by adding an `if` statement that checks if the `index` is equal to the length of the `checkpoints` array minus one.

```js
if (index === checkpoints.length - 1) {}
```

**S116**<br>
Inside the condition, you want to first set the `isCheckpointCollisionDetectionActive` to false. Then you will need to call the `showCheckpointScreen` function and pass in the string `"You reached the final checkpoint!"` as an argument.<br>

Lastly, you will need to call the `movePlayer` function and pass in the string `"ArrowRight"` as the first argument, the number `0` as the second argument, and the boolean `false` as the third argument.

```js
isCheckpointCollisionDetectionActive = false;
showCheckpointScreen("You reached the final checkpoint!");
movePlayer("ArrowRight", 0, false);
```

**S117**<br>
The last thing you will need to do is add an `else if` statement. Your condition should check if the player's `x` position is greater than or equal to the checkpoint's `x` position and less than or equal to the checkpoint's `x` position plus `40`.<br>

Inside the body of the `else if` statement, you will need to call the `showCheckpointScreen` function and pass in the string `"You reached a checkpoint!"` as an argument. Congratulations! You have completed the platformer game project!

```js
else if (player.position.x >= checkpoint.position.x && player.position.x <=checkpoint.position.x + 40) {
  showCheckpointScreen("You reached a checkpoint!") 
}
```
