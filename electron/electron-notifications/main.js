const { app, BrowserWindow, Notification } = require("electron/main");

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile("index.html");
}

//#region 通知
// https://www.electronjs.org/zh/docs/latest/tutorial/notifications
// 每个操作系统都有自己的机制向用户显示通知
const NOTIFICATION_TITLE = "Basic Notification";
const NOTIFICATION_BODY = "Notification from the Main process";

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show();
}

app.whenReady().then(createWindow).then(showNotification);
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
