module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Tags',
    },
  );

  return Tag;
};
