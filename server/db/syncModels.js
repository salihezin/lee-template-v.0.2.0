const { sequelize } = require('./db');
const Carousel = require('./models/Carousel');
const NavbarMenu = require('./models/NavbarMenu');
const Permission = require('./models/Permission');
const Post = require('./models/Post');
const PostCategory = require('./models/PostCategory');
const PostMedia = require('./models/PostMedia');
const Role = require('./models/Role');
const Session = require('./models/Session');
const User = require('./models/User');
const UserDetail = require('./models/UserDetail');
const UserRoles = require('./models/UserRoles');

async function syncModels() {
  try {
    await sequelize.sync({ force: true }); // force: true ile veritabanını sıfırlayıp yeniden oluşturur
    console.log('Modeller başarıyla senkronize edildi!');
  } catch (error) {
    console.error('Veritabanı senkronizasyonu başarısız:', error);
  }
}

syncModels();
