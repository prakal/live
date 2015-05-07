var db = require('../config');
var Sequelize = require('sequelize');
var Artist = require('./artists.js')

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
    username: 'Mark Martinez',
    artistName: 'U2',
    rating: 4,
    venue: 'Madison Square Garden, NYC',
    textReview: 'I really loved seeing U2 in concert! They are incredible!!!'
  });
})
.then(function () {
  // Table created
  return Review.create({
    username: 'Rob Stark',
    artistName: 'U2',
    rating: 5,
    venue: 'SAP Center, San Jose',
    textReview: 'U2 live! What more can I say!! Way better than the red wedding!'
  });
})
.then(function () {
  // Table created
  return Review.create({
    username: 'Jamie Lannister',
    artistName: 'Amy Winehouse',
    rating: 2,
    venue: 'The Kitchen',
    textReview: 'One of her last gigs. Wish I could say I enjoyed it. But I did not.'
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