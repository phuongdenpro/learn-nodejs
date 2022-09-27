const express = require("express");
const app = express();

var server = require("http").Server(app);

const io = require("socket.io")(server);

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

io.on("connection", (socket) => {
  console.log("Có người kết nối: " + socket.id);


  
});
app.get("/", function (req, res) {
  res.render("trangchu");
});

server.listen(3000, function () {
  console.log("Server is running on port 3000");
});
