

'use strict';

var app = angular.module('qigong', ['ui.router', 'restangular', 'ngStorage']);


app.run(function($rootScope, $state, userService) {
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    console.log('$stateChangeStart:', toState);
    if (toState.name !== 'login' && !userService.isAuthorized(toState.accessLevel)) {
      event.preventDefault();
      $state.go('login');
    }
  });
});
