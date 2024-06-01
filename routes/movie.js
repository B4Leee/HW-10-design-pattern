const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController");
const upload = require("../config/multer");

router.post("/upload/:id", upload.single("photo"), MovieController.upload);

router.get("/", MovieController.get);
router.get("/:id", MovieController.getById);

module.exports = router;
