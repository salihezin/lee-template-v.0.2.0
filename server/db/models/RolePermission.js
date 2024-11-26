module.exports = (sequelize, DataTypes) => {
    const RolePermission = sequelize.define('RolePermission', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        permissionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    RolePermission.associate = (models) => {
        RolePermission.belongsTo(models.Role, { foreignKey: 'roleId' });
        RolePermission.belongsTo(models.Permission, { foreignKey: 'permissionId' });
    };

    return RolePermission;
};
