/**
 * 微信服务器验证开发者服务器的有效性
 */

const sha1 = require("sha1");
const config = require("../config/account");
const replyHandler = require("./reply-handler");

module.exports = () => {
  return async (req, res, next) => {
    console.log("request-handler...");
    const { signature, timestamp, nonce, echostr } = req.query;
    const { token } = config;

    const sha1str = sha1([timestamp, nonce, token].sort().join(""));
    if (sha1str !== signature) {
      res.send("禁止发送非法请求！");
      return;
    }

    // sha1str === signature
    switch (req.method) {
      case "GET":
        console.log("GET: 微信服务器验证请求有效");
        res.end(echostr);
        return;
      case "POST":
        console.log("POST");
        const reply = await replyHandler(req);
        res.end(reply.replyData);
        return;
      default:
        break;
    }

  };
};
