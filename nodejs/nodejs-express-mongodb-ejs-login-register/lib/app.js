
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectMongoDB = require("./db");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  name: 'userid',           // 设置cookie的name,默认值是：connect.sid
  secret: 'snowflake',      // 参与加密的字符串（又称签名）
  saveUninitialized: false, // 是否在存储内容之前创建会话
  resave: true,             // 是否在每次请求时，强制重新保存session，即使他们没有变化
  store: MongoStore.create({
    mongoUrl: "mongodb://localhost:27017/sessions",
    touchAfter: 24 * 3600   // 修改频率（例：在24小时之内只更新一次）
  }),
  cookie: {
    httpOnly: true,         // 开启后前端无法通过JS操作cookie
    maxAge: 60 * 60 * 1000  // 设置cookie的过期时间
  }
}));

app.disable("x-powered-by");

// 配置模板引擎 ejs
app.set("view engine", "ejs");
// 配置模板目录
app.set("views", "./views");

function crud() {
  app.get("/", (req, res, next) => {
    res.send("ok");
  });

  app.use("/login", require("./controler/login"));
  app.use("/register", require("./controler/register"));
  app.use("/usercenter", require("./controler/usercenter"));
}

connectMongoDB(
  () => { crud(); },
  (err) => { console.log(err); }
);

module.exports = app;
