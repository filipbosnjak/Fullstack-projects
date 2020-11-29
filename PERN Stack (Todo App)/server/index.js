const express = require("express");
const cors = require("cors");
const pool = require("./database-connection"); //From here we interact with a database

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Routes

//Create Todo

//Check the route
app.get("/todos", (req, res, next) => {
  res.status(200).json({
    message: "Connected to http://localhost:5000/todos",
  });
});
app.post("/todos", async (req, res, next) => {
  res.status(200).json({
    message: "Succesful post",
  });
  try {
    console.log(req.body);
    const { description } = req.body;
    // const newTodo = await pool.query(
    //   "INSERT INTO todo (description) VALUES($1"
    // );
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("server is running...");
});
