var express = require('express');
var async = require('async');
var _ = require('underscore');

var booksApiClient = require('./../api-client/books');
var ratingsApiClient = require('./../api-client/ratings');

var router = express.Router();

router.get('/', function (req, res, next) {
    booksApiClient.findAll(function (err, books) {
        res.json(books);
    });
});

router.get('/:isbn', function (req, res, next) {
    async.parallel({
        'book': function (callback) {
            booksApiClient.getBook(req.params.isbn, function (err, bookDetail) {
                callback(err, bookDetail);
            });
        },
        'rating': function (callback) {
            ratingsApiClient.getRating(req.params.isbn, function (err, ratings) {
                callback(err, ratings);
            });
        }
    }, function (err, results) {
        _.extend(results.book, {'rating': results.rating});
        res.json(results.book);
    });
});

module.exports = router;
