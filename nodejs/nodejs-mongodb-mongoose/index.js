// 引入依赖
const mongoose = require("mongoose");

// 1. 连接数据库
mongoose.connect("mongodb://localhost:27017/star", {
  useNewUrlParser: true,    // 使用新的URL解析器，解决安全性问题
  useUnifiedTopology: true  // 使用新的统一拓扑结构
});

// 2. 绑定数据库连接的监听
mongoose.connection.on("open", (err) => {
  if (err) {
    console.log("connect mongodb server failed", err);
  } else {
    console.log("connect mongodb server successfully");

    // 3. 操作数据库
    // 引入模式对象
    const Schema = mongoose.Schema;

    // 创建约束对象
    const studentSchemna = new Schema({
      stu_id: { type: String, required: true, unique: true }, // 限制为字符串、必填项、唯一的
      name: { type: String, required: true },
      age: { type: Number, required: true },
      sex: { type: String, required: true },
      hobby: [String],  // 限制只能为字符串数据
      info: Schema.Types.Mixed, // 接收所有类型
      date: { type: Date, default: Date.now() },
      deleted: { type: String, default: "N" }
    });

    // 创建模型对象：生成某个集合对应的模型对象
    const studentModel = mongoose.model("students", studentSchemna);

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
    studentModel.find({ name: "jack" }, (err, data) => {
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
});



