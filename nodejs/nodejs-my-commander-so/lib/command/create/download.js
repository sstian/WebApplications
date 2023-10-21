const downloadGitRepo = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");


// 下载代码模板
const download = function (url, project) {
  const spinner = ora({ color: "yellow" }).start();
  spinner.text = "代码正在下载...";

  // 参数一 repo，是要下载的仓库对应的远程地址。
  // 参数二 dest，是下载后保存的目录路径，可以是相对路径或绝对路径。如果目录不存在，则会自动创建。
  // 参数三 opts，是下载选项，可以不传递，
  //   默认为 { clone: true }，表示使用 Git 命令进行克隆；
  //   如果设置为 { clone: false }，表示直接从 Git 仓库中下载。
  // 参数四 fn，是一个回调函数。
  downloadGitRepo(`direct:${url}`, project, { clone: true }, error => {
    if (error) {
      spinner.fail("代码下载失败");
      return;
    }

    spinner.succeed("代码下载成功");
    console.log(chalk.green.bold("Done!"), chalk.yellow("you run:"));
    console.log(chalk.blue.bold("cd ") + chalk.yellow(project));
    console.log(chalk.blue.bold("npm install"));
    console.log(chalk.blue.bold("npm run dev"));
  });
};


module.exports = download;
