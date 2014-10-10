

'use strict';

var app = angular.module('qigong', []);

app.config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
  var access = routingConfig.accessLevels;

  $urlRouterProvider.otherwise('#home');

  $stateProvider
      .state('login', {
        url: '#login',
        templateUrl: 'modules/admin/login.html',
        controller: 'loginController',
        access: access.admin
      })

      .state('home', {
        url: '#home',
        templateUrl: 'modules/home/index.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('seminars', {
        url: '#seminars',
        templateUrl: 'modules/home/seminars.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('schedule', {
        url: '#schedule',
        templateUrl: 'modules/home/schedule.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('healing', {
        url: '#healing',
        templateUrl: 'modules/home/healing.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('philosophy', {
        url: '#philosophy',
        templateUrl: 'modules/home/philosophy.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('travels', {
        url: '#travels',
        templateUrl: 'modules/home/travels.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('water', {
        url: '#water',
        templateUrl: 'modules/home/water.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('tea', {
        url: '#tea',
        templateUrl: 'modules/home/tea.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('music', {
        url: '#music',
        templateUrl: 'modules/home/music.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('stuff', {
        url: '#stuff',
        templateUrl: 'modules/home/stuff.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('about', {
        url: '#about',
        templateUrl: 'modules/home/about.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('feedback', {
        url: '#feedback',
        templateUrl: 'modules/home/feedback.html',
        controller: 'homeController',
        access: access.anon
      })

      .state('contacts', {
        url: '#contacts',
        templateUrl: 'modules/home/contacts.html',
        controller: 'homeController',
        access: access.anon
      });

  RestangularProvider.setBaseUrl();
});


