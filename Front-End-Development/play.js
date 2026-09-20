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

var i_am_a_boy = true;
var i_am_a_girl = false;

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const big_text = document.getElementById('big-text');
const questions_wrong_text = document.getElementById('wrong-text');
const top_border = 90;
const side_border = 2;

var box_x_pos = 1;
/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var play_front_page_text = [];

var my_name = "Unknown Player";
var my_country = "America";
var my_points = 0;
var my_highscores = [0, 0, 0];
var level = 1;
var mouseX = 0;
var mouseY = 0;

var type_of_challenge = 1;
var challenge_box_x = 740;
var online = 1;

/** Home page is important, because it tells us whether, we are in the main page of play, or the searching for opponents
 * page, or the game page, or the last page for showing correct answers, scores, and etc. And then we go back all the 
 * way to page 1, if they choose to go back, or page 2, if they choose to play again
 */
var home_page = 1;

const friends = {
    name: ["No Name", "No Name", "No Name", "No Name", "No Name", "No Name", "No Name", "No Name", "No Name", "No Name", "No Name"],
    bibletar: [],
    scroll_y: 0,
    online: ["Offline", "Offline", "Offline", "Offline", "Offline", "Offline", "Offline", "Offline", "Offline", "Offline", "Offline"],
    countries: ["America", "America", "America", "America", "America", "America", "America", "America", "America", "America", "America", "America", "America"]
};


var my_cash = 0;
var my_bibletar_svg = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var timer = 0;
var different_second = 0;

var question_I_got_wrong = [];
var randomQuestion = 1;
const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

const form = document.getElementById('form');
var my_answer = 0;
var correct_answer = 0;
// this_game_points refers to the points I earned a this a specific game
var this_game_points = 0;
var kicked_out = false;
var game_finished = false;

// var players_in_my_game = 4;

const my_game = {
    online: 4,
    everyones_points: [0, 0, 0, 0],
    /** questions_wrong, let's us know how many questions each player in the game has gotten wrong
     * if you get 5 questions wrong, you automatically become a spectator, and it will show on your
     * box as well
     */
    questions_wrong: [0, 0, 0, 0],
    countries: ["America", "America", "America", "America"],
    everyones_names: ["Guest Player", "Robot Player", "Robot Player", "Robot Player"],
    bibletar: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
};

var x_bar_divider = 1;
var bar_graph_rendered_loop = 0;

var robot_modes = [0, 0, 0]

const sound = new Audio();
sound.src = "./sounds/sound_incorrect.mp3";

var img_world_map = new Image();
img_world_map.src = "./images/world_map.svg"; // Set source URL
img_world_map.alt = "world map image";

var clock = new Image();
clock.src = "./images/clock.svg"
clock.alt = "clock"

var img_countries = new Image();
img_countries.src = "./images/country_America.svg"; // Sets default source url
img_countries.alt = "country";

/**It is very important to understand the purpose of these arrays. On September 18, 2026. I discovered that
 * you could only use ctx.DrawImage to drop multiple of the same images in a for loop, but once you changed
 * the src link for one of the image, that image would not show up. After rigorous trial and error, I
 * figured out a work around method for it by redeclaring a new object in a function. Changing the src
 * link, and then returning the object and storing it inside an array. That way, all the images would
 * have already loaded and I would be able to draw them onto the canvas. Problem solved!!! Glory be to God!!
 */
var img_countries_sources_game = [];
var img_countries_sources_friends = [];

var img_background_sources = [];
var img_face_sources = [];
var img_shirt_sources = [];
var img_glasses_sources = [];
var img_hats_sources = [];
var img_eyes_sources = [];
var img_eyebrows_sources = [];
var img_noses_sources = [];
var img_mouths_sources = [];
var img_hair_sources = [];



var img_wrong = new Image();
img_wrong.src = "./images/wrong.svg";
img_wrong.alt = "wrong";



var img_background = new Image();
img_background.src = "./images/background1.svg"; // Set source URL
img_background.alt = "background image";

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


form.addEventListener('submit', async (e) => {
    // don't let the form submit otherwise the page will reload
    e.preventDefault();
    const my_answer_input = document.getElementById('my-answer').value; 
    my_answer = my_answer_input;
    form.reset(); 
    check_if_answer_is_correct(my_answer_input);
    choose_Random_Question();

})

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

window.addEventListener('click', (event) => {
    if (mouseX > 1278 && mouseX < 1458) {
        for (let i = 0; i < 3; i++) {
            var spacing_between_level_boxes = 59.5
            if (mouseY > (116 + (i * spacing_between_level_boxes)) && mouseY < (159 + (i*spacing_between_level_boxes))) {
                level = (i+1);
            }
        }
    }
})

function change_type_of_challenge(type_of_challenge_html) {
    type_of_challenge = type_of_challenge_html;
}

function update_Data_And_Continue_Game() {
    // update my highscore for the level
    if (this_game_points > my_highscores[level - 1]) {
        // if I beat my highscore then don't forget to give me extra cash
        my_highscores[level - 1] = this_game_points;
        my_cash += 5;
    } else {
        my_cash += 1;
    }

    // check if I got first place in the game
    var i_got_first_place = true;
    for (let i = 1; i < my_game.online.length; i++) {
        if (this_game_points <= my_game.everyones_points[i]) {
            i_got_first_place = false;
        }
    }

    // if I got first place in the game, I get extra cash
    if (i_got_first_place == true) {
        my_cash += 10;
    }

    // updates my total points
    my_points += this_game_points;

    // save all data to local storage
    save_Data_to_Local_or_Session_Storage();


    // set home page back to main screen
    home_page = 1;
}

function randomRobotModes() {
    if (level == 1) {
        robot_modes[0] = ((Math.floor(Math.random() * 5) + 1)/10);
        robot_modes[1] = ((Math.floor(Math.random() * 5) + 1)/10);
        robot_modes[2] = ((Math.floor(Math.random() * 5) + 1)/10);
    } else if (level == 2) {
        robot_modes[0] = ((Math.floor(Math.random() * 5) + 1)/20);
        robot_modes[1] = ((Math.floor(Math.random() * 5) + 1)/20);
        robot_modes[2] = ((Math.floor(Math.random() * 5) + 1)/20);
    } else if (level == 3) {
        robot_modes[0] = ((Math.floor(Math.random() * 5) + 1)/30);
        robot_modes[1] = ((Math.floor(Math.random() * 5) + 1)/30);
        robot_modes[2] = ((Math.floor(Math.random() * 5) + 1)/30);
    }

    
    function randomRobotBibletars() {
        // console.log("hello")
        for (let i = 1; i < my_game.online; i++) {
            for (let j = 0; j < my_game.bibletar[i].length; j++) {
                if (j == 0) {
                    // male or female
                    my_game.bibletar[i][j] = (Math.floor(Math.random() *2) + 1);
                }
                if (j == 1) {
                    // bakcground
                    my_game.bibletar[i][j] = (Math.floor(Math.random() *3) + 1);
                }
                if (j == 2) {
                    // face
                    my_game.bibletar[i][j] = 0;
                }
                if (j == 3) {
                    // shirt 
                    my_game.bibletar[i][j] = (Math.floor(Math.random() *7) + 1);
                }
                if (j == 4) {
                    // glasses
                    my_game.bibletar[i][j] = (Math.floor(Math.random() *3) + 1);
                }
                if (j == 5) {
                    // hats
                    my_game.bibletar[i][j] = (Math.floor(Math.random() *3) + 1);
                }
                if (j == 6) {
                    // eyes
                    my_game.bibletar[i][j] = (Math.floor(Math.random() *20) + 1);
                }
                if (j == 7) {
                    // eyebrows
                    my_game.bibletar[i][j] = (Math.floor(Math.random() *5) + 1);
                }
                if (j == 8) {
                    // noses
                    my_game.bibletar[i][j] = (Math.floor(Math.random() *12) + 1);
                }
                if (j == 9) {
                    // mouths
                    my_game.bibletar[i][j] = (Math.floor(Math.random() *12) + 1);
                }
                if (j == 10) {
                    // hair
                    my_game.bibletar[i][j] = (Math.floor(Math.random() *5) + 1);
                }
            }
        }
    }
    randomRobotBibletars();
}


function prepare_the_game () {
    timer = 0;
    this_game_points = 0;
    my_game.countries[0] = my_country;
    my_game.everyones_names[0] = my_name;
    kicked_out = false;
    game_finished = false;
    questions_wrong_text.innerText = ``;
    // resets it each game
    question_I_got_wrong = [];
    my_game.questions_wrong[0] = 0;
    
    for (let i = 0; i < my_game.everyones_points.length; i++) {
        // reset everyone's points
        my_game.everyones_points[i] = 0;
    }
    
    randomRobotModes();
    
    x_bar_divider = 1;
    bar_graph_rendered_loop = 0;
    home_page = 2;
    play_front_page_text[0] = 0;

    // sets the array to a length of zero
    img_countries_sources_game.length = 0;
    img_countries_sources_friends.length = 0;

    img_background_sources.length = 0;
    img_face_sources.length = 0;
    img_shirt_sources.length = 0;
    img_glasses_sources.length = 0;
    img_hats_sources.length = 0;
    img_eyes_sources.length = 0;
    img_eyebrows_sources.length = 0;
    img_noses_sources.length = 0;
    img_mouths_sources.length = 0;
    img_hair_sources.length = 0;

    // sets bibletar for my_game object to my_bibletar_svg
    for (let i = 0; i < my_game.bibletar[0].length; i++) {
        my_game.bibletar[0][i] = my_bibletar_svg[i];
    }
}

function startGame() {
    home_page = 3;
}

function wipeOutEntireScreen() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (home_page != 1) {
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

    /**Don't save stuff that don't need to be saved in this section, for example, I don't
     * edit my bibletar in the play section of Bible.io, so why would I need to save that here,
     */
    sessionStorage.setItem('my_points', JSON.stringify(my_points));
    sessionStorage.setItem('my_highscores', JSON.stringify(my_highscores));
    localStorage.setItem('my_cash', JSON.stringify(my_cash));
}

localStorageAndSessionStorageData();
function localStorageAndSessionStorageData () {
    /** I use this function to read out my local and Session Storage Data, (get it) */
    const savedName = localStorage.getItem('my_name');
    const savedHighscores = JSON.parse(sessionStorage.getItem('my_highscores'));
    const savedPoints = JSON.parse(sessionStorage.getItem('my_points'));
    const saved_bibletar_svg = JSON.parse(localStorage.getItem('my_bibletar_svg'));
    const saved_cash = JSON.parse(localStorage.getItem('my_cash'));
    const saved_country = localStorage.getItem('my_country');

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
        // console.log("my_country: " + (typeof my_country));
        // console.log("my_country: " + my_country);
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

function displayMouseX_and_MouseY () {
    ctx.font = "25px Arial";
    ctx.fillStyle = 'rgb(190, 36, 36)';
    ctx.fillText("MouseX: " + mouseX + " MouseY: " + mouseY, 10, canvas.height - 20);

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


function friendsBoard() {
    
    ctx.fillStyle = 'rgb(250, 251, 252)';
    ctx.fillRect(0, 60, 230, canvas.height);
    
    for (let i = 0; i < friends.name.length; i++) {
        // name of friends
        ctx.font = "18px Arial";
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillText(friends.name[i], 20, (i*120) + 90 + friends.scroll_y);
        // console.log(i);

        // friends' bibletar background border box display
        ctx.fillStyle = 'rgb(100, 102, 103)';
        ctx.fillRect(10, (i*120) + 95 + friends.scroll_y, 100, 90);

        var online_y_baseline = -20;
        if (friends.online[i] == "Online" || friends.online[i] == "online") {
            ctx.fillStyle = 'rgb(78, 244, 97)'
        } else {
            ctx.fillStyle = 'rgb(244, 68, 68)'
        }
        ctx.fillRect(120, (i*120) + 115 + friends.scroll_y + online_y_baseline, 100, 50)
        
        // online or offline text display
        ctx.font = "18px Arial";
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillText(friends.online[i], 140, (i*120) + 145 + friends.scroll_y + online_y_baseline);

        // friends countries display
        function loadCountryData() {
            img_countries = new Image();
            var friends_country_svg = "./images/country_" + friends.countries[i] + ".svg";
            img_countries.src = friends_country_svg;
           return img_countries;
        }
        if(img_countries_sources_friends[i] == null) {
            img_countries_sources_friends[i] = loadCountryData();
        }
        ctx.drawImage(img_countries_sources_friends[i], 120, (i*120) + 155 + friends.scroll_y, 60, 30);
        // ctx.drawImage(img_countries, 130, 100, 100, 50);

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

    // WRITE Player's NAME

    // black shadow add
    ctx.shadowColor = "black";
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    
    ctx.font = "30px Arial";
    ctx.strokeStyle = 'rgb(253, 250, 250)';
    ctx.strokeText(my_name, 1260, 680);
    ctx.fillStyle = 'rgb(250, 249, 249)';
    ctx.fillText(my_name, 1260, 680);
    
    
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
        if (type_of_drawing == 3) {
            // console.log(specific_drawing);
        }

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
                if(specific_drawing > 14) {
                    my_pixels_height += 0;
                    x_pos_ribp -= 7;
                    y_pos_ribp += 0;
                    increase_width_by = 1.85
                }
            } else {
                if (i_am_a_girl == true ) {
                    if (specific_drawing == 2) {
                        my_pixels_height += 5;
                        x_pos_ribp -= 8.5;
                        y_pos_ribp -= 5;
                        increase_width_by = 1.75;
                    }
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
            if (i_am_a_boy == true) {
                if (specific_drawing > 0 && specific_drawing < 9) {
                    // caps
                    my_pixels_height += 11;
                    x_pos_ribp -= 93;
                    y_pos_ribp -= 10;
                    increase_width_by = 3.0;
                }
            } else {
                if (i_am_a_girl == true) {
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
            if (i_am_a_boy == true) {
                increase_width_by = 3.0;
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

    ctx.fillStyle = 'rgb(114, 4, 4)';
    ctx.fillText("Under Construction - Not Online Yet!", (((canvas.width)/2) + x_shift - 280) + 150, 160);
}

function displayLevels() {
    // background box for levels
    ctx.fillStyle = 'rgb(124, 116, 119)';
    ctx.fillRect(1250, 100, 240, 300);

    // levels display
    
    for (let i = 0; i < 3; i++) {
        var spacing_x = 60;
        ctx.font = "20px Arial";
        if ((i+1) == level) {
            ctx.fillStyle = 'rgb(245, 186, 77)';
        } else {
            ctx.fillStyle = 'rgb(239, 245, 77)';
        }
        if (mouseX > 1278 && mouseX < 1458) {
            var spacing_between_level_boxes = 59.5
            if (mouseY > (116 + (i * spacing_between_level_boxes)) && mouseY < (159 + (i*spacing_between_level_boxes))) {
                ctx.fillStyle = 'rgb(170, 112, 4)';
            }
        }
        ctx.fillRect(1280, 120 + (i * spacing_x), 180, 40);
        ctx.fillStyle = 'rgb(6, 6, 6)';
        ctx.fillText("Level " + (i + 1), 1330, 145 + (i * spacing_x));
    }
}

function challenge_box_display () {
    ctx.fillStyle = 'rgb(15, 15, 15)';
    ctx.fillRect(challenge_box_x -2, 527, 74, 24);
    ctx.fillStyle = 'rgb(25, 203, 79)';
    ctx.fillRect(challenge_box_x, 529, 70, 20);

    var speed_x = 10;

    if (type_of_challenge == 1) {
        if (challenge_box_x > 417) {
            challenge_box_x -= speed_x;
        }
    }
    if (type_of_challenge == 2){
        if (challenge_box_x < 965) {
            challenge_box_x += speed_x;
        }
    }
}

function otherTextDisplay() {
    var baseline_y = 310
    ctx.font = "20px Arial";
    ctx.fillStyle = 'rgb(6, 6, 6)';
    ctx.fillText("Go Global", 405, baseline_y);
    ctx.fillText("Verse Friends", 945, baseline_y);
}

function show_or_hide_html_elements () {
    if (home_page == 1) {
        document.getElementById('choice1').style.display = "flex";
        document.getElementById('choice2').style.display = "flex";
        document.getElementById('choice3').style.display = "flex";

        form.style.display = "none";
        question.style.display = "none";
        answer1.style.display = "none";
        answer2.style.display = "none";
        answer3.style.display = "none";
        answer4.style.display = "none";

        document.getElementById('questions-i-got-wrong').style.display = "none";
        document.getElementById('continue-button').style.display = "none";
    } else if (home_page == 2) {
        document.getElementById('choice1').style.display = "none";
        document.getElementById('choice2').style.display = "none";
        document.getElementById('choice3').style.display = "none";

        form.style.display = "none";
        question.style.display = "none";
        answer1.style.display = "none";
        answer2.style.display = "none";
        answer3.style.display = "none";
        answer4.style.display = "none";

        document.getElementById('questions-i-got-wrong').style.display = "none";
        document.getElementById('continue-button').style.display = "none";

    } else if (home_page == 3) {
        if (my_game.questions_wrong[0] > 5 || game_finished == true) {
            // only if I haven't gotten more than 5 questions wrong then allow me to keep submitting answers
            form.style.display = "none";
            question.style.display = "none";
            answer1.style.display = "none";
            answer2.style.display = "none";
            answer3.style.display = "none";
            answer4.style.display = "none";
        } else {
            form.style.display = "block";
            question.style.display = "block";
            answer1.style.display = "block";
            answer2.style.display = "block";
            answer3.style.display = "block";
            answer4.style.display = "block";
        }

        document.getElementById('questions-i-got-wrong').style.display = "none";
        document.getElementById('continue-button').style.display = "none";
    } else if (home_page == 4) {
        form.style.display = "none";
        question.style.display = "none";
        answer1.style.display = "none";
        answer2.style.display = "none";
        answer3.style.display = "none";
        answer4.style.display = "none";

        document.getElementById('questions-i-got-wrong').style.display = "block";
        document.getElementById('continue-button').style.display = "block";
    }
}

function draw_Background () {
    /** Logic used to change backgrounds for different home pages within the play section of Bible.io */
    if (home_page == 1) {
        // gradient.addColorStop(0, 'red');     // Start color (0%)
        // gradient.addColorStop(0.5, 'yellow'); // Middle color (50%)
        // gradient.addColorStop(1, 'blue');    // End color (100%)
        var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgb(219, 237, 249)');     // Start color (0%)
        gradient.addColorStop(0.5, 'rgb(31, 223, 223)');
        gradient.addColorStop(1, 'rgb(45, 134, 250)');    // End color (100%)
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (home_page == 2) {
        ctx.fillStyle = 'rgb(144, 175, 184)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = 'rgb(129, 130, 132)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

}

function connectPlayers () {
    /** This will contain all the logic that is used to display images and whatever for connect players, whether
     * through world challenge or friend challenge
     * 
     * Also some important notes, when I am eventually able to connect with a player online, I will draw his or her
     * bibletar on the left hand side on the screen in top to down format, so boxes lined up vertically on the left
     * side of the screen, and my bibletar will be on the bottom right side of the screen.
     */
    function write_Out_Text_And_Boxes() {
        var baseline_y = 570;
        var baseline_x = 520;
        ctx.fillStyle = 'rgb(243, 244, 245)';
        ctx.fillRect(baseline_x, baseline_y, 400, 50);
    
        ctx.font = "30px Arial";
        ctx.fillStyle = 'rgb(6, 6, 6)';
        ctx.fillText("Connecting Players...", baseline_x + 50, baseline_y + 30);
    }

    function draw_World_Map () {
        img_world_map
        ctx.drawImage(img_world_map, 218, 0, 1000, 600);
    }
    draw_World_Map();
    write_Out_Text_And_Boxes();


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

        if (home_page == 3) {
            robotPlayers(60);
        }
    }

    if (home_page == 2) {
        if (timer >= 10) {
            choose_Random_Question();
            home_page = 3;
            timer = 0;
        }
    }
}

function robotPlayers(time_alloted_for_each_game) {
    var game_time = (time_alloted_for_each_game - timer)
    if (game_time > 0) {
        for (let i = 1; i < my_game.everyones_points.length; i++) {
            my_game.everyones_points[i] += robot_modes[i-1];
        }
    } else {

    }
}

function display_other_game_information () {
    var y_space_over = 70;
    // black shadow add
    ctx.shadowColor = "black";
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    ctx.font = "30px Arial";
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText("My Stats ", 1225, 110 + y_space_over);
    ctx.font = "20px Arial";
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText("Level: " + level, 1225, 150 + y_space_over);
    ctx.fillText("Online: " + online, 1225, 180 + y_space_over);
    /** remember arrays start at zero so minus 1 for level */
    ctx.fillText("Highscore: " + my_highscores[level - 1], 1225, 210 + y_space_over);
    ctx.fillText("Total Points: " + my_points, 1225, 240 + y_space_over);

    // black shadow remove
    ctx.shadowColor = "white";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
}

function display_Game_Time (time_alloted_for_each_game) {
    var game_time = (time_alloted_for_each_game-timer);

    if (game_time <= 0) {
        game_finished = true;
    }

    
    var x_baseline = 1250;
    var y_baseline = 100;

    // dark black background back layer
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(x_baseline - 53, 0, 400, 450);

    // clock background also edge of the game screen
    var gradient = ctx.createLinearGradient(x_baseline - 50, 0, canvas.width, 0);
    gradient.addColorStop(0, 'rgb(10, 132, 250)');     // Start color (0%)
    // gradient.addColorStop(0.5, 'rgb(45, 244, 244)');
    gradient.addColorStop(1, 'rgb(10, 122, 144)');    // End color (100%)
    ctx.fillStyle = gradient;
    // ctx.fillStyle = 'rgb(10, 122, 144)';
    ctx.fillRect(x_baseline - 50, 0, 400, 450);
    
    var x_over = 0;
    if (game_time < 10) {
        x_over += 17.5;
    }

    ctx.drawImage(clock, x_baseline - 25, y_baseline -75, 115, 115);

    ctx.font = "60px Arial";
    

    // drop shadow behind timer
    ctx.fillStyle = 'rgb(0, 0, 0)';
    if (game_time >= 0) {
        ctx.fillText(game_time, (x_baseline - 3) + x_over, (y_baseline + 3));
    } else {
        /* there's no point of displaying negative times, just let it be zero, negative numbers should be hidden */
        ctx.fillText(0, (x_baseline - 3) + x_over, (y_baseline + 3));
    }

    if (game_time > 20) {
        ctx.fillStyle = 'rgb(7, 239, 11)';
    } else if (game_time > 10) {
        ctx.fillStyle = 'rgb(255, 251, 0)';
    } else if (game_time > 5) {
        ctx.fillStyle = 'rgb(255, 157, 0)';
    } else {
        ctx.fillStyle = 'rgb(255, 0, 0)';
    }
    /* real time color, based off of how much time is left, starts green, then
     yellow, orange, then red */

    if (game_time >= 0) {
        ctx.fillText(game_time, x_baseline + x_over, y_baseline + 3);
    } else {
        /* there's no point of displaying negative times, just let it be zero, negative numbers should be hidden */
        ctx.fillText(0, x_baseline + x_over, y_baseline + 3);
    }

    display_other_game_information();

}

function draw_game_grid () {
    // grid background
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgb(10, 132, 250)');     // Start color (0%)
    gradient.addColorStop(0.5, 'rgb(45, 244, 244)');
    gradient.addColorStop(1, 'rgb(9, 174, 240)');    // End color (100%)
    ctx.fillStyle = gradient;
    // ctx.fillStyle = 'rgb(10, 132, 193)';
    ctx.fillRect(0, 0, canvas.width, 450);

    var amount_of_ticks = 100;

    // grid line ticks
    var grid_size = 2.5;
    for (let i = 0; i < amount_of_ticks; i++) {
        var x_baseline = 341;
        ctx.fillStyle = 'rgb(253, 252, 252)';
        ctx.fillRect(x_baseline + ((i * 500)/x_bar_divider), 0, grid_size, 450);
    }
}

function draw_beat_highscore_bar (start_x, move_x) {
    var size_of_bar = 6;

    ctx.fillStyle = 'rgb(119, 255, 0)';
    ctx.fillRect(start_x + move_x, 0, size_of_bar, 450);
}

function draw_points_as_bar_graph(y_bibletars_box_spacing, y_baseline) {
    my_game.everyones_points[0] = this_game_points;
    var bar_speed_x = 200;
    var bar_x_starting_point = 340;

    draw_beat_highscore_bar( bar_x_starting_point , ((my_highscores[level - 1] * bar_speed_x) / x_bar_divider));

    for (let i = 0; i < my_game.online; i++) {
        var each_players_points = Math.round(my_game.everyones_points[i]);

        // bar graph color back layer
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(bar_x_starting_point , y_baseline + 10 + (i * y_bibletars_box_spacing) -1, ((each_players_points * bar_speed_x) / x_bar_divider) + 1 , 60 + 2);
       
        // real bar graph color
        if (i == 0) {
            ctx.fillStyle = 'rgb(197, 11, 11)';
        } else if (i == 1) {
            ctx.fillStyle = 'rgb(135, 11, 197)';
        } else if (i == 2) {
            ctx.fillStyle = 'rgb(224, 249, 2)';
        } else if (i == 3) {
            ctx.fillStyle = 'rgb(11, 197, 36)';
        }
        // Displays bar graph
        ctx.fillRect(bar_x_starting_point , y_baseline + 10 + (i * y_bibletars_box_spacing), ((each_players_points * bar_speed_x) / x_bar_divider) , 60);
        
        // Display Numbers
        ctx.font = "50px Arial";
        ctx.fillStyle = 'rgb(8, 8, 8)';
        // Math.abs ensure the negative signs are ignored
        var lengthOfPointsNum = Math.abs(each_players_points).toString().length;
        /* moving the numbers back based off of it's length, or else, the end of the
         number will slide off the bar graph (lengthOfPointsNum) */
        ctx.fillText(each_players_points, (bar_x_starting_point -10) + (-1 * (lengthOfPointsNum * 30)) + ((each_players_points * bar_speed_x) / x_bar_divider), y_baseline + 55 + (i * y_bibletars_box_spacing));
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillText(each_players_points, (bar_x_starting_point -10) + (-1 * (lengthOfPointsNum * 30)) + ((each_players_points * bar_speed_x) / x_bar_divider) + 3, y_baseline + 55 + (i * y_bibletars_box_spacing) -1);


        var size_of_bar = ((each_players_points * bar_speed_x) / x_bar_divider);
        if (size_of_bar > 837) {
            /* send bar graph back to half it's size when it passes the end of game screen land mark 
            it's 0.01 divided by amount of people in the game, to make it as close to 0.01 after the for
            loop since there is a for loop*/
            x_bar_divider += ((0.01)/my_game.online);
        }

        // makes smooth camera bar graph go back
    }
    /* IMPORTANT NOTE:
     should be outside the for loop, and loop_bar_graph_back must be a multiple of 100 */
    var loop_bar_graph_back = 100;
    if (Number.isInteger(x_bar_divider) == false) {
        /** the decimal things isn't working so I have to add an extra protocol called bar_graph_rendered_loop */
        x_bar_divider += 0.01;
        bar_graph_rendered_loop += 1;
        console.log(x_bar_divider);
        if (bar_graph_rendered_loop % loop_bar_graph_back === 0) {
            x_bar_divider = Math.round(x_bar_divider);
        }
    }
}

function draw_players_bibletars(index_loop) {
    /** This function draws the background, face, shirt, eyes, and etc for each player that playing
     * in my game
     */

    // my_game.bibletar[index_loop]

    function load_bibletar_data(bibletar_part) {
        /** load new data into an array */
        img_background = new Image();
        img_face = new Image();
        img_shirt = new Image();
        img_glasses = new Image();
        img_hats = new Image();
        img_eyes = new Image();
        img_eyebrows = new Image();
        img_noses = new Image();
        img_mouths = new Image();
        img_hair = new Image();

        /** Have to recalculate the src link based off of their bibletar which is 
         * their bibletar svg
         */
        img_background.src = "./images/background" + my_game.bibletar[index_loop][1] + ".svg";
        img_eyes.src = "./images/eyes" + my_game.bibletar[index_loop][6] + ".svg";
        img_noses.src = "./images/noses" + my_game.bibletar[index_loop][8] + ".svg";
        if (my_game.bibletar[index_loop][0] == 1) {
            /** it is a boy */
            img_face.src = "./images/face_men" + my_game.bibletar[index_loop][2] + ".svg";
            img_shirt.src = "./images/shirt_men" + my_game.bibletar[index_loop][3] + ".svg";
            img_glasses.src = "./images/glasses_men" + my_game.bibletar[index_loop][4] + ".svg";
            img_hats.src = "./images/hats_men" + my_game.bibletar[index_loop][5] + ".svg";
            img_eyebrows.src = "./images/eyebrows_men" + my_game.bibletar[index_loop][7] + ".svg";
            img_mouths.src = "./images/mouths_men" + my_game.bibletar[index_loop][9] + ".svg";
            img_hair.src = "./images/hair_men" + my_game.bibletar[index_loop][10] + ".svg";
        } else {
            if (my_game.bibletar[index_loop][0] == 2) {
                /** it is a girl */
                img_face.src = "./images/face_women" + my_game.bibletar[index_loop][2] + ".svg";
                img_shirt.src = "./images/shirt_women" + my_game.bibletar[index_loop][3] + ".svg";
                img_glasses.src = "./images/glasses_women" + my_game.bibletar[index_loop][4] + ".svg";
                img_hats.src = "./images/hats_women" + my_game.bibletar[index_loop][5] + ".svg";
                img_eyebrows.src = "./images/eyebrows_women" + my_game.bibletar[index_loop][7] + ".svg";
                img_mouths.src = "./images/mouths_women" + my_game.bibletar[index_loop][9] + ".svg";
                img_hair.src = "./images/hair_women" + my_game.bibletar[index_loop][10] + ".svg";
            }
        }

        if (bibletar_part == 1) {
            return img_background;
        }
        if (bibletar_part == 2) {
            return img_face;
        }
        if (bibletar_part == 3) {
            return img_shirt;
        }
        if (bibletar_part == 4) {
            return img_glasses;
        }
        if (bibletar_part == 5) {
            return img_hats;
        }
        if (bibletar_part == 6) {
            return img_eyes;
        }
        if (bibletar_part == 7) {
            return img_eyebrows;
        }
        if (bibletar_part == 8) {
            return img_noses;
        }
        if (bibletar_part == 9) {
            return img_mouths;
        }
        if (bibletar_part == 10) {
            return img_hair;
        }

    }
    // end of load_bibletar_data function

    /** put data into the right index in the array */
    if(img_background_sources[index_loop] == null) {
            img_background_sources[index_loop] = load_bibletar_data(1);
    }
    if(img_face_sources[index_loop] == null) {
            img_face_sources[index_loop] = load_bibletar_data(2);
    }
    if(img_shirt_sources[index_loop] == null) {
            img_shirt_sources[index_loop] = load_bibletar_data(3);
    }
    if(img_glasses_sources[index_loop] == null) {
            img_glasses_sources[index_loop] = load_bibletar_data(4);
    }
    if(img_hats_sources[index_loop] == null) {
            img_hats_sources[index_loop] = load_bibletar_data(5);
    }
    if(img_eyes_sources[index_loop] == null) {
            img_eyes_sources[index_loop] = load_bibletar_data(6);
    }
    if(img_eyebrows_sources[index_loop] == null) {
            img_eyebrows_sources[index_loop] = load_bibletar_data(7);
    }
    if(img_noses_sources[index_loop] == null) {
            img_noses_sources[index_loop] = load_bibletar_data(8);
    }
    if(img_mouths_sources[index_loop] == null) {
            img_mouths_sources[index_loop] = load_bibletar_data(9);
    }
    if(img_hair_sources[index_loop] == null) {
            img_hair_sources[index_loop] = load_bibletar_data(10);
    }
    

    var he_is_a_boy = false;
    var he_is_a_girl = false;
    if (my_game.bibletar[index_loop][0] == 1) {
        he_is_a_boy = true;
    } else {
        if (my_game.bibletar[index_loop][0] == 2) {
            he_is_a_girl = true;
        }
    }

    /**The data has been stored now you can start using it */
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
        var specific_drawing = my_game.bibletar[index_loop][type_of_drawing];

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

            if (he_is_a_boy == true) {
                if(specific_drawing > 14) {
                    my_pixels_height += 0;
                    x_pos_ribp -= 7;
                    y_pos_ribp += 0;
                    increase_width_by = 1.85
                }
            } else {
                if (he_is_a_girl == true ) {
                    if (specific_drawing == 2) {
                        my_pixels_height += 5;
                        x_pos_ribp -= 8.5;
                        y_pos_ribp -= 5;
                        increase_width_by = 1.75;
                    }
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
            if (he_is_a_boy == true) {
                if (specific_drawing > 0 && specific_drawing < 9) {
                    // caps
                    my_pixels_height += 11;
                    x_pos_ribp -= 93;
                    y_pos_ribp -= 10;
                    increase_width_by = 3.0;
                }
            } else {
                if (he_is_a_girl == true) {
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
            if (he_is_a_boy == true) {
                increase_width_by = 3.0;
            } else {
                if (he_is_a_girl == true) {
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
        /**Because this is being drawn in the actual match, the size of these bibletars should be incredibly
         * smaller
         */

        // final instructions before last draw, shift bibletar parts over
        my_pixels_height = (my_pixels_height/3);
        my_pixels_width = (my_pixels_width/3);

        /** So I got the defaults down, which work in the most general cases, but it has now come to my 
         * attention that it doesn't work for everything, so I now have even more work to do, and have to
         * NOT resize, but adjust the x and y coordinates for some other stuff too. Man, this work is so
         * much! But it's worth it in the end.
         */
        // background
        if (type_of_drawing == 1) {
            // nothing, already in the right place
        }
        // face
        if (type_of_drawing == 2) {
            // default
            x_pos_ribp -= 58;
            y_pos_ribp -= 29.5;
        }
        // shirt
        if (type_of_drawing == 3) {
            // default
            x_pos_ribp -= 64;
            y_pos_ribp -= 133;

            if (he_is_a_boy == true) {

            } else {
                if (he_is_a_girl == true) {
                    if (specific_drawing == 2) {
                        x_pos_ribp -= -4;
                        y_pos_ribp -= -3;
                    }
                }
            }
        }
        // glasses
        if (type_of_drawing == 4) {
            // default
            x_pos_ribp -= 71;
            y_pos_ribp -= 65;
        }
        // hats
        if (type_of_drawing == 5) {
            // default
            x_pos_ribp -= 51;
            y_pos_ribp -= 20;

            if (he_is_a_boy == true) {

            } else {
                if (he_is_a_girl == true) {
                    if (specific_drawing >= 2 && specific_drawing <= 3) {
                        x_pos_ribp -= 60;
                        y_pos_ribp -= 5;
                    }
                }
            }
        }
        // eyes
        if (type_of_drawing == 6) {
            // default
            x_pos_ribp -= 89.5;
            y_pos_ribp -= 66;
        }
        // eyebrows
        if (type_of_drawing == 7) {
            // default
            x_pos_ribp -= 89;
            y_pos_ribp -= 58;
        }
        // noses
        if (type_of_drawing == 8) {
            // default
            x_pos_ribp -= 115;
            y_pos_ribp -= 79;
            if(specific_drawing == 4 || specific_drawing == 11 || specific_drawing == 12) {
                x_pos_ribp -= 0;
                y_pos_ribp -= 7;
            }
            if(specific_drawing == 6) {
                x_pos_ribp -= -3;
                y_pos_ribp -= 0;
            }
            if(specific_drawing == 9) {
                x_pos_ribp -= 0;
                y_pos_ribp -= 4;
            }
            if(specific_drawing == 9) {
                x_pos_ribp -= -3;
                y_pos_ribp -= 0;
            }
        }
        // mouths
        if (type_of_drawing == 9) {
            // default
            x_pos_ribp -= 106;
            y_pos_ribp -= 105;
        }
        // hair
        if (type_of_drawing == 10) {
            // default
            x_pos_ribp -= 78;
            y_pos_ribp -= 23;

            if (he_is_a_boy == true) {

            } else {
                if (he_is_a_girl == true) {
                    if (specific_drawing >= 1 && specific_drawing <= 5) {
                        x_pos_ribp -= -22;
                        y_pos_ribp -= -17;
                    }
                }
            }
        }

        ctx.drawImage(what_to_draw, x_pos_ribp, y_pos_ribp, my_pixels_width, my_pixels_height);
        /**Don't run the printMeOutSvgFileNumber function for to long, or else it will crash your computer
         */
        // printMeOutSvgFileNumber();
    }
    /** drawing / x_pos / y_pos / size / type, reference lines 29-38 or if that changes reference 
     * function called item_chosen specifcally for closet_section NOT shop_section
     */

    var shift_bibletar_x_over = -930;
    var shift_bibletar_y_over = -80 + (index_loop * 110);

    resizeImageByPixels_and_draw(img_background_sources[index_loop], 980 + shift_bibletar_x_over, 100 + shift_bibletar_y_over, 300, 1);
    resizeImageByPixels_and_draw(img_face_sources[index_loop], 1067.5 + shift_bibletar_x_over, 145 + shift_bibletar_y_over, 175, 2);
    resizeImageByPixels_and_draw(img_shirt_sources[index_loop], 1077 + shift_bibletar_x_over, 300 + shift_bibletar_y_over, 100, 3);
    resizeImageByPixels_and_draw(img_eyes_sources[index_loop], 1115 + shift_bibletar_x_over, 200 + shift_bibletar_y_over, 20, 6);
    resizeImageByPixels_and_draw(img_eyebrows_sources[index_loop], 1114 + shift_bibletar_x_over, 187 + shift_bibletar_y_over, 12, 7);
    resizeImageByPixels_and_draw(img_mouths_sources[index_loop], 1139 + shift_bibletar_x_over, 260 + shift_bibletar_y_over, 17, 9);
    resizeImageByPixels_and_draw(img_noses_sources[index_loop], 1153 + shift_bibletar_x_over, 220 + shift_bibletar_y_over, 30, 8);
    resizeImageByPixels_and_draw(img_glasses_sources[index_loop], 1150 + shift_bibletar_x_over, 230 + shift_bibletar_y_over, 50, 4);
    resizeImageByPixels_and_draw(img_hair_sources[index_loop], 1097 + shift_bibletar_x_over, 135 + shift_bibletar_y_over, 44, 10);
    resizeImageByPixels_and_draw(img_hats_sources[index_loop], 1150 + shift_bibletar_x_over, 140 + shift_bibletar_y_over, 50, 5);



}

function draw_All_Players () {
    /** Draws all players, including your, robot players if there are any, and the people
     * you are versing
     */
    var y_bibletars_box_spacing = 110
    var y_baseline = 20;
    draw_game_grid();
    draw_points_as_bar_graph(y_bibletars_box_spacing, y_baseline + 7);


    for (let i = 0; i < my_game.online; i++) {
        // back box
        ctx.fillStyle = 'rgb(157, 147, 124)';
        ctx.fillRect(45, y_baseline - 2 + (i * y_bibletars_box_spacing), 300, 104);

        ctx.fillStyle = 'rgb(66, 66, 66)';
        ctx.fillRect(50, y_baseline + (i * y_bibletars_box_spacing), 100, 100);

        ctx.font = "20px Arial";
        ctx.fillStyle = 'rgb(8, 8, 8)';

        // set player's name
        var players_name = my_name;
        players_name = my_game.everyones_names[i];

        ctx.fillText(players_name, 173, y_baseline + 20 + (i * y_bibletars_box_spacing));

       function loadCountryData() {
            img_countries = new Image();
           var players_country_svg = "./images/country_" + my_game.countries[i] + ".svg";
           img_countries.src = players_country_svg;
           return img_countries;
        }
        if(img_countries_sources_game[i] == null) {
            img_countries_sources_game[i] = loadCountryData();
        }
        ctx.drawImage(img_countries_sources_game[i], 175, y_baseline + 60 + (i * y_bibletars_box_spacing), 60, 30);

        // wrong display | black shadow add
        ctx.shadowColor = "black";
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        var wrong_x_spacing = 25;
        for (let j = 0; j < my_game.questions_wrong[i]; j++) {
            ctx.drawImage(img_wrong, 175 + (j * wrong_x_spacing), y_baseline + 35 + (i * y_bibletars_box_spacing), 20, 20);
        }
        // black shadow remove
        ctx.shadowColor = "white";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        


        /**Draw everyone's bibletars on top of the box displays */
        draw_players_bibletars(i);
    }




}

function kick_me_out_of_the_game () {
    /** Once I get kicked out, I become a spectator in the game */
    kicked_out = true;
}

function broadcast_game_is_over (time_alloted_for_each_game) {
    var game_time = (time_alloted_for_each_game - timer)

    /** I'll have the game is over pop up */
    ctx.font = "60px Arial"
    ctx.fillStyle = 'rgb(244, 8, 8)';
    ctx.fillText("Time's Up, Game Over!!", 100, 520);

    if (game_time < -3) {
        home_page = 4;
    }

}

function show_results() {
    /**Shows who won and places, questions I got wrong, as well as gives me the option to play
     * again or go back to the main page in the play section of Bible.io
     */

    // background
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgb(104, 109, 110)');     // Start color (0%)
    gradient.addColorStop(0.5, 'rgb(163, 168, 168)');
    gradient.addColorStop(1, 'rgb(223, 226, 228)');    // End color (100%)
    ctx.fillStyle = gradient;
    // ctx.fillStyle = 'rgb(72, 99, 108)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    


    var y_bibletars_box_spacing = 110
    var y_baseline = 20;


    for (let i = 0; i < my_game.online; i++) {
        // back box
        ctx.fillStyle = 'rgb(157, 147, 124)';
        ctx.fillRect(45, y_baseline - 2 + (i * y_bibletars_box_spacing), 300, 104);

        ctx.fillStyle = 'rgb(66, 66, 66)';
        ctx.fillRect(50, y_baseline + (i * y_bibletars_box_spacing), 100, 100);

        ctx.font = "20px Arial";
        ctx.fillStyle = 'rgb(8, 8, 8)';

        // set player's name
        var players_name = my_name;
        if (i == 0) {
            players_name = my_name;
        } else {
            players_name = "robot player";
        }
        ctx.fillText(players_name, 173, y_baseline + 20 + (i * y_bibletars_box_spacing));
        ctx.font = "15px Arial";
        ctx.fillText("Points: " + Math.round(my_game.everyones_points[i]), 173, y_baseline + 40 + (i * y_bibletars_box_spacing));

       function loadCountryData() {
            img_countries = new Image();
           var players_country_svg = "./images/country_" + my_game.countries[i] + ".svg";
           img_countries.src = players_country_svg;
           return img_countries;
        }
        if(img_countries_sources_game[i] == null) {
            img_countries_sources_game[i] = loadCountryData();
        }
        ctx.drawImage(img_countries_sources_game[i], 175, y_baseline + 60 + (i * y_bibletars_box_spacing), 60, 30);

        // wrong display
        var wrong_x_spacing = 25;
        for (let j = 0; j < my_game.questions_wrong[i]; j++) {
            ctx.drawImage(img_wrong, 175 + (j * wrong_x_spacing), y_baseline + 40 + (i * y_bibletars_box_spacing), 15, 15);
        }



        /**Draw everyone's bibletars on top of the box displays */
        draw_players_bibletars(i);
    }
}


function check_if_answer_is_correct(my_answer_html) {
    if (my_answer_html == correct_answer) {
        this_game_points += 1;
    } else {
        // play incorrect sound
        sound.play();
        /**Push questions into array, I don't think I need to JSON.stringify it because
         * it is already text and should be a string. But once home_page = 4, which means the game is
         * over I'll be able to display the questions the player got wrong and they
         * can go figure the answers themselves, this forces users to go study the Bible
         * instead of me just giving the answers straight up to them
         */
        question_I_got_wrong.push(question.innerText);
        questions_wrong_text.innerText += (question_I_got_wrong.length + ". " + question.innerText);
        // I'm trying to get it to go onto a new line, but it's not working
        questions_wrong_text.innerText += "  -  \n";
        my_game.questions_wrong[0] += 1;
        if (my_game.questions_wrong[0] >= 5) {
            kick_me_out_of_the_game();
        }

    }
}


function questions_background() {
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgb(72, 99, 108)');     // Start color (0%)
    gradient.addColorStop(0.5, 'rgb(26, 101, 101)');
    gradient.addColorStop(1, 'rgb(141, 146, 150)');    // End color (100%)
    ctx.fillStyle = gradient;
    // ctx.fillStyle = 'rgb(72, 99, 108)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function spectatorMode() {
    questions_background();
    question.innerText = ``;
    answer1.innerText = ``;
    answer2.innerText = ``;
    answer3.innerText = ``;
    answer4.innerText = ``;
    
    
    
    ctx.font = "30px Arial"
    ctx.fillStyle = 'rgb(244, 8, 8)';
    ctx.fillText("You got 5 question WRONG!", 100, 550);
    ctx.fillText("You have been kicked out of the game, you are now a SPECTATOR", 100, 600);
    
}

function choose_Random_Question () {
    /** Choose a random question from our database */

    // Return a random integer between 1 and 10 (both included): Math.floor(Math.random() * 10) + 1;

    var amount_of_question_in_level_1 = 10;
    var amount_of_question_in_level_2 = 4;
    var amount_of_question_in_level_3 = 9;


    if (level == 1) {
        randomQuestion = Math.floor(Math.random() * amount_of_question_in_level_1) + 1;
    } else if (level == 2) {
        randomQuestion = Math.floor(Math.random() * amount_of_question_in_level_2) + 1;
    } else if (level == 3) {
        randomQuestion = Math.floor(Math.random() * amount_of_question_in_level_3) + 1;
    }
}

function questions_Display() {
    questions_background();


    // black shadow add
    ctx.shadowColor = "black";
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    ctx.font = "20px Arial";
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText("Your Points: " + this_game_points, 1100, 650);

    // black shadow remove
    ctx.shadowColor = "white";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;


    // Default, DON'T TOUCH!!!
    answer1.innerText = `Answer 1: `;
    answer2.innerText = `Answer 2: `;
    answer3.innerText = `Answer 3: `;
    answer4.innerText = `Answer 4: `;

    // Questions
    if (level == 1) {
        level_1_Questions();
    } else if (level == 2) {
        level_2_Questions();
    } else if (level == 3) {
        level_3_Questions();
    }

}

function level_1_Questions () {
    /**Composed of basic bible questions */
    if (randomQuestion == 1) {
        question.innerText = `What was the name of Jesus' mother? `;
        answer1.innerText += `Mary `;
        answer2.innerText += `Ruth `;
        answer3.innerText += `Delilah `;
        answer4.innerText += `Jezebel `;
        correct_answer = 1;
    }

    if (randomQuestion == 2) {
        question.innerText = `Who was the first man on Earth? `;
        answer1.innerText += `Jesus `;
        answer2.innerText += `Methuselah `;
        answer3.innerText += `Enoch `;
        answer4.innerText += `Adam `;
        correct_answer = 4;
    }
    if (randomQuestion == 3) {
        question.innerText = `Who was the first woman on Earth? `;
        answer1.innerText += `Isabelle `;
        answer2.innerText += `Naomi `;
        answer3.innerText += `Eve `;
        answer4.innerText += `Deborah `;
        correct_answer = 3;
    }
    if (randomQuestion == 4) {
        question.innerText = `Who betrayed Jesus? `;
        answer1.innerText += `Peter `;
        answer2.innerText += `Judas `;
        answer3.innerText += `John `;
        answer4.innerText += `The Pharisees `;
        correct_answer = 2;
    }
    if (randomQuestion == 5) {
        question.innerText = `How many years old was Moses when he died? `;
        answer1.innerText += `100 `;
        answer2.innerText += `110 `;
        answer3.innerText += `120 `;
        answer4.innerText += `130 `;
        correct_answer = 3;
    }
    if (randomQuestion == 6) {
        question.innerText = `How many days did it take God to create the heavens and the earth? `;
        answer1.innerText += `5 days `;
        answer2.innerText += `6 days `;
        answer3.innerText += `7 days `;
        answer4.innerText += `8 days `;
        correct_answer = 2;
    }
    if (randomQuestion == 7) {
        question.innerText = `How many disciples did Jesus have? `;
        answer1.innerText += `12  `;
        answer2.innerText += `20  `;
        answer3.innerText += `100 `;
        answer4.innerText += `144 `;
        correct_answer = 1;
    }
    if (randomQuestion == 8) {
        question.innerText = `What was the name of Elisha's master? `;
        answer1.innerText += `Ahab  `;
        answer2.innerText += `Balaam  `;
        answer3.innerText += `Elijah `;
        answer4.innerText += `Gehazi `;
        correct_answer = 3;
    }
    if (randomQuestion == 9) {
        question.innerText = `What was the name of Abraham's father? `;
        answer1.innerText += `Yonatan  `;
        answer2.innerText += `Terah  `;
        answer3.innerText += `Isaac `;
        answer4.innerText += `Melchizedek `;
        correct_answer = 2;
    }
    if (randomQuestion == 10) {
        question.innerText = `What was the name of Abraham's son? `;
        answer1.innerText += `Isaac  `;
        answer2.innerText += `Jacob  `;
        answer3.innerText += `Joseph `;
        answer4.innerText += `Samson `;
        correct_answer = 1;
    }
}

function level_2_Questions () {
    /** Difficult Bible Questions */
    if (randomQuestion == 1) {
        question.innerText = `“Who was the tallest man in the Bible? `;
        answer1.innerText += `Goliath `;
        answer2.innerText += `Og King of Bashan `;
        answer3.innerText += `King Saul `;
        answer4.innerText += `Lahmi `;
        correct_answer = 2;
    }
    if (randomQuestion == 2) {
        question.innerText = `What was the name of the man who was an instructor of every craftsman in bronze and iron `;
        answer1.innerText += `Ethan `;
        answer2.innerText += `Jubal `;
        answer3.innerText += `Tubal-Cain `;
        answer4.innerText += `Seth `;
        correct_answer = 3;
    }
    if (randomQuestion == 3) {
        question.innerText = `In which land did God bury Moses when he died? `;
        answer1.innerText += `Aram `;
        answer2.innerText += `Kush `;
        answer3.innerText += `Egypt `;
        answer4.innerText += `Moab `;
        correct_answer = 4;
    }
    if (randomQuestion == 4) {
        question.innerText = `How old was Adam when he died? `;
        answer1.innerText += `830 years old `;
        answer2.innerText += `888 years old `;
        answer3.innerText += `930 years old `;
        answer4.innerText += `956 years old `;
        correct_answer = 3;
    }
}

function level_3_Questions () {
    /** The reason why level 3 is hard, is because it will just be verses from the Bible, and the player will have
     * to answer exactly where it is located in the Bible
     */
    if (randomQuestion == 1) {
        question.innerText = `“For, brethren, ye have been called unto liberty; only use not liberty for an occasion to the flesh, but by love serve one another.” `;
        answer1.innerText += `John 3:16 `;
        answer2.innerText += `Galatians 5:13 `;
        answer3.innerText += `Romans 5:4 `;
        answer4.innerText += `Romans 11:9 `;
        correct_answer = 2;
    }
    if (randomQuestion == 2) {
        question.innerText = `Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.`;
        answer1.innerText += `Mark 8:3 `;
        answer2.innerText += `Mark 16:4 `;
        answer3.innerText += `Mark 6:9 `;
        answer4.innerText += `Matthew 5:16 `;
        correct_answer = 4;
    }
    if (randomQuestion == 3) {
        question.innerText = `But we are all as an unclean thing, and all our righteousnesses are as filthy rags; and we all do fade as a leaf; and our iniquities, like the wind, have taken us away.`;
        answer1.innerText += `Jeremiah 25:11 `;
        answer2.innerText += `Isaiah 64:6 `;
        answer3.innerText += `Isaiah 10:11 `;
        answer4.innerText += `Jeremiah 9:2 `;
        correct_answer = 2;
    }
    if (randomQuestion == 4) {
        question.innerText = `Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.`;
        answer1.innerText += `Proverbs 10:9 `;
        answer2.innerText += `Psalms 10:11 `;
        answer3.innerText += `Psalms 25:6 `;
        answer4.innerText += `Psalms 1:1 `;
        correct_answer = 4;
    }
    if (randomQuestion == 5) {
        question.innerText = `More to be desired are they than gold, yea, than much fine gold: sweeter also than honey and the honeycomb.`;
        answer1.innerText += `Psalms 19:10  `;
        answer2.innerText += `Proverbs 30:29 `;
        answer3.innerText += `Lamentations 3:2 `;
        answer4.innerText += `Leviticus 5:8 `;
        correct_answer = 1;
    }
    if (randomQuestion == 6) {
        question.innerText = `We give thee thanks, O Lord God Almighty, which art, and wast, and art to come; because thou hast taken to thee thy great power, and hast reigned.`;
        answer1.innerText += `Romans 9:1  `;
        answer2.innerText += `Numbers 7:12 `;
        answer3.innerText += `Revelation 11:17 `;
        answer4.innerText += `Deuteronomy 3:7 `;
        correct_answer = 1;
    }
    if (randomQuestion == 7) {
        question.innerText = `For wrath killeth the foolish man, and envy slayeth the silly one.`;
        answer1.innerText += `Ezekiel 6:9 `;
        answer2.innerText += `Job 30:9 `;
        answer3.innerText += `Job 6:40 `;
        answer4.innerText += `Job 5:2 `;
        correct_answer = 4;
    }
    if (randomQuestion == 8) {
        question.innerText = `And so it is written, The first man Adam was made a living soul; the last Adam was made a quickening spirit. `;
        answer1.innerText += `Romans 9:8 `;
        answer2.innerText += `Genesis 15:3 `;
        answer3.innerText += `2 Corinthians 6:9 `;
        answer4.innerText += `1 Corinthians 15:45 `;
        correct_answer = 3;
    }
    if (randomQuestion == 9) {
        question.innerText = `So teach us to number our days, that we may apply our hearts unto wisdom. `;
        answer1.innerText += `Psalms 90:12 `;
        answer2.innerText += `Psalms 56:3 `;
        answer3.innerText += `Ecclesiastes 3:26 `;
        answer4.innerText += `Ecclesiastes 11:9 `;
        correct_answer = 1;
    }
    
}

function drawGame() {

    
    draw_Background();

    if (home_page == 1) {
        titleText();
        friendsBoard();
        onlineDisplay();
        myScoresDisplay();
        displayLevels();
        otherTextDisplay();
        challenge_box_display();
        myBibletar();
    } else if (home_page == 2) {
        connectPlayers();
        loadingBox();
        myBibletar();
    } else if (home_page == 3) {
        if (kicked_out == true) {
            spectatorMode();
        } else {
            questions_Display();
            if (game_finished == true) {
                broadcast_game_is_over(60);
            }
        }
        draw_All_Players();
        display_Game_Time(60);
    } else if (home_page == 4) {
        show_results();
    }
    displayMouseX_and_MouseY();
    show_or_hide_html_elements();
    start_timer();

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