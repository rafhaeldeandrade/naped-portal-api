module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('BlogpostsTags', {
      blogpostId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Blogposts',
          key: 'id',
        },
      },
      tagId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Tags',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Blogposts');
  },
};
