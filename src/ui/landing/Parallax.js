import React from "react";

const Parallax = () => {
  return (
    <section className="parallax" id="parallax-text">
      <div className="parallax-content">
        <div className="container">
          <div className="row">
            <div className="offset-lg-2 col-lg-8">
              <div className="info">
                <p>
                  Here you'll find handy documentation about our APIs and SDKs.
                  Choose below.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 api-btn-content">
              <a href="#" className="btn-api">
                <i className="fa fa-code"></i>
                <span>Web API</span>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 api-btn-content">
              <a href="#" className="btn-api">
                <i className="fa fa-apple"></i>
                <span>iOS SDK</span>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 api-btn-content">
              <a href="#" className="btn-api">
                <i className="fa fa-android"></i>
                <span>Android SDK</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
