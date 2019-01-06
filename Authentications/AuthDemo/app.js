var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    
mongoose.connect('mongodb://localhost:27017/auth_demo_app', { useNewUrlParser: true });



var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session()); 
//An Important to reading session of encoding and decoding the session
//We added the method from passport local mongoose in user.js file.
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

//==========================
//Routes
//==========================

// Auth Routes 

//show sign up form 
app.get("/register", function(req,res){
    res.render("register");
});

//handling user sign up
app.post("/register", function(req,res){
    req.body.username;
    req.body.password;
    User.register(new User({username: req.body.username}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/secret");  
        });
    });
});

//LOGIN ROUTES
//render login form
app.get("/login", function(req,res){
   res.render("login"); 
});

//Login Logic
// middleware 
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}) ,function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

//Middware to determine if the user is authenticate to go to the secret page after logging out
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}



app.get("/", function(req,res){
    res.render("home"); 
});

app.get("/secret",isLoggedIn,function(req,res){
    res.render("secret");
});

app.listen(process.env.PORT, process.env.IP,function(){
   console.log("server started....."); 
});