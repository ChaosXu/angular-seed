'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home/home.html', controller: 'HomeController'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/admin',{templateUrl:'partials/admin.html',controller:'AdminCtrl'});
  $routeProvider.when('/admin/panel1',{templateUrl:'partials/admin/panel1.html',controller:'AdminPanel1Ctrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
