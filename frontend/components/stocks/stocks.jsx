import React, { useState, useEffect } from "react";
import { fetchAllStocksAPI } from "../../util/stocks_api_util";

const Stocks = ({ stocks, fetchStocks }) => {
  const [allStocks, setAllStocks] = useState([]);
  const [filterStocks, setfilterStocks] = useState("");

  useEffect(() => {
    //Local state
    fetchAllStocksAPI(window.finnhubAPIKey).then((stock) =>
      setAllStocks(stock)
    );
    //Get all stocks into global state
    // fetchStocks(wi ndow.finnhubAPIKey);
  }, []);
  // console.log(allStocks);
  // console.log(stocks);

  const handleFilterChange = (e) => setfilterStocks(e.target.value);

  const filteredStocks = allStocks.filter((stock) => {
    return (
      stock.description.toLowerCase().indexOf(filterStocks) !== -1 ||
      stock.symbol.toLowerCase().indexOf(filterStocks) !== -1
    );
  });

  console.log(filterStocks);
  // console.log(allStocks);

  return (
    <div>
      <input type="text" value={filterStocks} onChange={handleFilterChange} />
      {filteredStocks.map((stock, i) => (
        <div key={i}>
          <p>
            {stock.symbol} - {stock.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stocks;
