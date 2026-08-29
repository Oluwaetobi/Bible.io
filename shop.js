const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const bibletar_title = document.getElementById('bibletar-title');
// const bibletar_sub_section = document.getElementById('bibletar-sub-section');
// const boy_or_girl = document.getElementById('boy-or-girl');
const top_border = 90;
const side_border = 2;
let mouseX = 0;
let mouseY = 0;
var my_pixels = 300;
var my_pixels2 = my_pixels*1.2;

var box_x_pos = 1;
var gameOn = false;
var bibletar_maker_page = 1;
var i_am_a_boy = false;
var i_am_a_girl = false;
var my_Cash = 0;
var my_name = "Unknown Player";
const shop_page_background_mens_or_womens = document.getElementById('shop_background');

/** Remember that eyes has 2 component, eyes and eyebrows 
 * also the first element in the array tells us whether it is a boy or a girl namely 1 or 2
 * therefore the lenght of current_bibletar should be 11
 * once I get my own reliable server I'll set the array for current_bibletar to the specific data
 * set within the user's account object
*/
var current_bibletar = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var bibletar_background = current_bibletar[1];
var bibletar_face = current_bibletar[2];
var bibletar_shirt = current_bibletar[3];
var bibletar_glasses = current_bibletar[4];
var bibletar_hats = current_bibletar[5];
var bibletar_eyes = current_bibletar[6];
var bibletar_eyebrows = current_bibletar[7];
var bibletar_nose = current_bibletar[8];
var bibletar_mouth = current_bibletar[9];
var bibletar_hair = current_bibletar[10];
/**old_bibletar stores the old one, meaning that if the users doesn't save their
 * bibletar it will revert to the old one
 */
var old_bibletar = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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

/* Being able to copy and paste text by using HTML is super important, especially when the text is super long,
that's one thing I like about HTML. As well as it's the core foundation to building websites. */
var front_page_text = [];

/**It is important the we do NOT use closet_section for shop_section because you can't
 * buy skin colors in the shop_section, so they are not the same thing
 */
var closet_section = 1;
var shop_section = 1;
var item_clicked = 1;

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

function mouseDetections() {
    document.addEventListener("click", function (event) {
        if (bibletar_maker_page == 2 ) {
        // Save and Exit
        if (mouseX > 1127 && mouseX < 1330 && mouseY < 83 && mouseY > 53) {
            bibletar_maker_page = 1;
            i_am_a_boy = false;
            i_am_a_girl = false;
            /** If I do this it seems like I am creating a pointer, which is bad, because
             * it will always update, so I have to use a for loop and update each element automatically
            old_bibletar = current_bibletar
             */
            for(let i = 0; i < current_bibletar.length; i++) {
                old_bibletar[i] = current_bibletar[i];
            }
        }
        // Leave
        if (mouseX > 979 && mouseX < 1110 && mouseY < 83 && mouseY > 53) {
            bibletar_maker_page = 1;
            i_am_a_boy = false;
            i_am_a_girl = false;
            // current_bibletar = old_bibletar;
            for(let i = 0; i < current_bibletar.length; i++) {
                current_bibletar[i] = old_bibletar[i];
            }
        }
    }
    // Open SHOP
    if (bibletar_maker_page == 2) {
        if (mouseX > 1080 && mouseX < 1330 && mouseY < 564 && mouseY > 496) {
            bibletar_maker_page = 3;
        }
    }
    // Leave SHOP 
    if (bibletar_maker_page == 3) {
        if (mouseX > 1127 -350 && mouseX < 1330 -350 && mouseY < 83 && mouseY > 53) {
            bibletar_maker_page = 2;
            updateIndividualBibletarChoosers();
        }
        /**the current bibletar will equal the old bibletar, but the new stuff you 
         * bought will be brought into your closet
         */
        // current_bibletar = old_bibletar;
        for(let i = 0; i < current_bibletar.length; i++) {
                current_bibletar[i] = old_bibletar[i];
            }
    }
    /**This is very IMPORTANT, because usually the opposite is happening, anytime
     * you leave the Bibletar Maker Closet or shop you must update the current_bibletar, 
     * you must called updateIndividualBibletarChoosers();
     * but it must happen after everything above it get set to the right data
     */
    if (bibletar_maker_page == 1) {
        updateIndividualBibletarChoosers();
    }
    });
}

function updateIndividualBibletarChoosers () {
    bibletar_background = old_bibletar[1];
    bibletar_face = old_bibletar[2];
    bibletar_shirt = old_bibletar[3];
    bibletar_glasses = old_bibletar[4];
    bibletar_hats = old_bibletar[5];
    bibletar_eyes = old_bibletar[6];
    bibletar_eyebrows = old_bibletar[7];
    bibletar_nose = old_bibletar[8];
    bibletar_mouth = old_bibletar[9];
    bibletar_hair = old_bibletar[10];
}
function updateCurrentBibletarCodeNumber() {
    if (i_am_a_boy == true) {
        current_bibletar[0] = 1;
    } else {
        if (i_am_a_girl == true) {
            current_bibletar[0] = 2;
        }
    }

    current_bibletar[1] = bibletar_background;
    current_bibletar[2] = bibletar_face;
    current_bibletar[3] = bibletar_shirt;
    current_bibletar[4] = bibletar_glasses;
    current_bibletar[5] = bibletar_hats;
    current_bibletar[6] = bibletar_eyes;
    current_bibletar[7] = bibletar_eyebrows;
    current_bibletar[8] = bibletar_nose;
    current_bibletar[9] = bibletar_mouth;
    current_bibletar[10] = bibletar_hair;
}

function updateClosetSection (closet_section_html) {
    closet_section = closet_section_html;

    const images = document.querySelectorAll('#choose_bibletar_stuff img');

    var newSources = [];
    /*NO 's' after men!!!! Also it is just background, eyes, noses, and mouths that don't differ that
    are the same for both men and women or (boys and girls)
    Look I had to add EYEBROWS because if you look at the original call in the function it goes up to 10
    so I got to account for that even if I am not going to use it*/
    var bibletar_stuff_part = ['background', 'face_men', 'shirt_men', 'glasses_men', 'hats_men', 'eyes', 'eyebrows_men','noses', 'mouths_men', 'hair_men'];
    if(i_am_a_girl == true) {
        for (let i = 0; i < bibletar_stuff_part.length; i++) {
            // remember the difference != is loose != is strong
            // as long as it's not background, eyes, or nose change property for women
            if (i != 0 || i != 5 || i!= 7) {
                if (i == 1) {
                    bibletar_stuff_part[i] = 'face_women';
                }
                if (i == 2) {
                    bibletar_stuff_part[i] = 'shirt_women';
                }
                if (i == 3) {
                    bibletar_stuff_part[i] = 'glasses_women';
                }
                if (i == 4) {
                    bibletar_stuff_part[i] = 'hats_women';
                }
                if (i == 6) {
                    bibletar_stuff_part[i] = 'eyebrows_women';
                }
                if (i == 8) {
                    bibletar_stuff_part[i] = 'mouth_women';
                }
                if (i == 9) {
                    bibletar_stuff_part[i] = 'hair_women';
                }
            }
        }
    }

    var j = 1;
    while (newSources.length < 10) {
        /* also I did [closet_section - 1] because the real one starts from 1 but arrays start from zero
        so I have to subtract one for it to align*/
        newSources.push("./images/" + bibletar_stuff_part[closet_section - 1] + j + ".svg");
        j+= 1;
    } 

    images.forEach((img, index)=> {
        if(newSources[index]) {
            img.src = newSources[index];
            img.alt = newSources[index];
            console.log("newSources[index]: " +  newSources[index]);
        }
    });
}
function updateShopSection (shop_section_html) {
    shop_section = shop_section_html

    const images = document.querySelectorAll('#choose_shop_stuff img');

    var newSources = [];
    /*NO 's' after men!!!! Also it is just background, eyes, noses, and mouths that don't differ that
    are the same for both men and women or (boys and girls)
    Look I had to add EYEBROWS because if you look at the original call in the function it goes up to 10
    so I got to account for that even if I am not going to use it*/
    var bibletar_stuff_part = ['background', 'face_men', 'shirt_men', 'glasses_men', 'hats_men', 'eyes', 'eyebrows_men','noses', 'mouths_men', 'hair_men'];
    if(i_am_a_girl == true) {
        for (let i = 0; i < bibletar_stuff_part.length; i++) {
            // remember the difference != is loose != is strong
            // as long as it's not background, eyes, or nose change property for women
            if (i != 0 || i != 5 || i!= 7) {
                if (i == 1) {
                    bibletar_stuff_part[i] = 'face_women';
                }
                if (i == 2) {
                    bibletar_stuff_part[i] = 'shirt_women';
                }
                if (i == 3) {
                    bibletar_stuff_part[i] = 'glasses_women';
                }
                if (i == 4) {
                    bibletar_stuff_part[i] = 'hats_women';
                }
                if (i == 6) {
                    bibletar_stuff_part[i] = 'eyebrows_women';
                }
                if (i == 8) {
                    bibletar_stuff_part[i] = 'mouth_women';
                }
                if (i == 9) {
                    bibletar_stuff_part[i] = 'hair_women';
                }
            }
        }
    }

    // starts at three because it's in the shop section
    var j = 4;
    while (newSources.length < 10) {
        /* also I did [closet_section - 1] because the real one starts from 1 but arrays start from zero
        so I have to subtract one for it to align*/
        newSources.push("./images/" + bibletar_stuff_part[shop_section - 1] + j + ".svg");
        j+= 1;
    } 

    images.forEach((img, index)=> {
        if(newSources[index]) {
            img.src = newSources[index];
            img.alt = newSources[index];
            console.log("newSources[index]: " +  newSources[index]);
        }
    });
}

/**This function is an outliar, it should actually be in item_Chosen, but because the 
 * eyebrows section and possibly extra stuff such as color as it's own distinct table, I can't
 * put it in the function beneath
 */
function eyebrows_Chosen(extra_clicked_html) {
    bibletar_eyebrows = extra_clicked_html;
}
function item_Chosen(item_clicked_html) {
    item_clicked = item_clicked_html;

    if (bibletar_maker_page == 2) {
        if (closet_section == 1) {
            bibletar_background = item_clicked;
        }
        if (closet_section == 2) {
            bibletar_face = item_clicked;
        }
        if (closet_section == 3) {
            bibletar_shirt = item_clicked;
        }
        if (closet_section == 4) {
            bibletar_glasses = item_clicked;
        }
        if (closet_section == 5) {
            bibletar_hats = item_clicked;
        }
        if (closet_section == 6) {
            bibletar_eyes = item_clicked;
        }
        if (closet_section == 7) {
            bibletar_eyebrows = item_clicked;
        }
        if (closet_section == 8) {
            bibletar_nose = item_clicked;
        }
        if (closet_section == 9) {
            bibletar_mouth = item_clicked;
        }
        if (closet_section == 10) {
            bibletar_hair = item_clicked;
        }
    }
    /**I'm making my life easy and keeping the numbers the same relative to the top so I don't cause
     * problems down the line for "type_of_drawing" or anything else, and that way I don't have
     * to make more if statements
     */
    if (bibletar_maker_page == 3) {
        if (shop_section == 1) {
            bibletar_background = item_clicked;
        }
        if (shop_section == 3) {
            bibletar_shirt = item_clicked;
        }
        if (shop_section == 4) {
            bibletar_glasses = item_clicked;
        }
        if (shop_section == 5) {
            bibletar_hats = item_clicked;
        }
    }
}

function match_drawings_to_correct_bibletar() {
    img_background.src = "./images/background" + current_bibletar[1] + ".svg";
    img_eyes.src = "./images/eyes" + current_bibletar[6] + ".svg";
    img_noses.src = "./images/noses" + current_bibletar[8] + ".svg";
    if (i_am_a_boy == true ) {
        /**You might be wondering why include face as well, because women's necks are in
         * fact visibily thinner, and men's necks are in fact visibly thicker, also
         * women sometimes put on makeup, which means their mouths = lips will be
         * different colors, also there are also some other differences which i will leave
         * up to the professionals
         */
        img_face.src = "./images/face_men" + current_bibletar[2] + ".svg";
        img_shirt.src = "./images/shirt_men" + current_bibletar[3] + ".svg";
        img_glasses.src = "./images/glasses_men" + current_bibletar[4] + ".svg";
        img_hats.src = "./images/hats_men" + current_bibletar[5] + ".svg";
        img_eyebrows.src = "./images/eyebrows_men" + current_bibletar[7] + ".svg";
        img_hats.src = "./images/hats_men" + current_bibletar[9] + ".svg";
        img_mouths.src = "./images/mouths_men" + current_bibletar[10] + ".svg";
    } else {
        if (i_am_a_girl == true) {
            img_face.src = "./images/face_women" + current_bibletar[2] + ".svg";
            img_shirt.src = "./images/shirt_women" + current_bibletar[3] + ".svg";
            img_glasses.src = "./images/glasses_women" + current_bibletar[4] + ".svg";
            img_hats.src = "./images/hats_women" + current_bibletar[5] + ".svg";
            img_eyebrows.src = "./images/eyebrows_women" + current_bibletar[7] + ".svg";
            img_hats.src = "./images/hats_women" + current_bibletar[9] + ".svg";
            img_mouths.src = "./images/mouths_women" + current_bibletar[10] + ".svg";
        }
    }
}

function drawUsersBibletar() {
    // Draw Back Box Layer for User's Bibletar
    // ctx.fillStyle = 'rgb(1, 1, 1)';
    // ctx.fillRect(987, 97, 336, 306);
    // ctx.fillStyle = 'rgb(129, 116, 115)';
    // ctx.fillRect(990, 100, 330, 300);

    // WRITE PLAYER'S NAME
    ctx.font = "40px Arial";
    ctx.strokeStyle = 'rgb(10, 9, 9)';
    ctx.strokeText(my_name, 1010, 450);
    ctx.fillStyle = 'rgb(8, 8, 8)';
    ctx.fillText(my_name, 1010, 450);

     // Player's Cash
    ctx.font = "25px Arial";
    ctx.fillStyle = 'rgb(8, 8, 8)';
    ctx.fillText("CASH: $" + my_Cash, 1100, 485);

    updateCurrentBibletarCodeNumber();
    match_drawings_to_correct_bibletar();

    function resizeImageByPixels_and_draw (what_to_draw, x_pos_ribp, y_pos_ribp, pixel_size, type_of_drawing) {
        my_pixels = pixel_size;
        // over here I resize the width based off of the given height
        if (type_of_drawing == 1) {
            my_pixels2 = my_pixels*1.2;
        }
        if (type_of_drawing == 2) {
            my_pixels2 = my_pixels*1.2;
        }
        if (type_of_drawing == 3) {
            my_pixels2 = my_pixels*1.7;
        }
        if (type_of_drawing == 4) {
            my_pixels2 = my_pixels*1.2;
        }
        if (type_of_drawing == 5) {
            my_pixels2 = my_pixels*1.2;
        }
        if (type_of_drawing == 6) {
            my_pixels2 = my_pixels*1.2;
        }
        if (type_of_drawing == 7) {
            my_pixels2 = my_pixels*1.2;
        }
        if (type_of_drawing == 8) {
            my_pixels2 = my_pixels*1.2;
        }
        if (type_of_drawing == 9) {
            my_pixels2 = my_pixels*1.2;
        }
        if (type_of_drawing == 10) {
            my_pixels2 = my_pixels*1.2;
        } else {
            // default
            my_pixels*1.2;
        }
        /**careful not to confuse function parameters with variables, that's why I added
         * the _ribp
         */
        ctx.drawImage(what_to_draw, x_pos_ribp, y_pos_ribp, my_pixels2, my_pixels);
    }
    /** drawing / x_pos / y_pos / size / type, reference lines 29-38 or if that changes reference 
     * function called item_chosen specifcally for closet_section NOT shop_section
     */
    resizeImageByPixels_and_draw(img_background, 980, 100, 300, 1);
    resizeImageByPixels_and_draw(img_shirt, 1045, 280, 120, 3);

    // ctx.drawImage(img_background, 980, 100, 360, 300);
    // ctx.drawImage(img_shirt, 980, 100, 360, 300);

    

}

function bibletarShopPage () {
     // bibletar maker gradient background
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    
    // 3. Add color stops
    // gradient.addColorStop(0, 'red');     // Start color (0%)
    // gradient.addColorStop(0.5, 'yellow'); // Middle color (50%)
    // gradient.addColorStop(1, 'blue');    // End color (100%)
    
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


    // back layer background for engine chooser
    ctx.fillStyle = 'rgb(1, 1, 1)';
    ctx.fillRect(195, 45, 1160, 660);
    ctx.fillStyle = 'rgb(238, 255, 194)';
    ctx.fillRect(200, 50, 1150, 650);
    if (i_am_a_boy == true ) {
        ctx.fillStyle = 'rgb(78, 110, 174)';
    } else {
        if (i_am_a_girl == true) {
            ctx.fillStyle = 'rgb(174, 78, 158)';
        }
    }
    ctx.fillRect(200, 50, 1150, 40);


    ctx.font = "25px Arial";
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    if (i_am_a_boy == true) {
        ctx.strokeText("Boys' Bibletar SHOP", 210, 77);
    } else {
        if (i_am_a_girl == true) {
            ctx.strokeText("Girls' Bibletar SHOP", 210, 77);
        }
    }
    ctx.fillStyle = 'rgb(252, 250, 250)';
    if (i_am_a_boy == true) {
        ctx.fillText("Boys' Bibletar SHOP", 210, 77);
    } else {
        if (i_am_a_girl == true) {
            ctx.fillText("Girls' Bibletar SHOP", 210, 77);
        }
    }

    if(i_am_a_boy == true) {
        shop_page_background_mens_or_womens.src = "./images/shop_page_background_mens.svg"
    } else {
        if (i_am_a_girl == true) {
            shop_page_background_mens_or_womens.src = "./images/shop_page_background_womens.svg"
        }
    }

    /**I hade to change the leave shop position because apparently the mouse event listener
     * permits double clicks, even though I don't want that, which makes it go all the way to the first
     * page :(
     */
    // Leave Shop
    ctx.fillStyle = 'rgb(12, 12, 12)';
    ctx.fillRect(1130 -353, 52, 176, 36);
    ctx.fillStyle = 'rgb(147, 6, 154)';
    ctx.fillRect(1130 -350, 55, 170, 30);
    ctx.font = "25px Arial";
    ctx.fillStyle = 'rgb(252, 250, 250)';
    ctx.fillText("Leave Shop", 1150 -350, 77);

    drawUsersBibletar();
}

function bibletarMakerHome() {

    // bibletar maker gradient background
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    
    // 3. Add color stops
    // gradient.addColorStop(0, 'red');     // Start color (0%)
    // gradient.addColorStop(0.5, 'yellow'); // Middle color (50%)
    // gradient.addColorStop(1, 'blue');    // End color (100%)
    
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


    // back layer background for engine chooser
    ctx.fillStyle = 'rgb(1, 1, 1)';
    ctx.fillRect(195, 45, 1160, 660);
    ctx.fillStyle = 'rgb(238, 255, 194)';
    ctx.fillRect(200, 50, 1150, 650);
    if (i_am_a_boy == true ) {
        ctx.fillStyle = 'rgb(78, 110, 174)';
    } else {
        if (i_am_a_girl == true) {
            ctx.fillStyle = 'rgb(174, 78, 158)';
        }
    }
    ctx.fillRect(200, 50, 1150, 40);

    // Leave
    ctx.fillStyle = 'rgb(154, 14, 6)';
    ctx.fillRect(980, 55, 130, 30);
    ctx.font = "25px Arial";
    ctx.fillStyle = 'rgb(252, 250, 250)';
    ctx.fillText("Leave", 1010, 77);

    // Save and Exit
    ctx.fillStyle = 'rgb(6, 154, 8)';
    ctx.fillRect(1130, 55, 200, 30);
    ctx.font = "25px Arial";
    ctx.fillStyle = 'rgb(252, 250, 250)';
    ctx.fillText("Save and Exit", 1150, 77);




    ctx.font = "25px Arial";
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    if (i_am_a_boy == true) {
        ctx.strokeText("Boys' Bibletar Maker - My Closet", 210, 77);
    } else {
        if (i_am_a_girl == true) {
            ctx.strokeText("Girls' Bibletar Maker - My Closet", 210, 77);
        }
    }
    ctx.fillStyle = 'rgb(252, 250, 250)';
    if (i_am_a_boy == true) {
        ctx.fillText("Boys' Bibletar Maker - My Closet", 210, 77);
    } else {
        if (i_am_a_girl == true) {
            ctx.fillText("Girls' Bibletar Maker - My Closet", 210, 77);
        }
    }

    // Choose whether to display boys' hair logo or girls' hair logo
    if (i_am_a_boy == true) {
        document.getElementById('boy_hair').style.visibility = "visible";
        document.getElementById('girl_hair').style.visibility = "hidden";
        
    } else {
        if (i_am_a_girl == true) {
            document.getElementById('girl_hair').style.visibility = "visible";
            document.getElementById('boy_hair').style.visibility = "hidden";
        } else {
        }
    }

    drawUsersBibletar();



    // SHOP
    ctx.fillStyle = 'rgb(51, 5, 3)';
    ctx.fillRect(1081, 497, 156, 71);
    ctx.fillStyle = 'rgb(157, 16, 8)';
    ctx.fillRect(1084, 500, 150, 65);
    ctx.font = "40px Arial";
    ctx.strokeStyle = 'rgb(250, 249, 249)';
    ctx.strokeText("SHOP", 1100, 545);
    ctx.fillStyle = 'rgb(247, 243, 243)';
    ctx.fillText("SHOP", 1100, 545);



}

function boy_bibletar() {
    bibletar_maker_page = 2;
    i_am_a_boy = true;
}

function girl_bibletar() {
    bibletar_maker_page = 2;
    i_am_a_girl = true;
}

function bibleMaker_background () {

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



    // white shadow add
    ctx.shadowColor = "white";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.font = "35px Arial";
    ctx.strokeStyle = 'rgb(5, 5, 5)';
    ctx.strokeText("Boy", 551 +10, 581);
    ctx.strokeStyle = 'rgb(33, 0, 153)';
    ctx.strokeText("Boy", 552 +10, 580);
    ctx.fillStyle = 'rgb(33, 0, 153)';
    ctx.fillText("Boy", 552 +10, 580);

    ctx.font = "35px Arial";
    ctx.strokeStyle = 'rgb(13, 13, 13)';
    ctx.strokeText("Girl", 969 +35, 581);
    ctx.strokeStyle = 'rgb(244, 15, 190)';
    ctx.strokeText("Girl", 970 +35, 580);
    ctx.fillStyle = 'rgb(244, 15, 190)';
    ctx.fillText("Girl", 970 +35, 580);

    // white shadow remove
    ctx.shadowColor = "white";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

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
    ctx.strokeText("MouseX: " + mouseX + " MouseY: " + mouseY, 10, 30);
    ctx.fillStyle = 'rgb(190, 36, 36)';
    ctx.fillText("MouseX: " + mouseX + " MouseY: " + mouseY, 10, 30);

}

function drawSomething() {
    /**HIDE OR SHOW HTML ELEMENTS
     * Makes the text appear and disappear once the user clicks to go their section
     */ 
    if (bibletar_maker_page == 1) {
        bibleMaker_background();
        document.getElementById('bibletar_girl_or_boy').style.visibility = "visible";
        document.getElementById('bibletar_page_1_text').style.visibility = "visible";
        // none for display means hidden or invisible
        document.getElementById('bibletar_designs').style.display = "none";
        document.getElementById('choose_bibletar_stuff').style.display = "none";
        document.getElementById('choose_bibletar_extra').style.display = "none";
        document.getElementById('shop_page_background').style.display = "none";
        document.getElementById('choose_shop_stuff').style.display = "none";
    } else if (bibletar_maker_page == 2) {
        document.getElementById('bibletar_girl_or_boy').style.visibility = "hidden";
        document.getElementById('bibletar_page_1_text').style.visibility = "hidden";
        // block in display means visible, in simple words, YOU CAN SEE IT!!!
        document.getElementById('bibletar_designs').style.display = "block";
        document.getElementById('choose_bibletar_stuff').style.display = "block";
        document.getElementById('choose_bibletar_extra').style.display = "block";
        document.getElementById('shop_page_background').style.display = "none";
        document.getElementById('choose_shop_stuff').style.display = "none";
    } else if (bibletar_maker_page == 3 ){
        // none for display means hidden or invisible
        document.getElementById('bibletar_designs').style.display = "none";
        document.getElementById('choose_bibletar_stuff').style.display = "none";
        document.getElementById('choose_bibletar_extra').style.display = "none";
        document.getElementById('shop_page_background').style.display = "block";
        document.getElementById('choose_shop_stuff').style.display = "block";
    } else {

    }


    // Mouse Detections
    mouseDetections();

    /**HIDE OR SHOW JAVASCRIPT ELEMENTS */
    if (bibletar_maker_page ==2) {
        bibletarMakerHome();
    }
    if (bibletar_maker_page == 3) {
        bibletarShopPage();
    }

    // loadingBox();
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
    // console.log("Bibletar background: " + bibletar_background);
    // console.log("Item Clicked: " + item_clicked);
    // console.log("Current Bibletar: " + current_bibletar);
    // console.log("Old Bibletar: " + old_bibletar);
}

/** Inititalize Dimensions on load */
resizeCanvas();
gameLoop();