/** Remember, if you are editing this code, it's your job to install Node.js on your computer
 * 
 * Now that I've got Node.js up and running I can hook my Node.js application up to a database such as MongoDB or MySQL
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
const { type } = require('os');

const PORT = 3000;

/** More Notes:
 * Because I've now installed nodemon for node.js, which automatically restarts my server everytime I save a change
 * instead of me manually doing that which is time consuming, instead of typing "npm start" in the terminal, now
 * in order to start it up I type "npx nodemon start". Now everything will restart automatically whenever I press ctrl+s
 * but I still have to press F5 or press the refresh button on localhost:3000 or whatever the port number is, cool right?
 */

const around_the_world = {
  // We will work with 10 rooms
    bibleio_server_rooms_count: 10,

    // How many people are online globally
    online: 0,


    names: [
      // names of players in all rooms
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
      // points of all players in all rooms
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
      // countries of all players in each room
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
      // bibletars of all players for each room
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
    closed_rooms: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // tells me how many people are in each room
    amount_of_people_in_room: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // represents worldwide room that's currently open, and has less than 4 players, rooms close when their game starts
    room: 1,

    // room number of player who sent the request, not really useful here, maybe if I need to audit the server
    players_room: 1,

    // max wait time before game starts, once the room closes, that means the game will start
    new_game_wait_time: 10,



    hall_of_fame: [
      /**For now I will only do the top 10 */
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

            // use selection sort to organize the hall of fame, after adding the user's name, score, points, and bibletar

          } else {

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
            }
            if (JSON.parse(chunk).length > 4) {
              // spot must be included as second thing in their request
              players_spot = JSON.parse(chunk)[3];
            }

            // Bible.io LIVE Data
            for (let i = 0; i < Math.ceil((chunk.length)/2); i++) {

              const decoded_name = JSON.parse(chunk)[i * 2];
              var decoded_value = JSON.parse(chunk)[(i * 2)+ 1];

              if (decoded_name == "online") {
                around_the_world.online = decoded_value;
              }
              if (decoded_name == "names") {
                around_the_world.names = decoded_value;
              }
              if (decoded_name == "points") {
                around_the_world.points = decoded_value;
              }
              if (decoded_name == "countries") {
                around_the_world.countries = decoded_value;
              }
              if (decoded_name == "bibletars") {
                around_the_world.bibletars = decoded_value;
              }
              if (decoded_name == "closed_rooms") {
                around_the_world.closed_rooms = decoded_value;
              }
              if (decoded_name == "amount_of_people_in_room") {
                around_the_world.amount_of_people_in_room = decoded_value;
              }
              if (decoded_name == "room") {
                // around_the_world.room = decoded_value;
                for (let i = 0; i < around_the_world.bibleio_server_rooms_count; i++) {
                  if (around_the_world.closed_rooms[i] == 0) {
                    // if the room is open, set the worldwide room that is currently open to i, then break;
                    around_the_world.room = i;
                    break;
                  }
                }
              }
              if (decoded_name == "players_room") {
                // I don't actually really need to do this, might only be useful if I'm auditing the server
                around_the_world.players_room = decoded_value;
              }
              if (decoded_name == "new_game_wait_time") {
                around_the_world.new_game_wait_time = decoded_value;
              }


              // clean up room after game finishes
              /** Alright, so when a room is open and there's less than 4 people in the room, and the user is the
               * first person to join the room, then they will issue a clean, rooms open after the game finishes
               * and when the game finishes the amount of people in the room will be set to 0 only if, the
               * name of the first person in the room is currenetly the same as the first person in your 
               * not first place, but spot, so you will have to get the data first and check,
               * if it isn't, that means that the room has already been cleaned and someone else has joined, so don't
               *  this way you don't make a request and set it to 0 again when there's already at least someone else or more
               * than 1 other person there who have joined
              */
              if (decoded_name == "clean_room") {
                var world_wide_room = (around_the_world.room - 1);
                for (let i = 0; i < 4; i++) {
                  around_the_world.names[0][world_wide_room][i] = "Unknown Player";
                  around_the_world.points[0][world_wide_room][i] = 0;
                  around_the_world.countries[0][world_wide_room][i] = "America";
                  for (let j = 0; j < 11; j++) {
                    around_the_world.bibletars[0][world_wide_room][i][j] = 1;
                  }
                  around_the_world.amount_of_people_in_room[world_wide_room] = 0;
                }
                // the room has been successfully cleaned
              }
            }

          }

        });

      req.on("end", ()=>{
          // console.log("received data: ", around_the_world);

          /** RESPONSE: Send them back all the data, this is after changes have been applied */

          res.writeHead(200, {'content-type':"application/json"});
          res.end(JSON.stringify({message: "Data Received", data:around_the_world}));
      })

    } else if (req.method == "GET") {

      /** RESPONSE: Sends them all the data they asked for that stored on the server */

      // 3. Send a 200 OK status code and set the content type to JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });
      // res.end(JSON.stringify({message: "Data Received", data:around_the_world})); // Convert JS object to JSON string
      res.end(JSON.stringify(around_the_world)); // Convert JS object to JSON string
    } else {
        res.writeHead(404, {'content-type':'text/plain'});
        res.end(JSON.stringify(around_the_world));
    }


    // 4. Convert the object to a string and send it to the client
    // res.end(JSON.stringify(around_the_world));
    // res.end('The Bible.io server is running... Automatic \n');
});

server.listen(PORT, () => {
    console.log(`The Bible.io server is running and listening on port localhost:${PORT}`);
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
 * So I can use the fetch api to send requests to my server, although none of it should exist in the backend
 * I'm only testing it here in the backend via localhost, but once I've done all the testing and it works sufficiently,
 * then Ic can start implementing the fetch api in the front end which will send requests to my server which is being
 * deployed with Render. Then since my I have my server, I just need to write all the necessary code that will respond
 * properly, obviously this will be sort of tricky and take time to learn but it will be worth it in the end.
 */

var server_source = 'http://localhost:3000';


async function getData() {
  /** This function is used to retrieve data on the Bible.io server */
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
    console.error('Fetch failed:', error);
  }


}

// getData();



async function makePost_or_Patch_Request() {
  /** This function is used to change data on the Bible.io server */

  /** MORE IMPORTANT NOTES:
   * Don't ever place this in requestanimationframe loop, this will overwhelm the server, you can call this,
   * max every 3 seconds
   */
  const url = server_source;
  // const data = {
  //   online: 42
  // };


  // element 1 tell the server which part of the object to change, element 2 tells the server what to change it to
  var data = ["online", 5, "name", ];

  try {
    const response = await fetch(url, {
      method: 'PATCH', // Specify the HTTP method
      headers: {
        'Content-Type': 'application/json' // Inform the server about the data format
      },
      body: JSON.stringify(data) // Convert the JavaScript object into a JSON string
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json(); // Parse the JSON response from the server
    console.log(json);
  } catch (error) {
    console.error('Error making POST request:', error.message);
  }
}

makePost_or_Patch_Request();
