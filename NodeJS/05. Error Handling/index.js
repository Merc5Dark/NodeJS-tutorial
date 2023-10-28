// Error Handling in Node.js

// Example 1: Handling Synchronous Errors with try...catch

try {
    // Code that might throw an error
    const result = doSomething();
    console.log(result);
} catch (error) {
    // Handle the error
    console.error('Example 1: An error occurred:', error.message);
}
  
// Example 2: Throwing Custom Errors
  
function divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}
  
try {
    const result = divide(10, 0);
    console.log('Example 2: Result:', result);
} catch (error) {
    console.error('Example 2: An error occurred:', error.message);
}
  
// Example 3: Handling Asynchronous Errors with Promises
  
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate an error
      setTimeout(() => {
        reject(new Error('Failed to fetch data.'));
      }, 2000);
    });
}
  
fetchData()
    .then((data) => {
      console.log('Example 3: Data:', data);
    })
    .catch((error) => {
      console.error('Example 3: An error occurred:', error.message);
    });
  
// Example 4: Using Built-in Error Objects
  
try {
    // Trying to access an undefined variable
    console.log(undefinedVar);
} catch (error) {
    if (error instanceof ReferenceError) {
      console.error('Example 4: ReferenceError:', error.message);
    } else {
      console.error('Example 4: An error occurred:', error.message);
    }
}
  