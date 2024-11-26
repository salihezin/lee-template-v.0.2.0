import MenuIcon from "./MenuIcon";
import SingleNavbarItem from "./SingleNavbarItem";
import MultiNavbarItem from './MultiNavbarItem';

const NavItemWrapper = ({items, title, props}) => {
  const { ariaExpanded, ariaControls, iconClass, parentShow } = props;
  const iconName = iconClass.split("feather feather-")[1];

  return (
    <div className="nav-item-wrapper">
      <a
        className="nav-link dropdown-indicator label-1"
        href={`#${ariaControls}`}
        role="button"
        data-bs-toggle="collapse"
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
      >
        <div className="d-flex align-items-center">
          <div className="dropdown-indicator-icon-wrapper">
            <svg
              className="svg-inline--fa fa-caret-right dropdown-indicator-icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
              />
            </svg>
          </div>
          <span className="nav-link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={iconClass}
            >
              <MenuIcon iconName={iconName} />
            </svg>
          </span>
          <span className="nav-link-text">{title}</span>
        </div>
      </a>
      <div className="parent-wrapper label-1">
        <ul
          className={"nav collapse parent " + (parentShow ? "show" : "")}
          data-bs-parent="#navbarVerticalCollapse"
          id={ariaControls}
        >
          <li className="collapsed-nav-item-title d-none">{title}</li>
          {items.map((item, index) => {
            if (item.children) {
              return (
                <MultiNavbarItem
                  key={index}
                  title={item.title}
                  children={item.children}
                  props={{
                    ariaExpanded: "false",
                    ariaControls: `nv-${item.title}`,
                    parentShow: item.active,
                    onClick: (link) => props.onClick(link),
                  }}
                />
              );
            } else {
              return (
                <SingleNavbarItem
                  key={index}
                  title={item.title}
                  link={item.link}
                  active={item.active}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavItemWrapper;
