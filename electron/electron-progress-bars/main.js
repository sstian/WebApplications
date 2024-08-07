const { app, BrowserWindow } = require("electron/main");

let progressInterval;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile("index.html");

  //#region 进度条
  // https://www.electronjs.org/zh/docs/latest/tutorial/progress-bar
  // 进度条使窗口能够向用户提供其进度信息，而无需被切换到前台。
  // 
  // 在Windows环境下，进度条被显示在任务栏按钮上。
  // 在MacOS环境下，进度条将被显示在dock栏图标上
  // 在Linux系统中，Unity桌面也有相似的特性，能在Launcher上显示进度条。
  // 注意：在 Windows 上，每个窗口都可以有自己的进度条，而在 macOS 和 Linux（unity桌面）上，同一个应用程序只能有一个进度条。
  // 
  // 将参数设置为负值 (例如， -1) 将删除 progress bar。 
  // 设定值大于 1，在 Windows 中将表示一个不确定的进度条 ，或在其他操作系统中显示为 100%。 
  // 一个不确定的 progress bar 仍然处于活动状态，但不显示实际百分比，并且用于当您不知道一个操作需要多长时间才能完成的情况。
  const INCREMENT = 0.03;
  const INTERVAL_DELAY = 100; // ms

  let c = 0;
  progressInterval = setInterval(() => {
    // update progress bar to next value
    // values between 0 and 1 will show progress, >1 will show indeterminate or stick at 100%
    win.setProgressBar(c);

    // increment or reset progress bar
    if (c < 2) {
      c += INCREMENT;
    } else {
      c = (-INCREMENT * 5); // reset to a bit less than 0 to show reset state
    }
  }, INTERVAL_DELAY);
  //#endregion
}

app.whenReady().then(createWindow);

// before the app is terminated, clear both timers
app.on("before-quit", () => {
  clearInterval(progressInterval);
});

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
