"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _changeLog = _interopRequireDefault(require("../models/changeLog"));

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

var authenticator = _utils["default"].authenticator;
var changelogRoute = router;
changelogRoute.post('/api/changelog', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, changeType, oldState, newState, itemId, changeLogEntry;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, changeType = _req$body.changeType, oldState = _req$body.oldState, newState = _req$body.newState;
            itemId = req.query.itemId; // Create a new ChangeLog entry with the current date and time

            changeLogEntry = new _changeLog["default"]({
              itemId: itemId,
              changeType: changeType,
              changeDetails: {
                oldState: oldState,
                newState: newState
              },
              date: new Date()
            });
            _context.prev = 3;
            _context.next = 6;
            return changeLogEntry.save();

          case 6:
            res.status(201).send(changeLogEntry);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            res.status(500).send(_context.t0.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 9]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
changelogRoute.get('/api/changelog', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var itemId, changeLogs;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            itemId = req.query.itemId;
            _context2.prev = 1;
            _context2.next = 4;
            return _changeLog["default"].find({
              itemId: itemId
            });

          case 4:
            changeLogs = _context2.sent;
            res.status(200).send(changeLogs);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).send(_context2.t0.message);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = changelogRoute;
exports["default"] = _default;