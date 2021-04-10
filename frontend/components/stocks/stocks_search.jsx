import React from "react";
import StocksList from "./stocks_list";

const StocksSearch = ({ filterStocks, handleFilterChange, allStocks }) => {
  return (
    <div>
      <input
        type="text"
        value={filterStocks}
        onChange={handleFilterChange}
        placeholder="Search"
      />
      <StocksList
        allStocks={allStocks}
        filterStocks={filterStocks}
      />
    </div>
  );
};

export default StocksSearch;
