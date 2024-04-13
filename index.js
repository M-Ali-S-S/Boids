const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Array to store objects
const objects = [];

// Function to create objects
function createObject(x, y, dx, dy, imageSrc) {
    const obj = {
        x: x,
        y: y,
        dx: dx,
        dy: dy,
        image: new Image(),
    };
    obj.image.src = imageSrc;
    objects.push(obj);
}

// Create multiple objects
for (let i = 0; i < 50; i++) {
    createObject(Math.random()*200, Math.random()*200, Math.random(), Math.random(), 'fish1.gif');    
}

// Function to draw an object
function spawnFish(obj) {
    ctx.drawImage(obj.image, obj.x, obj.y, 40, 20); // Draw the image at position (x, y) with width and height

    
//----------------------//
    // let frameIndex =0;
    // ctx.clearRect(obj.x, obj.y, 40, 20);
    // ctx.drawImage(obj.Image, frameIndex * 40, 0, 40, 20, obj.x, obj.y, 40, 20);
    // frameIndex++;
    // if (frameIndex >= obj.Image.width / 40) {
    //     frameIndex = 0;
    // }
//---------------------//
    // const gifImage = new Image();
    // gifImage.src = obj.image.src;

    // const frameWidth = 40; // Adjust frame width as needed
    // const frameHeight = 20; // Adjust frame height as needed
    // let frameIndex = 0;
    // let frameCount = 0;
    // const framesPerSecond = 10; // Adjust frames per second as needed

    // gifImage.onload = function() {
    //     setInterval(function() {
    //         ctx.clearRect(obj.x, obj.y, frameWidth, frameHeight);
    //         ctx.drawImage(gifImage, frameIndex * frameWidth, 0, frameWidth, frameHeight, obj.x, obj.y, frameWidth, frameHeight);
    //         frameIndex++;
    //         if (frameIndex >= gifImage.width / frameWidth) {
    //             frameIndex = 0;
    //         }
    //     }, 1000 / framesPerSecond);
    // };

}

// Function to update an object's position
function updatePosition(obj) {
    obj.x += obj.dx;
    obj.y += obj.dy;

    if (obj.x < 0 || obj.x > canvas.width - 40) {
        obj.dx = -obj.dx;
    }
    if (obj.y < 0 || obj.y > canvas.height - 20) {
        obj.dy = -obj.dy;
    }
}

function createCircle(x, y) {
    const circle = {
        x: x,
        y: y,
        radius: 10, // Adjust the radius as needed
        color: 'red', // Adjust the color as needed
    };
    circles.push(circle);
}

// Array to store circles
const circles = [];

// Event listener for mouse click on canvas
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    createCircle(mouseX, mouseY);
});

// Function to draw a circle
function drawCircle(circle) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = circle.color;
    ctx.fill();
    ctx.closePath();
}




// Function to animate all objects
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw and update each object
    objects.forEach(function(obj) {
        spawnFish(obj);
        updatePosition(obj);
    });

    // Draw each circle
    circles.forEach(function(circle) {
        drawCircle(circle);
    });

    requestAnimationFrame(animate);
}

animate();
