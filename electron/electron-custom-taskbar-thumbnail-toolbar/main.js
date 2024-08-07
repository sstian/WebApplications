const { app, BrowserWindow, nativeImage } = require("electron")
const path = require("node:path")

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile("index.html");

  //#region 自定义任务栏：缩略图工具栏
  // 【没有效果】！！

  // setThumbarButtons 方法只能在 Windows 10 1511（November Update）及更高版本上使用，并且窗口必须是可缩放的。
  // 如果尝试在不支持的系统上使用此方法，按钮将不会显示？？

  // 在 Windows，你可以在任务栏上添加一个按钮来当作应用的缩略图工具栏。
  // 它为用户提供了一种访问特定窗口命令的方式, 而无需还原或激活该窗口。

  // 此工具栏只是常见的标准工具栏控件。
  // 它最多拥有七个按钮。每个按钮的 ID、图像、工具提示和状态都定义在结构中, 然后传递给任务栏。 
  // 应用程序可以根据其当前状态的要求, 显示、启用、禁用或隐藏缩略图工具栏中的按钮。

  // 定义缩略图工具栏的按钮
  const buttons = [
    {
      tooltip: "button1",
      icon: nativeImage.createFromPath(path.join(__dirname, "snow.png")),
      click() { console.log("button1 clicked") }
    }, {
      tooltip: "button2",
      icon: nativeImage.createFromPath(path.join(__dirname, "star.png")),
      flags: ["enabled", "dismissonclick"],
      click() { console.log("button2 clicked.") }
    }
  ];
  // 设置缩略图工具栏
  // win.setThumbarButtons(buttons);

  // // 清除缩略图工具栏
  // win.setThumbarButtons([])
  //#endregion
}

app.whenReady().then(createWindow);

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
