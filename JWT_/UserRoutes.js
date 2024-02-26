const express = require("express");
const route = express.Router();
const bcrypt = require("bcryptjs");
const secretkey = "mohnish";
// const secretkey = process.env.SECRETKEY;
const jwt = require("jsonwebtoken");
const auth = require("../Middleware/auth");

const saltRound = 10;
let arr = [];
// we are using it as a data base;
route.post("/register", (req, res) => {
  const data = req.body;
  // body parser

  const account = arr.find((item) => item.email === data.email);
  if (account) {
    return res.send({ msg: "This email is already exist" });
  }
  // encrypt the password by hashing the password
  const hashpass = bcrypt.hashSync(data.password, saltRound);
  data.password = hashpass;
  arr.push(data);
  console.log(arr);

  // jwt token
  const token = jwt.sign({ user: data.email }, secretkey);
  res.send({ msg: "user registered successfully", token: token });
});
//  LOGIN PART
route.post("/login", async (req, res) => {
  const loginData = req.body;
  console.log(loginData);
  const account = arr.find((item) => item.email === loginData.email);
  console.log(account, "account");

  if (account) {
    const login = await bcrypt.compare(loginData.password, account.password);
    console.log(login, "logedin");
    if (login) {
      const token = jwt.sign({ user: loginData.email }, secretkey);
      return res.send({ msg: "user logged in successfully", token: token });
    } else {
      return res.send("password is incorrect");
    }

    // res.send("user logged in successfully");
  } else {
    return res.send("user is not register");
  }
});

route.get("/home", (req, res) => {
  res.send({ msg: "welcome to home" });
});
{
}
route.get("/dashboard", auth, (req, res) => {
  res.send({ msg: "wecome to dashboard" });
});
module.exports = route;
