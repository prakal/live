var db = require('../config');
var Sequelize = require('sequelize');
var artist = require('./reviews.js')

var Review = db.define('review', {
  tableName: 'reviews',
  timestamps: true,
  artistName: Sequelize.STRING,
  username: Sequelize.STRING,
  review_id: { 
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  venue: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  textReview: Sequelize.TEXT
});

// Review.belongsTo(artist)



Review.sync({force: true}).then(function () {
  // Table created
  return Review.create({
    rating: 1,
    venue: 'Madison Square Gardasdasdasden, NYC',
    textReview: 'I really ldsadasdasoved seeing U2 in concert! They are incredible!!!'
  });
})
.then(function () {
  // Table created
  return Review.create({
    rating: 3,
    venue: 'Madison Squadsadasdre Garden, NYC',
    textReview: 'I really lovdsadsadaed seeing U2 in concert! They are incredible!!!'
  });
})
.then(function () {
  // Table created
  return Review.create({
    rating: 2,
    venue: 'Madisodasdasn Square Garden, NYC',
    textReview: 'I readadafsfsally loved seeing U2 in concert! They are incredible!!!'
  });
})
.then(function () {
  // Table created
  return Review.create({
    rating: 1,
    venue: 'Madison Squgsdgare Gardegsd, NYC',
    textReview: 'I reallgsdgsy loved gsdgsseeing U2 in concert! They are incredible!!!'
  });
});

module.exports = Review;