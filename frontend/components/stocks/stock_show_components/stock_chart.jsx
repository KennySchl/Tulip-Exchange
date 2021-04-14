import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  Tooltip,
  YAxis,
  XAxis,
  ReferenceLine,
} from "recharts";
import Odometer from "react-odometerjs";

const StockChart = ({ currentPrice, intraDayData }) => {
  const [odometer, setOdometer] = useState(0.0);
  const [resolution, setResolution] = useState("D");
  const [values, setValues] = useState([]);

  // useEffect(() => {
  //   let empty = [];
  //   data.forEach((price) => {
  //     empty.push({ values: price });
  //   });
  //   setValues(empty)
  // },[]);
  // const [response, setResponse] = useState({});
  // const [dateNow, setDateNow] = useState(Math.floor(Date.now() / 1000));
  // console.log(currentPrice.c);
  // useEffect(() => {
  //   setOdometer(currentPrice.c);
  // });

  //UNIX TIME CALCULATIONS
  // const dateNow = Math.floor(Date.now() / 1000);
  // let response;
  const marketOpen = new Date().setHours(3, 0, 0, 0);
  const marketClose = new Date().setHours(12, 0, 0, 0);

  // const oneDay = 86400;
  // const d = dateNow - oneDay;
  // const w = dateNow - oneDay * 7;
  // const m = dateNow - oneDay * 30;
  // const sixtyMin = dateNow - oneDay / 24;
  // const thirtyMin = dateNow - oneDay / 48;
  // const fifteenMin = dateNow - oneDay / 96;
  // const fiveMin = dateNow - fifteenMin / 3;
  // const oneMin = dateNow - fiveMin / 5;
  // const data = [];

  // useEffect(() => {
  //   //RESOLUTION === 1, 5, 15, 30, 60, D, W, M
  //   //FROM/TO === UNIX TIMESTAMP
  //   //CURRENT TIME UNIX ---- Math.floor(Date.now()/1000)
  //   fetchStockIntradayAPI(
  //     stockSymbol,
  //     d,
  //     dateNow,
  //     window.finnhubAPIKey
  //   ).then((res) => response = res);
  //   lineData()
  // }, []);
  // console.log(response);
  // console.log(data);
  // useEffect(()=>{
  //     lineData()

  // },[intraDayData])

  // setTimeout(() => {
  //   if (typeof intraDayData.o !== "undefined") {
  //
  //     }
  //   }
  // }, 5000);

  // console.log(data);
  let data = [];
  let dataValueAVG = [];
  // let lineColor = intraDayData.o[0];
  for (let i = 0; i < intraDayData.o.length; i++) {
    data.push({ value: intraDayData.o[i], time: intraDayData.t[i] });
    dataValueAVG.push(intraDayData.o[i]);
  }

  const none = () => "none";

  console.log(intraDayData.o);
  console.log(intraDayData.t);
  console.log(data);

  const renderLineChart = (
    <LineChart width={676} height={196} data={data}>
      <Line
        type="monotone"
        type="linear"
        dataKey="value"
        stroke="GREEN"
        strokeWidth={1}
        dot={false}
      />
      <ReferenceLine
        y={dataValueAVG.reduce((a, b) => a + b) / dataValueAVG.length}
        strokeDasharray="2 2"
      />
      <XAxis dataKey="time" domain={[marketOpen, marketClose]} hide />
      <YAxis
        dataKey="value"
        type="number"
        domain={[
          intraDayData.o[0] * 0.99,
          intraDayData.o[data.length - 1] / 0.99,
        ]}
        hide
      />
      <Tooltip content={none} cursor={{ stroke: "black", strokeWidth: 0.5 }} />
    </LineChart>
  );

  return (
    <div>
      <Odometer value={currentPrice.c} />
      {renderLineChart}
    </div>
  );
};

export default StockChart;
