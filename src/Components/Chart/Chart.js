import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.chartdatas.map(chartdata => chartdata.value);
    const totalmax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.chartdatas.map((chartdata) => {
        return (
        <ChartBar 
        key={chartdata.label}
        value={chartdata.value} 
        maxValue={totalmax} 
        label={chartdata.label} />
        )
      })}
    </div>
  );
};
export default Chart;
