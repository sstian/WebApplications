export default class SocketService {

  // 单例模式
  static instance = null;
  // 和服务器连接的socket对象
  ws = null;
  // 存储回调函数
  callbackMapping = {};

  // 获取实例
  static get Instance() {
    if (!this.instance) {
      this.instance = new SocketService();
    }
    return this.instance;
  }


  // 连接服务器
  connect() {
    if (!window.WebSocket) {
      return console.log("your browser is not support WebSocket!");
    }
    this.ws = new WebSocket("ws://localhost:3000");

    this.ws.onopen = () => {
      console.log("connect server is ok.");
    };

    this.ws.onclose = () => {
      console.log("connect server is failed.");
    };

    this.we.onmessage = () => {
      console.log("get message from server.");
      console.log(msg.data);

      // const receiveData = JSON.parse(msg.data);
      // const socketType = receiveData.socketType;
      // if(this.callbackMapping[socketType]) {
      //   this.callbackMapping[socketType].call(this, receiveData.data);
      // }
    };
  }

  registerCallback(socketType, callBack) {
    this.callbackMapping[socketType] = callBack;
  }

  unregisterCallback(socketType, callBack) {
    this.callbackMapping[socketType] = null;
  }

  // 向服务端发送数据
  send(data) {
    this.ws.send(JSON.stringify(data));
  }

}