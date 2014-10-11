

app.factory('userService', function(appConfig, $http, $q, $localStorage) {
  function createAnonymousUser() {
    return {
      authToken: '',
      role: UserRole.ANONYMOUS
    }
  }

  function changeUser(user) {
    $localStorage.user = user;
    $http.defaults.headers.common.Authorization = 'Basic ' + user.authToken;
  }

  function getUser() {
    return $localStorage.user || null;
  }

  function isAuthorized(accessLevel) {
    var user = getUser();

    if (user !== null) {
      return accessLevel & user.role === user.role;
    }

    return false;
  }

  function login(login, password) {
    var defer = $q.defer;

    function handleSuccess(data, status, headers) {
      changeUser({
        authToken: headers('Authorization'),
        role: data.role
      });
      defer.resolve();
    }

    function handleError() {
      defer.reject();
    }

    $http.post(appConfig.apiUrl + 'auth', {
      login: login,
      password: password
    }).success(handleSuccess).error(handleError);

    return defer.promise;
  }

  function isLoggedIn() {
    return getUser().role === UserRole.ADMIN;
  }

  function logout() {
    delete $localStorage.user;
    changeUser(createAnonymousUser());
  }

  changeUser($localStorage.user || createAnonymousUser());

  return {
    getUser: getUser,
    isAuthorized: isAuthorized,
    login: login,
    isLoggedIn: isLoggedIn,
    logout: logout
  }
});
