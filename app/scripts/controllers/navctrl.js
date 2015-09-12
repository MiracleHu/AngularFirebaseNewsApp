'use strict';

app.controller('NavCtrl', function ($scope, $location, Post,Auth) {
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function (ref) {
      $location.path('/posts/' + ref.key());
      $scope.post = {url: 'http://', title: ''};
    });
  };

  $scope.signedIn = Auth.signedIn;
	$scope.logout = Auth.logout;

// use the loggin state to hide the logout buttom
	Auth.authObj.$onAuth(function(authData) {
			// console.log(authData);
      $scope.authData = authData;
    });

});