const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

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
app.get("/api/user/:id", function (request, response) {
  response.render("user", { ID: request.params.id, queryString:request.query.qstr });
  var result ={
    firstName: "Phan",
    lastName: "Phương",
  }
  response.json(result);
  // response.json({
  //   firstName: "Phan",
  //   lastName: "Phương",
  // });
});
app.post("/api/user",jsonParser, function(request, response){
  //create new and save to the database
})
app.put("/api/user",jsonParser, function(request, response){
  //update to the database
})
app.delete("/api/user/:id",function(request, response){
  //delete from database
})
// app.get("/api", function (request, response) {
//   response.json({
//     firstName: "Phan",
//     lastName: "Phương",
//   });
// });
// app.get("/user/:id", function (request, response) {
//   response.render("user", { ID: request.params.id, queryString:request.query.qstr });
// });

app.post("/login",urlencodedParser, function(request, response){
    response.send('Welcom, '+request.body.username);
    console.log(request.body.username);
    console.log(request.body.password);

});
app.post("/loginJson",jsonParser, function(request, response){
  response.send('OK');
  console.log(request.body.firstName);
  console.log(request.body.lastName);
})
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
