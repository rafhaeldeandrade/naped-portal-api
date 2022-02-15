const { Blogpost } = require('../models');

const getAllBlogposts = async () => {
  const blogposts = Blogpost.findAll();

  return blogposts;
};

const findBlogpostById = async (id) => {
  const blogpost = await Blogpost.findOne({
    where: { id },
  });

  const blogpostNotFoundError = new Error('Blogpost not found');
  blogpostNotFoundError.code = 'NOT_FOUND';
  if (!blogpost) throw blogpostNotFoundError;

  return blogpost;
};

module.exports = { getAllBlogposts, findBlogpostById };
