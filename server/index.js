const express = require('express');
const fs = require('fs');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const { connect } = require('./db/db');
const {
    NavbarMenu,
    Role,
    User,
    UserDetail,
    UserRoles,
    PostCategory,
    PostCategoryLink,
    PostModel,
    Session,
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
    if (!token) return res.status(401).json({ error: 'Erişim izni yok.' });

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ error: 'Geçersiz token.' });
        req.user = user;
        next();
    });
}

app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Bu korunan bir rotadır.', user: req.user });
});

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

        // varsa eski session'ı sil, yeni session oluştur
        const oldSession = await Session.findOne({where: {userId: user.id}});
        if (oldSession) {
            await oldSession.destroy();
        }

        const expires = new Date();
        expires.setHours(expires.getHours() + 1);
        const createdAt = new Date();
        await Session.create({userId: user.id, expires, createdAt, updatedAt: createdAt});


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

const publicDirectory = '/home/webmobil/public_html/';
const userPath = publicDirectory + 'users/profilePictures';

const storageUserProfilePicture = multer.diskStorage({
    destination: (req, file, cb) => {
        const userDirectory = path.join(userPath);

        if (!fs.existsSync(userDirectory)) {
            fs.mkdirSync(userDirectory, {recursive: true});
        }

        cb(null, userDirectory);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const extension = path.extname(file.originalname);
        cb(null, `profile-${uniqueSuffix}${extension}`);
    },
});

const uploadUserProfilePicture = multer({storage: storageUserProfilePicture});

const carouselMediaPath = publicDirectory + 'carousel/media';
const storageCarousel = multer.diskStorage({
    destination: (req, file, cb) => {
        const carouselMediaDirectory = path.join(carouselMediaPath);

        if (!fs.existsSync(carouselMediaDirectory)) {
            fs.mkdirSync(carouselMediaDirectory, {recursive: true});
        }

        cb(null, carouselMediaDirectory);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const extension = path.extname(file.originalname);
        cb(null, `media-${uniqueSuffix}${extension}`);
    },
});

const uploadCarousel = multer({storage: storageCarousel});

app.post('/api/uploadCarousel', uploadCarousel.single('file'), (req, res) => {
    try {
        const filePath = `/carousel/media/${req.file.filename}`;
        res.status(200).json({
            message: 'Dosya başarıyla yüklendi!',
            filePath,
        });
    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ error: `Dosya yükleme sırasında bir hata oluştu: ${error.message}` });
    }
});

app.post('/api/uploadProfilePicture', uploadUserProfilePicture.single('file'), (req, res) => {
    try {
        const filePath = `/users/profilePictures/${req.file.filename}`;
        res.status(200).json({
            message: 'Dosya başarıyla yüklendi!',
            filePath,
        });
    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ error: `Dosya yükleme sırasında bir hata oluştu: ${error.message}` });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: UserDetail,
                    as: 'UserDetails',
                },
                {
                    model: Role,
                    as: 'Roles',
                    through: { attributes: [] }
                },
                {
                    model: Session,
                    as: 'Sessions',

                }
            ],
        });

        if (!users || users.length === 0) {
            return res.status(404).json({ error: 'Kullanıcılar bulunamadı.' });
        } else {
            return res.json(users);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.get('/api/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({
        where: { id },
        include: [
            {
                model: UserDetail,
                as: 'UserDetails',
            },
            {
                model: Role,
                as: 'Roles',
                through: { attributes: [] }
            },
            {
                model: Session,
                as: 'Sessions',

            }
        ],
    });
    if (!user) {
        return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
    } else {
        return res.json(user);
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

app.put('/api/users/:id', async (req, res) => {
    const id = req.params.id;
    const {email, password} = req.body;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({error: 'Kullanıcı bulunamadı.'});
    } else {
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        return res.json(user);
    }
});

app.delete('/api/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({error: 'Kullanıcı bulunamadı.'});
    } else {
        await user.destroy();
        return res.json({id});
    }
});

app.get('/api/user-details', async (req, res) => {
    try {
        const userDetails = await UserDetail.findAll();
        return res.json(userDetails);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

app.get('/api/user-details/:id', async (req, res) => {
    const id = req.params.id;
    const userDetail = await UserDetail.findOne({where: {userId: id}});
    if (!userDetail) {
        return res.status(404).json({error: 'Kullanıcı detayı bulunamadı.'});
    } else {
        return res.json(userDetail);
    }
});

app.post('/api/user-details', async (req, res) => {
    const {firstName, lastName, profilePhoto, updatedAt, userId} = req.body;
    UserDetail.create({firstName, lastName, profilePhoto, updatedAt, userId}).then((userDetail) => {
        return res.json(userDetail);
    }).catch((error) => {
        return res.status(500).json({error: error.message});
    });
});

app.put('/api/user-details/:id', async (req, res) => {
    const id = req.params.id;
    const {firstName, lastName, profilePhoto, updatedAt, userId} = req.body;
    const userDetail = await UserDetail.findOne({where: {userId: id}});
    if (!userDetail) {
        return res.status(404).json({error: 'Kullanıcı detayı bulunamadı.'});
    } else {
        userDetail.firstName = firstName;
        userDetail.lastName = lastName;
        userDetail.profilePhoto = profilePhoto;
        userDetail.updatedAt = updatedAt;
        userDetail.userId = userId;
        await userDetail.save();
        return res.json(userDetail);
    }
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

app.get('/api/roles', async (req, res) => {
    try {
        const roles = await Role.findAll();
        return res.json(roles);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

app.put('/api/user-roles', async (req, res) => {
    const { userId, roleId } = req.body;
    const userRole = await UserRoles.findOne({ where: { userId } });
    if (userRole) {
        userRole.roleId = roleId;
        await userRole.save();
        return res.json(userRole);
    } else {
        const newUserRole = await UserRoles.create({ userId, roleId });
        return res.json(newUserRole);
    }
});

app.get('/api/categories', async (req, res) => {
    try {
        const categories = await PostCategory.findAll();
        return res.json(categories);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

app.post('/api/categories', async (req, res) => {
    const {name} = req.body;
    PostCategory.create({name}).then((category) => {
        return res.json(category);
    }).catch((error) => {
        return res.status(500).json({error: error.message});
    });
});

app.delete('/api/categories/:id', async (req, res) => {
    const id = req.params.id;
    PostCategory.destroy({where: {id}}).then(() => {
        return res.json({id});
    }).catch((error) => {
        return res.status(500).json({error: error.message});
    });
});

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await PostModel.findAll({
            include: [
                {
                    model: PostCategory,
                    as: 'PostCategories',
                },
            ],
        });
        return res.json(posts);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

app.get('/api/posts/:id', async (req, res) => {
    const id = req.params.id;
    const post = await PostModel.findOne({
        where: {id},
        include: [
            {
                model: PostCategory,
                as: 'PostCategories',
            },
        ],
    });
    if (!post) {
        return res.status(404).json({error: 'Post not found.'});
    } else {
        return res.json(post);
    }
});

app.post('/api/posts', async (req, res) => {
    const {isActive, isCarousel, title, shortDescription, image, content, categoryId} = req.body;
    PostModel.create({isActive, isCarousel, title, shortDescription, image, content, categoryId}).then((post) => {
        PostCategoryLink.create({postId: post.id, categoryId}).then(() => {
            return res.json(post);
        }).catch((error) => {
            return res.status(500).json({error: error.message});
        });
        return res.json(post);
    }).catch((error) => {

        return res.status(500).json({error: error.message});
    });
});

app.put('/api/posts/:id', async (req, res) => {
    const { isActive, isCarousel, title, shortDescription, image, content, categoryId } = req.body;
    const id = req.params.id;

    try {
        const post = await PostModel.findByPk(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }

        // Güncelleme işlemleri
        post.isActive = isActive;
        post.isCarousel = isCarousel;
        post.title = title;
        post.shortDescription = shortDescription;
        post.image = image;
        post.content = content;
        post.categoryId = categoryId;
        await post.save();
        const postLink = await PostCategoryLink.findOne({ where: { postId: id } });
        if (!postLink) {
            return res.status(404).json({ error: 'Post category link not found.' });
        }

        console.log("put ~ postLink", postLink.categoryId);
        console.log("put ~ categoryId", categoryId);

        await PostCategoryLink.update(
          { categoryId: categoryId },
          { where: { postId: id } }
        );

        return res.json({ post, postLink });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred.' });
    }
});

app.delete('/api/posts/:id', async (req, res) => {
    const id = req.params.id;
    PostModel.destroy({where: {id}}).then(() => {
        return res.json({id});
    }).catch((error) => {
        return res.status(500).json({error: error.message});
    });
});

app.put('api/categoryLink/:id', async (req, res) => {
    const id = req.params.id;
    const {categoryId} = req.body
    const postLink = await PostCategoryLink.findOne({where: {categoryId: categoryId}});
    if (!postLink) {
        return res.status(404).json({error: 'Post category link not found.'});
    } else {
        postLink.categoryId = categoryId;
        await postLink.save();
        return res.json(postLink);
    }
});

//Get session by id
app.get('/api/sessions/:id', async (req, res) => {
    const id = req.params.id;
    console.log("getSessions ~ id", id);
    const session = await Session.findOne({where: {userId: id}});
    if (!session) {
        return res.status(404).json({error: 'Session not found.'});
    } else {
        return res.json(session);
    }
});

app.post('/api/sessions', async (req, res) => {
    const {userId, expires} = req.body;
    const createdAt = new Date();
    Session.create({userId, expires, createdAt, updatedAt: createdAt}).then((session) => {
        return res.json(session);
    }).catch((error) => {
        return res.status(500).json({error: error.message});
    });
});

app.listen(3003, () => {
    console.log('Server running on http://localhost:3003');
});