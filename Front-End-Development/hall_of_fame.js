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

var hall_of_fame_clicked_is_a_boy = true;
var hall_of_fame_clicked_is_a_girl = false;

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const top_border = 90;
const side_border = 2;
var player_Clicked_Name = "Unknown Player"

var hall_of_fame_bibletar_svg = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var box_x_pos = 1;
var gameOn = false;
var online = 1;
var members = 1000;
/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var play_front_page_text = [];


var img_background = new Image();
img_background.src = "./images/background1.svg"; // Set source URL
img_background.alt = "background image";

var img_my_country = new Image();
img_my_country.src = "./images/country_america.svg"; // Set source URL
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



figure_out_whether_hall_of_fame_click_is_a_boy_or_a_girl();
function figure_out_whether_hall_of_fame_click_is_a_boy_or_a_girl () {
    if (hall_of_fame_bibletar_svg[0]  == 1) {
        hall_of_fame_clicked_is_a_boy = true;
        hall_of_fame_clicked_is_a_girl = false;
    } else {
        hall_of_fame_clicked_is_a_girl = true;
        hall_of_fame_clicked_is_a_boy = false;
    }
}

function wipeOutEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (gameOn != false) {
        // When I keep erasing and rewriting it, I can't copy and paste the text
        big_text.innerText = '';
    }
}

function backgroundColorScreen () {
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgb(88, 119, 139)');     // Start color (0%)
    gradient.addColorStop(0.5, 'rgb(107, 140, 140)');
    gradient.addColorStop(1, 'rgb(90, 102, 118)');    // End color (100%)
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function update_HTML_Text_And_Data_Information () {
    const members_display = document.getElementById('members-display');
    const online_display = document.getElementById('online-display');
    members_display.innerText = "Members: " + members + "+";
    online_display.innerText = "Online: " + online;
}

var liveDisplayText = [];
var liveDisplayPositions = [];
liveDisplayText.push("LIVE");
var liveDisplay_Text_Spacing = 60;
for (let i = 0; i < 100; i++) {
    liveDisplayPositions.push(i * liveDisplay_Text_Spacing);
}
function live_Display_Slider () {
    ctx.fillStyle = 'rgb(214, 6, 6)';
    ctx.fillRect(0, 0, canvas.width, 30);
    var speed_drift = 1;

    for (let i = 0; i < liveDisplayPositions.length; i++) {
        ctx.font = "20px Arial";
        ctx.fillStyle = 'rgb(252, 250, 250)';
        ctx.fillText(liveDisplayText[0], liveDisplayPositions[i], 20);
        liveDisplayPositions[i] -= speed_drift;

        if (liveDisplayPositions[i] < -50) {
            /* if the text has slidden of the screen place it about 20 pixels behind the last text in our array */
            liveDisplayPositions[i] = liveDisplayPositions[(liveDisplayPositions.length - 1)] + liveDisplay_Text_Spacing;
        }

        /**This is a weird scenario, a case where everything has gone off the screen then push it all back onto the
         * screen 
         */
        if (liveDisplayPositions[(liveDisplayPositions.length -1)] < - 100) {
            for(let j = 0; j < liveDisplayPositions.length; j++) {
                liveDisplayPositions[j] += 1000;
            }
        }
    }

}

function loadingBox() {
    // looading box
    ctx.fillStyle = 'rgba(255, 26, 104, 1)';
    ctx.fillRect(50 + box_x_pos, canvas.height -50, 50, 50);
    
    box_x_pos += 3;
    if (box_x_pos > canvas.width + 100) {
        box_x_pos = -50;
    }

}

function playerClickedBibletar () {

    // WRITE Player Clicked's NAME
    var shift_name_y_over = -100;

    ctx.font = "40px Arial";
    ctx.strokeStyle = 'rgb(10, 9, 9)';
    ctx.strokeText(player_Clicked_Name, 1150, 500 + shift_name_y_over);
    ctx.fillStyle = 'rgb(8, 8, 8)';
    ctx.fillText(player_Clicked_Name, 1150, 500 + shift_name_y_over);

    ctx.font = "20px Arial";
    ctx.fillStyle = 'rgb(8, 8, 8)';
    ctx.fillText("Top player on Leaderboard", 1160, 535 + shift_name_y_over);

    
    /** Have to recalculate the src link based off of hall_of_fame_bibletar_svg */
    img_background.src = "./images/background" + hall_of_fame_bibletar_svg[1] + ".svg";
    img_eyes.src = "./images/eyes" + hall_of_fame_bibletar_svg[6] + ".svg";
    img_noses.src = "./images/noses" + hall_of_fame_bibletar_svg[8] + ".svg";
    if (hall_of_fame_clicked_is_a_boy == true) {
        /**You might be wondering why include face as well, because women's necks are in
         * fact visibily thinner, and men's necks are in fact visibly thicker, also
         * women sometimes put on makeup, which means their mouths = lips will be
         * different colors, also there are also some other differences which i will leave
         * up to the professionals
         */
        img_face.src = "./images/face_men" + hall_of_fame_bibletar_svg[2] + ".svg";
        img_shirt.src = "./images/shirt_men" + hall_of_fame_bibletar_svg[3] + ".svg";
        img_glasses.src = "./images/glasses_men" + hall_of_fame_bibletar_svg[4] + ".svg";
        img_hats.src = "./images/hats_men" + hall_of_fame_bibletar_svg[5] + ".svg";
        img_eyebrows.src = "./images/eyebrows_men" + hall_of_fame_bibletar_svg[7] + ".svg";
        img_mouths.src = "./images/mouths_men" + hall_of_fame_bibletar_svg[9] + ".svg";
        img_hair.src = "./images/hair_men" + hall_of_fame_bibletar_svg[10] + ".svg";
    } else {
        if (hall_of_fame_clicked_is_a_girl == true) {
            img_face.src = "./images/face_women" + hall_of_fame_bibletar_svg[2] + ".svg";
            img_shirt.src = "./images/shirt_women" + hall_of_fame_bibletar_svg[3] + ".svg";
            img_glasses.src = "./images/glasses_women" + hall_of_fame_bibletar_svg[4] + ".svg";
            img_hats.src = "./images/hats_women" + hall_of_fame_bibletar_svg[5] + ".svg";
            img_eyebrows.src = "./images/eyebrows_women" + hall_of_fame_bibletar_svg[7] + ".svg";
            img_mouths.src = "./images/mouths_women" + hall_of_fame_bibletar_svg[9] + ".svg";
            img_hair.src = "./images/hair_women" + hall_of_fame_bibletar_svg[10] + ".svg";
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
        var specific_drawing = hall_of_fame_bibletar_svg[type_of_drawing];

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

            if (hall_of_fame_clicked_is_a_boy == true) {
                if(specific_drawing > 14) {
                    my_pixels_height += 0;
                    x_pos_ribp -= 7;
                    y_pos_ribp += 0;
                    increase_width_by = 1.85
                }
            } else {
                if (hall_of_fame_clicked_is_a_girl == true ) {

                }
            }
        }
        // glasses
        if (type_of_drawing == 4) {
            my_pixels_height -= 13;
            x_pos_ribp -= 62;
            y_pos_ribp -= 33;
            increase_width_by = 4.2;
        }
        // hats
       if (type_of_drawing == 5) {
            increase_width_by += 2.0;
            if (hall_of_fame_clicked_is_a_boy == true) {
                if (specific_drawing > 0 && specific_drawing < 9) {
                    // caps
                    my_pixels_height += 11;
                    x_pos_ribp -= 93;
                    y_pos_ribp -= 10;
                    increase_width_by = 3.0;
                }
            } else {
                if (hall_of_fame_clicked_is_a_girl == true) {
                    /** replace bibletar_hats with specific_drawing, I upgraded detection skills, this
                     * variable is more accurate and yes, it knows whether it is for hats, glasses or 
                     * shirt, and etc
                     */
                    if (specific_drawing > 1) {
                        increase_width_by = 1.4;
                    }
                }
            }
        }
        // eyes
        if (type_of_drawing == 6) {
            increase_width_by = 4.8;
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
            if (hall_of_fame_clicked_is_a_boy == true) {
                increase_width_by = 3.0;
            } else {
                if (hall_of_fame_clicked_is_a_girl == true) {
                    if (specific_drawing >  0) {
                        /* my_pixels_height to increase size and increase_width_by is for resizing
                         the width of the image base off of the height *BE CAREFUL!!!!! */
                        my_pixels_height += 81;
                        x_pos_ribp -= 33;
                        y_pos_ribp -= 20;
                        increase_width_by = 1.6;
                        // console.log("Bibletar Hair: " + bibletar_hair);
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

    var shift_bibletar_x_over = 130;
    var shift_bibletar_y_over = -50;

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


function drawGame() {
    // blue background
    ctx.fillStyle = 'rgb(189, 189, 190)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    backgroundColorScreen();
    update_HTML_Text_And_Data_Information();
    live_Display_Slider();
    loadingBox();
    playerClickedBibletar();

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