const model = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const SECRET_KEY = process.env.SECRET_KEY;

const create = async (req, res) => {
  const { password, email, userName } = req.body;
  const user = await model.findOne({ email });
  if (user)
    return res
      .status(400)
      .send({ error: "409", message: "User already exists." });
  try {
    if (!password) throw new Error();
    if (!userName) throw new Error();
    if (!email) throw new Error();
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = await model.create({
      ...req.body,
      password: hash,
    });
    const accessToken = jwt.sign({ _id: newUser._id }, SECRET_KEY);
    res.status(201).send({ accessToken });
  } catch (error) {
    res.status(400).send({ error, message: "Could not create user." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await model.findOne({ email: email }).populate("categories");
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({ _id: user._id }, SECRET_KEY);
    res.status(200).send({ accessToken, user });
  } catch (error) {
    res
      .status(401)
      .send({ error: "401", message: "Username or password is incorrect" });
  }
};

const profile = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error, message: "Resource not found" });
  }
};

const logout = (req, res) => {};

module.exports = { create, login, profile, logout };
