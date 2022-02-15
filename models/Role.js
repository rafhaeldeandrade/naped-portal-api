module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Roles',
    },
  );

  Role.associate = (models) => {
    Role.hasMany(models.User, {
      foreignKey: 'roleId',
      as: 'users',
    });
  };

  return Role;
};
