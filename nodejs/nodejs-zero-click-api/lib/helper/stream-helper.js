const fs = require("fs");
const logger = require("../logger");
const config = require("../config");

const cacheFolder = config.get("cacheFolder");
const filepath = `${cacheFolder}data\\stream.json`;
logger.info(`filepath of stream.json: ${filepath}`);

function readFileSync() {
  return fs.readFileSync(filepath, "utf8", (err, data) => {
    if (err) { throw err; }
  });
}

function writeFileSync(data) {
  fs.writeFileSync(filepath, data, "utf8");
}

async function getAllStreams() {
  return JSON.parse(readFileSync());
}


module.exports = {
  getAllStreams
}
