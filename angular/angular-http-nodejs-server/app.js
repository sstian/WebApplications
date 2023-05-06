const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// express 允许跨域
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("X-Powered-By", "4.18.2");
  if (req.method === "OPTIONS") res.send(200);
  else next();
});

app.get("/", function(req, res, next) {
  console.log("app.get /");
  res.json({"msg": "index page"});
});

app.post("/login", function(req, res, next) {
  console.log("app.post /login");
  console.log(req.body);
  res.json({"msg": "login success"});
});

app.get("/news", function(req, res, next) {
  console.log("app.get /news");
  res.jsonp({"msg": "a news"});
});

app.listen(3200, () => {
  console.log(`angular-http-nodejs-server start at http://localhost:3200/`);
});
