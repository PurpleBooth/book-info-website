var makeHttpRequest = require('./client');

var Books = function () {

    var endpoint = "http://ratings-api.herokuapp.com/";
    
    /**
     * Get a book
     *
     * @param isbn
     * @returns {Object}
     */
    this.getRating = function (isbn, callback) {
        makeHttpRequest(endpoint.concat(isbn), callback)
    };

    /**
     * Get a list of a available book
     *
     * @returns {Object}
     */
    this.findAll = function (callback) {
        makeHttpRequest(endpoint, callback)
    };


};

module.exports = new Books();