import React, { useState, useEffect } from "react";
import { LineChart, Line } from "recharts";
import Odometer from "react-odometerjs";

const StockChart = ({ currentPrice }) => {
  const [odometer, setOdometer] = useState(0.00);


  console.log(currentPrice.c);
  useEffect(() => {
    setOdometer(currentPrice.c);
  });

  console.log(odometer);
  return (
    <div>
      <Odometer value={odometer} />
    </div>
  );
};

export default StockChart;
