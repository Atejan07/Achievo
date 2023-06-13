const { Schema, model } = require("mongoose");


const imageSchema = new Schema({
imageUrl: String,
});

const Image = model("Image", imageSchema);


module.exports = Image;
