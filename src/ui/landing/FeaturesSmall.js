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
                  <h5 className="features-title">100% Secure Service</h5>
                  <p>
                    Assess the Tax Compliance of your business from anywhere at anytime!
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
                  <h5 className="features-title">Automated and Seamless Solutions</h5>
                  <p>
                    Powered by best in class algorithms and machine learning toolsets.
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
                  <h5 className="features-title">Access the top Tax Advisors In Kenya</h5>
                  <p>
                    Backed by the A&K Tax Advisors who have advised top matters in Kenya,
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
                  <h5 className="features-title">Free and Always Upto Date</h5>
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
