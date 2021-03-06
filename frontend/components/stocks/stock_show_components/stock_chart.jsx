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
import { DateTime } from "luxon";

const StockChart = ({ currentPrice, intraDayData }) => {
  const [lineColor, setLineColor] = useState("");
  const [hoverTime, setHoverTime] = useState("");
  const [hoverPrice, setHoverPrice] = useState(currentPrice.c);

  useEffect(() => {
    currentLineColor();
  });
  //UNIX TIME CALCULATIONS

  let marketOpen, marketClose;

  if (DateTime.now().weekday > 5) {
    if (DateTime.now().weekday === 6) {
      marketOpen =
        DateTime.fromObject({
          day: DateTime.now().day - 1,
          hour: 9,
          zone: "America/New_York",
        }) / 1000;
      marketClose =
        DateTime.fromObject({
          day: DateTime.now().day - 1,
          hour: 18,
          zone: "America/New_York",
        }) / 1000;
    } else if (DateTime.now().weekday === 7) {
      marketOpen =
        DateTime.fromObject({
          day: DateTime.now().day - 2,
          hour: 9,
          zone: "America/New_York",
        }) / 1000;
      marketClose =
        DateTime.fromObject({
          day: DateTime.now().day - 2,
          hour: 18,
          zone: "America/New_York",
        }) / 1000;
    }
  } else {
    marketOpen =
      DateTime.fromObject({
        hour: 9,
        zone: "America/New_York",
      }) / 1000;
    marketClose =
      DateTime.fromObject({
        hour: 18,
        zone: "America/New_York",
      }) / 1000;
  }

  // const marketOpen =
  //   DateTime.fromObject({ hour: 9, zone: "America/New_York" }) / 1000;
  // const marketClose =
  //   DateTime.fromObject({ hour: 18, zone: "America/New_York" }) / 1000;
  // const marketOpen = new Date().setHours(3, 0, 0, 0) / 1000;
  // const marketClose = new Date().setHours(12, 0, 0, 0) / 1000;

  const currentLineColor = () => {
    if (intraDayData.o[0] - intraDayData.o[data.length - 1] < 0) {
      setLineColor("rgb(60, 245, 88)");
    } else {
      setLineColor("rgb(255,158,255)");
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
    // console.log(hoverTime);
    return (
      <div className="hover-time">
        {new Date(hoverTime * 1000).toLocaleTimeString(["en-US"], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    );
  };

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
      <div className="stocks-chart-price">
        $<Odometer value={hoverPrice} className="stock-chart-price-odometer" />
      </div>

      {renderLineChart}
    </div>
  );
};

export default StockChart;
