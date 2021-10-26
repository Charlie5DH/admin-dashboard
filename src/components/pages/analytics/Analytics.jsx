import React from "react";
import "./Analytics.css";
import { userData } from "../../charts/DummyData";
import Chart from "../../charts/Chart";

function Analytics() {
  return (
    <div className="analytics">
      <h1 className="analyticsTitle">Analytics</h1>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="name"
        LineKey="Active_User"
      />
    </div>
  );
}

export default Analytics;
