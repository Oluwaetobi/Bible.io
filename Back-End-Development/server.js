/** Remember, if you are editing this code, it's your job to install Node.js on your computer
 * 
 * Now that I've got Node.js up and running I can hook my Node.js application up to a database such as MongoDB
 * if I really wanted to, that way I can start storing data and remember information, this will help with storing
 * think like player's accounts such as passwords, usernames, emails, friends, friend's requests, the hall of fame,
 * and all other types of information that needs to be up and ready 24/7. MongoDB is free, though they have higher
 * tier plans and well, to get the good stuff you need money. Same with render, I've actually good my backend server
 * up and running on Render, but I'm using the free plan right now. And it doesn't store information, it only helps with
 * deploying my backend code on a server, where I can send requests and I can receive responses which only helps with
 * live connection such as around the world competitions, but it won't store any information. Upon spin down, all data
 * will be wiped off the server.
 */

// 1. Import the built-in HTTP module
const http = require('http');

const PORT = 3000;

/** More Notes:
 * Because I've now installed nodemon for node.js, which automatically restarts my server everytime I save a change
 * instead of me manually doing that which is time consuming, instead of typing "npm start" in the terminal, now
 * in order to start it up I type "npx nodemon start". Now everything will restart automatically whenever I press ctrl+s
 * but I still have to press F5 or press the refresh button on localhost:3000 or whatever the port number is, cool right?
 */

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World! Your server is working. Automatic');
});

server.listen(PORT, () => {
    console.log(`Server is running and listening on port localhost:${PORT}`);
});