// 创建模块对象
angular.module("noteApp", [])
  .controller("NoteController", ["$scope", function ($scope) {
    const NOTE_LIMIT = 100;
    const NOTE_KEY = "note_key";

    $scope.message = "";
    $scope.getCount = function () {
      // 判断用户输入的内容长度，解决剩余字数负数问题
      if ($scope.message.length > NOTE_LIMIT) {
        $scope.message = $scope.message.slice(0, NOTE_LIMIT);
      }
      return NOTE_LIMIT - $scope.message.length;
    };

    // 保存数据的方法
    $scope.save = function () {
      localStorage.setItem(NOTE_KEY, JSON.stringify($scope.message));
      $scope.message = "";
      window.alert("note is saved");
    };

    // 读取数据的方法
    $scope.read = function () {
      const note = localStorage.getItem(NOTE_KEY);
      console.log(note);
      $scope.message = JSON.parse(note || "[]");  // 处理null
    };

    // 移除数据的方法
    $scope.remove = function () {
      localStorage.removeItem(NOTE_KEY);
      $scope.message = "";
    };
  }]);
