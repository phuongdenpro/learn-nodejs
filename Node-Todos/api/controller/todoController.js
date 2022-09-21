const todos = require("../models/todoModel");

function getTodos(response) {
  todos.find(function (err, todos) {
    if (err) {
      response.status(500).json(err);
    } else {
      response.json(todos);
    }
  });
}

module.exports = function (app) {
  //get all
  app.get("/api/todos", function (request, response) {
    getTodos(response);
  });

  // /api/todo/123
  app.get("/api/todo/:id", function (request, response) {
    todos.findById({ _id: request.params.id }, function (err, todo) {
      if (err) {
        throw err;
      } else {
        response.json(todo);
      }
    });
  });
  //Creat
  app.post("/api/todo", function (request, response) {
    var todo = {
      text: request.body.text,
      isDone: request.body.isDone,
    };
    todos.create(todo, function (err, todo) {
      if (err) {
        throw err;
      } else {
        getTodos(response);
      }
    });
  });
  app.put("/api/todo", function (request, response) {
    if (!request.body._id) {
      return response.status(500).send("ID is required");
    } else {
      todos.update(
        {
          _id: request.body._id,
        },
        {
          text: request.body.text,
          isDone: request.body.isDone,
        },
        function (err, todo) {
          if (err) {
            return response.status(500).json(err);
          } else {
            getTodos(response);
          }
        }
      );
    }
  });
  //Delete
  app.delete('/api/todo/:id', function(request,response){
    todos.remove({
        _id: request.params.id
    }, function(err,todo){
        if(err){
            return response.status(500).json(err);
        }else{
            getTodos(response);
        }
    });
  });
};
