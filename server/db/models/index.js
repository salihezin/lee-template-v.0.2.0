const { Sequelize, DataTypes } = require('sequelize');
const seq = require('../db');
const sequelize = seq.sequelize;
const models = {};

models.NavbarMenu = require('./NavbarMenuModel')(sequelize, DataTypes);
models.Permission = require('./PermissionModel')(sequelize, DataTypes);
models.Role = require('./RoleModel')(sequelize, DataTypes);
models.RolePermission = require('./RolePermissionModel')(sequelize, DataTypes);
models.Session = require('./SessionModel')(sequelize, DataTypes);
models.User = require('./UserModel')(sequelize, DataTypes);
models.UserDetail = require('./UserDetailModel')(sequelize, DataTypes);
models.UserRoles = require('./UserRolesModel')(sequelize, DataTypes);
models.PostCategory = require('./PostCategoryModel')(sequelize, DataTypes);
models.PostModel = require('./PostModel')(sequelize, DataTypes);
models.PostCategoryLink = require('./PostCategoryLinkModel')(sequelize, DataTypes);

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
