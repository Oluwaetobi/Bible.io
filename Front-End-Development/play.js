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

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const big_text = document.getElementById('big-text');
const top_border = 90;
const side_border = 2;

var box_x_pos = 1;
/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var play_front_page_text = [];

var my_name = "Unknown Player";
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
};


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

// var players_in_my_game = 4;

const my_game = {
    online: 4,
    everyones_points: [0, 0, 0, 0],
    /** questions_wrong, let's us know how many questions each player in the game has gotten wrong
     * if you get 5 questions wrong, you automatically become a spectator, and it will show on your
     * box as well
     */
    questions_wrong: [0, 0, 0, 0],
    countries: [0, 0, 0, 0],
};

var x_bar_divider = 1;

var robot_modes = [0, 0, 0]

const sound = new Audio();
sound.src = "./sounds/sound_incorrect.mp3";

var img_world_map = new Image();
img_world_map.src = "./images/world_map.svg"; // Set source URL
img_world_map.alt = "world map image";

var clock = new Image();
clock.src = "./images/clock.svg"
clock.alt = "clock"


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
}


function prepare_the_game () {
    timer = 0;
    this_game_points = 0;
    // resets it each game
    question_I_got_wrong = [];
    my_game.questions_wrong[0] = 0;

    for (let i = 0; i < my_game.everyones_points.length; i++) {
        // reset everyone's points
        my_game.everyones_points[i] = 0;
    }

    randomRobotModes();

    x_bar_divider = 1;
    home_page = 2;
    play_front_page_text[0] = 0;
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
    // localStorage.setItem('old_bibletar', JSON.stringify(old_bibletar));
    // localStorage.setItem('acquired_stuff_closet', JSON.stringify(acquired_stuff_closet));
    // localStorage.setItem('not_acquired_stuff_shop', JSON.stringify(not_acquired_stuff_shop));
    localStorage.setItem('my_cash', JSON.stringify(my_cash));
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
    } else if (home_page == 2) {
        document.getElementById('choice1').style.display = "none";
        document.getElementById('choice2').style.display = "none";
        document.getElementById('choice3').style.display = "none";
        form.style.display = "none";
    } else if (home_page == 3) {
        form.style.display = "block";
    } else if (home_page == 4) {
        form.style.display = "none";
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
            robotPlayers();
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

function robotPlayers() {
    for (let i = 1; i < my_game.everyones_points.length; i++) {
        my_game.everyones_points[i] += robot_modes[i-1];
    }
}

function display_Game_Time (time_alloted_for_each_game) {
    var game_time = (time_alloted_for_each_game-timer);

    
    var x_baseline = 1250;
    var y_baseline = 100;

    // clock background also edge of the game screen
    ctx.fillStyle = 'rgb(6, 134, 119)';
    ctx.fillRect(x_baseline - 50, 0, 400, 460);
    
    ctx.drawImage(clock, x_baseline - 25, y_baseline -75, 115, 115);

    ctx.font = "60px Arial";

    // drop shadow behind timer
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(game_time, (x_baseline - 3), (y_baseline + 3));

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
    ctx.fillText(game_time, x_baseline, y_baseline + 3);

}

function draw_game_grid () {
    // grid background
    ctx.fillStyle = 'rgb(10, 132, 193)';
    ctx.fillRect(0, 0, canvas.width, 450);

    // grid line ticks
    var grid_size = 2.5;
    for (let i = 0; i < 10; i++) {
        var x_baseline = 341;
        ctx.fillStyle = 'rgb(253, 252, 252)';
        ctx.fillRect(x_baseline + ((i * 500)/x_bar_divider), 0, grid_size, 450);
    }
}

function draw_points_as_bar_graph(y_bibletars_box_spacing, y_baseline) {
    my_game.everyones_points[0] = this_game_points;
    var bar_speed_x = 200;
    var bar_x_starting_point = 340;

    for (let i = 0; i < my_game.online; i++) {
        var each_players_points = Math.round(my_game.everyones_points[i]);

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

        var size_of_bar = ((each_players_points * bar_speed_x) / x_bar_divider);
        if (size_of_bar > 800) {
            // send bar graph back to half it's size when it passes the end of game screen land mark
            x_bar_divider += 1;
        }
    }
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
        ctx.fillText(players_name, 170, y_baseline + 20 + (i * y_bibletars_box_spacing));
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
        my_game.questions_wrong[0] += 1;

    }
}

function choose_Random_Question () {
    /** Choose a random question from our database */

    // Return a random integer between 1 and 10 (both included): Math.floor(Math.random() * 10) + 1;

    var amount_of_question_in_level_1 = 2;
    var amount_of_question_in_level_2 = 1;
    var amount_of_question_in_level_3 = 1;


    if (level == 1) {
        randomQuestion = Math.floor(Math.random() * amount_of_question_in_level_1) + 1;
    } else if (level == 2) {
        randomQuestion = Math.floor(Math.random() * amount_of_question_in_level_2) + 1;
    } else if (level == 3) {
        randomQuestion = Math.floor(Math.random() * amount_of_question_in_level_3) + 1;
    }
}

function questions_background() {
    ctx.fillStyle = 'rgb(186, 182, 182)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function questions_Display() {
    questions_background();

    ctx.font = "20px Arial";
    ctx.fillStyle = 'rgb(8, 8, 8)';
    ctx.fillText("Your Points: " + this_game_points, 1100, 650);
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
        correct_answer = 4;
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
}

function level_3_Questions () {
    /** The reason why level 3 is hard, is because it will just be verses from the Bible, and the player will have
     * to answer exactly where it is located in the Bible
     */
    if (randomQuestion == 1) {
        question.innerText = `“For, brethren, ye have been called unto liberty; only use not liberty for an occasion to the flesh, but by love serve one another.” `;
        answer1.innerText += `John 3:16 `;
        answer2.innerText += `Galtians 5:13 `;
        answer3.innerText += `Romans 5:4 `;
        answer4.innerText += `Romans 11:9 `;
        correct_answer = 2;
    }
    
}

function drawGame() {

    
    draw_Background();
    localStorageAndSessionStorageData();

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
        questions_Display();
        draw_All_Players();
        display_Game_Time(60);
    } else if (home_page == 4) {

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