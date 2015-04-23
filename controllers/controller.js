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
    keyWordsOne = ["a", "b", "c", "d"];
    keyWordsTwo = ["e", "f", "g", "h"];
    clusterOne = {"name": "Immigration", "keywords": keyWordsOne, "demRatio": .30, "repRatio": .70};
    clusterTwo = {"name": "Gun Control", "keywords": keyWordsTwo, "demRatio": .60, "repRatio": .40};
    clusters = [clusterOne, clusterTwo];
    res.send(clusters);
};

exports.articles = function(req, res) {
    console.log(req.body);
    res.render("articles.ejs", {key: req.body.key, cluster: req.body.cluster});
}