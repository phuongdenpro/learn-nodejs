const app = angular.module("app.todos", []);

app.controller("todoController", [
  "$scope",
  function ($scope) {
    $scope.appName = "Todo Dashboard !!!";
    $scope.formData = {};
    $scope.todos = [
      {
        text: "Khỏi tạo dự án, angular js...",
        isDone: true,
      },
      {
        text: "Cài đặt angular...",
        isDone: true,
      },
      {
        text: "Tạo server gọi api...",
        isDone: false,
      },
      {
        text: "Hoàn thành dự án...",
        isDone: false,
      },
    ];
    $scope.createTodo = function () {
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
      $scope.todos.push(todo);
      $scope.formData.text = "";
    };
  },
]);
