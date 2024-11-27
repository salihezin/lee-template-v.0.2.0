const NavbarSingleMenu = ({ menu }) => {
  return (
    <>
      <li>
        <a href={menu.href}>{menu.title}</a>
      </li>
    </>
  );
}

export default NavbarSingleMenu;
