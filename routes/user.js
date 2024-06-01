const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.get("/", usersController.get);
router.post("/register", usersController.register);
router.post("/login", auth, usersController.login);
router.get("/:id", usersController.getById);
router.delete("/:id", usersController.delete);

module.exports = router;
