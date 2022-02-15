module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Tags',
      [
        {
          blogpostId: 1,
          tagId: 1,
        },
        {
          blogpostId: 1,
          tagId: 2,
        },
        {
          blogpostId: 2,
          tagId: 1,
        },
        {
          blogpostId: 3,
          tagId: 2,
        },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
