//Pre-emptively adding dependencies I think will be useful later on.
//Only dependencies needed at launch should be Mongoose and dotenv.

const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const passport = require('passport');
const sessionStore = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');


//models
const User = require('./models/user');

//takes care of dotenv
dotenv.config();

//allows css to be linked in html
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

//db connection
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log('DB connected.');
    //init server
    server.listen(3000, () => console.log('Server running.'));
});

//engine config (ejs as templates)
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({ 
    secret: "Super epic secret", 
    resave: false, 
    saveUninitialized: false
}));


//////////////////////////////////////
// GET METHODS                     
//////////////////////////////////////

//gets homepage
app.get('/', (req, res) => {
    res.render('index.ejs');
});

//gets about page
app.get('/about', (req, res) => {
    res.render('about.ejs');
});

//gets registration page
app.get('/register', (req, res) => {
    res.render('register.ejs');
});

//gets success page
app.get('/success', (req, res) => {
    res.render('success.ejs');
});


//////////////////////////////////////
// POST METHODS                     
//////////////////////////////////////

//posts registration 
app.post("/register", (req, res) => { 
    var username = req.body.username
    var password = req.body.password
    var email = req.body.email
    User.register(new User({ username: username, email: email }), 
            password, (err, user) => { 
        if (err) { 
            console.log(err); 
            return res.render("register.ejs"); 
        } else {
            res.redirect("/success"); 
        }
    }); 
}); 
