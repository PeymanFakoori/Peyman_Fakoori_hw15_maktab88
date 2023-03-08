const express = require("express");
const app = express();
const route = require("./routes/routers");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", route);

app.listen(8000, () => console.log("Listening on 8000 ..."));
