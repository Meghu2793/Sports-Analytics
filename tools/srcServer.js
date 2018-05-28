import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";
import Twit from "twit";
import http from "http";
import PythonShell from "python-shell";
import config1 from "./config";
let cookieParser = require('cookie-parser');
let session = require('express-session');
let morgan = require('morgan');
//let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let flash = require('connect-flash');
import passport from 'passport';
var strategy = require('passport-twitter').Strategy;

let configDB = require('../src/components/config/database.js');

const port = 3000;
const app = express();
const compiler = webpack(config);

//Facebook login
require('../src/components/config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'anystringoftext',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.set('view engine', 'ejs');

require('../src/components/app/routes.js')(app, passport);
//twitter login
passport.use(new strategy({
	consumerKey: 'PTTddaZPx1zIPUKeVABxckC0Y',
    consumerSecret: 'mFhYWVdvO0DOywL3RREzSZ9XmdR9fxXxvb1VlUH0xQI9aEsOYz',
    callbackURL: 'http://localhost:8080/professional'
}, function(token,tokenSecret,profile,callback){
	return callback(null, profile);
}));
app.use(passport.initialize())
app.use(passport.session())

app.use(session(
	{secret: 'whatever',
	resave: true,
	saveUninitialized: true
}));


let jsonic = require("jsonic");
var T = new Twit(config1);
/* eslint-disable no-console */

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.get('/twitter/login', passport.authenticate('twitter'))

app.get('/professional',passport.authenticate('twitter', {
	failureRedirect: '/'
}),	function(req,res){
	res.redirect('/dashboard')
})

// passport.serializeUser(function(user, callback){
// 	callback(null, user);
// })

// passport.deserializeUser(function(obj, callback){
// 	callback(null, user);
// })

app.get("/NBA/get_player_shot_tracking_overall", function(req, res) {
  let start = Date.now();
  PythonShell.run("./samplePython.py", function(err, data) {
    let duration = Date.now() - start;
    console.log("Response time is ", duration);
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(jsonic(data[0]));
    }
  });
});

//Server side Tweets
var params = {
  q: "@NBA",
  count: 5
};

app.get("/twitter_tweets", function(request, response) {
  var twits = [];
  T.get("search/tweets", params, function(err, data, res) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      var myObj = new Object();
      myObj.created_at = tweets[i].created_at;
      myObj.text = tweets[i].text;
      myObj.userid = tweets[i].user.screen_name;
      myObj.name = tweets[i].user.name;
      myObj.desc = tweets[i].user.description;
      twits.push(myObj);
    }
    console.log(twits);
    response.send(twits);
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

//database
// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'sampleDB'
// });

// connection.connect(function(error){
//   if(error){
//       console.log("error");
//   } else{
//       console.log("working");
//   }
// });
// app.get("/api/users", function(request, response){
//   connection.query("SELECT * from login", function(error,rows, field){
//       if(error){
//            console.log("error connecting database");
//       } else{
//           console.log("Query is working");
//           response.send(JSON.stringify(rows));
//           // fetch('https://api.github.com/users/github')
//           //     .then(res => res.json())
//           //     .then(json => console.log(json));
//       }
//   });
// });
