var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();


mongoose.connect('mongodb://localhost:27017/restful_blog_app', { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true}));

//APP CONFIG
var blogSchema = new mongoose.Schema({
   title: String,
   image: String,
   body: String,
   created: {type: Date, default: Date.now}
});
//title
//image
//body
//created

//MONGOOSE/MODEL CONFIG
var Blog = mongoose.model("Blog", blogSchema); 

//This is a test data 
/*Blog.create({
    title: "Test Blog",
    image:"https://images.unsplash.com/photo-1545486605-03e5369766bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    body: "Man look at that vacation set!"
});*/ 

//RESTFUL ROUTES

app.get("/", function(req,res){
   res.redirect("/blogs"); // getting from the bottom route to rediect. 
});

//INDEX ROUTE
app.get("/blogs", function(req,res){
    Blog.find({}, function(err, blogs){
       if(err){
           console.log("Error");
       } else {
           res.render("index",{blogs: blogs});
       }
          
    });
  
});

//NEW ROUTE
app.get("/blogs/new", function(req, res){
   res.render("new"); 
});
// CREATE ROUTE
app.post("/blogs", function(req, res){
   // create blog
   Blog.create(req.body.blog, function(err, newBlog){
       if(err){
           res.render("new");
       } else {
           //then, redirect to the index
           res.redirect("/blogs"); 
       }
   });
   
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           res.redirect("/blogs");
       } else {
           res.render("show", {blog: foundBlog});
       }
   });
});

// EDIT ROUTE 
app.get("/blogs/:id/edit", function(req,res){
    
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server is running!");
});


