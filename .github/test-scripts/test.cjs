const { isStream } = require("@esm2cjs/is-stream");
const assert = require("assert");

assert(typeof isStream === "function");
