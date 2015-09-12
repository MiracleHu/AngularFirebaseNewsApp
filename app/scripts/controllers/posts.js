'use strict';

/**
 * @ngdoc function
 * @name angularForumApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularForumApp
 */
app.controller('PostCtrl', function ($scope,Post) {

  $scope.posts = Post.all;
  $scope.deletePost = function (post) {
    Post.delete(post);
  };

  });
