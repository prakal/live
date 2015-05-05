var express = require('express');
var bodyParser = require('body-parser');
var db = require('./config');
var Artists = require('./models/artists');
var Reviews = require('./models/reviews');

var app = express();
var session = require('express-session');

app.set('views', '../client/www')

app.use(express.static(__dirname + '/../client/www'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

app.get('/art', function(req, res){
  Artists.findAll({})
  .then(function (artists) {
    res.status(200).json(artists);
  });
});

app.get('/artist', function(req, res){
  Artists.find({
    where: {artistName: req.query.artistName}})
  .then(function (artist) {
    res.status(200).json(artist);
  });
});


// Project.find({
//   where: {title: 'aProject'},
//   attributes: ['id', ['name', 'title']]
// }).then(function(project) {
//   // project will be the first entry of the Projects table with the title 'aProject' || null
//   // project.title will contain the name of the project
// })


app.post('/newartist', function(req, res) {

  console.log('new artist coming');

  Artists
    .build( req.body )
    .save()
    .then(function(anotherTask) {
      console.log(anotherTask);
    }).catch(function(error) {
      console.log('error: ', error);
    })
  console.log('request: ', req.body);
});
