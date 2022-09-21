const todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(request,response){
        //setup du lieu
        var seedTodos = [
            {
                text: "Học Node.Js",
                isDone:false
            },
            {
                text: "Học Angular.Js",
                isDone: false
            },
            {
                text:"Viết app hoàn chỉnh",
                isDone: false
            }
        ];
        todos.create(seedTodos, function(err,results){
            response.send(results);
        });
    });
}