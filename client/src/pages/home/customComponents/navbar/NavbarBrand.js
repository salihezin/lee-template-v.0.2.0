const NavbarBrand = () => {
  return (
    <div className="rd-navbar-brand">
      <a className="brand" href="/">
        <div className="brand__name">
          <img
            className="brand__logo-dark"
            src="/techsoft/images/logo-default-95x80.png"
            alt=""
            width={95}
            height={80}
          />
          <img
            className="brand__logo-mobile"
            src="/techsoft/images/logo-mobile-170x50.png"
            alt=""
            width={170}
            height={50}
          />
        </div>
      </a>
    </div>
  );
}

export default NavbarBrand;
