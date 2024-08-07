/* 预加载脚本 */

// 所有的 Node.js API接口 都可以在 preload 进程中被调用.
// 它拥有与Chrome扩展一样的沙盒。

console.log("preload.js");

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("myApi", {
  versions: process.versions,
  
  // 1. 渲染进程 --> 主进程（单向）
  writeFile: (data) => { ipcRenderer.send("write-file", data); },

  // 2. 渲染进程 <-> 主进程（双向）
  readFile: () => { return ipcRenderer.invoke("read-file"); },

  // 3. 主进程 --> 渲染进程（单向）
  getMessage: (callback) => { return ipcRenderer.on("message", callback); }

});

