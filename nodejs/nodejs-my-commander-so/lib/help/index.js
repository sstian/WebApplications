const path = require("path");
const fileModel = require("../../model/file-model");


const help = function (program) {
  const filepath = path.join(__dirname, "../../", "package.json");
  const packagejson = fileModel.readFileSyncSimple(filepath);

  program
    .name(packagejson.name)
    .usage("[options] command [args...]")
    .description(packagejson.description)
    .version(packagejson.version, "-v, --version", "output the version number");
};


module.exports = help;
