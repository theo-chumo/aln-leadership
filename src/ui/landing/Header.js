import React from "react";

const Header = () => {
  return (
    <header className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="blue-index.html" className="logo">
                <img src="../images/logo-blue.png" alt="A&K" />
              </a>
              
             
              <ul className="header-buttons">
               
                <li>
                  <a className="btn-nav-primary" href="#">
                    Get Started
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
