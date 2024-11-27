import NavbarPanel from './NavbarPanel';
import NavbarAside from './NavbarAside';
import NavbarNavWrap from './NavbarNavWrap';

const Navbar = ({menus}) => {
  return (
    <div className="rd-navbar-wrap" style={{ height: 125 }}>
      <nav
        className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
        data-layout="rd-navbar-fixed"
        data-sm-layout="rd-navbar-fixed"
        data-sm-device-layout="rd-navbar-fixed"
        data-md-layout="rd-navbar-fixed"
        data-md-device-layout="rd-navbar-fixed"
        data-lg-device-layout="rd-navbar-fixed"
        data-lg-layout="rd-navbar-static"
        data-xl-device-layout="rd-navbar-static"
        data-xl-layout="rd-navbar-static"
        data-stick-up-clone="false"
        data-md-stick-up-offset="74px"
        data-lg-stick-up-offset="66px"
        data-md-stick-up="true"
        data-lg-stick-up="true"
      >
        <div className="rd-navbar-outer">
          <div className="rd-navbar-inner">
            <NavbarPanel />
            <div className="rd-navbar-body">
              <NavbarAside />
              <NavbarNavWrap menus={menus}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
