const express = require("express");
const usersRoutes = require("../routes/users");

const routes = express.Router();

routes.use("/users", usersRoutes);

module.exports = routes;
