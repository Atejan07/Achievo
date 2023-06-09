const { Schema, model } = require("./index");

const userSchema = new Schema({
  userName: { type: String},
  email: { type: String, required: true },
  password: { type: String, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Categories" }],
});

const User = model("User", userSchema);

module.exports = User;
