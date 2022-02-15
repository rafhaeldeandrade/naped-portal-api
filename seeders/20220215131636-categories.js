module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          id: 1,
          name: 'Séries',
        },
        {
          id: 2,
          name: 'Filmes',
        },
        {
          id: 3,
          name: 'Animes',
        },
        {
          id: 4,
          name: 'Games',
        },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
