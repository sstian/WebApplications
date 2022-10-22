/**
 * 该模块用于创建特定的模型对象
 */

const mongoose = require("mongoose");

// 引入模式对象
const Schema = mongoose.Schema;

// 创建约束对象
const teacherSchemna = new Schema({
  tea_id: { type: String, required: true, unique: true }, // 限制为字符串、必填项、唯一的
  name: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  hobby: [String],  // 限制只能为字符串数据
  info: Schema.Types.Mixed, // 接收所有类型
  date: { type: Date, default: Date.now() },
  deleted: { type: String, default: "N" }
});

// 创建模型对象：生成某个集合对应的模型对象
module.exports = mongoose.model("teachers", teacherSchemna);
