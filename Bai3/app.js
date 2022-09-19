const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
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

app.get("/", function (request, response) {
  response.render("index");
});
app.get("/api", function (request, response) {
  response.json({
    firstName: "Phan",
    lastName: "Phương",
  });
});
app.get("/user/:id", function (request, response) {
  response.render("user", { ID: request.params.id });
});
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
