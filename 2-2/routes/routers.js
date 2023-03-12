const express = require("express");
const router = express.Router();
const { writeFile } = require("node:fs/promises");
const data = require("../db/users.json");
const path = require("path");

router.get("/signUp", (req, res) => {
  res.render("signUp");
});
router.post("/signUp", async (req, res) => {
  console.log(req.body);
  if (!req.body.username || !req.body.password || !req.body.email)
    return res.send("data require");
  let emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z]).{8,}$/;
  if (!passCheck.test(req.body.password))
    return res.send("follow password pattern");
  if (!emailCheck.test(req.body.email)) return res.send("email is not valid");
  if (req.body.gender == "choose") req.body.gender = "not-set";

  data.push(req.body);
  await writeFile(
    path.join(__dirname, "../db/users.json"),
    JSON.stringify(data)
  );
  res.render("login");
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", (req, res) => {
  if (!req.body.username || !req.body.password) return res.send("required");
  let findUsername = data.find((x) => x.username == req.body.username);
  let findPassword = data.find((x) => x.password == req.body.password);
  if (!findUsername || !findPassword) return res.send("user not found");
  const { username, password, email, gender } = data.find(
    (x) => x.username == req.body.username
  );
  res.render("profile", {
    username,
    password,
    email,
    gender,
  });
});
module.exports = router;
