const express = require("express");
const userModel = require("../model/userModel");

const router = express.Router();

// 展示用户中心页面 - UI路由
router.get("/", (req, res, next) => {
  // const { _id } = req.cookies;

  // 1. 获取客户端通过cookie携带过来的session编号
  // 2. 根据session编号匹配session容器
  // 3. 若匹配上：拿到session容器里的数据，去使用
  // 4. 若未匹配上：驳回，去登录
  // req携带过来的是cookie: { key: userid, value: 经过加密的session编号 }
  const { _id } = req.session;

  if (!_id) {
    res.redirect("/login");
    return;
  }

  // 查找数据库
  userModel.findOne({ _id }, (err, data) => {
    // 1. 与数据库交互产生了错误；2. 用户非法篡改了cookie
    if (err || !data) {
      res.redirect("login");
      return;
    }

    // 用户携带了有效的id
    res.render("usercenter", { data });
  });
});

module.exports = router;