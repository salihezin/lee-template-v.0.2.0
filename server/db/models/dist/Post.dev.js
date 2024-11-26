"use strict";

module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Post.associate = function (models) {
    Post.belongsTo(models.User, {
      foreignKey: 'authorId'
    });
  };

  return Post;
};