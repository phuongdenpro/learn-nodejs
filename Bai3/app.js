const express = require("express");
const app = express();
const port = 3000;

//custom middleware
app.use("/", function (request, response, next) {
  console.log("Request URL: ", request.url);
  request.requestTime = new Date();
  next();
});
app.use("/assets", express.static(__dirname + "/public"));
app.get("/", function (request, response) {
  response.send(`
    <link href="/assets/style.css" rel="stylesheet" type="text.css">
    <h1>Hello express</h1>
    <p>Request time: ${request.requestTime}`);
});
app.get("/api", function (request, response) {
  response.json({
    firstName: "Phan",
    lastName: "Phương",
  });
});
app.get("/user/:id", function (request, response) {
  response.send(`<h1>User: ${request.params.id}</h1>`);
});
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
