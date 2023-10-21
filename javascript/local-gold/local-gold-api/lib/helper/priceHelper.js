const fileModel = require("../model/fileModel");
const cngoldApi = require("../service/cngoldApi");
const datetimeUtil = require("../util/datetimeUtil");
const config = require("../config");
const logger = require("../logger");

const cacheFolder = config.get("cacheFolder");
const goldFilePath = `${cacheFolder}data/gold.json`;
logger.info(`filepath of gold.json: ${goldFilePath}`);

// async function getPriceOneBrand(requestQueryObject) {
//   const { brandId, productId, startTime, endTime } = requestQueryObject;
//   const price = await cngoldApi.getPriceOneBrand(brandId, productId, startTime, endTime);
//   return price.data[0].data[0];
// }

// async function getPriceMoreBrand(requestBodyObject) {
//   let priceObject = {};

//   const { golds, startTime, endTime } = requestBodyObject;
//   const currentPage = 1;
//   const pageSize = Math.ceil(datetimeUtil.getDateBetween(startTime, endTime)) + 1;

//   for (const { brandId, productId } of golds) {
//     const price = await cngoldApi.getPriceOneBrand(brandId, productId, startTime, endTime, currentPage, pageSize);
//     priceObject[brandId] = price.data[0].data[0];
//   }

//   return priceObject;
// }

async function getPriceFixed(requestQueryObject) {
  console.log("getPriceFixed() - requestQueryObject", requestQueryObject);
  const start = Date.now();

  let priceArray = [];

  const { startTime, endTime } = requestQueryObject;
  const currentPage = 1;
  const pageSize = Math.ceil(datetimeUtil.getDayBetween(startTime, endTime)) + 1;

  const dateList = datetimeUtil.getDateListBetween(startTime, endTime);
  console.log(dateList);
  const goldList = fileModel.readFileSyncSimple(goldFilePath);
  for (const gold of goldList) {
    const { brandId, productId } = gold;
    const price = await cngoldApi.getPriceOneBrand(brandId, productId, startTime, endTime, currentPage, pageSize);
    const priceInfos = price.data[0].data[0].infos;

    let priceObject = {};
    priceInfos.forEach((info) => priceObject[info.updateTime] = info.price);

    let infos = [];
    for (let theDateString of dateList) {
      const updateTime = theDateString;
      const price = priceObject[theDateString] ?? 0.0;
      infos.push({updateTime, price});
    }
    priceArray.push({...gold, infos});
  }

  const elapsed = (Date.now() - start) / 1000;
  logger.info(`getPriceFixed(), elapsed ${elapsed} seconds`);

  return priceArray;
}

module.exports = {
  // getPriceOneBrand,
  // getPriceMoreBrand,
  getPriceFixed
}
