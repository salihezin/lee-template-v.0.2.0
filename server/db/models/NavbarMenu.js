module.exports = (sequelize, DataTypes) => {
    const NavbarMenu = sequelize.define('NavbarMenu', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        mainMenu: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    NavbarMenu.associate = (models) => {
        NavbarMenu.belongsTo(models.NavbarMenu, {as: 'ParentMenu', foreignKey: 'parentId' });
        NavbarMenu.hasMany(models.NavbarMenu, {as: 'Submenus', foreignKey: 'parentId' });
    };

    return NavbarMenu;
}
