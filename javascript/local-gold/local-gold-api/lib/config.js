const convict = require("convict");
const convictValidator = require("convict-format-with-validator");
const winston = require("winston");
const yaml = require("js-yaml");

function Config() {
  convict.addParser({ extension: ["yml", "yaml"], parse: yaml.load });
  convict.addFormat(convictValidator.ipaddress);

  const configSchema = convict({
    env: {
      doc: "the application environment",
      format: ["development", "test", "production"],
      default: "development",
      env: "SNOW_NODE_ENV"
    },
    logLevel: {
      doc: "log level",
      format: Object.keys(winston.config.syslog.levels),
      default: "info",
      env: "SNOW_LOG_LEVEL"
    },
    // ip: {
    //   doc: "the ip adderss to bind",
    //   format: "ipaddress",
    //   default: "127.0.0.1",
    //   env: "SNOW_NODE_IP"
    // },
    port: {
      doc: "port to listen on",
      format: Number,
      default: 9990,
      arg: "port",
      env: "SNOW_NODE_PORT"
    },
    cacheFolder: {
      doc: "cache folder to store data",
      format: String,
      default: "",
      env: "SNOW_CHCHE_FOLDER"
    },
  });

  const env = configSchema.get("env");
  const file = `./config/${env}.yml`;
  configSchema.loadFile(file);
  configSchema.validate({ allowed: "strict" });

  return configSchema;
}

module.exports = Config();
