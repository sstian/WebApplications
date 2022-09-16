// 引入express
const express = require("express");
const cors = require("cors");

// 创建express实例
const app = express();

// 使用中间件解析urlencoded编码形式的请求体参数
// app.use(express.urlencoded({extended: true}));
app.use(express.json());
// 使用中间件解决跨域问题
app.use(cors());

// 暴露静态资源
app.use(express.static(__dirname + "/src"));

// 响应GET请求 - 接收query参数
app.get("/get_test", (req, res) => {
  console.log("somebody requested /get_test -- query args is ", req.query);
  res.send("hello get_test");
});

// 响应GET请求 - 接收params参数
app.get("/get_test2/:name/:age", (req, res) => {
  console.log("somebody requested /get_test2 -- params args is ", req.params);
  res.send("hello get_test2");
});

// 响应GET请求 - 返回json类型数据
app.get("/get_person", (req, res) => {
  console.log("somebody requested /get_person");
  const person = { name: "jack", age: 18, sex: "male" };
  res.send(JSON.stringify(person));
});

// 响应GET请求 - 返回json类型数据
app.get("/get_test_jquery", (req, res) => {
  console.log("somebody requested /get_test_jquery");
  const car = { name: "vw", price: "25w" };
  res.send(JSON.stringify(car));
});

// 响应POST请求 - 接收body参数
app.post("/post_test", (req, res) => {
  console.log("somebody requested /post_test -- body args is ", req.body);
  res.send("hello post_test");
});

// 监听
app.listen(8000, err => {
  if (!err) {
    console.log("ajax server starts ok. url is as follows:");
    console.log("http://127.0.0.1:8000/ajax.html");
    console.log("http://127.0.0.1:8000/ajax-jquery.html");
  }
});
