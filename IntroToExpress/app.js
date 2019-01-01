console.log("Our Express App will Go here!");

var express = require("express");       // Intialize variable for getting module

var app = express();                  //Intialize variable

// "/" => "Hi there!"
//req and res are objects. Use for request and respond
app.get("/", function(req, res){
    res.send("Hi there");
})

// "bye" => "Goodbye!"
app.get("/bye", function(req,res){
    res.send("Goodbye!!")
})

// "/dog" => "Meow!" 
app.get("/dog", function(req,res){
    console.log("Someone Made a request on /dog"); 
    res.send("Wolf")
})


//Tell Express to listen for requests (start server)

app.listen(process.env.PORT , process.env.IP, function(){  // Listen to port and IP address
    console.log("Server has started!!");
}); 
