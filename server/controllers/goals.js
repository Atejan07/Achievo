const model = require("../models/goals");

const getGoals = async (req, res) => {
  try {
    // console.log(req.body)
    const catId = req.params.id
    const result = await model.getGoals(catId);
    res.status = 200;
    res.json(result);
  } catch (error) {
    res.status = 400;
    console.log = { error: error.message };
  }
};

const addGoal = async (req, res) => {
  try {

    let goal = await model.addGoal(req.body, req.body.categoryId);
    res.status = 201;

    res.json(goal);
  } catch (error) {
    res.status = 400;
    res.body = { error: error.message };
  }
};

const deleteGoal = async (req, res) => {
  try {
    let id = req.params.id;
    let deleteItem = await model.deleteGoal(id);
    res.status = 200;
    res.json(deleteItem);
  } catch (error) {
    res.status = 400;
    res.body = { error: error.message };
  }
};


const getImportant = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId)
    const result = await model.getImportantGoals(userId);
    res.status = 200;
    res.json(result);
  } catch (error) {
    res.status = 400;
    console.log = { error: error.message };
  }
};




module.exports = { getGoals, addGoal, deleteGoal, getImportant };
