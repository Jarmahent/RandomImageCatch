const snoowrap = require('snoowrap')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()


const r = new snoowrap({
  userAgent: "Jarmahent Random Image Catcher",
  clientId: process.env.id,
  clientSecret: process.env.secret,
  username: process.env.redditusername,
  password: process.env.password
})

app.use(express.static('static'))

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.json())

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post('/randomImage', function(req, res){
  let subreddit = req.body.subreddit
  r.getSubreddit(subreddit).getRandomSubmission().then(function(post){
		if(post.url.includes(".jpg") || post.url.includes(".png")){
			currentUrl = post.url
			console.log(currentUrl)
			res.send({'url': currentUrl})
			res.end()
		} else{
			res.send({"url":currentUrl}) //Sad face
      res.end()
		}
  }).catch(function(error){res.status(500).send({'error': error})});
})

let server = app.listen(8081, function(){
  let host = server.address().address
  let port = server.address().port
  console.log("App listening at: https://%s:%s", host, port)
})
