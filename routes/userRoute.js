const route = require('express').Router();
const userController = require('../controllers/userController');

route.get('/', userController.getAll);
// route.get('/:id', userController.findById);

module.exports = route;
