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

// This code is for the sign up page

var i_am_a_developer = false;
const developer_tools = JSON.parse(localStorage.getItem('i_am_a_developer'));
if (developer_tools) {
    i_am_a_developer = developer_tools;
}

const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const username_input = document.getElementById('username-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

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

form.addEventListener('submit', (e) => {

    let errors = [];

    if(repeat_password_input) {
        // if we have a repeat password input then we are in the sign up page
        errors = getSignupFormErrors(email_input.value, username_input.value, password_input.value, repeat_password_input.value)
    } else {
        // if we don't have a repeat password input then were are in the login page
        errors = getLoginFormErrors(username_input.value, password_input.value)
    }
    
    if (errors.length > 0) {
        // If there are any errors, prevent the form from being submitted
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
    
})

var accounts_creation_underway_message = "Account registration is temporarily disabled while Bible.io is under active development. In the meantime, you are welcome to explore and play Bible.io using a Guest Account";

function getSignupFormErrors(email, username, password, repeatPassword) {
    let errors = []

    errors.push(accounts_creation_underway_message);

    if(email === '' || email == null) {
        errors.push('Email name is required!')
        email_input.parentElement.classList.add('incorrect');
    }
    if(username === '' || username == null) {
        errors.push('Username is required!')
        username_input.parentElement.classList.add('incorrect');
    }
    if(password === '' || password == null) {
        errors.push('A password is required!')
        password_input.parentElement.classList.add('incorrect');
    }
    if(repeatPassword === '' || repeatPassword == null) {
        errors.push('You need to confirm your password!')
        repeat_password_input.parentElement.classList.add('incorrect');
    }
    // check if password is the same as the repeated password
    if(password !== repeatPassword) {
        errors.push('Your password does not match your repeated password!')
        password_input.parentElement.classList.add('incorrect');
        repeat_password_input.parentElement.classList.add('incorrect');
    }
    // checks if your password is too short
    if (password.length < 8) {
        errors.push('Password must have at least 8 characters')
        password_input.parentElement.classList.add('incorrect');
    }


    return errors;
}

function getLoginFormErrors (username, password) {
    let errors = []

    errors.push(accounts_creation_underway_message);
    
    if(username === '' || username == null) {
        errors.push('Username is required!')
        username_input.parentElement.classList.add('incorrect');
    }
    if(password === '' || password == null) {
        errors.push('A password is required!')
        password_input.parentElement.classList.add('incorrect');
    }


    return errors;
}

// console.log(email_input.parentElement.classList);

/* The code here doesn't even seem to be working properly, perhaps because of some browser
addon that prevents the form from being submitted by itself if blanks are not filled out, 
it's supposed to turn red if the fields are empty
once I push 'incorrect' into the id of an input, it's supposed to turn red  */

// form.parentElement.classList.add('incorrect');
// console.log(form.parentElement.classList);

/*the filter part filters out any inputs that are not there, so if it's in the login page it will filter out
email input as well as repeat password input, these guards against unnecesary inputs and unnecessary
elements in the array, and it's also faster since I don't have to hard code everything again*/ 
const allInputs = [username_input, email_input, password_input, repeat_password_input].filter(input => input!= null)

allInputs.forEach (input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})


/** Function to make logos slide  */
const logos = document.querySelector(".sliding-logos__track").cloneNode(true)
document.querySelector(".sliding-logos").appendChild(logos)

/** Footer of Bible.io Page */
const date = new Date();
const year = date.getFullYear();
var info_year_write = "";
info_year_write = year + " Bibleio | Bible.io Corporation - Making the Bible fun since the year 2025 ";
document.getElementById('bibleio-info-year').innerText = info_year_write;

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