import React from "react";
import { Link } from "react-router-dom";

const Industry = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
              <h4>
                <b>Nature of Business or Industry</b>
              </h4>
              <p>
                <i>Zero Weight.</i>
              </p>

              <ul>
                <li>1. Professional Services.</li>
                <li>2. Financial or Insurance Services.</li>
                <li>3. Food & Beverages.</li>
                <li>4. Manufacturing & Assembly.</li>
                <li>5. Wholesale & Retail.</li>
                <li>6. Betting & Gaming.</li>
              </ul>
              <br />

              <button type="button">
                <b>
                  <Link to="/Employees">Next</Link>
                </b>
              </button>
              {"      "}
              <button type="button">
                <Link to="/BusinessType">Previous</Link>
              </button>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center"></div>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default Industry;
