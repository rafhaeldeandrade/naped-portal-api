const { Category } = require('../models');

const getAllCategories = async () => {
  const categories = Category.findAll();

  return categories;
};

const findCategoryById = async (id) => {
  const category = await Category.findOne({
    where: { id },
  });

  const categoryNotFoundError = new Error('Category not found');
  categoryNotFoundError.code = 'NOT_FOUND';
  if (!category) throw categoryNotFoundError;

  return category;
};

module.exports = { getAllCategories, findCategoryById };
