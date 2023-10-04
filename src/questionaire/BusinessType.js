import React from "react";
import { Link } from "react-router-dom";

const BusinessType = () => {
  const alignLeft = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

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
                    Private Limited Company
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
                    Branch of a Foreign Company
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
                    Company limited by Guarantee
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
                    Non Government Organization
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
                    Partnerships
                  </label>
                </div>
                <br />

                <div className="email-box">
                  <button type="button">
                    <Link to="/ContactInformation">Previous</Link>
                  </button>
                  {"      "}
                  <button type="button">
                    <b>
                      <Link to="/Industry">Next</Link>
                    </b>
                  </button>
                </div>
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
