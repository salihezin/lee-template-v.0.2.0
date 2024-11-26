const { Sequelize, DataTypes } = require('sequelize');
const seq = require('../db');
const sequelize = seq.sequelize;
const models = {};

models.Carousel = require('./Carousel')(sequelize, DataTypes);
models.NavbarMenu = require('./NavbarMenu')(sequelize, DataTypes);
models.Permission = require('./Permission')(sequelize, DataTypes);
models.Post = require('./Post')(sequelize, DataTypes);
models.PostCategory = require('./PostCategory')(sequelize, DataTypes);
models.PostMedia = require('./PostMedia')(sequelize, DataTypes);
models.Role = require('./Role')(sequelize, DataTypes);
models.RolePermission = require('./RolePermission')(sequelize, DataTypes);
models.Session = require('./Session')(sequelize, DataTypes);
models.User = require('./User')(sequelize, DataTypes);
models.UserDetail = require('./UserDetail')(sequelize, DataTypes);
models.UserRoles = require('./UserRoles')(sequelize, DataTypes);

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
