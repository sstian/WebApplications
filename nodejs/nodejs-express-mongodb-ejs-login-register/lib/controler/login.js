const express = require("express");
const sha1 = require("sha1");
const regex = require("../helper/regex");
const message = require("../helper/message");
const userModel = require("../model/userModel");

const router = express.Router();

// 展示登录页面 - UI路由
router.get("/", (req, res, next) => {
  res.render("login", { errmsg: {} });
});

// 处理用户的登录请求 - 业务路由
router.post("/", (req, res, next) => {
  console.log("post /login");
  console.log("req.body = ", req.body);
  // 1. 获取用户输入
  const { email, password } = req.body;

  // 2. 校验格式
  let errmsg = {};
  if (!regex.emailRegex.test(email)) {
    errmsg.emailErr = message.emailErr;
  }
  if (!regex.passwordRegex.test(password)) {
    errmsg.passwordErr = message.passwordErr;
  }

  // 判断是否不为空对象，表示存在输入错误的项
  if (JSON.stringify(errmsg) !== "{}") {
    console.log("3");
    res.render("login", { errmsg });
    return;
  }

  // 3. 查找数据库：有结果，登录成功；无结果，登录失败
  userModel.findOne({ email, password: sha1(password) }, (err, data) => {
    if (err) {
      console.log(err);
      errmsg.networkErr = message.networkErr;
      res.render("login", { errmsg });
      return;
    }
    if (!data) {
      errmsg.loginErr = message.loginErr;
      res.render("login", { errmsg });
      return;
    }

    // res.redirect("http://www.baidu.com");

    // "种"一个cookie，并跳转
    // res.cookie("_id", data._id, {maxAge: 60 * 1000});

    // 1. 为请求开辟一个session会话存储空间
    // 2. 将客户端与服务器沟通产生的数据放入session会话存储空问
    // 3. 获取session会话存储空间的id
    // 4. 返回给客户端一个cookie，包含着：上一步的id
    // 备注：如果使用了一些第三方库，以上四步，一行代码就可以完成。
    req.session._id = data._id.toString();

    res.redirect("/usercenter");
  });
});

module.exports = router;