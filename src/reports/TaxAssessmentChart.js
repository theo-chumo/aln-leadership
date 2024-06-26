import React from "react";
import {
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

const RadarChartExample = () => {
  const data = [
    { category: "Scoring", value: 7 },
    { category: "Financials", value: 5 },
    { category: "Documentation", value: 9 },
    { category: "Reporting", value: 6 },
    { category: "Transactions", value: 8 },
  ];

  return (
    <div>
      <div className="welcome-area" id="welcome">
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
                <h3>Evaluation Completed Successfully.</h3>
                <p>Click to the button below to access your free Report.</p>

                <div className="email-box">
                  <button>
                    <Link to="https://drive.google.com/file/d/1l7XNXuEbCRfy5T0YI2vKx9RvYSq4xj7s/view?usp=sharing">
                      Access Your Personalized Report Now
                    </Link>
                  </button>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center">
                <br />
                <h2>Your Tax Risk Exposure</h2>
                <RadarChart
                  outerRadius={90}
                  width={400}
                  height={400}
                  data={data}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis angle={30} domain={[0, 10]} />
                  <Radar
                    name="Tax Audit Risk Exposure"
                    dataKey="value"
                    stroke="#800020"
                    fill="#6C403E"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadarChartExample;
