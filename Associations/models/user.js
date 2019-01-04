var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            
        type:mongoose.Schema.Types.ObjectId, // Mongoose Object Id belonging the 'Post'
        ref: "Post"
        }
    ]  
});

var User = mongoose.model("User", userSchema);
