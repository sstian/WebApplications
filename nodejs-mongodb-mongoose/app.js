/**
 * 模块化入口
 */

// 引入数据库连接模块
const connectMongoDB = require("./db/db");
// 引入学生模型
const studentModel = require("./model/studentModel");
// 引入教师模型
const teacherModel = require("./model/teacherModel");

function crud() {
  // CRUD
  // 新增 - C
  // studentModel.create({
  //   stu_id: "001", name: "monitor", age: 5, sex: "m", hobby: ["gitls", "code", "basketball"], info: "a man like wind"
  // }, (err, data) => {
  //   if (err) console.log(err);
  //   else console.log(data);
  // });
  // studentModel.create({
  //   stu_id: "002", name: "jack", age: 18, sex: "m", hobby: ["code", "code", "code"], info: "programmer"
  // }, (err, data) => {
  //   if (err) console.log(err);
  //   else console.log(data);
  // });
  // studentModel.create({
  //   stu_id: "003", name: "sherry", age: 16, sex: "w", hobby: ["yuga", "dance", "jujutsu"], info: "beauty"
  // }, (err, data) => {
  //   if (err) console.log(err);
  //   else console.log(data);
  // });

  // 查询 - R
  studentModel.find({ name: "sherry" }, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
  studentModel.findOne({ name: "tom" }, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });

  // 更新 - U
  // studentModel.updateOne({ name: "jack" }, { age: 20 }, (err, data) => {
  //   if (err) console.log(err);
  //   else console.log(data);
  // });

  // 删除 - D
  // studentModel.deleteMany({ age: 20 }, (err, data) => {
  //   if (err) console.log(err);
  //   else console.log(data);
  // });
}

connectMongoDB((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect ok");
    // 3. 操作数据库
    crud();
  }
});

