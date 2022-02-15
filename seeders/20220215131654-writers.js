module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Writers',
      [
        {
          id: 1,
          name: 'Admin',
        },
        {
          id: 2,
          name: 'Writer',
        },
        {
          id: 3,
          name: 'Moderator',
        },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Writers', null, {});
  },
};
