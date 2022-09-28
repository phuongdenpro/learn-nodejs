"use strict";

var express = require('express');

var dotenv = require('dotenv');

var path = require('path');

var route = require('./routes/index.route');

var app = express();
dotenv.config();

var http = require('http');

var server = http.createServer(app);

var _require = require('socket.io'),
    Server = _require.Server;

var io = new Server(server);
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json({
  extended: true
}));
app.use(express["static"](path.join(__dirname, '/public'))); // ejs template

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/resources/views'));
io.on('connection', function (socket) {
  console.log('user connection');
  socket.on('on-chat', function (data) {
    io.emit('user-chat', data);
  });
});
var PORT = process.env.PORT || 3000;
route(app);
server.listen(PORT, function () {
  console.log("Server is running http://localhost:".concat(PORT));
});