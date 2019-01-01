var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs"); 

app.get("/", function(req,res){
    res.render("home"); 

});


app.get("/fallinlovewith/:thing" ,function(req,res){
    var thing = req.params.thing;
      res.render("love", {thingVar: thing}); 
    
    
});


app.get("/post", function(req, res){
    var posts = [
        {title : "Post 1", author: "Susy"},
        {title : "My adorable pet bunny", author: "Charlie" },
        {title : "Can you believe this Pickachu?" , author: "Kev"}
        ];
        
        res.render("post", {posts: posts});
    });



    

app.listen(process.env.PORT, process.env.IP , function() {
    console.log("Yeah your server is running!"); 
});


