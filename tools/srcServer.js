import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";
import PythonShell from "python-shell";
var jsonic = require("jsonic");

/* eslint-disable no-console */

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.get("/NBA/get_player_shot_tracking_overall", function(req, res) {
  PythonShell.run("./samplePython.py", function(err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(jsonic(data[0]));
    }
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
