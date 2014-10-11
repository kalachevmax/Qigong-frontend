

app.constant('AccessLevel', {
  PUBLIC: UserRole.ANONYMOUS | UserRole.ADMIN,
  FULL: UserRole.ADMIN
});
