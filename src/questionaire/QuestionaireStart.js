import React from "react";
import { Link } from "react-router-dom";

const QuestionaireStart = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
              <h1>Welcome to A&K e-Triage</h1>
              <h2>Begin your Organization's Self Assessment Now.</h2>
              <p>It will take about 2 minutes to complete.</p>
              
              <div className="email-box">
                <button>
                  <Link to="/DataProtectionNotice">Start Now</Link>
                </button>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center">
              <br/>
              <img
                src="https://www.eabusinesstimes.com/wp-content/uploads/2020/03/Anjarwalla-Khanna-AK-office-building.jpg"
                alt="sas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionaireStart;
