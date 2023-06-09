const model = require("../models/categories");

const getCategories = async (req, res) => {
  try {
    const result = await model.getCategories();
    res.status = 200;
    res.json(result);
  } catch (error) {
    res.status = 400;
    console.log = { error: error.message };
  }
};

const addCategory = async (req, res) => {
  try {
    let category = await model.addCategory(
      req.body.item.title,
      req.body.userId
    );
    res.status = 201;
    res.json(category);
  } catch (error) {
    res.status = 400;
    res.body = { error: error.message };
  }
};

const deleteCategory = async (req, res) => {
  try {
    let id = req.params.id;
    let deleteItem = await model.deleteCategory(id);
    res.status = 202;
    res.json(deleteItem);
  } catch (error) {
    res.status = 400;
    res.body = { error: error.message };
  }
};

module.exports = { getCategories, addCategory, deleteCategory };
