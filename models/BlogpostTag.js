module.exports = (sequelize, _DataTypes) => {
  const BlogpostTag = sequelize.define(
    'BlogpostTag',
    {},
    {
      timestamps: false,
      tableName: 'BlogpostsTags',
    },
  );

  BlogpostTag.associate = (models) => {
    models.Blogpost.belongsToMany(models.Tag, {
      through: models.BlogpostTag,
      foreignKey: 'blogpostId',
      otherKey: 'tagId',
      as: 'tags',
    });

    models.Tag.belongsToMany(models.Blogpost, {
      through: models.BlogpostTag,
      foreignKey: 'tagId',
      otherKey: 'blogpostId',
      as: 'blogposts',
    });
  };

  return BlogpostTag;
};
