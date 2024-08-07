const { app, BrowserWindow } = require("electron/main");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

//#region 自定义任务栏：缩略图工具栏
// Windows 允许应用程序自定义一个菜单栏，当用户右键单击任务栏中的应用图标及可显示该列表。 该上下文菜单被称为 JumpList。
// 应用程序的“任务”列表的制定是基于程序的功能，用户能用它做一些快捷操作。 任务应当是与上下文无关的，因为它不需要程序运行就可以工作。
// 它们应该是用户在这个应用上使用最多的操作。
// 推荐“任务”列表内容是静态的。 

// 设置用户任务
app.setUserTasks([
  {
    program: process.execPath,
    arguments: "--new-window",
    iconPath: process.execPath,
    iconIndex: 0,
    title: "New Window",
    description: "Create a new window"
  }
]);

// // 清空任务列表
// app.setUserTasks([]);
//#endregion

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
