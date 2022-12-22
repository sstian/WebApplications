
const fs = require("fs");
const rp = require("request-promise-native");
const api = require("../config/api");
const { appid, appsecret } = require("../config/account");

class AccessToken {

  file_path = "./access_token.json";

  async get() {
    const url = `${api.token}&appid=${appid}&secret=${appsecret}`;
    let result = await rp({ method: "GET", url, json: true });
    if (result) {
      // 过期时间设置为提前5分钟
      console.log("getAccessToken() - request weixin server success");
      result.expires_timestamp = Date.now() + (+result.expires_in) * 1000 - 300000;
      return result;
    } else {
      console.log("getAccessToken() - request weixin server error!");
      return "error";
    }
  }

  save(accessToken) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.file_path, JSON.stringify(accessToken), (err) => {
        if (err) {
          console.log("saveAccessToken() - fs.writeFile() error!", err);
          reject();
        } else {
          console.log("saveAccessToken() - fs.writeFile() success");
          resolve();
        }
      });
    });
  }

  read() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file_path, (err, data) => {
        if (err) {
          console.log("readAccessToken() - fs.readFile() error!", err);
          resolve(null);
        } else {
          console.log("readAccessToken() - fs.readFile() success!", err);
          resolve(JSON.parse(data));
        }
      });
    });
  }

  isValid(accessToken) {
    console.log("current access token", accessToken);
    console.log("Date.now()", Date.now())
    return (accessToken.expires_timestamp > Date.now());
  }

  // 用于获取access_token
  async fetch() {
    let readResult = await this.read();
  
    if(readResult) {
      console.log("本地存在access_token");
      if (this.isValid(readResult)) {
        console.log("本地存在access_token，并且有效");
        return readResult;
      } else {
        console.log("本地存在access_token，但过期，重新获取...");
        let newAccessToken = await this.get();
        await this.save(newAccessToken);
        return newAccessToken;
      }
    } else {
      let firstData = await this.get();
      await this.save(firstData);
      return firstData;
    }
  }
}

(async () => {
  let token = new AccessToken();
  let accessToken = await token.fetch();
  console.log("accessToken", accessToken);
})();
