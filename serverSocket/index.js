const express = require("express");
const app = express();

var server = require("http").Server(app);

const io = require("socket.io")(server);

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

io.on("connection", (socket) => {
  console.log("Có người kết nối: " + socket.id);

  // socket.on("disconnect", () => {
  //   console.log(socket.id + " ngắt kết nối");
  // });
  // socket.on("client-send-data", function (data) {
  //   console.log(socket.id + " vừa gửi dữ liệu: " + data);
  // //  io.sockets.emit("server-send-data", data + "888");
  // // socket.emit("server-send-data", data + "888");
  // socket.broadcast.emit("server-send-data", data);
  // });

  socket.on("client-send-color", function(data){
    console.log(data);
    io.sockets.emit("server-send-color", data);
  });

  
});
app.get("/", function (req, res) {
  res.render("trangchu");
});

server.listen(3000, function () {
  console.log("Server is running on port 3000");
});
