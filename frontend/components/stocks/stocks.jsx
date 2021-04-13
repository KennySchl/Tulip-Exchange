import React, { useState, useEffect } from "react";
import StocksSearch from "./stocks_search";

const Stocks = ({ stocks, fetchStocks }) => {
  const [filterStocks, setfilterStocks] = useState("");

  useEffect(() => {
    // fetchStocks(window.finnhubAPIKey);
  }, []);
  // console.log(stocks);
  const handleFilterChange = (e) => setfilterStocks(e.target.value);

  return (
    <div>
      <StocksSearch
        handleFilterChange={handleFilterChange}
        filterStocks={filterStocks}
        stocks={stocks}
      />
    </div>
  );
};

export default Stocks;
