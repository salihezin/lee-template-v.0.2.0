const NavbarFixedTop = () => {
  return (
    
      <nav className="navbar navbar-top fixed-top navbar-expand" id="navbarDefault">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="navbar-logo">
            <button
              className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalCollapse"
              aria-controls="navbarVerticalCollapse"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggle-icon">
                <span className="toggle-line" />
              </span>
            </button>
            <a className="navbar-brand me-1 me-sm-3" href="index.html">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img src="/admin/assets/img/icons/logo.png" alt="phoenix" width={27} />
                  <h5 className="logo-text ms-2 d-none d-sm-block">phoenix</h5>
                </div>
              </div>
            </a>
          </div>
          <div
            className="search-box navbar-top-search-box d-none d-lg-block"
            data-list='{"valueNames":["title"]}'
            style={{ width: "25rem" }}
          >
            <form
              className="position-relative"
              data-bs-toggle="search"
              data-bs-display="static"
            >
              <input
                className="form-control search-input fuzzy-search rounded-pill form-control-sm"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <svg
                className="svg-inline--fa fa-magnifying-glass search-box-icon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="magnifying-glass"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                {/* <path
                  fill="currentColor"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                /> */}
              </svg>
              {/* <span class="fas fa-search search-box-icon"></span> Font Awesome fontawesome.com */}
            </form>
            <div
              className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none"
              data-bs-dismiss="search"
            >
              <button className="btn btn-link p-0" aria-label="Close" />
            </div>
            <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
              <div
                className="scrollbar-overlay"
                style={{ maxHeight: "30rem" }}
                data-simplebar="init"
              >
                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer" />
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: 0, bottom: 0 }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        tabIndex={0}
                        role="region"
                        aria-label="scrollable content"
                        style={{ height: "auto", overflow: "hidden" }}
                      >
                        <div className="simplebar-content" style={{ padding: 0 }}>
                          <div className="list pb-3">
                            <h6 className="dropdown-header text-body-highlight fs-10 py-2">
                              24{" "}
                              <span className="text-body-quaternary">results</span>
                            </h6>
                            <hr className="my-0" />
                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                              Recently Searched{" "}
                            </h6>
                            <div className="py-2">
                              <a
                                className="dropdown-item"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="fw-normal text-body-highlight title">
                                    <svg
                                      className="svg-inline--fa fa-clock-rotate-left"
                                      data-fa-transform="shrink-2"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="clock-rotate-left"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                      style={{ transformOrigin: "0.5em 0.5em" }}
                                    >
                                      <g transform="translate(256 256)">
                                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
                                            transform="translate(-256 -256)"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                    {/* <span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                    Store Macbook
                                  </div>
                                </div>
                              </a>
                              <a
                                className="dropdown-item"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="fw-normal text-body-highlight title">
                                    {" "}
                                    <svg
                                      className="svg-inline--fa fa-clock-rotate-left"
                                      data-fa-transform="shrink-2"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="clock-rotate-left"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                      style={{ transformOrigin: "0.5em 0.5em" }}
                                    >
                                      <g transform="translate(256 256)">
                                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
                                            transform="translate(-256 -256)"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                    {/* <span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                    MacBook Air - 13″
                                  </div>
                                </div>
                              </a>
                            </div>
                            <hr className="my-0" />
                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                              Products
                            </h6>
                            <div className="py-2">
                              <a
                                className="dropdown-item py-2 d-flex align-items-center"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="file-thumbnail me-2">
                                  <img
                                    className="h-100 w-100 object-fit-cover rounded-3"
                                    src="/admin/assets/img/products/60x60/3.png"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-1">
                                  <h6 className="mb-0 text-body-highlight title">
                                    MacBook Air - 13″
                                  </h6>
                                  <p className="fs-10 mb-0 d-flex text-body-tertiary">
                                    <span className="fw-medium text-body-tertiary text-opactity-85">
                                      8GB Memory - 1.6GHz - 128GB Storage
                                    </span>
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item py-2 d-flex align-items-center"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="file-thumbnail me-2">
                                  <img
                                    className="img-fluid"
                                    src="/admin/assets/img/products/60x60/3.png"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-1">
                                  <h6 className="mb-0 text-body-highlight title">
                                    MacBook Pro - 13″
                                  </h6>
                                  <p className="fs-10 mb-0 d-flex text-body-tertiary">
                                    <span className="fw-medium text-body-tertiary text-opactity-85">
                                      30 Sep at 12:30 PM
                                    </span>
                                  </p>
                                </div>
                              </a>
                            </div>
                            <hr className="my-0" />
                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                              Quick Links
                            </h6>
                            <div className="py-2">
                              <a
                                className="dropdown-item"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="fw-normal text-body-highlight title">
                                    <svg
                                      className="svg-inline--fa fa-link text-body"
                                      data-fa-transform="shrink-2"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="link"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 640 512"
                                      data-fa-i2svg=""
                                      style={{ transformOrigin: "0.625em 0.5em" }}
                                    >
                                      <g transform="translate(320 256)">
                                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                                            transform="translate(-320 -256)"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                    {/* <span class="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                    Support MacBook House
                                  </div>
                                </div>
                              </a>
                              <a
                                className="dropdown-item"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="fw-normal text-body-highlight title">
                                    {" "}
                                    <svg
                                      className="svg-inline--fa fa-link text-body"
                                      data-fa-transform="shrink-2"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="link"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 640 512"
                                      data-fa-i2svg=""
                                      style={{ transformOrigin: "0.625em 0.5em" }}
                                    >
                                      <g transform="translate(320 256)">
                                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                                            transform="translate(-320 -256)"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                    {/* <span class="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                    Store MacBook″
                                  </div>
                                </div>
                              </a>
                            </div>
                            <hr className="my-0" />
                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                              Files
                            </h6>
                            <div className="py-2">
                              <a
                                className="dropdown-item"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="fw-normal text-body-highlight title">
                                    <svg
                                      className="svg-inline--fa fa-file-zipper text-body"
                                      data-fa-transform="shrink-2"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="file-zipper"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 384 512"
                                      data-fa-i2svg=""
                                      style={{ transformOrigin: "0.375em 0.5em" }}
                                    >
                                      <g transform="translate(192 256)">
                                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM96 48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm-6.3 71.8c3.7-14 16.4-23.8 30.9-23.8h14.8c14.5 0 27.2 9.7 30.9 23.8l23.5 88.2c1.4 5.4 2.1 10.9 2.1 16.4c0 35.2-28.8 63.7-64 63.7s-64-28.5-64-63.7c0-5.5 .7-11.1 2.1-16.4l23.5-88.2zM112 336c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"
                                            transform="translate(-192 -256)"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                    {/* <span class="fa-solid fa-file-zipper text-body" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                    Library MacBook folder.rar
                                  </div>
                                </div>
                              </a>
                              <a
                                className="dropdown-item"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="fw-normal text-body-highlight title">
                                    {" "}
                                    <svg
                                      className="svg-inline--fa fa-file-lines text-body"
                                      data-fa-transform="shrink-2"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="file-lines"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 384 512"
                                      data-fa-i2svg=""
                                      style={{ transformOrigin: "0.375em 0.5em" }}
                                    >
                                      <g transform="translate(192 256)">
                                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                                            transform="translate(-192 -256)"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                    {/* <span class="fa-solid fa-file-lines text-body" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                    Feature MacBook extensions.txt
                                  </div>
                                </div>
                              </a>
                              <a
                                className="dropdown-item"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="fw-normal text-body-highlight title">
                                    {" "}
                                    <svg
                                      className="svg-inline--fa fa-image text-body"
                                      data-fa-transform="shrink-2"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="image"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                      style={{ transformOrigin: "0.5em 0.5em" }}
                                    >
                                      <g transform="translate(256 256)">
                                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                                            transform="translate(-256 -256)"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                    {/* <span class="fa-solid fa-image text-body" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                    MacBook Pro_13.jpg
                                  </div>
                                </div>
                              </a>
                            </div>
                            <hr className="my-0" />
                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                              Members
                            </h6>
                            <div className="py-2">
                              <a
                                className="dropdown-item py-2 d-flex align-items-center"
                                href="pages/members.html"
                              >
                                <div className="avatar avatar-l status-online  me-2 text-body">
                                  <img
                                    className="rounded-circle "
                                    src="/admin/assets/img/team/40x40/10.webp"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-1">
                                  <h6 className="mb-0 text-body-highlight title">
                                    Carry Anna
                                  </h6>
                                  <p className="fs-10 mb-0 d-flex text-body-tertiary">
                                    anna@technext.it
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item py-2 d-flex align-items-center"
                                href="pages/members.html"
                              >
                                <div className="avatar avatar-l  me-2 text-body">
                                  <img
                                    className="rounded-circle "
                                    src="/admin/assets/img/team/40x40/12.webp"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-1">
                                  <h6 className="mb-0 text-body-highlight title">
                                    John Smith
                                  </h6>
                                  <p className="fs-10 mb-0 d-flex text-body-tertiary">
                                    smith@technext.it
                                  </p>
                                </div>
                              </a>
                            </div>
                            <hr className="my-0" />
                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                              Related Searches
                            </h6>
                            <div className="py-2">
                              <a
                                className="dropdown-item"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="fw-normal text-body-highlight title">
                                    <svg
                                      className="svg-inline--fa fa-firefox-browser text-body"
                                      data-fa-transform="shrink-2"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fab"
                                      data-icon="firefox-browser"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                      style={{ transformOrigin: "0.5em 0.5em" }}
                                    >
                                      <g transform="translate(256 256)">
                                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M130.22 127.548C130.38 127.558 130.3 127.558 130.22 127.548V127.548ZM481.64 172.898C471.03 147.398 449.56 119.898 432.7 111.168C446.42 138.058 454.37 165.048 457.4 185.168C457.405 185.306 457.422 185.443 457.45 185.578C429.87 116.828 383.098 89.1089 344.9 28.7479C329.908 5.05792 333.976 3.51792 331.82 4.08792L331.7 4.15792C284.99 30.1109 256.365 82.5289 249.12 126.898C232.503 127.771 216.219 131.895 201.19 139.035C199.838 139.649 198.736 140.706 198.066 142.031C197.396 143.356 197.199 144.87 197.506 146.323C197.7 147.162 198.068 147.951 198.586 148.639C199.103 149.327 199.76 149.899 200.512 150.318C201.264 150.737 202.096 150.993 202.954 151.071C203.811 151.148 204.676 151.045 205.491 150.768L206.011 150.558C221.511 143.255 238.408 139.393 255.541 139.238C318.369 138.669 352.698 183.262 363.161 201.528C350.161 192.378 326.811 183.338 304.341 187.248C392.081 231.108 368.541 381.784 246.951 376.448C187.487 373.838 149.881 325.467 146.421 285.648C146.421 285.648 157.671 243.698 227.041 243.698C234.541 243.698 255.971 222.778 256.371 216.698C256.281 214.698 213.836 197.822 197.281 181.518C188.434 172.805 184.229 168.611 180.511 165.458C178.499 163.75 176.392 162.158 174.201 160.688C168.638 141.231 168.399 120.638 173.51 101.058C148.45 112.468 128.96 130.508 114.8 146.428H114.68C105.01 134.178 105.68 93.7779 106.25 85.3479C106.13 84.8179 99.022 89.0159 98.1 89.6579C89.5342 95.7103 81.5528 102.55 74.26 110.088C57.969 126.688 30.128 160.242 18.76 211.318C14.224 231.701 12 255.739 12 263.618C12 398.318 121.21 507.508 255.92 507.508C376.56 507.508 478.939 420.281 496.35 304.888C507.922 228.192 481.64 173.82 481.64 172.898Z"
                                            transform="translate(-256 -256)"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                    {/* <span class="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                    Search in the Web MacBook
                                  </div>
                                </div>
                              </a>
                              <a
                                className="dropdown-item"
                                href="apps/e-commerce/landing/product-details.html"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="fw-normal text-body-highlight title">
                                    {" "}
                                    <svg
                                      className="svg-inline--fa fa-chrome text-body"
                                      data-fa-transform="shrink-2"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fab"
                                      data-icon="chrome"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      data-fa-i2svg=""
                                      style={{ transformOrigin: "0.5em 0.5em" }}
                                    >
                                      <g transform="translate(256 256)">
                                        <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                          <path
                                            fill="currentColor"
                                            d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z"
                                            transform="translate(-256 -256)"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                    {/* <span class="fa-brands fa-chrome text-body" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                    Store MacBook″
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="fallback fw-bold fs-7 d-none">
                              No Result Found.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="simplebar-placeholder"
                    style={{ width: 0, height: 0 }}
                  />
                </div>
                <div
                  className="simplebar-track simplebar-horizontal"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{ width: 0, display: "none" }}
                  />
                </div>
                <div
                  className="simplebar-track simplebar-vertical"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{ height: 0, display: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className="navbar-nav navbar-nav-icons flex-row">
            <li className="nav-item">
              <div className="theme-control-toggle fa-icon-wait px-2">
                <input
                  className="form-check-input ms-0 theme-control-toggle-input"
                  type="checkbox"
                  data-theme-control="phoenixTheme"
                  defaultValue="dark"
                  id="themeControlToggle"
                />
                <label
                  className="mb-0 theme-control-toggle-label theme-control-toggle-light"
                  htmlFor="themeControlToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Switch theme"
                  style={{ height: 32, width: 32 }}
                >
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
                    className="feather feather-moon icon"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </label>
                <label
                  className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                  htmlFor="themeControlToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Switch theme"
                  style={{ height: 32, width: 32 }}
                >
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
                    className="feather feather-sun icon"
                  >
                    <circle cx={12} cy={12} r={5} />
                    <line x1={12} y1={1} x2={12} y2={3} />
                    <line x1={12} y1={21} x2={12} y2={23} />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1={1} y1={12} x2={3} y2={12} />
                    <line x1={21} y1={12} x2={23} y2={12} />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                </label>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                style={{ minWidth: "2.25rem" }}
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span className="d-block" style={{ height: 20, width: 20 }}>
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
                    className="feather feather-bell"
                    style={{ height: 20, width: 20 }}
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
                id="navbarDropdownNotfication"
                aria-labelledby="navbarDropdownNotfication"
              >
                <div className="card position-relative border-0">
                  <div className="card-header p-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-body-emphasis mb-0">Notifications</h5>
                      <button
                        className="btn btn-link p-0 fs-9 fw-normal"
                        type="button"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div
                      className="scrollbar-overlay"
                      style={{ height: "27rem" }}
                      data-simplebar="init"
                    >
                      <div className="simplebar-wrapper" style={{ margin: 0 }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                          <div
                            className="simplebar-offset"
                            style={{ right: 0, bottom: 0 }}
                          >
                            <div
                              className="simplebar-content-wrapper"
                              tabIndex={0}
                              role="region"
                              aria-label="scrollable content"
                              style={{ height: "auto", overflow: "hidden" }}
                            >
                              <div
                                className="simplebar-content"
                                style={{ padding: 0 }}
                              >
                                <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                  <div className="d-flex align-items-center justify-content-between position-relative">
                                    <div className="d-flex">
                                      <div className="avatar avatar-m status-online me-3">
                                        <img
                                          className="rounded-circle"
                                          src="/admin/assets/img/team/40x40/30.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="flex-1 me-sm-3">
                                        <h4 className="fs-9 text-body-emphasis">
                                          Jessie Samson
                                        </h4>
                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                          <span className="me-1 fs-10">💬</span>
                                          Mentioned you in a comment.
                                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                            10m
                                          </span>
                                        </p>
                                        <p className="text-body-secondary fs-9 mb-0">
                                          <svg
                                            className="svg-inline--fa fa-clock me-1"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="clock"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                                            />
                                          </svg>
                                          {/* <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com */}
                                          <span className="fw-bold">10:41 AM </span>
                                          August 7,2021
                                        </p>
                                      </div>
                                    </div>
                                    <div className="dropdown notification-dropdown">
                                      <button
                                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        data-boundary="window"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-bs-reference="parent"
                                      >
                                        <svg
                                          className="svg-inline--fa fa-ellipsis fs-10 text-body"
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="fas"
                                          data-icon="ellipsis"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                          data-fa-i2svg=""
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                          />
                                        </svg>
                                        {/* <span class="fas fa-ellipsis-h fs-10 text-body"></span> Font Awesome fontawesome.com */}
                                      </button>
                                      <div className="dropdown-menu py-2">
                                        <a className="dropdown-item" href="#!">
                                          Mark as unread
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                  <div className="d-flex align-items-center justify-content-between position-relative">
                                    <div className="d-flex">
                                      <div className="avatar avatar-m status-online me-3">
                                        <div className="avatar-name rounded-circle">
                                          <span>J</span>
                                        </div>
                                      </div>
                                      <div className="flex-1 me-sm-3">
                                        <h4 className="fs-9 text-body-emphasis">
                                          Jane Foster
                                        </h4>
                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                          <span className="me-1 fs-10">📅</span>
                                          Created an event.
                                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                            20m
                                          </span>
                                        </p>
                                        <p className="text-body-secondary fs-9 mb-0">
                                          <svg
                                            className="svg-inline--fa fa-clock me-1"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="clock"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                                            />
                                          </svg>
                                          {/* <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com */}
                                          <span className="fw-bold">10:20 AM </span>
                                          August 7,2021
                                        </p>
                                      </div>
                                    </div>
                                    <div className="dropdown notification-dropdown">
                                      <button
                                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        data-boundary="window"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-bs-reference="parent"
                                      >
                                        <svg
                                          className="svg-inline--fa fa-ellipsis fs-10 text-body"
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="fas"
                                          data-icon="ellipsis"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                          data-fa-i2svg=""
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                          />
                                        </svg>
                                        {/* <span class="fas fa-ellipsis-h fs-10 text-body"></span> Font Awesome fontawesome.com */}
                                      </button>
                                      <div className="dropdown-menu py-2">
                                        <a className="dropdown-item" href="#!">
                                          Mark as unread
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                  <div className="d-flex align-items-center justify-content-between position-relative">
                                    <div className="d-flex">
                                      <div className="avatar avatar-m status-online me-3">
                                        <img
                                          className="rounded-circle avatar-placeholder"
                                          src="/admin/assets/img/team/40x40/avatar.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="flex-1 me-sm-3">
                                        <h4 className="fs-9 text-body-emphasis">
                                          Jessie Samson
                                        </h4>
                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                          <span className="me-1 fs-10">👍</span>
                                          Liked your comment.
                                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                            1h
                                          </span>
                                        </p>
                                        <p className="text-body-secondary fs-9 mb-0">
                                          <svg
                                            className="svg-inline--fa fa-clock me-1"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="clock"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                                            />
                                          </svg>
                                          {/* <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com */}
                                          <span className="fw-bold">9:30 AM </span>
                                          August 7,2021
                                        </p>
                                      </div>
                                    </div>
                                    <div className="dropdown notification-dropdown">
                                      <button
                                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        data-boundary="window"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-bs-reference="parent"
                                      >
                                        <svg
                                          className="svg-inline--fa fa-ellipsis fs-10 text-body"
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="fas"
                                          data-icon="ellipsis"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                          data-fa-i2svg=""
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                          />
                                        </svg>
                                        {/* <span class="fas fa-ellipsis-h fs-10 text-body"></span> Font Awesome fontawesome.com */}
                                      </button>
                                      <div className="dropdown-menu py-2">
                                        <a className="dropdown-item" href="#!">
                                          Mark as unread
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                  <div className="d-flex align-items-center justify-content-between position-relative">
                                    <div className="d-flex">
                                      <div className="avatar avatar-m status-online me-3">
                                        <img
                                          className="rounded-circle"
                                          src="/admin/assets/img/team/40x40/57.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="flex-1 me-sm-3">
                                        <h4 className="fs-9 text-body-emphasis">
                                          Kiera Anderson
                                        </h4>
                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                          <span className="me-1 fs-10">💬</span>
                                          Mentioned you in a comment.
                                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                                        </p>
                                        <p className="text-body-secondary fs-9 mb-0">
                                          <svg
                                            className="svg-inline--fa fa-clock me-1"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="clock"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                                            />
                                          </svg>
                                          {/* <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com */}
                                          <span className="fw-bold">9:11 AM </span>
                                          August 7,2021
                                        </p>
                                      </div>
                                    </div>
                                    <div className="dropdown notification-dropdown">
                                      <button
                                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        data-boundary="window"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-bs-reference="parent"
                                      >
                                        <svg
                                          className="svg-inline--fa fa-ellipsis fs-10 text-body"
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="fas"
                                          data-icon="ellipsis"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                          data-fa-i2svg=""
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                          />
                                        </svg>
                                        {/* <span class="fas fa-ellipsis-h fs-10 text-body"></span> Font Awesome fontawesome.com */}
                                      </button>
                                      <div className="dropdown-menu py-2">
                                        <a className="dropdown-item" href="#!">
                                          Mark as unread
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                  <div className="d-flex align-items-center justify-content-between position-relative">
                                    <div className="d-flex">
                                      <div className="avatar avatar-m status-online me-3">
                                        <img
                                          className="rounded-circle"
                                          src="/admin/assets/img/team/40x40/59.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="flex-1 me-sm-3">
                                        <h4 className="fs-9 text-body-emphasis">
                                          Herman Carter
                                        </h4>
                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                          <span className="me-1 fs-10">👤</span>
                                          Tagged you in a comment.
                                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                                        </p>
                                        <p className="text-body-secondary fs-9 mb-0">
                                          <svg
                                            className="svg-inline--fa fa-clock me-1"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="clock"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                                            />
                                          </svg>
                                          {/* <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com */}
                                          <span className="fw-bold">10:58 PM </span>
                                          August 7,2021
                                        </p>
                                      </div>
                                    </div>
                                    <div className="dropdown notification-dropdown">
                                      <button
                                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        data-boundary="window"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-bs-reference="parent"
                                      >
                                        <svg
                                          className="svg-inline--fa fa-ellipsis fs-10 text-body"
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="fas"
                                          data-icon="ellipsis"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                          data-fa-i2svg=""
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                          />
                                        </svg>
                                        {/* <span class="fas fa-ellipsis-h fs-10 text-body"></span> Font Awesome fontawesome.com */}
                                      </button>
                                      <div className="dropdown-menu py-2">
                                        <a className="dropdown-item" href="#!">
                                          Mark as unread
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                  <div className="d-flex align-items-center justify-content-between position-relative">
                                    <div className="d-flex">
                                      <div className="avatar avatar-m status-online me-3">
                                        <img
                                          className="rounded-circle"
                                          src="/admin/assets/img/team/40x40/58.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="flex-1 me-sm-3">
                                        <h4 className="fs-9 text-body-emphasis">
                                          Benjamin Button
                                        </h4>
                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                          <span className="me-1 fs-10">👍</span>
                                          Liked your comment.
                                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                                        </p>
                                        <p className="text-body-secondary fs-9 mb-0">
                                          <svg
                                            className="svg-inline--fa fa-clock me-1"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="clock"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                                            />
                                          </svg>
                                          {/* <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com */}
                                          <span className="fw-bold">10:18 AM </span>
                                          August 7,2021
                                        </p>
                                      </div>
                                    </div>
                                    <div className="dropdown notification-dropdown">
                                      <button
                                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        data-boundary="window"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-bs-reference="parent"
                                      >
                                        <svg
                                          className="svg-inline--fa fa-ellipsis fs-10 text-body"
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="fas"
                                          data-icon="ellipsis"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                          data-fa-i2svg=""
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                          />
                                        </svg>
                                        {/* <span class="fas fa-ellipsis-h fs-10 text-body"></span> Font Awesome fontawesome.com */}
                                      </button>
                                      <div className="dropdown-menu py-2">
                                        <a className="dropdown-item" href="#!">
                                          Mark as unread
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="simplebar-placeholder"
                          style={{ width: 0, height: 0 }}
                        />
                      </div>
                      <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ width: 0, display: "none" }}
                        />
                      </div>
                      <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ height: 0, display: "none" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer p-0 border-top border-translucent border-0">
                    <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                      <a className="fw-bolder" href="pages/notifications.html">
                        Notification history
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                id="navbarDropdownNindeDots"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                  <circle cx={2} cy={8} r={2} fill="currentColor" />
                  <circle cx={2} cy={14} r={2} fill="currentColor" />
                  <circle cx={8} cy={8} r={2} fill="currentColor" />
                  <circle cx={8} cy={14} r={2} fill="currentColor" />
                  <circle cx={14} cy={8} r={2} fill="currentColor" />
                  <circle cx={14} cy={14} r={2} fill="currentColor" />
                  <circle cx={8} cy={2} r={2} fill="currentColor" />
                  <circle cx={14} cy={2} r={2} fill="currentColor" />
                </svg>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border"
                aria-labelledby="navbarDropdownNindeDots"
              >
                <div className="card bg-body-emphasis position-relative border-0">
                  <div
                    className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar"
                    style={{ height: "20rem" }}
                  >
                    <div className="row text-center align-items-center gx-0 gy-0">
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/behance.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Behance
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/google-cloud.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Cloud
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/slack.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Slack
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/gitlab.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Gitlab
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/bitbucket.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            BitBucket
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/google-drive.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Drive
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/trello.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Trello
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/figma.webp"
                            alt=""
                            width={20}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Figma
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/twitter.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Twitter
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/pinterest.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Pinterest
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/ln.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Linkedin
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/google-maps.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Maps
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/google-photos.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Photos
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                          href="#!"
                        >
                          <img
                            src="/admin/assets/img/nav-icons/spotify.webp"
                            alt=""
                            width={30}
                          />
                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                            Spotify
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link lh-1 pe-0"
                id="navbarDropdownUser"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="avatar avatar-l ">
                  <img
                    className="rounded-circle "
                    src="/admin/assets/img/team/40x40/57.webp"
                    alt=""
                  />
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border"
                aria-labelledby="navbarDropdownUser"
              >
                <div className="card position-relative border-0">
                  <div className="card-body p-0">
                    <div className="text-center pt-4 pb-3">
                      <div className="avatar avatar-xl ">
                        <img
                          className="rounded-circle "
                          src="/admin/assets/img/team/72x72/57.webp"
                          alt=""
                        />
                      </div>
                      <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                    </div>
                    <div className="mb-3 mx-3">
                      <input
                        className="form-control form-control-sm"
                        id="statusUpdateInput"
                        type="text"
                        placeholder="Update your status"
                      />
                    </div>
                  </div>
                  <div
                    className="overflow-auto scrollbar"
                    style={{ height: "10rem" }}
                  >
                    <ul className="nav d-flex flex-column mb-2 pb-1">
                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
                          {" "}
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
                            className="feather feather-user me-2 text-body align-bottom"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                          </svg>
                          <span>Profile</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
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
                            className="feather feather-pie-chart me-2 text-body align-bottom"
                          >
                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                            <path d="M22 12A10 10 0 0 0 12 2v10z" />
                          </svg>
                          Dashboard
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
                          {" "}
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
                            className="feather feather-lock me-2 text-body align-bottom"
                          >
                            <rect
                              x={3}
                              y={11}
                              width={18}
                              height={11}
                              rx={2}
                              ry={2}
                            />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          Posts &amp; Activity
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
                          {" "}
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
                            className="feather feather-settings me-2 text-body align-bottom"
                          >
                            <circle cx={12} cy={12} r={3} />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                          </svg>
                          Settings &amp; Privacy{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
                          {" "}
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
                            className="feather feather-help-circle me-2 text-body align-bottom"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <line x1={12} y1={17} x2="12.01" y2={17} />
                          </svg>
                          Help Center
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
                          {" "}
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
                            className="feather feather-globe me-2 text-body align-bottom"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <line x1={2} y1={12} x2={22} y2={12} />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          Language
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer p-0 border-top border-translucent">
                    <ul className="nav d-flex flex-column my-3">
                      <li className="nav-item">
                        <a className="nav-link px-3 d-block" href="#!">
                          {" "}
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
                            className="feather feather-user-plus me-2 text-body align-bottom"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="8.5" cy={7} r={4} />
                            <line x1={20} y1={8} x2={20} y2={14} />
                            <line x1={23} y1={11} x2={17} y2={11} />
                          </svg>
                          Add another account
                        </a>
                      </li>
                    </ul>
                    <hr />
                    <div className="px-3">
                      {" "}
                      <a
                        className="btn btn-phoenix-secondary d-flex flex-center w-100"
                        href="#!"
                      >
                        {" "}
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
                          className="feather feather-log-out me-2"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1={21} y1={12} x2={9} y2={12} />
                        </svg>
                        Sign out
                      </a>
                    </div>
                    <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
                      <a className="text-body-quaternary me-1" href="#!">
                        Privacy policy
                      </a>
                      •
                      <a className="text-body-quaternary mx-1" href="#!">
                        Terms
                      </a>
                      •
                      <a className="text-body-quaternary ms-1" href="#!">
                        Cookies
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    
  );
}

export default NavbarFixedTop;