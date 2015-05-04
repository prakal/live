var db = require('../config');
var Sequelize = require('sequelize');

var Review = db.define('review', {
  tableName: 'reviews',
  timestamps: true,
  review_id: { 
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  venue: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  textReview: Sequelize.TEXT
});

// Room.hasOne(User)

Review.sync({force: true}).then(function () {
  // Table created
  return Review.create({
    rating: 4,
    venue: 'Madison Square Garden, NYC',
    textReview: 'I really loved seeing U2 in concert! They are incredible!!!'
  });
});

module.exports = Review;