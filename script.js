// Get DOM elements
const startBtn = document.getElementById("start-btn"); // Element with ID ...
const canvas = document.getElementById("canvas"); 
const startScreen = document.querySelector(".start-screen"); // First line element with the class ...
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p"); // First <p> element

// Get 2D context
const ctx = canvas.getContext("2d"); // Obtains the rendering context and its drawing functions

// Set canvas dimensions to match window size
canvas.width = innerWidth;
canvas.height = innerHeight;

// Define gravity
const gravity = 0.5; // Simulate gravitational pull

// Detect collision with checkpoint is active
let isCheckpointCollisionDetectionActive = true;

// Adjust size proportionally to the window height
const proportionalSize = (size) => { 
  return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size; // If innerHeight is 500 or more, it returns orginal size
}

// Player class to create player object
class Player {
  constructor() {

    // Player's position
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    };

    // Player's velocity
    this.velocity = {
      x: 0,
      y: 0,
    };

    // Player's width and height
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
  }

  // Method to draw player 
  draw() {
    ctx.fillStyle = "#99c9ff"; // Colour of player
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // Draw player
  }

  // Method to update player's position and movement
  update() {
    this.draw(); // Draw player
    // Update player's position based on velocity
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Gravity and ground collision
    if (this.position.y + this.height + this.velocity.y <= canvas.height) { // Checks if player is within canvas height
      if (this.position.y < 0) { // If player is above the top of the canvas, reset position and apply gravity
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity; // Apply gravity to player
    } else {
      this.velocity.y = 0; // Stop player at the bottom
    }

    // Prevent player from moving out of the canvas on the left
    if (this.position.x < this.width) {
      this.position.x = this.width;
    }

    // Prevent player from moving out of the canvas on the left
    if (this.position.x >= canvas.width - this.width * 2) {
      this.position.x = canvas.width - this.width * 2;
    }
  }
}

// Platform class to create platform objects
class Platform {
  constructor(x, y) {
    // Platform's position 
    this.position = {
      x,
      y,
    };

    // Platform width and height
    this.width = 200;
    this.height = proportionalSize(40);
  }

  // Method to draw platform
  draw() {
    ctx.fillStyle = "#acd157"; // Colour of platform
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // Draw platform 
  }
}

// Checkpoint class to create checkpoint objects
class CheckPoint {
  // Checkpoint position
  constructor(x, y, z) {
    this.position = {
      x,
      y,
    };

    // Checkpoint width and height
    this.width = proportionalSize(40);
    this.height = proportionalSize(70);
    this.claimed = false; // To check if checkpoint is claimed
  };

  // Method to draw checkpoint
  draw() {
    ctx.fillStyle = "#f1be32"; // Colour of checkpoint
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // Draw checkpoint
  }

  // Method to claim checkpoint
  claim() {
    this.width = 0;
    this.height = 0;
    this.position.y = Infinity; // Move checkpoint off-screen
    this.claimed = true; // Mark checkpoint as claimed
  }
};

// Create new player
const player = new Player();

// Creates and position of platforms
const platformPositions = [
  { x: 500, y: proportionalSize(450) },
  { x: 700, y: proportionalSize(400) },
  { x: 850, y: proportionalSize(350) },
  { x: 900, y: proportionalSize(350) },
  { x: 1050, y: proportionalSize(150) },
  { x: 2500, y: proportionalSize(450) },
  { x: 2900, y: proportionalSize(400) },
  { x: 3150, y: proportionalSize(350) },
  { x: 3900, y: proportionalSize(450) },
  { x: 4200, y: proportionalSize(400) },
  { x: 4400, y: proportionalSize(200) },
  { x: 4700, y: proportionalSize(150) },
];

// Platform based on platformPositions
const platforms = platformPositions.map(
  (platform) => new Platform(platform.x, platform.y)
);

// Position of checkpoints
const checkpointPositions = [
  { x: 1170, y: proportionalSize(80), z: 1 },
  { x: 2900, y: proportionalSize(330), z: 2 },
  { x: 4800, y: proportionalSize(80), z: 3 },
];

// Checkpoint based on checkpointPositions
const checkpoints = checkpointPositions.map(
  (checkpoint) => new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z)
);

// Animation loop
const animate = () => {
  requestAnimationFrame(animate); // Next frame to be animated
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

  // Draw all platform
  platforms.forEach((platform) => {
    platform.draw();
  });

  // Draw all checkpoint
  checkpoints.forEach(checkpoint => {
    checkpoint.draw();
  });

  // Update player position and state
  player.update();

  // Handle player right movement
  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5; // Move player to the right
  } 
  
  // Handle player left movement
  else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -5; // Move player to the left
  } 
  
  // Stop player movement
  else {
    player.velocity.x = 0;

    // Move platform to simulate player movement if right key is press
    if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });

      // Move checkpoint to simulate player movement if right key is press
      checkpoints.forEach((checkpoint) => {
        checkpoint.position.x -= 5;
      });
    
    } 

    // Move platform to simulate player movement if left key is press
    else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });

      // Move checkpoint to simulate player movement if left key is press
      checkpoints.forEach((checkpoint) => {
        checkpoint.position.x += 5;
      });
    }
  }

  // Collision detection with platform
  platforms.forEach((platform) => {
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y, // Player above platform
      player.position.y + player.height + player.velocity.y >= platform.position.y, // Player falling onto platform
      player.position.x >= platform.position.x - player.width / 2, // Player is to right of the platform left side
      player.position.x <= platform.position.x + platform.width - player.width / 3, // Player is to left of the platform right side
    ];

    // Checks if collision dection rules are true
    if (collisionDetectionRules.every((rule) => rule)) {
      player.velocity.y = 0; // Stop player vertical movement
      return; // Exit the current iteration loop
    }

    // Platfor detection rule for player and platform 
    const platformDetectionRules = [
      player.position.x >= platform.position.x - player.width / 2, // Player's right side is to right of the platform left side
      player.position.x <= platform.position.x + platform.width - player.width / 3, // Player's left side is to left of platform right side
      player.position.y + player.height >= platform.position.y, // Player bottom is below the platform top
      player.position.y <= platform.position.y + platform.height, // Player top is above platform bottom
    ];

    // Checks if platform detection rule are true
    if (platformDetectionRules.every(rule => rule)) {
      player.position.y = platform.position.y + player.height; // Adjust player's position to be on top of platform
      player.velocity.y = gravity; // Apply gravity to player's vertical movement
    };
  });

  // Collision detection with player and checkpoint
  checkpoints.forEach((checkpoint, index, checkpoints) => {
    const checkpointDetectionRules = [
      player.position.x >= checkpoint.position.x, // Player's right side side is to the right of the checkpoint left side
      player.position.y >= checkpoint.position.y, // Player's bottom is below the checkpoint's top
      player.position.y + player.height <= checkpoint.position.y + checkpoint.height, // Player is above the checkpoint's bottom
      isCheckpointCollisionDetectionActive, // Checkpoint collision detection is active
      player.position.x - player.width <= checkpoint.position.x - checkpoint.width + player.width * 0.9, // Player left side is to the left of the checkpoint right side
      index === 0 || checkpoints[index - 1].claimed === true, // Check if first or previous checkpoint is claimed
    ];

    // Check if all checkpoint detection rules are true
    if (checkpointDetectionRules.every((rule) => rule)) {
      checkpoint.claim(); // Claim checkpoint

      // Check if it's the final checkpoint
      if (index === checkpoints.length - 1) {
        isCheckpointCollisionDetectionActive = false; // Deactivate checkpoint collision detection
        showCheckpointScreen("You reached the final checkpoint!"); // Display message
        movePlayer("ArrowRight", 0, false); // Stop player movement
      } 

      // Check if player is wihtin checkpoints range
      else if (player.position.x >= checkpoint.position.x && player.position.x <=checkpoint.position.x + 40) {
        showCheckpointScreen("You reached a checkpoint!") } // Show checkpoint screen
    };
  });
}
// Keep track of key states 
const keys = {
  rightKey: {
    pressed: false // Indicates if right key is pressed
  },
  leftKey: {
    pressed: false // Indicates if left key is pressed
  }
};

// Function to move player based on key input
const movePlayer = (key, xVelocity, isPressed) => {

  // If checkpoint collision detection isn't active, stop movement
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return;
  }

  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed; // Update left key state
      if (xVelocity === 0) {
        player.velocity.x = xVelocity; // Set player's horizontal velocity to 0 if xVelocity is 0
      }
      player.velocity.x -= xVelocity; // Move player to the left
      break;

    case "ArrowUp":
    case " ":

    case "Spacebar":
      player.velocity.y -= 8; // Move player up
      break;

    case "ArrowRight":
      keys.rightKey.pressed = isPressed; // Update right key state
      if (xVelocity === 0) {
        player.velocity.x = xVelocity; // Set player's horizontal velocity to 0 if xVelocity is 0
      }
      player.velocity.x += xVelocity; // Move player to the right
  }
}

// Function to start game
const startGame = () => {
  canvas.style.display = "block"; // Show canvas
  startScreen.style.display = "none"; // Hide start screen
  animate(); // Start animation loop
}

// Function to show checkpoint messages
const showCheckpointScreen = (msg) => {
  checkpointScreen.style.display = "block"; // Show checkpoint screen
  checkpointMessage.textContent = msg; // Set checkpoint message
  if (isCheckpointCollisionDetectionActive) {
    setTimeout(() => (checkpointScreen.style.display = "none"), 2000); // Hide checkpoint screen after 2 seconds if collision detection is active
  }
};

// Event listener to start button to start game
startBtn.addEventListener("click", startGame);

// Event listener for keydown events to move player
window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true); // Move player with a velocity of 8 when key is pressed
});

// Event listener keyup events to stop player
window.addEventListener("keyup", ({ key }) => {
  movePlayer(key, 0, false); // Stop player movement when key is released
});