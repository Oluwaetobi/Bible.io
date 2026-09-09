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

var my_name = "Unknown Player";
var my_points = 0;
var my_highscores = [0, 0, 0];
var level = 1;
var mouseX = 0;
var mouseY = 0;

var online = 1;

const friends = {
    name: ["No Name", "No Name", "No Name", "No Name", "No Name", "No Name", "No Name", "No Name", "No Name", "No Name", "No Name"],
    bibletar: [],
    scroll_y: 0,
    online: ["Offline", "Offline", "Offline", "Offline", "Offline", "Offline", "Offline", "Offline", "Offline", "Offline", "Offline"],
};

var img_world_challenge = new Image();
img_world_challenge.src = "./images/challenge_world.svg"; // Set source URL
img_world_challenge.alt = "Go global!";

var img_friend_challenge = new Image();
img_friend_challenge.src = "./images/challenge_friend.svg";
img_friend_challenge.alt = "Verse Friends!";

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // This is to counter for where the canvas is actually created on the screen
    mouseX -= side_border;
    mouseY -= top_border;
})

window.addEventListener('wheel', (event) => {
    if (mouseX < 260) {
        friends.scroll_y += event.deltaY;
    }

    /**
    if (event.deltaY > 0) {
         Down
     } else if (event.deltaY < 0) {
         UP
     }
     */
})


function wipeOutEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (gameOn != false) {
        // When I keep erasing and rewriting it, I can't copy and paste the text
        big_text.innerText = '';
    }
}

function save_Data_to_Local_or_Session_Storage() {
    /**IMPORTANT!!!!! Only call this function when there is new data that needs to be saved */

    /**Since my_points and my_highscore are not strings, we must first of all convert them to
     * strings because local storage and session storage can only store data as strings
     * 
     * To store arrays, objects, or integers as strings, we must first of all convert
     * them into a JSON string, when we want to read them we must convert them back (parse).
     */

    /**An another important note:
     * Why are we not storing points or highscores locally, well because then they'll never 
     * reset, unless we actually clear the local storage like so
     * localStorage.removeItem('my_name'); or localStorage.removeItem('my_points')
     * but we won't want to do that. Local Storage stores indefinitely, sessionStorage however
     * only stores it while the tab is still open, so if you close the tab, then points for the day
     * should reset. I just realized wait a second, my highscore should also be stored indefinitely,
     * but well change it to local storage once, the levels work properly
     */
    sessionStorage.setItem('my_points', JSON.stringify(my_points));
    sessionStorage.setItem('my_highscores', JSON.stringify(my_highscores));
}

function localStorageAndSessionStorageData () {
    /** I use this function to read out my local and Session Storage Data */
    const savedName = localStorage.getItem('my_name');
    const savedHighscores = JSON.parse(sessionStorage.getItem('my_highscores'));
    const savedPoints = JSON.parse(sessionStorage.getItem('my_points'));
    if (savedName) {
        my_name = savedName;
    } else {
        // The user has not created a name yet
        my_name = "Guest Player"
    }

    if (savedHighscores) {
        my_highscores = savedHighscores;
    } else {
        // do nothing, because the array has already been created at the top
    }

    if (savedPoints) {
        my_points = savedPoints;
    } else {
        // do nothing, because the variable has already been created and set to zero at the top
    }

}

function displayMouseX_and_MouseY () {
    ctx.font = "25px Arial";
    ctx.fillStyle = 'rgb(190, 36, 36)';
    ctx.fillText("MouseX: " + mouseX + " MouseY: " + mouseY, 10, 20);

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
    /**I plan to use this loading box on the page that shows when connecting players with other players
     * when the player or user is trying to get the game started
     */
    // looading box
    ctx.fillStyle = 'rgba(255, 26, 104, 1)';
    ctx.fillRect(50 + box_x_pos, canvas.height - 100, 50, 50);
    
    box_x_pos += 3;
    if (box_x_pos > canvas.width) {
        box_x_pos = -50;
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
    resizeGameAssets(img_world_challenge, 350, 280, 280, 200, 1);
    resizeGameAssets(img_friend_challenge, 1000, 280, 200, 200, 1);
    resizeGameAssets("Go button", 800, 380, 80, 80, 2);


    // ctx.beginPath();
    // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    // ctx.fillStyle = "red";
    // ctx.fill();
    // ctx.lineWidth = 4;
    // ctx.strokeStyle = "blue";
    // ctx.stroke();
}

function friendsBoard() {
    
    ctx.fillStyle = 'rgb(250, 251, 252)';
    ctx.fillRect(0, 60, 230, 800);
    
    for (let i = 0; i < friends.name.length; i++) {
        // name of friends
        ctx.font = "18px Arial";
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillText(friends.name[i], 20, (i*120) + 90 + friends.scroll_y);
        // console.log(i);

        // friends' bibletar background border box display
        ctx.fillStyle = 'rgb(100, 102, 103)';
        ctx.fillRect(10, (i*120) + 95 + friends.scroll_y, 100, 90);

        if (friends.online[i] == "Online" || friends.online[i] == "online") {
            ctx.fillStyle = 'rgb(78, 244, 97)'
        } else {
            ctx.fillStyle = 'rgb(244, 68, 68)'
        }
        ctx.fillRect(120, (i*120) + 115 + friends.scroll_y, 100, 50)
        
        // online or offline text display
        ctx.font = "18px Arial";
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillText(friends.online[i], 140, (i*120) + 145 + friends.scroll_y);

    }
    
    // if the friends scroll down to low, it brings it up
    for (let i = 0; i < 100; i++) {
        if (friends.scroll_y > 20) {
            friends.scroll_y += -1;
        } else {
            break;
        }
    }


    /**Shows my friends, should be at the bottom
     * this helps to block display for friends holder when the scroll happens
    */
    ctx.fillStyle = 'rgb(120, 201, 241)';
    ctx.fillRect(0, 0, 230, 70);

    ctx.font = "40px Arial";
    ctx.strokeStyle = 'rgb(2, 2, 2)';
    ctx.strokeText("Friends:", 50, 60);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText("Friends:", 50, 60);
    

}

function myBibletar () {
    ctx.fillStyle = 'rgb(66, 66, 66)';
    ctx.fillRect(1250, 455, 250, 200);

    // WRITE Player Clicked's NAME
    ctx.font = "30px Arial";
    ctx.strokeStyle = 'rgb(10, 9, 9)';
    ctx.strokeText(my_name, 1260, 680);
    ctx.fillStyle = 'rgb(8, 8, 8)';
    ctx.fillText(my_name, 1260, 680);
}

function onlineDisplay() {
    ctx.font = "30px Arial";
    ctx.fillStyle = 'rgb(4, 4, 4)';
    ctx.fillText("Online: " + online, ((canvas.width)/2) - 60, 100);
}

function myScoresDisplay () {
    var x_shift = -50;
    ctx.font = "20px Arial";
    ctx.fillStyle = 'rgb(6, 6, 6)';
    ctx.fillText("Points: " + my_points, (((canvas.width)/2) + x_shift) - 150, 130);

    ctx.fillStyle = 'rgb(6, 6, 6)';
    ctx.fillText("Highscore: " + my_highscores[level - 1], (((canvas.width)/2) + x_shift) + 150, 130);
}

function displayLevels() {
    // background box for levels
    ctx.fillStyle = 'rgb(124, 116, 119)';
    ctx.fillRect(1250, 100, 240, 300);

    // levels display
    
    for (let i = 0; i < 3; i++) {
        var spacing_x = 60;
        ctx.font = "20px Arial";
        ctx.fillStyle = 'rgb(239, 245, 77)';
        ctx.fillRect(1280, 120 + (i * spacing_x), 180, 40);
        ctx.fillStyle = 'rgb(6, 6, 6)';
        ctx.fillText("Level " + level, 1330, 145 + (i * spacing_x));
    }
}

function drawGame() {
    // blue background
    // ctx.fillStyle = 'rgb(176, 223, 255)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);


    // gradient.addColorStop(0, 'red');     // Start color (0%)
    // gradient.addColorStop(0.5, 'yellow'); // Middle color (50%)
    // gradient.addColorStop(1, 'blue');    // End color (100%)
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgb(219, 237, 249)');     // Start color (0%)
    gradient.addColorStop(0.5, 'rgb(31, 223, 223)');
    gradient.addColorStop(1, 'rgb(45, 134, 250)');    // End color (100%)

    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    localStorageAndSessionStorageData();
    loadingBox();
    titleText();
    drawPagesForGame();
    friendsBoard();
    myBibletar();
    onlineDisplay();
    myScoresDisplay();
    displayMouseX_and_MouseY();
    displayLevels();

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