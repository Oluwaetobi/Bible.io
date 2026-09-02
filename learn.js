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

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const big_text = document.getElementById('big-text');
const text_to_read = document.getElementById('text-to-read');
const top_border = 90;
const side_border = 2;
var mouseX = 0;
var mouseY = 0;
var table_clicked = 0;
var book_clicked = 0;

var box_x_pos = 1;
var gameOn = false;
/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var show_or_hide_text = [];
var learn_page = 1;

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
            }
        }
    });
}

function displayMouseX_and_MouseY () {
    ctx.font = "30px Arial";
    ctx.strokeStyle = 'rgb(190, 36, 36)';
    ctx.strokeText("MouseX: " + mouseX + " MouseY: " + mouseY, 10, 30);
    ctx.fillStyle = 'rgb(190, 36, 36)';
    ctx.fillText("MouseX: " + mouseX + " MouseY: " + mouseY, 10, 30);

}

function book_Chosen(table_clicked_html, book_clicked_html) {
    learn_page = 2;
    table_clicked = table_clicked_html;
    book_clicked = book_clicked_html;

}

function show_table_or_hide_table() {
    if (learn_page == 1) {
        document.getElementById('choose_bible_books').style.display = "block";
        document.getElementById('choose_christians_books').style.display = "block";
        document.getElementById('choose_articles_books').style.display = "block";
        document.getElementById('books_reading_mode').style.display = "none";
    }
    if (learn_page == 2) {
        document.getElementById('choose_bible_books').style.display = "none";
        document.getElementById('choose_christians_books').style.display = "none";
        document.getElementById('choose_articles_books').style.display = "none";
        document.getElementById('books_reading_mode').style.display = "block";
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
        ctx.fillStyle = 'rgb(154, 82, 6)';
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
    if (box_x_pos > canvas.width - 200) {
        box_x_pos = 0;
    }

}


function drawGame() {
    // blue background
    ctx.fillStyle = 'rgb(176, 223, 255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    mouseDetections();
    displayMouseX_and_MouseY();
    loadingBox();
    titleText();
    show_table_or_hide_table();
    goBackSign();
    takeCareOfText();

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
        if (table_clicked = 1) {
            // for bible books
            Bible_DataBase();
        }
        if (table_clicked = 2) {
            // Amazing Christians From History
            Christians_From_History_DataBase();
        }
        if (table_clicked = 3) {
            // Christian Articles to Read
            Christian_Articles_DataBase();
        }
    } 
}

function Bible_DataBase () {
    if (book_clicked == 1) {
        
    }
}

function stop_re_adding_text (type_of_text) {
    /* we add one to the specificed element of the array, and before we write text, we check if that element
    is equal to 0 or not, if it is not equal to zero, we know that we've already written it, this allows
    give our text the capability of being copied and pasted, as well as prevents unnecessary text changes or
    addtions */
    show_or_hide_text[type_of_text] += 1;
}

function Christians_From_History_DataBase () {
    // backticks are life savers "`"  ```````
    if (book_clicked == 1) {
        text_to_read.innerText = `Billy Graham: (1918-2018) is undoubtedly one of America’s greatest preachers. He grew up in North Carolina to a middle class family. And one day a preacher came to town, and Billy’s parents told him about it and he attended. That day Billy Graham decided to surrender his life to Jesus. Graham married his beautiful wife Ruth Bell in 1943, her father was a missionary and she was fresh from China. Ruth Bell was born to American parents who were missionaries in China. Billy Graham slowly rose to fame in America, although he did not preach for fame but solely because of his love for God, while many pastors were slowly cherry picked and faced tarnishes on their reputation, Billy Graham seemed to fly above it all and hardly was their ever a question as to whether he pure and righteous. Billy Graham had moral discipline unlike some American Pastors. Billy Graham preached to millions, in fact billions of people all across the world. His messages were translated into many languages, and many people, crowds in fact, would throng to his sermons. He was no doubt America’s greatest preacher. Once a man named “George Palmer” who feared neither young nor old, he became the leader of a gang, at age 17, and tried to kill him. In his young years, he hated Christians, despised them greatly in fact, and had a plot to kill Billy Graham. George made small zip guns for his 10 friends, who were in his gang and attended Billy Graham’s speech. And amidst a large crowd of people, amidst Billy Graham’s sermon. The altar call was almost there, Billy Graham called people to surrender their lives to Christ if they had not yet. But shortly before this, George looked around and he wondered “why in the living world are all these stupid people here!”, and out of nowhere a voice called to him saying, “why are you here.” He looked around but could not see or find the person who talked to him. He knew it was God. The truth was George did not know why he was here except but to kill Graham. He was angry because God took his father. And he asked “God why did you do it, why did you take my father.” He was about 6 or 9 when his father died. His father had cancer and passed away. He told God that he hurt him so much. And God told him he wasn’t trying to hurt him. That`;
        text_to_read.innerText += ` he would never hurt him. George hadn’t cried since he was 7 and a half years old. And that day he cried, and wept like a baby. The altar call came, he put his zip gun down and ran to the front and surrendered his life to Jesus Christ. And miraculously 9 of his 10 friends did the exact same thing.  Billy Graham traveled the world, preaching to many, saving souls, and reminded us of God’s love for us and how he wanted to save us all. Citation: https://www.youtube.com/watch?v=6GeGqm4ocg8`;
        stop_re_adding_text(1);
    }
    if (book_clicked == 1) {
        
    }
    if (book_clicked == 1) {
        
    }
    if (book_clicked == 1) {
        
    }
    if (book_clicked == 1) {
        
    }
}

function Christian_Articles_DataBase () {

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