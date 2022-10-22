/**
 * 该模块用于创建特定的模型对象
 */

const mongoose = require("mongoose");

// 引入模式对象
const Schema = mongoose.Schema;

// 创建约束对象
const userSchemna = new Schema({
  email: { type: String, required: true, unique: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  deleted: { type: Boolean, default: null },
});

// 创建模型对象：生成某个集合对应的模型对象
module.exports = mongoose.model("users", userSchemna);
