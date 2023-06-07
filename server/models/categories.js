const mongoose = require("mongoose");
const { Schema, model } = require("./index");

const categoriesSchema = new Schema({
  category: String,
  goals: [{ type: Schema.Types.ObjectId, ref: "Goals" }],
});

const Categories = model('categories', categoriesSchema)

module.exports = {Categories};
