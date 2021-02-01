const express = require('express');
const app = express();
const path = require('path');

// Enables app to serve the build files.
let buildFiles = path.join(__dirname, '../build');
app.use(express.static(buildFiles));

// When server recieves a GET request on the '/ping' resource, 
// server responds with 'pong' message.
app.get('/ping', (req, res) => {
    return res.send('pong');
});

// When server receives a GET request on the index resource,
// server responds with 'index.html' from build files.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Starts the server and listens for connections on the given port.
app.listen(8080);