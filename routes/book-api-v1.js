var express = require('express');

var booksApiClient = require('./../api-client/books');

var router = express.Router();

router.get('/', function (req, res, next) {
    booksApiClient.findAll(function (err, books) {
        res.json(books);
    });
});

router.get('/:isbn', function (req, res, next) {
    booksApiClient.getBook(req.params.isbn, function (err, bookDetail) {
        res.json(bookDetail);
    });
});

module.exports = router;
