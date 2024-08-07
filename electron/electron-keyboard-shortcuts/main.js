const { app, BrowserWindow, Menu, MenuItem } = require("electron/main");
// const { app, BrowserWindow, globalShortcut  } = require("electron/main");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile("index.html");
};

// https://www.electronjs.org/zh/docs/latest/tutorial/keyboard-shortcuts
//#region 键盘快捷键：本地快捷键
const menu = new Menu();
menu.append(new MenuItem({
  label: "Electron",
  submenu: [{
    role: "help",
    accelerator: process.platform === "darwin" ? "Alt+Cmd+I" : "Alt+Shift+I",
    click: () => { console.log("Electron rocks!") }
  }]
}));

Menu.setApplicationMenu(menu);

app.whenReady().then(createWindow);
//#endregion

//#region 键盘快捷键：全局快捷键
// app.whenReady().then(() => {
//   globalShortcut.register("Alt+CommandOrControl+I", () => {
//     console.log("Electron loves global shortcuts!")
//   });
// }).then(createWindow);
//#endregion

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  };
});
