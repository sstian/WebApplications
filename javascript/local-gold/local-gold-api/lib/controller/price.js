const express = require("express");
const priceHelper = require("../helper/priceHelper.js");

const router = express.Router();

// router.get("/", function (req, res, next) {
//   // const { brandId, productId, startTime, endTime } = req.query;
//   priceHelper.getPriceOneBrand(req.query)
//     .then(data => res.json(data))
//     .catch(next);
// });

router.get("/fixed", function (req, res, next) {
  // const { startTime, endTime } = req.query;
  priceHelper.getPriceFixed(req.query)
    .then(data => res.json(data))
    .catch(next);
});

// router.post("/", function (req, res, next) {
//   priceHelper.getPriceMoreBrand(req.body)
//     .then(data => res.json(data))
//     .catch(next);
// });

module.exports = router;
