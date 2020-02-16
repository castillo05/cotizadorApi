"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _dotenv = require("dotenv");

var _axios = _interopRequireDefault(require("axios"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();
const {
  KEY
} = process.env;

const api = _express.default.Router();

var _default = api.get('/cotizacion/:target/:source/:quantity', async (req, res) => {
  try {
    if (req.params.target === 'dolar') {
      req.params.target = 'USD';
    } else if (req.params.target === 'pesos') {
      req.params.target = 'ARS';
    } else if (req.params.target === 'cordoba') {
      req.params.target = 'NIO';
    }

    if (req.params.source === 'dolar') {
      req.params.source = 'USD';
    } else if (req.params.source === 'pesos') {
      req.params.source = 'ARS';
    } else if (req.params.source === 'cordoba') {
      req.params.source = 'NIO';
    }

    let data = await _axios.default.get("https://api.cambio.today/v1/quotes/".concat(req.params.source, "/").concat(req.params.target, "/json?quantity=").concat(req.params.quantity, "&key=").concat(KEY));
    console.log(data.data);
    res.json(data.data);
  } catch (error) {
    console.log(error);
  }
}).get('/cotizacion/dolar', async (req, res) => {
  try {
    let data = await _axios.default.get("https://api.cambio.today/v1/quotes/EUR/USD/json?quantity=1&key=".concat(KEY));
    console.log(data.data);
    res.json(Object.values(data.data));
  } catch (error) {
    console.log(error);
  }
}).get('/cotizacion/pesos', async (req, res) => {
  try {
    let data = await _axios.default.get("https://api.cambio.today/v1/quotes/EUR/ARS/json?quantity=1&key=".concat(KEY));
    console.log(data.data);
    res.json(Object.values(data.data));
  } catch (error) {
    console.log(error);
  }
}).get('/cotizacion/cordoba', async (req, res) => {
  try {
    let data = await _axios.default.get("https://api.cambio.today/v1/quotes/EUR/NIO/json?quantity=1&key=".concat(KEY));
    console.log(Object.values(data.data));
    res.json(Object.values(data.data));
  } catch (error) {
    console.log(error);
  }
});

exports.default = _default;