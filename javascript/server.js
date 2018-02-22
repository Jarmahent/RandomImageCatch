
const snoowrap = require('snoowrap');
var express = require('express');
var app = express();
const private = require("./privateinfo.js");

const r = new snoowrap({
	userAgent: 'Random Image catching bot',
	clientId: `${private.redditId}`,
	clientSecret: `${private.redditSecret}`,
	username: `${private.redditUserName}`,
	password: `${private.redditPassword}`

});





var urls = ["http://imgur", "https://i.reddituploads", "https://i.imgur", "http://i.imgur" ];




var currentUrl;
var subreddit = "wallpaper";

//Problem, you cant change a var while the server is up.


app.use(express.static('static'));



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();



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
			console.log(post.url);
		}

		});


})

app.get("/index", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("App listening at http://%s:%s", host, port)
})

//Do not scroll Up plsxD
