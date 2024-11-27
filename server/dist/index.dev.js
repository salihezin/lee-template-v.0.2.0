"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var cors = require('cors');

var bcrypt = require('bcrypt');

var multer = require('multer');

var path = require('path');

var _require = require('./db/db'),
    connect = _require.connect;

var _require2 = require('./db/models'),
    Carousel = _require2.Carousel,
    NavbarMenu = _require2.NavbarMenu,
    Permission = _require2.Permission,
    Post = _require2.Post,
    PostCategory = _require2.PostCategory,
    PostMedia = _require2.PostMedia,
    Role = _require2.Role,
    Session = _require2.Session,
    User = _require2.User,
    UserDetail = _require2.UserDetail,
    UserRoles = _require2.UserRoles,
    sequelize = _require2.sequelize;

var app = express();
app.use(cors());
app.use(express.json());
connect().then(function () {
  console.log('Veritabanı bağlantısı başarılı!');
})["catch"](function (error) {
  console.error('Veritabanı bağlantısı başarısız:', error);
});
var storageCarousel = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, path.join(__dirname, '../../lee-template/client/public/techSoft/images/forms/carousels'));
  },
  filename: function filename(req, file, cb) {
    cb(null, "".concat(Date.now(), "-").concat(file.originalname));
  }
});
var upload = multer({
  storage: storageCarousel
});
app.post('/uploadCarousel', upload.single('image'), function (req, res) {
  if (!req.file) {
    return res.status(400).json({
      error: 'Dosya yüklenemedi.'
    });
  }

  res.json({
    file: req.file
  });
});
app.get('/api/users', function _callee(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findAll());

        case 3:
          users = _context.sent;
          // const users = await sequelize.query('SELECT * FROM Users', { model: User, mapToModel: true });
          console.log('users', users);

          if (users) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            error: 'Kullanıcılar bulunamadı.'
          }));

        case 9:
          return _context.abrupt("return", res.json(users));

        case 10:
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            error: _context.t0.message
          }));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
app.post('/api/users', function _callee2(req, res) {
  var _req$body, email, password, user, hashedPassword, newUser;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            where: {
              email: email
            }
          }));

        case 3:
          user = _context2.sent;

          if (!user) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: 'Bu e-posta adresi zaten kullanımda.'
          }));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 8:
          hashedPassword = _context2.sent;
          _context2.next = 11;
          return regeneratorRuntime.awrap(User.create({
            email: email,
            password: hashedPassword
          }));

        case 11:
          newUser = _context2.sent;
          return _context2.abrupt("return", res.json(newUser));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.get('/api/navbar-menus', function _callee3(req, res) {
  var navbarMenus, buildMenuTree, menuTree;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(NavbarMenu.findAll({
            order: [['sortOrder', 'ASC']]
          }));

        case 3:
          navbarMenus = _context3.sent;

          buildMenuTree = function buildMenuTree(menuItems) {
            var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return menuItems.filter(function (item) {
              return item.parentId === parentId;
            }).map(function (item) {
              return _objectSpread({}, item.dataValues, {
                children: buildMenuTree(menuItems, item.id)
              });
            });
          };

          menuTree = buildMenuTree(navbarMenus);
          return _context3.abrupt("return", res.json(menuTree));

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            error: 'An error occurred while fetching menus.'
          }));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
app.post('/api/navbar-menus', function _callee4(req, res) {
  var _req$body2, title, url, parentId, icon, isActive;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, title = _req$body2.title, url = _req$body2.url, parentId = _req$body2.parentId, icon = _req$body2.icon, isActive = _req$body2.isActive;
          NavbarMenu.create({
            title: title,
            url: url,
            parentId: parentId,
            icon: icon,
            isActive: isActive
          }).then(function (navbarMenu) {
            return res.json(navbarMenu);
          })["catch"](function (error) {
            return res.status(500).json({
              error: error.message
            });
          });

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.listen(3003, function () {
  console.log('Server running on http://localhost:3003');
});