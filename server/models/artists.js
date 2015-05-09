var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Artist", {
    tableName: 'artists',
    artist_id: { 
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    artistName: {
      type: DataTypes.STRING,
      unique: true
    },
    artistPic: DataTypes.STRING,
    genre: DataTypes.STRING,
    bio: DataTypes.TEXT,
    avgRating: DataTypes.INTEGER,
    reviewCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0    
    }
  });
}