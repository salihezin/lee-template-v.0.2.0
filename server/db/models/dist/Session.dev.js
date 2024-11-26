"use strict";

module.exports = function (sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Session.associate = function (models) {
    Session.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };

  return Session;
};