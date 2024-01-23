const express = require("express");
const postControllers = require("../controllers/post.Controller");
const router = express.Router();

// Defining route as /posts/post
router.get("/post", postControllers.index);

module.exports = router;