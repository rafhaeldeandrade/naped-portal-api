module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Blogposts', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      subtitle: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      writerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Writers',
          key: 'id',
        },
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
      postImage: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Blogposts');
  },
};
