const snoowrap = require('snoowrap')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const info = require('dotenv').config()

const r = new snoowrap({
  userAgent: "Jarmahent Random Image Catcher",
  clientId: process.env.id,
  clientSecret: process.env.secret,
  username: process.env.username,
  password: process.env.password
});

app.use(express.static('static'));
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/image', function(req, res){
  var data = req.body;
  console.log(data);
});

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at: https://%s:%s", host, port);
})
