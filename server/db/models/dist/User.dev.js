"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    freezeTableName: true
  });

  User.associate = function (models) {
    User.hasMany(models.Session, {
      foreignKey: 'userId'
    });
    User.hasMany(models.UserDetail, {
      foreignKey: 'userId'
    });
    User.hasMany(models.Post, {
      foreignKey: 'authorId'
    });
    User.belongsToMany(models.Role, {
      through: models.UserRoles,
      foreignKey: 'userId',
      as: 'Roles'
    });
  };

  return User;
};