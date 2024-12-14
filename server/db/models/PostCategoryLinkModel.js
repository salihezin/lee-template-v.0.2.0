module.exports = (sequelize, DataTypes) => {
  return sequelize.define('PostCategoryLink', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PostModels',
        key: 'id',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PostCategories',
        key: 'id',
      },
    },
  });
};
