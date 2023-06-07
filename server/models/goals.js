const { Schema, model } = require("./index");

const goalsSchema = new Schema({
  title: {String, required: true},
  goalDescription: String,
  deadline: {Date, default: Date.now()},
  important: Boolean
});

const Goals = model('Goals', goalsSchema)

module.exports = {Goals};