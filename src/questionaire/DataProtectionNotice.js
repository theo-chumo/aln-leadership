import React from "react";
import { Link } from "react-router-dom";

const DataProtectionNotice = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="alert alert-success" role="alert">
            <b>⚠️ Welcome to ALN Compliance Health Check  Toolkit. ⚠️</b> <br />
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
            <button type="button">
              <Link to="/">Reject and Close</Link>
            </button>
            {"      "}
            <button type="button">
              <b>
                <Link to="/ContactInformation">Consent and Proceed</Link>
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProtectionNotice;
