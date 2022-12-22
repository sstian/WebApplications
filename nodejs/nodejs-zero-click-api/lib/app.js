const bodyParser = require("body-parser");
const boom = require("@hapi/boom");
const cors = require("cors");
const express = require("express");
const addRequestId = require("express-request-id")();
const fs = require("fs");
const morgan = require("morgan");
const swaggerStats = require("swagger-stats");
const swaggerUi = require("swagger-ui-express");
const yaml = require("js-yaml");
const config = require("./config");
const logger = require("./logger");


// disable ssl checks
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "O";
// set the app dir
process.env.APP_DIR = process.mainModule.paths[0].split("node_modules")[0].slice(0, -1);
logger.info(`process.env.APP_DIR=${process.env.APP_DIR}`);

// log configuration settings
// logger.info(JSON.parse(config.toString()));
logger.info(`config = ${config.toString()}`);

// create child loggers from existing loggers to pass metadata overrides
function addRequestScopedLogger(req, res, next) {
  req.logger = logger.child({ requestId: req.id });
  next();
}

// create express application
const app = express();
// generate uuid for request and add it to X-Request-Id header
app.use(addRequestId);
app.use(addRequestScopedLogger);
// parse application/json
app.use(bodyParser.json());
// enable all cors requests
app.use(cors());

// enhance security a bit
app.disable("x-powered-by");

// expose OpenAPI documentation
const swaggerSpec = yaml.load(fs.readFileSync("./api/swagger/swagger.yaml", "utf8"));
app.get("/", (req, res) => res.redirect("/docs"));
app.use("/docs", function (req, res, next) {
  req.swaggerDoc = swaggerSpec;
  next();
}, swaggerUi.serve, swaggerUi.setup());

// expose API telemtry and APM
app.use(swaggerStats.getMiddleware({ swaggerSpec: swaggerSpec }));

// log requests and responses
app.use(morgan("combined"));

app.use("/api/v1/info/streams", require("./controller/stream"));
// ...

// error handler for all routes
app.use(function (err, req, res, next) {
  logger.error(err.stack);
  if (!err.output) { err = boom.badImplementation(err); }
  return res.status(err.output.statusCode).json(err.output.payload);
});

module.exports = app;
