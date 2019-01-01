var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment"); 
    
});

app.get("/speak/:animal", function(req, res){
    //Easier route with Object
    var sounds = {
        pig: "Oink",
        cow: "Moo" ,
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "...."
    };
    var animal = req.params.animal.toLowerCase;
    var sound = sounds[animal] ;
    
    
    // This hard code 
   /*if(animal === "pig") {
        sound = "oink" ;
    } else if(animal === "cow"){
        sound = "moo"; 
    }*/ 
    
    
    
    
    //res.send("THIS IS THE SPEAK ROUTE"); 
    res.send("The " + animal + " says '" + sound + " '" );
});

app.listen(process.env.PORT , process.env.IP, function() {
    console.log("Now serving your app!");
})