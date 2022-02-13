import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const CandleGraph = (props) => {
  // const [series, setSeries] = useState([]);

  const options = {
    chart: {
      type: "candlestick",
      height: 350, 
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  // useEffect(() => {
  //     setSeries([
  //         {
  //             data: props.graphData,
  //         },
  //     ]);

  // }, []);

  console.log(props.graphData);
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={[
          {
            data: props.graphData,
          },
        ]}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default CandleGraph;
