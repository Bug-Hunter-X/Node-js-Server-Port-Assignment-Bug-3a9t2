const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

// This is incorrect.  The port should be assigned before calling listen().
const port = server.listen(process.env.PORT || 3000).port;

console.log(`Server running on port ${port}`);