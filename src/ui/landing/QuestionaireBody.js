import React from "react";

const QuestionaireBody = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="alert alert-success" role="alert">
            <b>⚠️ Welcome to A&K Tax Health Check Toolkit. ⚠️</b> <br />
            <br />
            In line with the Data Protection Act, we are required to notify you
            that by using this toolkit, you consent to have the information you
            will share on the toolkit being stored and used by Anjarwalla &
            Khanna for purposes of providing you with advice relating to your
            tax health status.
            <br />
            <br /> Your contact information may also be used to share alerts and
            other information with you relating to legal and tax developments in
            your industry. The information you provide to us shall not be shared
            with any third party other than employees of Anjarwalla & Khanna for
            the purposes stated herebefore.
            <br />
            <br />
            <button type="button" class="btn btn-primary">
              <b>Consent and Proceed</b>
            </button>
            {"      "}
            <button type="button"  class="btn btn-warning">
              <b><a href="https://www.aln.africa">Reject and Close</a></b>
            </button>
          </div>
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
                  <label for="test">
                    <b>First Name: </b>
                  </label>
                  <input placeholder="First Name" />
                  <br />
                  <br />
                  <label for="test">
                    <b>Last Name: </b>
                  </label>
                  <input placeholder="Last Name" />
                  <br />
                  <br />
                  <label for="test">
                    <b>Phone: </b>
                  </label>
                  <input placeholder="Phone Number" />
                  <br />
                  <br />
                  <label for="test">
                    <b>Name of Business: </b>
                  </label>
                  <input placeholder="Name of Business" />
                  <br />
                  <br />
                  <label for="test">
                    <b>Email Address: </b>
                  </label>
                  <input placeholder="Email Address" />
                  <br />
                  <br />
                  <button>Start Now</button>
                </form>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center"></div>
          </div>
          <br />

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
                <button>Start Now</button>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center"></div>
          </div>
          <br />

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

              <button>Next</button>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center"></div>
          </div>

          <br />

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
                <button>Next</button>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center"></div>
          </div>

          <br />

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
                <button>Next</button>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionaireBody;
