import React from "react";
import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
              <h4>
                <b>How many employees do you have?</b>
              </h4>
              <p>It will take about 5 minutes to complete.</p>
              <div className="email-box">
                <ul>
                  <li>1. 0 - 10</li>
                  <li>2. 10 - 50</li>
                  <li>3. 50 - 100</li>
                  <li>4. Above 100</li>
                </ul>
                <br />
                <button type="button">
                  <b>
                    <Link to="/Turnover">Next</Link>
                  </b>
                </button>
                {"      "}
                <button type="button">
                  <Link to="/Industry">Previous</Link>
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

export default Employees;
