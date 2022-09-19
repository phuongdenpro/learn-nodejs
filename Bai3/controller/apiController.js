module.exports = function (app) {
  app.get("/api/user/:id", function (request, response) {
    response.render("user", {
      ID: request.params.id,
      queryString: request.query.qstr,
    });
    var result = {
      firstName: "Phan",
      lastName: "Phương",
    };
    response.json(result);
    // response.json({
    //   firstName: "Phan",
    //   lastName: "Phương",
    // });
  });
  app.post("/api/user", function (request, response) {
    //create new and save to the database
  });
    app.put("/api/user", function (request, response) {
    //update to the database
  });

//   app.post("/api/user", jsonParser, function (request, response) {
    //create new and save to the database
//   });
//   app.put("/api/user", jsonParser, function (request, response) {
    //update to the database
//   });
  app.delete("/api/user/:id", function (request, response) {
    //delete from database
  });
  // app.get("/api", function (request, response) {
  //   response.json({
  //     firstName: "Phan",
  //     lastName: "Phương",
  //   });
  // });
  // app.get("/user/:id", function (request, response) {
  //   response.render("user", { ID: request.params.id, queryString:request.query.qstr });
  // });
};
