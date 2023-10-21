const help = require("./help");
const action = require("./action");


const create = function (program) {
  help(program);

  program
    // 自定义 create 命令，接收一个必填参数 project，[other...] 表示其他参数
    .command("create <project> [other...]")
    // 别名，运行 so create ... <=> so crt ...
    .alias("crt")
    // 描述
    .description("create project with framework")
    // 执行逻辑
    .action(action);
};


module.exports = create;
