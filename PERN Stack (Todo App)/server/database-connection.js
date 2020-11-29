const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "todo_database",
});

module.exports = pool; //By using this we can run queries from our js file
