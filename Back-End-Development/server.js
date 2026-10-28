/** Remember, if you are editing this code, it's your job to install Node.js on your computer
 * 
 * Now that I've got Node.js up and running I can hook my Node.js application up to a database such as MongoDB or MySQL
 * if I really wanted to, that way I can start storing data and remember information, this will help with storing
 * things like player's accounts such as passwords, usernames, emails, friends, friend's requests, the hall of fame,
 * and all other types of information that needs to be up and ready 24/7. Although it is technically possible to
 * hook up the hall_of_fame with just Node.js without MongoDB. MongoDB is free, though they have higher
 * tier plans and well, to get the good stuff you need money. Same with Render, I've actually good my backend server
 * up and running on Render, but I'm using the free plan right now. And it doesn't store information indefinitely, it
 * only stores it while the server is currently in use, and it spins down with inactivity, I can send requests 
 * to it via JavaScript and the server will send a response back it mostly helpful with  live connection such as around 
 * the world competitions, but it won't store any information forever, upon spin down, all data
 * will be wiped off the server, which happens when the server becomes inactive, meaning nobody is using it.
 */

// 1. Import the built-in HTTP module
const http = require('http');
// const { type } = require('os');

/** Because access to fetch has been blocked by CORS policy, I can change that, I already did npm install cors
 * which apparently is only used for things like express and connect which I am not using, since I'm using
 * http.CreateServer all I need is this
 * res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  which I have already put in my http.CreateServer

 * Now, I'm allowing my server to be accessible via fetch with origins that are different from it's domain,
 * Why is the CORS Policy important, google it? It's for safety reasons, but I don't actually have sensitive
 * information stored on this server, so it's actually hindering the fetch in the frontend
 * 
 * Watch this video for more information: https://youtu.be/rYVGbOMV8Ng?si=skCOO1irqo1IqNI-&t=466  also you might want to
 * restart from the BEGINNING of the VIDEO
 */

  // I technically don't need this since it's for express and connect which I am not using
// const cors = require('cors');

const PORT = 3000;

/** More Notes:
 * Because I've now installed nodemon for node.js, which automatically restarts my server everytime I save a change
 * instead of me manually doing that which is time consuming, instead of typing "npm start" in the terminal, now
 * in order to start it up I type "npx nodemon start". Now everything will restart automatically whenever I press ctrl+s
 * but I still have to press F5 or press the refresh button on localhost:3000 or whatever the port number is, cool right?
 */

const around_the_world = {
  // We will work with 10 rooms
    bibleio_server_rooms_count_for_each_level: 10,

    // How many people are online globally
    online: 0,


    names: [
      // names of players in all rooms for level 1
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],

      // names of players in all rooms for level 2
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],

      // names of players in all rooms for level 3
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
      [["Unknown Player"], ["Unknown Player"], ["Unknown Player"], ["Unknown Player"],],
    ],
    points: [
      // points of all players in all rooms for level 1
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],

      // points of all players in all rooms for level 2
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],

      // points of all players in all rooms for level 3
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    questions_wrong: [
      // amounts of questions wrong of all players in all rooms for level 1
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],

      // amounts of questions wrong of all players in all rooms for level 2
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],

      // amounts of questions wrong of all players in all rooms for level 3
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    countries: [
      // countries of all players in each room for level 1
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],

      // countries of all players in each room for level 2
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],

      // countries of all players in each room for level 3
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
      ["America", "America", "America", "America",],
    ],
    bibletars: [
      // bibletars of all players for each room in level 1
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

      // bibletars of all players for each room in level 2
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

      // bibletars of all players for each room in level 3
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    ],
    // tells me which rooms are closed or open, 1 represents true meaning it's closed, 0 represent false which means it's open
    closed_rooms: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    // tells me how many people are in each room
    amount_of_people_in_room: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    /* represents worldwide room for each level that is currently open, and has less than 4 players, 
    rooms close when their game starts */
    room_level1: 1,
    room_level2: 1,
    room_level3: 1,

    // room number of player who sent the request, not really useful here, maybe if I need to audit the server
    players_room: 1,

    // max wait time before game starts, once the room closes, that means the game will start, DEFAULT, might set it to 20 idk
    new_game_wait_time: 10,



    hall_of_fame: [
      /** 101, instead of 100, I need the extra 1 as a pivot */
      // country, name, points, bibletar
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      ["America", "Unknown Player", 0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    ],
};

const server = http.createServer((req, res) => {
  /** The Bible.io server is able to handle POST requests which act as PATCH requests and it is also
   * able to handle GET requests
   * 
   * IMPORTANT NOTES: Some legacy corporate firewalls, proxies, or older infrastructure block or 
   * strip out PATCH or PUT requests entirely. POST is universally allowed everywhere
   * 
   * so I guess it's just better to stick with POST instead of PUT or PATCH, only problem is that
   * POST takes up more energy than PATCH, and I want to conserve server energy, so I'm going to use
   * PATCH instead
   */

  /* tells the web server to include a CORS (Cross-Origin Resource Sharing) header that allows any
   website or domain (*) to read the response data from your server
   the asterisk means allow all origins or you can replace '*' with a specific origin like 'http://localhost:3000' but
   I don't want to, I want to allow it for all origins
   
   server.use(cors()); only work for things like express or connect but not for http.createServer*/
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization', 'true');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if(req.method == "PATCH") {
      let body = "";

        req.on("data", chunk=> {
          // console.log("Chunk: " + typeof(JSON.parse(chunk)[0]))
          // console.log("Chunk: " + (JSON.parse(chunk)[1]))
          // const decoded_name = JSON.parse(chunk)[0];
          // var decoded_value = JSON.parse(chunk)[1];
          if (JSON.parse(chunk)[0] == "hall_of_fame") {
            // Hall of fame data
            var players_country = JSON.parse(chunk)[1];
            var players_name = JSON.parse(chunk)[2];
            var players_points = JSON.parse(chunk)[3];
            var players_bibletar = JSON.parse(chunk)[4];

            /** Loop through the all the hall of fame data, and check if there name already exists
             * if it does, if their points is lower discard it, if it's higher than replace it, the
             * name, country, points, and bibletar, if the name doesn't exist, put it at the very end
             */
            var already_exists_index = 0;
            var already_exists = false;
            for (let i = 0; i < around_the_world.hall_of_fame.length; i++) {
              if (around_the_world.hall_of_fame[i][1] == players_name) {
                already_exists = true;
                already_exists_index = i;
              }
            }
            if (already_exists == true) {
              if(around_the_world.hall_of_fame[already_exists_index][2] < players_points) {
                // if their points are less than their current points, then replace all data
                for (let i = 0; i < 4; i++) {
                  if (i < 3) {
                    around_the_world.hall_of_fame[already_exists_index][i] = JSON.parse(chunk)[i + 1];
                  } else {
                    // bibletar
                    const standard_bibletar_length = 11;
                    for (let j = 0; j < standard_bibletar_length; j++) {
                      around_the_world.hall_of_fame[already_exists_index][i][j] = players_bibletar[j];
                    }
                  }
                }
              }
            } else {
              // set their data to the last thing in the hall of fame database
              for (let i = 0; i < 4; i++) {
                if (i < 3) {
                    around_the_world.hall_of_fame[around_the_world.hall_of_fame.length - 1][i] = JSON.parse(chunk)[i + 1];
                  } else {
                    // bibletar
                    const standard_bibletar_length = 11;
                    for (let j = 0; j < standard_bibletar_length; j++) {
                      around_the_world.hall_of_fame[around_the_world.hall_of_fame.length - 1][i][j] = players_bibletar[j];
                    }
                  }
                }
            }

            /* use selection sort to organize the hall of fame, after adding the user's name, score, points, and bibletar
              remember, sort is based off of points
            */
           const standard_bibletar_length = 11;


           var temp_country = "";
           var temp_name = "";
           var temp_points = 0;
           var temp_bibletar = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            for (let i = 0; i < around_the_world.hall_of_fame.length; i++) {
              for (let j = i+1; j  < around_the_world.hall_of_fame.length; j++) {
                // if score less than score below them then swap
                if (around_the_world.hall_of_fame[i][2] < around_the_world.hall_of_fame[j][2]) {
                  // set temp
                  temp_country = around_the_world.hall_of_fame[i][0];
                  temp_name = around_the_world.hall_of_fame[i][1];
                  temp_points = around_the_world.hall_of_fame[i][2];
                  for (let k = 0; k < standard_bibletar_length; k++) {
                    temp_bibletar[k] = around_the_world.hall_of_fame[i][3][k];
                  }


                  // swap them
                  around_the_world.hall_of_fame[i][0] = around_the_world.hall_of_fame[j][0];
                  around_the_world.hall_of_fame[i][1] = around_the_world.hall_of_fame[j][1];
                  around_the_world.hall_of_fame[i][2] = around_the_world.hall_of_fame[j][2];
                  for (let k = 0; k < standard_bibletar_length; k++) {
                    around_the_world.hall_of_fame[i][3][k] = around_the_world.hall_of_fame[j][3][k];
                    
                  }

                  around_the_world.hall_of_fame[j][0] = temp_country;
                  around_the_world.hall_of_fame[j][1] = temp_name;
                  around_the_world.hall_of_fame[j][2] = temp_points;
                  for (let k = 0; k < standard_bibletar_length; k++) {
                    around_the_world.hall_of_fame[j][3][k] = temp_bibletar[k];
                  }
                  
                }
              }
            }


          } else {

            function set_world_wide_room_to_correct_room () {
              /** IMPORTANT NOTE: This function is called twice, once before data is edited and once after
               * it has been edited
              */
             const levels_in_bibleio = 3;
             const amount_of_rooms = around_the_world.bibleio_server_rooms_count_for_each_level;
             
             // updates closed_rooms, helps server know which rooms are full and which ones are not
             for (let i = 0; i < (around_the_world.bibleio_server_rooms_count_for_each_level * levels_in_bibleio); i++) {
               if (around_the_world.amount_of_people_in_room[i] >= 4) {
                 // set room to closed
                 around_the_world.closed_rooms[i] = 1;
               } else {
                 // set room to open
                 around_the_world.closed_rooms[i] = 0;
               }
             }

              /* automatically sets the worldwide room for each level to the first room that is open, should always be updated
                anytime time a request to the server is made
              */

                // level 1 iteration
                for (let i = 0; i < (around_the_world.bibleio_server_rooms_count_for_each_level * 1); i++) {
                  if (around_the_world.closed_rooms[i] == 0) {
                    // if the room is open, set the worldwide room that is currently open to i, then break;
                    //  this helps users who are joining to join to an open room
                    around_the_world.room_level1 = (i + 1);
                    break;
                  }
                }

                // level 2 iteration
                for (let i = amount_of_rooms; i < (around_the_world.bibleio_server_rooms_count_for_each_level * 2); i++) {
                  if (around_the_world.closed_rooms[i] == 0) {
                    // if the room is open, set the worldwide room that is currently open to i, then break;
                    //  this helps users who are joining to join to an open room
                    around_the_world.room_level2 = (i + 1);
                    break;
                  }
                }

                // level 3 iteration
                for (let i = (amount_of_rooms * 2); i < (around_the_world.bibleio_server_rooms_count_for_each_level  * 3); i++) {
                  if (around_the_world.closed_rooms[i] == 0) {
                    // if the room is open, set the worldwide room that is currently open to i, then break;
                    //  this helps users who are joining to join to an open room
                    around_the_world.room_level3 = (i + 1);
                    break;
                  }
                }

            }
            set_world_wide_room_to_correct_room();

            /** Helps the server to know where to apply the player's request in the right spot on the server's 
             * object data reserve */
            var players_room = 1;
            var players_spot = 1;
            
            /* this stuff helps the server to know where to put their data, which room, and in which spot
             side note, anytime stuff like this is issue, length of the chunk request will always be greater
             than 0 because the server will also need to update sometimes names, or bibletars if they are
             in the connecting stage, and if they're not, the only things that will actually be updated is
             their points in the game, which will happen every 4 seconds or 5 seconds in order to conserve 
             server energy */
            if (JSON.parse(chunk).length > 2) {
              // room number must be included first as their request
              players_room = JSON.parse(chunk)[1];
              players_room -= 1;
            }
            if (JSON.parse(chunk).length > 4) {
              // spot must be included as second thing in their request
              players_spot = JSON.parse(chunk)[3];
              players_spot -= 1;
            }

            // Bible.io LIVE Data
            for (let i = 0; i < Math.ceil((JSON.parse(chunk).length)/2); i++) {

              const decoded_name = JSON.parse(chunk)[i * 2];
              var decoded_value = JSON.parse(chunk)[(i * 2)+ 1];

              if (decoded_name == "online") {
                around_the_world.online += decoded_value;
              }
              if (decoded_name == "names") {
                around_the_world.names[players_room][players_spot] = decoded_value;
              }
              if (decoded_name == "points") {
                around_the_world.points[players_room][players_spot] = decoded_value;
              }
              if (decoded_name == "questions_wrong") {
                around_the_world.questions_wrong[players_room][players_spot] = decoded_value;
              }
              if (decoded_name == "countries") {
                around_the_world.countries[players_room][players_spot] = decoded_value;
              }
              if (decoded_name == "bibletars") {
                for (let j = 0; j < 11; j++) {
                  around_the_world.bibletars[players_room][players_spot][j] = decoded_value[j];
                }
              }
              if (decoded_name == "closed_rooms") {
                /* this has become OBSOLETE due to the set_world_wide_room_to_correct_room function which
                which applies changes to this variable AUTOMATICALLY, the only time it needs to be called
                from the user is when they the game starts and perhaps sometimes there's less than 4 players
                so it isn't completely obsolete  */
                around_the_world.closed_rooms[players_room] = decoded_value;
              }
              if (decoded_name == "amount_of_people_in_room") {
                around_the_world.amount_of_people_in_room[players_room] = decoded_value;
              }
              if (decoded_name == "room") {
                // this has become OBSOLETE, see set_world_wide_room_to_correct_room function, is handled AUTOMATICALLY
              }
              if (decoded_name == "players_room") {
                /* I don't actually really need to do this, might only be useful if I'm auditing the server | OBSOLETE
                 because it refers the room of the player who made the request */
                around_the_world.players_room = decoded_value;
              }
              if (decoded_name == "new_game_wait_time") {
                /* this will probably never even be issued as the max game wait time will probably never change and
                will probably stay at the default value, because people's counting time will be different
                depending on when they join the room, and the most important factor will be if the room closed
                then that means the game has started, the max game wait time will only come in most handy when
                you've been waiting for too long or there's no one online and you're about to verse robots */
                around_the_world.new_game_wait_time = decoded_value;
              }


              // clean up room after game finishes
              /**  issue a clean  after the game finishes
               * and when the game finishes the amount of people in the room will be set to 0 only if, the
               * name of the first person in the room is currenetly the same as the first, second, third, or fourth
               *  person in your game room,
               * not first place, but spot, so you will have to get the data first and check,
               * if it isn't, that means that the room has already been cleaned and someone else has joined, so don't
               *  this way you don't make a request and set it to 0 again when there's already at least someone else or more
               * than 1 other person there who have joined for a new game in that room
              */
              if (decoded_name == "clean_room") {
                for (let i = 0; i < 4; i++) {
                  around_the_world.names[players_room][i] = "Unknown Player";
                  around_the_world.points[players_room][i] = 0;
                  around_the_world.questions_wrong[players_room][i] = 0;
                  around_the_world.countries[players_room][i] = "America";
                  for (let j = 0; j < 11; j++) {
                    around_the_world.bibletars[players_room][i][j] = 1;
                  }
                  around_the_world.amount_of_people_in_room[players_room] = 0;
                }
                // the room has been successfully cleaned
              }

            }

            // called again after data has been edited
            set_world_wide_room_to_correct_room();

          }

        });

      req.on("end", ()=>{
          // console.log("received data: ", around_the_world);

          /** RESPONSE: Send them back all the data, this is after changes have been applied */

          res.writeHead(200, {'content-type':"application/json"});
          // res.end(JSON.stringify({message: "Data Received", data:around_the_world}));
          res.end(JSON.stringify(around_the_world));
      })

    } else if (req.method == "GET") {

      /** RESPONSE: Sends them all the data they asked for that stored on the server */

      // 3. Send a 200 OK status code and set the content type to JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });
      // res.end(JSON.stringify({message: "Data Received", data:around_the_world})); // Convert JS object to JSON string
      res.end(JSON.stringify(around_the_world)); // Convert JS object to JSON string
    } else {
        // should be 404 not 
        if (req.method == 'OPTIONS'){
          // If I don't do this for some reason it will send a 404 error, and I don't know why
          res.writeHead(200, {'content-type':'text/plain'});
          res.end(JSON.stringify(around_the_world));

        } else {
          res.writeHead(404, {'content-type':'text/plain'});
          res.end(JSON.stringify(around_the_world));
        }
    }


    // 4. Convert the object to a string and send it to the client
    // res.end(JSON.stringify(around_the_world));
    // res.end('The Bible.io server is running... Automatic \n');
});

// server.use(cors()); // Enable CORS globally for all routes and origins

server.listen(PORT, () => {
    console.log(`The Bible.io server is running on ${server_source} and listening on port ${PORT}`);
});



/** FETCH
 * 
 * Methods: POST, PUT, PATCH, DELETE
 * 
 * 
POST	Create a brand-new resource (Example: Submitting a new signup form.)

PUT	Replace an entire existing resource. (Example: Overwriting a user's whole profile payload)

PATCH	Partially update specific fields of an existing resource. (Example: Updating just a single value, like incrementing a "likes" count.)

DELETE	Remove a resource. (Example: Deleting a specific post or comment.)

 * 
 * So I can use the fetch api to send requests to my server, although NONE of it should be called in the backend
 * I'm only testing it here in the backend via localhost, but once I've done all the testing and it works sufficiently,
 * then I can start implementing the fetch api in the front end which will send requests to my server which is being
 * deployed with Render. 
 * 
 * EVERYTHING BELOW IS THE FETCH API
 */

var server_source = 'http://localhost:3000';


async function makeA_Get_Request() {
  /** This function is used to retrieve data on the Bible.io server, that way I can display it on Bible.io (website) */
  const url = server_source;
  try {
    const response = await fetch(url, {
      method: 'GET', // Specify the HTTP method
      headers: {
          'Content-Type': 'application/json' // Inform the server about the data format
      },
    });
    
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log('Data received:', data.bibletar);
    console.log("Date Received: " , data);
  } catch (error) {
    console.error('Error making GET request:', error);
  }


}

// makeA_Get_Request();



async function makePost_or_Patch_Request() {
  /** This function is used to make request to the Bible.io server to change/edit data on the Bible.io server */
  
  /** MORE IMPORTANT NOTES:
   * Don't ever place this in requestanimationframe loop, this will overwhelm the server, you can call this,
   * max every 3 seconds
  */
 const url = server_source;
  
  
  /* element 1 tells the server which part of the object to change, element 2 tells the server what to change it to,
  you can have as many elements as you want that are necessary, but remember if you are not changing the amount
  of people online the player's room must come first, then player's spot, 
  and then all other additional information, */
  const req_data = ["online", 1];
  
  try {
    const response = await fetch(url, {
      method: 'PATCH', // Specify the HTTP method
      headers: {
        'Content-Type': 'application/json' // Inform the server about the data format
      },
      body: JSON.stringify(req_data) // Convert the JavaScript object into a JSON string
    });
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    
    const data = await response.json(); // Parse the JSON response from the server
    console.log(data);
  } catch (error) {
    console.error('Error making PATCH request:', error.message);
  }
}

// makePost_or_Patch_Request();
