const { default: NavbarSingleMenu } = require("./NavBarSingleMenu")

const NavbarMultiMenu = ({ menu }) => {
  console.log('menu', menu)
  return (
    <>
      <li className="rd-navbar--has-megamenu rd-navbar-submenu">
        <a href={menu.href}>{menu.title}</a>
        <span className="rd-navbar-submenu-toggle" />
        <ul className="rd-navbar-megamenu rd-navbar-open-right">
          {menu.children.map((submenu) => (
            <li>
              <h5 className="rd-megamenu-header">{submenu.title}</h5>
              <ul className="rd-megamenu-list">
                {submenu.children.map((subsubmenu) => (
                  <NavbarSingleMenu key={subsubmenu.id} menu={subsubmenu} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}

export default NavbarMultiMenu;
