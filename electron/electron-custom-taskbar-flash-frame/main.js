const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile("index.html");

  //#region 自定义任务栏：闪烁框
  // 在 Windows 上，你可以突出显示任务栏按钮以获得用户的关注。
  // 这与在 macOS 上 dock 弹跳图标相似。

  // 通常, 会闪现一个窗口, 通知用户该窗口需要注意, 但是该窗口当前没有键盘焦点。

  win.once("focus", () => win.flashFrame(false));
  win.flashFrame(true);

  // // 关闭闪烁
  // win.flashFramework(false);
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
