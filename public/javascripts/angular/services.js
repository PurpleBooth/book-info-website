'use strict';

var booksService = angular.module('booksServices', []);

booksService.factory('Book', ['$resource', '$timeout',
    function ($resource, $timeout) {
        var api = $resource('api/v2/:isbn', {'isbn': '@id'});

        var promise;
        var pushing = false;

        api.pushGet = function (params, callback) {
            if (!pushing) {
                pushing = true;

                var refreshData = function () {
                    api.get(params, function (book) {
                        callback(book);

                        promise = $timeout(
                            function () {
                                refreshData(params, callback);
                            }, 4000);
                    });
                };

                refreshData(params, callback);
            }
        };

        api.stopPushGet = function () {
            pushing = false;

            if (angular.isDefined(promise)) {
                $timeout.cancel(promise);
                promise = undefined;
            }
        };

        return api;
    }]);
