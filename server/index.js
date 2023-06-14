const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const categoriesRouter = require("./routes/categories");
const goalsRouter = require("./routes/goals");
const imagesRouter = require("./routes/images");
const app = express();

const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(userRouter);
app.use(categoriesRouter);
app.use(goalsRouter);
app.use(imagesRouter);

const port = 3001;

app.listen(port, function () {
  console.log(`Server is running on http://localhost:${port} ✅`);
});
