const { sequelize } = require('./db');

async function syncModels() {
  try {
    await sequelize.sync({ alter: true });
    console.log('Modeller başarıyla senkronize edildi!');
  } catch (error) {
    console.error('Veritabanı senkronizasyonu başarısız:', error);
  }
}

syncModels();
