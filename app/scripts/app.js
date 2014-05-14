'use strict';

var mytodo = angular.module('mytodo', ['ngRoute','firebase']);

mytodo.config(function($routeProvider){
 
  $routeProvider
    .when('/',
    {
      controller: 'TodoCtrl',
      templateUrl: 'views/welcome.html'
    });
  $routeProvider
    .when('/main',
    {
      controller: 'TodoCtrl',
      templateUrl: 'views/main.html'
    });
  $routeProvider
    .when('/about',
    {
    controller: 'TodoCtrl',
    templateUrl: 'views/about.html'
  });
  $routeProvider.otherwise({ redirectTo: '/'});
});