
// 校验的正则表达式
module.exports = {
  emailRegex: /^[a-zA-Z0-9_]{4,20}@[a-zA-Z0-9_]{2,10}.com$/,
  nicknameRegex: /[\u4e00-\u9fa5]/gm,
  passwordRegex: /^[a-zA-Z0-9_-]{6,20}$/
}