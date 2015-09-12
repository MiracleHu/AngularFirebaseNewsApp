/* global app:true */
/* exported app */
'use strict';
/**
 * @ngdoc overview
 * @name angularForumApp
 * @description
 * # angularForumApp
 *
 * Main module of the application.
 */
var app = angular.module('angularForumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/onepostshow.html',
        controller: 'PostViewCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve: {
          currentAuth: function(Auth) {  // this will work as a factory in AuthCtrl
            return Auth.resolveAuth();
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        resolve: {
          currentAuth: function(Auth) {
            return Auth.resolveAuth();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
app.constant('FIREBASE_POSTS_URL','https://blinding-inferno-2181.firebaseio.com/posts');
app.constant('FIREBASE_URL','https://blinding-inferno-2181.firebaseio.com/');


