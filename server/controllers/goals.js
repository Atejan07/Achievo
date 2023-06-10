const model = require("../models/goals");

const getGoals = async (req, res) => {
  try {
    // console.log(req.body)
    const result = await model.getGoals();
    res.status = 200;
    res.json(result);
  } catch (error) {
    res.status = 400;
    console.log = { error: error.message };
  }
};

const addGoal = async (req, res) => {
  try {
    console.log(req.body.categoryId);
    let goal = await model.addGoal(req.body, req.body.categoryId);
    res.status = 201;
    //console.log(goal)
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

module.exports = { getGoals, addGoal, deleteGoal };
