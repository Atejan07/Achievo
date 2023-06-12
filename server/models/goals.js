const { Schema, model } = require("mongoose");
const { Categories } = require("./categories");
const User = require("./user");
const { updateImportant } = require("../controllers/goals");

const goalsSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  deadline: Date,
  important: Boolean,
  completed: { type: Boolean, default: false },
});

const Goals = model("Goals", goalsSchema);

const getGoals = async (catId) => {
  const results = await Categories.findOne({ _id: catId }).populate("goals");
  return results;
};

const addGoal = async (goal, categoryId) => {
  const newGoal = new Goals({
    title: goal.item.title,
    description: goal.item.description,
    deadline: goal.item.deadline,
    important: goal.item.important,
    completed: false,
  });

  const res = await newGoal.save();
  const result = await Categories.findOneAndUpdate(
    { _id: categoryId },
    { $push: { goals: res._id } },
    { new: true }
  );
  console.log("SAVED GOAL ID TO CAT", result);
  return res;
};


const deleteGoal = async (id) => {
  const deletedGoal = await Goals.findOneAndDelete({ _id: id });
  return deletedGoal;
};

const getImportantGoals = async (id) => {
  try {
    const user = await User.findOne({ _id: id }).populate({
      path: "categories",
      populate: { path: "goals", match: { important: true } },
    });

    const importantGoals = user.categories.reduce((goals, cat) => {
      return goals.concat(cat.goals);
    }, []);

    console.log(importantGoals);
    return importantGoals;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const updateCompleted = async (id) => {
  try {
    const user = await User.findOne({ _id: id }).populate({
      path: "categories",
      populate: { path: "goals" },
    });

    const completedGoals = user.categories.reduce((goals, cat) => {
      return goals.concat(cat.goals.filter((goal) => goal.completed));
    }, []);

    console.log(completedGoals);
    return completedGoals;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



module.exports = { Goals, getGoals, addGoal, deleteGoal, getImportantGoals };
