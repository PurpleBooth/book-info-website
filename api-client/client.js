var https = require('http');

module.exports = function (url, callback) {
    https.get(url, function (res) {
        var str = '';

        res.on('data', function (chunk) {
            str += chunk;
        });

        res.on('end', function () {
            var apiResponse = JSON.parse(str);

            callback(null, apiResponse);
        });
    }).on('error', function (e) {
        callback(e);
    });
};