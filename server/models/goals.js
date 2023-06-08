const { Schema, model } = require("./index");
const {Categories} = require('./categories');

const goalsSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  deadline: Date,
  important: Boolean,
});


const Goals = model("Goals", goalsSchema);

const getGoals= async () => {
  const res = await Goals.find({});
  return res;
  };
  
 const addGoal= async (goal, categoryId) => {
  console.log(goal);
  const newGoal= new Goals({
  title: goal.title,
  description: goal.description,
  deadline: goal.deadline,
  important: goal.important
  })
   const res = await Goals.create(newGoal);
   console.log(res._id)
   const result = await Categories.findOneAndUpdate({_id: categoryId}, {$push: { goals: res._id}}, {new: true})
   console.log(result)
   return res;
  };
  
  const deleteGoal = async (id) => {
  const deletedTopic = await Goals.findOneAndDelete({_id: id})
  return deletedTopic;
  };

module.exports = {Goals, getGoals,addGoal,deleteGoal};
