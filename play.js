const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var box_x_pos = 1;

function wipeEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function drawSomething() {
    ctx.fillStyle = 'rgba(255, 26, 104, 1)';
    ctx.fillRect(50 + box_x_pos, 50, 50, 50);
    box_x_pos += 5;
    if (box_x_pos > canvas.width - 200) {
        box_x_pos = 0;
    }
}

function resizeCanvas() {
    // Sets the internal drawing resolution to the exact window bounds
    canvas.width = window.innerWidth -2;
    canvas.height = window.innerHeight -90;

    /* Note: Changing the canvas size clears the context state. 
    Redraw or call your render function here*/

    drawSomething();
}

function gameLoop() {
    /**Wiping the entire screen clear is important before drawing your next batch */
    wipeEntireScreen();
    drawSomething();
    /** All that requestAnimationFrame does it create a forever loop that can help me make
     * games or animations also, you can't control the fps it specifically hooked to match your
     * monitor's physical refresh rate
     */
    requestAnimationFrame(gameLoop);
}

/** Inititalize Dimensions on load */
resizeCanvas();
gameLoop();

console.log(ctx);