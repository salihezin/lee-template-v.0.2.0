"use strict";

module.exports = function (sequelize, DataTypes) {
  var PostMedia = sequelize.define('PostMedia', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  PostMedia.associate = function (models) {
    PostMedia.belongsTo(models.Post, {
      foreignKey: 'postId'
    });
  };

  return PostMedia;
};