var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", [
  "$scope",
  "serverTodos",
  function ($scope, serverTodos) {
    $scope.appName = "Todo Dashboard !!!";
    $scope.formData = {};
    $scope.loading = true;
    $scope.todos = [];
    //load data
    serverTodos.get().success(function (data) {
      $scope.todos = data;
      $scope.loading = false;
    });

    $scope.createTodo = function () {
      $scope.loading = true;
      var todo = {
        text: $scope.formData.text,
        isDone: false,
      };
      serverTodos.create(todo).success(function (data) {
        $scope.todos = data;
        $scope.formData.text = "";
        $scope.loading = false;
      });
    };
    $scope.updateTodo = function (todo) {
      console.log("Update todo: ", todo);
      $scope.loading = true;
      serverTodos.update(todo).success(function(data){
        $scope.todos = data;
        $scope.loading = false;
      })
    };
    $scope.deleteTodo = function (todo) {
      console.log("Delete todo: ", todo);
      $scope.loading = true;
      serverTodos.delete(todo._id).success(function(data){
        $scope.todos = data;
        $scope.loading = false;
      })
    };
  },
]);
