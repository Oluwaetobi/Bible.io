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
    const loader_for_learn = document.querySelector(".loader");

    loader_for_learn.classList.add("loader-hidden");

    /* we don't want to just remove it from the screen but also remove it from our code too,
    we might not obe able to currently see it, but it is in fact still there hiding in the back, 
    so let's deal with that like so */
    loader_for_learn.addEventListener("transitionend", () => {
        // once the transition has ended we will do
        document.body.removeChild(loader_for_learn);
        // we removed the loader class, yay!
    })
})

var i_am_a_boy = true;
var i_am_a_girl = false;


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
var i_am_a_developer = false;
const big_text = document.getElementById('big-text');
const text_to_read = document.getElementById('text-to-read');
const top_border = 90;
const side_border = 2;
var mouseX = 0;
var mouseY = 0;
var table_clicked = 0;
var book_clicked = 0;
var my_name = "Unknown Player"

var box_x_pos = 1;
var gameOn = false;
/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var show_or_hide_text = [];
var learn_page = 1;

var timer = 0;
var different_second = 0;

var my_points = 0;
var my_cash = 0;
var my_bibletar_svg = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var img_sunday_school_teacher = new Image();
img_sunday_school_teacher.src = "./images/sunday_school_teacher.svg"; // Set source URL
img_sunday_school_teacher.alt = "Sunday School Teacher";

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


window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // This is to counter for where the canvas is actually created on the screen
    mouseX -= side_border;
    mouseY -= top_border;
})

function mouseDetections () {
    document.addEventListener("click", function (event) {
        if (learn_page == 2) {
            if (mouseX > 1075 && mouseX < 1221 && mouseY > 51 && mouseY < 83) {
                learn_page = 1;
                show_or_hide_text[1] = 0;
                show_or_hide_text[0] = 0;
            }
        }
    });
}

function displayMouseX_and_MouseY () {
    if (i_am_a_developer == true) {
        ctx.font = "30px Arial";
        ctx.strokeStyle = 'rgb(190, 36, 36)';
        ctx.strokeText("MouseX: " + mouseX + " MouseY: " + mouseY, canvas.width - 600, 30);
        ctx.fillStyle = 'rgb(190, 36, 36)';
        ctx.fillText("MouseX: " + mouseX + " MouseY: " + mouseY, canvas.width - 600, 30);
    }

}

function save_Data_to_Local_or_Session_Storage() {
    /**IMPORTANT!!!!! Only call this function when there is new data that needs to be saved */
    function setCookieUntilEndOfDay(name, value) {
        const now = new Date();

        // Create a date object set to 11:59:59 PM of the current day
        const endOfDay = new Date (
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            23, 59, 59
        );

        // Format the date to the required UTC string
        const expires = "expires=" + endOfDay.toUTCString();
        document.cookie = name + "=" + value + ";" + expires;
    }

    // going to store these cookies until the end of the day, cookies don't work on localhost
    setCookieUntilEndOfDay("my_points", encodeURIComponent(JSON.stringify(my_points)));


    // back up cookies as session storage
    sessionStorage.setItem('backup_my_points', JSON.stringify(my_points));
    localStorage.setItem('my_cash', JSON.stringify(my_cash));
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
    // const savedPoints = JSON.parse(sessionStorage.getItem('my_points'));
    const backup_savedPoints = JSON.parse(sessionStorage.getItem('backup_my_points'));
    const saved_bibletar_svg = JSON.parse(localStorage.getItem('my_bibletar_svg'));
    const saved_cash = JSON.parse(localStorage.getItem('my_cash'));
    const developer_tools = JSON.parse(localStorage.getItem('i_am_a_developer'));

    var savedPoints = cookies.my_points;    
    if (savedPoints) {
        savedPoints = JSON.parse(savedPoints);
    } else {
        if (backup_savedPoints) {
            savedPoints = backup_savedPoints;
        }
    }

    if (developer_tools) {
        i_am_a_developer = developer_tools;
    }

    if (savedName) {
        my_name = savedName;
    } else {
        // The user has not created a name yet
        my_name = "Guest Player"
    }

    if(saved_bibletar_svg) {
        my_bibletar_svg = saved_bibletar_svg;
    } else {
        // do nothing, has already been created to default
    }

    if (savedPoints) {
        my_points = savedPoints;
    } else {
        // do nothing, because the variable has already been created and set to zero at the top
    }

    if (saved_cash) {
        my_cash = saved_cash;
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

function book_Chosen(table_clicked_html, book_clicked_html) {
    table_clicked = table_clicked_html;
    book_clicked = book_clicked_html;
    learn_page = 2;

}

function show_table_or_hide_table() {
    if (learn_page == 1) {
        document.getElementById('learning-materials-box').style.display = "flex";
        document.getElementById('books_reading_mode').style.display = "none";
        document.getElementById('advertisements').style.display = "flex";
        document.getElementById('reading-tools').style.display = "none";
    }
    if (learn_page == 2) {
        document.getElementById('learning-materials-box').style.display = "none";
        document.getElementById('books_reading_mode').style.display = "block";
        document.getElementById('advertisements').style.display = "none";
        document.getElementById('reading-tools').style.display = "block";
    }
}

function wipeOutEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (learn_page != 1) {
        // When I keep erasing and rewriting it, I can't copy and paste the text
        big_text.innerText = '';
    }
    if (learn_page != 2) {
        text_to_read.innerText = '';
    }
}

function titleText() {
    if(show_or_hide_text.length < 20) {
        show_or_hide_text.push(0);
    }

    // Bible.io Live Text
    if (show_or_hide_text[0] == 0) {
        // When I keep erasing and rewriting it, I can't copy and paste the text, that's why I'm doing this
        big_text.innerText = 'Learn';
        stop_re_adding_text(0);
    } else {
        // do nothing
    }
}

function goBackSign () {
    if (learn_page == 2) {
        ctx.fillStyle = 'rgb(12, 12, 12)';
        ctx.fillRect(1130 -53, 52, 146, 36);
        if (mouseX > 1077 && mouseX < 1227 && mouseY < 83 && mouseY > 50) {
            ctx.fillStyle = 'rgb(243, 129, 8)';
        } else {
            ctx.fillStyle = 'rgb(154, 82, 6)';
        }
        ctx.fillRect(1130 -50, 55, 140, 30);
        ctx.font = "25px Arial";
        ctx.fillStyle = 'rgb(252, 250, 250)';
        ctx.fillText("Go Back", 1150 -50, 77);
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

var default_text_size = 20;
var default_text_size_in_string = (default_text_size + "px");

default_size_reading_text();
function default_size_reading_text () {
    document.getElementById('text-to-read').style.fontSize = default_text_size_in_string;
}

function make_text_smaller() {
    if (default_text_size > 6) {
        default_text_size += -5;
    } else {
        default_text_size -= 0.1;
    }
    default_text_size_in_string = (default_text_size + "px");
    document.getElementById('text-to-read').style.fontSize = default_text_size_in_string;
}

function make_text_bigger() {
    default_text_size += 5;
    default_text_size_in_string = (default_text_size + "px");
    document.getElementById('text-to-read').style.fontSize = default_text_size_in_string;
}

function drawGameAssets () {
    function resizeGameAssets (what_to_draw, x_pos_ribp, y_pos_ribp, pixel_size_width, pixel_size_height, type_of_drawing) {
        if (type_of_drawing == 1) {
            ctx.drawImage(what_to_draw, x_pos_ribp, y_pos_ribp, pixel_size_width, pixel_size_height);
        }
    }
    resizeGameAssets(img_sunday_school_teacher, 950, 150, 200, 350, 1);
}

var new_second = 0;
var seconds_spent = 0;
function showTimeSpent() {

    // timer background
    ctx.fillStyle = 'rgba(3, 3, 3, 0.5)';
    ctx.fillRect(1196, 96, 308, 128);
    ctx.fillStyle = 'rgba(7, 116, 146, 0.5)';
    ctx.fillRect(1200, 100, 300, 120);

    function formatDisplayTimeSpent(seconds_spent) {
        var min_spent = 0;
        var hr_spent = 0;

        if (seconds_spent > 59) {
            min_spent = Math.floor(seconds_spent/60);
            seconds_spent -= (min_spent * 60);
        }
        if (min_spent > 59) {
            hr_spent = Math.floor(min_spent/60);
            min_spent -= (hr_spent * 60);
        }
        if (seconds_spent < 10 && min_spent > 0) {
            seconds_spent = "0" + seconds_spent;
        }
        if (min_spent < 10 && hr_spent > 0) {
            min_spent = "0" + min_spent;
        }
        if (hr_spent < 10) {
            hr_spent = "0" + hr_spent;
        }
        if (hr_spent > 0) {
            return (hr_spent + ": " + min_spent + ": " + seconds_spent);
        } else {
            if (min_spent > 0) {
                return (min_spent + ": " + seconds_spent);
            } else {
                return (seconds_spent);
            }
        }
    }

    const date = new Date();
    const seconds = date.getSeconds();
    if (seconds != new_second) {
        new_second = seconds;
        seconds_spent += 1;
    }

    formatted_time = formatDisplayTimeSpent(seconds_spent);


    ctx.fillStyle = 'rgb(14, 53, 77)';
    ctx.fillRect(1200, 100, 300, 50);

    ctx.font = "35px Arial";
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText("Time Spent: ", 1250, 135)

    // time spent display
    ctx.font = "60px Arial";
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText(formatted_time, 1220, 200);

}

function start_timer() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // console.log(seconds);
    if (seconds != different_second) {
        different_second = seconds;
        timer += 1;

        if (seconds == 0 || seconds == 20 || seconds == 40) {
            /**Every twenty seconds you get 1 point for learning, and anytime I change data, I need
             * to save it
             */
            if (learn_page != 1) {
                // if the player is actually learning something, not just looking at the front page then give them points
                my_points += 1;
                save_Data_to_Local_or_Session_Storage();
            }
        }

    }

}

function myBibletar () {

    // WRITE Player's NAME

    // black shadow add
    ctx.shadowColor = "black";
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    
    ctx.font = "30px Arial";
    ctx.strokeStyle = 'rgb(253, 253, 253)';
    ctx.strokeText(my_name, 1190, 680);
    ctx.fillStyle = 'rgb(251, 249, 249)';
    ctx.fillText(my_name, 1190, 680);
    
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

    var shift_bibletar_x_over = 170;
    var shift_bibletar_y_over = 250;

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

function draw_Background () {
    if (learn_page == 1) {
        // blue background
        var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgb(38, 197, 222)');     // Start color (0%)
        gradient.addColorStop(0.5, 'rgb(191, 250, 72)');
        gradient.addColorStop(1, 'rgb(160, 195, 241)');    // End color (100%)
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    if (learn_page == 2) {
        var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgb(227, 229, 229)');     // Start color (0%)
        gradient.addColorStop(0.5, 'rgb(142, 143, 142)');
        gradient.addColorStop(1, 'rgb(175, 176, 176)');    // End color (100%)
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // more designs
        ctx.fillStyle = 'rgba(249, 249, 249, 0.5)';
        ctx.fillRect(1000, 100, 200, 600);
    }

}

function drawGame() {
    draw_Background();

    // ctx.fillStyle = 'rgb(176, 223, 255)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    mouseDetections();
    displayMouseX_and_MouseY();
    loadingBox();
    titleText();
    show_table_or_hide_table();
    goBackSign();
    takeCareOfText();
    if (learn_page == 2) {
        drawGameAssets();
        showTimeSpent();
    }
    myBibletar();
    start_timer();

}

function takeCareOfText () {
    if (learn_page == 2) {
        if (show_or_hide_text[1] == 0) {
            all_Text_Database();
            show_or_hide_text[0] +=1;
        } else {
            // do nothing
        }
    }


}

function all_Text_Database () {
    if (show_or_hide_text[1] == 0) {
        if (table_clicked == 1) {
            // for bible books
            Bible_DataBase();
        }
        if (table_clicked == 2) {
            // Amazing Christians From History
            Christians_From_History_DataBase();
        }
        if (table_clicked == 3) {
            // Christian Articles to Read
            Christian_Articles_DataBase();
        }
        if (table_clicked == 4) {
            // christian novels and short stories
            Christian_Novels_Database();
        }
        if (table_clicked == 5) {
            // christian poems
            Christian_Poems_Database();
        }


        // text is missing, alert and message from Bible.io
        missing_text_alert();

        // prevents text from be readded and erased, this helps allows for copying and pasting of text
        stop_re_adding_text(1);
    } 
}

function missing_text_alert() {
    // default
    if (text_to_read.innerText.trim() === "" || text_to_read.innerText.length < 5) {
        // there's no text in it
        text_to_read.innerText = `
        If you are seeing this message, it means we are missing a book from the Bible or some other piece of writing or literature, and it was incorrectly inputted onto the storage of our site.
        This could be due to a corrupted website link, human error, or some other form of evitable or inevitable incidence

        Please report this to Bible.io, including the name of the book, novel, story, or piece of literature that is missing, thank you!
        

        - A Message from the Bible.io Team | Bible.io Corporation `
        
        text_to_read.style.color = 'rgb(181, 0, 0)';
        text_to_read.style.fontWeight = "bold";
    }
}

// 66 books from the Bible
const genesis_book = JSON.parse(sessionStorage.getItem('book_of_genesis'));
const exodus_book = JSON.parse(sessionStorage.getItem('book_of_exodus'));
const leviticus_book = JSON.parse(sessionStorage.getItem('book_of_leviticus'));
const numbers_book = JSON.parse(sessionStorage.getItem('book_of_numbers'));
const deuteronomy_book = JSON.parse(sessionStorage.getItem('book_of_deuteronomy'));
const joshua_book = JSON.parse(sessionStorage.getItem('book_of_joshua'));
const judges_book = JSON.parse(sessionStorage.getItem('book_of_judges'));
const ruth_book = JSON.parse(sessionStorage.getItem('book_of_ruth'));
const first_samuel_book = JSON.parse(sessionStorage.getItem('book_of_1samuel'));
const second_samuel_book = JSON.parse(sessionStorage.getItem('book_of_2samuel'));
const first_kings_book = JSON.parse(sessionStorage.getItem('book_of_1kings'));
const second_kings_book = JSON.parse(sessionStorage.getItem('book_of_2kings'));
const first_chronicles_book = JSON.parse(sessionStorage.getItem('book_of_1chronicles'));
const second_chronicles_book = JSON.parse(sessionStorage.getItem('book_of_2chronicles'));
const ezra_book = JSON.parse(sessionStorage.getItem('book_of_ezra'));
const nehemiah_book = JSON.parse(sessionStorage.getItem('book_of_nehemiah'));
const esther_book = JSON.parse(sessionStorage.getItem('book_of_esther'));
const job_book = JSON.parse(sessionStorage.getItem('book_of_job'));
const psalms_book = JSON.parse(sessionStorage.getItem('book_of_psalms'));
const proverbs_book = JSON.parse(sessionStorage.getItem('book_of_proverbs'));
const ecclesiastes_book = JSON.parse(sessionStorage.getItem('book_of_ecclesiastes'));
const song_of_solomon_book = JSON.parse(sessionStorage.getItem('book_of_song_of_solomon'));
const isaiah_book = JSON.parse(sessionStorage.getItem('book_of_isaiah'));
const jeremiah_book = JSON.parse(sessionStorage.getItem('book_of_jeremiah'));
const lamentations_book = JSON.parse(sessionStorage.getItem('book_of_lamentations'));
const ezekiel_book = JSON.parse(sessionStorage.getItem('book_of_ezekiel'));
const daniel_book = JSON.parse(sessionStorage.getItem('book_of_daniel'));
const hosea_book = JSON.parse(sessionStorage.getItem('book_of_hosea'));
const joel_book = JSON.parse(sessionStorage.getItem('book_of_joel'));
const amos_book = JSON.parse(sessionStorage.getItem('book_of_amos'));
const obadiah_book = JSON.parse(sessionStorage.getItem('book_of_obadiah'));
const jonah_book = JSON.parse(sessionStorage.getItem('book_of_jonah'));
const micah_book = JSON.parse(sessionStorage.getItem('book_of_micah'));
const nahum_book = JSON.parse(sessionStorage.getItem('book_of_nahum'));
const habakkuk_book = JSON.parse(sessionStorage.getItem('book_of_habakkuk'));
const zephaniah_book = JSON.parse(sessionStorage.getItem('book_of_zephaniah'));
const haggai_book = JSON.parse(sessionStorage.getItem('book_of_haggai'));
const zechariah_book = JSON.parse(sessionStorage.getItem('book_of_zechariah'));
const malachi_book = JSON.parse(sessionStorage.getItem('book_of_malachi'));
const matthew_book = JSON.parse(sessionStorage.getItem('book_of_matthew'));
const mark_book = JSON.parse(sessionStorage.getItem('book_of_mark'));
const luke_book = JSON.parse(sessionStorage.getItem('book_of_luke'));
const john_book = JSON.parse(sessionStorage.getItem('book_of_john'));
const acts_book = JSON.parse(sessionStorage.getItem('book_of_acts'));
const romans_book = JSON.parse(sessionStorage.getItem('book_of_romans'));
const first_corinthians_book = JSON.parse(sessionStorage.getItem('book_of_1corinthians'));
const second_corinthians_book = JSON.parse(sessionStorage.getItem('book_of_2corinthians'));
const galatians_book = JSON.parse(sessionStorage.getItem('book_of_galatians'));
const ephesians_book = JSON.parse(sessionStorage.getItem('book_of_ephesians'));
const philippians_book = JSON.parse(sessionStorage.getItem('book_of_philippians'));
const colossians_book = JSON.parse(sessionStorage.getItem('book_of_colossians'));
const first_thessalonians_book = JSON.parse(sessionStorage.getItem('book_of_1thessalonians'));
const second_thessalonians_book = JSON.parse(sessionStorage.getItem('book_of_2thessalonians'));
const first_timothy_book = JSON.parse(sessionStorage.getItem('book_of_1timothy'));
const second_timothy_book = JSON.parse(sessionStorage.getItem('book_of_2timothy'));
const titus_book = JSON.parse(sessionStorage.getItem('book_of_titus'));
const philemon_book = JSON.parse(sessionStorage.getItem('book_of_philemon'));
const hebrews_book = JSON.parse(sessionStorage.getItem('book_of_hebrews'));
const james_book = JSON.parse(sessionStorage.getItem('book_of_james'));
const first_peter_book = JSON.parse(sessionStorage.getItem('book_of_1peter'));
const second_peter_book = JSON.parse(sessionStorage.getItem('book_of_2peter'));
const first_john_book = JSON.parse(sessionStorage.getItem('book_of_1john'));
const second_john_book = JSON.parse(sessionStorage.getItem('book_of_2john'));
const third_john_book = JSON.parse(sessionStorage.getItem('book_of_3john'));
const jude_book = JSON.parse(sessionStorage.getItem('book_of_jude'));
const revelation_book = JSON.parse(sessionStorage.getItem('book_of_revelation'));
// end of books from the Bible

function Bible_DataBase () {
    /** Instead of using the fetch api command in JavaScript to fetch Bible data from a server, I'm storing
     * it on this program, because rumor has it that some people are buying bible companies and others storing
     * book data, then get ridding of any other copies. And that they are editing some of the stuff that it says,
     * and they are doing the same thing to the Bible. I don't want none of that nonsense with the Bible!!
     * It's a sacred script, it's God's word and I'm not going to be presenting people with the edited word
     * of God. So I've taken laws in my own hands and we're storing the Bible, the entire thing, here,
     * in our code.
     */


    if (book_clicked == 1) {
        text_to_read.innerText = genesis_book;
    }
    if (book_clicked == 2) {
        text_to_read.innerText = exodus_book;
    }
    if (book_clicked == 3) {
        text_to_read.innerText = leviticus_book;
    }
    if (book_clicked == 4) {
        text_to_read.innerText = numbers_book;
    }
    if (book_clicked == 5) {
        text_to_read.innerText = deuteronomy_book;
    }
    if (book_clicked == 6) {
        text_to_read.innerText = joshua_book;
    }
    if (book_clicked == 7) {
        text_to_read.innerText = judges_book;
    }
    if (book_clicked == 8) {
        text_to_read.innerText = ruth_book;
    }
    if (book_clicked == 9) {
        text_to_read.innerText = first_samuel_book;
    }
    if (book_clicked == 10) {
        text_to_read.innerText = second_samuel_book;
    }
    if (book_clicked == 11) {
        text_to_read.innerText = first_kings_book;
    }
    if (book_clicked == 12) {
        text_to_read.innerText = second_kings_book;
    }
    if (book_clicked == 13) {
        text_to_read.innerText = first_chronicles_book;
    }
    if (book_clicked == 14) {
        text_to_read.innerText = second_chronicles_book;
    }
    if (book_clicked == 15) {
        text_to_read.innerText = ezra_book;
    }
    if (book_clicked == 16) {
        text_to_read.innerText = nehemiah_book;
    }
    if (book_clicked == 17) {
        text_to_read.innerText = esther_book;
    }
    if (book_clicked == 18) {
        text_to_read.innerText = job_book;
    }
    if (book_clicked == 19) {
        text_to_read.innerText = psalms_book;
    }
    if (book_clicked == 20) {
        text_to_read.innerText = proverbs_book;
    }
    if (book_clicked == 21) {
        text_to_read.innerText = ecclesiastes_book;
    }
    if (book_clicked == 22) {
        text_to_read.innerText = song_of_solomon_book;
    }
    if (book_clicked == 23) {
        text_to_read.innerText = isaiah_book;
    }
    if (book_clicked == 24) {
        text_to_read.innerText = jeremiah_book;
    }
    if (book_clicked == 25) {
        text_to_read.innerText = lamentations_book;
    }
    if (book_clicked == 26) {
        text_to_read.innerText = ezekiel_book;
    }
    if (book_clicked == 27) {
        text_to_read.innerText = daniel_book;
    }
    if (book_clicked == 28) {
        text_to_read.innerText = hosea_book;
    }
    if (book_clicked == 29) {
        text_to_read.innerText = joel_book;
    }
    if (book_clicked == 30) {
        text_to_read.innerText = amos_book;
    }
    if (book_clicked == 31) {
        text_to_read.innerText = obadiah_book;
    }
    if (book_clicked == 32) {
        text_to_read.innerText = jonah_book;
    }
    if (book_clicked == 33) {
        text_to_read.innerText = micah_book;
    }
    if (book_clicked == 34) {
        text_to_read.innerText = nahum_book;
    }
    if (book_clicked == 35) {
        text_to_read.innerText = habakkuk_book;
    }
    if (book_clicked == 36) {
        text_to_read.innerText = zephaniah_book;
    }
    if (book_clicked == 37) {
        text_to_read.innerText = haggai_book;
    }
    if (book_clicked == 38) {
        text_to_read.innerText = zechariah_book;
    }
    if (book_clicked == 39) {
        text_to_read.innerText = malachi_book;
    }
    if (book_clicked == 40) {
        text_to_read.innerText = matthew_book;
    }
    if (book_clicked == 41) {
        text_to_read.innerText = mark_book;
    }
    if (book_clicked == 42) {
        text_to_read.innerText = luke_book;
    }
    if (book_clicked == 43) {
        text_to_read.innerText = john_book;
    }
    if (book_clicked == 44) {
        text_to_read.innerText = acts_book;
    }
    if (book_clicked == 45) {
        text_to_read.innerText = romans_book;
    }
    if (book_clicked == 46) {
        text_to_read.innerText = first_corinthians_book;
    }
    if (book_clicked == 47) {
        text_to_read.innerText = second_corinthians_book;
    }
    if (book_clicked == 48) {
        text_to_read.innerText = galatians_book;
    }
    if (book_clicked == 49) {
        text_to_read.innerText = ephesians_book;
    }
    if (book_clicked == 50) {
        text_to_read.innerText = philippians_book;
    }
    if (book_clicked == 51) {
        text_to_read.innerText = colossians_book;
    }
    if (book_clicked == 52) {
        text_to_read.innerText = first_thessalonians_book;
    }
    if (book_clicked == 53) {
        text_to_read.innerText = second_thessalonians_book;
    }
    if (book_clicked == 54) {
        text_to_read.innerText = first_timothy_book;
    }
    if (book_clicked == 55) {
        text_to_read.innerText = second_timothy_book;
    }
    if (book_clicked == 56) {
        text_to_read.innerText = titus_book;
    }
    if (book_clicked == 57) {
        text_to_read.innerText = philemon_book;
    }
    if (book_clicked == 58) {
        text_to_read.innerText = hebrews_book;
    }
    if (book_clicked == 59) {
        text_to_read.innerText = james_book;
    }
    if (book_clicked == 60) {
        text_to_read.innerText = first_peter_book;
    }
    if (book_clicked == 61) {
        text_to_read.innerText = second_peter_book;
    }
    if (book_clicked == 62) {
        text_to_read.innerText = first_john_book;
    }
    if (book_clicked == 63) {
        text_to_read.innerText = second_john_book;
    }
    if (book_clicked == 64) {
        text_to_read.innerText = third_john_book;
    }
    if (book_clicked == 65) {
        text_to_read.innerText = jude_book;
    }
    if (book_clicked == 66) {
        text_to_read.innerText = revelation_book;
    }
    

}

function stop_re_adding_text (type_of_text) {
    /* we add one to the specificed element of the array, and before we write text, we check if that element
    is equal to 0 or not, if it is not equal to zero, we know that we've already written it, this allows
    give our text the capability of being copied and pasted, as well as prevents unnecessary text changes or
    addtions */
    show_or_hide_text[type_of_text] += 1;
}


const billy_graham_christians = JSON.parse(sessionStorage.getItem('christians_billy_graham'));
const john_wesley_christians = JSON.parse(sessionStorage.getItem('christians_john_wesley'));
const john_knox_christians = JSON.parse(sessionStorage.getItem('christians_john_knox'));
const adeboye_christians = JSON.parse(sessionStorage.getItem('christians_adeboye'));
const mary_slessor_christians = JSON.parse(sessionStorage.getItem('christians_mary_slessor'));

function Christians_From_History_DataBase () {
    // backticks are life savers "`"  ```````
    if (book_clicked == 1) {
        // Billy Graham
        text_to_read.innerText = billy_graham_christians;
    }
    if (book_clicked == 2) {
        // John Wesley
        text_to_read.innerText = john_wesley_christians;
    }
    if (book_clicked == 3) {
        // John Knox
        text_to_read.innerText = john_knox_christians;
    }
    if (book_clicked == 4) {
        // Enoch Adeboye
        text_to_read.innerText = adeboye_christians;
        
    }
    if (book_clicked == 5) {
        // Mary Slessor
        text_to_read.innerText = mary_slessor_christians;
    }
}

const does_science_uphold_the_bible_articles = JSON.parse(sessionStorage.getItem('articles_does_science_uphold_the_bible'));
const why_God_hates_divorce_articles = JSON.parse(sessionStorage.getItem('articles_why_God_hates_divorce'));
const heaven_and_hell_articles = JSON.parse(sessionStorage.getItem('articles_heaven_and_hell'));
const the_most_important_thing_articles = JSON.parse(sessionStorage.getItem('articles_the_most_important_thing'));
const the_abomination_of_desolation_articles = JSON.parse(sessionStorage.getItem('articles_the_abomination_of_desolation'));

function Christian_Articles_DataBase () {
    if (book_clicked == 1) {
        // Does Science Uphold the Bible
        text_to_read.innerText = does_science_uphold_the_bible_articles;
    }
    if (book_clicked == 2) {
        // Why Does God hate Divorce?
        text_to_read.innerText = why_God_hates_divorce_articles;

    }
    if (book_clicked == 3) {
        // Heaven and Hell
        text_to_read.innerText = heaven_and_hell_articles;
    }
    if (book_clicked == 4) {
        // The Most Important Thing
        text_to_read.innerText = the_most_important_thing_articles;
    }
    if (book_clicked == 5) {
        // The Abomination of Desolation
        text_to_read.innerText = the_abomination_of_desolation_articles;
    }

}

const lawless_one_is_comin_stories = JSON.parse(sessionStorage.getItem('stories_lawless_one_is_comin'));
const pilgrims_progress_stories = JSON.parse(sessionStorage.getItem('stories_pilgrims_progress'));

function Christian_Novels_Database () {
    // Novels and Short Short Stories Database
    if (book_clicked == 1) {
        text_to_read.innerText = lawless_one_is_comin_stories;
    }
    if (book_clicked == 2) {
        text_to_read.innerText = pilgrims_progress_stories;
    }
}

const let_evil_cease_poems = JSON.parse(sessionStorage.getItem('poems_let_evil_cease'));
const caedmons_hymn_poems = JSON.parse(sessionStorage.getItem('poems_caedmons_hymn'));
const the_temple_poems = JSON.parse(sessionStorage.getItem('poems_the_temple'));
const none_other_lamb_poems = JSON.parse(sessionStorage.getItem('poems_none_other_lamb'));
const my_light_with_yours_poems = JSON.parse(sessionStorage.getItem('poems_my_light_with_yours'));
const love_poems = JSON.parse(sessionStorage.getItem('poems_love'));
const loves_apotheosis_poems = JSON.parse(sessionStorage.getItem('poems_loves_apotheosis'));

function Christian_Poems_Database() {
    if (book_clicked == 1) {
        text_to_read.innerText = let_evil_cease_poems;
    }
    if (book_clicked == 2) {
        text_to_read.innerText = caedmons_hymn_poems;
    }
    if (book_clicked == 3) {
        text_to_read.innerText = the_temple_poems;
    }
    if (book_clicked == 4) {
        text_to_read.innerText = none_other_lamb_poems;
    }
    if (book_clicked == 5) {
        text_to_read.innerText = my_light_with_yours_poems;
    }
    if (book_clicked == 6) {
        text_to_read.innerText = love_poems;
    }
    if (book_clicked == 7) {
        text_to_read.innerText = loves_apotheosis_poems;
    }
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