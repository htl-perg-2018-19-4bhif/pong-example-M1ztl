/**************************************************************************
  Just the usual express.js setup...
  NOTE: This code has not been optimized for size or speed. It was written
        with ease of understanding in mind.
**************************************************************************/
import express = require('express');
import path = require('path');
import http = require('http');
let sio = require('socket.io')(80);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));
const server = http.createServer(app);


const port = 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

// Handle the connection of new websocket clients
sio(server).on('connection', (socket) => {
  // Handle an ArrowKey event
  socket.on('ArrowKey', function(code) {
    console.log(`${code} pressed`);

    // Broadcast the event to all connected clients except the sender
    socket.broadcast.emit('ArrowKey', code);
  });
});