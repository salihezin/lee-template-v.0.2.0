"use strict";

var _require = require('sequelize'),
    Sequelize = _require.Sequelize; //const sequelize = new Sequelize({'dialect': 'sqlite', 'storage': 'db.sqlite'});


var sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'cp58.servername.co',
  username: 'webmobil',
  password: '6:|NmAR$o5J0',
  database: 'webmobil_lee'
});

function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(sequelize.authenticate());

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(sequelize.sync());

        case 5:
          console.log('Veritabanı bağlantısı başarılı!');
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('Veritabanı bağlantısı başarısız:', _context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

module.exports = {
  sequelize: sequelize,
  connect: connect
};