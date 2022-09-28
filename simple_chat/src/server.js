const express = require('express');
const dotenv = require('dotenv');
var path = require('path');
const route = require('./routes/index.route');

const app = express();
dotenv.config();

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

// ejs template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/resources/views'));

io.on('connection', (socket) => {
    console.log('user connection');
    socket.on('on-chat', (data) => {
        io.emit('user-chat', data)
    });
});

const PORT = process.env.PORT || 3000;

route(app);

server.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});
