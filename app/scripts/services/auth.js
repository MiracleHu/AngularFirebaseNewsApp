'use strict';

app.factory('Auth', function ($firebaseAuth, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseAuth(ref);

  var Auth = {
    register: function (user) {
      return auth.$createUser({email: user.email, password: user.password});
    },
    login: function (user) {
      return auth.$authWithPassword({email: user.email, password: user.password});
    },
    logout: function () {
      auth.$unauth();
    },
    resolveAuth: function() {
      return auth.$waitForAuth();
    },

    user: {},
    authObj:auth
  };

  // $rootScope.$on('$firebaseAuth:login', function(e, user) {
  //   console.log('logged in');
  //   angular.copy(user, Auth.user);
  // });
  // $rootScope.$on('$firebaseAuth:logout', function() {
  //   console.log('logged out');
  //   angular.copy({}, Auth.user);
  // });

  auth.$onAuth(function(authData) {
      if(authData){
        console.log('logged in');
        angular.copy(authData, Auth.user);
      }else{
        console.log('logged out');
        angular.copy({}, Auth.user);
      }
    });

  return Auth;
});