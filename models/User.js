module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      profileImage: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users',
    },
  );

  User.associate = (models) => {
    User.belongsTo(models.Role, {
      foreignKey: 'roleId',
      as: 'role',
    });
  };

  return User;
};
