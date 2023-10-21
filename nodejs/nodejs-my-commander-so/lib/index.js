const help = require("./help");
const create = require("./command/create");
const version = require("./command/version");

// { command: commandfn, ... }
const register = {
  help,
  create,
  version,
};


module.exports = register;
