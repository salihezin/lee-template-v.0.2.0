import SingleNavbarItem from './SingleNavbarItem';

const MultiNavbarItem = ({ title, children, props }) => {
  const { ariaExpanded, ariaControls, parentShow } = props;
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link dropdown-indicator"
          href={`#${ariaControls}`}
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
            <span className="nav-link-text">{title}</span>
          </div>
        </a>
        <div className="parent-wrapper">
          <ul
            className={"nav collapse parent " + (parentShow ? "show" : "")}
            data-bs-parent={"#" + ariaControls}
            id={ariaControls}
          >
            {children.map((child, index) => {
              return (
                <SingleNavbarItem
                  key={index}
                  title={child.title}
                  link={child.link}
                  active={child.active}
                />
              );
            })}
          </ul>
        </div>
      </li>
    </>
  );
}

export default MultiNavbarItem;
