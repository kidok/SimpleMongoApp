var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var userScheMa = new Schema({
    userid: String,
    name: String
});

exports.user = mongoose.model('users', userScheMa);