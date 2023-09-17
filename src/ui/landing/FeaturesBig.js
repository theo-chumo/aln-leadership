import React from "react";

const FeaturesBig = () => {
  return (
    <section className="section padding-bottom-80 colored" id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
            <div className="left-heading">
              <h2 className="section-title">Reservations Management</h2>
            </div>
            <div className="left-text">
              <p>
                Phasellus vitae velit sit amet diam semper commodo quis quis
                libero. Morbi consequat arcu augue, molestie faucibus metus
                ullamcorper vel.
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <a className="btn-home active" href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>Sed facilisis tempor dolor, ac mollis</span>
                  </a>
                </div>
                <div className="col-lg-12">
                  <a className="btn-home" href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>Donec ac lectus in lacus.</span>
                  </a>
                </div>
                <div className="col-lg-12">
                  <a className="btn-home" href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>Praesent mauris risus, condimentum ac</span>
                  </a>
                </div>
                <div className="col-lg-12">
                  <a className="btn-home" href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>Quisque cursus viverra justo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix"
            data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
          >
            <img
              src="assets/images/photos/features/blue-1.png"
              className="img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBig;
