import React from "react";
import { Link } from "react-router-dom";
const titleize = require("titleize");

const StocksList = ({ filterStocks, stocks }) => {
  const filteredStocks = Object.values(stocks).filter((stock) => {
    return (
      stock.name.toLowerCase().indexOf(filterStocks.toLowerCase()) !== -1 ||
      stock.symbol.toLowerCase().indexOf(filterStocks.toLowerCase()) !== -1
    );
  });

  const stockSearchList =
    filteredStocks.length === 0 ? (
      <tr className="search-list-item">
        <td className="search-list-description">
          We were unable to find any results for your search.
        </td>
      </tr>
    ) : filteredStocks.length > 10 ? (
      <tr>
        <td></td>
      </tr>
    ) : (
      filteredStocks.map((stock, i) => (
        <tr key={i} className="search-list-item">
          <td className="search-list-symbol">
            <Link to={`/stocks/${stock.symbol}`}>{stock.symbol}</Link>
          </td>
          <td className="search-list-description">
            <Link to={`/stocks/${stock.symbol}`}>{titleize(stock.name)}</Link>
          </td>
        </tr>
      ))
    );

  return (
    <div>
      <table className="stock-search-list">
        {/* <thead>
          <tr>
            <th></th>
          </tr>
        </thead> */}
        <tbody className="stock-search-list-items">{stockSearchList}</tbody>
      </table>
    </div>
  );
};

export default StocksList;
