#!/usr/bin/node
const express = require("express");

const app = express();
app.use(express.json()); // for parsing application/json

app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const paramId = req.params.id;
  res.send(`Payment methods for cart ${paramId}`);
});

app.get("/available_payments", (req, res) => {
  respObj = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(respObj);
});

app.post("/login", (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

const port = 7865;

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
