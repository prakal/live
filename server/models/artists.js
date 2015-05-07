var db = require('../config');
var Sequelize = require('sequelize');
var Review = require('./reviews.js');

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
  avgRating: Sequelize.INTEGER,
  reviewCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0    
  }
});

// Artist.hasMany(Review);

Artist.sync({force: true}).then(function () {
  return Artist.create({
    artistName: 'U2',
    artistPic: 'https://i.scdn.co/image/bbf6684084d0f444b92789abcdb66bb16c7d2c43',
    genre: 'Rock',
    avgRating: 5,
    bio: 'U2 are an Irish rock band from Dublin. Formed in 1976, the group consists of Bono (vocals and guitar), The Edge (guitar, keyboards, and vocals), Adam Clayton (bass guitar), and Larry Mullen Jr.'
  });
})
.then(function () {
  return Artist.create({
    artistName: 'Metallica',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 3
  });
})
.then(function () {
  return Artist.create({
    artistName: 'Blink 182',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 4
  });
})
.then(function () {
  return Artist.create({
    artistName: 'KISS',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 2
  });
})
.then(function () {
  return Artist.create({
    artistName: 'Lil Wayne',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 1
  });
})
.then(function () {
  return Artist.create({
    artistName: 'Shit Band',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 4
  });
})
.then(function () {
  return Artist.create({
    artistName: 'Diana Ross',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 4
  });
})
.then(function () {
  return Artist.create({
    artistName: 'Nelly',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 4
  });
})
.then(function () {
  return Artist.create({
    artistName: 'Amy Winehouse',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 4
  });
})
.then(function () {
  return Artist.create({
    artistName: 'Sum 41',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 4
  });
})
.then(function () {
  return Artist.create({
    artistName: 'The Strokes',
    artistPic: 'https://i.scdn.co/image/15d9ccb37a96d49f69f44f999fb1e9e46f9b3ccd',
    genre: 'Hard Rock',
    avgRating: 4
  });
});

module.exports = Artist;