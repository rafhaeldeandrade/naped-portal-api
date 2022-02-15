module.exports = (sequelize, DataTypes) => {
  const Blogpost = sequelize.define(
    'Blogpost',
    {
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      postImage: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'Blogposts',
    },
  );

  Blogpost.associate = (models) => {
    Blogpost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    Blogpost.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };

  return Blogpost;
};
