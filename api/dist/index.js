"use strict";

require("regenerator-runtime");

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _cors = _interopRequireDefault(require("cors"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("dotenv").config();

var app = (0, _express["default"])();
var allowlist = ['https://grantcred.com', 'https://www.grantcred.com', 'http://localhost:3000'];

var corsOptionsDelegate = function corsOptionsDelegate(req, callback) {
  var corsOptions;
  var isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1;

  if (isDomainAllowed) {
    corsOptions = {
      origin: true
    };
  } else {
    corsOptions = {
      origin: false
    };
  }

  callback(null, corsOptions);
};

app.use((0, _cors["default"])(corsOptionsDelegate));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});
app.use((0, _expressFileupload["default"])({
  createParentPath: true
}));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
var auth = _routes["default"].auth,
    email = _routes["default"].email,
    admin = _routes["default"].admin,
    user = _routes["default"].user,
    contact = _routes["default"].contact,
    mitigate = _routes["default"].mitigate,
    file = _routes["default"].file,
    assets = _routes["default"].assets,
    changelogRoute = _routes["default"].changelogRoute,
    superadmin = _routes["default"].superadmin;
var PORT = process.env.PORT || 8080;

var server = _http["default"].createServer(app);

app.use(auth);
app.use(email);
app.use(admin);
app.use(user);
app.use(contact);
app.use(mitigate);
app.use(file);
app.use(assets);
app.use(changelogRoute);
app.use(superadmin);
app.use(_express["default"]["static"]('public'));
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public/ui/')));

var staticPath = _path["default"].join(__dirname, '../public/ui/');

_mongoose["default"].connect('mongodb://db:27017npm run watch:dev/grantc', {
  //mongodb://db:27017/apiswissnordic =====> production
  //mongodb://127.0.0.1:27017/apiswissnordic ===> development
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(function () {
  console.log('connected to database');
  server.listen(PORT, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!error) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", error);

            case 2:
              return _context.abrupt("return", console.log("server started on port here ".concat(PORT)));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}); //test comment