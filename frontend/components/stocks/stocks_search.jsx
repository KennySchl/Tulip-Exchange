import React from "react";
import StocksList from "./stocks_list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const StocksSearch = ({ filterStocks, handleFilterChange, stocks }) => {
  return (
    <div className="stocks-search-bar">
      <FontAwesomeIcon icon={faSearch} className="loupe-icon" />
      <input
        type="text"
        value={filterStocks}
        onChange={handleFilterChange}
        placeholder="Search"
        className="stocks-search"
      />
      <StocksList filterStocks={filterStocks} stocks={stocks} />
    </div>
  );
};

export default StocksSearch;
