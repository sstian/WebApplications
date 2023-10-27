const fs = require("fs");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.end("hello world")
});

const cache = [];
/* 提取到外部每次程序只会读取一次 提高性能 */
const file = fs.readFileSync(__dirname + "/index.html", "utf-8");
app.get("/index", (req, res) => {
  /* return buffer */
  cache.push(file);
  res.end(file)
  /* return stream */;
  // fs.createReadStream(__dirname + "/index.html").pipe(res)
});

app.listen(3000);
