import React from "react";

const Header = () => {
  return (
    <header className="header-area header-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="blue-index.html" className="logo">
                <img src="assets/images/logo-blue.png" alt="Kentho" />
              </a>

              <ul className="nav">
                <li>
                  <a href="blue-index.html#welcome">Home</a>
                </li>
                <li className="submenu">
                  <a href="javascript:;">Discover</a>
                  <ul>
                    <li>
                      <a href="blue-index.html#features">Features</a>
                    </li>
                    <li>
                      <a href="blue-index.html#our-team">Our Team</a>
                    </li>
                    <li>
                      <a href="blue-index.html#pricing-plans">Pricing Plans</a>
                    </li>
                    <li>
                      <a href="blue-index.html#blog">Latests Blogs</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:;">Pages</a>
                  <ul>
                    <li>
                      <a href="blue-about.html">About Us</a>
                    </li>
                    <li>
                      <a href="blue-features.html">Features</a>
                    </li>
                    <li>
                      <a href="blue-faq.html">FAQ's</a>
                    </li>
                    <li>
                      <a href="blue-blog.html">Blog</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blue-contact.html">Contact</a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              <ul className="header-buttons">
                <li>
                  <a className="btn-nav-line" href="#">
                    SIGN IN
                  </a>
                </li>
                <li>
                  <a className="btn-nav-primary" href="#">
                    SIGN UP
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
