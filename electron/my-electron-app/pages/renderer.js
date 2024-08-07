/* 渲染进程 */

console.log("renderer.js");

const btnClickMe = document.getElementById("btnClickMe");
const input = document.getElementById("input");
const btnWriteFile = document.getElementById("btnWriteFile");
const btnReadFile = document.getElementById("btnReadFile");

btnClickMe.onclick = () => {
  console.log(window);

  const { chrome, node, electron, v8 } = window.myApi.versions;
  const about = ` chrome: ${chrome}\n node: ${node}\n electron: ${electron}\n v8: ${v8}`;
  window.alert(about);
};

// 1. 渲染进程 --> 主进程（单向）
btnWriteFile.onclick = () => {
  window.myApi.writeFile(input.value);
};

// 2. 渲染进程 <-> 主进程（双向）
btnReadFile.onclick = async () => {
  const content = await window.myApi.readFile();
  window.alert(content);
};

// 3. 主进程 --> 渲染进程（单向）
window.onload = () => {
  window.myApi.getMessage(logMessage);
}

function logMessage(event, msg) {
  console.log({ event, msg });
  window.alert(msg);
}