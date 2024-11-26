module.exports = (sequelize, DataTypes) => {
    const Carousel = sequelize.define('Carousel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        carouselUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '/#',
        },
        carouselButtonLabel: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Haberin Detayı',
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            onUpdate: DataTypes.NOW,
        },
    });

    return Carousel;
}
