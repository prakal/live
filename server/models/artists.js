module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Artist", {
    artistName: {
      type: DataTypes.STRING,
      unique: true
    },
    artistPic: DataTypes.STRING,
    genre: DataTypes.STRING,
    bio: DataTypes.TEXT,
    avgRating: DataTypes.INTEGER,
    reviewcount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
}