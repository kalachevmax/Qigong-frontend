

app.controller('userController', ['$scope', function($scope, user, $state) {
  $scope.auth = function() {
    $scope.authError = false;

    user.login($scope.login, $scope.password,
        function() {
          var route = user.getUser().role == routingConfig.user ? 'admin' : 'home';
          $state.go(route);
        },
        function() {
          $scope.authError = true;
        });
  }
}]);