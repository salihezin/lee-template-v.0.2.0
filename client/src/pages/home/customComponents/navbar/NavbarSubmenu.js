import NavbarSingleMenu from './NavBarSingleMenu';

const NavbarSubmenu = ({ menu }) => {
  return (
    <>
      <li className="rd-navbar--has-dropdown rd-navbar-submenu">
        <a href={menu.href}>{menu.title}</a>
        <span className="rd-navbar-submenu-toggle" />
        <ul className="rd-navbar-dropdown">
          {menu.children.map((submenu) => (
            <NavbarSingleMenu key={submenu.id} menu={submenu} />
          ))}
        </ul>
      </li>
    </>
  );
};

export default NavbarSubmenu;
