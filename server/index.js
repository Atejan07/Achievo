const express = require ('express');
const cors = require('cors');
const userRouter = require('./routes/user')
const categoriesRouter = require('./routes/categories')
const goalsRouter = require('./routes/goals')
const app = express();

  
  

// 1st always cors
app.use(cors());
// 2nd always json
app.use(express.json());
// 3rd always router
app.use(userRouter);
app.use(categoriesRouter);
app.use(goalsRouter);

  
  

//MUST PUT ON 3001 -> BECAUSE REACT RUNS ON 3000
const port = 3001;

  

app.listen(port, function () {
console.log(`Server is running on http://localhost:${port} ✅`)
})