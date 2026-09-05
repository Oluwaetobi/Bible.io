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
window.location.href = "./Front-End-Development/index.html"; 
