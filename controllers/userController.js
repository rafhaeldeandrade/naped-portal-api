const rescue = require('express-rescue');
const userService = require('../services/userService');

const getAll = rescue(async (_req, res) => {
  const users = await userService.getAll();

  return res.status(200).json(users);
});

const findById = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);

  return res.status(200).json(user);
});

module.exports = { getAll, findById };
