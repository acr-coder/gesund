import React, { useState } from "react";
import "./deployments.css";
import DonutChart from "react-donut-chart";

export const Deployments = () => {
  const [serviceHealthSummary, setServiceHealthSummary] = useState({
    passing:7,
    atRisk:1,
    failing:1
  })
  return (
    <div className="container">
      <h2>Deployments</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 ">
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="title">Active Deployments</h5>
              <h1>72</h1>
              <h5>0 inactive</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="title">Active Deployments</h5>
              <h1>
                1.40M <sup>(-3.4%)</sup>
              </h1>
              <h5>0 inactive</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Service Health Summary</h5>
              <DonutChart height={80} width={80} startAngle={270}
              colors={['#1ABC9C', '#FFB806', '#F24C42',]}
                data={[
                  {
                    label: `${serviceHealthSummary.passing} Passing `,
                    value: serviceHealthSummary.passing,
                    color:'#9c27b0'
                  },
                  {
                    label: "At Risk",
                    value: 1,
                    
                  },
                  {
                    label: "Failing",
                    value: 1,
                    
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Active Deployments</h5>
              <h1>72</h1>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Active Deployments</h5>
              <h1>72</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
