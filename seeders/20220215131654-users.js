// Why argon2?
// https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#argon2id

const argon2 = require('argon2');

const argon2Options = {
  type: argon2.argon2id,
  memoryCost: 2 ** 10 * 15, // 15 MB
  timeCost: 2,
  parallelism: 1,
};

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          name: 'Admin',
          username: 'Admin',
          email: 'admin@admin.com',
          password: await argon2.hash('souadmin123', argon2Options),
          roleId: 1,
          profileImage: null,
        },
        {
          id: 2,
          name: 'Writer',
          username: 'Writer',
          email: 'writer@writer.com',
          password: await argon2.hash('souwriter123', argon2Options),
          roleId: 2,
          profileImage: null,
        },
        {
          id: 3,
          name: 'Moderator',
          username: 'Moderator',
          email: 'moderator@moderator.com',
          password: await argon2.hash('soumod123', argon2Options),
          roleId: 3,
          profileImage: null,
        },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
