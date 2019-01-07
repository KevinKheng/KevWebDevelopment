var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
   username: String,
   password: String
});

//What we use to authenticate model in app.js file
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema); 