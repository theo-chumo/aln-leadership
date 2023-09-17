import React from "react";

const FeaturesSmall = () => {
  return (
    <section className="section padding-top-0 padding-bottom-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
              >
                <a href="blue-features-single.html" className="features-small-item">
                  <div className="icon">
                    <i className="fa fa-check-square-o"></i>
                  </div>
                  <h5 className="features-title">Manage In One Place</h5>
                  <p>
                    Morbilling pharetra sapiening ut mattis viverra. Curabitur
                    magna.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
              >
                <a
                  href="blue-features-single.html"
                  className="features-small-item active"
                >
                  <div className="icon">
                    <i className="fa fa-bed"></i>
                  </div>
                  <h5 className="features-title">Selling More Rooms</h5>
                  <p>
                    Donec pellentesque turpis utium lorem imperdiet semper
                    viverra.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
              >
                <a href="blue-features-single.html" className="features-small-item">
                  <div className="icon">
                    <i className="fa fa-bar-chart"></i>
                  </div>
                  <h5 className="features-title">Know Your Numbers</h5>
                  <p>
                    Facilisis arcu ligula, malesuada id tincidunt laoreet,
                    facilisis at justo.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.8s"
              >
                <a href="blue-features-single.html" className="features-small-item">
                  <div className="icon">
                    <i className="fa fa-shopping-cart"></i>
                  </div>
                  <h5 className="features-title">Fast & Secure Sales</h5>
                  <p>
                    Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                    at justo.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSmall;
