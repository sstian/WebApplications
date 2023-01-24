const express = require("express");
const history = require("connect-history-api-fallback");

const app = express();

// 这么一加，后端后端路由收到了影响 404 Cannot GET /person
app.use(history());
app.use(express.static(__dirname + "/static"));

app.get("/person", (req, res) => {
  console.log("get /person");
  const person = { name: "tom", age: 18 };
  res.send(person);
})

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server started at port 5000 ...");
});