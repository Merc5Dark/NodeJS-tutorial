// Connecting the backend and frontend in a web application typically involves using an API (Application Programming Interface) to send and receive data between the two. 
// Here's a simple example of how to create a basic connection between a Node.js backend and a frontend using Express.js and a basic HTML page. This example will demonstrate sending a simple message from the backend to the frontend.

// Backend (Node.js with Express):



const express = require('express');
const app = express();
const port = 3000;

app.get('/api/message', (req, res) => {
  const message = 'Hello from the backend!';
  res.json({ message });
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});


// In this backend code:

// We use Express.js to create a server.
// We define a route at /api/message that will respond with a JSON object containing a message.