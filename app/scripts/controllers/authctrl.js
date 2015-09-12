'use strict';

app.controller('AuthCtrl', function ($scope, $location, Auth,currentAuth,$rootScope) {
  // if (user) {
  //   $location.path('#/');
  // }

  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireAuth promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("#/");
    }
  });

  $scope.login = function () {
    Auth.login($scope.user).then(function (authData) {
      $location.path('#/');
      console.log("Logged in as:", authData.password.email);
    }, function (error) {
      $scope.error = error.toString();
    });
  };

  $scope.register = function () {
    Auth.register($scope.user).then(function() {
      return Auth.login($scope.user).then(function() {
        $location.path('#/');
      });
    }, function(error) {
      $scope.error = error.toString();
    });
  };

//register test

  // $scope.register = function () {
  //   Auth.register($scope.user).then(function(userData) {
  //     console.log(userData);
  //     },function(error) {
  //     $scope.error = error.toString();
  //   });
  // };


});