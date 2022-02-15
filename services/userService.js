const { User, Blogpost } = require('../models');

const getAllUsers = async () => {
  const users = User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const findUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  const userNotFoundError = new Error('User not found');
  userNotFoundError.code = 'NOT_FOUND';
  if (!user) throw userNotFoundError;

  return user;
};

const findBlogpostsByUserId = async (userId) => {
  const blogposts = await Blogpost.findAll({ where: { userId } });

  const blogpostNotFoundError = new Error(`User doesn't have any post`);
  blogpostNotFoundError.code = 'NOT_FOUND';
  if (!blogposts.length) throw blogpostNotFoundError;

  return blogposts;
};

module.exports = { getAllUsers, findUserById, findBlogpostsByUserId };
