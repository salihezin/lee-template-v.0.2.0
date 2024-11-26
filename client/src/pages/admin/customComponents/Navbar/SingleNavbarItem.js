const SingleNavbarItem = ({ title, link, active, onClick }) => {
  const navLinkClass = 'nav-link ' + (active ? 'active' : '');
  return (
    <>
      <li className="nav-item">
        <a className={navLinkClass} href={link}>
          <div className="d-flex align-items-center" onClick={onClick}>
            <span className="nav-link-text">
              {title}
            </span>
          </div>
        </a>
      </li>
    </>
  );
}

export default SingleNavbarItem;
