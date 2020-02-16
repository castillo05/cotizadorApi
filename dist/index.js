"use strict";

var _dotenv = require("dotenv");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();
const {
  PORT
} = process.env;

(async () => {
  try {
    _app.default.listen(PORT, () => {
      console.log("App listen to port ".concat(PORT));
    });
  } catch (error) {
    console.log(error);
  }
})();