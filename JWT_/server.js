const express = require("express");

const app = express();
const cors = require("cors");
const routes = require("./UserRoutes");
// const port = process.env.PORT;
// fetch the port number from .env file

app.use(cors({ origin: "*" }));
app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: true })); // help to handle special character of link bar
app.use("/pages", routes);

app.listen(5000, () => {
  console.log("server is running finedcdcd");
});
