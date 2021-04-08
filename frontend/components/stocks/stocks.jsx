import React, { useState, useEffect } from "react";


const Stocks = ({ stocks, fetchAllStocksAPI }) => {
  const [allStocks, setAllStocks] = useState([]);
  const [filterStock, setfilterStock] = useState("");

  useEffect(() => {
    fetchAllStocksAPI(window.finnhubAPIKey)
    setAllStocks(stocks)
  }, []);
  console.log(allStocks);
  console.log(stocks);
  return <div>TESTING</div>;
};

export default Stocks;
