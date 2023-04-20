// 创建模块对象
angular.module("memoApp", [])
  .controller("MemoController", ["$scope", function ($scope) {
    $scope.todos = [
      { name: "吃饭", checked: false },
      { name: "睡觉", checked: true },
      { name: "学习", checked: false },
    ];

    $scope.add = function () {
      if (!$scope.newTodo) {
        window.alert("输入的内容不能为空");
        return;
      }

      const newTodoObj = { name: $scope.newTodo, checked: false };
      $scope.todos.unshift(newTodoObj);
      $scope.newTodo = "";
    };

    $scope.del = function () {
      $scope.todos = $scope.todos.filter(todoObj => !todoObj.checked);
    };
  }]);
