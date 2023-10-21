
function statusFunction(code, text) {
  return { code, text };
}

const HttpStatus = {
  // 1XX - Informational
  Continue: statusFunction(100, "Continue"),

  // 2XX - Success
  // OK: {code: 200, text: "OK"},
  OK: statusFunction(200, "OK"),
  Created: statusFunction(201, "Created"),
  NoContent: statusFunction(204, "No Content"),

  // 3XX - Redirection
  MovedPermanently: statusFunction(301, "Moved Permanently"),
  NotModified: statusFunction(304, "Not Modified"),

  // 4XX - Client Error
  BadRequest: statusFunction(400, "Bad Request"),
  Unauthorized: statusFunction(401, "Unauthorized"),
  Forbidden: statusFunction(403, "Forbidden"),
  NotFound: statusFunction(404, "Not Found"),
  
  // 5XX - Server Error
  InternalServerError: statusFunction(500, "Internal Server Error"),
  ServiceUnavailable: statusFunction(503, "Service Unavailable"),
  GatewayTimeout: statusFunction(504, "Gateway Timeout")
}
module.exports = {
  HttpStatus
};