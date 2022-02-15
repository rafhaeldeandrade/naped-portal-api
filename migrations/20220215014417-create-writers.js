module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Writers', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      roleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id',
        },
      },
      profileImage: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Writers');
  },
};
