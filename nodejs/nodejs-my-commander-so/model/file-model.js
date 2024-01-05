const fs = require("fs");


/**
 * Retrieve the file content, string -> object.
 * @param {string} filepath 
 * @param {object} options 
 * @returns JSON Object/Array
 */
function readFileSyncSimple(filepath, options) {
  const encoding = options?.encoding || "utf-8";

  const data = fs.readFileSync(filepath, encoding);
  return JSON.parse(data);
}


module.exports = {
  readFileSyncSimple
};

