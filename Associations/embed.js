var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo', { useNewUrlParser: true });

//POST -title, content 
var postSchema = new mongoose.Schema({
   title: String,
   content: String
   
});

var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]  //When embedding data. You need to use that Schema first 
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "James@Dean.edu",
//     name: "James Dean"
// }); 

// newUser.posts.push({
//   title: "How to Fuck",
//   content: "Just kidding , Just Do Porn"
// });

// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });


//Test Data
/*var newPost = new Post({
   title: "Reflections on Apples",
   content: "They are delicious"
});

newPost.save(function(err,post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});*/ 


//Test Data
/*var newUser = new User({
    email: "charlie@brown.edu",
    name: "Charlie Brown"
}); 


newUser.save(function(err,user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});*/


// User.findOne({name: "James Dean"},function (err, user){
//   if(err){
//       //console.log(err);
//   } else {
//       user.posts.push({
//           title: "1 Thing I hate",
//           content: "Faggots"
//       });
//       //Saves it the database
//       user.save(function(err,user){
//           if(err){
//               console.log(err);
//           } else {
//               console.log(user); 
//           }
//       });
//   }
// });