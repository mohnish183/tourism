const TourismData = require("./routingController");
const routes = require("express").Router();
routes.get("/tourism", TourismData);

module.exports = routes;
