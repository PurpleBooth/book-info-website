var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

/* GET home page. */
router.get('/partials/details.html', function (req, res, next) {
    res.render('partials/details');
});

/* GET home page. */
router.get('/partials/list.html', function (req, res, next) {
    res.render('partials/list');
});


module.exports = router;
