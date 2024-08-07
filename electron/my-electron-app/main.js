/* 主进程 */

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

const writeFile = (event, data) => {
  console.log({ event, data });
  fs.writeFileSync("./temp.txt", data);
};

const readFile = (event) => {
  console.log({ event });
  const content = fs.readFileSync("./temp.txt").toString();
  console.log({ content });
  return content
};

// 创建窗口
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    // 通过预加载脚本从渲染器访问Node.js
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // 进程通信
  // 1. 渲染进程 --> 主进程（单向）
  ipcMain.on("write-file", writeFile);

  // 2. 渲染进程 <-> 主进程（双向）
  ipcMain.handle("read-file", readFile);

  // win.loadURL("https://www.baidu.com");
  // 加载本地页面
  win.loadFile("./pages/index.html")

  // 3. 主进程 --> 渲染进程（单向）
  setTimeout(() => win.webContents.send("message", "how are you?"), 3000);
};

// 在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口
app.on("ready", () => {
  console.log("main.js: app.on(ready)");
  createWindow();

  // 如果没有窗口打开则打开一个窗口 (macOS)
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 关闭所有窗口时退出应用 (Windows & Linux)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

