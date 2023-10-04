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
                <b>Contact Information</b>
              </h4>
              <p>
                <i>Zero Weight.</i>
              </p>
              <div className="email-box">
                <form>
                  <table>
                    <tr>
                      <td>
                        {" "}
                        <label for="test">
                          <b>First Name: </b>
                        </label>
                      </td>
                      <td>
                        {" "}
                        <input placeholder="First Name" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <label for="test">
                          <b>Last Name: </b>
                        </label>
                      </td>
                      <td>
                        <input placeholder="Last Name" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="test">
                          <b>Phone: </b>
                        </label>
                      </td>
                      <td>
                        <input placeholder="Phone Number" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="test">
                          <b>Name of Business: </b>
                        </label>
                      </td>
                      <td>
                        <input placeholder="Name of Business" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <label for="test">
                          <b>Email Address: </b>
                        </label>
                      </td>
                      <td>
                        <input placeholder="Email Address" />
                      </td>
                    </tr>
                  </table>

                  <br />
                  <button type="button">
                    <b>
                      <Link to="/BusinessType">Next</Link>
                    </b>
                  </button>
                  {"      "}
                  <button type="button">
                    <Link to="/DataProtectionNotice">Previous</Link>
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
