const { User } = require('../models');

const getAll = async () => {
  const users = User.findAll({ attributes: { exclude: ['password'] } });

  if (!users) return [];

  return users;
};

module.exports = { getAll };
