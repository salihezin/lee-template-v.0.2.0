const NavbarSearch = () => {
  return (
    <div className="rd-navbar-search rd-navbar-search-toggled toggle-original-elements">
      <button
        className="rd-navbar-search-toggle toggle-original"
        data-rd-navbar-toggle=".rd-navbar-search"
      />
      <form
        className="rd-search"
        action="search-results.html"
        data-search-live="rd-search-results-live"
        method="GET"
      >
        <div className="form-wrap">
          <input
            className="form-input"
            id="rd-navbar-search-form-input"
            type="text"
            name="s"
            autoComplete="off"
          />
        </div>
        <button
          className="rd-navbar-search-submit"
          type="submit"
        />
        <label
          className="form-label rd-input-label"
          htmlFor="rd-navbar-search-form-input"
        >
          Search...
        </label>
        <div
          className="rd-search-results-live"
          id="rd-search-results-live"
        />
      </form>
    </div>
  );
}

export default NavbarSearch;
