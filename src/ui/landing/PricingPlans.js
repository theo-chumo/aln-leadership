import React from "react";

const PricingPlans = () => {
  return (
    <section className="section colored padding-bottom-80" id="pricing-plans">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Pricing Plans</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                Donec vulputate urna sed rutrum venenatis. Cras consequat magna
                quis arcu elementum, quis congue risus volutpat.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
          >
            <div className="pricing-item">
              <div className="pricing-header">
                <h3 className="pricing-title">BASIC PLAN</h3>
              </div>
              <div className="pricing-body">
                <div className="number">
                  <span>1</span>
                </div>
                <div className="price-wrapper">
                  <span className="currency">$</span>
                  <span className="price">13.90</span>
                  <span className="period">/Month</span>
                </div>
                <ul className="list">
                  <li className="active">Unlimited Reservations</li>
                  <li className="active">2 Clients and Products</li>
                  <li className="active">Invoicing and Payments</li>
                  <li className="active">Housekeeping Status</li>
                  <li>Data Security and Backups</li>
                  <li>Unlimited Staff Accounts</li>
                  <li>Web Booking Widget</li>
                  <li>Monthly Reports and Analytics</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#">Select Plan</a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
          >
            <div className="pricing-item active">
              <div className="pricing-header">
                <h3 className="pricing-title">ADVANCED PLAN</h3>
              </div>
              <div className="pricing-body">
                <div className="number">
                  <span>2</span>
                </div>
                <div className="price-wrapper">
                  <span className="currency">$</span>
                  <span className="price">23.90</span>
                  <span className="period">/Month</span>
                </div>
                <ul className="list">
                  <li className="active">Unlimited Reservations</li>
                  <li className="active">2 Clients and Products</li>
                  <li className="active">Invoicing and Payments</li>
                  <li className="active">Housekeeping Status</li>
                  <li className="active">Data Security and Backups</li>
                  <li className="active">Unlimited Staff Accounts</li>
                  <li>Web Booking Widget</li>
                  <li>Monthly Reports and Analytics</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#">Select Plan</a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
          >
            <div className="pricing-item">
              <div className="pricing-header">
                <h3 className="pricing-title">EXPERT PLAN</h3>
              </div>
              <div className="pricing-body">
                <div className="number">
                  <span>3</span>
                </div>
                <div className="price-wrapper">
                  <span className="currency">$</span>
                  <span className="price">33.90</span>
                  <span className="period">/Month</span>
                </div>
                <ul className="list">
                  <li className="active">Unlimited Reservations</li>
                  <li className="active">2 Clients and Products</li>
                  <li className="active">Invoicing and Payments</li>
                  <li className="active">Housekeeping Status</li>
                  <li className="active">Data Security and Backups</li>
                  <li className="active">Unlimited Staff Accounts</li>
                  <li className="active">Web Booking Widget</li>
                  <li className="active">Monthly Reports and Analytics</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#">Select Plan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
