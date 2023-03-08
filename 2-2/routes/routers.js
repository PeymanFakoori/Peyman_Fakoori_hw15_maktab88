const express = require("express");
const router = express.Router();
const { writeFile } = require("node:fs/promises");
const data = require("../db/users.json");
const path = require("path");

router.get("/signUp", (req, res) => {
  res.render("signUp");
});
router.post("/signUp", async (res, req) => {
  (username = req), body.username;
  password = req.body.password;
  email = req.body.email;
  gender = req.body.gender;
  let passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z]).{8,}$/;
  let emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!username || !password || !email) return res.send("data require");
  if (!passCheck.test(password)) return res.send("follow password pattern");
  if (!emailCheck.test(email)) return res.send("email is not valid");
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
  username = req.body.username;
  password = req.body.password;
  if (!username || !password) return res.send("required");
  findUsername = data.find((x) => x.username == username);
  findPassword = data.find((x) => x.password == password);
  if (!username || !password) return res.send("user not found");

  res.render("profile");
});
module.exports = router;
