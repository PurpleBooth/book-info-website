'use strict';

var booksApp = angular.module('booksApp', [
    'ngResource', 
    'ngRoute',
    'booksServices',
    'booksControllers'
]);

booksApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/list.html',
                controller: 'IndexController'
            }).
            when('/:isbn', {
                templateUrl: 'partials/details.html',
                controller: 'DetailController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);