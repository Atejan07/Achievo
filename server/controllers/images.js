const Image = require("../models/images");

exports.uploadImage = async (req, res) => {
  try {
    const { path } = req.file;
    const adjustedPath = path.split("/").slice(3).join("/");
    const imageUrl = `${adjustedPath}`;
    const image = new Image({ imageUrl });
    await image.save();
    res.json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploading image" });
  }
};

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving images" });
  }
};
