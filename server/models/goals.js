const { Schema, model } = require("./index");

const goalsSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  deadline: Date ,
  important: Boolean,
});

const Goals = model("Goals", goalsSchema);

module.exports = Goals;
