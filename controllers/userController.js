const rescue = require('express-rescue');
const userService = require('../services/userService');

const getAllUsers = rescue(async (_req, res) => {
  const users = await userService.getAllUsers();

  return res.status(200).json(users);
});

const findUserById = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await userService.findUserById(id);

  return res.status(200).json(user);
});

module.exports = { getAllUsers, findUserById };
