import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Fixed ", 5],
  ["Variable", 5],
  ["Accumulation", 5],
];

export const options = {
  backgroundColor: "none",
  legend: { textStyle: { color: "white" } },
};

export function BarChart() {
  return <Chart chartType="PieChart" data={data} options={options} />;
}
