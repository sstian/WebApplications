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

// 响应GET请求 - 返回json类型数据
/**
 * @api {get} /get_person 获取某个人
 * @apiGroup 人员管理
 * @apiName admin
 * @apiVersion 1.0.0
 * @apiParam {string} id 人的唯一标识 - query参数
 * @apiSuccessExample {json} 请求成功示例：
 * {
 *   "status": 1,
 *   "message": "success",
 *   "data": {
 *     "id": 2,
 *     "name": "jack",
 *     "age": 18
 *   }
 * }
 */
app.get("/get_person", (req, res) => {
  console.log("somebody requested /get_person");
  const person = { name: "jack", age: 18, sex: "male" };
  res.send(JSON.stringify(person));
});


// 响应POST请求 - 接收body参数
/**
 * @api {post} /post_test 添加某个人
 * @apiGroup 人员管理
 * @apiName admin2
 * @apiVersion 1.0.0
 * @apiSuccessExample {json} 请求成功示例：
 * {
 *   "status": 1,
 *   "message": "success",
 *   "data": {
 *     "id": 2,
 *     "name": "jack",
 *     "age": 18
 *   }
 * }
 */
app.post("/post_test", (req, res) => {
  console.log("somebody requested /post_test -- body args is ", req.body);
  res.send("hello post_test");
});

// 监听
app.listen(8000, err => {
  if (!err) {
    console.log("server starts ok. url is as follows:");
    console.log("http://127.0.0.1:8000");
  }
});
