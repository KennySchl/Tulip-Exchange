import React, { useState, useEffect } from "react";

const Stocks = ({ stocks, fetchAllStocksAPI }) => {
  const [allStocks, setAllStocks] = useState([]);
  const [filterStocks, setfilterStocks] = useState("");

  useEffect(() => {
    fetchAllStocksAPI(window.finnhubAPIKey);
    setAllStocks(stocks);
    
    console.log(stocks);
  }, []);
    console.log(stocks);
    console.log(allStocks);


  // const handleFilterChange = (e) => setfilterStocks(e.target.value);

  // const filteredStocks = allStocks.filter(stock => {
  //   return stock.description.toLowerCase().indexOf(filterStocks) !== -1
  // })

  // console.log(filterStocks);
  // console.log(allStocks);

  return (
  <div>
    {/* <input type="text" value={filterStocks} onChange={handleFilterChange} /> */}
  </div>
  )};

export default Stocks;
