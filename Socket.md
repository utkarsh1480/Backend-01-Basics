```JS
const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
```
```JS
### Why we use httpModule if we have express app
Express internally uses Node.js HTTP module. We manually create the HTTP server when we need direct access to the server object, such as integrating Socket.IO or WebSockets.
### what actually happens when we pass app inside createServer(app)
createServer(app) works because Express app is itself a request handler function (req,res) which Node's HTTP server can execute.
### Why do we use createServer(app)?
You should say:
The Node.js HTTP module creates the actual server that handles network requests, while Express is just a framework for routing and middleware. When we pass app to createServer, the HTTP server forwards incoming requests to the Express application for processing.
HTTP handles normal request-response communication, while sockets (WebSockets) allow persistent two-way communication for real-time applications like chat, notifications, and live updates.
```
