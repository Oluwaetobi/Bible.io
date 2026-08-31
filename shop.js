/**First of all if you think I write comments for fun, you are making a huge mistake, these comments are not
 * just for me but I write comments so that if anyone looks at the code in this game, they can understand
 * things that won't come to mind initially, PLEASE READ THE COMMENTS, they explain some of the methods
 * I'm using, and why I am doing what I am doing, no matter how good you are at coding, you willl always
 * forget why you did something a particular way, every good coder, writes good comments, a wise man once said
 * the faintest pen is better than the sharpest memory, and why is that, because even if you write something
 * faintly as long as you know how to read, it is engraved forever and can always be read, but no matter
 * how good your memory is, you always forget it at some point so START WRITING COMMENTS WHEN YOU CODE!!
 */

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const bibletar_title = document.getElementById('bibletar-title');
// const bibletar_sub_section = document.getElementById('bibletar-sub-section');
// const boy_or_girl = document.getElementById('boy-or-girl');
const top_border = 90;
const side_border = 2;
let mouseX = 0;
let mouseY = 0;
var my_pixels_height = 300;
var my_pixels_width = my_pixels_height*1.2;

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
 * therefore the length of current_bibletar should be 11
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

/**Each layer represents each bibletar part thing, remember to keep orders, that's important
 * very soon, we'll be pulling this information from your account once we get a reliable server, each number
 * is important as it represents the number inside the image eg(./images/backgrounds4.svg)
 * there should be 10 rows, the columns depend on how much stuff you've acquired
 * 1. background
 * 2. face
 * 3. shirt
 * 4. glasses
 * 5. hats
 * 6. eyes
 * 7. eyebrows
 * 8. noses
 * 9. mouths
 * 10. hair
 */
var acquired_stuff_closet = [
    /**I hope you are aware, that these numbers aren't always going to be consecutive, these numbers represent
     * the number before ".svg" in reference to the name of the file for the image eg. "background5.svg" or
     * "hats_men46.svg" or "mouths_women6.svg" these numbers are crucial to helping us know what image
     * we are working with, and each row has important data sets for each image, look ABOVE for REFERENCE!!
     * row 1 is for the backgrounds, row 2 is for the face colors, row 3 is for the shirts...
     * can't wait till I get to use splice and slice on my arrays
     */
    [1, 2, 3],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104],
];

/**Most of the rows here won't be used because you can only buy 4 different types of things in the shop
 * backgrounds, shirt, glasses, and hats, but we need the extra rows to align with placements because
 * keying and numbering is essential in data reading, even if we don't use it, doesn't mean we shouldn't
 * have the placements set
 */
var not_acquired_stuff_shop = [
    [4, 5, 6, 7, 8, 9, 10],
    [0, 0, 0],
    [4, 5, 6],
    [4, 5, 6],
    [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38 , 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
/* this is because since our maker has some section off bibletar stuff that are more than others some aren't 
changed at all and they still exist at the end, so in order to make them go away, I have to at least replace 
it with something, like nothing!! Nothing can sometimes mean NaN, well at least in my website
LOL Well at least until I can figure out a more effective way of doing it*/
var changeAll = 500;

var old_bibletar = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var img_background = new Image();
img_background.src = "./images/background1.svg"; // Set source URL
img_background.alt = "background image";

/* face_men0 is for for the robot, also I am not including freckles on the face but might do that as a separte
bibletar part later, robot necks for men and women is medium, boy large, girl small */
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
        if (mouseX > 1127 && mouseX < 1330 && mouseY < (83 + 610) && mouseY > (53 + 610)) {
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
        if (mouseX > 979 && mouseX < 1110 && mouseY < (83 + 610) && mouseY > (53 + 610)) {
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
/* this important because it is only when items are clicked that this seems to happen but not when
the player switches rooms from boy to girl */
function updateAllImageReferences() {
    /*starting backwards so it appears to start on the backgrounds always, I need to update it again
    to make sure all the image references for boys and girls are correct, not just when I select
    a bibletar part, that means switching from background, to face color, or to shirt, glasses, or 
    something else */
    for (let i = 10; i >= 1; i--) {
        updateClosetSection(i);
        updateShopSection(i);
    }
}

/* Needs to be called at least once before requestanimationframe(gameLoop); is called in order to 
allow NaN to receive their places for images */
updateClosetSection(1);
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
                    bibletar_stuff_part[i] = 'mouths_women';
                }
                if (i == 9) {
                    bibletar_stuff_part[i] = 'hair_women';
                }
            }
        }
    }

    var j = 0;
    while (newSources.length < acquired_stuff_closet[closet_section-1].length) {
        /* also I did [closet_section - 1] because the real one starts from 1 but arrays start from zero
        so I have to subtract one for it to align*/
        newSources.push("./images/" + bibletar_stuff_part[closet_section - 1] + acquired_stuff_closet[closet_section-1][j] + ".svg");
        // console.log("j: " + j);
        j+= 1;
        // console.log(acquired_stuff_closet[closet_section-1].length);
    } 
    while (j < changeAll) {
        /* if it is labeled NaN it just means that it should be invisible and that you haven't acquired this 
        image yet, or it should be unavailable*/
        newSources.push("NaN");
        j+=1;
    }

    images.forEach((img, index)=> {
        if(newSources[index]) {
            img.src = newSources[index];
            img.alt = newSources[index];
            // console.log("newSources[index]: " +  newSources[index]);
        }
    });
}
/* Needs to be called at least once before requestanimationframe(gameLoop); is called in order to 
allow NaN to receive their places for images */
updateShopSection(1);
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
                    bibletar_stuff_part[i] = 'mouths_women';
                }
                if (i == 9) {
                    bibletar_stuff_part[i] = 'hair_women';
                }
            }
        }
    }

    var j = 0;
    while (newSources.length < not_acquired_stuff_shop[shop_section-1].length) {
        /* also I did [closet_section - 1] because the real one starts from 1 but arrays start from zero
        so I have to subtract one for it to align*/
        newSources.push("./images/" + bibletar_stuff_part[shop_section - 1] + not_acquired_stuff_shop[shop_section-1][j] + ".svg");
        j+= 1;
    } 
    while (j < changeAll) {
        newSources.push("NaN");
        j+=1;
    }

    images.forEach((img, index)=> {
        if(newSources[index]) {
            img.src = newSources[index];
            img.alt = newSources[index];
            // console.log("newSources[index]: " +  newSources[index]);
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

    // First of all we need to check if the item is accessible, if it is accessible it will NOT say "NaN"
    const images_closet = document.querySelectorAll('#choose_bibletar_stuff img');
    const images_shop = document.querySelectorAll('#choose_shop_stuff img');
    var item_is_accessible = true;

    if (bibletar_maker_page == 2) {
        images_closet.forEach((img, index)=> {
            if ((index + acquired_stuff_closet[closet_section - 1][1]) == item_clicked_html) {
                /**instead of just doing img.src I am doing img.src.split('/').pop() 
                 * .split splits all of the stuff into an array based of of what you are spliting it off
                 * in this case it is '/' the slash, then pop return the last element of an array, so I don't
                 * want the entire img.src link, I just want the last part after the slash which is NaN
                 */
                if (img.src.split('/').pop() == "NaN") {
                    item_is_accessible = false;
                }
            }
            if (acquired_stuff_closet[closet_section - 1][item_clicked_html] == 0) {
                    // if it equals 0 that means nothing is there so the item should not even be accessible
                    item_is_accessible = false;
                }
        });
    } else {
        if (bibletar_maker_page == 3) {
            // appranetly index for each starts at 1 unlike how arrays work where it starts at zero
            images_shop.forEach((img, index)=> {
                /** -3 because that's the length originally seen when jumping to shop section from closet
                 * section, because generally you get 3 basic free bibletar stuff, but then once you buy
                 * stuff you get more, so the difference will no longer remain 3, this should only be 
                 * happening in the shop and NOT in the closet
                 */
                if ((index + not_acquired_stuff_shop[shop_section - 1][1] -1) == (item_clicked_html + (acquired_stuff_closet[shop_section - 1].length - 3))) {
                    if (img.src.split('/').pop() == "NaN") {
                        item_is_accessible = false;
                    }
                }
                if (not_acquired_stuff_shop[shop_section - 1][(item_clicked_html + (acquired_stuff_closet[shop_section - 1].length - 3))] == 0) {
                    // if it equals 0 that means nothing is there so the item should not even be accessible
                    item_is_accessible = false;
                }
                console.log("index: " + (index + not_acquired_stuff_shop[shop_section - 1][1] -1));
                console.log("img.src is: " + img.src.split('/').pop());
                console.log("item clicked html: " + (item_clicked_html + (acquired_stuff_closet[shop_section - 1].length - 3)));
                if(index == (item_clicked_html + (acquired_stuff_closet[shop_section - 1].length - 3))) {
                    console.log("true");
                }
                console.log("item is accessible: " + item_is_accessible);
                console.log("");
            });
        }
    }

    if (item_is_accessible == true) {
        /** -3 because that's the length originally seen when jumping to shop section from closet
         * section, because generally you get 3 basic free bibletar stuff, but then once you buy
         * stuff you get more, so the difference will no longer remain 3, this should only be happening in the
         * shop and not in the closet
         */
        if (bibletar_maker_page == 3) {
            item_clicked = (item_clicked_html + (acquired_stuff_closet[shop_section - 1].length - 3));
        } else {
            if (bibletar_maker_page == 2) {
                item_clicked = item_clicked_html;
            }
        }
    
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
        img_mouths.src = "./images/mouths_men" + current_bibletar[9] + ".svg";
        img_hair.src = "./images/hair_men" + current_bibletar[10] + ".svg";
    } else {
        if (i_am_a_girl == true) {
            img_face.src = "./images/face_women" + current_bibletar[2] + ".svg";
            img_shirt.src = "./images/shirt_women" + current_bibletar[3] + ".svg";
            img_glasses.src = "./images/glasses_women" + current_bibletar[4] + ".svg";
            img_hats.src = "./images/hats_women" + current_bibletar[5] + ".svg";
            img_eyebrows.src = "./images/eyebrows_women" + current_bibletar[7] + ".svg";
            img_mouths.src = "./images/mouths_women" + current_bibletar[9] + ".svg";
            img_hair.src = "./images/hair_women" + current_bibletar[10] + ".svg";
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

    function detect_specific_drawing (number_for_drawing) {
        var bibletar_type_dsd = [bibletar_background, bibletar_face, bibletar_shirt, bibletar_glasses, bibletar_hats, bibletar_eyes, bibletar_eyebrows, bibletar_nose, bibletar_mouth, bibletar_hair];


        if (bibletar_maker_page == 2) {
            // closet section
            number_for_drawing = acquired_stuff_closet[closet_section - 1][bibletar_type_dsd[item_clicked]]
        } else {
            if (bibletar_maker_page == 3) {
                // shop section
                /** I'm doing minus three because generally speaking I give 3 basic clothes at the start,
                 * once we get to the shop section it's a difference of 3 generally speaking, assuming you don't
                 * have an account and you haven't bought anything from the shop (store), but we're countering
                 * that with length of the stuff you've acquired which at the start would be three but if you've
                 * bought stuff then it would be 4 - 3, or 5-3 dpending on how much stuff you've bought, this 
                 * counter is important to figure out what number between the type of drawing and ".svg" says,
                 * remember, we are accessing the numbers because they exist in the tables of tables for
                 * acquired_stuff_closet and not_acquired_stuff_shop
                 */
                number_for_drawing = not_acquired_stuff_shop[shop_section - 1][((bibletar_type_dsd[item_clicked] - 3) + acquired_stuff_closet[shop_section - 1].length)]
            }
        }
        console.log();
        return number_for_drawing;
    }

    function printMeOutSvgFileNumber () {
        /** I use this file just to double check the the detect_specific_drawing function is actually
         * working, if it's not working then I can use this function to print out what it thinks the
         * svg number is, and I can double check my checking if the svg file number is the has the same
         * image as the image shown on the screen on my character
         */
        var bibletar_type_dsd = [bibletar_background, bibletar_face, bibletar_shirt, bibletar_glasses, bibletar_hats, bibletar_eyes, bibletar_eyebrows, bibletar_nose, bibletar_mouth, bibletar_hair];
        var pmesfnbt = ["background", "face", "shirt", "glasses", "hats", "eyes", "eyebrows", "noses", "mouths", "hair"];

        if (bibletar_maker_page == 2) {
            console.log("Bibletar Type: " + pmesfnbt[closet_section -1] + " Svg File Number: " + acquired_stuff_closet[closet_section - 1][bibletar_type_dsd[item_clicked]]);
        } else {
            if (bibletar_maker_page == 3) {
                console.log("Bibletar Type: " + pmesfnbt[shop_section -1] + "Svg File Number: " + not_acquired_stuff_shop[shop_section - 1][((bibletar_type_dsd[item_clicked] - 3) + acquired_stuff_closet[shop_section - 1].length)]);
            }
        }

        /**How do we know that we can access a variable's number even if it is accessed from an array, we know it
         * works by testing it with this console.log like so below
        console.log("Bibletar_background variable: " + bibletar_type_dsd[0]);
        this means out function will work, well the bare minimums

         */
    }

    function resizeImageByPixels_and_draw (what_to_draw, x_pos_ribp, y_pos_ribp, pixel_size, type_of_drawing) {
        my_pixels_height = pixel_size;
        var increase_width_by = 0;
        /* specific drawing is based to get the number that goes between the type of drawing whether
        background, hats, shirt, and etc and between the ".svg" so for instance hats_men3.svg or
        background25.svg, I am getting the number based between the type of drawing and the ".svg" this
        helps me access the actual drawing, not just based off of visible placement in the closet 
        or in the shop, but the actual number of the svg which never changes  */
        var specific_drawing = 0;
        specific_drawing = detect_specific_drawing(specific_drawing);

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
            increase_width_by = 1.7;
        }
        // glasses
        if (type_of_drawing == 4) {
            increase_width_by = 3.7;
        }
        // hats
        if (type_of_drawing == 5) {
            if (i_am_a_boy == true) {
                increase_width_by = 2.5;
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
            increase_width_by = 0.5;
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
    resizeImageByPixels_and_draw(img_background, 980, 100, 300, 1);
    resizeImageByPixels_and_draw(img_face, 1067.5, 145, 175, 2);
    resizeImageByPixels_and_draw(img_shirt, 1077, 300, 100, 3);
    resizeImageByPixels_and_draw(img_eyes, 1115, 200, 20, 6);
    resizeImageByPixels_and_draw(img_eyebrows, 1114, 187, 12, 7);
    resizeImageByPixels_and_draw(img_mouths, 1139, 260, 17, 9);
    resizeImageByPixels_and_draw(img_noses, 1153, 220, 30, 8);
    resizeImageByPixels_and_draw(img_glasses, 1150, 230, 50, 4);
    resizeImageByPixels_and_draw(img_hair, 1097, 135, 44, 10);
    resizeImageByPixels_and_draw(img_hats, 1150, 140, 50, 5);

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
    ctx.fillRect(980, 55 + 610, 130, 30);
    ctx.font = "25px Arial";
    ctx.fillStyle = 'rgb(252, 250, 250)';
    /**I had to move leave and save and exit down because once you get a really big hat, it is going to cover
     * these button, meaning the user will not be able to leave or save their bibletar
     */
    ctx.fillText("Leave", 1010, 687);

    // Save and Exit
    ctx.fillStyle = 'rgb(6, 154, 8)';
    ctx.fillRect(1130, 55 + 610, 200, 30);
    ctx.font = "25px Arial";
    ctx.fillStyle = 'rgb(252, 250, 250)';
    ctx.fillText("Save and Exit", 1150, 687);




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
     updateAllImageReferences();
}

function girl_bibletar() {
    bibletar_maker_page = 2;
    i_am_a_girl = true;
     updateAllImageReferences();
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