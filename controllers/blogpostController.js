const rescue = require('express-rescue');
const blogpostService = require('../services/blogpostService');

const getAllBlogposts = rescue(async (_req, res) => {
  const blogposts = await blogpostService.getAllBlogposts();

  return res.status(200).json(blogposts);
});

const findBlogpostById = rescue(async (req, res) => {
  const { id } = req.params;
  const blogpost = await blogpostService.findBlogpostById(id);

  return res.status(200).json(blogpost);
});

module.exports = { getAllBlogposts, findBlogpostById };
