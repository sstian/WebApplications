const axios = require("axios");
const datetimeUtil = require("../util/datetimeUtil");
const logger = require("../logger");

const config = {
  baseURL: "https://www.cngold.org/sgapp/price/gold/pageData.do",
  headers: {
    "User-Agent": "", // required
    "Accept": "*/*",
    "Host": "www.cngold.org",
    "Connection": "keep-alive"
  }
};

const client = axios.create(config);

async function getPriceOneBrand(brandId, productId, startTime, endTime, currentPage, pageSize) {
  currentPage = currentPage ?? 1;
  pageSize = pageSize ?? Math.ceil(datetimeUtil.getDateBetween(startTime, endTime)) + 1;

  logger.info(`requesting GET ${config.baseURL}
    brandId: ${brandId}, 
    productId: ${productId}, 
    startTime: ${startTime}, 
    endTime: ${endTime}, 
    currentPage: ${currentPage}, 
    pageSize: ${pageSize}`
  );

  return client.get("/", {
    params: {
      brandId, productId,
      startTime, endTime,
      currentPage, pageSize,
      // variable: "",
      // _: Date.now(),
    },
  });
}


module.exports = {
  getPriceOneBrand
};