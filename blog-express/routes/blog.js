var express = require("express");
const { route } = require(".");
var router = express.Router();

/* GET blog page. */
router.get("/list", function (req, res, next) {
  res.json({
    errno: 0,
    data: [1, 2, 3],
  });
});

// Get blog details
router.get("/detail", function (req, res, next) {
  res.json({
    error: 0,
    data: "okie",
  });
});

module.exports = router;
