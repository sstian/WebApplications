/**
 * 该模块用于创建特定的模型对象
 */

const mongoose = require("mongoose");

// 引入模式对象
const Schema = mongoose.Schema;

// 创建约束对象
const citySchemna = new Schema({
  code: String,
  province: String,
  city: String,
  country: String,
  name: String,
  level: Number
});

// 创建模型对象：生成某个集合对应的模型对象
module.exports = mongoose.model("cities", citySchemna);
