var express = require('express');
var bodyParser = require('body-parser');
var sequelize = require('sequelize');
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
    // console.log("This is all of the artists",artists)
    res.status(200).json(artists);
  });
});

app.get('/artist', function(req, res){
  Artists.find({
    where: { artistName: req.query.artistName }
  })
  .then(function (artist) {
    res.status(200).json(artist);
  });
});

app.get('/getreviews', function(req, res){
  Reviews.findAndCountAll({
    where: { artistName: req.query.artistName }
  })
  .then(function (review) {
    res.status(200).json(review);
  });
});

app.get('/getAvgRating', function(req, res){
  db.query("SELECT AVG(rating) FROM `reviews` WHERE artistName = ? ", {replacements: [req.query.artistName], type: sequelize.QueryTypes.SELECT})
  .then(function(avgRating) {
    console.log('average rating: ', avgRating);
    res.status(200).json(avgRating);
  });
});

app.post('/newartist', function(req, res) {
  Artists
    .build( req.body )
    .save()
    .then(function(body) {
      res.status(201).send(body);
    })
    .catch(function(error) {
      console.log('error: ', error);
    });
});

app.post('/newreview', function(req, res) {
  Reviews
    .build( req.body )
    .save()
    .then(function(body) {
      res.status(201).send(body);
    }).catch(function(error) {
      console.log('error: ', error);
    });
});

app.post('/updateAvgRating', function(req, res) {
  Artists
    .update( {
      avgRating: req.body.avgRating,
      reviewCount: sequelize.literal('reviewCount + 1')
    },
    { where: 
      { artistName: req.query.artistName }
    })
    .then(function(body) {
      res.status(201).send(body);
    })
    .catch(function(error) {
      console.log('error: ', error);
    })
})


