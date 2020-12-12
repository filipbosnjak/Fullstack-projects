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

//Add new todo
app.post("/todos", async (req, res, next) => {
  res.status(200).json({
    message: "Succesful post",
  });
  try {
    console.log(req.body);
    const { description } = req.body;
    console.log(pool);
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)", //$1 meaning that description is what we want to add to the table
      [description]
    );
    res.json();
  } catch (error) {
    console.error(error.message);
  }
});

//Get all todos
app.get("/todos", async (req, res) => {
  try {
    //
    // const allTodos = [
    //   {
    //     todo_id: 1,
    //     description: "Todo 1",
    //   },
    //   {
    //     todo_id: 2,
    //     description: "Todo 2",
    //   },
    //   {
    //     todo_id: 3,
    //     description: "Todo 3",
    //   },
    // ];
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
    // -> this we get in all todos
    // {command: "SELECT", rowCount: 13, oid: null, rows: Array(13), fields: Array(2), …}
    // RowCtor: null
    // command: "SELECT"
    // fields: (2) [{…}, {…}]
    // oid: null
    // rowAsArray: false
    // rowCount: 13
    // rows: (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // _parsers: (2) [null, null]
    // _types: {_types: {…}, text: {…}, binary: {…}}
  } catch (error) {
    console.error(error.message);
  }
});
//Get specific todo

app.get("/todos/:id", async (req, res, next) => {
  try {
    res.status(200).json({
      message: `Request for: Todo ${req.params}`,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("server is running...");
});
