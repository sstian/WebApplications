
const dataParser = require("../tools/data-parser");
const replyBuilder = require("../template/reply-builder");

async function replyHandler(req) {
  // 处理数据，将 xml data 转换并格式化为 js object
  const xmlData = await dataParser.getXmlData(req);
  const jsData = dataParser.parseXmlData(xmlData);
  const userInputObject = dataParser.formatJsData(jsData);
  console.log("userInputObject", userInputObject);

  // 构建回复模板数组，并找到匹配的回复项
  const replyTemplates = replyBuilder(userInputObject);
  return replyTemplates.find(item => item.condition);
}

module.exports = replyHandler;