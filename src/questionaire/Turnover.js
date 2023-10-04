import React from "react";
import { Link } from "react-router-dom";

const Turnover = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
              <h4>
                <b>
                  What was your approximate gross turnover in your last
                  financial year?
                </b>
              </h4>
              <p>It will take about 5 minutes to complete.</p>
              <div className="email-box">
                <ul>
                  <li>1. Less than KES 5,000,000 </li>
                  <li>2. KES 5,000,000 to KES 100,000,000</li>
                  <li>3. Above KES 100,000,000/-</li>
                </ul>
                <br />
                <button type="button">
                  <b>
                    <Link to="/">Next</Link>
                  </b>
                </button>
                {"      "}
                <button type="button">
                  <Link to="/Employees">Previous</Link>
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

export default Turnover;
