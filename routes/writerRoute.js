const route = require('express').Router();
const userController = require('../controllers/writerController');

route.get('/', userController.getAll);
route.get('/:user/posts', userController.findPostsByWriter);
route.get('/:user', userController.findById);

module.exports = route;
