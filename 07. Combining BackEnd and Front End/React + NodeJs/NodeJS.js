// Backend (Node.js with Express):

// Create a new directory for your project and navigate to it in your terminal.

// Initialize a Node.js project by running npm init and follow the prompts.

// Install the necessary dependencies:



// npm install express
// Create a new file named server.js:



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