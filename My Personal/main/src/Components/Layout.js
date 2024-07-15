import React from "react";
import { Link } from 'react-router-dom';


export const Layout = () => {
  return (
    <div>
      {" "}
      <div className="pre-header" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-9">
              <div className="left-info">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i>+000 1234 5678
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope"></i>infocompany@email.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker"></i>St. London 54th Bull
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Pre-Header Area End ***** -->

  <!-- ***** Header Area Start ***** --> */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="/" className="logo">
                  <img
                    src="assets/images/logo.png"
                    alt=""
                    style={{ maxWidth: "112px" }}
                  />
                </a>
                {/* <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/faq">Faq</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                  {/* <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/faq">FAQs</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li> */}
                </ul>

                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ***** Header Area End ***** --> */}
    </div>
  );
};

export default Layout;