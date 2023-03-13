const WebSocket = require("ws");

// 创建WebSocket服务端对象
const wss = new WebSocket.Server({
  port: 4000
});

// 监听客户端连接事件
// client表示客户端连接的socket对象
wss.on("connection", client => {
  console.log("client connected.");

  // 监听客户端连接对象的message事件
  // msg表示客户端发给服务端的数据
  client.on("message", msg => {
    console.log("client: " + msg);

    // 服务端发送数据给客户端
    client.send("backend: hi");
  })
});
