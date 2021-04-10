import React from "react";
const titleize = require("titleize");

const StocksList = ({ allStocks, filterStocks }) => {
  const filteredStocks = allStocks.filter((stock) => {
    return (
      stock.description.toLowerCase().indexOf(filterStocks.toLowerCase()) !==
        -1 ||
      stock.symbol.toLowerCase().indexOf(filterStocks.toLowerCase()) !== -1
    );
  });

  console.log(filteredStocks);
  console.log(allStocks);
  const stockSearchList =
    filteredStocks === [] ? (
      <p>We were unable to find any results for your search.</p>
    ) : filteredStocks.length > 6 ? (
      <div></div>
    ) : (
      filteredStocks.map((stock, i) => (
        <div key={i}>
          <p>
            {stock.symbol} - {titleize(stock.description)}
          </p>
        </div>
      ))
    );

  return <div>{stockSearchList}</div>;
};

export default StocksList;
