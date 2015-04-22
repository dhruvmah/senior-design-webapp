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
    clusterOne = ["a", "b", "c", "d"];
    res.send(clusterOne);
}