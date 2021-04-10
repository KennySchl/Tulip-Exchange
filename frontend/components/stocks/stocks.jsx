import React, { useState, useEffect } from "react";
import { fetchAllStocksAPI } from "../../util/stocks_api_util";
import StocksSearch from "./stocks_search";


const Stocks = ({ stocks, fetchStocks }) => {
  const [allStocks, setAllStocks] = useState([]);
  const [filterStocks, setfilterStocks] = useState("");
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    //Local state
    fetchAllStocksAPI(window.finnhubAPIKey).then((res) => setAllStocks(res));
    //Get all stocks into global state
    // fetchStocks(window.finnhubAPIKey);
    setLoading(false)

    render()
  }, []);

  const handleFilterChange = (e) => setfilterStocks(e.target.value);

  // console.log(filterStocks);
  // console.log(allStocks);

  const render = () => loading ? <div>LOADING</div> : <StocksSearch
    handleFilterChange={handleFilterChange}
    filterStocks={filterStocks}
    allStocks={allStocks}
  />


  return (
    <div>
   {render()}
    </div>
  );
};

export default Stocks;
