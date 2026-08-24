const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var school = 1;

function drawSomething() {
    ctx.fillStyle = 'rgba(255, 26, 104, 1)';
    ctx.fillRect(50 + school, 50, 50, 50);
    school += 1;
}

function resizeCanvas() {
    // Sets the internal drawing resolution to the exact window bounds
    canvas.width = window.innerWidth -2;
    canvas.height = window.innerHeight -90;

    /* Note: Changing the canvas size clears the context state. 
    Redraw or call your render function here*/

    drawSomething();
}

/** Inititalize Dimensions on load */
resizeCanvas();

console.log(ctx);