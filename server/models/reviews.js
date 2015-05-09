var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Review", {
    tableName: 'reviews',
    artistName: DataTypes.STRING,
    username: DataTypes.STRING,
    // review_id: { 
    //   type: Sequelize.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    venue: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    textReview: DataTypes.TEXT
  });
}