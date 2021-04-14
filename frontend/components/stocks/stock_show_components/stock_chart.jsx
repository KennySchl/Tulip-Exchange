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
  const [lineColor, setLineColor] = useState("");
  const [hoverTime, setHoverTime] = useState("");
  const [hoverPrice, setHoverPrice] = useState(currentPrice.c);

  useEffect(() => {
    currentLineColor();
  });

  //UNIX TIME CALCULATIONS
  // const dateNow = Math.floor(Date.now() / 1000);
  const marketOpen = new Date().setHours(3, 0, 0, 0) / 1000;
  const marketClose = new Date().setHours(12, 0, 0, 0) / 1000;

  const currentLineColor = () => {
    if (intraDayData.o[0] - intraDayData.o[data.length - 1] < 0) {
      setLineColor("rgb(0,200,5)");
    } else {
      setLineColor("rgb(255,80,0)");
    }
  };

  const handleMouseHover = (e) => {
    if (e.activePayload) {
      let priceHovered = e.activePayload[0].payload.value;
      let timeHovered = e.activePayload[0].payload.time;
      setHoverTime(timeHovered);
      setHoverPrice(priceHovered);
    }
  };

  const resetHoverPrice = () => {
    setHoverPrice(currentPrice.c);
  };

  const handleHoverTime = () => {
    console.log(hoverTime);
    return (
      <div className="hover-time">
        {new Date(hoverTime * 1000).toLocaleTimeString(["en-US"], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    );
  };
  // const oneDay = 86400;
  // const d = dateNow - oneDay;
  // const w = dateNow - oneDay * 7;
  // const m = dateNow - oneDay * 30;
  // const sixtyMin = dateNow - oneDay / 24;
  // const thirtyMin = dateNow - oneDay / 48;
  // const fifteenMin = dateNow - oneDay / 96;
  // const fiveMin = dateNow - fifteenMin / 3;
  // const oneMin = dateNow - fiveMin / 5;

  let data = [];
  let dataValueAVG = [];

  for (let i = 0; i < intraDayData.t.length; i++) {
    data.push({ value: intraDayData.o[i], time: intraDayData.t[i] });
    dataValueAVG.push(intraDayData.o[i]);
  }

  const renderLineChart = (
    <LineChart
      width={676}
      height={196}
      data={data}
      onMouseMove={handleMouseHover}
      onTouchStart={handleMouseHover}
      onMouseLeave={resetHoverPrice}
      className="stock-line-chart"
    >
      <Line
        type="monotone"
        type="linear"
        dataKey="value"
        stroke={lineColor}
        strokeWidth={2}
        dot={false}
      />
      <ReferenceLine
        y={dataValueAVG.reduce((a, b) => a + b) / dataValueAVG.length}
        strokeDasharray="2 2"
      />
      <XAxis
        dataKey="time"
        type="number"
        domain={[marketOpen, marketClose]}
        hide
      />
      <YAxis
        dataKey="value"
        type="number"
        domain={[
          intraDayData.o[0] * 0.99,
          intraDayData.o[intraDayData.o.length - 1] / 0.99,
        ]}
        hide
      />
      <Tooltip
        content={handleHoverTime}
        cursor={{ stroke: "black", strokeWidth: 0.5 }}
        isAnimationActive={false}
        offset={-20}
        position={{ y: -25 }}
      />
    </LineChart>
  );

  return (
    <div>
      <Odometer value={hoverPrice} className="stocks-chart-price" />
      {renderLineChart}
    </div>
  );
};

export default StockChart;
