const express = require("express");
const { getAllStreams } = require("../helper/stream-helper.js");

const router = express.Router();

router.get("/", function (req, res, next) {
  getAllStreams()
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;
