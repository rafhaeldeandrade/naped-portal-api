module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Tags',
      [
        {
          id: 1,
          name: 'News',
        },
        {
          id: 2,
          name: 'Spoiler',
        },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
