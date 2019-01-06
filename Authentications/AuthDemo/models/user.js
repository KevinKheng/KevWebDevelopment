var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose"); 

var UserSchema =  new mongoose.Schema({
   username: String,
   password: String
});

//Add methods to the package we got from reuiring in the app.js 
UserSchema.plugin(passportLocalMongoose); 

module.exports = mongoose.model("User", UserSchema); 