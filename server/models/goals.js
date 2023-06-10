const { Schema, model } = require("./index");
const { Categories } = require("./categories");

const goalsSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  deadline: Date,
  important: Boolean,
});

const Goals = model("Goals", goalsSchema);

const getGoals = async (catId) => {
  const results = await Categories.findOne({_id: catId}).populate('goals')
  console.log(results)
  return results;
};

const addGoal = async (goal, categoryId) => {
  console.log('POST GOAL', goal);
  const newGoal = new Goals({
    title: goal.item.title,
    description: goal.item.description,
    deadline: goal.item.deadline,
    important: goal.item.important,
  });
  
  const res = await Goals.create(newGoal);
  console.log(res)
    
  
  console.log('CREATED GOAL ID', res._id);
  const result = await Categories.findOneAndUpdate(
    { _id: categoryId },
    { $push: { goals: res._id } },
    { new: true }
  );
  console.log('SAVED GOAL ID TO CAT', result);
  return res;
};

const deleteGoal = async (id) => {
  const deletedTopic = await Goals.findOneAndDelete({ _id: id });
  return deletedTopic;
};

module.exports = { Goals, getGoals, addGoal, deleteGoal };
