var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo_2', { useNewUrlParser: true });

//Getting from the Model directory that you created.To references in node.js
// Use the ./ for file path in node--This is Associations 
var Post = require("./models/post");
var User = require("./models/user");



//Behometh
Post.create({
  title: "How to cook the best burger pt. 4",
  content: "AKLSJDLAKSJD"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});


//Test Data
// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

//Find user
//find all posts for that user 

// User.findOne({email:"bob@gmail.com"}). populate("post").exec(function(err,user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user);
//     }
// });
