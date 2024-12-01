const express = require('express');
const session = require('express-session');
const jwt = require('jsonwebtoken');
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

const secretKey = 'secretLeeKey';
const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24},
}));

connect().then(() => {
    console.log('Veritabanı bağlantısı başarılı!');
}).catch((error) => {
    console.error('Veritabanı bağlantısı başarısız:', error);
});

function authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).send('Access Denied');

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) return res.status(403).send('Invalid Token');
        req.user = decoded; // Kullanıcı bilgilerini ekle
        next();
    });
}

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ error: 'Hatalı şifre.' });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            secretKey,
            { expiresIn: '1h' }
        );

        return res.json({
            message: 'Giriş başarılı.',
            token,
            user: { id: user.id, email: user.email, name: user.name }
        });
    } catch (error) {
        console.error('Login Error:', error);
        return res.status(500).json({ error: 'Bir hata oluştu.' });
    }
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
    try {
        const navbarMenus = await NavbarMenu.findAll({
            order: [['sortOrder', 'ASC']],
        });

        const getParentTitle = (menuItems, parentId) => {
            const parent = menuItems.find(item => item.id === parentId);
            return parent ? parent.title : null;
        };

        const hasGrandChild = (menuItems, children) => {
            return children.some(child => 
                menuItems.some(item => item.parentId === child.id)
            );
        };

        const buildMenuTree = (menuItems, parentId = null) => {
            return menuItems
                .filter(item => item.parentId === parentId)
                .map(item => {
                    const children = buildMenuTree(menuItems, item.id);
                    return {
                        ...item.dataValues,
                        parentTitle: getParentTitle(menuItems, item.parentId),
                        grandParentTitle: getParentTitle(
                            menuItems,
                            menuItems.find(parent => parent.id === item.parentId)?.parentId
                        ),
                        hasGrandChild: hasGrandChild(menuItems, children),
                        parentId: item.parentId,
                        children,
                    };
                });
        };

        const menuTree = buildMenuTree(navbarMenus);

        return res.json(menuTree);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while fetching menus.' });
    }
});

app.post('/api/navbar-menus', async (req, res) => {
    const { title, url, parentId, icon, isActive } = req.body;
    NavbarMenu.create({ title, url, parentId, icon, isActive }).then((navbarMenu) => {
        return res.json(navbarMenu);
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });

});

app.delete('/api/navbar-menus/:id', async (req, res) => {
    const id = req.params.id;
    NavbarMenu.destroy({where: {id}}).then(() => {
        return res.json({id});
    }).catch((error) => {
        return res.status(500).json({error: error.message});
    });
});


app.listen(3003, () => {
    console.log('Server running on http://localhost:3003');
});