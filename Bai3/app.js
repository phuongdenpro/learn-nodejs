const express = require("express");
const cookieParser = require("cookie-parser");
// const mysql = require("mysql");

const app = express();

const apiController = require("./controller/apiController");
const homeController = require("./controller/homeController");
const port = 3000;
// const connection = require("./database/mysql");

app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/assets", express.static(__dirname + "/public"));

// custom middleware
app.use("/", function (request, response, next) {
  console.log("Request URL: ", request.url);
  request.requestTime = new Date();
  // var connection = mysql.createConnection({
  //   host: "localhost:3306",
  //   user: "root",
  //   password: "0961869274",
  //   database: "testdb"
  // });
  // connection.connect();
  // connection.query("SELECT * FROM tbl_sinhvien;", function (err, rows) {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(rows);
  // });
  // connection.end();
  next();
});

apiController(app);
homeController(app);
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
