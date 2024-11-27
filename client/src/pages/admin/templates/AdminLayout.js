import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MyNavbarVertical from './../customComponents/Navbar/MyNavBarVertical';
import NavbarFixedTop from './../defaultComponents/navbarFixedTop';
import { headTextCss } from './../constansts/textCss';
import { scriptJs } from '../constansts/scriptJs';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>WMB - Admin</title>
        <style type='text/css' dangerouslySetInnerHTML={{ __html: headTextCss }} />
        <link rel="apple-touch-icon" sizes="180x180" href="/admin/assets/img/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/admin/assets/img/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/admin/assets/img/favicons/favicon-16x16.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/admin/assets/img/favicons/favicon.ico" />
        <link rel="manifest" href="/admin/assets/img/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="/admin/assets/img/favicons/mstile-150x150.png" />
        <meta name="theme-color" content="#ffffff" />
        <script src="/admin/vendors/simplebar/simplebar.min.js"></script>
        <script src="/admin/assets/js/config.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
        <link href="/admin/assets/css/theme.min.css" type="text/css" rel="stylesheet" id="style-default" />
        <link href="/admin/assets/css/user.min.css" type="text/css" rel="stylesheet" id="user-style-default" />
        <link href="/admin/vendors/leaflet/leaflet.css" rel="stylesheet" />
        <link href="/admin/vendors/leaflet.markercluster/MarkerCluster.css" rel="stylesheet" />
        <link href="/admin/vendors/leaflet.markercluster/MarkerCluster.Default.css" rel="stylesheet" />
      </Helmet>
      <main className="main" id="top">
        <MyNavbarVertical />
        <NavbarFixedTop />
        <script dangerouslySetInnerHTML={{ __html: scriptJs }} />
        <div className="content">
          <div className='pb-5'>
            <div className='col-12 col-xxl-6'>
              {children}
            </div>
          </div>
          <footer className="footer position-absolute">
            <div className="row g-0 justify-content-between align-items-center h-100">
              <div className="col-12 col-sm-auto text-center">
                <p className="mb-0 mt-2 mt-sm-0 text-body">
                  Thank you for creating with Phoenix
                  <span className="d-none d-sm-inline-block" />
                  <span className="d-none d-sm-inline-block mx-1">|</span>
                  <br className="d-sm-none" />
                  2024 ©
                  <a className="mx-1" href="https://themewagon.com">
                    Themewagon
                  </a>
                </p>
              </div>
              <div className="col-12 col-sm-auto text-center">
                <p className="mb-0 text-body-tertiary text-opacity-85">v1.20.1</p>
              </div>
            </div>
          </footer>

        </div>
      </main>
      <script src="/admin/vendors/popper/popper.min.js"></script>
      <script src="/admin/vendors/bootstrap/bootstrap.min.js"></script>
      <script src="/admin/vendors/anchorjs/anchor.min.js"></script>
      <script src="/admin/vendors/is/is.min.js"></script>
      <script src="/admin/vendors/fontawesome/all.min.js"></script>
      <script src="/admin/vendors/lodash/lodash.min.js"></script>
      <script src="/admin/vendors/list.js/list.min.js"></script>
      <script src="/admin/vendors/feather-icons/feather.min.js"></script>
      <script src="/admin/vendors/dayjs/dayjs.min.js"></script>
      <script src="/admin/vendors/leaflet/leaflet.js"></script>
      <script src="/admin/vendors/leaflet.markercluster/leaflet.markercluster.js"></script>
      <script src="/admin/vendors/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js"></script>
      <script src="/admin/assets/js/phoenix.js"></script>
      <script src="/admin/vendors/echarts/echarts.min.js"></script>
      <script src="/admin/assets/js/ecommerce-dashboard.js"></script>
    </div>
  );
}

export default AdminLayout;
