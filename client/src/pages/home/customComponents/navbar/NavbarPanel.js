import NavbarBrand from './NavbarBrand';

const NavbarPanel = () => {
  return (
    <div className="rd-navbar-panel">
      <button className="rd-navbar-toggle toggle-original" data-rd-navbar-toggle=".rd-navbar-nav-wrap">
        <span />
      </button>
      <NavbarBrand />
    </div>
  );
}

export default NavbarPanel;