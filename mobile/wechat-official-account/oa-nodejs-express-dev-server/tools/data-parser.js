
const xml2js = require("xml2js");

function getXmlData(req) {
  return new Promise((resolve, reject) => {
    let xmlData = "";
    req.on("data", (data) => {
      xmlData += data.toString();
    });
    req.on("end", () => {
      resolve(xmlData);
    });
  });
}

function parseXmlData(xmlData) {
  let resultData = "";
  xml2js.parseString(xmlData, {trim: true}, (err, data) => {
    if (err) {
      console.log("parseXmlData():error", err);
      resultData = "error";
    } else {
      resultData = data;
    }
  });
  return resultData;
}

function formatJsData({xml}) {
  let formatedData = {};
  for(let key in xml) {
    const value = xml[key];
    formatedData[key] = value[0];
  }
  return formatedData;
}

module.exports = {
  getXmlData,
  parseXmlData,
  formatJsData
}
