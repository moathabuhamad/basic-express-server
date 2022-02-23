"use strict";

const validator = require("../src/middleware/validator.js");

describe("testing validator middleware", () => {
  let req = {query:{name:"Moath"}};
  let res = {};
  let next = jest.fn();

  it("test next", () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});