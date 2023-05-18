// index.js
const express = require("express");
const app = express();

app.get("/deploy", (req, res) => {
  res.send(req.query.name);
});
app.get("/deploy/hi", (req, res) => {
  res.send("hihihi");
});
app.get("/deploy/end", (req, res) => {
  const Sequelize = require("sequelize");

  const config = {
    username: "codingon",
    password: "codingon",
    database: "codingon",
    host: "db-lesson",
    dialect: "mysql",
  };

  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
  sequelize
    .sync()
    .then(() => {
      console.log("DB connect success");
    })
    .catch((err) => {
      throw err;
    });
});

app.listen(8000, () => {
  console.log("Server is open, port : 8000");
});
