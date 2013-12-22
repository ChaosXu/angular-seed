'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('NavController',['$scope','$location',function($scope,$location){
        $scope.activeClass=function(path){
            return $location.path()==path ? "active":"";
        };
    }])
    .controller('MyCtrl1', [function() {

    }])
    .controller('MyCtrl2', [function() {

    }])
    .controller('AdminCtrl', [function() {

    }]);