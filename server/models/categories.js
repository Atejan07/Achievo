const { Schema, model } = require("./index");
const User = require("./user");

const categoriesSchema = new Schema({
  title: String,
  goals: [{ type: Schema.Types.ObjectId, ref: "Goals" }],
});

const Categories = model("Categories", categoriesSchema);

const getCategories = async () => {
  const result = await Categories.find({});
  return result;
};

const addCategory = async (category, userId) => {
  console.log(category);
  const cat = {
    title: category,
    goals: []
  }
  const newCategory = await Categories.create(cat);
  //  console.log(newCategory , 'zuzzzz')
  const result = await User.findOneAndUpdate(
    { _id: userId },
    { $push: { categories: newCategory._id } },
    { new: true }
  );
  //  console.log('this one', userId)
  return newCategory;
};

const deleteCategory = async (id) => {
  const deletedTopic = await Categories.findOneAndDelete({ _id: id });
  return deletedTopic;
};

module.exports = { Categories, getCategories, addCategory, deleteCategory };
