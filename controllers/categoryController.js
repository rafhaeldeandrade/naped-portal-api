const rescue = require('express-rescue');
const categoryService = require('../services/categoryService');

const getAllCategories = rescue(async (_req, res) => {
  const categories = await categoryService.getAllCategories();

  return res.status(200).json(categories);
});

const findCategoryById = rescue(async (req, res) => {
  const { id } = req.params;
  const category = await categoryService.findCategoryById(id);

  return res.status(200).json(category);
});

module.exports = { getAllCategories, findCategoryById };
