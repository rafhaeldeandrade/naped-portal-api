module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Roles',
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
        {
          id: 4,
          name: 'Reader',
        },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
