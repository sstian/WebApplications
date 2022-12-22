const app = require("./lib/app");
const config = require("./lib/config");
const logger = require("./lib/logger");

// app start
const listener = app.listen(config.get("port"), () => {
  const addy = listener.address();
  logger.info(`${app.name} started on http://${addy.address}:${addy.port}`);
});
