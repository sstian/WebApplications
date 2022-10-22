/**
 * 该模块用于连接数据，判断数据库连接状态
 */

const mongoose = require("mongoose");

const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "star";

function connectMongoDB(success, failed) {
  // 1. 连接数据库
  // "mongodb://localhost:27017/star"
  mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,    // 使用新的URL解析器，解决安全性问题
    useUnifiedTopology: true  // 使用新的统一拓扑结构
  });

  // 2. 绑定数据库连接的监听
  mongoose.connection.on("open", (err) => {
    if (err) {
      const message = "connect mongodb server failed";
      console.log(message, err);
      failed(message);
    } else {
      console.log("connect mongodb server successfully");
      success();
    }
  });
}

module.exports = connectMongoDB;
