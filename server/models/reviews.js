module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Review", {
    artistName: DataTypes.STRING,
    username: DataTypes.STRING,
    venue: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    textReview: DataTypes.TEXT
  });
}