const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle errors
server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1);
  } else {
    console.error(`Server error: ${err.message}`);
    process.exit(1);
  }
});