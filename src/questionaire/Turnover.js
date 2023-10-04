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

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
               

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                Less than KES 5,000,000
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                KES 5,000,000 to KES 100,000,000
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                Above KES 100,000,000/-
                </label>
              </div>
              <br/>

              </div>

              <div className="email-box">
             

                <button type="button">
                  <Link to="/Employees">Previous</Link>
                </button>
                {"      "}
                <button type="button">
                  <b>
                    <Link to="/TaxAssessmentChart">Next</Link>
                  </b>
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
