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
    online: 0,
    name: "Unknown Player",
    points: 0,
    bibletar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    room: 0,
    country: "America",
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

          } else {
            // Bible.io LIVE Data
            for (let i = 0; i < Math.ceil((chunk.length)/2); i++) {
              const decoded_name = JSON.parse(chunk)[i * 2];
              var decoded_value = JSON.parse(chunk)[(i * 2)+ 1];
              if (decoded_name == "online") {
                around_the_world.online = decoded_value;
              }
              if (decoded_name == "name") {
                around_the_world.name = decoded_value;
              }
              if (decoded_name == "points") {
                around_the_world.points = decoded_value;
              }
              if (decoded_name == "bibletar") {
                around_the_world.bibletar = decoded_value;
              }
              if (decoded_name == "room") {
                around_the_world.room = decoded_value;
              }
              if (decoded_name == "country") {
                around_the_world.country = decoded_value;
              }
              if (decoded_name == "new_game_wait_time") {
                around_the_world.new_game_wait_time = decoded_value;
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

const server_source = 'http://localhost:3000/api/data';

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
  var data = ["online", "1"];

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
