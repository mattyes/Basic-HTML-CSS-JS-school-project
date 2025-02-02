import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;


// Serve static files
app.use(express.static(join(__dirname, './Frontend')));
app.use(express.static(join(__dirname, './Frontend/src')));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '/Frontend/src/index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('Message received from client:', msg);
    io.emit('chat message', msg); 
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});
