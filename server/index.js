const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3000; // port

// express routes
app.use(express.static('dist'));

// socket.io broadcasts
io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(port, () => console.log(`DeHasher app listening at http://localhost:${port}`));