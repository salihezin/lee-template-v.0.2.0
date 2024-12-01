const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({'dialect': 'sqlite', 'storage': 'db.sqlite'});

// const sequelize = new Sequelize({
//   dialect: 'mysql',
//   host: 'cp58.servername.co',
//   username: 'webmobil',
//   password: '6:|NmAR$o5J0',
//   database: 'webmobil_lee',
// })

async function connect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Veritabanı bağlantısı başarılı!');
  } catch (error) {
    console.error('Veritabanı bağlantısı başarısız:', error);
  }
}

module.exports = { sequelize, connect };
