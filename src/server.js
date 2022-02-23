"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./middleware/logger.js");
const validator = require("./middleware/validator.js");
const notFound = require("./error-handlers/404.js");
const serverError = require("./error-handlers/500.js");

app.use(cors());
app.use(logger);


app.get("/person", validator, (req, res) => {
  res.json({ name: req.query.name });
});

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("*",notFound);
app.use(serverError);


function start(port) {
  app.listen(port, () => {
    console.log(`Lestening to port ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
