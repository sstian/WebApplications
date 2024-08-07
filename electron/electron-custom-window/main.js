const { app, BrowserWindow } = require("electron/main");

let progressInterval;

function createWindow() {
  //#region 自定义窗口：创建无边框窗口
  const win = new BrowserWindow({ frame: false });
  //#endregion

  win.loadFile("index.html");
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
