import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import "./Chart.css";

function Chart({ title, data, dataKey, grid, LineKey }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <div className="chartContainer">
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey={dataKey} stroke="gray" />
            <YAxis />
            <Line
              type="monotone"
              dataKey={LineKey}
              stroke="gray"
              activeDot={{ r: 6 }}
            />
            <Tooltip />
            <Legend />
            {grid && <CartesianGrid strokeDasharray="3 3" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
