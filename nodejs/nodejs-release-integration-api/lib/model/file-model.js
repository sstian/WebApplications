const fs = require("fs");
const readline = require("readline");
const logger = require("../logger");

/**
 * Retrieve the file content, string -> object.
 * @param {string} filepath 
 * @param {object} options 
 * @returns JSON Object/Array
 */
function readFileSyncSimple(filepath, options) {
  const encoding = options?.encoding || "utf8";

  const data = fs.readFileSync(filepath, encoding);
  return JSON.parse(data);
}

/**
 * 
 * @param {string} filepath 
 * @param {object} options 
 * @returns {Promise} the first line
 */
async function readFirstLine(filepath, options) {
  const encoding = options?.encoding || "utf8";
  const fileReadStream = fs.createReadStream(filepath, { encoding });
  const reader = readline.createInterface({
    input: fileReadStream,
    crlfDelay: Infinity
  });

  try {
    for await (const line of reader) return line;
    return "";  // if the file is empty
  }
  finally {
    fileReadStream.destroy(); // destroy file stream
  }
}

/**
 * Store content into file, object -> string.
 * @param {string} filepath 
 * @param {object | Array} content 
 * @param {object} options 
 */
function writeFileSyncSimple(filepath, content, options) {
  const space = options?.space || 2;
  const encoding = options?.encoding || "utf8";
  const data = JSON.stringify(content, null, space);
  fs.writeFileSync(filepath, data, encoding);
}

/**
 * Copy before writing
 * @param {string} filepath 
 * @param {object | Array} content 
 * @param {object} options 
 */
function writeFileSyncSafe(filepath, content, options) {
  // copy as cache file and name added suffix .<timestamp>.cache
  // e.g. weekly_20230310.json.20230309152504.cache
  const timestamp = "2023";  //getDateTimeStamp(new Date());
  const filepathCache = `${filepath}.${timestamp}.cache`;
  fs.copyFileSync(filepath, filepathCache);

  try {
    // write file
    writeFileSyncSimple(filepath, content, options);
    // write success, remove the cache file
    // 'force: true - exceptions will be ignored if "path' does not exist.
    fs.rmSync(filepathCache, { force: true });
    return { status: 200, statusText: "OK", message: "Write file ok. filepath=${filepath}" };
  } catch (err) {
    // write failed, restore: remove source file, rename cache file as source file
    logger.error(err.stack);
    fs.rmSync(filepath, { force: true });
    fs.renameSync(filepathCache, filepath);
    const message = "Write file failed. filepath=${filepath}\r\n${err.stack}";
    return { status: 500, statusText: "Internal Server Error", message };
  }
}

/**
 * Append content into file.
 * Synchronously append data to a file, creating the file if it does not yet exist.
 * @param {string} filepath 
 * @param {string} content 
 * @param {object} options 
 */
function appendFileSyncSimple(filepath, content, options) {
  const encoding = options?.encoding || "utf8";
  fs.appendFileSync(filepath, content, encoding);
}

module.exports = {
  readFileSyncSimple,
  readFirstLine,
  writeFileSyncSimple,
  writeFileSyncSafe,
  appendFileSyncSimple
};

