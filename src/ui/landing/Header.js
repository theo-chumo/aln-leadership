import React from "react";

const Header = () => {
  return (
    <header class="header-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <a href="blue-index.html" class="logo">
                <img src="assets/images/logo-blue.png" alt="Kentho" />
              </a>
              <ul class="nav">
                <li>
                  <a href="blue-index.html#welcome">Home</a>
                </li>
                <li class="submenu">
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
                <li class="submenu">
                  <a>Pages</a>
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
              <a class="menu-trigger">
                <span>Menu</span>
              </a>

              <ul class="header-buttons">
                <li>
                  <a class="btn-nav-line" href="#">
                    SIGN IN
                  </a>
                </li>
                <li>
                  <a class="btn-nav-primary" href="#">
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
