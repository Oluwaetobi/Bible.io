corrupted_link_send_user_back_through_index_html_page();
function corrupted_link_send_user_back_through_index_html_page() {
    // This is supposed to be the FIRST function that runs in the entire JavaScript file program, because it is 
    // very important and crucial, read notes for more information

    // warning notes (DON'T get hacked through Self-XXS) and recruit developer note (Bible.io Team recruitment)
    const warning_note = sessionStorage.getItem('warning_important')
    console.log(warning_note);
    /** NOTE: This function should be implemented in every JavaScript file EXCEPT for the outer index.js,
     * note there are 2 index.js files, one inside the Front-End-Development folder and one outside of it,
     * which is known as the "outer index.js"
     */

    /** Alright, so essentially, there's some important data that needs to be uploaded onto the user's
     * computer for some essentials parts of the website, I can detect whether that stuff has been uploaded
     * like so, using my simple protocol, if one has been uploaded, then all has been uploaded and vice versa
     * 
     * if the data has not been uploaded, then it will send the user back through the outer index.html file,
     * remember, this is different from the index.html file that exists inside the folder called Front-End-Development.
     * The user will be sent back to go collect that data before they can proceed again normally with the website.
     * 
     * One of the way that this link is technically "corrupted" is if it sends the user to a page other than the outer
     * index.html file first, such as the hall of fame or account page, anything that is NOT the outer index.html file
     */
    if (warning_note) {
        // warning_important has been uploaded, that means the rest of the data has been uploaded too
    } else {
        // warning_important has NOT been uploaded, that means NONE of the data has been uploaded
        window.location.href = "/index.html"; 
        /**IMPORTANT NOTE, there's a different between /index.html and index.html, /index.html is the root folder
         * which is the root directory of the current domain, this is called the "absolute path"
         * while index.html instructs the browser to start looking for the index.html file relative to the 
         * current folder path your are in. And remember I don't want that, I want it to go to the index.html file
         * outside of all the folders, the absolute path, to the root directory of the current domain.
         * 
         * Extra note: if you are running this program directly from your Hard Drive, NOT Local Host!! But your hard
         * drive such as (file://) or C:/ or you run this program without debugging from VSCode, if this function
         * tries to redirect you to the root index.html file, it will crash, because the web address will end
         * up being just /index.html and since there is no domain on the hard drive, it will end up crashing
         */
    }
}


/**First of all if you think I write comments for fun, you are making a huge mistake, these comments are not
 * just for me but I write comments so that if anyone looks at the code in this game, they can understand
 * things that won't come to mind initially, PLEASE READ THE COMMENTS, they explain some of the methods
 * I'm using, and why I am doing what I am doing, no matter how good you are at coding, you willl always
 * forget why you did something a particular way, every good coder, writes good comments, a wise man once said
 * the faintest pen is better than the sharpest memory, and why is that, because even if you write something
 * faintly as long as you know how to read, it is engraved forever and can always be read, but no matter
 * how good your memory is, you always forget it at some point so START WRITING COMMENTS WHEN YOU CODE!!
 */

var i_am_a_developer = false;
const developer_tools = JSON.parse(localStorage.getItem('i_am_a_developer'));
if (developer_tools) {
    i_am_a_developer = developer_tools;
}

const date = new Date();
const year = date.getFullYear();
var info_year_write = "";
info_year_write = year + " Bibleio | Bible.io Corporation - Making the Bible fun since the year 2025 ";
document.getElementById('bibleio-info-year').innerText = info_year_write;

// write short story into bibletar short story box
const bibletar_wordiness_a_word_or_not_stories = JSON.parse(sessionStorage.getItem('stories_bibletar_wordiness_a_word_or_not'));
const bibletar_story_text = document.getElementById('bibletar-short-story');


const portraitQuery = window.matchMedia("(orientation: portrait");
portraitQuery.addEventListener("change", (event) => {
    if (event.matches) {
        console.log("You switched your mobile/device into Portrait Mode");
    } else {
        console.log("You switched your mobile/device into to Landscape Mode")
    }
    // the user changed his or her device into portrait or landscape mode
    reset_zoom_data_because_user_switched_mobile_or_device_into_portrait_or_landscape_mode();
});

function write_in_bibletar_short_story() {
    bibletar_story_text.innerText = bibletar_wordiness_a_word_or_not_stories;
    missing_text_alert();
    
}

function missing_text_alert() {
    /** NOTE:
     * don't try to save this message in session storage or else the purpose of it will be defeated because
     * storing it there can cost it to be lost in case of giving someone a corrupted link that doesn't
     * properly save all text upon the loading of the website */

    
    // default
    if (bibletar_story_text.innerText.trim() === "" || bibletar_story_text.innerText.length < 5) {
        // there's no text in it
        bibletar_story_text.innerText = `
        If you are seeing this message, it means we are missing a book from the Bible or some other piece of writing or literature, and it was incorrectly inputted onto the storage of our site.
        This could be due to a corrupted website link, human error, or some other form of evitable or inevitable incidence
        
        Please report this to Bible.io, including the name of the book, novel, story, or piece of literature that is missing, thank you!
        
        
        - A Message from the Bible.io Team | Bible.io Corporation `
        
        bibletar_story_text.style.color = 'rgb(181, 0, 0)';
        bibletar_story_text.style.fontWeight = "bold";
    }
}

write_in_bibletar_short_story();

// AUTOMATIC SCALE AND WEB ZOOMS FUNCTIONS AND DATA
const standard_bibleio_screen_width_size = JSON.parse(sessionStorage.getItem('standard_bibleio_screen_width_size'));
var scaled_screen_size = false;
var width_of_screen_size;
let scale = 1;
const convert_height_based_off_width = JSON.parse(sessionStorage.getItem('convert_height_based_off_width'));
/* checks at the start, otherwise will jitter when user tries to zoom in or out, and makes 
zooming in or out impossible */
var zoom_in;
if (window.innerWidth <= standard_bibleio_screen_width_size) {
    zoom_in = false;
} else {
    zoom_in = true;
}

function reset_zoom_data_because_user_switched_mobile_or_device_into_portrait_or_landscape_mode () {
    /* Alright, so why do I have to do this, the reason being is because I noticed that when you
    switch your mobile into portrait or landscape mode, you actually need to rescale the 
    zoom because both window.scren.width and window.innerWidth will change making
    the previous zoom inaccurate */
    // reset scaled_screen_size to false
    scaled_screen_size = false;
    // reset scale to default number which is one
    scale = 1;
    /* checks at the start, otherwise will jitter when user tries to zoom in or out, and makes 
zooming in or out impossible */
    if (window.innerWidth <= standard_bibleio_screen_width_size) {
        zoom_in = false;
    } else {
        zoom_in = true;
    }
    /* reset necessary data, ok now you can re call the scale_web_size_based_on_users_pc_or_mobile_width
    function */
    scale_web_size_based_on_users_pc_or_mobile_width();
}

function scale_web_size_based_on_users_pc_or_mobile_width () {
    // this function was originally made in play.js
    /** The goal of this function is to automatically scale the screen size of the user's device
     * to the default average size that it should be for the Bible.io on PC, in landscape mode, however
     * users are still free to zoom in and out via their devices if they want to and if deemed necessary
    */

    /* IMPORTANT!!!!
    only set it to window.innerWidth, if you need to run tests, otherwise it should equal window.screen.width
    */
    width_of_screen_size = window.screen.width;
   
    // console.log((window.innerWidth - 2)/(window.innerHeight - 90));  
   
    /* do 2 - scale so that scale acts as 1 at the start and increases the left side of the operator comparison, 
    since I'm no longer do += I'm doing -= */
    if (zoom_in == false) {
        // zoom out
        if (scaled_screen_size == false) {
            /* does it only once upon screen loading, 
            that way zoom in and out on their computer doesn't get broken, but it doesn't matter 
            anymore even if I removed it, unless I changed width_of_screen_size to equal window.innerWidth
            then it would be broken, but I am going to keep it here just in case for some reason
            I need to run more tests because of complaints for users
            */
            // do it while the screen size is smaller than the standard bible.io screen length
            while ((width_of_screen_size*(2 - scale)) < standard_bibleio_screen_width_size) {
                // when I decrease the scale, the screen for the body zooms out
                scale -= 0.1;
                // console.log(width_of_screen_size);
            }
        }
        // canvas.width = (width_of_screen_size*(2 - scale));
        // canvas.height = (canvas.width / convert_height_based_off_width);
        // console.log(scale)
    }
    
    if (zoom_in == true) {
        // zoom in
        if (scaled_screen_size == false) {
            /* does it only once upon screen loading, 
            that way zoom in and out on their computer doesn't get broken but it doesn't matter 
            anymore even if I removed it, unless I changed width_of_screen_size to equal window.innerWidth
            then it would be broken, but I am going to keep it here just in case for some reason
            I need to run more tests because of complaints for users
            */
            
            // do it while the screen size is bigger than the standard bible.io screen length
            
            while (width_of_screen_size*(2 - scale) > standard_bibleio_screen_width_size) {
                // when I increase scale, the screen for body zooms in
                scale += 0.1;
            }
        }
        // canvas.width = (width_of_screen_size*scale);
        // canvas.height = (canvas.width / convert_height_based_off_width);
        
    }

    // set to true at the end so that the zoom in only happens at the very start of the screen loading
    scaled_screen_size = true;

    document.body.style.zoom = scale;

    // console.log(window.screen.width/window.screen.height);
    // console.log(canvas.height);

    // console.log(window.screen.width);

    /* 
    I want to further explain this function, there are lots of things that I am doing here that can be
    very confusing especially when zooming in and out, you have to be mindful of the fact this function 
    is logical, and works highly accurately, but the way the logic is presented can be confusing. First of
    all, remember that the zooming in and out and scaling the screen size based off of there user's
    screen width is done at the very start, if not then the screen would jitter when they tried zooming
    in or out, when a user zooms out, it is believed that the user has a big computer, so Bible.io will
    scale the screen accordingly and will make the screen size larger, when a user zooms in, it is believed
    that the user has a small screen so it will zoom out accordingly, this is why when a user zooms in or
    out and refreshes it looks like all their efforts to zoom in or out are ignored. READ THE NEXT LINE
    IT IS VERY IMPORTANT
    however that has changed because in javascript there are 2 things called
    window.screen.width and window.innerWidth
    window.screen.width measures the total width of the user's physical monitor, whereas
     window.innerWidth measures the width of the browser's viewable content area (the viewport)

     in simple words this means, window.screen.width is not affected when a user zooms in or out
     while window.innerWidth is affected by it that's the trick, since I have tested everything
     and I know that it works, I can change window.innerWidth to window.screen.width
    */
}

scale_web_size_based_on_users_pc_or_mobile_width();