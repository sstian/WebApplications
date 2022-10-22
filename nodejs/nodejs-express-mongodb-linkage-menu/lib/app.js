
const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./db");
const cityModel = require("./model/cityModel");

const app = express();
app.use(cors());

function crud() {
  app.get("/", (req, res, next) => {
    res.send("ok");
  });

  app.get("/provinces", (req, res, next) => {
    console.log("get /provinces");

    cityModel.find({ level: 1 }, { province: 1, name: 1, _id: 0 }, (err, data) => {
      if (err) {
        res.send({ status: 0, err });
      } else {
        res.send({ status: 1, data });
      }
    });
  });

  // /cities?province=xx
  app.get("/cities", (req, res, next) => {
    const { province } = req.query;
    console.log(`get /cities?province=${province}`);

    cityModel.find({ level: 2, province }, { city: 1, name: 1, _id: 0 }, (err, data) => {
      if (err) {
        res.send({ status: 0, err });
      } else {
        res.send({ status: 1, data });
      }
    });
  });

  // /countries?province=xx&city=yy
  app.get("/countries", (req, res, next) => {
    const { province, city } = req.query;
    console.log(`get /countries?province=${province}&citi=${city}`);

    cityModel.find({ level: 3, province, city }, { country: 1, name: 1, _id: 0 }, (err, data) => {
      if (err) {
        res.send({ status: 0, err });
      } else {
        res.send({ status: 1, data });
      }
    });
  });
}

connectMongoDB(
  () => {
    crud();
  },
  (err) => { console.log(err); }
);

module.exports = app;
