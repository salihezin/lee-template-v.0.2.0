module.exports = (sequelize, DataTypes) => {
    const UserRoles = sequelize.define('UserRoles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    UserRoles.associate = (models) => {
        UserRoles.belongsTo(models.User, { foreignKey: 'userId', as: 'User' });
        UserRoles.belongsTo(models.Role, { foreignKey: 'roleId', as: 'Role' });
    };

    return UserRoles;
};
