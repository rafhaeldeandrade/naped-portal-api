const rescue = require('express-rescue');
const userService = require('../services/userService');

const getAll = rescue(async (_req, res) => {
  const users = await userService.getAll();

  return res.status(200).json(users);
});

module.exports = { getAll };
