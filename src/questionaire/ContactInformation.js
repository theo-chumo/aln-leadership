import React from "react";
import { Link } from "react-router-dom";

const ContactInformation = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
              <h4>
                <b>Contact Person Information</b>
              </h4>
              <br />

              <div className="email-box">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter First Name"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Last Name"
                    />
                  </div>

                  <button type="button">
                    <Link to="/DataProtectionNotice">Previous</Link>
                  </button>
                  {"      "}
                  <button type="button">
                    <b>
                      <Link to="/BusinessType">Next</Link>
                    </b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
