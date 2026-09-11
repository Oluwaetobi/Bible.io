const warning_note = localStorage.getItem('warning_important')
console.log(warning_note)
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


const username_input = document.getElementById('username-input');
const error_message = document.getElementById('error-message');


form.addEventListener('submit', (e) => {

    let errors = [];
    errors = getCreateNameFormErrors(username_input.value)
    
    if (errors.length > 0) {
        // If there are any errors, prevent the form from being submitted
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
    
})

function getCreateNameFormErrors (username) {
    let errors = []
    if(username === '' || username == null) {
        errors.push('Username is required!')
        username_input.parentElement.classList.add(`You didn't enter anything`);
    }
    if(username.length < 2) {
        errors.push('Your name is too short!')
        username_input.parentElement.classList.add(`Your name is too short`);
    }
    return errors;
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const top_border = 90;
const side_border = 2;
var my_name = "Unknown Player"

var box_x_pos = 1;
var gameOn = false;
/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var play_front_page_text = [];

var my_points = 0;
var my_highscores = [0, 0, 0];
var my_cash = 0;
var old_bibletar = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var acquired_stuff_closet = [
    [1, 2, 3],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104],
];

var not_acquired_stuff_shop = [
    [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [0, 0, 0],
    [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130],
    [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
    [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38 , 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];


function wipeOutEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (gameOn != false) {
        // When I keep erasing and rewriting it, I can't copy and paste the text
        big_text.innerText = '';
    }
}

function saveName() {
    // get the input value
    const nameInputValue = document.getElementById('username-input').value;

    // save the input value to local Storage
    // the first item is the name of the variable for the local Storage
    localStorage.setItem('my_name', nameInputValue)



    /**Extra information on local Storage
     * How to clear the local storage for the particular website: localStorage.clear();
     * 
     * localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a
     *  web browser with no expiration date. This means the data stored persists even after the
     *  user closes the browser or restarts the computer.
     * 
     * To retrieve data, pass the key name. If the key doesn't exist, it returns null.
     * 
     * To remove a specific key-value pair, pass the exact key name. 
     * javascript
     * localStorage.removeItem('theme');


    localStorage can only store data as strings. If you attempt to save a number, boolean, array, or
     object directly, JavaScript will automatically force it into a string format. For an object, this results
      in the broken string "[object Object]". [1] (https://www.youtube.com/watch?v=AUOzvFzdIk4), 
      [2] (https://www.youtube.com/watch?v=-ZRDZyUjEEI&t=12),
       [3] (https://blog.logrocket.com/localstorage-javascript-complete-guide/)To store complex data like 
       arrays or objects, you must convert them into a JSON string when saving, and parse them back 
       into JavaScript when reading: [1] (https://rxdb.info/articles/localstorage.html), 
       [2] (https://www.youtube.com/watch?v=-ZRDZyUjEEI&t=12)


       const user = { name: 'Alice', score: 42 };

// ❌ WRONG: localStorage.setItem('userData', user); -> stores "[object Object]"

//  RIGHT: Convert to a string first
localStorage.setItem('userData', JSON.stringify(user));

//  RIGHT: Read and convert back to an object
const savedUser = JSON.parse(localStorage.getItem('userData'));
console.log(savedUser.name); // Outputs: "Alice"


     */
}

function localStorageAndSessionStorageData () {
    /** I use this function to read out my local and Session Storage Data */
    const savedName = localStorage.getItem('my_name');
    const savedHighscores = JSON.parse(sessionStorage.getItem('my_highscores'));
    const savedPoints = JSON.parse(sessionStorage.getItem('my_points'));
    const saved_bibletar = JSON.parse(localStorage.getItem('old_bibletar'));
    const saved_acquired = JSON.parse(localStorage.getItem('acquired_stuff_closet'));
    const saved_not_acquired = JSON.parse(localStorage.getItem('not_acquired_stuff_closet'));
    const saved_cash = JSON.parse(localStorage.getItem('my_cash'));

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

    if(saved_bibletar) {
        old_bibletar = saved_bibletar;
    } else {
        // do nothing, has already been created to default
    }

    if(saved_acquired) {
        acquired_stuff_closet = saved_acquired;
    } else {
        // do nothing, has already been created to default
    }

    if(saved_not_acquired) {
        not_acquired_stuff_shop = saved_not_acquired;
    } else {
        // do nothing, has already been created to default
    }

    if (saved_cash) {
        my_cash = saved_cash;
    } else {
        // do nothing, has already been created and set to default
    }
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

function myBibletar () {
    ctx.fillStyle = 'rgb(66, 66, 66)';
    ctx.fillRect(50, 50, 300, 250);

    // WRITE Player Clicked's NAME
    ctx.font = "40px Arial";
    ctx.strokeStyle = 'rgb(10, 9, 9)';
    ctx.strokeText(my_name, 50, 350);
    ctx.fillStyle = 'rgb(8, 8, 8)';
    ctx.fillText(my_name, 50, 350);
}


function drawGame() {
    // blue background
    ctx.fillStyle = 'rgb(189, 189, 190)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    localStorageAndSessionStorageData();
    loadingBox();
    myBibletar();

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