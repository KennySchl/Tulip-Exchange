import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { createWatchlistItem } from "../../../util/watchlists_api_util";

const AddToLists = ({ stocks, watchlists, stockSymbol }) => {
  const [stockId, setStockId] = useState(0);
  const [checkedLists, setCheckedLists] = useState("");

  useEffect(() => {
    stocks.forEach((stock) => {
      stockSymbol === stock.symbol ? setStockId(stock.id) : "";
    });
  });
console.log(watchlists);
  console.log(stockId);
  console.log(checkedLists);

  const watchlistItemCreate = (currentUserId) => {
    const listItem = { stockId: stockId, watchlistId: 1 };
    createWatchlistItem(currentUserId, listItem.watchlistId, listItem);
  };

  const handleCheckedLists = (e) => {
    const { id, name } = e.target;
   
    // setCheckedLists({ ...checkedLists, [id]: e.target.checked });
    setCheckedLists(parseInt(id));
  };

  return (
    <div className="chart-button-container">
      <div className="add-stock-watchlist-button">
        <FontAwesomeIcon icon={faCheck} />
        Add to Lists
      </div>
      {watchlists.map((list, i) => (
        <div key={i}>
          <input
            type="radio"
            name="lists"
            id={list.id}
            watchlistitems={list.watchlistItems}
            onChange={handleCheckedLists}
          />
          {list.name}
        </div>
      ))}
    </div>
  );
};

export default AddToLists;
