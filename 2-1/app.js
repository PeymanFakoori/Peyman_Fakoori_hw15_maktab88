const express = require("express");
const app = express();
const products = require("./db/products.json");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.render("home", { products });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(8000, () => {
  console.log("Listening on 8000 ...");
});
