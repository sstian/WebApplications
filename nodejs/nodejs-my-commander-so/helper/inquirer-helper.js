const inquirer = require('inquirer')


const inquirerUtil = async function () {
  // 数组中每一个对象表示一个问题
  // type: 问题类型
  // message: 问题
  // name: 接收答案的键
  // choices: 选项
  // prefix: 前缀
  // suffix: 后缀
  const answers = await inquirer.prompt([
    // 提示用户输入 input
    {
      type: "input",
      message: "请输入一个数字：",
      name: "number",
      validate: function (value) {
        const done = this.async();
        if (value > 18) {
          done(null, true);
        }
        done("数字要大于18！");
      },
    },

    // 与用户确认 confirm
    {
      type: "confirm",
      message: "是否男性？",
      name: "gender",
      prefix: "系统管理员：",
      suffix: "必答题",
    },

    // 无序单选 list
    {
      type: "list",
      message: "请选择一种水果：",
      name: "fruit",
      choices: ["苹果", "芒果", "人参果"],
    },

    // 有序单选 rawlist
    {
      type: "rawlist",
      message: "请选择一种水果：",
      name: "fruitraw",
      choices: ["西瓜", "甜瓜", "哈密瓜"],
    },

    // 带索引的单选 expand
    {
      type: "expand",
      message: "请选择一种水果：",
      name: "fruitexpand",
      choices: [
        {
          key: "c",
          name: "车厘子",
          value: "cherry",
        },
        {
          key: "o",
          value: "orange",
          name: "橙子"
        },
        {
          key: "p",
          value: "peach",
          name: "桃子"
        },
      ],
    },

    // 多选 checkbox
    {
      type: "checkbox",
      message: "选择颜色：",
      name: "color",
      choices: [
        {
          name: "红色",
        },
        new inquirer.Separator("--- 自定义的分隔符 ---"),
        {
          name: "黄色",
        },
        new inquirer.Separator(),
        {
          name: "蓝色",
          checked: true,
        },
        {
          name: "绿色",
        },
      ],
    },

    // 输入密码 password
    {
      type: "password",
      message: "请输入密码：",
      name: "password",
    },

    // 编辑器（可多行输入） editor
    {
      type: "editor",
      message: "请输入备注：",
      name: "content",
    },
  ]);

  console.log(answers);
};


module.exports = inquirerUtil;
