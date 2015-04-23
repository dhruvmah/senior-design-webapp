var express = require('express');
var app = express();
var mongoose = require("mongoose");

var uristring =
	process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/senior-design';

mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

//controllers
var controller = require('./controllers/controller.js');

//other boiler plate
app.use(express.static(__dirname + '/public'));
app.use(express.logger("default"));
app.use( express.cookieParser() );
app.use(express.session({secret:'session'}));
app.use(express.bodyParser())
   .use(express.methodOverride())
   .use(app.router)
   .use(express.multipart());


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});


//General Online
app.get("/", controller.index);
app.get("/cluster", controller.cluster);
app.post("/articles", controller.articles);

module.exports = app;

