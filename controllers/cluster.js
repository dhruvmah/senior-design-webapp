var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClusterSchema = new Schema({
  rep_count: {type: Number, default: ''},
  dem_count: {type: Number, default: ''},
  main_keywords: [String],
  name: {type: String, default: ''}
});

//# of applications?

var cluster = mongoose.model("Cluster", ClusterSchema);


module.exports = {
	Cluster : cluster
};