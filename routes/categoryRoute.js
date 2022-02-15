const route = require('express').Router();
const categoryController = require('../controllers/categoryController');

route.get('/', categoryController.getAllCategories);
route.get('/:id', categoryController.findCategoryById);

module.exports = route;
