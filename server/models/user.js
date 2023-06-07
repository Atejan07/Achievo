const mongoose = require("mongoose");
const { Schema, model } = require("./index");

const userSchema = new Schema({
  userName: { String, required: true },
  gmail: { String, required: true },
  password: { String, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Categories" }],
});


const User = model('categories', userSchema)

module.exports = {User};
