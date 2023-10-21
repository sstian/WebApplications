const { readFileSyncSimple } = require("../model/file-model");
const logger = require("../logger");
const config = require("../config");

const cacheFolder = config.get("cacheFolder");
const filepath = `${cacheFolder}data\\stream.json`;
logger.info(`filepath of stream.json: ${filepath}`);

async function getAllStreams() {
  return readFileSyncSimple(filepath);
}


module.exports = {
  getAllStreams
}
