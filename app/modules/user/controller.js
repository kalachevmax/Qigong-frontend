

app.controller('userController', ['$scope', function($scope, userService, $state) {
  $scope.auth = function() {
    $scope.authError = false;

    userService.login($scope.login, $scope.password,
        function() {
          var route = userService.getUser().role == UserRole.ADMIN ? 'admin' : 'home';
          $state.go(route);
        },
        function() {
          $scope.authError = true;
        });
  }
}]);