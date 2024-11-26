"use strict";

module.exports = function (sequelize, DataTypes) {
  var PostCategory = sequelize.define('PostCategory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW
    }
  });

  PostCategory.associate = function (models) {
    PostCategory.belongsTo(models.Post, {
      foreignKey: 'postId'
    });
  };

  return PostCategory;
};