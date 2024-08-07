// const https = require("https");
// const fs = require("fs");
const app = require("./lib/app");
const config = require("./lib/config");
const logger = require("./lib/logger");

// app start
const listener = app.listen(config.get("port"), () => {
  const addy = listener.address();
  logger.info(`${app.name} started on http://${addy.address}:${addy.port}`);
});

// const options = {
//   key: fs.readFileSync('./cert/www.sstian.top.key'),
//   cert: fs.readFileSync('./cert/www.sstian.top.pem')
// };

// const httpsServer = https.createServer(options, app);

// httpsServer.listen(config.get("port"), "0.0.0.0", () => {
//   const { address, port } = httpsServer.address();
//   logger.info(`${app.name} started on https://${address}:${port}`);
// });
