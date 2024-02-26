const express = require("express");

const app = express();
const routes = require("./route");
const route = require("./JWT_/UserRoutes");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: true })); // help to handle
app.use("/api", routes);
app.use("/pages", route); // for register and login
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(8000, () => {
  try {
    console.log("server is live on");
  } catch (err) {
    console.log(`Server is not working due to ${err}`);
  }
});
