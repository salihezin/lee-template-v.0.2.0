const Chat = () => {
    return (
        <div className="support-chat-container show">
        <div className="container-fluid support-chat">
          <div className="card bg-body-emphasis">
            <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
              <h5 className="mb-0 d-flex align-items-center gap-2">
                Demo widget
                <svg
                  className="svg-inline--fa fa-circle text-success fs-11"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                  />
                </svg>
                {/* <span class="fa-solid fa-circle text-success fs-11"></span> Font Awesome fontawesome.com */}
              </h5>
              <div className="btn-reveal-trigger">
                <button
                  className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
                  type="button"
                  id="support-chat-dropdown"
                  data-bs-toggle="dropdown"
                  data-boundary="window"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <svg
                    className="svg-inline--fa fa-ellipsis text-body"
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
                  {/* <span class="fas fa-ellipsis-h text-body"></span> Font Awesome fontawesome.com */}
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end py-2"
                  aria-labelledby="support-chat-dropdown"
                >
                  <a className="dropdown-item" href="#!">
                    Request a callback
                  </a>
                  <a className="dropdown-item" href="#!">
                    Search in chat
                  </a>
                  <a className="dropdown-item" href="#!">
                    Show history
                  </a>
                  <a className="dropdown-item" href="#!">
                    Report to Admin
                  </a>
                  <a className="dropdown-item btn-support-chat" href="#!">
                    Close Support
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body chat p-0">
              <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
                <div className="text-end mt-6">
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semibold fs-9">
                      I need help with something
                    </p>
                    <svg
                      className="svg-inline--fa fa-paper-plane text-primary fs-9 ms-3"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="paper-plane"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                      />
                    </svg>
                    {/* <span class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span> Font Awesome fontawesome.com */}
                  </a>
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semibold fs-9">
                      I can’t reorder a product I previously ordered
                    </p>
                    <svg
                      className="svg-inline--fa fa-paper-plane text-primary fs-9 ms-3"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="paper-plane"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                      />
                    </svg>
                    {/* <span class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span> Font Awesome fontawesome.com */}
                  </a>
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semibold fs-9">
                      How do I place an order?
                    </p>
                    <svg
                      className="svg-inline--fa fa-paper-plane text-primary fs-9 ms-3"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="paper-plane"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                      />
                    </svg>
                    {/* <span class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span> Font Awesome fontawesome.com */}
                  </a>
                  <a
                    className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                  >
                    <p className="mb-0 fw-semibold fs-9">
                      My payment method not working
                    </p>
                    <svg
                      className="svg-inline--fa fa-paper-plane text-primary fs-9 ms-3"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="paper-plane"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                      />
                    </svg>
                    {/* <span class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span> Font Awesome fontawesome.com */}
                  </a>
                </div>
                <div className="text-center mt-auto">
                  <div className="avatar avatar-3xl status-online">
                    <img
                      className="rounded-circle border border-3 border-light-subtle"
                      src="assets/img/team/30.webp"
                      alt=""
                    />
                  </div>
                  <h5 className="mt-2 mb-3">Eric</h5>
                  <p className="text-center text-body-emphasis mb-0">
                    Ask us anything – we’ll get back to you here or by email within
                    24 hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
              <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4">
                <input
                  className="form-control outline-none border-0 flex-1 fs-9 px-0"
                  type="text"
                  placeholder="Write message"
                />
                <label
                  className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                  htmlFor="supportChatPhotos"
                >
                  <svg
                    className="svg-inline--fa fa-image"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="image"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                    />
                  </svg>
                  {/* <span class="fa-solid fa-image"></span> Font Awesome fontawesome.com */}
                </label>
                <input
                  className="d-none"
                  type="file"
                  accept="image/*"
                  id="supportChatPhotos"
                />
                <label
                  className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                  htmlFor="supportChatAttachment"
                >
                  {" "}
                  <svg
                    className="svg-inline--fa fa-paperclip"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="paperclip"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
                    />
                  </svg>
                  {/* <span class="fa-solid fa-paperclip"></span> Font Awesome fontawesome.com */}
                </label>
                <input className="d-none" type="file" id="supportChatAttachment" />
              </div>
              <button className="btn p-0 border-0 send-btn">
                <svg
                  className="svg-inline--fa fa-paper-plane fs-9"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="paper-plane"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                  />
                </svg>
                {/* <span class="fa-solid fa-paper-plane fs-9"></span> Font Awesome fontawesome.com */}
              </button>
            </div>
          </div>
        </div>
        <button className="btn btn-support-chat p-0 border border-translucent">
          <span className="fs-8 btn-text text-primary text-nowrap">Chat demo</span>
          <span className="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative">
            <span className="ping-icon-bg" />
            <svg
              className="svg-inline--fa fa-circle ping-icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              />
            </svg>
            {/* <span class="fa-solid fa-circle ping-icon"></span> Font Awesome fontawesome.com */}
          </span>
          <svg
            className="svg-inline--fa fa-headset text-primary fs-8 d-sm-none"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="headset"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
            />
          </svg>
          {/* <span class="fa-solid fa-headset text-primary fs-8 d-sm-none"></span> Font Awesome fontawesome.com */}
          <svg
            className="svg-inline--fa fa-chevron-down text-primary fs-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
          {/* <span class="fa-solid fa-chevron-down text-primary fs-7"></span> Font Awesome fontawesome.com */}
        </button>
      </div>
    );
}

export default Chat;
