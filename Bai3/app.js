const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const apiController = require('./controller/apiController');
const homeController = require('./controller/homeController');
const port = 3000;



app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/assets", express.static(__dirname + "/public"));
// custom middleware
app.use("/", function (request, response, next) {
  console.log("Request URL: ", request.url);
  request.requestTime = new Date();
  next();
});

apiController(app);
homeController(app);
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
