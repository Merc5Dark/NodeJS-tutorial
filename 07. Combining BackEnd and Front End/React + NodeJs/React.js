// Create a new directory for your frontend within the project directory.

// Navigate to the frontend directory and create a new React application:


// npx create-react-app my-frontend
// Replace the content of src/App.js with the following code:




import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/message')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>React Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;


// Start the React development server by running the following command within the frontend directory:



// npm start