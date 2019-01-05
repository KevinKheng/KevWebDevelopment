var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Camping may be combined with hiking, as in backpacking, and is often enjoyed in conjunction with other outdoor activities such as canoeing, climbing, fishing, and hunting. ... Fundamentally, it reflects a combination of intent and the nature of activities involved."
    },
    {
        name: "Desert Mesa", 
        image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f6c77aa5efb6b0_340.jpg",
        description: "Camping may be combined with hiking, as in backpacking, and is often enjoyed in conjunction with other outdoor activities such as canoeing, climbing, fishing, and hunting. ... Fundamentally, it reflects a combination of intent and the nature of activities involved."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Camping may be combined with hiking, as in backpacking, and is often enjoyed in conjunction with other outdoor activities such as canoeing, climbing, fishing, and hunting. ... Fundamentally, it reflects a combination of intent and the nature of activities involved."
    }
];

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;