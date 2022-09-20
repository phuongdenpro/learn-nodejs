const express = require("express");
const cookieParser = require("cookie-parser");
// const mysql = require("mysql");
const mongo = require("mongoose");

const app = express();

const apiController = require("./controller/apiController");
const homeController = require("./controller/homeController");
const port = 3000;


mongo.connect('mongodb://127.0.0.1:27017/phuongdatabase');
const schema = mongo.Schema;

const userSchema = new schema({
  name:String,
  tuoi: String
});

const user = mongo.model("User", userSchema);

app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/assets", express.static(__dirname + "/public"));

// custom middleware
app.use("/", function (request, response, next) {
  console.log("Request URL: ", request.url);
  request.requestTime = new Date();
  //Mysql
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
  
  //Mongodb

  var phuong = user({
    name: "phuong",
    tuoi:"27" 
  });
  phuong.save(function(err){
    if(err) throw err;
    console.log("Created!!!!");
  });

  next();
});

apiController(app);
homeController(app);
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
