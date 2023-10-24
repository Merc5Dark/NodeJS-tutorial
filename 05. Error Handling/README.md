# Error Handling in Node.js
Error handling in Node.js is essential for managing unexpected issues that may arise during the execution of your code. 
It ensures that your application gracefully deals with errors, providing a better user experience. Here, we'll explain 
different aspects of error handling and provide code examples.

Synchronous Error Handling
Example 1: Handling Synchronous Errors with try...catch

In this example, we use a try...catch block to handle errors that occur during the execution of synchronous code:


Copy code

try {
  const result = doSomething();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}
Example 2: Throwing Custom Errors

You can throw custom errors to handle specific issues in your code, like division by zero:


Copy code

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log('Result:', result);
} catch (error) {
  console.error('An error occurred:', error.message);
}
Asynchronous Error Handling
Example 3: Handling Asynchronous Errors with Promises

When working with asynchronous code, Promises provide a way to handle errors. In this example, a Promise is used to simulate a delay and reject with an error:


Copy code

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Failed to fetch data.'));
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log('Data:', data);
  })
  .catch((error) => {
    console.error('An error occurred:', error.message);
  });
Handling Built-in Error Objects
Example 4: Using Built-in Error Objects

Node.js provides built-in error objects like ReferenceError. You can catch specific error types:


Copy code

try {
  console.log(undefinedVar); // Trying to access an undefined variable
} catch (error) {
  if (error instanceof ReferenceError) {
    console.error('ReferenceError:', error.message);
  } else {
    console.error('An error occurred:', error.message);
  }
}

Effective error handling includes logging, providing informative error messages, and deciding how to respond to errors based on your application's requirements.