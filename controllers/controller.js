var mongoose = require('mongoose');
var async = require("async");
/*--------------  General Functions ----------- */


/**
 * Opens admin/volunteer homepage based on login credentials
 * Redirects to login page if invalid credentials
 */


exports.index = function(req, res) {
    republican_domains =  ["Saab", "Volvo", "BMW", "Saab", "Volvo", "BMW", "Saab", "Volvo", "BMW", "BMW"];
    democrat_domains =  ["Saab", "Volvo", "BMW", "Saab", "Volvo", "BMW", "Saab", "Volvo", "BMW", "BMW"];
    res.render("home.ejs", {republican_domains: republican_domains, democrat_domains: democrat_domains});
};

exports.cluster = function(req, res) {

    articlesOne = ["alpha", "beta", "gamma"];
    articlesTwo = ["who", "what", "when", "why"];
    keyWordsOne = {"a": articlesOne, "b": articlesTwo, "c": articlesOne, "d": articlesTwo};
    keyWordsTwo = {"e": articlesTwo, "f": articlesOne, "g": articlesTwo, "h": articlesOne};
    clusterOne = {"name": "Immigration", "keywords": keyWordsOne, "demRatio": .30, "repRatio": .70};
    clusterTwo = {"name": "Gun Control", "keywords": keyWordsTwo, "demRatio": .60, "repRatio": .40};
    clusters = [clusterOne, clusterTwo];
    res.send(clusters);
}