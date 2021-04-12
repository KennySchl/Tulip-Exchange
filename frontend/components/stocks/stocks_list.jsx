import React from "react";
import { Link } from "react-router-dom";
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
  // console.log(allStocks);
  const stockSearchList =
    filteredStocks.length === 0 ? (
      <tr>
        <td>We were unable to find any results for your search.</td>
      </tr>
    ) : filteredStocks.length > 6 ? (
      <tr>
        <td></td>
      </tr>
    ) : (
      filteredStocks.map((stock, i) => (
        <div key={i}>
          <tr>
            <td><Link to={`/stocks/${stock.symbol}`} />{stock.symbol}</td>
            <td><Link to={`/stocks/${stock.symbol}`} />{titleize(stock.description)}</td>
          </tr>
        </div>
      ))
    );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>{stockSearchList}</tbody>
      </table>
    </div>
  );
};

export default StocksList;