const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const bibletar_title = document.getElementById('bibletar-title');

var box_x_pos = 1;
var gameOn = false;
/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var front_page_text = [];

function wipeOutEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (gameOn != false) {
        // When I keep erasing and rewriting it, I can't copy and paste the text
        bibletar_title.innerText = '';
    }
}

function bibleMaker_background () {
    // blue background
    
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    
    // 3. Add color stops
    // gradient.addColorStop(0, 'red');     // Start color (0%)
    // gradient.addColorStop(0.5, 'yellow'); // Middle color (50%)
    // gradient.addColorStop(1, 'blue');    // End color (100%)
    
    gradient.addColorStop(0, 'rgb(0, 48, 138)');     // Start color (0%)
    // gradient.addColorStop(0.5, 'yellow'); // Middle color (50%)
    gradient.addColorStop(1, 'rgb(1, 152, 34)');    // End color (100%)
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // black stroke
    ctx.fillStyle = 'rgb(3, 3, 3)';
    ctx.fillRect(320, 20, 870, 120);
    ctx.fillStyle = 'rgb(3, 3, 3)';
    ctx.fillRect(327, 7, 876, 126);
    ctx.fillStyle = 'rgb(1, 55, 146)';
    ctx.fillRect(330, 10, 870, 120);

}

function loadingBox () {
    // looading box
    ctx.fillStyle = 'rgba(255, 26, 104, 1)';
    ctx.fillRect(50 + box_x_pos, canvas.height - 100, 50, 50);
    box_x_pos += 3;
    if (box_x_pos > canvas.width - 200) {
        box_x_pos = 0;
    }

}

function drawSomething() {

    bibleMaker_background();
    loadingBox();


    if(front_page_text.length < 20) {
        front_page_text.push(0);
    }

    // Bible.io Live Text
    if (front_page_text[0] == 0) {
        // When I keep erasing and rewriting it, I can't copy and paste the text, that's why I'm doing this
        bibletar_title.innerText = 'Bibletar Maker';
        front_page_text[0] +=1;
    } else {
        // do nothing
    }
    // console.log(big_text.innerText);
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
    wipeOutEntireScreen();
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