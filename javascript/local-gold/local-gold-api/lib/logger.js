const { createLogger, format, transports } = require("winston");
const config = require("./config");

const customFormat = format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
});

module.exports = (function () {
  return createLogger({
    level: config.get("logLevel"),
    format: format.combine(
      format.splat(),
      format.metadata({ fillExcept: ["level", "message", "label", "timestamp"] }),
      format.timestamp(),
      // format.json(),
      customFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: "log/output.log" })
    ]
  });
})();