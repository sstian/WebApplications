const express = require("express");
const sha1 = require("sha1");
const regex = require("../helper/regex");
const message = require("../helper/message");
const userModel = require("../model/userModel");

const router = express.Router();

// 展示注册页面 - UI路由
router.get("/", (req, res, next) => {
  res.render("register", {errmsg: {}});
});

// 处理用户的注册请求 - 业务路由
router.post("/", (req, res, next) => {
  console.log("post /register");
  console.log("req.body = ", req.body);
  // 1. 获取用户输入
  const { email, nickname, password, repassword } = req.body;
  /**
   * 2. 校验数据的合法性
   * 校验成功：去数据库中查找该邮箱是否注册过；
   *   注册过：提示用户邮箱已被占用
   *   未注册过：写入数据库
   * 校验失败：提示用户
   */
  // 收集错误的对象
  let errmsg = {};
  if (!regex.emailRegex.test(email)) {
    errmsg.emailErr = message.emailErr;
  }
  if (!regex.nicknameRegex.test(nickname)) {
    errmsg.nicknameErr = message.nicknameErr;
  }
  if (!regex.passwordRegex.test(password)) {
    errmsg.passwordErr = message.passwordErr;
  }
  if (password !== repassword) {
    errmsg.repasswordErr = message.repasswordErr;
  }

  // 判断是否不为空对象，表示存在输入错误的项
  if (JSON.stringify(errmsg) !== "{}") {
    res.render("register", {errmsg});
    return;
  }

  // 查询数据库
  userModel.findOne({ email }, (err, data) => {
    if (err) {
      console.log(err);
      res.send(message.networkErr);
      return;
    }
    if (data) {
      // TODO: 引入计数模块 - 当达到敏感阈值，触发安全性机制
      console.log(`邮箱为 ${email} 的用户注册失败：邮箱重复`);
      res.send("该邮箱已被注册，请更换邮箱");
      return;
    }

    userModel.create({ email, nickname, password: sha1(password) }, (err, data) => {
      if (err) {
        // TODO: 引入告警模块 - 当达到敏感阈值，触发告警
        console.log(err);
        res.send(message.networkErr);
        return;
      }

      res.redirect(`/login`);
    });
  });

});

module.exports = router;