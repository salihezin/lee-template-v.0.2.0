import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import './techsoft/css/style.css';
import './techsoft/css/fonts.css';
import './techsoft/css/bootstrap.css';
import { PrimeReactProvider } from "primereact/api";

function App() {
  const metas = [
    { name: "format-detection", content: "telephone=no" },
    { name: "viewport", content: "width=device-width, height=device-height, initial-scale=1.0" },
    { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
    { charset: "utf-8" },
  ];

  const scripts = [
    { src: "techsoft/js/core.min.js" },
    { src: "techsoft/js/script.js" },
  ];

  useEffect(() => {

    metas.forEach(meta => {
      const existingMeta = Array.from(document.head.querySelectorAll("meta")).find(
        existing => Object.keys(meta).every(key => existing[key] === meta[key])
      );

      if (!existingMeta) {
        const metaTag = document.createElement("meta");
        Object.keys(meta).forEach(key => {
          metaTag[key] = meta[key];
        });
        document.head.appendChild(metaTag);
      }
    });

    scripts.forEach(script => {
      const existingScript = Array.from(document.body.querySelectorAll("script")).find(
        existing => existing.src === `${window.location.origin}/${script.src}`
      );

      if (!existingScript) {
        const scriptTag = document.createElement("script");
        Object.keys(script).forEach(key => {
          scriptTag[key] = script[key];
        });
        document.body.appendChild(scriptTag);
      }
    });
    // eslint-disable-next-line
  }, []);


  return (
    <PrimeReactProvider>
    <div>
      <div id="page-loader" className="loaded">
        <div className="page-loader-body">
          <img src="techsoft/images/logo-default-95x80.png" alt="" width={95} height={80} />
          <div className="cssload-wrapper">
            <div className="cssload-border">
              <div className="cssload-whitespace">
                <div className="cssload-line" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page animated" style={{ animationDuration: "500ms" }}>
        {/* Page Header*/}
        <header className="section page-header">
          {/* RD Navbar*/}
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
                  {/* RD Navbar Panel*/}
                  <div className="rd-navbar-panel">
                    <button
                      className="rd-navbar-toggle toggle-original"
                      data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                    >
                      <span />
                    </button>
                    {/* RD Navbar Brand*/}
                    <div className="rd-navbar-brand">
                      <a
                        className="brand"
                        href="https://ld-wt73.template-help.com/wt_prod-19591/index.html"
                      >
                        <div className="brand__name">
                          <img
                            className="brand__logo-dark"
                            src="techsoft/images/logo-default-95x80.png"
                            alt=""
                            width={95}
                            height={80}
                          />
                          <img
                            className="brand__logo-mobile"
                            src="./techsoft/images/logo-mobile-170x50.png"
                            alt=""
                            width={170}
                            height={50}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="rd-navbar-body">
                    {/* RD Navbar Aside*/}
                    <div className="rd-navbar-aside">
                      <div className="rd-navbar-content-outer">
                        <div
                          className="rd-navbar-content__toggle rd-navbar-static--hidden toggle-original"
                          data-rd-navbar-toggle=".rd-navbar-content"
                        >
                          <span />
                        </div>
                        <div className="rd-navbar-content toggle-original-elements">
                          <ul className="list-bordered list-inline">
                            <li>
                              <dl className="list-terms-inline">
                                <dt>24/7 Support</dt>
                                <dd>
                                  <a href="tel:#">1-800-700-6200</a>
                                </dd>
                              </dl>
                            </li>
                            <li>
                              <dl className="list-terms-inline">
                                <dt>E-mail</dt>
                                <dd>
                                  <a href="mailto:#">mail@demolink.org</a>
                                </dd>
                              </dl>
                            </li>
                            <li>
                              <ul className="list-inline list-inline-xs">
                                <li>
                                  <a
                                    className="icon icon-gray-dark icon-style-brand fa fa-facebook"
                                    href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                                  />
                                </li>
                                <li>
                                  <a
                                    className="icon icon-gray-dark icon-style-brand fa fa-twitter"
                                    href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                                  />
                                </li>
                                <li>
                                  <a
                                    className="icon icon-gray-dark icon-style-brand fa fa-google-plus"
                                    href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                                  />
                                </li>
                                <li>
                                  <a
                                    className="icon icon-gray-dark icon-style-brand fa fa-pinterest-p"
                                    href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                                  />
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="rd-navbar-panel__button">
                        <a
                          className="button button-xs button-icon button-icon-left button-default button-ujarak"
                          href="https://ld-wt73.template-help.com/wt_prod-19591/login.html"
                        >
                          <span className="icon mdi mdi-account" />
                          Login
                        </a>
                      </div>
                    </div>
                    {/* RD Navbar Nav Wrap*/}
                    <div className="rd-navbar-nav-wrap toggle-original-elements">
                      <div className="rd-navbar-element">
                        {/* RD Navbar Search*/}
                        <div className="rd-navbar-search rd-navbar-search-toggled toggle-original-elements">
                          <button
                            className="rd-navbar-search-toggle toggle-original"
                            data-rd-navbar-toggle=".rd-navbar-search"
                          />
                          <form
                            className="rd-search"
                            action="https://ld-wt73.template-help.com/wt_prod-19591/search-results.html"
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
                              className="rd-search-results-live cleared"
                              id="rd-search-results-live"
                            />
                          </form>
                        </div>
                      </div>
                      {/* RD Navbar Nav*/}
                      <ul className="rd-navbar-nav">
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/about.html">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/services.html">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/pricing.html">
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/promos.html">
                            Promos
                          </a>
                        </li>
                        <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/blog.html">
                            Blog
                          </a>
                          <span className="rd-navbar-submenu-toggle" />
                          {/* RD Navbar Dropdown*/}
                          <ul className="rd-navbar-dropdown">
                            <li>
                              <a href="https://ld-wt73.template-help.com/wt_prod-19591/blog-post.html">
                                Blog post
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-navbar--has-megamenu rd-navbar-submenu">
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/#">
                            Pages
                          </a>
                          <span className="rd-navbar-submenu-toggle" />
                          {/* RD Navbar Megamenu*/}
                          <ul className="rd-navbar-megamenu rd-navbar-open-right">
                            <li>
                              <h5 className="rd-megamenu-header">Pages 1</h5>
                              <ul className="rd-megamenu-list">
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/faq.html">
                                    FAQ
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/login.html">
                                    Login
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/cart-page.html">
                                    Cart page
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h5 className="rd-megamenu-header">Pages 2</h5>
                              <ul className="rd-megamenu-list">
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/404-page.html">
                                    404 page
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/503-page.html">
                                    503 page
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/coming-soon.html">
                                    Coming soon
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/maintenance.html">
                                    Maintenance
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/privacy-policy.html">
                                    Privacy policy
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/search-results.html">
                                    Search results
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h5 className="rd-megamenu-header">Elements</h5>
                              <ul className="rd-megamenu-list">
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/buttons.html">
                                    Buttons
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/forms.html">
                                    Forms
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/grid-system.html">
                                    Grid system
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/progress-bars.html">
                                    Progress bars
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/tables.html">
                                    Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/tabs-and-accordions.html">
                                    Tabs and Accordions
                                  </a>
                                </li>
                                <li>
                                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/typography.html">
                                    Typography
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/contact-us.html">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* Swiper*/}
        <section
          className="section swiper-container swiper-slider swiper_style-1 swiper_height-1 swiper-controls-classic swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
          data-loop="true"
          data-autoplay={5000}
          data-swiper='{"simulateTouch":false}'
        >
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-6ec1bc1f1e7b7c9e"
            aria-live="off"
            style={{
              transitionDuration: "0ms",
              transform: "translate3d(-5709px, 0px, 0px)"
            }}
          >
            <div
              className="swiper-slide bg-image-dark swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
              data-slide-bg="techsoft/images/slider-classic-slide-2-1920x710.jpg"
              data-swiper-slide-index={1}
              style={{
                width: 1903,
                backgroundImage: 'url("techsoft/images/slider-classic-slide-2-1920x710.jpg")'
              }}
              role="group"
              aria-label="2 / 2"
            >
              <div className="swiper-slide-caption">
                <div className="container text-start">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-sm-12">
                      <h1
                        data-caption-animate="fadeInUpSmall"
                        className="not-animated"
                      >
                        Award-Winning Software
                      </h1>
                      <p
                        className="quote-classic__text call-subtitle_text not-animated"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={200}
                      >
                        The software solutions developed by our company have been
                        <br />
                        numerously awarded for usability and innovative features.
                        <span className="group-item" />
                      </p>
                      <a
                        className="button button-lg button-primary not-animated"
                        href="https://ld-wt73.template-help.com/wt_prod-19591/hosting.html"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={250}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide bg-image-dark swiper-slide-duplicate-active"
              data-slide-bg="techsoft/images/slider-classic-slide-1-1920x710.jpg"
              data-swiper-slide-index={0}
              style={{
                width: 1903,
                backgroundImage: 'url("techsoft/images/slider-classic-slide-1-1920x710.jpg")'
              }}
              role="group"
              aria-label="1 / 2"
            >
              <div className="swiper-slide-caption">
                <div className="container text-start">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-sm-12">
                      <h1
                        data-caption-animate="fadeInUpSmall"
                        className="not-animated"
                      >
                        Welcome to TechSoft
                      </h1>
                      <p
                        className="quote-classic__text call-subtitle_text not-animated"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={200}
                      >
                        Since our establishment, we have been delivering high-quality
                        and <br />
                        sustainable software solutions for corporate business
                        purposes.
                        <span className="group-item" />
                      </p>
                      <a
                        className="button button-lg button-primary not-animated"
                        href="https://ld-wt73.template-help.com/wt_prod-19591/hosting.html"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={250}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide bg-image-dark swiper-slide-prev swiper-slide-duplicate-next"
              data-slide-bg="techsoft/images/slider-classic-slide-2-1920x710.jpg"
              data-swiper-slide-index={1}
              style={{
                width: 1903,
                backgroundImage: 'url("techsoft/images/slider-classic-slide-2-1920x710.jpg")'
              }}
              role="group"
              aria-label="2 / 2"
            >
              <div className="swiper-slide-caption">
                <div className="container text-start">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-sm-12">
                      <h1
                        data-caption-animate="fadeInUpSmall"
                        className="not-animated"
                      >
                        Award-Winning Software
                      </h1>
                      <p
                        className="quote-classic__text call-subtitle_text not-animated"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={200}
                      >
                        The software solutions developed by our company have been
                        <br />
                        numerously awarded for usability and innovative features.
                        <span className="group-item" />
                      </p>
                      <a
                        className="button button-lg button-primary not-animated"
                        href="https://ld-wt73.template-help.com/wt_prod-19591/hosting.html"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={250}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide bg-image-dark swiper-slide-duplicate swiper-slide-active"
              data-slide-bg="techsoft/images/slider-classic-slide-1-1920x710.jpg"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 2"
              style={{
                width: 1903,
                backgroundImage: 'url("techsoft/images/slider-classic-slide-1-1920x710.jpg")'
              }}
            >
              <div className="swiper-slide-caption">
                <div className="container text-start">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-sm-12">
                      <h1
                        data-caption-animate="fadeInUpSmall"
                        className="fadeInUpSmall animated"
                      >
                        Welcome to TechSoft
                      </h1>
                      <p
                        className="quote-classic__text call-subtitle_text fadeInUpSmall animated"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={200}
                      >
                        Since our establishment, we have been delivering high-quality
                        and <br />
                        sustainable software solutions for corporate business
                        purposes.
                        <span className="group-item" />
                      </p>
                      <a
                        className="button button-lg button-primary fadeInUpSmall animated"
                        href="https://ld-wt73.template-help.com/wt_prod-19591/hosting.html"
                        data-caption-animate="fadeInUpSmall"
                        data-caption-delay={250}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 1"
              aria-current="true"
            />
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 2"
            />
          </div>
          <div
            className="swiper-button-prev"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-6ec1bc1f1e7b7c9e"
          />
          <div
            className="swiper-button-next"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-6ec1bc1f1e7b7c9e"
          />
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </section>
        {/* Our service*/}
        <section className="section section-lg bg-white text-center">
          <div className="container">
            <h2>Our Services</h2>
            <div className="row row-30 justify-content-md-center">
              <div className="col-md-6 col-lg-4">
                {/* Box Chloe*/}
                <article className="box-chloe box-chloe_secondary">
                  <div className="box-chloe__icon linearicons-window" />
                  <div className="box-chloe__main">
                    <h4 className="box-chloe__title">Windows Applications</h4>
                    <p>
                      We design and develop a variety of applications for Windows
                      including specialized and custom software.
                    </p>
                    <a
                      className="button button-sm button-default button-ujarak"
                      href="https://ld-wt73.template-help.com/wt_prod-19591/hosting.html"
                    >
                      View Details
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                {/* Box Chloe*/}
                <article className="box-chloe box-chloe_secondary">
                  <div className="box-chloe__icon linearicons-database-check" />
                  <div className="box-chloe__main">
                    <h4 className="box-chloe__title">Database Management</h4>
                    <p>
                      TechSoft provides top-notch database management solutions for
                      small and medium businesses worldwide.
                    </p>
                    <a
                      className="button button-sm button-default button-ujarak"
                      href="https://ld-wt73.template-help.com/wt_prod-19591/hosting.html"
                    >
                      View Details
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                {/* Box Chloe*/}
                <article className="box-chloe box-chloe_secondary">
                  <div className="box-chloe__icon linearicons-vector" />
                  <div className="box-chloe__main">
                    <h4 className="box-chloe__title">UX &amp; UI Design</h4>
                    <p>
                      Our team of UX designers creates easy-to-understand interfaces
                      for all kinds of applications.
                    </p>
                    <a
                      className="button button-sm button-default button-ujarak"
                      href="https://ld-wt73.template-help.com/wt_prod-19591/hosting.html"
                    >
                      View Details
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                {/* Box Chloe*/}
                <article className="box-chloe box-chloe_secondary">
                  <div className="box-chloe__icon linearicons-desktop" />
                  <div className="box-chloe__main">
                    <h4 className="box-chloe__title">iOS/MacOS Apps</h4>
                    <p>
                      Our company also develops multipurpose applications for iOS and
                      MacOS systems and devices.
                    </p>
                    <a
                      className="button button-sm button-default button-ujarak"
                      href="https://ld-wt73.template-help.com/wt_prod-19591/hosting.html"
                    >
                      View Details
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                {/* Box Chloe*/}
                <article className="box-chloe box-chloe_secondary">
                  <div className="box-chloe__icon linearicons-bug" />
                  <div className="box-chloe__main">
                    <h4 className="box-chloe__title">QA &amp; Testing</h4>
                    <p>
                      We pay a lot of attention to QA and Testing procedures to ensure
                      the best quality of our software.
                    </p>
                    <a
                      className="button button-sm button-default button-ujarak"
                      href="https://ld-wt73.template-help.com/wt_prod-19591/hosting.html"
                    >
                      View Details
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                {/* Box Chloe*/}
                <article className="box-chloe box-chloe_secondary">
                  <div className="box-chloe__icon linearicons-tablet2" />
                  <div className="box-chloe__main">
                    <h4 className="box-chloe__title">Android Applications</h4>
                    <p>
                      Our Android apps are highly rated by media and our users as they
                      offer great features on all Android devices.
                    </p>
                    <a
                      className="button button-sm button-default button-ujarak"
                      href="https://ld-wt73.template-help.com/wt_prod-19591/hosting.html"
                    >
                      View Details
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Tables*/}
        <section className="section section-md bg-gray-2 text-center oh">
          <div
            className="container wow fadeInUpSmall"
            style={{ visibility: "visible", animationName: "fadeInUpSmall" }}
          >
            <h2>Pricing Plans</h2>
            <div className="pricing-table pricing-table-classic">
              {/* Pricing table item*/}
              <article className="pricing-table__item pricing-table-classic__item">
                <div className="pricing-table__item-header">
                  <p className="pricing-table__item-title">Basic</p>
                </div>
                <div className="pricing-table__item-price">
                  <span className="pricing-table__item-price-currency">$</span>
                  <span className="pricing-table__item-price-value">399</span>
                  <div className="pricing-table__item-price-aside">
                    <span className="top">99</span>
                  </div>
                </div>
                <ul className="pricing-table__item-features">
                  <li>
                    <span className="text-marked">
                      Concept development
                      <br />
                      UI design
                    </span>
                  </li>
                  <li>Configuration management</li>
                  <li>Software quality assurance</li>
                  <li>App integration</li>
                </ul>
                <div className="pricing-table__item-control">
                  <a
                    className="button button-default button-ujarak"
                    href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                  >
                    Order now
                  </a>
                </div>
              </article>
              {/* Pricing table item*/}
              <article className="pricing-table__item pricing-table-classic__item pricing-table-classic__item_prefered">
                <div className="pricing-table__item-header">
                  <div className="pricing-table__item-label">Bestseller</div>
                  <p className="pricing-table__item-title">Optimal</p>
                </div>
                <div className="pricing-table__item-price">
                  <span className="pricing-table__item-price-currency">$</span>
                  <span className="pricing-table__item-price-value">599</span>
                  <div className="pricing-table__item-price-aside">
                    <span className="top">99</span>
                  </div>
                </div>
                <ul className="pricing-table__item-features">
                  <li>
                    <span className="text-marked">
                      Concept development
                      <br />
                      UI design
                    </span>
                  </li>
                  <li>
                    <span className="text-marked">Configuration management</span>
                  </li>
                  <li>
                    <span className="text-marked">Software quality assurance</span>
                  </li>
                  <li>App integration</li>
                </ul>
                <div className="pricing-table__item-control">
                  <a
                    className="button btn-primary"
                    href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                  >
                    Order now
                  </a>
                </div>
              </article>
              {/* Pricing table item*/}
              <article className="pricing-table__item pricing-table-classic__item">
                <div className="pricing-table__item-header">
                  <p className="pricing-table__item-title">Ultimate</p>
                </div>
                <div className="pricing-table__item-price">
                  <span className="pricing-table__item-price-currency">$</span>
                  <span className="pricing-table__item-price-value">999</span>
                  <div className="pricing-table__item-price-aside">
                    <span className="top">99</span>
                  </div>
                </div>
                <ul className="pricing-table__item-features">
                  <li>
                    <span className="text-marked">
                      Concept development
                      <br />
                      UI design
                    </span>
                  </li>
                  <li>
                    <span className="text-marked">Configuration management</span>
                  </li>
                  <li>
                    <span className="text-marked">Software quality assurance</span>
                  </li>
                  <li>
                    <span className="text-marked">App integration</span>
                  </li>
                </ul>
                <div className="pricing-table__item-control">
                  <a
                    className="button button-default button-ujarak"
                    href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                  >
                    Order now
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Why Choose Us*/}
        <section className="section section-sm bg-white text-center">
          <div className="container">
            <h2>Why Choose Us</h2>
            <div
              className="row row-30 wow fadeIn"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <div className="col-md-6 col-lg-4">
                {/* Box Alice*/}
                <article className="box-alice">
                  <div className="box-alice__inner">
                    <div className="box-alice__aside">
                      <div className="box-alice__icon-outer">
                        <div className="icon-figure">
                          <div className="box-triangle">
                            <svg
                              x="0px"
                              y="0px"
                              width="80px"
                              height="80px"
                              viewBox="0 0 100 100"
                              style={{ fill: "#f7f7f7" }}
                            >
                              <path d="M20,93.301c-11,0-15.5-7.794-10-17.321l30-51.962c5.5-9.526,14.5-9.526,20,0l30,51.962 c5.5,9.526,1,17.321-10,17.321H20z" />
                            </svg>
                          </div>
                          <span className="box-alice__icon linearicons-cog" />
                        </div>
                      </div>
                    </div>
                    <div className="box-alice__main">
                      <h5 className="box-alice__title">High Quality Hardware</h5>
                      <p>
                        We use top-notch hardware to develop the most efficient apps
                        for our customers.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                {/* Box Alice*/}
                <article className="box-alice">
                  <div className="box-alice__inner">
                    <div className="box-alice__aside">
                      <div className="box-alice__icon-outer">
                        <div className="icon-figure">
                          <div className="box-triangle">
                            <svg
                              x="0px"
                              y="0px"
                              width="80px"
                              height="80px"
                              viewBox="0 0 100 100"
                              style={{ fill: "#f7f7f7" }}
                            >
                              <path d="M20,93.301c-11,0-15.5-7.794-10-17.321l30-51.962c5.5-9.526,14.5-9.526,20,0l30,51.962 c5.5,9.526,1,17.321-10,17.321H20z" />
                            </svg>
                          </div>
                          <span className="box-alice__icon linearicons-headset" />
                        </div>
                      </div>
                    </div>
                    <div className="box-alice__main">
                      <h5 className="box-alice__title">Dedicated 24\7 Support</h5>
                      <p>
                        You can rely on our 24/7 tech support that will gladly solve
                        any app issue you may have.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                {/* Box Alice*/}
                <article className="box-alice">
                  <div className="box-alice__inner">
                    <div className="box-alice__aside">
                      <div className="box-alice__icon-outer">
                        <div className="icon-figure">
                          <div className="box-triangle">
                            <svg
                              x="0px"
                              y="0px"
                              width="80px"
                              height="80px"
                              viewBox="0 0 100 100"
                              style={{ fill: "#f7f7f7" }}
                            >
                              <path d="M20,93.301c-11,0-15.5-7.794-10-17.321l30-51.962c5.5-9.526,14.5-9.526,20,0l30,51.962 c5.5,9.526,1,17.321-10,17.321H20z" />
                            </svg>
                          </div>
                          <span className="box-alice__icon linearicons-wallet" />
                        </div>
                      </div>
                    </div>
                    <div className="box-alice__main">
                      <h5 className="box-alice__title">
                        30-Day Money-back Guarantee
                      </h5>
                      <p>
                        If you are not satisfied with our apps, we will return your
                        money in the first 30 days.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                {/* Box Alice*/}
                <article className="box-alice">
                  <div className="box-alice__inner">
                    <div className="box-alice__aside">
                      <div className="box-alice__icon-outer">
                        <div className="icon-figure">
                          <div className="box-triangle">
                            <svg
                              x="0px"
                              y="0px"
                              width="80px"
                              height="80px"
                              viewBox="0 0 100 100"
                              style={{ fill: "#f7f7f7" }}
                            >
                              <path d="M20,93.301c-11,0-15.5-7.794-10-17.321l30-51.962c5.5-9.526,14.5-9.526,20,0l30,51.962 c5.5,9.526,1,17.321-10,17.321H20z" />
                            </svg>
                          </div>
                          <span className="box-alice__icon linearicons-rocket" />
                        </div>
                      </div>
                    </div>
                    <div className="box-alice__main">
                      <h5 className="box-alice__title">
                        Agile and Fast Working Style
                      </h5>
                      <p>
                        This type of approach to our work helps our specialists to
                        quickly develop better apps.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                {/* Box Alice*/}
                <article className="box-alice">
                  <div className="box-alice__inner">
                    <div className="box-alice__aside">
                      <div className="box-alice__icon-outer">
                        <div className="icon-figure">
                          <div className="box-triangle">
                            <svg
                              x="0px"
                              y="0px"
                              width="80px"
                              height="80px"
                              viewBox="0 0 100 100"
                              style={{ fill: "#f7f7f7" }}
                            >
                              <path d="M20,93.301c-11,0-15.5-7.794-10-17.321l30-51.962c5.5-9.526,14.5-9.526,20,0l30,51.962 c5.5,9.526,1,17.321-10,17.321H20z" />
                            </svg>
                          </div>
                          <span className="box-alice__icon linearicons-phone" />
                        </div>
                      </div>
                    </div>
                    <div className="box-alice__main">
                      <h5 className="box-alice__title">Some Apps are Free</h5>
                      <p>
                        We also develop free apps that can be downloaded online
                        without any payments.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                {/* Box Alice*/}
                <article className="box-alice">
                  <div className="box-alice__inner">
                    <div className="box-alice__aside">
                      <div className="box-alice__icon-outer">
                        <div className="icon-figure">
                          <div className="box-triangle">
                            <svg
                              x="0px"
                              y="0px"
                              width="80px"
                              height="80px"
                              viewBox="0 0 100 100"
                              style={{ fill: "#f7f7f7" }}
                            >
                              <path d="M20,93.301c-11,0-15.5-7.794-10-17.321l30-51.962c5.5-9.526,14.5-9.526,20,0l30,51.962 c5.5,9.526,1,17.321-10,17.321H20z" />
                            </svg>
                          </div>
                          <span className="box-alice__icon linearicons-thumbs-up" />
                        </div>
                      </div>
                    </div>
                    <div className="box-alice__main">
                      <h5 className="box-alice__title">High Level of Usability</h5>
                      <p>
                        All our products have high usability allowing users to easily
                        operate the apps.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* Facts*/}
        <section
          className="section parallax-container bg-gray-darker"
          data-parallax-img="techsoft/images/bg-2-1920x545.jpg"
        >
          <div className="material-parallax parallax">
            <img
              src="./techsoft/images/bg-2-1920x545.jpg"
              alt=""
              style={{ display: "block", transform: "translate3d(-50%, 0px, 0px)" }}
            />
          </div>
          <div className="parallax-content">
            <div className="section-lg text-center text-sm-start">
              <div className="container">
                <div className="row row-50 flex-md-row-reverse justify-content-md-between align-items-center align-items-lg-start">
                  <div
                    className="col-md-5 wow fadeInRightSmall"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInRightSmall"
                    }}
                  >
                    <div className="box-width-3 box-centered">
                      <h2>Some Facts About Us</h2>
                      <p className="text-style-1">
                        More than 1000 applications developed
                      </p>
                      <a
                        className="button button-lg btn-primary button-ujarak"
                        href="https://ld-wt73.template-help.com/wt_prod-19591/about.html"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-md-7 col-lg-6 wow fadeInLeftSmall"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInLeftSmall"
                    }}
                  >
                    <div className="row row-style-1">
                      <div className="col-sm-6">
                        <div className="col-inner">
                          {/* Box counter*/}
                          {/*Counter*/}
                          <article className="box-counter box-counter_modern">
                            <div className="box-counter__main">
                              <div className="box-counter__icon linearicons-outbox" />
                              <div className="counter-prefix">1.</div>
                              <div className="counter animated-first">6</div>
                              <div className="small">k</div>
                            </div>
                            <p className="box-counter__title">Apps Installed</p>
                          </article>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="col-inner">
                          {/* Box counter*/}
                          {/*Counter*/}
                          <article className="box-counter box-counter_modern">
                            <div className="box-counter__main">
                              <div className="box-counter__icon linearicons-diamond2" />
                              <div className="counter animated-first">27</div>
                            </div>
                            <p className="box-counter__title">Awards Won</p>
                          </article>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="col-inner">
                          {/*Counter*/}
                          <article className="box-counter box-counter_modern">
                            <div className="box-counter__main">
                              <div className="box-counter__icon linearicons-user" />
                              <div className="counter animated-first">45</div>
                              <div className="counter-postfix">+</div>
                            </div>
                            <p className="box-counter__title">Staff Members</p>
                          </article>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="col-inner">
                          {/*Counter*/}
                          <article className="box-counter box-counter_modern">
                            <div className="box-counter__main">
                              <div className="box-counter__icon linearicons-heart" />
                              <div className="counter animated-first">99</div>
                              <div className="small small_top">%</div>
                            </div>
                            <p className="box-counter__title">Satisfied Customers</p>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Clients*/}
        <section className="section section-md bg-gray-light text-center">
          <svg x="0px" y="0px" width={0} height={0}>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00abfa" />
                <stop offset="100%" stopColor="#00caad" />
              </linearGradient>
            </defs>
          </svg>
          <div className="container">
            <h2>Our Clients</h2>
            {/* Owl Carousel*/}
            <div
              className="owl-outer-navigation-wrap owl-carousel_nav-modern wow fadeIn"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <div
                className="owl-carousel quote-creative-carousel review-carousel owl-loaded owl-drag"
                data-items={1}
                data-lg-items={2}
                data-stage-padding={0}
                data-margin={30}
                data-owl='{"dots":true,"nav":true,"loop":true,"autoplayTimeout":3500,"navContainer":"#owl-carousel-nav","dotsEach":1}'
                style={{}}
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-1800px, 0px, 0px)",
                      transition: "0.25s",
                      width: 3600
                    }}
                  >
                    <div
                      className="owl-item cloned"
                      style={{ width: 570, marginRight: 30 }}
                    >
                      <div className="item">
                        {/* Quote Creative*/}
                        <article className="quote-creative">
                          <div className="quote-creative__header">
                            <div className="quote-creative__media">
                              <img
                                src="./techsoft/images/user-2-112x99.jpg"
                                alt=""
                                width={112}
                                height={99}
                              />
                            </div>
                            <div className="quote-creative__info">
                              <p className="quote-creative__title">Michael Johnson</p>
                              <p className="quote-creative__subtitle">
                                Regular Client
                              </p>
                            </div>
                          </div>
                          <div className="quote-creative__main">
                            <div className="quote-creative__mark">
                              <svg
                                x="0px"
                                y="0px"
                                width="39px"
                                height="21px"
                                viewBox="0 0 39 21"
                              >
                                <g fill="url(#grad1)">
                                  <polyline points="8.955,21 0,14.031 0.002,0.001 15.984,0.001 15.984,13.984 8.969,14.016 " />
                                  <polyline points="31.97,20.999 23.016,14.031 23.018,0.001 39,0.001 39,13.984 31.984,14.015 " />
                                </g>
                              </svg>
                            </div>
                            <div className="quote-creative__main-text">
                              <p>
                                TechSoft offers a high caliber of resources skilled in
                                Microsoft Azure .NET, mobile and Quality Assurance.
                                They became our true business partners over the past
                                three years of our cooperation.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 570, marginRight: 30 }}
                    >
                      <div className="item">
                        {/* Quote Creative*/}
                        <article className="quote-creative">
                          <div className="quote-creative__header">
                            <div className="quote-creative__media">
                              <img
                                src="./techsoft/images/user-1-112x99.jpg"
                                alt=""
                                width={112}
                                height={99}
                              />
                            </div>
                            <div className="quote-creative__info">
                              <p className="quote-creative__title">Rachel Adams</p>
                              <p className="quote-creative__subtitle">
                                Regular Client
                              </p>
                            </div>
                          </div>
                          <div className="quote-creative__main">
                            <div className="quote-creative__mark">
                              <svg
                                x="0px"
                                y="0px"
                                width="39px"
                                height="21px"
                                viewBox="0 0 39 21"
                              >
                                <g fill="url(#grad1)">
                                  <polyline points="8.955,21 0,14.031 0.002,0.001 15.984,0.001 15.984,13.984 8.969,14.016 " />
                                  <polyline points="31.97,20.999 23.016,14.031 23.018,0.001 39,0.001 39,13.984 31.984,14.015 " />
                                </g>
                              </svg>
                            </div>
                            <div className="quote-creative__main-text">
                              <p>
                                TechSoft is a highly skilled and uniquely capable firm
                                with multitudes of talent on-board. We have
                                collaborated on a number of diverse projects that have
                                been a great success.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 570, marginRight: 30 }}>
                      <div className="item">
                        {/* Quote Creative*/}
                        <article className="quote-creative">
                          <div className="quote-creative__header">
                            <div className="quote-creative__media">
                              <img
                                src="./techsoft/images/user-2-112x99.jpg"
                                alt=""
                                width={112}
                                height={99}
                              />
                            </div>
                            <div className="quote-creative__info">
                              <p className="quote-creative__title">Michael Johnson</p>
                              <p className="quote-creative__subtitle">
                                Regular Client
                              </p>
                            </div>
                          </div>
                          <div className="quote-creative__main">
                            <div className="quote-creative__mark">
                              <svg
                                x="0px"
                                y="0px"
                                width="39px"
                                height="21px"
                                viewBox="0 0 39 21"
                              >
                                <g fill="url(#grad1)">
                                  <polyline points="8.955,21 0,14.031 0.002,0.001 15.984,0.001 15.984,13.984 8.969,14.016 " />
                                  <polyline points="31.97,20.999 23.016,14.031 23.018,0.001 39,0.001 39,13.984 31.984,14.015 " />
                                </g>
                              </svg>
                            </div>
                            <div className="quote-creative__main-text">
                              <p>
                                TechSoft offers a high caliber of resources skilled in
                                Microsoft Azure .NET, mobile and Quality Assurance.
                                They became our true business partners over the past
                                three years of our cooperation.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: 570, marginRight: 30 }}
                    >
                      <div className="item">
                        {/* Quote Creative*/}
                        <article className="quote-creative">
                          <div className="quote-creative__header">
                            <div className="quote-creative__media">
                              <img
                                src="./techsoft/images/user-1-112x99.jpg"
                                alt=""
                                width={112}
                                height={99}
                              />
                            </div>
                            <div className="quote-creative__info">
                              <p className="quote-creative__title">Rachel Adams</p>
                              <p className="quote-creative__subtitle">
                                Regular Client
                              </p>
                            </div>
                          </div>
                          <div className="quote-creative__main">
                            <div className="quote-creative__mark">
                              <svg
                                x="0px"
                                y="0px"
                                width="39px"
                                height="21px"
                                viewBox="0 0 39 21"
                              >
                                <g fill="url(#grad1)">
                                  <polyline points="8.955,21 0,14.031 0.002,0.001 15.984,0.001 15.984,13.984 8.969,14.016 " />
                                  <polyline points="31.97,20.999 23.016,14.031 23.018,0.001 39,0.001 39,13.984 31.984,14.015 " />
                                </g>
                              </svg>
                            </div>
                            <div className="quote-creative__main-text">
                              <p>
                                TechSoft is a highly skilled and uniquely capable firm
                                with multitudes of talent on-board. We have
                                collaborated on a number of diverse projects that have
                                been a great success.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned active"
                      style={{ width: 570, marginRight: 30 }}
                    >
                      <div className="item">
                        {/* Quote Creative*/}
                        <article className="quote-creative">
                          <div className="quote-creative__header">
                            <div className="quote-creative__media">
                              <img
                                src="./techsoft/images/user-2-112x99.jpg"
                                alt=""
                                width={112}
                                height={99}
                              />
                            </div>
                            <div className="quote-creative__info">
                              <p className="quote-creative__title">Michael Johnson</p>
                              <p className="quote-creative__subtitle">
                                Regular Client
                              </p>
                            </div>
                          </div>
                          <div className="quote-creative__main">
                            <div className="quote-creative__mark">
                              <svg
                                x="0px"
                                y="0px"
                                width="39px"
                                height="21px"
                                viewBox="0 0 39 21"
                              >
                                <g fill="url(#grad1)">
                                  <polyline points="8.955,21 0,14.031 0.002,0.001 15.984,0.001 15.984,13.984 8.969,14.016 " />
                                  <polyline points="31.97,20.999 23.016,14.031 23.018,0.001 39,0.001 39,13.984 31.984,14.015 " />
                                </g>
                              </svg>
                            </div>
                            <div className="quote-creative__main-text">
                              <p>
                                TechSoft offers a high caliber of resources skilled in
                                Microsoft Azure .NET, mobile and Quality Assurance.
                                They became our true business partners over the past
                                three years of our cooperation.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 570, marginRight: 30 }}
                    >
                      <div className="item">
                        {/* Quote Creative*/}
                        <article className="quote-creative">
                          <div className="quote-creative__header">
                            <div className="quote-creative__media">
                              <img
                                src="./techsoft/images/user-1-112x99.jpg"
                                alt=""
                                width={112}
                                height={99}
                              />
                            </div>
                            <div className="quote-creative__info">
                              <p className="quote-creative__title">Rachel Adams</p>
                              <p className="quote-creative__subtitle">
                                Regular Client
                              </p>
                            </div>
                          </div>
                          <div className="quote-creative__main">
                            <div className="quote-creative__mark">
                              <svg
                                x="0px"
                                y="0px"
                                width="39px"
                                height="21px"
                                viewBox="0 0 39 21"
                              >
                                <g fill="url(#grad1)">
                                  <polyline points="8.955,21 0,14.031 0.002,0.001 15.984,0.001 15.984,13.984 8.969,14.016 " />
                                  <polyline points="31.97,20.999 23.016,14.031 23.018,0.001 39,0.001 39,13.984 31.984,14.015 " />
                                </g>
                              </svg>
                            </div>
                            <div className="quote-creative__main-text">
                              <p>
                                TechSoft is a highly skilled and uniquely capable firm
                                with multitudes of talent on-board. We have
                                collaborated on a number of diverse projects that have
                                been a great success.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-dots disabled">
                  <button role="button" className="owl-dot">
                    <span />
                  </button>
                  <button role="button" className="owl-dot active">
                    <span />
                  </button>
                </div>
              </div>
              <div className="owl-outer-navigation disabled" id="owl-carousel-nav">
                <button type="button" role="presentation" className="owl-prev" />
                <button type="button" role="presentation" className="owl-next" />
              </div>
            </div>
          </div>
        </section>
        {/* Partners*/}
        <section className="section section-md bg-white text-center">
          <div className="container">
            <div className="row row-30 align-items-sm-center">
              <div
                className="col-sm-6 col-md-3 wow fadeIn"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <a
                  className="link-image"
                  href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                >
                  <img
                    src="./techsoft/images/brand-1-126x68.png"
                    alt=""
                    width={126}
                    height={68}
                  />
                </a>
              </div>
              <div
                className="col-sm-6 col-md-3 wow fadeIn"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <a
                  className="link-image"
                  href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                >
                  <img
                    src="./techsoft/images/brand-2-126x100.png"
                    alt=""
                    width={126}
                    height={100}
                  />
                </a>
              </div>
              <div
                className="col-sm-6 col-md-3 wow fadeIn"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <a
                  className="link-image"
                  href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                >
                  <img
                    src="./techsoft/images/brand-3-134x83.png"
                    alt=""
                    width={134}
                    height={83}
                  />
                </a>
              </div>
              <div
                className="col-sm-6 col-md-3 wow fadeIn"
                style={{ visibility: "hidden", animationName: "none" }}
              >
                <a
                  className="link-image"
                  href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                >
                  <img
                    src="./techsoft/images/brand-4-138x55.png"
                    alt=""
                    width={138}
                    height={55}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Page Footer*/}
        <footer className="section footer-classic context-dark">
          <div className="footer-classic__main bg-gray-3">
            <div className="container">
              <div className="row row-50 align-items-sm-end justify-content-sm-center justify-content-lg-start">
                <div className="col-lg-6">
                  <div className="footer-classic__custom-column">
                    <div className="unit flex-sm-row">
                      <div className="unit__left">
                        <span className="icon icon-md icon-default fl-bigmug-line-headphones32" />
                      </div>
                      <div className="unit__body">
                        <a className="link link-lg" href="tel:#">
                          1-800-700-6200
                        </a>
                        <p>Our Support Service is always available 24 hours a day</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-10 col-lg-6">
                  <div className="group-md">
                    <h3>Subscribe</h3>
                    <p className="large">Get the latest updates and offers</p>
                  </div>
                  {/* RD Mailform*/}
                  <form
                    className="rd-mailform form_inline form_lg"
                    data-form-output="form-output-global"
                    data-form-type="subscribe"
                    method="post"
                    action="https://ld-wt73.template-help.com/wt_prod-19591/bat/rd-mailform.php"
                    noValidate="novalidate"
                  >
                    <div className="form-wrap">
                      <input
                        className="form-input form-control-has-validation"
                        id="subscribe-form-footer-form-email"
                        type="email"
                        name="email"
                        data-constraints="@Email @Required"
                      />
                      <span className="form-validation" />
                      <label
                        className="form-label rd-input-label"
                        htmlFor="subscribe-form-footer-form-email"
                      >
                        Your E-mail
                      </label>
                    </div>
                    <div className="form-button">
                      <button
                        className="button button-lg button-primary button-ujarak"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row row-50 justify-content-md-center justify-content-lg-start justify-content-xl-between">
                <div className="col-md-5 col-lg-3">
                  <p className="custom-heading-1 custom-heading-bordered">About us</p>
                  <div className="divider" />
                  <p className="ls-05">
                    Our company has been developing high-quality and reliable software
                    for corporate needs since 2008.
                  </p>
                  <ul className="list-inline list-inline-xs">
                    <li>
                      <a
                        className="icon icon-xxs icon-circle icon-filled icon-filled_brand fa fa-facebook"
                        href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-xxs icon-circle icon-filled icon-filled_brand fa fa-twitter"
                        href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-xxs icon-circle icon-filled icon-filled_brand fa fa-google-plus"
                        href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                      />
                    </li>
                    <li>
                      <a
                        className="icon icon-xxs icon-circle icon-filled icon-filled_brand fa fa-instagram"
                        href="https://ld-wt73.template-help.com/wt_prod-19591/#"
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-md-5 col-lg-4 col-xl-3">
                  <p className="custom-heading-1 custom-heading-bordered">
                    Latest news
                  </p>
                  <div className="divider" />
                  <div className="post-small-wrap">
                    {/* Post small*/}
                    <article className="post-small">
                      <div className="post-small__aside">
                        <a
                          className="post-small__media"
                          href="https://ld-wt73.template-help.com/wt_prod-19591/blog-post.html"
                        >
                          <img
                            className="post-small__image"
                            src="./techsoft/images/post-small-1-80x68.jpg"
                            alt=""
                            width={80}
                            height={68}
                          />
                        </a>
                      </div>
                      <div className="post-small__main">
                        <p className="post-small__title">
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/blog-post.html">
                            Benefits of Async/Await in Programming
                          </a>
                        </p>
                        <time className="post-small__time" dateTime={2024}>
                          January 12, 2024
                        </time>
                      </div>
                    </article>
                    {/* Post small*/}
                    <article className="post-small">
                      <div className="post-small__aside">
                        <a
                          className="post-small__media"
                          href="https://ld-wt73.template-help.com/wt_prod-19591/blog-post.html"
                        >
                          <img
                            className="post-small__image"
                            src="./techsoft/images/post-small-2-80x68.jpg"
                            alt=""
                            width={80}
                            height={68}
                          />
                        </a>
                      </div>
                      <div className="post-small__main">
                        <p className="post-small__title">
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/blog-post.html">
                            Key Considerations and Warnings of iPaaS
                          </a>
                        </p>
                        <time className="post-small__time" dateTime={2024}>
                          January 12, 2024
                        </time>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-md-10 col-lg-5 col-xl-4">
                  <p className="custom-heading-1 custom-heading-bordered">
                    Useful Links
                  </p>
                  <div className="divider" />
                  <div className="row row-5">
                    <div className="col-sm-6">
                      <ul className="list-marked list-marked_primary">
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/#">
                            DB Management
                          </a>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/#">
                            iOS/MacOs Apps
                          </a>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/#">
                            Android Apps
                          </a>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/#">
                            Windows Apps
                          </a>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/#">
                            UX Design
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="list-marked list-marked_primary">
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/#">
                            Tutorials
                          </a>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/#">
                            Product Support
                          </a>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/contact-us.html">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="https://ld-wt73.template-help.com/wt_prod-19591/blog.html">
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-default__aside bg-gray-5">
            <div className="container">
              <div className="footer-default__aside-inner">
                {/* Rights*/}
                <p className="rights">
                  <span>©&nbsp;</span>
                  <span className="copyright-year">2024</span>
                  <span>&nbsp;</span>
                  <span>Techsoft</span>
                  <span>.&nbsp;</span>
                  <a href="https://ld-wt73.template-help.com/wt_prod-19591/privacy-policy.html">
                    Privacy Policy
                  </a>
                </p>
                <ul className="list-separated list-inline">
                  <li>
                    <a href="https://ld-wt73.template-help.com/wt_prod-19591/faq.html">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="https://ld-wt73.template-help.com/wt_prod-19591/#">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="snackbars" id="form-output-global" />

      <a href="#" id="ui-to-top" className="ui-to-top fa fa-angle-up active" />

    </div>
    </PrimeReactProvider>
  );
}

export default App;
