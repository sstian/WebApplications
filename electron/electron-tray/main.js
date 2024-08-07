const { app, Tray, Menu, nativeImage } = require("electron");

// 改变变量的作用域，防止用来存储 Tray 的变量被垃圾回收。
let tray = null;
app.whenReady().then(() => {
  //#region 托盘
  // 创建托盘图标，并且其拥有系统通知区域的独立上下文菜单。
  // 在 Windows 上，托盘通常位于右下角。
  // 在 MacOS 和 Ubuntu, 托盘将位于屏幕右上角上，靠近你的电池和 wifi 图标。 
  const icon = nativeImage.createFromPath("logo.ico");
  tray = new Tray(icon);

  const contextMenu = Menu.buildFromTemplate([
    { label: "Item1", sublabel: "apple", type: "normal", },
    { label: "Item2", type: "separator" },
    { label: "Item3", type: "radio", checked: true },
    { label: "Item4", type: "checkbox", checked: true }
  ]);
  tray.setContextMenu(contextMenu);

  tray.setToolTip("This is my application");
  tray.setTitle("This is my title");
  //#endregion
});
