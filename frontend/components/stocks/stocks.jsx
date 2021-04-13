import React, { useState } from "react";
import StocksSearch from "./stocks_search";

const Stocks = ({ stocks }) => {
  const [filterStocks, setfilterStocks] = useState("");
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
