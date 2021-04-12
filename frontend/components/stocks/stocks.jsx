import React, { useState, useEffect } from "react";
import { fetchAllStocksAPI } from "../../util/stocks_api_util";
import StocksSearch from "./stocks_search";

const Stocks = ({ stocks, fetchStocks }) => {
  const [allStocks, setAllStocks] = useState([]);
  const [filterStocks, setfilterStocks] = useState("");

  useEffect(() => {
    //Local state
    fetchAllStocksAPI(window.finnhubAPIKey).then((res) => setAllStocks(res));
  }, []);

  const handleFilterChange = (e) => setfilterStocks(e.target.value);

  return (
    <div>
      <StocksSearch
        handleFilterChange={handleFilterChange}
        filterStocks={filterStocks}
        allStocks={allStocks}
      />
    </div>
  );
};

export default Stocks;
