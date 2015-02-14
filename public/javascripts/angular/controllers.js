'use strict';

var booksControllers = angular.module('booksControllers', []);

booksControllers.controller('IndexController', ['$scope', 'Book', function ($scope, Book) {
    Book.query({}, function (books) {
        $scope.books = books;
    });
}]);

booksControllers.controller(
    'DetailController',
    ['$scope', '$routeParams', 'Book',
        function ($scope, $routeParams, Book) {
            Book.pushGet({isbn: $routeParams.isbn}, function (book) {
                $scope.book = book;
            });

            $scope.$on('$destroy', function () {
                Book.stopPushGet();
            });
        }
    ]
);
