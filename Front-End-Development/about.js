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
        window.location.href = "index.html"; 
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