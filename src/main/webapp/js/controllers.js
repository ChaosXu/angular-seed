'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('NavController',['$scope','$location',function($scope,$location){
        $scope.activeClass=function(path){
            return $location.path().indexOf(path)==0 ? "active":"";
        };
    }])
    .controller('HomeController', [function() {

    }])
    .controller('MyCtrl2', [function() {

    }])
    .controller('AdminCtrl', [function() {

    }])
    .controller('UserController',['$scope','UserService',
        function($scope,UserService){
            $scope.users= UserService.query();
            $scope.submit=function(){
                var checkedUsers = [];
                var users = $scope.users;
                for(var i=0;i<users.length;i++){
                    var user = users[i];
                    if(user.checked){
                        checkedUsers.push(user);
                    }
                }
                alert(angular.toJson(checkedUsers,true));
            };
        }])
    .controller('UserAddController',['$scope',
        function($scope){
            $scope.userName="<name>";
            $scope.email="<email>";
            $scope.submit=function(){
                alert("userName:"+$scope.userName+";email:"+$scope.email);
            };
        }]);