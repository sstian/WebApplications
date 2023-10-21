const assert = require("assert");
const {padding} = require("../lib/util/date-time-util");

describe("test padding", function() {
  describe("should only return 2 characters afterwards", function() {
it("should return -1", function() {
  assert.equal(padding(-1), "-1");
});
it("should return 00", function() {
  assert.equal(padding(0), "00");
});
  });
});
