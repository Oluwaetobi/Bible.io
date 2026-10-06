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

var i_am_a_boy = true;
var i_am_a_girl = false;

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
var i_am_a_developer = false;
const top_border = 90;
const side_border = 2;
let mouseX = 0;
let mouseY = 0;

var my_name = "Unknown Player"

var box_x_pos = 1;
var gameOn = false;
/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var play_front_page_text = [];

var my_country = "America";
var my_points = 0;
var my_highscores = [0, 0, 0];
var my_cash = 0;
var my_bibletar_svg = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];



var img_background = new Image();
img_background.src = "./images/background1.svg"; // Set source URL
img_background.alt = "background image";

var img_my_country = new Image();
img_my_country.src = "./images/country_America.svg"; // Set source URL
img_my_country.alt = "my country";

var img_face = new Image();
img_face.src = "./images/face_men1.svg"; // Set source URL
img_face.alt = "face image";

var img_shirt = new Image();
img_shirt.src = "./images/shirt_men1.svg"; // Set source URL
img_shirt.alt = "shirt image";

var img_glasses = new Image();
img_glasses.src = "./images/glasses_men1.svg"; // Set source URL
img_glasses.alt = "glasses image";

var img_hats = new Image();
img_hats.src = "./images/hats_men1.svg"; // Set source URL
img_hats.alt = "hats image";

var img_eyes = new Image();
img_eyes.src = "./images/eyes1.svg"; // Set source URL
img_eyes.alt = "eyes image";

var img_eyebrows = new Image();
img_eyebrows.src = "./images/eyebrows_men1.svg"; // Set source URL
img_eyebrows.alt = "eyebrows image";

var img_noses = new Image();
img_noses.src = "./images/noses1.svg"; // Set source URL
img_noses.alt = "noses image";

var img_mouths = new Image();
img_mouths.src = "./images/mouths_men1.svg"; // Set source URL
img_mouths.alt = "mouths image";

var img_hair = new Image();
img_hair.src = "./images/hair_men1.svg"; // Set source URL
img_hair.alt = "hair image";

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // This is to counter for where the canvas is actually created on the screen
    mouseX -= side_border;
    mouseY -= top_border;
})

function wipeOutEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (gameOn != false) {
        // When I keep erasing and rewriting it, I can't copy and paste the text
        big_text.innerText = '';
    }
}

function saveCountry() {
    const countryInputValue = document.getElementById('country-input').value;
    console.log(countryInputValue);
    localStorage.setItem('my_country', countryInputValue);
}

function saveName() {
    // get the input value
    const nameInputValue = document.getElementById('username-input').value;

    // save the input value to local Storage
    // the first item is the name of the variable for the local Storage
    localStorage.setItem('my_name', nameInputValue);



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

localStorageAndSessionStorageData();
function localStorageAndSessionStorageData () {

    /* If you don't know what these 4 lines of code, here's a reference
    https://youtu.be/8tL5P-RtAH0?si=Ezf5reG8uux_d8bY
     */
    var cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

    /** I use this function to read out my local and Session Storage Data */
    const savedName = localStorage.getItem('my_name');
    // const savedHighscores = JSON.parse(sessionStorage.getItem('my_highscores'));
    // const savedPoints = JSON.parse(sessionStorage.getItem('my_points'));
    
    /* if the cookies exist, then parse them, if not then don't
     if I parse cookies that don't exist it will crash the program because this is a syntax error 
     
     note: instead of having constants I have variables, because I need to be able to reassign them in this case since 
     they are cookies and the need to be parsed that is if they even exist */
    var savedHighscores = cookies.my_highscores;
    var savedPoints = cookies.my_points;
    if (savedHighscores) {
        savedHighscores = JSON.parse(savedHighscores);
    }
    if (savedPoints) {
        savedPoints = JSON.parse(savedPoints);
    }

    const saved_bibletar_svg = JSON.parse(localStorage.getItem('my_bibletar_svg'));
    const saved_cash = JSON.parse(localStorage.getItem('my_cash'));
    const saved_country = localStorage.getItem('my_country');
    const developer_tools = JSON.parse(localStorage.getItem('i_am_a_developer'));

    if (developer_tools) {
        i_am_a_developer = developer_tools;
    }

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

    if(saved_bibletar_svg) {
        my_bibletar_svg = saved_bibletar_svg;
    } else {
        // do nothing, has already been created to default
    }

    if (saved_cash) {
        my_cash = saved_cash;
    } else {
        // do nothing, has already been created and set to default
    }

    if (saved_country) {
        my_country = saved_country;
    } else {
        // do nothing, has already been created and set to default
    }
}

figure_out_whether_i_am_a_boy_or_a_girl();
function figure_out_whether_i_am_a_boy_or_a_girl () {
    if (my_bibletar_svg[0]  == 1) {
        i_am_a_boy = true;
        i_am_a_girl = false;
    } else {
        i_am_a_girl = true;
        i_am_a_boy = false;
    }
}

function loadingBox() {
    // looading box
    ctx.fillStyle = 'rgba(255, 26, 104, 1)';
    ctx.fillRect(50 + box_x_pos, canvas.height - 100, 50, 50);
    
    box_x_pos += 3;
    if (box_x_pos > canvas.width + 50) {
        box_x_pos = -100;
    }

}

function myBibletar () {

    // WRITE Player Clicked's NAME
    var name_y_pos = 445;

    // black shadow add
    ctx.shadowColor = 'rgb(8, 8, 8)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    
    ctx.font = "40px Arial";
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.strokeText(my_name, 50, name_y_pos);
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText(my_name, 50, name_y_pos);
    
    // black shadow remove
    ctx.shadowColor = "white";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;


    /** Have to recalculate the src link based off of my_bibletar_svg */
    img_background.src = "./images/background" + my_bibletar_svg[1] + ".svg";
    img_eyes.src = "./images/eyes" + my_bibletar_svg[6] + ".svg";
    img_noses.src = "./images/noses" + my_bibletar_svg[8] + ".svg";
    if (i_am_a_boy == true) {
        /**You might be wondering why include face as well, because women's necks are in
         * fact visibily thinner, and men's necks are in fact visibly thicker, also
         * women sometimes put on makeup, which means their mouths = lips will be
         * different colors, also there are also some other differences which i will leave
         * up to the professionals
         */
        img_face.src = "./images/face_men" + my_bibletar_svg[2] + ".svg";
        img_shirt.src = "./images/shirt_men" + my_bibletar_svg[3] + ".svg";
        img_glasses.src = "./images/glasses_men" + my_bibletar_svg[4] + ".svg";
        img_hats.src = "./images/hats_men" + my_bibletar_svg[5] + ".svg";
        img_eyebrows.src = "./images/eyebrows_men" + my_bibletar_svg[7] + ".svg";
        img_mouths.src = "./images/mouths_men" + my_bibletar_svg[9] + ".svg";
        img_hair.src = "./images/hair_men" + my_bibletar_svg[10] + ".svg";
    } else {
        if (i_am_a_girl == true) {
            img_face.src = "./images/face_women" + my_bibletar_svg[2] + ".svg";
            img_shirt.src = "./images/shirt_women" + my_bibletar_svg[3] + ".svg";
            img_glasses.src = "./images/glasses_women" + my_bibletar_svg[4] + ".svg";
            img_hats.src = "./images/hats_women" + my_bibletar_svg[5] + ".svg";
            img_eyebrows.src = "./images/eyebrows_women" + my_bibletar_svg[7] + ".svg";
            img_mouths.src = "./images/mouths_women" + my_bibletar_svg[9] + ".svg";
            img_hair.src = "./images/hair_women" + my_bibletar_svg[10] + ".svg";
        }
    }



    function resizeImageByPixels_and_draw (what_to_draw, x_pos_ribp, y_pos_ribp, pixel_size, type_of_drawing) {
        /** be careful there is a different between "=" and "+=" using the other the wrong can be CATASTROPHIC
         * for players, with the current code design, increase_width_by is the only thing that should
         * use "=" and not "-=" or "+=" !!!
         */
        my_pixels_height = pixel_size;
        var increase_width_by = 0;
        /* specific drawing is based to get the number that goes between the type of drawing whether
        background, hats, shirt, and etc and between the ".svg" so for instance hats_men3.svg or
        background25.svg, I am getting the number based between the type of drawing and the ".svg" this
        helps me access the actual drawing, not just based off of visible placement in the closet 
        or in the shop, but the actual number of the svg which never changes  
        */

        /** It is important to note that the way specific_drawing in accounts.js and shop.js is
         * exactly the same, it gets the correct svg number, but the detection method is different
         * in shop.js it calls the function detect_specific_drawing(specific_drawing, type_of_drawing);
         *  and goes through some complex math structure using different variables and searching through
         * an array of arrays, but here, it's all made simple, with the creation of my_bibletar_svg which
         * is based off of a complex math engine I designed in shop.js, I am easily able to detect the
         * svg number and get the specific drawing.
         * 
         */
        var specific_drawing = my_bibletar_svg[type_of_drawing];

        // over here I resize the width based off of the given height
        // background
        if (type_of_drawing == 1) {
            increase_width_by = 1.2;
        }
        //face
        if (type_of_drawing == 2) {
            increase_width_by = 1.1;
        }
        // shirt
        if (type_of_drawing == 3) {
            // default
            increase_width_by = 1.7;

            if (i_am_a_boy == true) {
                if (specific_drawing >= 38 && specific_drawing <= 62 || specific_drawing == 30) {
                     my_pixels_height += 15;
                     x_pos_ribp += -6;
                     y_pos_ribp -= 10;
                     increase_width_by = 1.60;
                }
                if (specific_drawing >= 58 && specific_drawing <= 62) {
                     my_pixels_height -= 10;
                     x_pos_ribp += 2;
                     y_pos_ribp += 6;
                     increase_width_by = 1.7;
                }
                if (specific_drawing >= 69 && specific_drawing <= 74) {
                    my_pixels_height += 15;
                    x_pos_ribp += -11;
                    y_pos_ribp -= 10;
                    increase_width_by = 1.65;
                }
                if (specific_drawing == 82) {
                    my_pixels_height += 5;
                    x_pos_ribp -= 6;
                    y_pos_ribp -= 7;
                    increase_width_by = 1.76;
                }
                if (specific_drawing == 85) {
                    my_pixels_height += 50;
                    x_pos_ribp -= 2;
                    y_pos_ribp -= 52;
                    increase_width_by = 1.16;
                }
            } else {
                if (i_am_a_girl == true ) {
                    if (specific_drawing == 2) {
                        my_pixels_height += 5;
                        x_pos_ribp -= 8.5;
                        y_pos_ribp -= 5;
                        increase_width_by = 1.75;
                    }
                    if (specific_drawing == 27) {
                        my_pixels_height += 5;
                        x_pos_ribp -= 8.5;
                        y_pos_ribp -= 5;
                        increase_width_by = 1.75;
                    }
                    if (specific_drawing == 28) {
                        my_pixels_height += 5;
                        x_pos_ribp += -2;
                        y_pos_ribp -= 4;
                        increase_width_by = 1.7;
                    }
                }
            }
        }
        // glasses
        if (type_of_drawing == 4) {
            // default
            my_pixels_height -= 11.9;
            x_pos_ribp -= 62;
            y_pos_ribp -= 37;
            increase_width_by = 4.0;
            if (i_am_a_boy == true ) {
                if (specific_drawing == 45 || specific_drawing == 46) {
                    my_pixels_height += 34;
                    increase_width_by = 2.1;
                    y_pos_ribp -= 4;
                }
                if (specific_drawing == 60 || specific_drawing == 61) {
                    my_pixels_height += 140;
                    x_pos_ribp -= 18;
                    y_pos_ribp -= 53;
                    increase_width_by = 0.9;
                }
            } else {
                if (i_am_a_girl == true) {
                    if (specific_drawing == 22) {
                        my_pixels_height += 140;
                        x_pos_ribp -= 18;
                        y_pos_ribp -= 53;
                        increase_width_by = 0.9;
                }
                }
            }
        }
        // hats
       if (type_of_drawing == 5) {
            increase_width_by += 2.0;
            if (i_am_a_boy == true) {
                if (specific_drawing >= 1 && specific_drawing <= 8) {
                    // caps
                    my_pixels_height += 11;
                    x_pos_ribp -= 93;
                    y_pos_ribp -= 10;
                    increase_width_by = 3.0;
                }
                if (specific_drawing >= 9 && specific_drawing <= 17) {
                    my_pixels_height += 21;
                    x_pos_ribp -= 96.5;
                    y_pos_ribp -= 40;
                    increase_width_by = 3.0;
                }
                if (specific_drawing >= 18 && specific_drawing <= 22) {
                    my_pixels_height += 21;
                    x_pos_ribp -= 60.5;
                    y_pos_ribp -= 40;
                    increase_width_by = 3.0;
                }
                if (specific_drawing == 23) {
                    my_pixels_height += 121;
                    x_pos_ribp -= 100.5;
                    y_pos_ribp -= 140;
                    increase_width_by = 1.3;
                }
                if (specific_drawing == 24) {
                    my_pixels_height += 60;
                    x_pos_ribp -= 60.5;
                    y_pos_ribp -= 67;
                    increase_width_by = 1.3;
                }
                if (specific_drawing >= 25 && specific_drawing <= 27 || specific_drawing == 31) {
                    my_pixels_height += 60;
                    x_pos_ribp -= 95.5;
                    y_pos_ribp -= 77;
                    increase_width_by = 1.95;
                }
                if (specific_drawing == 28) {
                    my_pixels_height += 90;
                    x_pos_ribp -= 98.5;
                    y_pos_ribp -= 107;
                    increase_width_by = 1.55;
                }
                if (specific_drawing == 29) {
                    my_pixels_height += 60;
                    x_pos_ribp -= 88.5;
                    y_pos_ribp -= 78;
                    increase_width_by = 1.75;
                }
                if (specific_drawing == 30 || specific_drawing >= 32 && specific_drawing <= 39) {
                    my_pixels_height += 20;
                    x_pos_ribp -= 99.5;
                    y_pos_ribp -= 37;
                    increase_width_by = 3.15;
                }
                if (specific_drawing >= 40 && specific_drawing <= 42) {
                    my_pixels_height += 180;
                    x_pos_ribp -= 109.5;
                    y_pos_ribp -= 52;
                    increase_width_by = 1.25;
                }
                if (specific_drawing == 44) {
                    my_pixels_height += 160;
                    x_pos_ribp -= 70.5;
                    y_pos_ribp -= 45;
                    increase_width_by = 0.80;
                }
                if (specific_drawing == 43 || specific_drawing >= 45 && specific_drawing <= 48) {
                    my_pixels_height += 150;
                    x_pos_ribp -= 95.5;
                    y_pos_ribp -= 20;
                    increase_width_by = 1.1;
                }
                if (specific_drawing >= 49 && specific_drawing <= 53) {
                    my_pixels_height += 20;
                    x_pos_ribp -= 67.5;
                    y_pos_ribp -= 25;
                    increase_width_by = 2.3;
                }
                if (specific_drawing >= 54 && specific_drawing <= 57) {
                    my_pixels_height += 65;
                    x_pos_ribp -= 67.5;
                    y_pos_ribp -= 75;
                    increase_width_by = 1.4;
                }
                if (specific_drawing >= 58 && specific_drawing <= 65) {
                    my_pixels_height += 25;
                    x_pos_ribp -= 77.5;
                    y_pos_ribp -= 30;
                    increase_width_by = 2.4;
                }
                if (specific_drawing >= 66 && specific_drawing <= 67) {
                    my_pixels_height += 65;
                    x_pos_ribp -= 84.5;
                    y_pos_ribp -= 72;
                    increase_width_by = 1.7;
                }
                if (specific_drawing >= 68 && specific_drawing <= 71) {
                    my_pixels_height += -20;
                    x_pos_ribp -= 56.5;
                    y_pos_ribp -= -12;
                    increase_width_by = 4.7;
                }
                if (specific_drawing >= 72 && specific_drawing <= 73) {
                    my_pixels_height += 50;
                    x_pos_ribp -= 62.5;
                    y_pos_ribp -= 59;
                    increase_width_by = 1.5;
                }
                if (specific_drawing == 74) {
                    my_pixels_height += 60;
                    x_pos_ribp -= 97.5;
                    y_pos_ribp -= 67;
                    increase_width_by = 1.9;
                }
                if (specific_drawing == 75) {
                    my_pixels_height += 130;
                    x_pos_ribp -= 102.5;
                    y_pos_ribp -= 60;
                    increase_width_by = 1.2;
                }
                if (specific_drawing >= 76 && specific_drawing <= 77) {
                    my_pixels_height += 20;
                    x_pos_ribp -= 108.5;
                    y_pos_ribp -= 30;
                    increase_width_by = 3.5;
                }
                if (specific_drawing == 78) {
                    my_pixels_height += 130;
                    x_pos_ribp -= 69.5;
                    y_pos_ribp -= 22;
                    increase_width_by = 0.9;
                }
                if (specific_drawing == 79) {
                    my_pixels_height += 30;
                    x_pos_ribp -= 43.5;
                    y_pos_ribp -= 53;
                    increase_width_by = 1.4;
                }
                if (specific_drawing >= 80 && specific_drawing <= 82) {
                    my_pixels_height += 40;
                    x_pos_ribp -= 60.5;
                    y_pos_ribp -= 45;
                    increase_width_by = 1.6;
                }
                if (specific_drawing >= 83 && specific_drawing <= 95) {
                        my_pixels_height += 38;
                        x_pos_ribp -= 62.5;
                        y_pos_ribp -= 42;
                        increase_width_by = 1.7;
                }
                if (specific_drawing >= 96 && specific_drawing <= 104) {
                        my_pixels_height += 8;
                        x_pos_ribp -= 62.5;
                        y_pos_ribp -= 12;
                        increase_width_by = 2.5;
                }
                if (specific_drawing >= 105 && specific_drawing <= 109) {
                        my_pixels_height += 98;
                        x_pos_ribp -= 53.0;
                        y_pos_ribp -= 112;
                        increase_width_by = 0.9;
                }
                if (specific_drawing >= 110 && specific_drawing <= 111) {
                        my_pixels_height += 48;
                        x_pos_ribp -= 96.0;
                        y_pos_ribp -= 30;
                        increase_width_by = 2.4;
                }
                if (specific_drawing == 112) {
                        my_pixels_height += 38;
                        x_pos_ribp -= 60.0;
                        y_pos_ribp -= 40;
                        increase_width_by = 1.6;
                }
                if (specific_drawing == 113) {
                        my_pixels_height += 48;
                        x_pos_ribp -= 66.0;
                        y_pos_ribp -= 50;
                        increase_width_by = 1.6;
                }
                if (specific_drawing >= 114 && specific_drawing <= 120) {
                        my_pixels_height += 28;
                        x_pos_ribp -= 91.0;
                        y_pos_ribp -= 34;
                        increase_width_by = 2.7;
                }
                if (specific_drawing >= 121 && specific_drawing <= 127) {
                        my_pixels_height += 168;
                        x_pos_ribp -= 94.5;
                        y_pos_ribp -= 50;
                        increase_width_by = 1.0;
                }
                if (specific_drawing >= 128 && specific_drawing <= 129) {
                        my_pixels_height += 248;
                        x_pos_ribp -= 85.5;
                        y_pos_ribp -= 105;
                        increase_width_by = 0.7;
                }
                if (specific_drawing == 130) {
                        my_pixels_height += 178;
                        x_pos_ribp -= 84.5;
                        y_pos_ribp -= 25;
                        increase_width_by = 0.85;
                }
                if (specific_drawing == 132) {
                        my_pixels_height += 68;
                        x_pos_ribp -= 65.5;
                        y_pos_ribp -= 75;
                        increase_width_by = 1.3;
                }
                if (specific_drawing >= 133 && specific_drawing <= 136) {
                        my_pixels_height += 98;
                        x_pos_ribp -= 97.5;
                        y_pos_ribp -= 15;
                        increase_width_by = 1.5;
                }
                if (specific_drawing >= 137 && specific_drawing <= 140) {
                        my_pixels_height += 123;
                        x_pos_ribp -= 98.5;
                        y_pos_ribp -= 15;
                        increase_width_by = 1.3;
                }
                if (specific_drawing >= 141 && specific_drawing <= 144) {
                        my_pixels_height += 15;
                        x_pos_ribp -= 43.5;
                        y_pos_ribp += 145;
                        increase_width_by = 1.8;
                }
                if (specific_drawing >= 145 && specific_drawing <= 148) {
                        my_pixels_height -= 13;
                        x_pos_ribp -= 78.5;
                        y_pos_ribp += 80;
                        increase_width_by = 5.0;
                }
                if (specific_drawing >= 149 && specific_drawing <= 152) {
                        my_pixels_height += 133;
                        x_pos_ribp -= 76.5;
                        y_pos_ribp += 76;
                        increase_width_by = 1.0;
                }
                if (specific_drawing >= 153 && specific_drawing <= 161) {
                        my_pixels_height += 90;
                        x_pos_ribp -= 96.5;
                        y_pos_ribp -= 10;
                        increase_width_by = 1.6;
                }
                if (specific_drawing >= 163 && specific_drawing <= 166) {
                        my_pixels_height += 160;
                        x_pos_ribp -= 90.5;
                        y_pos_ribp -= 60;
                        increase_width_by = 1.0;
                }
                if (specific_drawing >= 167 && specific_drawing <= 169) {
                        my_pixels_height += 160;
                        x_pos_ribp -= 122.5;
                        y_pos_ribp -= 23;
                        increase_width_by = 1.3;
                }
                if (specific_drawing >= 170 && specific_drawing <= 172) {
                        my_pixels_height += 230;
                        x_pos_ribp -= 111.5;
                        y_pos_ribp -= 20;
                        increase_width_by = 0.9;
                }
                if (specific_drawing == 173) {
                        my_pixels_height += 225;
                        x_pos_ribp -= 94.5;
                        y_pos_ribp -= 15;
                        increase_width_by = 0.8;
                }
                if (specific_drawing == 174) {
                        my_pixels_height += 40;
                        x_pos_ribp -= 78.5;
                        y_pos_ribp -= 48;
                        increase_width_by = 2.0;
                }
                if (specific_drawing == 175) {
                        my_pixels_height += 30;
                        x_pos_ribp -= 69.5;
                        y_pos_ribp -= 38;
                        increase_width_by = 2.0;
                }
                if (specific_drawing == 176 || specific_drawing == 177) {
                        my_pixels_height += 90;
                        x_pos_ribp -= 74.5;
                        y_pos_ribp -= 98;
                        increase_width_by = 1.25;
                }
                if (specific_drawing == 178) {
                        my_pixels_height += 225;
                        x_pos_ribp -= 72.5;
                        y_pos_ribp -= 118;
                        increase_width_by = 0.65;
                }
                if (specific_drawing >= 179 && specific_drawing <= 180) {
                        my_pixels_height += 35;
                        x_pos_ribp -= 66.5;
                        y_pos_ribp -= 37;
                        increase_width_by = 1.9;
                }
                if (specific_drawing >= 183 && specific_drawing <= 187) {
                        my_pixels_height += 15;
                        x_pos_ribp -= 24.5;
                        y_pos_ribp -= 37;
                        increase_width_by = 1.2;
                }
                if (specific_drawing >= 190 && specific_drawing <= 193) {
                        my_pixels_height += 75;
                        x_pos_ribp -= 62.5;
                        y_pos_ribp -= 78;
                        increase_width_by = 1.2;
                }
                if (specific_drawing >= 195 && specific_drawing <= 197) {
                        my_pixels_height += 275;
                        x_pos_ribp -= 62.5;
                        y_pos_ribp -= 88;
                        increase_width_by = 0.8;
                }
            } else {
                if (i_am_a_girl == true) {
                    /** replace bibletar_hats with specific_drawing, I upgraded detection skills, this
                     * variable is more accurate and yes, it knows whether it is for hats, glasses or 
                     * shirt, and etc
                     */
                    // default 
                    increase_width_by = 1.4;
                    if (specific_drawing > 1 && specific_drawing <= 3) {
                        my_pixels_height += 0;
                        x_pos_ribp += 0;
                        y_pos_ribp += 0;
                        increase_width_by = 1.4;
                    }
                    if (specific_drawing == 4) {
                        my_pixels_height += 76;
                        x_pos_ribp -= 62.5;
                        y_pos_ribp -= 83;
                        increase_width_by = 1.2;
                    }
                    if (specific_drawing >= 5 && specific_drawing <= 7) {
                        my_pixels_height += 11;
                        x_pos_ribp -= 93;
                        y_pos_ribp -= 10;
                        increase_width_by = 3.0;
                    }
                    if (specific_drawing >= 8 && specific_drawing <= 9) {
                        my_pixels_height += 25;
                        x_pos_ribp -= 62;
                        y_pos_ribp -= 35;
                        increase_width_by = 3.0;
                    }
                    if (specific_drawing == 10) {
                        my_pixels_height += 55;
                        x_pos_ribp -= 57;
                        y_pos_ribp -= 62;
                        increase_width_by = 1.3;
                    }
                    if (specific_drawing >= 11 && specific_drawing <= 13) {
                        my_pixels_height += 155;
                        x_pos_ribp -= 117;
                        y_pos_ribp -= 32;
                        increase_width_by = 1.4;
                    }
                    if (specific_drawing == 14) {
                        my_pixels_height += 20;
                        x_pos_ribp -= 95;
                        y_pos_ribp -= 32;
                        increase_width_by = 3.0;
                    }
                    if (specific_drawing >= 15 && specific_drawing <= 16) {
                        my_pixels_height += 10;
                        x_pos_ribp -= 70;
                        y_pos_ribp -= 22;
                        increase_width_by = 2.7;
                    }
                    if (specific_drawing == 17) {
                        my_pixels_height += 50;
                        x_pos_ribp -= 70;
                        y_pos_ribp -= 62;
                        increase_width_by = 1.6;
                    }
                    if (specific_drawing == 18) {
                        my_pixels_height += 100;
                        x_pos_ribp -= 63;
                        y_pos_ribp -= 112;
                        increase_width_by = 1.0;
                    }
                    if (specific_drawing >= 19 && specific_drawing <= 20) {
                        my_pixels_height += 120;
                        x_pos_ribp -= 78;
                        y_pos_ribp -= 40;
                        increase_width_by = 1.1;
                    }
                    if (specific_drawing >= 21 && specific_drawing <= 22) {
                        my_pixels_height += 120;
                        x_pos_ribp -= 98;
                        y_pos_ribp -= 15;
                        increase_width_by = 1.3;
                    }
                    if (specific_drawing == 23) {
                        my_pixels_height += 140;
                        x_pos_ribp -= 111;
                        y_pos_ribp -= 15;
                        increase_width_by = 1.3;
                    }
                    if (specific_drawing == 24) {
                        my_pixels_height += 230;
                        x_pos_ribp -= 111;
                        y_pos_ribp -= 20;
                        increase_width_by = 0.9;
                    }
                    if (specific_drawing >= 25 && specific_drawing <= 34) {
                        my_pixels_height += 45;
                        x_pos_ribp -= 67;
                        y_pos_ribp -= 50;
                        increase_width_by = 1.7;
                    }
                    if (specific_drawing == 35) {
                        my_pixels_height += 25;
                        x_pos_ribp -= 73;
                        y_pos_ribp -= 35;
                        increase_width_by = 2.3;
                    }
                    if (specific_drawing == 36) {
                        my_pixels_height += 275;
                        x_pos_ribp -= 63.5;
                        y_pos_ribp -= 90;
                        increase_width_by = 0.8;
                    }
                    if (specific_drawing == 37) {
                        my_pixels_height += 20;
                        x_pos_ribp -= 63;
                        y_pos_ribp -= 30;
                        increase_width_by = 2.25;
                    }
                    if (specific_drawing == 38) {
                        my_pixels_height += 5;
                        x_pos_ribp -= 70;
                        y_pos_ribp -= 5;
                        increase_width_by = 3.0;
                    }
                    if (specific_drawing >= 39 && specific_drawing <= 41) {
                        my_pixels_height += 40;
                        x_pos_ribp -= 200;
                        y_pos_ribp -= 40;
                        increase_width_by = 5.0;
                    }
                    if (specific_drawing >= 42 && specific_drawing <= 44) {
                        my_pixels_height += 80;
                        x_pos_ribp -= 175;
                        y_pos_ribp -= 85;
                        increase_width_by = 3.0;
                    }
                    if (specific_drawing == 45) {
                        my_pixels_height += 100;
                        x_pos_ribp -= 35;
                        y_pos_ribp -= 65;
                        increase_width_by = 1.0;
                    }
                    if (specific_drawing >= 46 && specific_drawing <= 48) {
                        my_pixels_height += 150;
                        x_pos_ribp -= 135;
                        y_pos_ribp -= 60;
                        increase_width_by = 1.5;
                    }
                    if (specific_drawing >= 49 && specific_drawing <= 51) {
                        my_pixels_height += 45;
                        x_pos_ribp -= 125;
                        y_pos_ribp -= 50;
                        increase_width_by = 2.9;
                    }
                }
            }
        }
        // eyes
        if (type_of_drawing == 6) {
            increase_width_by = 4.8;
            x_pos_ribp += 2;
        }
        // eyebrows
        if (type_of_drawing == 7) {
            increase_width_by = 8.3;
        }
        // noses
        if (type_of_drawing == 8) {
            /**sometimes need to add a default so that other coders are developers don't think the nose
             * has disappeared or some of my other code isn't working
             */
            // default
            increase_width_by = 0.5;
            if (specific_drawing == 1 || specific_drawing == 2) {
                increase_width_by = 0.5;
            }
            if (specific_drawing == 3) {
                my_pixels_height += 3;
                increase_width_by = 0.4;
            }
            if (specific_drawing == 4) {
                my_pixels_height -= 18;
                x_pos_ribp += 0;
                y_pos_ribp += 10;
                increase_width_by = 2.0;
            }
            if (specific_drawing == 6) {
                my_pixels_height -= 4;
                x_pos_ribp -= 5;
                y_pos_ribp += 0;
                increase_width_by = 1.0;
            }
            if (specific_drawing == 8) {
                my_pixels_height += 0;
                x_pos_ribp -= 3;
                y_pos_ribp += 0;
                increase_width_by = 1.0;
            }
            if (specific_drawing == 9) {
                my_pixels_height -= 10;
                x_pos_ribp -= 0;
                y_pos_ribp += 7;
                increase_width_by = 0.7;
            }
            if (specific_drawing == 10) {
                my_pixels_height += 0;
                x_pos_ribp += 0;
                y_pos_ribp += 0;
                increase_width_by = 0.44;
            }
            if (specific_drawing == 11 || specific_drawing == 12) {
                my_pixels_height -= 15;
                x_pos_ribp -= 0;
                y_pos_ribp += 13;
                increase_width_by = 1.7;
            }
        }
        // mouths
        if (type_of_drawing == 9) {
            increase_width_by = 3.3;
        }
        // hair
        if (type_of_drawing == 10) {
            /* because depending on the type of hair especially girls hairs, resizing shapes will have to 
            differ by a lot, it will be based off of 2 things, whether the player is male or female as well
            as off of the variable bibletar_hair, it's not just resizing the width that needs to take
            place but in some scenarios even the height as well,
            as of the UPGRADE that took place on August 31, 2026, I will no longer be using the variable bibletar_hair, 
            I will be using the variable specific_drawing */
            if (i_am_a_boy == true) {
                increase_width_by = 3.0;
                if (specific_drawing >= 10 && specific_drawing <= 14) {
                    my_pixels_height += 6;
                    x_pos_ribp -= 20;
                    y_pos_ribp += 7;
                    increase_width_by = 3.1;
                }
                if (specific_drawing >= 15 && specific_drawing <= 20) {
                    my_pixels_height += 65;
                    x_pos_ribp -= 13;
                    y_pos_ribp -= 12;
                    increase_width_by = 1.5;
                }
                if (specific_drawing >= 21 && specific_drawing <= 28) {
                    my_pixels_height += 10;
                    x_pos_ribp -= 4.5;
                    y_pos_ribp -= 0;
                    increase_width_by = 2.6;
                }
                if (specific_drawing >= 36 && specific_drawing <= 42) {
                    my_pixels_height += 27;
                    x_pos_ribp -= 4.5;
                    y_pos_ribp -= 20;
                    increase_width_by = 2.0;
                }
                if (specific_drawing >= 43 && specific_drawing <= 49) {
                    my_pixels_height += 13;
                    x_pos_ribp -= 13.5;
                    y_pos_ribp -= -8;
                    increase_width_by = 2.8;
                }
                if (specific_drawing >= 50 && specific_drawing <= 56) {
                    my_pixels_height += 35;
                    x_pos_ribp -= 48.5;
                    y_pos_ribp -= 5;
                    increase_width_by = 2.5;
                }
                if (specific_drawing == 57) {
                    my_pixels_height += 63;
                    x_pos_ribp -= 15.5;
                    y_pos_ribp -= 25;
                    increase_width_by = 1.53;
                }
                if (specific_drawing >= 58 && specific_drawing <= 63) {
                    my_pixels_height += 63;
                    x_pos_ribp -= 11.5;
                    y_pos_ribp -= 25;
                    increase_width_by = 1.5;
                }
                if (specific_drawing == 64) {
                    my_pixels_height += 33;
                    x_pos_ribp -= 25.5;
                    y_pos_ribp -= 5;
                    increase_width_by = 2.2;
                }
                if (specific_drawing >= 65 && specific_drawing <= 70) {
                    my_pixels_height += 43;
                    x_pos_ribp -= 25.5;
                    y_pos_ribp -= 5;
                    increase_width_by = 2.0;
                }
                if (specific_drawing == 71 || specific_drawing == 72 || specific_drawing == 74 || specific_drawing == 76) {
                    my_pixels_height += -20;
                    x_pos_ribp -= -13;
                    y_pos_ribp -= -115;
                    increase_width_by = 4.9;
                }
                if (specific_drawing == 73 || specific_drawing == 75 || specific_drawing == 77) {
                    my_pixels_height += 90;
                    x_pos_ribp -= 8;
                    y_pos_ribp -= 0;
                    increase_width_by = 1.1;
                }
                if (specific_drawing == 78 || specific_drawing == 80 || specific_drawing == 82 || specific_drawing == 84 || specific_drawing == 86) {
                    my_pixels_height += -3;
                    x_pos_ribp -= -3;
                    y_pos_ribp -= -100;
                    increase_width_by = 3.1;
                }
                if (specific_drawing == 79 || specific_drawing == 81 || specific_drawing == 83 || specific_drawing == 85 || specific_drawing == 87) {
                    my_pixels_height += 100;
                    x_pos_ribp -= 5;
                    y_pos_ribp -= 0;
                    increase_width_by = 1.0;
                }
                if (specific_drawing >= 88 && specific_drawing <= 92) {
                    my_pixels_height += 100;
                    x_pos_ribp -= 5;
                    y_pos_ribp -= 0;
                    increase_width_by = 1.0;
                }
                if (specific_drawing >= 93 && specific_drawing <= 98) {
                    my_pixels_height += 133;
                    x_pos_ribp -= 5;
                    y_pos_ribp -= 3;
                    increase_width_by = 0.8;
                }
                if (specific_drawing >= 99 && specific_drawing <= 104) {
                    my_pixels_height += 233;
                    x_pos_ribp -= 5;
                    y_pos_ribp -= 10;
                    increase_width_by = 0.5;
                }
            } else {
                if (i_am_a_girl == true) {
                    if (specific_drawing >  0 && specific_drawing < 6) {
                        /* my_pixels_height to increase size and increase_width_by is for resizing
                         the width of the image base off of the height *BE CAREFUL!!!!! */
                        my_pixels_height += 81;
                        x_pos_ribp -= 33;
                        y_pos_ribp -= 25;
                        increase_width_by = 1.6;
                    }
                    if (specific_drawing >= 6 && specific_drawing <= 11) {
                        my_pixels_height += 121;
                        x_pos_ribp -= 14;
                        y_pos_ribp -= 60;
                        increase_width_by = 1.0;
                    }
                    if (specific_drawing >= 12 && specific_drawing <= 17) {
                        my_pixels_height += 175;
                        x_pos_ribp -= 17;
                        y_pos_ribp -= 35;
                        increase_width_by = 0.8;
                    }
                    if (specific_drawing >= 18 && specific_drawing <= 23) {
                        my_pixels_height += 133;
                        x_pos_ribp -= 18;
                        y_pos_ribp -= 15;
                        increase_width_by = 1.13;
                    }
                    if (specific_drawing >= 24 && specific_drawing <= 29) {
                        my_pixels_height += 183;
                        x_pos_ribp -= 21;
                        y_pos_ribp -= 0;
                        increase_width_by = 0.83;
                    }
                    if (specific_drawing >= 30 && specific_drawing <= 35) {
                        my_pixels_height += 234;
                        x_pos_ribp -= 25;
                        y_pos_ribp -= 10;
                        increase_width_by = 0.70;
                    }
                    if (specific_drawing >= 36 && specific_drawing <= 41) {
                        my_pixels_height += 204;
                        x_pos_ribp -= 23;
                        y_pos_ribp -= 24;
                        increase_width_by = 0.73;
                    }
                    if (specific_drawing >= 42 && specific_drawing <= 47) {
                        my_pixels_height += 154;
                        x_pos_ribp -= 50;
                        y_pos_ribp -= 15;
                        increase_width_by = 1.2;
                    }
                    if (specific_drawing >= 48 && specific_drawing <= 53) {
                        my_pixels_height += 126;
                        x_pos_ribp -= 17;
                        y_pos_ribp -= 22;
                        increase_width_by = 1.00;
                    }
                    if (specific_drawing >= 54 && specific_drawing <= 60) {
                        my_pixels_height += 180;
                        x_pos_ribp -= 55;
                        y_pos_ribp -= 12;
                        increase_width_by = 1.10;
                    }
                }
            }

        }
        /**careful not to confuse function parameters with variables, that's why I added
         * the _ribp
         */

        my_pixels_width = (my_pixels_height*increase_width_by);
        ctx.drawImage(what_to_draw, x_pos_ribp, y_pos_ribp, my_pixels_width, my_pixels_height);
        /**Don't run the printMeOutSvgFileNumber function for to long, or else it will crash your computer
         */
        // printMeOutSvgFileNumber();
    }
    /** drawing / x_pos / y_pos / size / type, reference lines 29-38 or if that changes reference 
     * function called item_chosen specifcally for closet_section NOT shop_section
     */

    var shift_bibletar_x_over = -950;
    var shift_bibletar_y_over = 0;

    resizeImageByPixels_and_draw(img_background, 980 + shift_bibletar_x_over, 100 + shift_bibletar_y_over, 300, 1);
    resizeImageByPixels_and_draw(img_face, 1067.5 + shift_bibletar_x_over, 145 + shift_bibletar_y_over, 175, 2);
    resizeImageByPixels_and_draw(img_shirt, 1077 + shift_bibletar_x_over, 300 + shift_bibletar_y_over, 100, 3);
    resizeImageByPixels_and_draw(img_eyes, 1115 + shift_bibletar_x_over, 200 + shift_bibletar_y_over, 20, 6);
    resizeImageByPixels_and_draw(img_eyebrows, 1114 + shift_bibletar_x_over, 187 + shift_bibletar_y_over, 12, 7);
    resizeImageByPixels_and_draw(img_mouths, 1139 + shift_bibletar_x_over, 260 + shift_bibletar_y_over, 17, 9);
    resizeImageByPixels_and_draw(img_noses, 1153 + shift_bibletar_x_over, 220 + shift_bibletar_y_over, 30, 8);
    resizeImageByPixels_and_draw(img_glasses, 1150 + shift_bibletar_x_over, 230 + shift_bibletar_y_over, 50, 4);
    resizeImageByPixels_and_draw(img_hair, 1097 + shift_bibletar_x_over, 135 + shift_bibletar_y_over, 44, 10);
    resizeImageByPixels_and_draw(img_hats, 1150 + shift_bibletar_x_over, 140 + shift_bibletar_y_over, 50, 5);

}

function show_my_country() {
    var country_svg = my_country;

    /**Since country is a string I don't need to edit it, unless the name
     * of the country has two words such as South Korea, I will have to set it
     * from "South Korea" to "South_Korea"
     */

    if (my_country == "South Africa") {
        country_svg == "South_Africa"
    }
    if (my_country == "United Arab Emirates") {
        country_svg == "United_Arab_Emirates"
    }
    if (my_country == "South Korea") {
        country_svg == "South_Korea"
    }
    if (my_country == "United Kingdom") {
        country_svg == "United_Kingdom"
    }
    if (my_country == "New Zealand") {
        country_svg == "New_Zealand"
    }


    // black shadow add
    ctx.shadowColor = 'rgb(8, 8, 8)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    // Don't touch this
    img_my_country.src = "./images/country_" + country_svg + ".svg";
    ctx.drawImage(img_my_country, 50, 465, 100, 50);

    // black shadow remove
    ctx.shadowColor = "white";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
}

function displayTextInfo () {

    // black shadow add
    ctx.shadowColor = 'rgb(8, 8, 8)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    var x_shift_back = 230;
    ctx.font = "15px Arial";
    ctx.fillStyle = 'rgb(252, 252, 251)';
    ctx.fillText(` Revelation 22:12 "And, behold, I come quickly; and my reward is with me, to give every man according as his work shall be." `, (((canvas.width)/2) - x_shift_back), canvas.height - 20);

    // black shadow remove
    ctx.shadowColor = "white";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

}

function draw_account_background() {
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    /** original color
     * gradient.addColorStop(0, 'rgb(101, 102, 102)');  
     */
    gradient.addColorStop(0, 'rgb(101, 102, 102)');     // Start color (0%)
    // gradient.addColorStop(0.5, 'yellow'); // Middle color (50%)
    if (i_am_a_boy == true) {
        gradient.addColorStop(1, 'rgb(1, 132, 152)');    // End color (100%)
    } else {
        if (i_am_a_girl == true) {
            gradient.addColorStop(1, 'rgb(152, 1, 114)');    // End color (100%)
        }
    }
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function display_my_progress_info() {

    // translucent rectangle left side of account page
    ctx.fillStyle = "rgba(12, 12, 12, 0.3)"; 
    ctx.fillRect(0, 0, 430, 800);

    // black shadow add
    ctx.shadowColor = 'rgb(8, 8, 8)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    var score_and_goal_y_pos = 485;
    var score_and_goal_xpos = 170;

    ctx.font = "30px Arial";
    ctx.fillStyle = 'rgb(253, 253, 253)';
    ctx.fillText("Points: " + my_points, score_and_goal_xpos, score_and_goal_y_pos);

    var goal_points = 100;

    ctx.font = "20px Arial";
    ctx.fillStyle = 'rgb(253, 253, 253)';
    ctx.fillText("Try to reach " + goal_points + " points!", score_and_goal_xpos, score_and_goal_y_pos + 30);

    // black shadow remove
    ctx.shadowColor = "white";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    var bar_x_size = 300;
    var bar_y_pos = 535;

    // black shadow add
    ctx.shadowColor = 'rgb(8, 8, 8)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    // goal to reach 100 points
    ctx.fillStyle = 'rgb(245, 6, 6)';
    ctx.fillRect(50, bar_y_pos, bar_x_size, 30);

    // black shadow remove
    ctx.shadowColor = "white";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.fillStyle = 'rgb(12, 166, 4)';
    if (my_points <= 100) {
        ctx.fillRect(50, bar_y_pos, (my_points * (bar_x_size/goal_points)), 30);
    } else {
        // goal has been reached
        ctx.fillRect(50, bar_y_pos, (goal_points * (bar_x_size/goal_points)), 30);
    }

}

function displayMouseX_and_MouseY () {
    if (i_am_a_developer == true) {

        // black shadow add
    ctx.shadowColor = 'rgb(8, 8, 8)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;


    
    
    ctx.font = "30px Arial";
    ctx.strokeStyle = 'rgb(190, 36, 36)';
    ctx.strokeText("MouseX: " + mouseX + " MouseY: " + mouseY, 10, 30);
    ctx.fillStyle = 'rgb(190, 36, 36)';
    ctx.fillText("MouseX: " + mouseX + " MouseY: " + mouseY, 10, 30);
    
    // black shadow remove
    ctx.shadowColor = "white";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    }

}


function drawGame() {
    // blue background
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgb(121, 121, 121)');     // Start color (0%)
    gradient.addColorStop(0.5, 'rgb(163, 163, 163)');
    gradient.addColorStop(1, 'rgb(196, 197, 198)');    // End color (100%)
    // ctx.fillStyle = 'rgb(189, 189, 190)';
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    draw_account_background();
    loadingBox();
    display_my_progress_info();
    myBibletar();
    show_my_country();
    displayTextInfo();
    displayMouseX_and_MouseY();

}

function resizeCanvas() {
    // Sets the internal drawing resolution to the exact window bounds
    canvas.width = window.innerWidth -2;
    canvas.height = window.innerHeight -90;

    /* Note: Changing the canvas size clears the context state. 
    Redraw or call your render function */

}

function gameLoop() {
    /**Wiping the entire screen clear is important before drawing your next batch */
    resizeCanvas();
    wipeOutEntireScreen();
    drawGame();
    /** All that requestAnimationFrame does it create a forever loop that can help me make
     * games or animations also, you can't control the fps it specifically hooked to match your
     * monitor's physical refresh rate
     */
    requestAnimationFrame(gameLoop);
}

/** Inititalize Dimensions on load */
gameLoop();

// console.log(ctx);