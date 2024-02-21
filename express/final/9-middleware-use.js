const express = require("express");
const logger = require('./logger')
const authorize = require('./authorize')
const app = express();
app.use([logger, authorize])
// req => middleware => res

app.get("/",(req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("products");
});
app.get("/api/items", (req, res) => {
  res.send("items");
});

app.listen(5000, () => {
  console.log("Listen on 5000...");
});
