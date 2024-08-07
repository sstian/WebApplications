const { app, BrowserWindow, nativeImage } = require("electron")

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile("index.html");

  //#region 自定义任务栏：图标叠加
  // 在 Windows，任务栏按钮可以使用小型叠加层显示应用程序状态。

  // 图标叠加作为状态的上下文通知, 旨在否定需要一个单独的通知区域状态图标来将该信息传达给用户。 
  // 叠加图标用于提供重要的、长期的状态或通知, 如网络状态、messenger 状态或新邮件。 
  // 不应向用户显示不断变化的叠加或动画。
  
  const overlay = nativeImage.createFromPath("snow.ico");
  const description = "Description for overlay";
  win.setOverlayIcon(overlay, description);
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
