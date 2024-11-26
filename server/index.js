const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const { connect } = require('./db/db');
const {
    Carousel,
    NavbarMenu,
    Permission,
    Post,
    PostCategory,
    PostMedia,
    Role,
    Session,
    User,
    UserDetail,
    UserRoles,
    sequelize,
} = require('./db/models');

const app = express();
app.use(cors());
app.use(express.json());

connect().then(() => {
    console.log('Veritabanı bağlantısı başarılı!');
}).catch((error) => {
    console.error('Veritabanı bağlantısı başarısız:', error);
});

const storageCarousel = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../lee-template/client/public/techSoft/images/forms/carousels'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storageCarousel });

app.post('/uploadCarousel', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Dosya yüklenemedi.' });
    }
    res.json({ file: req.file });
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.findAll();
        // const users = await sequelize.query('SELECT * FROM Users', { model: User, mapToModel: true });
        console.log('users', users)
        if (!users) {
            return res.status(404).json({ error: 'Kullanıcılar bulunamadı.' });
        } else {
            return res.json(users);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.post('/api/users', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
        return res.status(400).json({ error: 'Bu e-posta adresi zaten kullanımda.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    return res.json(newUser);
});

app.get('/api/navbar-menus', async (req, res) => {
    const navbarMenus = await NavbarMenu.findAll();
    return res.json(navbarMenus);
});

app.post('/api/navbar-menus', async (req, res) => {
    const { title, url, parentId, icon, isActive } = req.body;
    NavbarMenu.create({ title, url, parentId, icon, isActive }).then((navbarMenu) => {
        return res.json(navbarMenu);
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });
   
});


app.listen(3003, () => {
    console.log('Server running on http://localhost:3003');
});