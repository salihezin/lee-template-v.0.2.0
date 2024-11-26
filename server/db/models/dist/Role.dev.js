"use strict";

module.exports = function (sequelize, DataTypes) {
  var Role = sequelize.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
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

  Role.associate = function (models) {
    Role.belongsToMany(models.Permission, {
      through: models.RolePermission,
      foreignKey: 'roleId',
      otherKey: 'permissionId'
    });
    Role.belongsToMany(models.User, {
      through: models.UserRoles,
      foreignKey: 'roleId',
      otherKey: 'userId',
      as: 'Users'
    });
  };

  return Role;
};