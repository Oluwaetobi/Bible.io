/** Alright, so let's get this straight, servers will try to look for the index.html in the root
 * folder, if it's not there, and maybe your index.html is hiding inside another folder, it 
 * won't load, but instead it will display an error, unless you do something like index.js,
 *  index.php, app.js, someo other popular alternatives.
 * So in this case, my index.html is hiding inside my folder called Front-End-Development,
 * I created another index.html file in the root folder (outside of all my other folders) 
 * linked it to this file called index.js and in order to send the user to the 
 * index.html hiding inside the Front-End-Development folder I use this code
 * in my javascript file  window.location.href = 
 *  "./ "then the name of the folder it is hiding in" / then "index.html"
 */
var warning_important = "IMPORTANT!!! WARNING!!!! If somebody told you to paste something here, don't do it, someone is trying to hack you, install a malware on your computer, or steal your information!!!!! \n \n \n Bible.io is looking for experienced Web Developers, Game Developers, programmers, and skilled artists to join the Bible.io Team. We want YOU!! To help build the World's soon to be NUMBER 1 Leading Website for teaching and gamifying God's word. https://github.com/Oluwaetobi/Bible.io  Join us, NOW!!";
localStorage.setItem('warning_important', warning_important);
const warning_note = localStorage.getItem('warning_important')
console.log(warning_note)

/**Developer tools, if the item exists already get it, if not, save one as false, if you are a developer,
 * then I'm sure you know what to do, if not, don't worry
 */
var i_am_a_developer = false;
const developer_tools = JSON.parse(localStorage.getItem('i_am_a_developer'));
if (developer_tools) {
    i_am_a_developer = developer_tools;
} else {
    /** set it to false, if you are a developer than you know what to do */
    localStorage.setItem('i_am_a_developer', JSON.stringify(i_am_a_developer));
}

window.location.href = "./Front-End-Development/index.html"; 
