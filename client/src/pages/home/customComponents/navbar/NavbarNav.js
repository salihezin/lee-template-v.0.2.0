import NavbarSingleMenu from "./NavBarSingleMenu";
import NavbarSubmenu from './NavbarSubmenu';
import NavbarMultiMenu from './NavbarMultiMenu';

/*
[
    {
        "id": 1,
        "title": "Hakkımızda",
        "url": "/about-us",
        "icon": "",
        "sortOrder": null,
        "mainMenu": false,
        "isActive": true,
        "parentId": null,
        "createdAt": "2024-11-26T16:04:33.000Z",
        "updatedAt": "2024-11-26T16:04:33.000Z",
        "children": []
    },
    {
        "id": 2,
        "title": "Hizmetlerimiz",
        "url": "/our-services",
        "icon": "",
        "sortOrder": null,
        "mainMenu": false,
        "isActive": true,
        "parentId": null,
        "createdAt": "2024-11-26T16:05:01.000Z",
        "updatedAt": "2024-11-26T16:05:01.000Z",
        "children": [
            {
                "id": 3,
                "title": "Web Tasarım",
                "url": "/web",
                "icon": "",
                "sortOrder": null,
                "mainMenu": false,
                "isActive": true,
                "parentId": 2,
                "createdAt": "2024-11-26T16:05:37.000Z",
                "updatedAt": "2024-11-26T16:05:37.000Z",
                "children": []
            },
            {
                "id": 4,
                "title": "Mobil Uygulama Geliştirme",
                "url": "/mobil",
                "icon": "",
                "sortOrder": null,
                "mainMenu": false,
                "isActive": true,
                "parentId": 2,
                "createdAt": "2024-11-26T16:06:25.000Z",
                "updatedAt": "2024-11-26T16:06:25.000Z",
                "children": []
            },
            {
                "id": 5,
                "title": "Danışmanlık",
                "url": "/consulting",
                "icon": "",
                "sortOrder": null,
                "mainMenu": false,
                "isActive": true,
                "parentId": 2,
                "createdAt": "2024-11-26T16:06:54.000Z",
                "updatedAt": "2024-11-26T16:06:54.000Z",
                "children": [
                    {
                        "id": 12,
                        "title": "Teknoloji Danışmanlığı",
                        "url": "/consulting-technology",
                        "icon": "",
                        "sortOrder": null,
                        "mainMenu": false,
                        "isActive": true,
                        "parentId": 5,
                        "createdAt": "2024-11-26T16:10:57.000Z",
                        "updatedAt": "2024-11-26T16:10:57.000Z",
                        "children": []
                    },
                    {
                        "id": 13,
                        "title": "İş Danışmanlığı",
                        "url": "/consulting-business",
                        "icon": "",
                        "sortOrder": null,
                        "mainMenu": false,
                        "isActive": true,
                        "parentId": 5,
                        "createdAt": "2024-11-26T16:11:07.000Z",
                        "updatedAt": "2024-11-26T16:11:07.000Z",
                        "children": []
                    },
                    {
                        "id": 14,
                        "title": "İK Danışmanlığı",
                        "url": "/consulting-hr",
                        "icon": "",
                        "sortOrder": null,
                        "mainMenu": false,
                        "isActive": true,
                        "parentId": 5,
                        "createdAt": "2024-11-26T16:11:16.000Z",
                        "updatedAt": "2024-11-26T16:11:16.000Z",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "title": "Projelerimiz",
        "url": "/projects",
        "icon": "",
        "sortOrder": null,
        "mainMenu": false,
        "isActive": true,
        "parentId": null,
        "createdAt": "2024-11-26T16:07:22.000Z",
        "updatedAt": "2024-11-26T16:07:22.000Z",
        "children": [
            {
                "id": 7,
                "title": "Bitenler",
                "url": "/completed",
                "icon": "",
                "sortOrder": null,
                "mainMenu": false,
                "isActive": true,
                "parentId": 6,
                "createdAt": "2024-11-26T16:08:06.000Z",
                "updatedAt": "2024-11-26T16:08:06.000Z",
                "children": []
            },
            {
                "id": 8,
                "title": "Devam Edenler",
                "url": "/on-going",
                "icon": "",
                "sortOrder": null,
                "mainMenu": false,
                "isActive": true,
                "parentId": 6,
                "createdAt": "2024-11-26T16:08:22.000Z",
                "updatedAt": "2024-11-26T16:08:22.000Z",
                "children": []
            }
        ]
    },
    {
        "id": 9,
        "title": "İletişim",
        "url": "/contact",
        "icon": "",
        "sortOrder": null,
        "mainMenu": false,
        "isActive": true,
        "parentId": null,
        "createdAt": "2024-11-26T16:08:52.000Z",
        "updatedAt": "2024-11-26T16:08:52.000Z",
        "children": [
            {
                "id": 10,
                "title": "İletişim Kanallarımız",
                "url": "/get-in-touch",
                "icon": "",
                "sortOrder": null,
                "mainMenu": false,
                "isActive": true,
                "parentId": 9,
                "createdAt": "2024-11-26T16:09:33.000Z",
                "updatedAt": "2024-11-26T16:09:33.000Z",
                "children": []
            },
            {
                "id": 11,
                "title": "SSS",
                "url": "/faq",
                "icon": "",
                "sortOrder": null,
                "mainMenu": false,
                "isActive": true,
                "parentId": 9,
                "createdAt": "2024-11-26T16:10:00.000Z",
                "updatedAt": "2024-11-26T16:10:00.000Z",
                "children": []
            }
        ]
    }
]
*/

const NavbarNav = ({ menus }) => {
  return (
    <>
      <ul className="rd-navbar-nav">
        {menus.map((menu) => {
          if (menu.children.length === 0 && !menu.hasGrandChild) {
            return <NavbarSingleMenu key={menu.id} menu={menu} />;
          } else if (menu.children.length > 0 && !menu.hasGrandChild) {
            return <NavbarSubmenu key={menu.id} menu={menu} />;
          } else {
            return <NavbarMultiMenu key={menu.id} menu={menu} />;
          }
        })}
      </ul>
    </>
  );
}

export default NavbarNav;
