import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Loader from '../customComponents/navbar/Loader';
import Navbar from './../customComponents/navbar/Navbar';
import CarouselSlide from '../customComponents/carousel/CarouselSlide';
import CarouselGoToSlideButton from './../customComponents/carousel/CarouselGoToSlideButton';
import BoxChloe from '../customComponents/chloe/BoxChloe';
import PricingTable from '../customComponents/pricingTable/PricingTable';
import BoxAlice from './../customComponents/boxAlice/BoxAlice';
import ParallaxContent from '../customComponents/parallax/ParallaxContent';
import MiniCarousel from './../customComponents/miniCarousel/MiniCarousel';
import Partners from './../customComponents/partners/Partners';
import Footer from '../customComponents/footer/Footer';

import axios from 'axios';

const slides = [
  {
    imageUrl: "/techsoft/images/slider-classic-slide-2-1920x710.jpg",
    title: "Award-Winning Software",
    explanation: "The software solutions developed by our company have been numerously awarded for usability and innovative features.",
    buttonHref: "hosting.html",
    buttonLabel: "Read More",
    className: "swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev",
    ariaLabel: "2 / 2"
  },
  {
    imageUrl: "/techsoft/images/slider-classic-slide-1-1920x710.jpg",
    title: "Welcome to TechSoft",
    explanation: "Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate business purposes.",
    buttonHref: "hosting.html",
    buttonLabel: "Read More",
    className: "swiper-slide-duplicate-active",
    ariaLabel: "1 / 2"
  }
];
const HomeLayout = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const scriptLoading = () => {
    const srcPath = (src) => `/techsoft/js/${src}.js`;
    const CORE_MIN = "core.min";
    const SCRIPT = "script";

    const isScriptLoaded = (src) =>
      Array.from(document.scripts).some((script) => script.src.includes(src));

    if (!isScriptLoaded(srcPath(CORE_MIN))) {
      const coreScript = document.createElement(SCRIPT);
      coreScript.src = srcPath(CORE_MIN);
      coreScript.async = true;
      document.body.appendChild(coreScript);
    }

    if (!isScriptLoaded(srcPath(SCRIPT))) {
      const script = document.createElement(SCRIPT);
      script.src = srcPath(SCRIPT);
      script.async = true;
      document.body.appendChild(script);
    }
  };

  const getMenus = () => {
    axios.get("http://localhost:3003/api/navbar-menus").then((response) => {
      setMenus(response.data);
      console.log('response.data', response.data)
    }).catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    scriptLoading();
    getMenus();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="icon" href="/techsoft/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato:400,700%7CSpace+Mono" />
        <link rel="stylesheet" href="/techsoft/css/bootstrap.css" />
        <link rel="stylesheet" href="/techsoft/css/fonts.css" />
        <link rel="stylesheet" href="/techsoft/css/style.css" />
      </Helmet>
      <Loader />
      <div className="page animated" style={{ animationDuration: "500ms" }}>
        <header className="section page-header"><Navbar menus={menus}/> </header>
        {/* Swiper*/}
        <section
          className="section swiper-container swiper-slider swiper_style-1 swiper_height-1 swiper-controls-classic swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
          data-loop="true"
          data-autoplay={5000}
          data-swiper='{"simulateTouch":false}'
        >
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-24137effdb229f9c"
            aria-live="off"
            style={{
              transitionDuration: "0ms",
              transform: "translate3d(-4710px, 0px, 0px)"
            }}
          >
            {slides.map((slide, index) => (
              <CarouselSlide key={index} className={index % 2 === 0 ? "swiper-slide-duplicate" : "swiper-slide"} role="group" ariaLabel={index + 1 + " / " + slides.length} carouselData={slide}
              />
            ))}
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            {slides.map(index => (
              <CarouselGoToSlideButton key={index} index={index + 1} current={index === 0} />
            ))}
          </div>
          <CarouselGoToSlideButton prev />
          <CarouselGoToSlideButton prev={false} />
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
              <BoxChloe chloeData={{ icon: "linearicons-window", title: "Windows Applications", explanation: "We design and develop a variety of applications for Windows including specialized and custom software.", href: "hosting.html", buttonLabel: "View Details" }} />
              <BoxChloe chloeData={{ icon: "linearicons-database-check", title: "Database Management", explanation: "We offer database management services for all kinds of applications.", href: "hosting.html", buttonLabel: "View Details" }} />
              <BoxChloe chloeData={{ icon: "linearicons-vector", title: "UX & UI Design", explanation: "Our team of UX designers creates easy-to-understand interfaces for all kinds of applications.", href: "hosting.html", buttonLabel: "View Details" }} />
              <BoxChloe chloeData={{ icon: "linearicons-desktop", title: "iOS/MacOS Apps", explanation: "Our company also develops multipurpose applications for iOS and MacOS systems and devices.", href: "hosting.html", buttonLabel: "View Details" }} />
              <BoxChloe chloeData={{ icon: "linearicons-bug", title: "QA & Testing", explanation: "We pay a lot of attention to QA and Testing procedures to ensure the best quality of our software.", href: "hosting.html", buttonLabel: "View Details" }} />
              <BoxChloe chloeData={{ icon: "linearicons-tablet2", title: "Android Applications", explanation: "Our Android apps are highly rated by media and our users as they offer great features on all Android devices.", href: "hosting.html", buttonLabel: "View Details" }} />
            </div>
          </div>
        </section>
        {/* Pricing Tables*/}
        <section className="section section-md bg-gray-2 text-center oh">
          <div
            className="container wow fadeInUpSmall"
            style={{ visibility: "hidden", animationName: "none" }}
          >
            <h2>Pricing Plans</h2>
            <div className="pricing-table pricing-table-classic">
              <PricingTable pricingData={{
                title: "Basic",
                price: { currency: "$", price: "399", cent: "99" },
                features: {
                  boldTextList: ["Concept development UI design", "Configuration management", "Software quality assurance"],
                  regularTextList: ["Configuration management", "Software quality assurance", "App integration"]
                },
                href: "#",
                buttonLabel: "Order now",
                preferred: false,
                titleLabel: null
              }} />
              <PricingTable pricingData={{
                title: "Optimal",
                price: { currency: "$", price: "599", cent: "99" },
                features: {
                  boldTextList: ["Concept development UI design", "Configuration management", "Software quality assurance"],
                  regularTextList: ["Configuration management", "Software quality assurance", "App integration"]
                },
                href: "#",
                buttonLabel: "Order now",
                preferred: true,
                titleLabel: "Bestseller"
              }} />
              <PricingTable pricingData={{
                title: "Ultimate",
                price: { currency: "$", price: "999", cent: "99" },
                features: {
                  boldTextList: ["Concept development UI design", "Configuration management", "Software quality assurance", "App integration"],
                  regularTextList: []
                },
                href: "#",
                buttonLabel: "Order now",
                preferred: false,
                titleLabel: null
              }} />
            </div>
          </div>
        </section>
        {/* Why Choose Us*/}
        <section className="section section-sm bg-white text-center">
          <div className="container">
            <h2>Why Choose Us</h2>
            <div
              className="row row-30 wow fadeIn"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              <BoxAlice boxAliceData={{ icon: "linearicons-cog", title: "High Quality Hardware", explanation: "We use top-notch hardware to develop the most efficient apps for our customers." }} />
              <BoxAlice boxAliceData={{ icon: "linearicons-headset", title: "Dedicated 24\\7 Support", explanation: "You can rely on our 24/7 tech support that will gladly solve any app issue you may have." }} />
              <BoxAlice boxAliceData={{ icon: "linearicons-wallet", title: "30-Day Money-back Guarantee", explanation: "If you are not satisfied with our apps, we will return your money in the first 30 days." }} />
              <BoxAlice boxAliceData={{ icon: "linearicons-rocket", title: "Agile and Fast Working Style", explanation: "This type of approach to our work helps our specialists to quickly develop better apps." }} />
              <BoxAlice boxAliceData={{ icon: "linearicons-phone", title: "Some Apps are Free", explanation: "We also develop free apps that can be downloaded online without any payments." }} />
              <BoxAlice boxAliceData={{ icon: "linearicons-thumbs-up", title: "High Level of Usability", explanation: "All our products have high usability allowing users to easily operate the apps." }} />
            </div>
          </div>
        </section>
        {/* Facts*/}
        <section
          className="section parallax-container bg-gray-darker"
          data-parallax-img="/techsoft/images/bg-2-1920x545.jpg"
        >
          <div className="material-parallax parallax">
            <img
              src="/techsoft/images/bg-2-1920x545.jpg"
              alt=""
              style={{ display: "block" }}
            />
          </div>
          <ParallaxContent />
        </section>
        <MiniCarousel />
        <section className="section section-md bg-white text-center">
          <div className="container">
            <div className="row row-30 align-items-sm-center">
              <Partners src={"/techsoft/images/brand-1-126x68.png"} href={"#"} />
              <Partners src={"/techsoft/images/brand-2-126x100.png"} href={"#"} />
              <Partners src={"/techsoft/images/brand-3-134x83.png"} href={"#"} />
              <Partners src={"/techsoft/images/brand-4-138x55.png"} href={"#"} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <div className="snackbars" id="form-output-global" />
    </>
  );
}

export default HomeLayout;
