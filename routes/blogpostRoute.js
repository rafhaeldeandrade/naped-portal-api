const route = require('express').Router();
const blogpostController = require('../controllers/blogpostController');

route.get('/', blogpostController.getAllBlogposts);
route.get('/:id', blogpostController.findBlogpostById);

module.exports = route;
