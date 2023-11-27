const http = require('http');
const url = require('url');
const querystring = require('querystring');

// In-memory database (for demonstration purposes)
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;
  const queryParams = querystring.parse(parsedUrl.query);

  // Set response headers
  res.setHeader('Content-Type', 'application/json');

  // Handle different CRUD operations based on the request path
  switch (req.method) {
    case 'GET':
      if (path === '/items') {
        // Read all items
        res.end(JSON.stringify(data));
      } else if (path.startsWith('/item/') && queryParams.id) {
        // Read a specific item by id
        const itemId = parseInt(queryParams.id);
        const item = data.find((item) => item.id === itemId);

        if (item) {
          res.end(JSON.stringify(item));
        } else {
          res.statusCode = 404;
          res.end(JSON.stringify({ error: 'Item not found' }));
        }
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
      }
      break;

    case 'POST':
      if (path === '/items') {
        // Create a new item
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', () => {
          const newItem = JSON.parse(body);
          newItem.id = data.length + 1;
          data.push(newItem);

          res.statusCode = 201;
          res.end(JSON.stringify(newItem));
        });
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
      }
      break;

    case 'PUT':
      if (path.startsWith('/item/') && queryParams.id) {
        // Update an item by id
        const itemId = parseInt(queryParams.id);
        const index = data.findIndex((item) => item.id === itemId);

        if (index !== -1) {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', () => {
            const updatedItem = JSON.parse(body);
            updatedItem.id = itemId;
            data[index] = updatedItem;

            res.end(JSON.stringify(updatedItem));
          });
        } else {
          res.statusCode = 404;
          res.end(JSON.stringify({ error: 'Item not found' }));
        }
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
      }
      break;

    case 'DELETE':
      if (path.startsWith('/item/') && queryParams.id) {
        // Delete an item by id
        const itemId = parseInt(queryParams.id);
        const index = data.findIndex((item) => item.id === itemId);

        if (index !== -1) {
          const deletedItem = data.splice(index, 1)[0];
          res.end(JSON.stringify(deletedItem));
        } else {
          res.statusCode = 404;
          res.end(JSON.stringify({ error: 'Item not found' }));
        }
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
      }
      break;

    default:
      res.statusCode = 405;
      res.end(JSON.stringify({ error: 'Method not allowed' }));
      break;
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
