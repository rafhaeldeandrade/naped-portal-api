const route = require('express').Router();
const userController = require('../controllers/userController');

route.get('/', userController.getAllUsers);
route.get('/:id', userController.findUserById);

module.exports = route;
