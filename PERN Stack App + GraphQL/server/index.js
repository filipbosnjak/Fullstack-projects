const express = require("express");
const { graphqlHTTP } = require("express-graphql"); //Binds express and graphql

const app = express();
app.use("/graphql", graphqlHTTP({}));

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "",
  });
});

app.listen(5000, () => {
  console.log("server is running...");
});
