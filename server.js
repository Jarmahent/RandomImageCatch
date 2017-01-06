
const snoowrap = require('C:/Users/Kevin/AppData/Roaming/npm/node_modules/snoowrap');
var express = require('express');
var bodyParser = require('C:/Users/Kevin/AppData/Roaming/npm/node_modules/body-parser');
var app = express();

const r = new snoowrap({
	userAgent: '',
	clientId: '',
	clientSecret: '',
	username: '',
	password: ''

});





var urls = ["http://imgur", "https://i.reddituploads", "https://i.imgur", "http://i.imgur" ];




var currentUrl;
var subreddit = "wallpaper";

//Problem, you cant change a var while the server is up.




app.use(function(req, res, next) {
	console.log("Header");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();


  console.log("Header sent!");

});


app.post("/", function (req, res) {

});


//Add subreddit picker

app.get('/', function (req, res) {

	r.getSubreddit(subreddit).getRandomSubmission().then(function(post){

		if(post.url.includes(".jpg") || post.url.includes(".png")){
			currentUrl = post.url;
			console.log(currentUrl);
			res.send(currentUrl);
			res.end();

		} else{
			res.send("http://leafyisbeefy.neocities.org/ministry-click-me-button.jpg");
			console.log("Wrong format");
			console.log(post.url);
		}

		});
	console.log("Got request");
	//res.end();


})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("App listening at http://%s:%s", host, port)
})

//Do not scroll Up plsxD
