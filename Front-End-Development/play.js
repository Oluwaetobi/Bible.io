/**First of all if you think I write comments for fun, you are making a huge mistake, these comments are not
 * just for me but I write comments so that if anyone looks at the code in this game, they can understand
 * things that won't come to mind initially, PLEASE READ THE COMMENTS, they explain some of the methods
 * I'm using, and why I am doing what I am doing, no matter how good you are at coding, you willl always
 * forget why you did something a particular way, every good coder, writes good comments, a wise man once said
 * the faintest pen is better than the sharpest memory, and why is that, because even if you write something
 * faintly as long as you know how to read, it is engraved forever and can always be read, but no matter
 * how good your memory is, you always forget it at some point so START WRITING COMMENTS WHEN YOU CODE!!
 */

/**First of all lets take care of the loading page */
window.addEventListener("load", () => {
    /**And YES this actually detect when the page has finished loading */
    // first of all get access to the loader class
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    /* we don't want to just remove it from the screen but also remove it from our code too,
    we might not obe able to currently see it, but it is in fact still there hiding in the back, 
    so let's deal with that like so */
    loader.addEventListener("transitionend", () => {
        // once the transition has ended we will do
        document.body.removeChild(loader);
        // we removed the loader class, yay!
    })
})

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const big_text = document.getElementById('big-text');
const top_border = 90;
const side_border = 2;

var box_x_pos = 1;
var gameOn = false;
/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var play_front_page_text = [];

var img_world_challenge = new Image();
img_world_challenge.src = "./images/challenge_world.svg"; // Set source URL
img_world_challenge.alt = "Go global!";

var img_friend_challenge = new Image();
img_friend_challenge.src = "./images/challenge_friend.svg";
img_friend_challenge.alt = "Verse Friends!";

function wipeOutEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (gameOn != false) {
        // When I keep erasing and rewriting it, I can't copy and paste the text
        big_text.innerText = '';
    }
}

function titleText() {
    if(play_front_page_text.length < 20) {
        play_front_page_text.push(0);
    }

    // Bible.io Live Text
    if (play_front_page_text[0] == 0) {
        // When I keep erasing and rewriting it, I can't copy and paste the text, that's why I'm doing this
        big_text.innerText = 'Bible.io Live';
        play_front_page_text[0] +=1;
    } else {
        // do nothing
    }
    // console.log(big_text.innerText);
}

function loadingBox() {
    // looading box
    ctx.fillStyle = 'rgba(255, 26, 104, 1)';
    ctx.fillRect(50 + box_x_pos, canvas.height - 100, 50, 50);
    
    box_x_pos += 3;
    if (box_x_pos > canvas.width - 200) {
        box_x_pos = 0;
    }

}

function drawPagesForGame() {
    /**I won't use the parameter type_of_drawing now, but it will come in handy later, maybe when I start
     * drawing the bar graph to represent points in the game, I will probably use a separate function, 
     * like probably the exact same one found in shop.js to draw the user's bibletar as well as 
     * opponents' bibletars as well.
     */
    function resizeGameAssets (what_to_draw, x_pos_ribp, y_pos_ribp, pixel_size_width, pixel_size_height, type_of_drawing) {
            if (type_of_drawing == 1) {
                ctx.drawImage(what_to_draw, x_pos_ribp, y_pos_ribp, pixel_size_width, pixel_size_height);
            }
            if (type_of_drawing == 2) {
                ctx.beginPath();
                // x_pos, y_pos, size, shape filler, and I don't know, something for radius I think
                ctx.arc(x_pos_ribp, y_pos_ribp, pixel_size_width, 0, 2 * Math.PI);
                ctx.fillStyle = 'rgb(79, 178, 50)';
                ctx.fill();
                ctx.font = "75px Arial";
                ctx.fillStyle = 'rgb(252, 250, 250)';
                ctx.fillText("Go", x_pos_ribp - pixel_size_width/1.7, y_pos_ribp + pixel_size_width/3.5);
            }
    }
    resizeGameAssets(img_world_challenge, 300, 300, 280, 200, 1);
    resizeGameAssets(img_friend_challenge, 700, 300, 200, 200, 1);
    resizeGameAssets("Go button", 1000, 400, 80, 80, 2);


    // ctx.beginPath();
    // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    // ctx.fillStyle = "red";
    // ctx.fill();
    // ctx.lineWidth = 4;
    // ctx.strokeStyle = "blue";
    // ctx.stroke();
}

function drawGame() {
    // blue background
    ctx.fillStyle = 'rgb(176, 223, 255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    loadingBox();
    titleText();
    drawPagesForGame();

}

function resizeCanvas() {
    // Sets the internal drawing resolution to the exact window bounds
    canvas.width = window.innerWidth -2;
    canvas.height = window.innerHeight -90;

    /* Note: Changing the canvas size clears the context state. 
    Redraw or call your render function here*/

    drawGame();
}

function gameLoop() {
    /**Wiping the entire screen clear is important before drawing your next batch */
    wipeOutEntireScreen();
    drawGame();
    /** All that requestAnimationFrame does it create a forever loop that can help me make
     * games or animations also, you can't control the fps it specifically hooked to match your
     * monitor's physical refresh rate
     */
    requestAnimationFrame(gameLoop);
}

/** Inititalize Dimensions on load */
resizeCanvas();
gameLoop();

// console.log(ctx);