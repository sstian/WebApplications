const { HttpStatus } = require("./http-status");

class ResponseEntity {
  /**
   * response entity constructor
   * @param {boolean} success
   * @param {number} status
   * @param {string} statusText
   * @param {number} code
   * @param {string} message
   * @param {object} payload
   * @example
  {
    success: false,
    status: 404,
    statusText: "Not Found",
    code: 0,
    message: "The change ticket not found with specified requestId [${requestId]]",
    payload: data
  }
   */
  constructor(success, status, statusText, code, message, payload) {
    this.success = success;
    this.status = status;
    this.statusText = statusText;
    this.code = code;
    this.message = message;
    this.payload = payload;
  }

  static Builder = class {
    // Private field '#xxx'must be declared in an enclosing class
    #success;
    #status;
    #statusText;
    #code;
    #message;
    #payload;

    constructor(success = false, status = 0, statusText = "", code = 0, message = "", payload = null) {
      this.#success = success;
      this.#status = status;
      this.#statusText = statusText;
      this.#code = code;
      this.#message = message;
      this.#payload = payload;
    }

    success(success) { this.#success = success; return this; }

    /**
     * @param {number | object} status
     * @example
     * - Number, status = 200
     * - Object, status = {code: 200, text: "OK"}
     * @returns this
     */
    status(status) {
      this.#status = status;
      const { code, text } = status;
      if (code) this.#status = code;
      if (text) this.#statusText = text;
      return this;
    }
    statusText(statusText) { this.#statusText = statusText; return this; }
    code(code) { this.#code = code; return this; }
    message(message) { this.#message = message; return this; }
    payload(payload) { this.#payload = payload; return this; }

    build() {
      return new ResponseEntity(
        this.#success,
        this.#status,
        this.#statusText,
        this.#code,
        this.#message,
        this.#payload
      );
    }
  }
}

// usage
// const responseEntity = new ResponseEntity.Builder()
//   .success(true)
//   .status(HttpStatus.OK)
//   .code(0)
//   .message("I am OK")
//   .payload({ data: "fine" });

module.exports = {
  ResponseEntity
};
