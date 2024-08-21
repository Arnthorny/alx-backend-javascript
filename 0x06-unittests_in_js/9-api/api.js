#!/usr/bin/node
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const paramId = req.params.id;
  res.send(`Payment methods for cart ${paramId}`);
});

const port = 7865;

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
