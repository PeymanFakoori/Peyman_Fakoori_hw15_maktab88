const express = require("express");
const app = express();
const data = require("./db/products.json");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.render("home", { data });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get(`/products/:id`, (req, res) => {
  const { name, brand, category, gender, price, imageURL } = data.find(
    (x) => x.id == req.params.id
  );
  res.render("profile", {
    name,
    brand,
    category,
    gender,
    price,
    imageURL,
  });
});
app.listen(8000, () => {
  console.log("Listening on 8000 ...");
});
