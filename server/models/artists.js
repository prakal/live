var db = require('../config');
var Sequelize = require('sequelize');
// var User = require('./user');

var Artist = db.define('artist', {
  tableName: 'artists',
  timestamps: true,
  artist_id: { 
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  artistName: {
    type: Sequelize.STRING,
    unique: true
  },
  artistPic: Sequelize.STRING,
  genre: Sequelize.STRING,
  bio: Sequelize.TEXT,
  avgRating: Sequelize.INTEGER
});


Artist.sync({force: true}).then(function () {
  return Artist.create({
    artistName: 'U2',
    artistPic: 'https://i.scdn.co/image/bbf6684084d0f444b92789abcdb66bb16c7d2c43',
    genre: 'Rock',
    avgRating: 5
  });
})
.then(function () {
  return Artist.create({
    artistName: 'Metallica',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 4
  });
});

module.exports = Artist;