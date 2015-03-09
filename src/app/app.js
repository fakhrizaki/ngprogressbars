
angular.module('progressbars', [
  'ngRoute',
  'progressbars.home'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/home', {
      controller: 'HomeCtrl',
      templateUrl: '/progressbars/home/home.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
