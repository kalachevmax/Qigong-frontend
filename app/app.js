

'use strict';

var app = angular.module('qigong', ['ui.router', 'restangular', 'ngStorage']);


app.run(function($rootScope, $state, user) {
  $rootScope.on('$stateChangeStart', function(event) {
    if (next.name !== 'login' &&
        (!user.authorize(next.access) || !user.isLoggedIn())) {
      event.preventDefault();
      $state.go('login');
    }
  });
});
