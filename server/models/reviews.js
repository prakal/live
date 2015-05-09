module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Review", {
    timestamps: true,
    artistName: DataTypes.STRING,
    username: DataTypes.STRING,
    review_id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    venue: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    textReview: DataTypes.TEXT
  })
}