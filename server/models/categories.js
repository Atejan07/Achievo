const { Schema, model } = require("./index");

const categoriesSchema = new Schema({
  category: String,
  goals: [{ type: Schema.Types.ObjectId, ref: "Goals" }],
});

const Categories = model('Categories', categoriesSchema)

module.exports = Categories;
