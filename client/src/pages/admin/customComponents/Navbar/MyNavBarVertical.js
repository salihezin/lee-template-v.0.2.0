import { navbarLinks } from "../../constansts/navbarLinks";
import NavItemWrapper from "./NavItemWrapper";

const MyNavbarVertical = () => {
  return (

    <nav className="navbar navbar-vertical navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
        {/* scrollbar removed*/}
        <div className="navbar-vertical-content">
          <ul className="navbar-nav flex-column" id="navbarVerticalNav">
            <NavItemWrapper
              items={navbarLinks}
              title={"DB"}
              props={{
                dataBsToggle: "collapse",
                ariaExpanded: "true",
                ariaControls: "nv-home",
                iconClass: "feather feather-layers",
                parentShow: true,
              }}
            />
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default MyNavbarVertical;
