

app.config(function($stateProvider, $urlRouterProvider, RestangularProvider, appConfig) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'modules/home/index.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('seminars', {
        url: '/seminars',
        templateUrl: 'modules/home/seminars.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('schedule', {
        url: '/schedule',
        templateUrl: 'modules/home/schedule.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('healing', {
        url: '/healing',
        templateUrl: 'modules/home/healing.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('philosophy', {
        url: '/philosophy',
        templateUrl: 'modules/home/philosophy.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('travels', {
        url: '/travels',
        templateUrl: 'modules/home/travels.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('water', {
        url: '/water',
        templateUrl: 'modules/home/water.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('tea', {
        url: '/tea',
        templateUrl: 'modules/home/tea.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('music', {
        url: '/music',
        templateUrl: 'modules/home/music.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('stuff', {
        url: '/stuff',
        templateUrl: 'modules/home/stuff.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('about', {
        url: '/about',
        templateUrl: 'modules/home/about.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('feedback', {
        url: '/feedback',
        templateUrl: 'modules/home/feedback.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('contacts', {
        url: '/contacts',
        templateUrl: 'modules/home/contacts.html',
        controller: 'homeController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('login', {
        url: '/login',
        templateUrl: '../admin/login.html',
        controller: 'adminController',
        accessLevel: AccessLevel.PUBLIC
      })

      .state('admin', {
        url: '/admin',
        templateUrl: 'modules/admin/admin.html',
        controller: 'adminController',
        accessLevel: AccessLevel.FULL
      });

  RestangularProvider.setBaseUrl(appConfig['apiUrl']);
});
