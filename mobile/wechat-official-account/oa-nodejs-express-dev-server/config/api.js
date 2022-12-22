/**
 * 接口的统一管理
 */

const baseUrl = "https://api.weixin.qq.com/cgi-bin";

module.exports = {
  token: `${baseUrl}/token?grant_type=client_credential`
}
