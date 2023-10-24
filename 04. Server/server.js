// Import necessary modules
const express = require('express');
const http = require('http');

// Create an instance of Express
const app = express();

// Define a port for the server to listen on
const port = process.env.PORT || 3000;

// Define a route and a callback function
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create an HTTP server using Express
const server = http.createServer(app);

// Listen for incoming requests on the defined port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// Now, let's break down each line of code and understand its purpose:

// const express = require('express');

// This line imports the Express.js framework. Express is a web application framework for Node.js.
// const http = require('http');

// This line imports the built-in Node.js http module. We'll use it to create an HTTP server.
// const app = express();

// Here, we create an instance of Express and assign it to the app variable. This instance will be used to define routes and handle HTTP requests.
// const port = process.env.PORT || 3000;

// We define a port for the server to listen on. It checks the process.env.PORT environment variable, which is commonly used in hosting environments like Heroku, 
// and falls back to port 3000 if the environment variable is not set.
// app.get('/', (req, res) => { res.send('Hello, World!'); });

// This code defines a route using the app.get method. When a GET request is made to the root path ('/'), it executes a callback function that sends the response 'Hello, World!' back to the client.
// const server = http.createServer(app);

// This line creates an HTTP server using the http.createServer method and passes our Express app as the request handler.
// server.listen(port, () => { console.log(Server is running on port ${port}); });

// Finally, we instruct the server to listen on the defined port (port). When the server starts, it prints a message to the console indicating the port it's listening on.
// In summary, this server.js file sets up a basic Node.js server using the Express framework. It listens on a specified port, defines a single route that responds with 
// 'Hello, World!' for requests to the root path, and logs a message when the server starts. You can run this server by executing node server.js in your terminal, and it will respond to requests at the defined port.