import React, { useState } from "react";
import "./deployments.css";
import DonutChart from "react-donut-chart";
import good from '../assets/good.svg'
import risk from '../assets/risk.svg'
import question from '../assets/question.svg'
import up from '../assets/up.svg'
import rect99 from '../assets/R99.svg'

export const Deployments = () => {
  const [serviceHealthSummary, setServiceHealthSummary] = useState({
    passing: 7,
    atRisk: 1,
    failing: 1,
  });
  const [dataDriftSummary, setDataDriftSummary] = useState({
    passing: 7,
    atRisk: 1,
    failing: 1,
  });
  const [accuracySummary, setAccuracySummary] = useState({
    passing: 7,
    atRisk: 1,
    failing: 1,
  });
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Deployments</h2>
        <button type="button" className="add-dep">
          Add Deployment
        </button>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 ">
      <div className="col">
          <div className="card shadow-sm">
            <div className="card-body"  style={{ marginBottom: "8px" }}>
              <h5 className="title">Active Deployments</h5>
              <h1>
                72
              </h1>
              <h5 className="sub" >0 inactive</h5>
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
              <h5 className="sub" >Last 7 days: <span style={{color:"#fff"}} >64 new</span> <img src={up} alt="up" /></h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body" >
              <h5 className="title">Service Health Summary</h5>
              <div style={{ display: "flex" }}>
                <DonutChart
                  height={80}
                  width={80}
                  startAngle={270}
                  legend={false}
                  colors={["#1ABC9C", "#FFB806", "#F24C42"]}
                  data={[
                    {
                      label: `${serviceHealthSummary.passing} Passing `,
                      value: serviceHealthSummary.passing,
                      color: "#9c27b0",
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
                <div className="chart-label">
                  <div className="label-box">
                    <div className="label-point-passing"></div>
                    <h5
                      style={{ color: "white" }}
                    >{`${serviceHealthSummary.passing} Passing`}</h5>
                  </div>
                  <div className="label-box">
                    <div className="label-point-atrisk"></div>
                    <h5
                      style={{ color: "white" }}
                    >{`${serviceHealthSummary.atRisk} At Risk`}</h5>
                  </div>
                  <div className="label-box">
                    <div className="label-point-failing"></div>
                    <h5
                      style={{ color: "white" }}
                    >{`${serviceHealthSummary.failing} Failing`}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body" >
              <h5 className="title">Data Drift Summary</h5>
              <div style={{ display: "flex" }}>
                <DonutChart
                  height={80}
                  width={80}
                  startAngle={270}
                  legend={false}
                  colors={["#1ABC9C", "#FFB806", "#F24C42"]}
                  data={[
                    {
                      label: `${dataDriftSummary.passing} Passing `,
                      value: dataDriftSummary.passing,
                      color: "#9c27b0",
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
                <div className="chart-label">
                  <div className="label-box">
                    <div className="label-point-passing"></div>
                    <h5
                      style={{ color: "white" }}
                    >{`${dataDriftSummary.passing} Passing`}</h5>
                  </div>
                  <div className="label-box">
                    <div className="label-point-atrisk"></div>
                    <h5
                      style={{ color: "white" }}
                    >{`${dataDriftSummary.atRisk} At Risk`}</h5>
                  </div>
                  <div className="label-box">
                    <div className="label-point-failing"></div>
                    <h5
                      style={{ color: "white" }}
                    >{`${dataDriftSummary.failing} Failing`}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="title">Accuracy Summary</h5>
              <div style={{ display: "flex" }}>
                <DonutChart
                  height={80}
                  width={80}
                  startAngle={270}
                  legend={false}
                  colors={["#1ABC9C", "#FFB806", "#F24C42"]}
                  data={[
                    {
                      label: `${accuracySummary.passing} Passing `,
                      value: accuracySummary.passing,
                      color: "#9c27b0",
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
                <div className="chart-label">
                  <div className="label-box">
                    <div className="label-point-passing"></div>
                    <h5
                      style={{ color: "white" }}
                    >{`${accuracySummary.passing} Passing`}</h5>
                  </div>
                  <div className="label-box">
                    <div className="label-point-atrisk"></div>
                    <h5
                      style={{ color: "white" }}
                    >{`${accuracySummary.atRisk} At Risk`}</h5>
                  </div>
                  <div className="label-box">
                    <div className="label-point-failing"></div>
                    <h5
                      style={{ color: "white" }}
                    >{`${accuracySummary.failing} Failing`}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-borderless mt-5">
  <thead>
    <tr>
    <th scope="col" >Deployment Name</th>
              <th scope="col" >Service</th>
              <th scope="col" >Drift</th>
              <th scope="col" >Accurancy</th>
              <th scope="col" >Activity</th>
              <th scope="col" >Avg. Prediction/Day</th>
              <th scope="col" >Last Prediction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td className="dep">ss2019retrain r_dam mono <br /> <span>DataRobot Prediction Server | ss_r_dam_train_20200 ...</span> </td>
      <td className="dep good" > <img src={good} alt="good" /> </td>
      <td className="dep good" > <img src={risk} alt="risk" /> </td>
      <td className="dep good" > <img src={question} alt="question" /> </td>
      <td className="dep ac" >
        <div className="activity">
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
          <div className="fourth"></div>
          <div className="fifth"></div>
          <div className="sixth"></div>
          <div className="seventh"></div>
          <div className="eighth"></div>
          
        </div>
      </td>
      <td className="dep avg" > <p>54K</p></td>
      <td className="dep" >
        <p>31 new <img src={up} alt="up" /></p>
        <p className="sub">a few seconds ago</p>
      </td>
      
    </tr>
    <tr>
      
      <td className="dep">ss2019retrain r_dam mono <br /> <span>DataRobot Prediction Server | ss_r_dam_train_20200 ...</span> </td>
      <td className="dep good" > <img src={good} alt="good" /> </td>
      <td className="dep good" > <img src={good} alt="risk" /> </td>
      <td className="dep good" > <img src={good} alt="question" /> </td>
      <td className="dep ac" >
        <div className="activity">
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
          <div className="fourth"></div>
          <div className="fifth"></div>
          <div className="sixth"></div>
          <div className="seventh"></div>
          <div className="eighth"></div>
          
        </div>
      </td>
      <td className="dep avg" > <p>54K</p></td>
      <td className="dep" >
        <p>31 new <img src={up} alt="up" /></p>
        <p className="sub">a few seconds ago</p>
      </td>
      
    </tr>
    <tr>
      
      <td className="dep">ss2019retrain r_dam mono <br /> <span>DataRobot Prediction Server | ss_r_dam_train_20200 ...</span> </td>
      <td className="dep good" > <img src={good} alt="good" /> </td>
      <td className="dep good" > <img src={good} alt="risk" /> </td>
      <td className="dep good" > <img src={good} alt="question" /> </td>
      <td className="dep ac" >
        <div className="activity">
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
          <div className="fourth"></div>
          <div className="fifth"></div>
          <div className="sixth"></div>
          <div className="seventh"></div>
          <div className="eighth"></div>
          
        </div>
      </td>
      <td className="dep avg" > <p>54K</p></td>
      <td className="dep" >
        <p>31 new <img src={up} alt="up" /></p>
        <p className="sub">a few seconds ago</p>
      </td>
      
    </tr>
    <tr>
      
      <td className="dep">ss2019retrain r_dam mono <br /> <span>DataRobot Prediction Server | ss_r_dam_train_20200 ...</span> </td>
      <td className="dep good" > <img src={good} alt="good" /> </td>
      <td className="dep good" > <img src={good} alt="risk" /> </td>
      <td className="dep good" > <img src={good} alt="question" /> </td>
      <td className="dep ac" >
        <div className="activity">
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
          <div className="fourth"></div>
          <div className="fifth"></div>
          <div className="sixth"></div>
          <div className="seventh"></div>
          <div className="eighth"></div>
          
        </div>
      </td>
      <td className="dep avg" > <p>54K</p></td>
      <td className="dep" >
        <p>31 new <img src={up} alt="up" /></p>
        <p className="sub">a few seconds ago</p>
      </td>
      
    </tr>
  </tbody>
</table>
      
    </div>
  );
};
