const bodyParser = require("body-parser");
// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function (app) {
  app.get("/", function (request, response) {
    response.render("index");
  });

  app.post("/login", urlencodedParser, function (request, response) {
    response.send("Welcom, " + request.body.username);
    console.log(request.body.username);
    console.log(request.body.password);
  });
  app.post("/loginJson", jsonParser, function (request, response) {
    response.send("OK");
    console.log(request.body.firstName);
    console.log(request.body.lastName);
  });
};
