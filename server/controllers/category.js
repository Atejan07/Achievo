const model = require("../models/categories");

const getCategories = async (req, res) => {
  try {
    // console.log(req.body)
    const result = await model.getCategories()
    res.status = 200;
    res.json(result);
  } catch (error) {
    res.status = 400;
    console.log = { error: error.message };
  }
};

const addCategory = async (req, res) => {
  try {
    console.log(req.body, "body");
    let category = await model.addCategory(req.body.title, req.body.userId);
    res.status = 201;
    //console.log(category)
    res.json(category);
  } catch (error) {
    res.status = 400;
    res.body = { error: error.message };
  }
};

const deleteCategory = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    let deleteItem = await model.deleteCategory(id);
    res.status = 202;
    console.log(deleteItem);
    res.json(deleteItem);
  } catch (error) {
    res.status = 400;
    res.body = { error: error.message };
  }
};

module.exports = { getCategories, addCategory, deleteCategory };
