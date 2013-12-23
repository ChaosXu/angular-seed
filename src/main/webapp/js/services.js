'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', []);
services.value('version', '0.1');

services.factory('UserService',['$resource',
    function($resource){
        return $resource('data/users/index.json', {}, {
              query: {method:'GET', isArray:true}
            });
    }]);
