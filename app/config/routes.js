

app.config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
  $urlRouterProvider.otherwise('#home');

  $stateProvider
      .state('home', {
        url: '#home',
        templateUrl: 'modules/home/index.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('seminars', {
        url: '#seminars',
        templateUrl: 'modules/home/seminars.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('schedule', {
        url: '#schedule',
        templateUrl: 'modules/home/schedule.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('healing', {
        url: '#healing',
        templateUrl: 'modules/home/healing.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('philosophy', {
        url: '#philosophy',
        templateUrl: 'modules/home/philosophy.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('travels', {
        url: '#travels',
        templateUrl: 'modules/home/travels.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('water', {
        url: '#water',
        templateUrl: 'modules/home/water.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('tea', {
        url: '#tea',
        templateUrl: 'modules/home/tea.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('music', {
        url: '#music',
        templateUrl: 'modules/home/music.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('stuff', {
        url: '#stuff',
        templateUrl: 'modules/home/stuff.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('about', {
        url: '#about',
        templateUrl: 'modules/home/about.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('feedback', {
        url: '#feedback',
        templateUrl: 'modules/home/feedback.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('contacts', {
        url: '#contacts',
        templateUrl: 'modules/home/contacts.html',
        controller: 'homeController',
        access: AccessLevel.PUBLIC
      })

      .state('login', {
        url: '#login',
        templateUrl: 'modules/admin/login.html',
        controller: 'adminController',
        access: AccessLevel.PUBLIC
      })

      .state('admin', {
        url: '#admin',
        templateUrl: 'modules/admin/admin.html',
        controller: 'adminController',
        access: AccessLevel.FULL
      });

  RestangularProvider.setBaseUrl(appConfig['apiUrl']);
});
