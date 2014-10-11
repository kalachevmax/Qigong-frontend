

app.controller('homeController', ['$scope', '$http', 'appConfig', function($scope, $http, appConfig) {
  $scope.quote = 'Дао пусто, но в своём применении оно неисчерпаемо';

  $scope.getRandomQuote = function() {
    $http.get(appConfig.apiUrl + 'random-quote')
        .success(handleSuccess).error(handleError);

    function handleSuccess(data, status, headers) {
      $scope.quote = data;
    }

    function handleError() {
    }
  };

  $scope.$on('$viewContentLoaded', function(){
    console.log('$viewContentLoaded');
    $scope.getRandomQuote();
  });
}]);
