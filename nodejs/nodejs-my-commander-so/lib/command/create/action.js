const inquirer = require("inquirer");
const config = require("../../../config");
const download = require("./download");


const action = async (project, args) => {
  // 命令行的执行逻辑
  const answers = await inquirer.prompt([{
    type: "list",
    message: "请选择你所使用的框架",
    choices: Object.keys(config.framework),
    name: "framework",
  }]);

  // 下载代码模板
  download(config.framework[answers.framework], project);
}


module.exports = action;
