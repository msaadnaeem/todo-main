const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const todo = require("./routes/todo");

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
//ROUTES//
app.use("/todos", todo);
