import NavbarSearch from './NavbarSearch';
import NavbarNav from './NavbarNav';

const NavbarNavWrap = ({menus}) => {
  return (
    <div className="rd-navbar-nav-wrap toggle-original-elements">
      <div className="rd-navbar-element">
        <NavbarSearch />
      </div>
      <NavbarNav menus={menus}/>
    </div>
  );
}

export default NavbarNavWrap;
