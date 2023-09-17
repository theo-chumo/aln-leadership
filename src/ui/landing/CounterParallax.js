import React from "react";

const CounterParallax = () => {
  return (
    <section className="parallax-counter" id="counter">
      <div className="parallax-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item">
                <strong>202</strong>
                <span>
                  Happy
                  <br />
                  Customer
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item">
                <strong>765</strong>
                <span>
                  Reservation
                  <br />
                  Request
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item">
                <strong>12</strong>
                <span>
                  Color
                  <br />
                  Template
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item">
                <strong>186</strong>
                <span>
                  Staff
                  <br />
                  Account
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterParallax;
