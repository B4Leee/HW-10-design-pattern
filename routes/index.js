// routes/index.js
const express = require("express");
const router = express.Router();

const userRoutes = require("./user");
const movieRoutes = require("./movie");

router.use("/users", userRoutes);
router.use("/movies", movieRoutes);

module.exports = router;
