'use strict';

/**
 * @ngdoc function
 * @name angularForumApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularForumApp
 */
app.controller('PostCtrl', function ($scope,Post,Auth) {

  $scope.posts = Post.all;
  $scope.deletePost = function (post) {
    Post.delete(post);
  };

  // use the loggin state to hide the logout buttom
	Auth.authObj.$onAuth(function(authData) {
		// console.log(authData);
    $scope.authData = authData;
  });

});
