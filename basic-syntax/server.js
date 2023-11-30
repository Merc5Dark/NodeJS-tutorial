// // Load HTTP module
// let http = require("http");

// // Create HTTP server and listen on port 8080 for requests 
// http.createServer(function (request, response) {

//     // Set the response HTTP header with HTTP status and Content type
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
//     // Send response body
//     response.end('Hello Node\n');
// }).listen(8080);

// // Print URL for accessing server
// console.log('Server running at http://127.0.0.1:8080/');

////////////////////////////////////////////////////////////////////////


let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('Hello Node');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});