const { User } = require('../models');

const getAllUsers = async () => {
  const users = User.findAll({ attributes: { exclude: ['password'] } });

  if (!users) return [];

  return users;
};

const findUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  const userNotFoundError = new Error('User not found');
  userNotFoundError.code = 'NOT_FOUND';
  if (!user) throw userNotFoundError;

  return user;
};

module.exports = { getAllUsers, findUserById };
