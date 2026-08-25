const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const bibletar_title = document.getElementById('bibletar-title');
// const bibletar_sub_section = document.getElementById('bibletar-sub-section');
const boy_or_girl = document.getElementById('boy-or-girl');
const top_border = 90;
const side_border = 2;
let mouseX = 0;
let mouseY = 0;

var box_x_pos = 1;
var gameOn = false;
var bibletar_maker_page = 1;

/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var front_page_text = [];

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // This is to counter for where the canvas is actually created on the screen
    mouseX -= side_border;
    mouseY -= top_border;
})

function wipeOutEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    /**OLD CODE, DON'T ERASE FOR REFERENCE THERE ARE 2 WAYS TO MAKE HTML TEXT DISAPPEAR ONE IS THE METHOD DOWN
     * HERE BY USING THE CONST AND ACCESSING IT WITH DOCUMENT.GETELEMENTBYID(''); OR BY ACCESSING THE DISPLAY
     * FROM CSS AND CHANGING IT FROM BLOCK TO NONE
     */
    // if (gameOn != false) {
    //     // When I keep erasing and rewriting it, I can't copy and paste the text
    //     bibletar_title.innerText = '';
    //     boy_or_girl.innerText = '';
    //     // bibletar_sub_section.innerText = '';
    // }
}

function bibleMaker_background () {
    // Makes the text appear and disappear once the user clicks to go their section
    if (bibletar_maker_page == 1) {
        document.getElementById('bibletar_page_1_text').style.display = "block";
    } else {
        document.getElementById('bibletar_page_1_text').style.display = "none";
    }
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
    ctx.fillRect(320, 20, 870, 170);
    ctx.fillStyle = 'rgb(3, 3, 3)';
    ctx.fillRect(327, 7, 876, 176);
    ctx.fillStyle = 'rgb(49, 77, 125)';
    ctx.fillRect(330, 10, 870, 170);

    // other little dark blue rectangle
    ctx.fillStyle = 'rgb(3, 3, 3)';
    ctx.fillRect(438, 117, 624, 64);
    ctx.fillStyle = 'rgb(27, 44, 75)';
    ctx.fillRect(440, 119, 620, 60);



    //background dark shadow
    ctx.font = "50px Arial";
    ctx.strokeStyle = 'rgb(2, 2, 2)';
    ctx.strokeText("Click to go to your section", 457, 163);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText("Click to go to your section", 457, 163);

    ctx.font = "50px Arial";
    ctx.strokeStyle = 'rgb(228, 206, 2)';
    ctx.strokeText("Click to go to your section", 460, 160);
    ctx.fillStyle = 'rgb(228, 206, 2)';
    ctx.fillText("Click to go to your section", 460, 160);


    ctx.font = "25px Arial";
    ctx.strokeStyle = 'rgb(250, 250, 249)';
    ctx.strokeText("Creator | Divine | Awesome | Loving | Supreme | Jesus | Good Father | Prince of Peace | Mighty God | Holy", 180, 220);
    ctx.fillStyle = 'rgb(252, 252, 251)';
    ctx.fillText("Creator | Divine | Awesome | Loving | Supreme | Jesus | Good Father | Prince of Peace | Mighty God | Holy", 180, 220);



    ctx.font = "15px Arial";
    // ctx.strokeStyle = 'rgb(250, 250, 249)';
    // ctx.strokeText("John 3:16 “For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.”", 180, 700);
    ctx.fillStyle = 'rgb(252, 252, 251)';
    ctx.fillText("John 3:16 “For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.”", 260, canvas.height - 20);

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


function displayMouseX_and_MouseY () {
    ctx.font = "30px Arial";
    ctx.strokeStyle = 'rgb(190, 36, 36)';
    ctx.strokeText("MouseX: " + mouseX + " MouseY: " + mouseY, 100, canvas.height - 100);
    ctx.fillStyle = 'rgb(190, 36, 36)';
    ctx.fillText("MouseX: " + mouseX + " MouseY: " + mouseY, 100, canvas.height - 100);

}

function drawSomething() {

    bibleMaker_background();
    loadingBox();
    displayMouseX_and_MouseY();
    // console.log(boy_or_girl.innerText);


    if(front_page_text.length < 20) {
        front_page_text.push(0);
    }

    // Bible.io Live Text
    // if (front_page_text[0] == 0) {
    //     // When I keep erasing and rewriting it, I can't copy and paste the text, that's why I'm doing this
    //     bibletar_title.innerText = 'Bibletar Maker';
    //     boy_or_girl.innerText = 'Boy  Girl';
    //     // bibletar_sub_section.innerText = 'click to go to your section';
    //     front_page_text[0] +=1;
    // } else {
    //     // do nothing
    // }
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