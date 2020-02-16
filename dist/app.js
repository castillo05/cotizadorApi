"use strict";

var _express = _interopRequireDefault(require("express"));

var _cotizacion = _interopRequireDefault(require("./router/cotizacion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // Rutas

app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json()); // Cors

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY,Origin,X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
}); //Cargamos una ruta estatica que es la carpeta client
// app.use('/',express.static('dist/client',{redirect:false}));

app.use('/api', _cotizacion.default);
app.use('/', (req, res) => {
  res.status(200).json({
    message: 'Bienvenido'
  });
}); // app.get('*',function (req,res,next) {
// 	res.sendFile(path.resolve('dist/client/index.html'));
// });

module.exports = app;