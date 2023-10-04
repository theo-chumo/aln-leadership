import React from "react";
import { Link } from "react-router-dom";

const BusinessType = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
              <h4>
                <b>How is your Business Registered?</b>
              </h4>
              <p>
                <i>Zero Weight.</i>
              </p>
              <div className="email-box">
                <ul>
                  <li>1. Private Limited Company</li>
                  <li>2. Branch of a Foreign Company</li>
                  <li>3. Company limited by Guarantee</li>
                  <li>4. Non Government Organization</li>
                  <li>5. Partnerships</li>
                </ul>
                <br />
                <button type="button">
                  <b>
                    <Link to="/Industry">Next</Link>
                  </b>
                </button>
                {"      "}
                <button type="button">
                  <Link to="/ContactInformation">Previous</Link>
                </button>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessType;
