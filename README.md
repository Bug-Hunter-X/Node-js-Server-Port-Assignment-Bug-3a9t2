# Node.js Server Port Assignment Bug

This repository demonstrates a common error in Node.js server development: attempting to access the port number immediately after calling `server.listen()`.  This approach is problematic because `server.listen()` is asynchronous and may not complete immediately.  The correct way to handle port assignment is shown in the `bugSolution.js` file.

## Bug

The `bug.js` file demonstrates the incorrect approach. The port is assigned to a variable after `server.listen()`.  If there is an error starting the server (e.g., port in use), the port variable will be undefined, resulting in unexpected behavior or errors. 

## Solution

The `bugSolution.js` file shows the correct way to handle server port assignment in Node.js. It uses the `server.on('listening', ...)` event listener to obtain the port number after the server has successfully started listening on the specified port.