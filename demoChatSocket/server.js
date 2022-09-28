const express = require("express");
const app = express();

var server = require("http").Server(app);

const io = require("socket.io")(server);

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var listUser = [];
io.on("connection", (socket) => {
  console.log("Có người kết nối: " + socket.id);

  socket.on("client-send-username", function (data) {
    if (listUser.indexOf(data) >= 0) {
      socket.emit("server-send-fail");
    } else {
      listUser.push(data);
      socket.Username = data;
      socket.emit("server-send-success", data);
      io.sockets.emit("server-send-list-user", listUser);
    }
  });

  socket.on("logout", function () {
    listUser.splice(listUser.indexOf(socket.Username), 1);
    socket.broadcast.emit("server-send-list-user", listUser);
  });
  socket.on("user-send-message", function (data) {
    io.sockets.emit("server-send-message", {
      username: socket.Username,
      mess: data,
    });
  });
  socket.on("user-typing", function(){
    var s = socket.Username + " is typing...";
    io.sockets.emit("server-send-user-typing",s);
  });
  socket.on("user-stop-typing",function(){
    io.sockets.emit("server-send-user-stop-typing");
  });
  socket.on("disconnect", () => {
    console.log(socket.id+ " ngắt kết nối");
    console.log(socket.Username+ " ngắt kết nối");
    listUser.splice(listUser.indexOf(socket.Username), 1);
    socket.broadcast.emit("server-send-list-user", listUser);
  });

});
app.get("/", function (req, res) {
  res.render("home");
});

server.listen(3000, function () {
  console.log("Server is running on port 3000");
});
