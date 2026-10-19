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